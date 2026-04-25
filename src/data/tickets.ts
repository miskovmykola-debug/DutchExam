import type { Ticket } from "../types";

const emailTemplate = `Beste ...,

Ik schrijf ... want ...
Ik wil ...
Kun je mij helpen?

Met vriendelijke groet,
Mykola`;

const wijkkrantTemplate = `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over ...
Ik vind het leuk want ...

Met vriendelijke groet,
Mykola`;

const formulierTemplate = `Naam: Mykola Miskov
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
...`;

const briefjeTemplate = `Hallo,

Ik schrijf ... want ...
Kun je ...?

Met vriendelijke groet,
Mykola`;

export const tickets: Ticket[] = [
  { id: 1, title: "Laptop lenen", type: "E-mail", task: "Laptop is kapot, vraag Lisa laptop te lenen, schrijf wanneer je teruggeeft.", points: ["Probleem noemen", "Laptop lenen vragen", "Teruggeven moment"], keywords: ["laptop", "kapot", "lenen", "morgen", "terug"], simpleAnswer: `Beste Lisa,

Mijn laptop is kapot.
Ik moet iets voor school doen.
Mag ik jouw laptop lenen?
Ik geef de laptop morgen terug.

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 2, title: "Natuur", type: "Wijkkrant", task: "Schrijf over natuur in de buurt.", points: ["Intro met Mykola", "Vertel over natuur", "Waarom leuk"], keywords: ["natuur", "park", "groen", "koffie", "wandel"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over de natuur.
Ik vind het park mooi want het is groen.
Ik drink koffie en wandel in het park.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 3, title: "Ziek op werk", type: "E-mail", task: "Meld je ziek bij je baas.", points: ["Ziek melden", "Niet werken vandaag", "Vervanging vragen"], keywords: ["ziek", "werken", "vandaag", "iemand", "bel"], simpleAnswer: `Beste baas,

Ik schrijf u want ik ben ziek.
Ik kan vandaag niet werken.
Kan iemand anders vandaag werken?
Ik bel u later.

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 4, title: "Nieuw huis feest", type: "E-mail", task: "Nodig Amir uit voor nieuw huis feest.", points: ["Nieuw huis", "Tijd en plaats", "Iets meenemen vragen"], keywords: ["nieuw huis", "feest", "zaterdag", "18 uur", "koffie"], simpleAnswer: `Beste Amir,

Ik heb een nieuw huis.
Ik wil een feestje geven.
Het feest is zaterdag om 18 uur bij mij thuis.
Kun je koffie meenemen?

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 5, title: "Dier", type: "Wijkkrant", task: "Schrijf over je favoriete dier.", points: ["Dier noemen", "Waarom leuk", "Wat je doet"], keywords: ["dier", "hond", "lief", "wandel"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over mijn favoriete dier.
Ik vind een hond leuk want hij is lief.
Ik wandel graag met een hond.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 6, title: "Woning", type: "Wijkkrant", task: "Beschrijf je woning.", points: ["Woning omschrijven", "Kamers noemen", "Met wie je woont"], keywords: ["woning", "keuken", "kamers", "partner"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over mijn woning.
Mijn keuken is groot en mooi.
Ik heb twee kamers.
Ik woon met mijn partner.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 7, title: "Collega Omar", type: "E-mail", task: "Mail Omar over afspraak en ophalen.", points: ["Samen werken", "Afspraak plek", "Tijd ophalen"], keywords: ["Omar", "morgen", "Almere", "9 uur", "werkkleren"], simpleAnswer: `Beste Omar,

Ik schrijf je want wij werken morgen samen.
Wij hebben een afspraak in Almere.
Ik haal je om 9 uur op.
Kun je werkkleren meenemen?

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 8, title: "Oppas gezocht", type: "E-mail", shortTask: "Vraag vrienden om oppas", fullTask: `U heeft kinderen, maar u moet soms weg van huis.
U zoekt een oppas. U kent niemand.
U schrijft een e-mail aan uw vrienden.
● Schrijf waarom u een oppas zoekt.
● Schrijf wanneer u een oppas nodig hebt.
● Vraag of uw vrienden een goede oppas kennen.
Schrijf een e-mail. Gebruik hele zinnen.`, points: ["Oppas nodig", "Wanneer", "Vragen of ze iemand kennen"], keywords: ["oppas", "kind", "zaterdag", "vrienden"], simpleAnswer: `Beste vrienden,

Ik zoek een oppas voor mijn kind.
Ik heb zaterdag een oppas nodig.
Kennen jullie een goede oppas?

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 9, title: "Auto kapot", type: "E-mail", task: "Mail collega over kapotte auto.", points: ["Probleem auto", "Hulp vragen", "Alternatief noemen"], keywords: ["auto", "kapot", "helpen", "fiets"], simpleAnswer: `Beste collega,

Ik schrijf je want mijn auto is kapot.
Ik moet spullen naar het werk brengen.
Kun je mij helpen?
Ik kan morgen met de fiets komen.

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 10, title: "Park", type: "Wijkkrant", task: "Schrijf over park in je buurt.", points: ["Park beschrijven", "Wat je ziet", "Wat je doet"], keywords: ["park", "buurt", "bomen", "bloemen", "koffie"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over een park in mijn buurt.
Het park is groot en mooi.
Ik zie bomen en bloemen.
Ik drink koffie in het park.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 11, title: "Gemiste toets", type: "E-mail", task: "Mail docent over gemiste toets.", points: ["Toets gemist uitleggen", "Reden ziek", "Nieuwe dag vragen"], keywords: ["toets", "ziek", "andere dag"], simpleAnswer: `Beste docent,

Ik schrijf u want ik was niet bij de toets.
Ik was ziek.
Kan ik de toets op een andere dag maken?

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 12, title: "Muziek", type: "Wijkkrant", task: "Schrijf over muziek.", points: ["Soort muziek", "Waarom leuk", "Favoriete zanger"], keywords: ["muziek", "popmuziek", "mooi", "zanger"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over muziek.
Ik vind popmuziek leuk want het is mooi.
Mijn favoriete zanger is Tom.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 13, title: "Sleutels kwijt", type: "E-mail", task: "Mail collega's over sleutels.", points: ["Sleutels kwijt", "Bellen vragen", "Ophalen melden"], keywords: ["sleutels", "kwijt", "bellen", "vinden"], simpleAnswer: `Beste collega’s,

Ik ben mijn sleutels kwijt.
Kun je mij bellen als je mijn sleutels vindt?
Ik kom de sleutels ophalen.

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 14, title: "Fiets kiezen", type: "Formulier", task: "Vul formulier in voor fiets.", points: ["Persoonsgegevens", "Type en kleur", "Waarom"], keywords: ["fiets", "kleur", "type", "waarom"], simpleAnswer: `Voornaam: Mykola
Achternaam: Miskov
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
Lengte: 180 cm
Kleur: zwart
Type fiets: A
Waarom: Ik kies deze fiets want hij is mooi.`, template: formulierTemplate },
  { id: 15, title: "Engelse examens", type: "E-mail", task: "Vraag informatie over examens.", points: ["Welke examens", "Wanneer", "Kosten"], keywords: ["examens", "Engels", "wanneer", "kost"], simpleAnswer: `Beste heer/mevrouw,

Mijn naam is Mykola.
Ik wil twee examens Engels doen.
Ik wil lezen en schrijven doen.
Wanneer zijn de examens?
Wat kost het?

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 16, title: "Buurt mooier maken", type: "Wijkkrant", task: "Schrijf over buurt schoonmaken.", points: ["Probleem buurt", "Plan", "Hulp vragen"], keywords: ["buurt", "schoon", "schoonmaken", "helpen"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil mijn buurt mooier maken.
De buurt is niet schoon.
Ik wil de buurt schoonmaken.
Willen jullie helpen?

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 17, title: "Geluid buurman", type: "Brief", task: "Schrijf brief over lawaai.", points: ["Lawaai benoemen", "Last zeggen", "Praten vragen"], keywords: ["lawaai", "avond", "last", "praten"], simpleAnswer: `Beste Piet,

Ik schrijf u want er is veel lawaai in de avond.
Ik heb daar last van.
Kunnen wij samen praten?

Met vriendelijke groet,
Mykola`, template: briefjeTemplate },
  { id: 18, title: "Feest in de buurt", type: "Wijkkrant", task: "Organiseer buurtfeest.", points: ["Feest noemen", "Plaats en tijd", "Wat meenemen"], keywords: ["feest", "buurt", "zaterdag", "park", "eten"], simpleAnswer: `Beste buren,

Mijn naam is Mykola.
Ik wil een feest in de buurt organiseren.
Het feest is zaterdag in het park.
Jullie kunnen eten meenemen.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 19, title: "Kookcursus afzeggen", type: "E-mail", task: "Meld af voor kookcursus.", points: ["Niet kunnen komen", "Reden", "Volgende keer"], keywords: ["kookcursus", "ziek", "volgende cursus"], simpleAnswer: `Beste heer/mevrouw,

Ik kan niet naar de kookcursus komen.
Ik ben ziek.
Ik wil graag bij de volgende cursus zijn.

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 20, title: "Voetbalkaartjes", type: "E-mail", task: "Vraag Hassan over kaartjes.", points: ["Je kan niet gaan", "Reden", "Aanbieden kaartjes"], keywords: ["kaartjes", "wedstrijd", "zaterdag", "werken"], simpleAnswer: `Beste Hassan,

Ik heb kaartjes voor een voetbalwedstrijd.
De wedstrijd is zaterdag.
Ik kan niet gaan want ik moet werken.
Wil je de kaartjes hebben?

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 21, title: "Bestelling incompleet", type: "E-mail", task: "Klaag over ontbrekende producten.", points: ["Bestelling noemen", "Wat ontbreekt", "Oplossing vragen"], keywords: ["besteld", "kaas", "brood", "morgen", "ontvangen"], simpleAnswer: `Beste heer/mevrouw,

Ik heb producten besteld.
Ik heb geen kaas en geen brood gekregen.
Ik wil deze producten morgen ontvangen.

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 22, title: "Koken thuis", type: "Wijkkrant", task: "Schrijf over koken thuis.", points: ["Wie kookt", "Wat kookt", "Wanneer"], keywords: ["partner", "kebab", "thuis", "elke dag", "10 uur"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Mijn partner kookt bij mij thuis.
Zij maakt graag kebab.
Zij kookt elke dag om 10 uur.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 23, title: "Zieke klasgenoot", type: "E-mail", task: "Stuur klasgenoot info en beterschap.", points: ["Vraag hoe het gaat", "Les info", "Huiswerk"], keywords: ["Nederlandse les", "huiswerk", "pagina 10", "beterschap"], simpleAnswer: `Beste Karim,

Hoe gaat het met je?
Vandaag hadden wij Nederlandse les.
Het huiswerk is pagina 10.
Beterschap!

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 24, title: "Fiets lenen", type: "E-mail", task: "Vraag vriendin fiets te lenen.", points: ["Fiets kapot", "Waarom nodig", "Teruggeven"], keywords: ["fiets", "kapot", "stad", "lenen", "morgen"], simpleAnswer: `Beste vriendin,

Mijn fiets is kapot.
Ik moet naar de stad.
Mag ik jouw fiets lenen?
Ik geef de fiets morgen terug.

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 25, title: "Geboorte baby", type: "Wijkkrant", task: "Schrijf over traditie met baby's.", points: ["Onderwerp baby's", "Wat jullie doen", "Hoe anderen het weten"], keywords: ["baby", "land", "eten", "Instagram"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over baby’s in mijn land.
Wij koken veel eten.
Dat is speciaal.
Andere mensen weten het via Instagram.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 26, title: "Docent nodig", type: "E-mail", task: "Vraag taalschool om docent.", points: ["Je leert Nederlands", "Wat wil je oefenen", "Waar leren"], keywords: ["taalschool", "docent", "spreken", "schrijven", "thuis"], simpleAnswer: `Beste taalschool,

Ik leer Nederlands.
Ik wil een docent.
Ik wil spreken en schrijven oefenen.
Ik wil thuis leren.

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 27, title: "Nieuw in Nederland", type: "Wijkkrant", task: "Vertel over nieuw in Nederland.", points: ["Sinds wanneer", "Gevoel", "Mening"], keywords: ["2021", "Nederland", "goed", "mooi"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik ben in 2021 naar Nederland gekomen.
Ik voel mij goed.
Ik vind Nederland mooi.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 28, title: "Kat gevonden", type: "Bericht", task: "Plaats bericht over gevonden kat.", points: ["Waar en hoe lang", "Beschrijving kat", "Contact"], keywords: ["kat", "twee dagen", "zwart", "klein", "bel"], simpleAnswer: `Hallo,

Er zit al twee dagen een kat bij mijn huis.
De kat is zwart en klein.
Van wie is deze kat?
Bel mij alstublieft.

Mykola`, template: briefjeTemplate },
  { id: 29, title: "Favoriete app", type: "Wijkkrant", task: "Schrijf over favoriete app.", points: ["App noemen", "Waarom", "Hoe vaak"], keywords: ["TikTok", "video’s", "elke dag"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Mijn favoriete applicatie is TikTok.
TikTok heeft korte video’s.
Ik kijk elke dag TikTok.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 30, title: "Rugpijn baas", type: "E-mail", task: "Mail baas over rugpijn.", points: ["Wat er gebeurde", "Klacht", "Naar fysio"], keywords: ["dozen", "rugpijn", "fysiotherapeut"], simpleAnswer: `Beste baas,

Gisteren heb ik veel dozen getild.
Nu heb ik rugpijn.
Vanmiddag ga ik naar de fysiotherapeut.

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 31, title: "Cadeau docent", type: "E-mail", task: "Mail klasgenoten over cadeau.", points: ["Cadeau idee", "Wat kopen", "Geld vragen"], keywords: ["docent", "cadeau", "bloemen", "geld", "vrijdag"], simpleAnswer: `Beste klasgenoten,

Ik wil onze docent een cadeau geven.
Ik wil bloemen kopen.
Kunnen jullie geld geven?
Geef het geld voor vrijdag.

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 32, title: "Schoonmaken niet af", type: "E-mail", task: "Mail collega over werk niet af.", points: ["Niet af", "Reden ziek", "Morgen vragen"], keywords: ["schoongemaakt", "ziek", "morgen", "afmaken"], simpleAnswer: `Beste collega,

Ik heb vandaag niet alles schoongemaakt.
Ik ben ziek.
Sorry.
Kun je het morgen afmaken?

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 33, title: "Minder uren werken", type: "Formulier", task: "Vul formulier minder uren in.", points: ["Persoonsgegevens", "Huidige uren", "Gewenste uren"], keywords: ["40 uur", "24 uur", "restaurant", "kebab", "moe"], simpleAnswer: `Naam: Mykola Miskov
Geboortedatum: 01-01-1990
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
Telefoonnummer: 0612345678
E-mail: mykola@email.com
Waar werkt u? In een restaurant.
Wat doet u daar? Ik maak kebab.
Hoeveel uur werkt u nu? 40 uur.
Hoeveel uur wilt u werken? 24 uur.
Waarom? Ik ben moe.`, template: formulierTemplate },
  { id: 34, title: "Feestdag", type: "Wijkkrant", task: "Schrijf over favoriete feestdag.", points: ["Feestdag noemen", "Wat je doet", "Met wie"], keywords: ["verjaardag", "koffie", "taart", "partner"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Mijn favoriete feestdag is mijn verjaardag.
Ik drink koffie en eet taart.
Ik vier mijn verjaardag met mijn partner.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 35, title: "Vrije tijd", type: "Wijkkrant", task: "Schrijf over vrije tijd.", points: ["Activiteit", "Waar", "Met wie"], keywords: ["vrije tijd", "TikTok", "thuis", "partner"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
In mijn vrije tijd kijk ik TikTok.
Ik doe dat thuis.
Ik doe dat met mijn partner.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 36, title: "Internetstoring", type: "Formulier", task: "Vul storing formulier in.", points: ["Persoonsgegevens", "Probleem", "Hoe lang"], keywords: ["internet", "werkt niet", "twee dagen"], simpleAnswer: `Naam: Mykola Miskov
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
Telefoonnummer: 0612345678
E-mail: mykola@email.com
Wat is het probleem? Mijn internet werkt niet.
Hoe lang? Twee dagen.`, template: formulierTemplate },
  { id: 37, title: "Taken overnemen", type: "E-mail", task: "Vraag collega taken over te nemen.", points: ["Tot hoe laat werken", "Geen tijd", "Concrete taken"], keywords: ["13 uur", "bureau", "koffie", "De Boer"], simpleAnswer: `Beste collega,

Ik werk vandaag tot 13 uur.
Ik heb geen tijd.
Kun je mijn bureau opruimen?
Kun je koffie brengen voor meneer De Boer?

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 38, title: "Nederlandse cursus vriend", type: "E-mail", task: "Adviseer vriend over school.", points: ["School adviseren", "Waarom goed", "Inschrijven"], keywords: ["Nederlands", "Ad Appel", "duidelijk", "online"], simpleAnswer: `Beste vriend,

Ik weet dat je Nederlands wilt leren.
Ik vind Ad Appel een goede school.
De school is goed want de lessen zijn duidelijk.
Je kunt je online inschrijven.

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 39, title: "Vrienden", type: "Wijkkrant", task: "Schrijf over een vriend.", points: ["Naam vriend", "Hoe lang kennen", "Wat doen"], keywords: ["Armen", "10 jaar", "koffie", "park"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik heb een vriend.
Zijn naam is Armen.
Ik ken Armen al 10 jaar.
Wij drinken koffie in het park.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 40, title: "Mijn huis", type: "Wijkkrant", task: "Beschrijf je huis.", points: ["Huis beschrijven", "Waarom leuk", "Met wie wonen"], keywords: ["klein huis", "mooi", "hond", "slaapkamer"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik heb een klein huis.
Ik vind mijn huis leuk want het is mooi.
Ik woon met mijn hond.
Ik heb een slaapkamer.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 41, title: "Werk dat ik graag doe", type: "Wijkkrant", task: "Schrijf over werk dat je graag doet.", points: ["Werk noemen", "Waarom", "Waar en hoeveel uur"], keywords: ["kebab", "restaurant", "4 uur", "lekker"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik maak graag kebab.
Ik doe dat werk graag want kebab is lekker.
Ik werk in een restaurant.
Ik wil 4 uur per week werken.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 42, title: "Aardige buurman", type: "Wijkkrant", task: "Schrijf over buurman.", points: ["Naam buurman", "Werk", "Waarom aardig"], keywords: ["Armen", "Albert Heijn", "aardig", "helpt"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over mijn buurman.
Zijn naam is Armen.
Hij is verkoper bij Albert Heijn.
Ik vind Armen aardig want hij helpt mij.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 43, title: "Kinderboeken", type: "Wijkkrant", task: "Schrijf over kinderboeken.", points: ["Boek noemen", "Waarom mooi", "Wat lees je graag"], keywords: ["kikker", "groene kikker", "honden", "verhalen"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik vind “De kikker” mooi.
Ik vind dit boek mooi want het is over een kleine groene kikker.
Ik lees graag verhalen over honden.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 44, title: "KPN abonnement stoppen", type: "E-mail", task: "Zeg abonnement op.", points: ["Abonnement noemen", "Stoppen", "Reden goedkoper"], keywords: ["KPN", "abonnement", "stoppen", "goedkoper"], simpleAnswer: `Beste heer/mevrouw,

Mijn naam is Mykola.
Ik heb een abonnement bij KPN.
Ik wil mijn abonnement stoppen.
Ik ga naar een ander bedrijf want het is goedkoper.

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 45, title: "Te laat werk", type: "Bericht", task: "Stuur bericht dat je later bent.", points: ["Probleem bus", "Alternatief fiets", "Aankomsttijd"], keywords: ["bus", "fiets", "8:30", "werk"], simpleAnswer: `Beste collega,

Vandaag ben ik op tijd van huis vertrokken.
De bus rijdt niet.
Ik moet met de fiets komen.
Ik ben om 8:30 op het werk.
Kun je alvast iets doen voor mij?

Met vriendelijke groet,
Mykola`, template: briefjeTemplate },
  { id: 46, title: "Oppassen kind", type: "Briefje", task: "Schrijf briefje voor oppas.", points: ["Waar je naartoe gaat", "Wat oppas doet", "Extra vraag"], keywords: ["oppassen", "kind", "restaurant", "deur"], simpleAnswer: `Hallo,

Ik ga vanavond met mijn partner naar een restaurant.
Je komt oppassen op mijn kind.
Kun je met mijn kind spelen?
Kun je de deur dicht doen?

Met vriendelijke groet,
Mykola`, template: briefjeTemplate },
  { id: 47, title: "Nederlandse gerechten", type: "Wijkkrant", task: "Schrijf over Nederlands eten.", points: ["Gerecht noemen", "Waarom lekker", "Waar je eet"], keywords: ["kaas", "lekker", "thuis"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik vind kaas lekker.
Ik vind kaas lekker want het is goed.
Ik eet kaas thuis.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 48, title: "Diego werk zoeken", type: "E-mail", task: "Geef Diego advies voor werk.", points: ["Situatie Diego", "Wat hij moet doen", "Waarom advies"], keywords: ["werk", "CV", "gemeente", "vinden"], simpleAnswer: `Beste Diego,

Ik weet dat je werk zoekt.
Je hebt gewerkt als vrachtwagenchauffeur.
Maar je kan geen werk vinden.
Je moet een CV maken.
Je moet naar de gemeente gaan.
Ik zeg dit want je kan dan werk vinden.

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 49, title: "Taalschool informatie", type: "E-mail", task: "Vraag info over cursus.", points: ["Info vragen", "Startdatum", "Kosten"], keywords: ["informatie", "cursus", "wanneer", "kost"], simpleAnswer: `Beste heer/mevrouw,

Mijn naam is Mykola.
Ik wil informatie over de cursus.
Wanneer begint de cursus?
Wat kost de cursus?

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 50, title: "Taart recept", type: "E-mail", task: "Vraag vriend om recept.", points: ["Waarom taart", "Voor wie", "Recept vragen"], keywords: ["verjaardag", "taart", "collega’s", "recept"], simpleAnswer: `Beste vriend,

Ik wil op mijn verjaardag een taart bakken.
Ik wil mijn collega’s trakteren.
Je kan lekkere taarten bakken.
Kun je mij een recept sturen?

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 51, title: "Werk niet af (Henk)", type: "Briefje", task: "Schrijf een briefje aan Henk dat werk niet af is en vraag twee dingen.", points: ["Zeg dat je naar huis bent gegaan", "Zeg dat werk niet af is", "Vraag om twee taken"], keywords: ["Henk", "werk", "niet afgemaakt", "tafel", "deur"], simpleAnswer: `Hallo Henk,

Ik ben naar huis gegaan.
Ik heb mijn werk niet afgemaakt.
Kun je de tafel schoonmaken?
Kun je de deur dicht doen?

Groet,
Mykola`, template: briefjeTemplate },
  { id: 52, title: "Vakantie", type: "Wijkkrant", task: "Schrijf over je vakantie.", points: ["Waar je heen gaat", "Wat je wil doen", "Met wie je gaat"], keywords: ["vakantie", "Spanje", "zwemmen", "koffie", "partner"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik ga graag naar Spanje op vakantie.
Ik wil zwemmen en koffie drinken.
Ik ga met mijn partner.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 53, title: "Computercursus gemist", type: "E-mail", task: "Mail dat je niet naar computercursus kan komen en vraag om later.", points: ["Noem de cursus", "Zeg wanneer je niet kan", "Vraag of later kan"], keywords: ["computercursus", "maandag", "werk", "later"], simpleAnswer: `Beste heer/mevrouw,

Ik volg een computercursus.
Ik kan maandag niet komen.
Ik heb werk.
Kan ik de les later volgen?

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 54, title: "Nieuw in de wijk", type: "Wijkkrant", task: "Stel jezelf voor als nieuw in de wijk.", points: ["Wie je bent", "Dat je in de wijk woont", "Iets over buren"], keywords: ["nieuw", "wijk", "partner", "buren"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik woon nu in deze wijk.
Ik woon met mijn partner.
Mijn buren zijn aardig.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 55, title: "Stofzuiger kapot", type: "E-mail", task: "Mail winkel over kapotte stofzuiger.", points: ["Zeg wat je hebt gekocht", "Noem het probleem", "Vraag oplossing"], keywords: ["stofzuiger", "gekocht", "werkt niet", "terugsturen", "oplossing"], simpleAnswer: `Beste heer/mevrouw,

Ik heb een stofzuiger gekocht.
Er is een probleem.
De stofzuiger werkt niet.
Hoe kan ik het terugsturen?
Wat is de oplossing?

Met vriendelijke groet,
Mykola`, template: emailTemplate },
  { id: 56, title: "App uitgebreid", type: "Wijkkrant", task: "Schrijf over je favoriete app.", points: ["App noemen", "Waarom je het leuk vindt", "Hoe vaak je het gebruikt"], keywords: ["app", "TikTok", "leuk", "interessant", "elke dag"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Mijn favoriete app is TikTok.
Ik vind TikTok leuk want het is interessant.
Ik gebruik het elke dag.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 57, title: "Vroeger en nu wonen", type: "Wijkkrant", task: "Schrijf over vroeger en nu wonen.", points: ["Vroeger waar", "Nu waar", "Wat je beter vindt"], keywords: ["vroeger", "dorp", "nu", "stad", "beter"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik woonde vroeger in een dorp.
Nu woon ik in de stad.
Ik vind de stad beter want het is leuk.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 58, title: "TV programma", type: "Wijkkrant", task: "Schrijf over een tv-programma dat je graag kijkt.", points: ["Wat je kijkt", "Waarover het gaat", "Waarom je het leuk vindt"], keywords: ["tv-programma", "koken", "leuk", "interessant"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik kijk graag een tv-programma.
Het gaat over koken.
Ik vind het leuk want het is interessant.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 59, title: "Weer", type: "Wijkkrant", task: "Schrijf over het weer in Nederland en Spanje.", points: ["Weer in Nederland", "Wat je vaak doet", "Vergelijk met Spanje"], keywords: ["weer", "Nederland", "koud", "Spanje", "warm"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Het weer in Nederland is koud.
Ik ga vaak naar Spanje.
Daar is het warm.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 60, title: "Markt", type: "Wijkkrant", task: "Schrijf over naar de markt gaan.", points: ["Zeg dat je naar de markt gaat", "Wat je koopt", "Wanneer je gaat"], keywords: ["markt", "fruit", "koffie", "weekend"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik ga naar de markt.
Ik koop fruit en koffie.
Ik ga in het weekend.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 61, title: "Tuin", type: "Wijkkrant", task: "Schrijf over je tuin.", points: ["Zeg dat je een tuin hebt", "Beschrijf de tuin", "Wat je daar doet"], keywords: ["tuin", "mooi", "groen", "koffie"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik heb een tuin.
De tuin is mooi en groen.
Ik drink koffie in de tuin.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
  { id: 62, title: "Verjaardag (розширений)", type: "Wijkkrant", task: "Schrijf over je verjaardag.", points: ["Zeg dat je verjaardag viert", "Wat je eet en drinkt", "Met wie je viert"], keywords: ["verjaardag", "taart", "koffie", "partner"], simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik vier mijn verjaardag.
Ik eet taart en drink koffie.
Ik vier met mijn partner.

Met vriendelijke groet,
Mykola`, template: wijkkrantTemplate },
];
