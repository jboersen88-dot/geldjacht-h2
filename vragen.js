/* Vragenbank economie 2 mavo, hoofdstuk 2 "Jij en je geld" (2.1 t/m 2.4). Alleen open vragen.
   Theorie: c = criteria (allemaal goed = vraag goed), v = voorbeeldantwoord (alleen voor de AI, nooit in beeld).
   Rekenen: maak() geeft {v, tabel?, ant, eenheid, formule} met elke keer nieuwe getallen. */
var MAKKELIJK = [
 {p:"2.1",q:"Noem de drie soorten inkomen.",c:["loon of salaris","winst","uitkering"],v:"Loon, winst en uitkering."},
 {p:"2.1",q:"Wat is een budget?",c:["het bedrag dat je kunt of mag uitgeven (in een bepaalde periode)"],v:"Het bedrag dat je kunt uitgeven."},
 {p:"2.1",q:"Noem de drie groepen uitgaven.",c:["vaste lasten","huishoudelijke of dagelijkse uitgaven","incidentele uitgaven"],v:"Vaste lasten, huishoudelijke uitgaven en incidentele uitgaven."},
 {p:"2.1",q:"Wat zijn vaste lasten? Geef ook één voorbeeld.",c:["uitgaven die steeds terugkomen (elke week, maand of jaar), vaak met een vast bedrag","een passend voorbeeld, zoals huur, abonnement, contributie of verzekering"],v:"Uitgaven die je steeds weer moet betalen, bijvoorbeeld huur."},
 {p:"2.1",q:"Wat zijn incidentele uitgaven? Geef ook één voorbeeld.",c:["uitgaven die je niet vaak (af en toe) doet, vaak grotere bedragen","een passend voorbeeld, zoals een laptop, vakantie, kleding of een fiets"],v:"Uitgaven die je maar af en toe doet, zoals een vakantie."},
 {p:"2.1",q:"Wat is een uitkering? En wie geeft die?",c:["geld dat je krijgt als je (tijdelijk) geen inkomen uit werk hebt of als steun","je krijgt het van de overheid (of een uitkeringsinstantie zoals UWV, SVB of gemeente)"],v:"Geld van de overheid als je bijvoorbeeld geen werk hebt."},
 {p:"2.1",q:"Wie heeft winst als inkomen?",c:["iemand met een eigen bedrijf (ondernemer of zzp'er)"],v:"Een ondernemer met een eigen bedrijf."},
 {p:"2.1",q:"Wat is een begroting?",c:["een overzicht van de inkomsten en uitgaven die je verwacht (voor een periode)"],v:"Een overzicht van je verwachte inkomsten en uitgaven."},
 {p:"2.1",q:"Noem twee manieren waarop jongeren aan geld komen.",c:["een eerste juiste manier, zoals zakgeld, een bijbaantje of geld krijgen voor je verjaardag","een tweede, andere juiste manier"],v:"Zakgeld en een bijbaantje."},
 {p:"2.1",q:"Wat zijn huishoudelijke (dagelijkse) uitgaven? Geef een voorbeeld.",c:["uitgaven die je vaak doet en waarvan je zelf bepaalt hoeveel je uitgeeft","een passend voorbeeld, zoals boodschappen, uitgaan of snoep"],v:"Uitgaven die je vaak doet, zoals boodschappen."},
 {p:"2.2",q:"Noem de drie functies van geld.",c:["ruilmiddel (betaalmiddel)","spaarmiddel","rekenmiddel"],v:"Ruilmiddel, spaarmiddel en rekenmiddel."},
 {p:"2.2",q:"Wat is sparen?",c:["geld niet uitgeven maar bewaren voor later"],v:"Geld bewaren om het later uit te geven."},
 {p:"2.2",q:"Noem de drie spaarmotieven.",c:["sparen om iets te kopen (doelsparen)","sparen voor onverwachte uitgaven (appeltje voor de dorst / zekerheid)","sparen voor later / voor rente (vermogen opbouwen)"],v:"Sparen om iets te kopen, sparen voor onverwachte uitgaven en sparen voor later."},
 {p:"2.2",q:"Wat is rente bij sparen?",c:["een vergoeding (geld) die je van de bank krijgt omdat je geld op de bank zet"],v:"Geld dat de bank jou geeft omdat je spaart."},
 {p:"2.2",q:"Wat betekent het woord procent?",c:["per honderd (een deel van de honderd)"],v:"Per honderd."},
 {p:"2.3",q:"Wat is lenen?",c:["geld gebruiken dat van een ander is en dat je later terugbetaalt"],v:"Geld van een ander gebruiken en later terugbetalen."},
 {p:"2.3",q:"Wat is een maandtermijn?",c:["een vast bedrag dat je elke maand betaalt voor een lening (aflossing en rente)"],v:"Het bedrag dat je elke maand terugbetaalt voor je lening."},
 {p:"2.3",q:"Wat is aflossing?",c:["het terugbetalen van (een deel van) het geleende geld"],v:"Het terugbetalen van het geleende bedrag."},
 {p:"2.3",q:"Vanaf welke leeftijd mag je geld lenen bij een bank?",c:["vanaf 18 jaar"],v:"Vanaf 18 jaar."},
 {p:"2.4",q:"Wat is een verzekering?",c:["je betaalt (premie) aan een verzekeraar en die betaalt (een deel van) de schade als er iets gebeurt"],v:"Je betaalt premie en de verzekeraar betaalt de schade als er iets misgaat."},
 {p:"2.4",q:"Wat is premie?",c:["het bedrag dat je (elke maand of elk jaar) aan de verzekeraar betaalt voor je verzekering"],v:"Het geld dat je betaalt voor je verzekering."},
 {p:"2.4",q:"Noem de twee verplichte verzekeringen.",c:["zorgverzekering (basisverzekering)","WA-verzekering voor een motorvoertuig (auto, scooter, brommer)"],v:"De zorgverzekering en de WA-verzekering."},
 {p:"2.4",q:"Wat is een polis?",c:["het bewijs (contract) van je verzekering"],v:"Het bewijs dat je verzekerd bent."},
 {p:"2.4",q:"Wat is eigen risico?",c:["het deel van de schade dat je zelf moet betalen"],v:"Het deel van de schade dat je zelf betaalt."},
 {p:"2.4",q:"Noem drie vrijwillige verzekeringen.",c:["een eerste vrijwillige verzekering, zoals inboedel, reis, aansprakelijkheid (AVP), fiets, opstal of uitvaart","een tweede, andere vrijwillige verzekering","een derde, andere vrijwillige verzekering"],v:"Inboedelverzekering, reisverzekering en fietsverzekering."},
 {p:"2.4",q:"Wie is de verzekeraar en wie is de verzekerde?",c:["de verzekeraar is het bedrijf (de verzekeringsmaatschappij) dat de schade betaalt","de verzekerde is de persoon die verzekerd is (die premie betaalt)"],v:"De verzekeraar is het bedrijf, de verzekerde ben jij."}
];
var MOEILIJK = [
 {p:"2.1",q:"Waarom mag je een weekbedrag NIET met 4 vermenigvuldigen om het maandbedrag te krijgen?",c:["een maand is (gemiddeld) langer dan 4 weken / een jaar heeft 52 weken en 12 maanden","daarom reken je ×52 en dan :12"],v:"Een maand heeft meer dan 4 weken. Een jaar heeft 52 weken, dus je doet ×52 :12."},
 {p:"2.1",q:"Op welke groep uitgaven kun je het makkelijkst besparen? Leg uit waarom.",c:["huishoudelijke (dagelijkse) uitgaven (of incidentele uitgaven, mits goed uitgelegd)","uitleg: je bepaalt zelf hoeveel je uitgeeft, je kunt het meteen aanpassen; vaste lasten zitten vast aan een contract"],v:"Op huishoudelijke uitgaven, want daar bepaal je zelf hoeveel je uitgeeft. Vaste lasten zitten vast."},
 {p:"2.1",q:"Waarom is het slim om een begroting te maken?",c:["je ziet vooraf of je genoeg geld hebt / of je geld overhoudt of tekortkomt","zodat je op tijd kunt bijsturen of geen schulden maakt"],v:"Dan zie je of je geld overhoudt of tekortkomt en kun je op tijd bijsturen."},
 {p:"2.1",q:"Wat is het verschil tussen loon en winst?",c:["loon krijg je van een werkgever als je in dienst werkt","winst is wat een ondernemer met een eigen bedrijf overhoudt (opbrengst min kosten)"],v:"Loon krijg je van je baas, winst houd je over met je eigen bedrijf."},
 {p:"2.1",q:"Sanne zegt: 'Mijn telefoonabonnement is een huishoudelijke uitgave.' Klopt dat? Leg uit.",c:["nee, het is een vaste last","uitleg: je betaalt het elke maand, vaak met een contract en vast bedrag"],v:"Nee, het is een vaste last, want je betaalt het elke maand met een contract."},
 {p:"2.2",q:"Je kijkt in de winkel: een spijkerbroek kost €60 en een trui €30. Je ziet dat de broek twee keer zo duur is. Welke functie van geld gebruik je hier? Leg uit.",c:["rekenmiddel","uitleg: je gebruikt geld om de waarde van spullen te vergelijken"],v:"Rekenmiddel, want je vergelijkt de waarde van spullen met geld."},
 {p:"2.2",q:"Waarom geeft een bank jou rente als je spaart?",c:["de bank leent jouw spaargeld uit aan anderen (en vraagt daar zelf meer rente voor)","de rente is een beloning/vergoeding omdat de bank jouw geld mag gebruiken"],v:"De bank leent jouw geld uit aan anderen en geeft jou rente als beloning."},
 {p:"2.2",q:"Noem drie dingen waar de hoogte van je rentebedrag van afhangt.",c:["hoeveel geld je spaart (spaarsaldo)","het rentepercentage","hoe lang je het geld laat staan"],v:"Het spaarbedrag, het rentepercentage en hoe lang je spaart."},
 {p:"2.2",q:"Rente op je spaarrekening is ook inkomen. Wat voor soort inkomen is het? Leg uit.",c:["inkomen uit vermogen (bezit) / geen inkomen uit werk","uitleg: je krijgt het omdat je geld hebt, niet omdat je ervoor werkt"],v:"Inkomen uit vermogen: je krijgt het voor je geld, niet voor werk."},
 {p:"2.2",q:"Tim spaart €10 per week omdat hij in de zomer een nieuwe fiets wil. Welk spaarmotief heeft Tim? En welke functie van geld gebruikt hij?",c:["spaarmotief: sparen om iets te kopen (doelsparen)","functie: spaarmiddel"],v:"Sparen om iets te kopen, en geld als spaarmiddel."},
 {p:"2.3",q:"Waarom betaal je bij een lening van de bank in totaal meer terug dan je hebt geleend?",c:["je betaalt rente (kosten van de lening)","de rente is de vergoeding / het verdienmodel van de bank voor het uitlenen van geld"],v:"Je betaalt rente bovenop het geleende bedrag; daar verdient de bank aan."},
 {p:"2.3",q:"Waar kijkt een bank naar voordat je geld mag lenen? Noem twee dingen.",c:["een eerste juist punt: je inkomen (genoeg om terug te betalen)","een tweede juist punt: je leeftijd (18+), je vaste lasten of andere schulden (BKR-registratie)"],v:"Je inkomen en of je al andere schulden hebt."},
 {p:"2.3",q:"Noem twee dingen die je moet bedenken voordat je geld leent.",c:["kan ik de maandtermijnen elke maand betalen?","een tweede punt, zoals: hoeveel kost de lening (rente), hoe lang moet ik betalen, heb ik het echt nodig of kan ik sparen"],v:"Of ik de termijnen kan betalen en hoeveel de lening in totaal kost."},
 {p:"2.3",q:"Een lening in 24 maanden terugbetalen is goedkoper dan in 60 maanden. Leg uit waarom.",c:["je betaalt korter rente (minder maanden rente) / je hebt het geld korter geleend","daardoor zijn de totale kosten lager (ook al is de maandtermijn hoger)"],v:"Je betaalt minder maanden rente, dus totaal minder kosten, al is de termijn per maand hoger."},
 {p:"2.4",q:"Waarom betaal je minder premie als je een hoger eigen risico kiest?",c:["je betaalt bij schade zelf een groter deel","de verzekeraar hoeft dan minder te betalen (minder risico), dus vraagt minder premie"],v:"Je betaalt zelf meer van de schade, dus de verzekeraar hoeft minder te betalen en de premie is lager."},
 {p:"2.4",q:"Hoe kan een verzekeraar alle schades betalen?",c:["heel veel mensen betalen premie","maar bij maar weinig mensen gebeurt er iets, dus van al die premies worden de schades betaald"],v:"Veel mensen betalen premie, maar maar weinig hebben schade."},
 {p:"2.4",q:"Welke schade vergoedt de WA-verzekering? Leg uit.",c:["schade die jij met je voertuig bij een ander (aan andermans spullen of persoon) veroorzaakt","niet de schade aan je eigen voertuig"],v:"Schade die jij bij anderen veroorzaakt, niet schade aan je eigen scooter."},
 {p:"2.4",q:"Noem twee dingen waar de hoogte van de premie van afhangt.",c:["een eerste juist punt, zoals de waarde van wat je verzekert","een tweede juist punt, zoals de kans op schade (risico), je leeftijd, waar je woont of het eigen risico"],v:"De waarde van wat je verzekert en hoe groot de kans op schade is."},
 {p:"2.4",q:"Wat is risico? En noem één ding waar je op let als je kiest of je iets verzekert.",c:["risico is de kans dat er iets misgaat (schade)","een juist punt: hoe groot is de kans, hoe hoog is de schade, kan ik de schade zelf betalen"],v:"Risico is de kans op schade. Je let op of je de schade zelf kunt betalen."},
 {p:"2.4",q:"Wat zijn polisvoorwaarden? Waarom is het belangrijk om ze te lezen?",c:["de regels van je verzekering: wat wel en niet verzekerd is","belangrijk zodat je weet wanneer je wel of geen schadevergoeding krijgt"],v:"De regels van de verzekering. Dan weet je wat wel en niet vergoed wordt."}
];

