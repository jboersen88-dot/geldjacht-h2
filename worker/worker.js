// Cloudflare Worker voor het spel "Jij en je geld" (economie 2 mavo H2): groepen, codes, pestkaarten en ranglijst.
// Secrets: SLEUTEL (maakt en controleert codes), PIN (docent). KV-binding: SPEL.
import { DurableObject } from "cloudflare:workers";

// Opslag in één Durable Object (KV had een te lage gratis schrijflimiet: 1000 per dag).
export class Opslag extends DurableObject {
  async lees(k) { return (await this.ctx.storage.get(k)) ?? null; }
  async schrijf(k, v) { await this.ctx.storage.put(k, v); }
  async wis(k) { await this.ctx.storage.delete(k); }
  async lijst(prefix) { return [...(await this.ctx.storage.list({ prefix })).keys()]; }
  // Eenmalig de oude KV-gegevens overnemen; bestaande sleutels niet overschrijven
  async migreer(paren) {
    if (await this.ctx.storage.get("_gemigreerd")) return;
    for (const [k, v] of paren) if ((await this.ctx.storage.get(k)) === undefined) await this.ctx.storage.put(k, v);
    await this.ctx.storage.put("_gemigreerd", "1");
  }
}
function maakDb(env) {
  const o = env.OPSLAG.get(env.OPSLAG.idFromName("spel"));
  return {
    get: k => o.lees(k),
    put: (k, v) => o.schrijf(k, v),
    delete: k => o.wis(k),
    list: async ({ prefix }) => ({ keys: (await o.lijst(prefix)).map(name => ({ name })), list_complete: true }),
    async migreer() {
      if (await o.lees("_gemigreerd")) return;
      const l = await env.SPEL.list({ limit: 1000 });
      const paren = [];
      for (const k of l.keys) { const v = await env.SPEL.get(k.name); if (v != null) paren.push([k.name, v]); }
      await o.migreer(paren);
    },
  };
}

const ALFA = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
const EFFECT = ["weg2", "reken", "dubbel", "slot"];
const ORIGINS = ["https://jboersen88-dot.github.io", "http://localhost:8123"];

