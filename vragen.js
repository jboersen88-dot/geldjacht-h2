/* Vragenbank economie 2 mavo, hoofdstuk 2 "Jij en je geld" (alleen 2.1 t/m 2.3; 2.4 nog niet uitgelegd). Alleen open vragen.
   Theorie: c = criteria (allemaal goed = vraag goed), v = voorbeeldantwoord (alleen voor de AI, nooit in beeld).
   Rekenen: maak() geeft {v, tabel?, ant, eenheid, formule} met elke keer nieuwe getallen. */
var MAKKELIJK = [
 {p:"2.1",q:"Noem de drie soorten inkomen.",c:["loon of salaris","winst","uitkering"],v:"Loon, winst en uitkering."},
 {p:"2.1",q:"Wat is een budget?",c:["het bedrag dat je kunt of mag uitgeven (in een bepaalde periode)"],v:"Het bedrag dat je kunt uitgeven."},
 {p:"2.1",q:"Noem de drie groepen uitgaven.",c:["vaste lasten","huishoudelijke of dagelijkse uitgaven","incidentele uitgaven"],v:"Vaste lasten, huishoudelijke uitgaven en incidentele uitgaven."},
 {p:"2.1",q:"Wat zijn vaste lasten? Geef ook één voorbeeld.",c:["uitgaven die steeds terugkomen (elke week, maand of jaar), vaak met een vast bedrag","een passend voorbeeld, zoals huur, abonnement, contributie of verzekering"],v:"Uitgaven die je steeds weer moet betalen, bijvoorbeeld huur."},
 {p:"2.1",q:"Wat zijn incidentele uitgaven? Geef ook één voorbeeld.",c:["uitgaven die je niet vaak (af en toe) doet, vaak grotere bedragen","een passend voorbeeld, zoals een laptop, vakantie, kleding of een fiets"],v:"Uitgaven die je maar af en toe doet, zoals een vakantie."},
 {p:"2.1",q:"Wat zijn huishoudelijke (dagelijkse) uitgaven? Geef een voorbeeld.",c:["uitgaven die je vaak doet en waarvan je zelf bepaalt hoeveel je uitgeeft","een passend voorbeeld, zoals boodschappen, uitgaan of snoep"],v:"Uitgaven die je vaak doet, zoals boodschappen."},
 {p:"2.1",q:"Wat is een uitkering? En wie geeft die?",c:["geld dat je krijgt als je (tijdelijk) geen inkomen uit werk hebt of als steun","je krijgt het van de overheid (of een uitkeringsinstantie zoals UWV, SVB of gemeente)"],v:"Geld van de overheid als je bijvoorbeeld geen werk hebt."},
 {p:"2.1",q:"Wie heeft winst als inkomen?",c:["iemand met een eigen bedrijf (ondernemer of zzp'er)"],v:"Een ondernemer met een eigen bedrijf."},
 {p:"2.1",q:"Wat is een begroting?",c:["een overzicht van de inkomsten en uitgaven die je verwacht (voor een periode)"],v:"Een overzicht van je verwachte inkomsten en uitgaven."},
 {p:"2.1",q:"Noem twee manieren waarop jongeren aan geld komen.",c:["een eerste juiste manier, zoals zakgeld, een bijbaantje of geld krijgen voor je verjaardag","een tweede, andere juiste manier"],v:"Zakgeld en een bijbaantje."},
 {p:"2.1",q:"Is huur een vaste last, een huishoudelijke uitgave of een incidentele uitgave? Leg kort uit.",c:["vaste last","uitleg: je betaalt het elke maand, een vast bedrag"],v:"Een vaste last, want je betaalt het elke maand."},
 {p:"2.2",q:"Noem de drie functies van geld.",c:["ruilmiddel (betaalmiddel)","spaarmiddel","rekenmiddel"],v:"Ruilmiddel, spaarmiddel en rekenmiddel."},
 {p:"2.2",q:"Wat is sparen?",c:["geld niet uitgeven maar bewaren voor later"],v:"Geld bewaren om het later uit te geven."},
 {p:"2.2",q:"Noem de drie spaarmotieven.",c:["sparen om iets te kopen (doelsparen)","sparen voor onverwachte uitgaven (appeltje voor de dorst / zekerheid)","sparen voor later / voor rente (vermogen opbouwen)"],v:"Sparen om iets te kopen, sparen voor onverwachte uitgaven en sparen voor later."},
 {p:"2.2",q:"Wat is rente bij sparen?",c:["een vergoeding (geld) die je van de bank krijgt omdat je geld op de bank zet"],v:"Geld dat de bank jou geeft omdat je spaart."},
 {p:"2.2",q:"Je betaalt een broodje in de kantine. Welke functie van geld gebruik je?",c:["ruilmiddel (betaalmiddel)"],v:"Ruilmiddel."},
 {p:"2.3",q:"Wat is lenen?",c:["geld gebruiken dat van een ander is en dat je later terugbetaalt"],v:"Geld van een ander gebruiken en later terugbetalen."},
 {p:"2.3",q:"Wat is een maandtermijn?",c:["een vast bedrag dat je elke maand betaalt voor een lening (aflossing en rente)"],v:"Het bedrag dat je elke maand terugbetaalt voor je lening."},
 {p:"2.3",q:"Wat is aflossing?",c:["het terugbetalen van (een deel van) het geleende geld"],v:"Het terugbetalen van het geleende bedrag."},
 {p:"2.3",q:"Een maandtermijn bestaat uit twee delen. Welke twee delen zijn dat?",c:["aflossing","rente"],v:"Aflossing en rente."},
 {p:"2.3",q:"Noem twee redenen waarom mensen geld lenen.",c:["een eerste juiste reden, zoals iets duurs kopen (auto, huis, scooter)","een tweede, andere reden, zoals studie, een onverwachte uitgave of een bedrijf beginnen"],v:"Een huis kopen en een onverwachte rekening betalen."}
];
var MOEILIJK = [
 {p:"2.1",q:"Ayoub vult vakken bij de Jumbo, zijn moeder heeft een eigen kapsalon en zijn opa krijgt AOW. Welke soort inkomen heeft ieder van hen?",c:["Ayoub: loon (of salaris)","moeder: winst","opa: uitkering"],v:"Ayoub loon, moeder winst, opa een uitkering."},
 {p:"2.1",q:"Zet deze uitgaven in de goede groep: huur, een nieuwe winterjas, boodschappen.",c:["huur = vaste last","winterjas = incidentele uitgave","boodschappen = huishoudelijke (dagelijkse) uitgave"],v:"Huur vaste last, winterjas incidenteel, boodschappen huishoudelijk."},
 {p:"2.1",q:"Daan zegt: 'Mijn Netflix-abonnement is een incidentele uitgave.' Klopt dat? Leg uit.",c:["nee, het is een vaste last","uitleg: je betaalt het elke maand opnieuw, een vast bedrag"],v:"Nee, het is een vaste last omdat je elke maand een vast bedrag betaalt."},
 {p:"2.1",q:"Wat is het verschil tussen een budget en een begroting?",c:["budget: het bedrag dat je kunt uitgeven","begroting: een overzicht van verwachte inkomsten en uitgaven"],v:"Budget is wat je kunt uitgeven, een begroting is het overzicht van inkomsten en uitgaven."},
 {p:"2.1",q:"Mila ziet in haar begroting dat ze elke maand €15 tekortkomt. Noem twee dingen die ze kan doen.",c:["een eerste juiste oplossing: minder uitgeven (bijv. minder snoep of uitgaan)","een tweede, andere oplossing: meer inkomsten (bijbaan, meer uren) of een abonnement opzeggen"],v:"Minder snoep kopen en meer uren werken."},
 {p:"2.1",q:"Jayden verdient €25 per week. Hij zegt: 'Dat is €100 per maand.' Waarom klopt dat niet?",c:["een maand is langer dan 4 weken / een jaar heeft 52 weken en 12 maanden (dus ×52 :12)"],v:"Een maand is meer dan 4 weken; je doet ×52 :12."},
 {p:"2.1",q:"Op welke groep uitgaven kun je het makkelijkst besparen? Leg uit waarom.",c:["huishoudelijke (dagelijkse) uitgaven","uitleg: je bepaalt zelf hoeveel je uitgeeft"],v:"Op huishoudelijke uitgaven, want daar bepaal je zelf hoeveel je uitgeeft."},
 {p:"2.1",q:"Wat is het verschil tussen loon en winst?",c:["loon krijg je van een werkgever als je bij een bedrijf werkt","winst heb je als je een eigen bedrijf hebt"],v:"Loon krijg je van je baas, winst krijg je met je eigen bedrijf."},
 {p:"2.2",q:"Welke functie van geld gebruik je hier? a) Je zet €50 op je spaarrekening. b) Je ziet dat een game €70 kost en een andere €35.",c:["a: spaarmiddel","b: rekenmiddel"],v:"a spaarmiddel, b rekenmiddel."},
 {p:"2.2",q:"Noah spaart elke maand €20 'voor als mijn telefoon kapotgaat'. Welk spaarmotief is dit?",c:["sparen voor onverwachte uitgaven (appeltje voor de dorst / buffer)"],v:"Sparen voor onverwachte uitgaven."},
 {p:"2.2",q:"Waarom geeft een bank jou rente als je spaart?",c:["de bank mag jouw geld gebruiken / leent het uit aan anderen; de rente is daarvoor een vergoeding"],v:"De bank leent jouw geld uit en geeft jou rente als beloning."},
 {p:"2.2",q:"Noem twee dingen waar de hoogte van je rentebedrag van afhangt.",c:["een eerste juist punt: hoeveel geld je spaart, het rentepercentage of hoe lang je spaart","een tweede, ander juist punt"],v:"Hoeveel je spaart en het rentepercentage."},
 {p:"2.2",q:"Fleur heeft €500 op de bank tegen 2% rente. Haar broer heeft €500 tegen 3%. Wie krijgt meer rente en waarom?",c:["haar broer","uitleg: hetzelfde bedrag maar een hoger rentepercentage"],v:"De broer, want bij hetzelfde bedrag heeft hij een hoger percentage."},
 {p:"2.3",q:"Wat is het verschil tussen aflossing en rente bij een lening?",c:["aflossing is het terugbetalen van het geleende bedrag zelf","rente is wat je extra aan de bank betaalt voor het lenen"],v:"Aflossing is het geleende geld terugbetalen, rente is wat je extra betaalt."},
 {p:"2.3",q:"Sem leent €200 van zijn oom en betaalt precies €200 terug. Bij de bank zou hij meer terugbetalen. Waarom?",c:["de bank vraagt rente (daar verdient de bank aan)"],v:"De bank rekent rente, daar verdient ze aan."},
 {p:"2.3",q:"Waarom kijkt een bank naar je inkomen voordat je geld mag lenen?",c:["de bank wil zeker weten dat je de maandtermijnen (de lening) kunt terugbetalen"],v:"Ze wil weten of je het kunt terugbetalen."},
 {p:"2.3",q:"Milan wil een spelcomputer van €500. Hij kan lenen of 5 maanden sparen. Geef een voordeel en een nadeel van lenen.",c:["voordeel: je hebt het meteen","nadeel: het kost rente / je betaalt meer terug"],v:"Voordeel: meteen hebben. Nadeel: je betaalt rente."},
 {p:"2.3",q:"Een lening in 60 maanden heeft een lagere maandtermijn dan in 24 maanden. Toch is hij duurder. Leg uit.",c:["je betaalt langer rente (meer maanden), dus totaal betaal je meer"],v:"Je betaalt veel langer rente, dus totaal betaal je meer."}
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
 function(){var t=rnd(400,3000,10),pp=kies([5,8,10,12,15,20,25,30,35,40]),a=r2(pp/100*t),ding=kies(["huur","boodschappen","energie","de vakantie"]);
  return {v:"Een gezin geeft per maand "+eu(t)+" uit. Daarvan gaat "+pp+"% naar "+ding+". Hoeveel euro is dat?",ant:a,soort:"geld",formule:"percentage : 100 × totaal"};},
 function(){var i=rnd(0,2),j=rnd(0,2),b=TABEL.bedragen[i],m=TABEL.maanden[j],tot=r2(TABEL.t[i][j]*m),n=kies(NAMEN);
  return {v:n+" leent "+eu(b)+" bij de bank en betaalt de lening terug in "+m+" maanden. Gebruik de tabel. Hoeveel betaalt "+n+" in totaal terug?",tabel:1,ant:tot,soort:"geld",formule:"maandtermijn × aantal maanden"};},
 function(){var i=rnd(0,2),j=rnd(0,2),b=TABEL.bedragen[i],m=TABEL.maanden[j],k=r2(TABEL.t[i][j]*m-b),n=kies(NAMEN);
  return {v:n+" leent "+eu(b)+" en betaalt terug in "+m+" maanden. Gebruik de tabel. Bereken de kredietkosten (de rente) van deze lening.",tabel:1,ant:k,soort:"geld",formule:"(maandtermijn × aantal maanden) − geleend bedrag"};},
 function(){var i=rnd(0,2),j=rnd(0,2),b=TABEL.bedragen[i],m=TABEL.maanden[j],k=TABEL.t[i][j]*m-b,p=r1(r2(k)/b*100),n=kies(NAMEN);
  return {v:n+" leent "+eu(b)+" en betaalt terug in "+m+" maanden. Gebruik de tabel. Hoeveel procent van het geleende bedrag zijn de kredietkosten? Rond af op 1 decimaal.",tabel:1,ant:p,soort:"procent",formule:"kosten : geleend bedrag × 100 (kosten = termijn × maanden − geleend)"};},
 function(){var i=rnd(0,2),b=TABEL.bedragen[i],j=rnd(1,2),k1=TABEL.t[i][j]*TABEL.maanden[j]-b,k0=TABEL.t[i][0]*24-b,n=kies(NAMEN);
  return {v:n+" leent "+eu(b)+" en wil terugbetalen in "+TABEL.maanden[j]+" maanden. "+n+" kan ook in 24 maanden terugbetalen. Gebruik de tabel. Hoeveel euro bespaart "+n+" dan aan kosten?",tabel:1,ant:r2(k1-k0),soort:"geld",formule:"kosten lange lening − kosten korte lening"};},
];