/* ---------- Rekenvragen ---------- */
function rnd(a,b,stap){stap=stap||1;return a+stap*Math.floor(Math.random()*((b-a)/stap+1));}
function kies(l){return l[Math.floor(Math.random()*l.length)];}
function r2(x){return Math.round(x*100)/100;}
function r1(x){return Math.round(x*10)/10;}
function eu(x){return "€"+x.toLocaleString("nl-NL",{minimumFractionDigits:Number.isInteger(x)?0:2,maximumFractionDigits:2});}
function pc(x){return String(x).replace(".",",")+"%";}
var NAMEN=["Sanne","Noah","Lisa","Daan","Mila","Yusuf","Emma","Sem","Fleur","Milan","Zoë","Jayden","Amira","Luuk"];
/* Tabel met maandtermijnen uit de oefentoets */
var TABEL={bedragen:[5000,15000,25000],maanden:[24,36,60],t:[[225.28,155.82,100.49],[671.40,462.96,269.82],[1119.00,771.62,494.70]]};
var REKEN = [
 function(){var n=kies(NAMEN),w=rnd(8,45),m=r2(w*52/12);return {v:n+" verdient elke week "+eu(w)+" met een bijbaantje. Hoeveel is dat per maand?",ant:m,soort:"geld",formule:"weekbedrag × 52 : 12"};},
 function(){var n=kies(NAMEN),m=rnd(20,90,5),w=r2(m*12/52);return {v:n+" betaalt "+eu(m)+" per maand voor de sportschool. Hoeveel is dat per week?",ant:w,soort:"geld",formule:"maandbedrag × 12 : 52"};},
 function(){var n=kies(NAMEN),s=rnd(40,400,5),bij=rnd(15,120,5),af1=rnd(8,60),af2=rnd(5,40),e=r2(s+bij-af1-af2);
  return {v:n+" heeft "+eu(s)+" op de bankrekening. Er komt "+eu(bij)+" loon bij. Daarna betaalt "+n+" "+eu(af1)+" voor kleding en "+eu(af2)+" voor een cadeau. Wat is het nieuwe saldo?",ant:e,soort:"geld",formule:"oud saldo + bij − af"};},
 function(){var n=kies(NAMEN),zak=rnd(20,60,5),baan=rnd(60,200,10),u1=rnd(10,40),u2=rnd(15,80,5),u3=rnd(5,30),o=zak+baan-u1-u2-u3;
  return {v:n+" maakt een begroting voor één maand. Inkomsten: zakgeld "+eu(zak)+" en bijbaan "+eu(baan)+". Uitgaven: telefoon "+eu(u1)+", kleding "+eu(u2)+" en snoep "+eu(u3)+". Hoeveel houdt "+n+" over (of komt "+n+" tekort)? Schrijf een tekort met een min ervoor.",ant:o,soort:"geld",formule:"inkomsten − uitgaven"};},
 function(){var n=kies(NAMEN),o=rnd(3,12)+kies([0,0.25,0.5,0.75]),nw=r2(o*(1+rnd(5,25)/100));nw=Math.round(nw*20)/20;var p=r1((nw-o)/o*100);
  return {v:n+" verdiende eerst "+eu(o)+" per uur. Na een loonsverhoging is dat "+eu(nw)+". Met hoeveel procent is het loon gestegen? Rond af op 1 decimaal.",ant:p,soort:"procent",formule:"(nieuw − oud) : oud × 100"};},
 function(){var o=rnd(300,1200,10),nw=o-rnd(2,15)*10,p=r1((o-nw)/o*100),ding=kies(["tv","laptop","telefoon","fiets","spelcomputer"]);
  return {v:"Een "+ding+" kostte "+eu(o)+". In de uitverkoop kost hij "+eu(nw)+". Met hoeveel procent is de prijs gedaald? Rond af op 1 decimaal.",ant:p,soort:"procent",formule:"(oud − nieuw) : oud × 100"};},
 function(){var n=kies(NAMEN),s=rnd(150,2500,10),r=kies([1.2,1.5,1.8,2,2.3,2.5,3]),a=r2(r/100*s);
  return {v:n+" heeft "+eu(s)+" op een spaarrekening. De bank geeft "+pc(r)+" rente per jaar. Hoeveel rente krijgt "+n+" na een jaar?",ant:a,soort:"geld",formule:"rentepercentage : 100 × spaarbedrag"};},
 function(){var n=kies(NAMEN),s=rnd(300,2000,50),r=kies([1.2,1.5,1.8,2]),r2_=r+kies([0.3,0.5,0.8,1]);r2_=Math.round(r2_*10)/10;var a=r2(r2_/100*s-r/100*s);
  return {v:n+" heeft "+eu(s)+" gespaard. Bank A geeft "+pc(r)+" rente per jaar, bank B geeft "+pc(r2_)+". Hoeveel euro rente krijgt "+n+" per jaar méér bij bank B?",ant:a,soort:"geld",formule:"rente bank B − rente bank A"};},
 function(){var t=rnd(400,3000,10),pp=kies([5,8,10,12,15,20,25,30,35,40]),a=r2(pp/100*t),ding=kies(["huur","boodschappen","verzekeringen","de vakantie"]);
  return {v:"Een gezin geeft per maand "+eu(t)+" uit. Daarvan gaat "+pp+"% naar "+ding+". Hoeveel euro is dat?",ant:a,soort:"geld",formule:"percentage : 100 × totaal"};},
 function(){var i=rnd(0,2),j=rnd(0,2),b=TABEL.bedragen[i],m=TABEL.maanden[j],tot=r2(TABEL.t[i][j]*m),n=kies(NAMEN);
  return {v:n+" leent "+eu(b)+" bij de bank en betaalt de lening terug in "+m+" maanden. Gebruik de tabel. Hoeveel betaalt "+n+" in totaal terug?",tabel:1,ant:tot,soort:"geld",formule:"maandtermijn × aantal maanden"};},
 function(){var i=rnd(0,2),j=rnd(0,2),b=TABEL.bedragen[i],m=TABEL.maanden[j],k=r2(TABEL.t[i][j]*m-b),n=kies(NAMEN);
  return {v:n+" leent "+eu(b)+" en betaalt terug in "+m+" maanden. Gebruik de tabel. Bereken de kredietkosten (de rente) van deze lening.",tabel:1,ant:k,soort:"geld",formule:"(maandtermijn × aantal maanden) − geleend bedrag"};},
 function(){var i=rnd(0,2),j=rnd(0,2),b=TABEL.bedragen[i],m=TABEL.maanden[j],k=TABEL.t[i][j]*m-b,p=r1(r2(k)/b*100),n=kies(NAMEN);
  return {v:n+" leent "+eu(b)+" en betaalt terug in "+m+" maanden. Gebruik de tabel. Hoeveel procent van het geleende bedrag zijn de kredietkosten? Rond af op 1 decimaal.",tabel:1,ant:p,soort:"procent",formule:"kosten : geleend bedrag × 100 (kosten = termijn × maanden − geleend)"};},
 function(){var i=rnd(0,2),b=TABEL.bedragen[i],j=rnd(1,2),k1=TABEL.t[i][j]*TABEL.maanden[j]-b,k0=TABEL.t[i][0]*24-b,n=kies(NAMEN);
  return {v:n+" leent "+eu(b)+" en wil terugbetalen in "+TABEL.maanden[j]+" maanden. "+n+" kan ook in 24 maanden terugbetalen. Gebruik de tabel. Hoeveel euro bespaart "+n+" dan aan kosten?",tabel:1,ant:r2(k1-k0),soort:"geld",formule:"kosten lange lening − kosten korte lening"};},
 function(){var w=rnd(300,1800,50),e=kies([50,75,100,150,250]),d=kies(["fiets","telefoon","laptop","scooter"]),n=kies(NAMEN);
  return {v:"De "+d+" van "+n+" is gestolen. Hij was "+eu(w)+" waard. Het eigen risico is "+eu(e)+". Hoeveel schadevergoeding krijgt "+n+"?",ant:w-e,soort:"geld",formule:"schade − eigen risico"};},
 function(){var w=rnd(400,1800,50),e=kies([50,75,100,150]),p=r1((w-e)/w*100),n=kies(NAMEN);
  return {v:"Bij "+n+" is er "+eu(w)+" schade. Het eigen risico is "+eu(e)+". Hoeveel procent van de schade krijgt "+n+" vergoed? Rond af op 1 decimaal.",ant:p,soort:"procent",formule:"(schade − eigen risico) : schade × 100"};},
 function(){var m=rnd(4,30)+kies([0,0.5,0.95]),j=r2(m*12),d=kies(["inboedelverzekering","reisverzekering","fietsverzekering"]);
  return {v:"Een "+d+" kost "+eu(m)+" premie per maand. Hoeveel premie betaal je per jaar?",ant:j,soort:"geld",formule:"premie per maand × 12"};}
];