async function mac(key, body) {
  const k = await crypto.subtle.importKey("raw", new TextEncoder().encode(key), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const b = new Uint8Array(await crypto.subtle.sign("HMAC", k, new TextEncoder().encode(body)));
  return ALFA[b[0] % 32] + ALFA[b[1] % 32];
}
async function leesCode(env, raw) {
  const c = String(raw || "").toUpperCase().replace(/[^0-9A-Z]/g, "").replace(/O/g, "0").replace(/I/g, "1");
  if (c.length !== 6 || !"EMRPW".includes(c[0])) return null;
  if ((await mac(env.SLEUTEL, c.slice(0, 4))) !== c.slice(4)) return null;
  const n = ALFA.indexOf(c[1]);
  return { c, type: c[0], effect: EFFECT[n % 4], foto: (n % 6) + 1 };
}
const get = async (env, k) => JSON.parse((await env.DB.get(k)) || "null");
// Opslaan mag nooit het spel laten vastlopen (bijv. als de dagelijkse KV-schrijflimiet op is)
const put = async (env, k, v) => { try { await env.DB.put(k, JSON.stringify(v)); return true; } catch { return false; } };

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    const cors = { "Access-Control-Allow-Origin": ORIGINS.includes(origin) ? origin : ORIGINS[0], "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type", "Vary": "Origin" };
    const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { ...cors, "Content-Type": "application/json" } });
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    env = { ...env, DB: maakDb(env) };
    await env.DB.migreer();
    const ronde = (await env.DB.get("ronde")) || "1";

    if (req.method === "GET") {
      const groepen = [];
      let cur;
      do {
        const l = await env.DB.list({ prefix: "g:" + ronde + ":", cursor: cur });
        for (const k of l.keys) { const g = await get(env, k.name); if (g) groepen.push(g); }
        cur = l.list_complete ? null : l.cursor;
      } while (cur);
      return json({ ronde, winnaars: (await get(env, "w:" + ronde)) || [], groepen });
    }
    if (req.method !== "POST") return json({ fout: "Alleen POST" }, 405);
    let b; try { b = await req.json(); } catch { return json({ fout: "Ongeldige invoer" }, 400); }

    if (b.a === "pin") return json({ ok: String(b.pin) === env.PIN });
    if (b.a === "ronde") {
      if (String(b.pin) !== env.PIN) return json({ fout: "Verkeerde pincode" });
      const nieuw = String(Number(ronde) + 1);
      await env.DB.put("ronde", nieuw);
      return json({ ok: true, ronde: nieuw });
    }
    if (b.a === "start") {
      const namen = String(b.namen || "").replace(/[<>]/g, "").slice(0, 60).trim();
      if (!namen) return json({ fout: "Vul jullie namen in" });
      const id = crypto.randomUUID().slice(0, 8);
      const g = { id, namen, foto: 1 + Math.floor(Math.random() * 6), t: Date.now(), stukjes: 0, vragen: 0, reken: 0, mk: 0, mo: 0 };
      await put(env, "g:" + ronde + ":" + id, g);
      return json({ ok: true, ronde, id, foto: g.foto });
    }

    // Vanaf hier: een bestaande groep
    const gk = "g:" + ronde + ":" + String(b.id || "").slice(0, 8);
    const g = await get(env, gk);
    if (!g) return json({ fout: "Jullie spel hoort bij een oude ronde. Vraag de docent.", oud: true });
    const oud = JSON.stringify(g);
    if (b.voortgang) {
      g.stukjes = Number(b.voortgang.stukjes) || 0; g.vragen = Number(b.voortgang.vragen) || 0; g.reken = Number(b.voortgang.reken) || 0; g.mk = Number(b.voortgang.mk) || 0; g.mo = Number(b.voortgang.mo) || 0;
    }
    if (b.a === "voortgang") {
      if (JSON.stringify(g) !== oud) { g.laatst = Date.now(); await put(env, gk, g); } // alleen schrijven als er iets veranderd is
      // Pestkaarten die andere groepen naar deze groep stuurden (zonder afzender)
      const ik = "i:" + ronde + ":" + g.id, inbox = await get(env, ik);
      if (inbox && inbox.length) { try { await env.DB.delete(ik); } catch {} }
      return json({ ok: true, pest: inbox || [] });
    }
    if (b.a === "pest") {
      const code = await leesCode(env, b.code);
      if (!code || code.type !== "P") return json({ fout: "Dit is geen pestkaart." });
      const pk = "p:" + ronde + ":" + code.c, p = await get(env, pk);
      if (!p || p.eigenaar !== g.id) return json({ fout: "Voer de pestkaart eerst in op jullie groene scherm." });
      if (p.slachtoffer) return json({ fout: "Deze pestkaart is al gebruikt." });
      const doel = await get(env, "g:" + ronde + ":" + String(b.doel || "").slice(0, 8));
      if (!doel || doel.id === g.id) return json({ fout: "Kies een andere groep." });
      p.slachtoffer = doel.id; await put(env, pk, p);
      const ik = "i:" + ronde + ":" + doel.id, inbox = (await get(env, ik)) || [];
      inbox.push(code.effect); await put(env, ik, inbox); await put(env, gk, g);
      return json({ ok: true, type: "pestweg", namen: doel.namen });
    }
    if (b.a !== "code") return json({ fout: "Onbekende actie" }, 400);

    const code = await leesCode(env, b.code);
    if (!code) return json({ fout: "Deze code bestaat niet. Kijk goed of je hem goed overneemt." });

    if ("EMR".includes(code.type)) {
      if (!b.wacht) return json({ fout: "Je kunt deze code pas gebruiken als je een vraag goed hebt (groen scherm)." });
      const niveau = { E: "makkelijk", M: "moeilijk", R: "reken" }[code.type];
      if (b.wacht !== niveau) return json({ fout: "Deze code hoort bij een ander soort vraag. Ga terug naar de docent." });
      const uk = "u:" + ronde + ":" + code.c;
      if (await env.DB.get(uk)) return json({ fout: "Deze code is al gebruikt." });
      await put(env, uk, g.id); await put(env, gk, g);
      return json({ ok: true, type: "stuk", niveau, aantal: niveau === "makkelijk" ? 1 : 2 });
    }
    if (code.type === "P") {
      const pk = "p:" + ronde + ":" + code.c, p = await get(env, pk);
      if (p && p.slachtoffer) return json({ fout: "Deze pestkaart is al gebruikt." });
      if (p && p.eigenaar !== g.id) return json({ fout: "Deze pestkaart is van een andere groep." });
      if (!p) {
        if (!b.wacht) return json({ fout: "Een pestkaart voer je in op jullie groene scherm, als je hem van de docent krijgt." });
        await put(env, pk, { eigenaar: g.id }); await put(env, gk, g);
      }
      // Lijst met andere groepen om uit te kiezen (zelf en klaar-groepen niet)
      const groepen = []; let cur;
      do {
        const l = await env.DB.list({ prefix: "g:" + ronde + ":", cursor: cur });
        for (const k of l.keys) { const x = await get(env, k.name); if (x && x.id !== g.id && !x.klaar) groepen.push({ id: x.id, namen: x.namen }); }
        cur = l.list_complete ? null : l.cursor;
      } while (cur);
      return json({ ok: true, type: "pestkies", effect: code.effect, groepen });
    }
    // W = plek-code (QR bij de locatie)
    if (code.foto !== g.foto) return json({ fout: "Dit is niet jullie plek! Kijk nog eens goed naar jullie foto." });
    if (g.reken < 4 || (g.mo || 0) < 3 || (g.mk || 0) < 5) return json({ fout: "Bijna! Jullie moeten eerst 5 makkelijke, 3 moeilijke en 4 rekenvragen goed hebben." });
    const wk = "w:" + ronde, w = (await get(env, wk)) || [];
    let i = w.findIndex(x => x.id === g.id);
    if (i < 0) {
      w.push({ id: g.id, namen: g.namen, foto: g.foto, t: Date.now() }); i = w.length - 1;
      // Nooit een winst tonen die niet is opgeslagen
      if (!(await put(env, wk, w))) return json({ fout: "Opslaan lukte niet. Scan de QR-code over een paar seconden opnieuw." });
    }
    g.klaar = w[i].t; await put(env, gk, g);
    return json({ ok: true, type: "win", plaats: i + 1 });
  },
};
