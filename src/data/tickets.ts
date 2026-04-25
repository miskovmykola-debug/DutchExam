export type Ticket = {
  id: number;
  title: string;
  type: "E-mail" | "Wijkkrant" | "Formulier" | "Brief" | "Briefje";
  category: string[];
  fullTask: string;
  simpleAnswer: string;
  points?: string[];
  keywords?: string[];
};

export const tickets: Ticket[] = [
  {
    id: 1,
    title: "Schadeformulier auto",
    type: "Formulier",
    category: ["Formulier", "Auto"],
    fullTask: `U had een auto-ongeluk. U moet een schadeformulier invullen voor de verzekering. Sommige gegevens moet u zelf bedenken.

Schadeformulier

Persoonsgegevens
Voor- en achternaam: ___________________________
Adres: _______________________________________
Postcode: _______________
Woonplaats: _______________
Telefoonnummer: _____________
E-mail: ______________________

Gegevens over de auto
Merk: _______________________
Kenteken: ____________________
Bouwjaar: ____________________

Wat is er gebeurd?`,
    simpleAnswer: `Voor- en achternaam: Mykola Miskov
Adres: Hoofdstraat 10
Postcode: 1234 AB
Woonplaats: Amsterdam
Telefoonnummer: 0612345678
E-mail: mykola@email.com

Merk: Toyota
Kenteken: AB-123-CD
Bouwjaar: 2015

Wat is er gebeurd?
Ik had een ongeluk. Mijn auto is kapot.`,
  },
  {
    id: 2,
    title: "Laptop lenen van Lisa",
    type: "E-mail",
    category: ["E-mail", "School"],
    fullTask: `U moet iets voor school doen op de computer, maar uw laptop is kapot.
U schrijft een e-mail aan uw studiegenoot Lisa.

Schrijf waarom u schrijft.
Schrijf wat uw probleem is.
Vraag of u haar laptop mag lenen.
Schrijf wanneer u de laptop teruggeeft.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste Lisa,

Ik schrijf je want mijn laptop is kapot.
Ik moet iets voor school doen.
Mag ik jouw laptop lenen?
Ik geef de laptop morgen terug.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 3,
    title: "Natuur",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Buurt"],
    fullTask: `U leest elke week een wijkkrant. Iedereen mag iets schrijven.
U schrijft over de natuur die u mooi vindt.

Schrijf welke natuur u mooi vindt.
Schrijf waarom u dat mooi vindt.
Schrijf wat u daar doet.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over de natuur.
Ik vind het park mooi want het is groen.
Ik wandel en drink koffie in het park.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 4,
    title: "Ziek en niet werken",
    type: "E-mail",
    category: ["E-mail", "Werk"],
    fullTask: `U werkt in een restaurant. U bent ziek en u kunt vandaag niet werken.
U schrijft een e-mail aan uw baas.

Schrijf waarom u mailt.
Schrijf dat u ziek bent.
Vraag of iemand anders vandaag kan werken.
Zeg dat u later belt.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste baas,

Ik schrijf u want ik ben ziek.
Ik kan vandaag niet werken.
Kan iemand anders vandaag werken?
Ik bel u later.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 5,
    title: "Nieuw huis feestje",
    type: "E-mail",
    category: ["E-mail", "Vrienden"],
    fullTask: `U hebt een nieuw huis. U wilt een feestje geven.
U schrijft een e-mail aan uw vriend Amir.

Schrijf waarom u mailt.
Nodig Amir uit voor het feest.
Schrijf wanneer en waar het feest is.
Vraag of hij iets mee wil nemen.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste Amir,

Ik heb een nieuw huis.
Ik wil een feestje geven.
Het feest is zaterdag om 18 uur bij mij thuis.
Kun je koffie meenemen?

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 6,
    title: "Dieren",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Dieren"],
    fullTask: `U leest elke week een wijkkrant. Iedereen mag iets schrijven.
U schrijft over een dier dat u leuk vindt.

Schrijf welk dier u leuk vindt.
Schrijf waarom u dat dier leuk vindt.
Schrijf wat u met dat dier doet of zou willen doen.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over een dier.
Ik vind een hond leuk want hij is lief.
Ik wil met een hond wandelen.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 7,
    title: "Woning",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Huis"],
    fullTask: `U leest elke week een wijkkrant. Iedereen mag iets schrijven.
U schrijft over uw woning (huis of appartement).

Hoe ziet uw keuken eruit?
Schrijf hoeveel kamers u heeft.
Schrijf met hoeveel mensen u daar woont.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over mijn woning.
Mijn keuken is groot en mooi.
Ik heb drie kamers.
Ik woon met mijn partner.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 8,
    title: "Collega Omar",
    type: "E-mail",
    category: ["E-mail", "Werk"],
    fullTask: `U werkt als monteur. Morgen gaat u samen met Omar naar een andere stad.
U schrijft een e-mail aan Omar.

Schrijf waarom u mailt.
Schrijf in welke stad jullie een afspraak hebben. Bedenk zelf.
Schrijf hoe laat u Omar ophaalt.
Schrijf wat Omar mee moet nemen.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste Omar,

Ik schrijf je want wij werken morgen samen.
Wij hebben een afspraak in Almere.
Ik haal je om 9 uur op.
Kun je werkkleren meenemen?

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 9,
    title: "Kookcursus formulier",
    type: "Formulier",
    category: ["Formulier", "Cursus"],
    fullTask: `U wilt een kookcursus volgen. U moet een formulier invullen.
Sommige gegevens moet u zelf bedenken.

Inschrijfformulier kookcursus

Voor- en achternaam: _____________________________
Adres: __________________________________________
Telefoonnummer: _________________________________
E-mail: _________________________________________

Welk gerecht wilt u leren koken?
Waarom wilt u dat gerecht leren koken?

Wanneer kunt u naar de cursus komen?
☐ Dinsdagavond
☐ Donderdagmiddag
☐ Zaterdag`,
    simpleAnswer: `Voor- en achternaam: Mykola Miskov
Adres: Hoofdstraat 10
Telefoonnummer: 0612345678
E-mail: mykola@email.com

Welk gerecht wilt u leren koken?
Ik wil kebab leren koken.

Waarom wilt u dat gerecht leren koken?
Want kebab is lekker.

Wanneer kunt u naar de cursus komen?
Zaterdag`,
  },
  {
    id: 10,
    title: "Oppas gezocht",
    type: "E-mail",
    category: ["E-mail", "Vrienden", "Familie"],
    fullTask: `U heeft kinderen, maar u moet soms weg van huis.
U zoekt een oppas. U kent niemand.
U schrijft een e-mail aan uw vrienden.

Schrijf waarom u een oppas zoekt.
Schrijf wanneer u een oppas nodig hebt.
Vraag of uw vrienden een goede oppas kennen.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste vrienden,

Ik zoek een oppas voor mijn kind.
Ik heb zaterdag een oppas nodig.
Kennen jullie een goede oppas?

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 11,
    title: "Review fotoboeken",
    type: "Formulier",
    category: ["Formulier", "Winkel"],
    fullTask: `U hebt online fotoboeken gekocht. Nu vult u een formulier in op de website.
Sommige gegevens moet u zelf bedenken.

Klantenformulier – Uw ervaring met onze fotoboeken

Waarom hebt u fotoboeken gemaakt?
Waarom hebt u onze website gekozen?
Wat vindt u van de prijzen?
Wat wilt u ons wensen voor de toekomst?`,
    simpleAnswer: `Waarom hebt u fotoboeken gemaakt?
Ik heb fotoboeken gemaakt voor mijn partner.

Waarom hebt u onze website gekozen?
Want de website is mooi en makkelijk.

Wat vindt u van de prijzen?
De prijzen zijn goed.

Wat wilt u ons wensen voor de toekomst?
Veel succes.`,
  },
  {
    id: 12,
    title: "Auto kapot Thomas",
    type: "E-mail",
    category: ["E-mail", "Werk", "Auto"],
    fullTask: `U moet werken. U hebt spullen voor uw werk, maar uw auto is kapot.
U schrijft een e-mail aan uw collega Thomas.

Schrijf waarom u mailt.
Schrijf dat uw auto kapot is.
Bedenk een oplossing voor uw probleem.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste Thomas,

Ik schrijf je want mijn auto is kapot.
Ik heb spullen voor mijn werk.
Kun je mij helpen?
Ik kan met de fiets komen.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 13,
    title: "Park",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Buurt"],
    fullTask: `U schrijft een korte tekst voor de wijkkrant over een park in de buurt.

Schrijf over het park.
Schrijf waarom u het park leuk vindt.
Schrijf wat u daar doet.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over het park.
Het park is groot en mooi.
Ik vind het park leuk want het is groen.
Ik drink koffie in het park.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 14,
    title: "Gemiste toets",
    type: "E-mail",
    category: ["E-mail", "School"],
    fullTask: `U doet een cursus. U had een examen, maar u bent niet gekomen.
U schrijft een e-mail aan uw docent.

Schrijf waarom u mailt.
Schrijf waarom u niet naar het examen kwam. Bedenk zelf een reden.
Vraag of u de toets op een andere dag kunt maken.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste docent,

Ik schrijf u want ik was niet bij het examen.
Ik was ziek.
Kan ik de toets op een andere dag maken?

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 15,
    title: "Muziek",
    type: "Wijkkrant",
    category: ["Wijkkrant"],
    fullTask: `U schrijft een korte tekst voor de wijkkrant over muziek.

Schrijf welke muziek u leuk vindt.
Schrijf waarom u die muziek leuk vindt.
Schrijf wie die muziek maakt.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over muziek.
Ik vind popmuziek leuk.
Ik vind deze muziek leuk want het is mooi.
Tom maakt deze muziek.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 16,
    title: "Sleutels kwijt",
    type: "E-mail",
    category: ["E-mail", "Werk"],
    fullTask: `U werkt in een kantoor. U bent uw sleutels kwijt.
U schrijft een e-mail aan uw collega's.

Schrijf wat er is gebeurd.
Vraag uw collega's om de sleutels aan u te geven als ze die vinden.
Schrijf hoe ze dat kunnen doen, bijvoorbeeld waar en wanneer.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste collega’s,

Ik ben mijn sleutels kwijt.
Kun je mij bellen als je mijn sleutels vindt?
Ik kom de sleutels vandaag ophalen.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 17,
    title: "Nieuwe huisarts",
    type: "Formulier",
    category: ["Formulier", "Dokter"],
    fullTask: `U zoekt een nieuwe huisarts. U vult een formulier in op de website van een praktijk.
Sommige gegevens moet u zelf bedenken. Kies een klacht: bijvoorbeeld een gebroken been, verkoudheid of iets anders.

Inschrijfformulier nieuwe huisarts

Voor- en achternaam: _____________________________
Adres: __________________________________________
Postcode en woonplaats: ___________________________
Telefoonnummer: _________________________________
E-mail: _________________________________________

Wat is uw klacht? Wat is er gebeurd?

Gebruikt u medicijnen?
☐ Ja
☐ Nee`,
    simpleAnswer: `Voor- en achternaam: Mykola Miskov
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
Telefoonnummer: 0612345678
E-mail: mykola@email.com

Wat is uw klacht?
Ik heb rugpijn.

Gebruikt u medicijnen?
Nee`,
  },
  {
    id: 18,
    title: "Fiets kiezen op werk",
    type: "Formulier",
    category: ["Formulier", "Werk", "Transport"],
    fullTask: `Op uw werk mag u een fiets kiezen. U ziet drie fietsen:
A = stadsfiets – B = racefiets – C = bakfiets met bak voorop.
U vult een formulier in. Sommige gegevens moet u zelf bedenken.

Fietsformulier – Werkfiets kiezen

Voor- en achternaam: _____________________________
Adres: __________________________________________
Postcode en woonplaats: ___________________________
Lengte: ___________________ cm
Kleur van de fiets: ____________________________
Type fiets A/B/C: _____________

Waarom kiest u deze fiets?`,
    simpleAnswer: `Voor- en achternaam: Mykola Miskov
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
Lengte: 180 cm
Kleur van de fiets: zwart
Type fiets: A

Waarom kiest u deze fiets?
Ik kies deze fiets want hij is mooi.`,
  },
  {
    id: 19,
    title: "Examens Engels",
    type: "E-mail",
    category: ["E-mail", "School"],
    fullTask: `U wilt bij een school twee examens Engels doen.
Op de website ziet u deze examens:

Lezen
Luisteren
Schrijven

U schrijft een e-mail aan de school.

Schrijf waarom u mailt.
Schrijf welke twee examens u wilt doen.
Stel twee vragen. Bedenk deze vragen zelf.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste heer/mevrouw,

Mijn naam is Mykola.
Ik wil twee examens Engels doen.
Ik wil lezen en schrijven doen.
Hoeveel kost het?
Kan ik met iDEAL betalen?

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 20,
    title: "Mooie buurt",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Buurt"],
    fullTask: `U schrijft voor de wijkkrant. U wilt uw buurt mooier en leuker maken.

Schrijf waarom u dat wilt.
Schrijf wat er beter kan in de buurt.
Schrijf wat u zelf wilt doen of voorstellen.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil de buurt mooier maken.
De buurt is niet schoon.
Ik wil de buurt schoonmaken.
Willen jullie helpen?

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 21,
    title: "Geluidsoverlast buurman",
    type: "Brief",
    category: ["Brief", "Buurt"],
    fullTask: `Uw buurman Piet maakt 's avonds veel lawaai.
U hebt daar last van en wilt met hem praten.
Maar Piet is niet thuis.
U schrijft een brief aan hem.

Schrijf waarom u schrijft.
Schrijf wat het probleem is.
Vraag of u samen kunt praten.

Schrijf een brief. Gebruik hele zinnen.`,
    simpleAnswer: `Beste Piet,

Ik schrijf u want er is veel lawaai in de avond.
Ik heb daar last van.
Kunnen wij samen praten?

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 22,
    title: "Cursus via werk",
    type: "Formulier",
    category: ["Formulier", "Werk", "Cursus"],
    fullTask: `U werkt in een fabriek. Uw baas wil dat u een cursus gaat doen.
U moet een formulier invullen. Sommige gegevens moet u zelf bedenken.

Inschrijfformulier cursus

Voornaam: ____________________
Achternaam: ____________________
Adres: _________________________
Postcode en woonplaats: ____________
Telefoonnummer: ___________________
E-mail: ____________________________

Wanneer wilt u de cursus volgen?
☐ Maandag
☐ Woensdag
☐ Zaterdag

Waar werkt u?
Wat is uw werkervaring?`,
    simpleAnswer: `Voornaam: Mykola
Achternaam: Miskov
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
Telefoonnummer: 0612345678
E-mail: mykola@email.com

Wanneer wilt u de cursus volgen?
Maandag

Waar werkt u?
Ik werk in een fabriek.

Wat is uw werkervaring?
Ik werk vijf jaar.`,
  },
  {
    id: 23,
    title: "Feest in de buurt",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Buurt"],
    fullTask: `U wilt een feest organiseren in uw buurt.
U schrijft een korte tekst voor de wijkkrant om uw buren uit te nodigen.

Schrijf waarom u een feest wilt.
Schrijf waar en wanneer het feest is.
Schrijf wat de buren mee kunnen nemen of doen.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola.
Ik wil een feest organiseren want het is leuk.
Het feest is zaterdag in het park.
Jullie kunnen eten meenemen.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 24,
    title: "Kookcursus afzeggen",
    type: "E-mail",
    category: ["E-mail", "Cursus"],
    fullTask: `U hebt zich ingeschreven voor een kookcursus, maar u kunt niet gaan.
U schrijft een e-mail aan de administratie van de cursus.

Schrijf waarom u niet kunt komen. Bedenk zelf een reden.
Schrijf dat u graag bij de volgende cursus wilt zijn.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste heer/mevrouw,

Ik kan niet naar de kookcursus komen.
Ik ben ziek.
Ik wil graag bij de volgende cursus zijn.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 25,
    title: "Voetbalkaartjes Hassan",
    type: "E-mail",
    category: ["E-mail", "Vrienden"],
    fullTask: `U hebt kaartjes voor een voetbalwedstrijd, maar u kunt niet gaan.
U schrijft een e-mail aan uw vriend Hassan.

Schrijf dat u kaartjes hebt en voor wanneer.
Schrijf waarom u niet kunt gaan.
Vraag of Hassan de kaartjes wil hebben.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste Hassan,

Ik heb kaartjes voor een voetbalwedstrijd.
De wedstrijd is zaterdag.
Ik kan niet gaan want ik moet werken.
Wil je de kaartjes hebben?

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 26,
    title: "Schoolfeest formulier",
    type: "Formulier",
    category: ["Formulier", "School"],
    fullTask: `Uw school viert verschillende feesten.
De docent vraagt met welk feest u wilt helpen.
U vult een formulier in. Sommige gegevens moet u zelf bedenken.

Formulier – Hulp bij schoolfeest

Voornaam: ________________________
Achternaam: _______________________
Adres: ____________________________
Postcode en woonplaats: ____________
Telefoonnummer: ___________________
E-mail: ____________________________

Welk feest kiest u?
☐ Koningsdag
☐ Kerstfeest
☐ Sportdag
☐ Muziekdag

Waarom wilt u met dit feest helpen?
Wat kunt u doen?`,
    simpleAnswer: `Voornaam: Mykola
Achternaam: Miskov
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
Telefoonnummer: 0612345678
E-mail: mykola@email.com

Welk feest kiest u?
Koningsdag

Waarom wilt u met dit feest helpen?
Want het is leuk.

Wat kunt u doen?
Ik kan koffie maken.`,
  },
  {
    id: 27,
    title: "Bestelling incompleet",
    type: "E-mail",
    category: ["E-mail", "Winkel", "Werk"],
    fullTask: `U werkt in een restaurant. U hebt producten besteld, maar u hebt niet alles gekregen.
U schrijft een e-mail aan de winkel.

Schrijf welke twee producten u niet hebt gekregen.
Schrijf wanneer u ze wilt ontvangen.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste heer/mevrouw,

Ik heb producten besteld.
Ik heb geen kaas en geen brood gekregen.
Ik wil deze producten morgen ontvangen.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 28,
    title: "Koken thuis",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Eten"],
    fullTask: `U schrijft een korte tekst voor de wijkkrant over koken in uw huis.

Schrijf wie in uw huis kookt.
Schrijf wat die persoon graag kookt.
Schrijf wanneer die persoon kookt.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Mijn partner kookt bij mij thuis.
Zij maakt graag kebab.
Zij kookt elke dag om 10 uur.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 29,
    title: "Klacht bij huisarts rugpijn",
    type: "Formulier",
    category: ["Formulier", "Dokter", "Werk"],
    fullTask: `U voelt zich niet goed en u vult een formulier in bij de huisarts.
U hebt rugpijn. U denkt dat het komt door uw werk in de winkel, omdat u de hele dag moet staan.
Sommige gegevens moet u zelf bedenken.

Formulier – Klacht bij de huisarts

Voor- en achternaam: ____________________________
Telefoonnummer: ________________________________

Wat is uw klacht?
Hoe lang hebt u al pijn?

Hebt u een klacht bij de winkel ingediend?
☐ Ja → Waarom? __________________________________
☐ Nee

Wanneer denkt u beter te zijn?

In te vullen door de huisarts
Naam arts: ____________________________
Datum: _______________________________`,
    simpleAnswer: `Voor- en achternaam: Mykola Miskov
Telefoonnummer: 0612345678

Wat is uw klacht?
Ik heb rugpijn.

Hoe lang hebt u al pijn?
Twee dagen.

Hebt u een klacht bij de winkel ingediend?
Nee

Wanneer denkt u beter te zijn?
Volgende week.`,
  },
  {
    id: 30,
    title: "Karim ziek",
    type: "E-mail",
    category: ["E-mail", "School"],
    fullTask: `U volgt een Nederlandse cursus.
Vandaag was er een les, maar Karim was ziek.
U schrijft een e-mail aan Karim.

Vraag hoe het met hem gaat.
Schrijf wat het huiswerk is.
Wens hem beterschap.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste Karim,

Hoe gaat het met je?
Het huiswerk is pagina 10.
Beterschap!

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 31,
    title: "Fiets lenen vriendin",
    type: "E-mail",
    category: ["E-mail", "Transport", "Vrienden"],
    fullTask: `Uw fiets is kapot.
U moet naar de kroeg.
U schrijft een e-mail aan uw vriendin.

Schrijf waarom u mailt.
Schrijf waar u naartoe moet.
Vraag of u haar fiets mag lenen.
Schrijf wanneer u de fiets teruggeeft.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste vriendin,

Mijn fiets is kapot.
Ik moet naar de kroeg.
Mag ik jouw fiets lenen?
Ik geef de fiets morgen terug.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 32,
    title: "Geboorte baby",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Familie"],
    fullTask: `U schrijft een korte tekst voor de wijkkrant.
U vertelt wat mensen in uw land doen als er een baby geboren wordt.

Schrijf of mensen iets speciaals doen.
Schrijf hoe andere mensen weten dat er een baby is geboren.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over baby’s in mijn land.
Wij koken veel eten.
Dat is speciaal.
Andere mensen weten het via Instagram.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 33,
    title: "Docent nodig",
    type: "E-mail",
    category: ["E-mail", "School", "Cursus"],
    fullTask: `U leert Nederlands.
U wilt een docent om u te helpen met de taal.
U schrijft een e-mail aan de taalschool.

Schrijf waarom u mailt.
Schrijf wat u met de docent wilt doen.
Schrijf waar u wilt leren.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste heer/mevrouw,

Ik leer Nederlands.
Ik wil een docent.
Ik wil spreken en schrijven oefenen.
Ik wil thuis leren.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 34,
    title: "Muziekschool dagen",
    type: "Formulier",
    category: ["Formulier", "Cursus"],
    fullTask: `U wilt zich inschrijven bij een muziekschool.
U vult een formulier in. Sommige gegevens moet u zelf bedenken.

Inschrijfformulier muziekschool

Voornaam: __________________________
Achternaam: _________________________
Adres: ______________________________
Postcode en woonplaats: _______________
Telefoonnummer: _____________________
E-mail: ______________________________

Welke dag(en) wilt u les hebben?
☐ Maandag
☐ Dinsdag
☐ Woensdag
☐ Donderdag
☐ Vrijdag
☐ Zaterdag

Wanneer wilt u beginnen met de lessen?

Hebt u al muzieklessen gevolgd?
☐ Ja → Welke? _________________________
☐ Nee`,
    simpleAnswer: `Voornaam: Mykola
Achternaam: Miskov
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
Telefoonnummer: 0612345678
E-mail: mykola@email.com

Welke dag wilt u les hebben?
Maandag

Wanneer wilt u beginnen?
Volgende week.

Hebt u al muzieklessen gevolgd?
Nee`,
  },
  {
    id: 35,
    title: "Wonen vroeger en nu",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Huis"],
    fullTask: `U schrijft een korte tekst voor de wijkkrant.
U vertelt waar u vroeger woonde en waar u nu woont.

Schrijf waar u vroeger woonde.
Schrijf waar u nu woont.
Schrijf wat u leuker vindt: de stad of het dorp, en waarom.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik woonde vroeger in een dorp.
Nu woon ik in de stad.
Ik vind de stad leuker want er zijn veel winkels.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 36,
    title: "Cadeau voor docent",
    type: "E-mail",
    category: ["E-mail", "School"],
    fullTask: `U wilt uw docent een cadeau geven.
U denkt aan bloemen of een boek.
U schrijft een e-mail aan uw klasgenoten.

Schrijf waarom u mailt.
Schrijf wat u wilt kopen.
Vraag of uw klasgenoten geld willen geven voor het cadeau.
Schrijf tot welke datum ze het geld kunnen geven.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste klasgenoten,

Ik wil onze docent een cadeau geven.
Ik wil bloemen kopen.
Kunnen jullie geld geven?
Geef het geld voor vrijdag.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 37,
    title: "Straatfeest formulier",
    type: "Formulier",
    category: ["Formulier", "Buurt"],
    fullTask: `U wilt meedoen aan een feest op straat.
U moet een formulier invullen. Sommige gegevens moet u zelf bedenken.

Inschrijfformulier straatfeest

Voornaam: __________________________
Achternaam: _________________________
Adres: ______________________________
Postcode en woonplaats: _______________
Telefoonnummer: _____________________
E-mail: ______________________________

Met hoeveel personen komt u?
Wat wilt u doen tijdens het feest? Bijvoorbeeld zingen, koken, helpen met versieren.
Wanneer kunt u helpen met voorbereiden?`,
    simpleAnswer: `Voornaam: Mykola
Achternaam: Miskov
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
Telefoonnummer: 0612345678
E-mail: mykola@email.com

Met hoeveel personen komt u?
Met twee personen.

Wat wilt u doen tijdens het feest?
Ik wil kebab maken.

Wanneer kunt u helpen?
Zaterdag.`,
  },
  {
    id: 38,
    title: "Schoonmaken niet af kantoor",
    type: "E-mail",
    category: ["E-mail", "Werk"],
    fullTask: `U werkte in het kantoor en u moest schoonmaken.
Maar u hebt niet alles gedaan.
U schrijft een e-mail aan uw collega.

Schrijf wat u niet hebt gedaan.
Schrijf waarom u dat niet hebt gedaan.
Bied uw excuses aan.
Vraag uw collega om het af te maken.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste collega,

Ik heb de tafel niet schoongemaakt.
Ik had geen tijd.
Sorry.
Kun je het afmaken?

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 39,
    title: "Nieuw in Nederland",
    type: "Wijkkrant",
    category: ["Wijkkrant"],
    fullTask: `U schrijft een korte tekst voor de wijkkrant.
U vertelt over uzelf.

Schrijf waar u vandaan komt.
Schrijf wanneer u naar Nederland bent gekomen.
Schrijf hoe u zich voelt en wat u leuk vindt in Nederland.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik ben in 2021 naar Nederland gekomen.
Ik voel mij goed.
Ik vind Nederland mooi.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 40,
    title: "Kat gevonden",
    type: "Briefje",
    category: ["Briefje", "Dieren", "Buurt"],
    fullTask: `Er zit al twee dagen een kat bij uw huis.
U weet niet van wie de kat is.
U schrijft een briefje voor het prikbord in de supermarkt.

Schrijf wat er gebeurd is.
Beschrijf de kat, minimaal twee kenmerken. Bedenk het zelf.
Schrijf wat u wilt.

Schrijf een kort bericht. Gebruik hele zinnen.`,
    simpleAnswer: `Hallo,

Er zit al twee dagen een kat bij mijn huis.
De kat is zwart en klein.
Van wie is deze kat?
Bel mij alstublieft.

Mykola`,
  },
  {
    id: 41,
    title: "ROC Open Dag",
    type: "Formulier",
    category: ["Formulier", "School"],
    fullTask: `Het ROC organiseert een open dag.
U wilt komen en u vult het formulier in. Sommige gegevens moet u zelf bedenken.

Inschrijfformulier Open Dag ROC

Voornaam: __________________________
Achternaam: _________________________
Geboortedatum: ______________________
Adres: ______________________________
Postcode en woonplaats: _______________
E-mail: ______________________________

Welke opleiding vindt u interessant?
☐ Verpleegkundige
☐ Kapper
☐ ICT-medewerker
☐ Bakker

Waarom vindt u deze opleiding interessant?
Waarom wilt u naar de open dag komen?`,
    simpleAnswer: `Voornaam: Mykola
Achternaam: Miskov
Geboortedatum: 01-01-1990
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
E-mail: mykola@email.com

Welke opleiding vindt u interessant?
Bakker.

Waarom vindt u deze opleiding interessant?
Want ik wil brood maken.

Waarom wilt u naar de open dag komen?
Ik wil informatie krijgen.`,
  },
  {
    id: 42,
    title: "Favoriete website of app",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Digitaal"],
    fullTask: `U schrijft voor de wijkkrant over uw favoriete website of app.

Schrijf welke app of website u graag gebruikt.
Schrijf waarom u die leuk vindt.
Schrijf wanneer u die app of website gebruikt.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Mijn favoriete app is TikTok.
Ik vind TikTok leuk want het is interessant.
Ik gebruik TikTok elke dag.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 43,
    title: "Rugpijn na tillen",
    type: "E-mail",
    category: ["E-mail", "Werk", "Dokter"],
    fullTask: `U had gisteren dozen getild op uw werk.
Nu hebt u rugpijn.
Vanmiddag gaat u naar de fysiotherapeut.
U schrijft een e-mail aan uw baas.

Schrijf wat er gisteren is gebeurd.
Schrijf dat u nu pijn hebt.
Schrijf wat u vandaag na de lunch gaat doen.`,
    simpleAnswer: `Beste baas,

Gisteren heb ik dozen getild.
Nu heb ik rugpijn.
Vandaag na de lunch ga ik naar de fysiotherapeut.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 44,
    title: "Eten meenemen kookcursus",
    type: "E-mail",
    category: ["E-mail", "Cursus", "Eten"],
    fullTask: `U volgt een kookcursus.
Er is een gezamenlijke avond en iedereen moet iets te eten meenemen.
U schrijft een e-mail aan de organisator.

Schrijf wat u meeneemt om te eten.
Schrijf voor hoeveel personen het is.
Schrijf of er vlees in zit.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste heer/mevrouw,

Ik neem kebab mee.
Het is voor vier personen.
Er zit vlees in.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 45,
    title: "Muziekschool instrument",
    type: "Formulier",
    category: ["Formulier", "Cursus"],
    fullTask: `U wilt muzieklessen volgen.
U vult een formulier in. Sommige gegevens moet u zelf bedenken.

Inschrijfformulier Muziekschool

Voornaam: __________________________
Achternaam: _________________________
Adres: ______________________________
Postcode en woonplaats: _______________
Telefoonnummer: _____________________
E-mail: ______________________________

Welk instrument wilt u leren?
☐ Gitaar
☐ Piano
☐ Drums
☐ Zang

Wanneer kunt u les nemen?
Waarom wilt u muziek leren?`,
    simpleAnswer: `Voornaam: Mykola
Achternaam: Miskov
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
Telefoonnummer: 0612345678
E-mail: mykola@email.com

Welk instrument wilt u leren?
Gitaar.

Wanneer kunt u les nemen?
Maandag.

Waarom wilt u muziek leren?
Want muziek is leuk.`,
  },
  {
    id: 46,
    title: "Schoenen niet gemaakt",
    type: "E-mail",
    category: ["E-mail", "Werk"],
    fullTask: `U werkt in een schoenmakerij.
Vandaag hebt u geen schoenen kunnen maken of repareren.
U schrijft een e-mail aan uw collega.

Schrijf wat u niet hebt gedaan.
Schrijf waarom u dat niet hebt gedaan.
Schrijf wat uw collega nu moet doen.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste collega,

Ik heb vandaag geen schoenen gemaakt.
Ik was ziek.
Kun je morgen de schoenen repareren?

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 47,
    title: "Aardige buurman",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Buurt"],
    fullTask: `U schrijft een korte tekst voor de wijkkrant.
U vertelt iets over uw buurman.

Schrijf dat uw buurman aardig is.
Schrijf waarom hij aardig is.
Schrijf wat u samen met hem doet.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Mijn buurman heet Armen.
Hij is aardig want hij helpt mij.
Wij drinken samen koffie.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 48,
    title: "Vakantie",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Vakantie"],
    fullTask: `U schrijft een korte tekst voor de wijkkrant.
U vertelt over uw vakantie.

Schrijf waar u op vakantie was.
Schrijf wanneer u daar was.
Schrijf met wie u was.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik was op vakantie in Spanje.
Ik was daar in juli.
Ik was daar met mijn partner.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 49,
    title: "Zoon ophalen Mariska",
    type: "E-mail",
    category: ["E-mail", "Familie"],
    fullTask: `U kunt morgen uw zoon niet van school halen.
U schrijft een e-mail aan Mariska.

Schrijf waarom u mailt.
Schrijf waarom u uw zoon niet zelf kunt ophalen.
Vraag of Mariska uw zoon kan ophalen.
Schrijf hoe laat u thuis bent.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste Mariska,

Ik schrijf je want ik kan morgen mijn zoon niet ophalen.
Ik moet werken.
Kun je mijn zoon ophalen?
Ik ben om 18 uur thuis.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 50,
    title: "EHBO cursus",
    type: "Formulier",
    category: ["Formulier", "Cursus"],
    fullTask: `U wilt een EHBO-cursus volgen.
U vult een formulier in. Sommige gegevens moet u zelf bedenken.

Inschrijfformulier EHBO

Voornaam: __________________________
Achternaam: _________________________
Adres: ______________________________
Postcode en woonplaats: _______________
Telefoonnummer: _____________________
E-mail: ______________________________

Wat voor werk doet u?
Waarom wilt u een EHBO-cursus volgen?`,
    simpleAnswer: `Voornaam: Mykola
Achternaam: Miskov
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
Telefoonnummer: 0612345678
E-mail: mykola@email.com

Wat voor werk doet u?
Ik werk in een restaurant.

Waarom wilt u een EHBO-cursus volgen?
Want ik wil mensen helpen.`,
  },
  {
    id: 51,
    title: "Cursus gemist docent",
    type: "E-mail",
    category: ["E-mail", "School", "Cursus"],
    fullTask: `U had vorige week uw eerste les, maar u bent niet gekomen.
U schrijft een e-mail aan uw docent.

Schrijf waarom u mailt.
Schrijf waarom u niet bij de les was.
Vraag wanneer u de eerste les kunt volgen.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste docent,

Ik schrijf u want ik was niet bij de les.
Ik was ziek.
Wanneer kan ik de eerste les volgen?

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 52,
    title: "Keukenspullen Amir",
    type: "E-mail",
    category: ["E-mail", "Vrienden", "Huis"],
    fullTask: `Uw vriend Amir heeft u een doos met keukenspullen gegeven.
U schrijft een e-mail aan hem.

Bedank Amir voor de doos.
Schrijf welke dingen u gebruikt.
Schrijf waarom u die dingen gebruikt.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste Amir,

Bedankt voor de doos met keukenspullen.
Ik gebruik de pan en het mes.
Ik gebruik deze dingen want ik kook elke dag.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 53,
    title: "Minder uren werken",
    type: "Formulier",
    category: ["Formulier", "Werk"],
    fullTask: `U wilt minder uren werken.
U vult een formulier in. Sommige gegevens moet u zelf bedenken.

Formulier – Minder uren werken

Voor- en achternaam: ____________________________
Geboortedatum: _________________________________
Adres: _________________________________________
Postcode en woonplaats: _________________________
Telefoonnummer: ________________________________
E-mail: ________________________________________

Waar werkt u?
Wat doet u daar?
Hoeveel uur werkt u nu per week?
Hoeveel uur wilt u werken?
Vanaf welke datum wilt u dit veranderen?
Waarom wilt u minder of meer werken?`,
    simpleAnswer: `Voor- en achternaam: Mykola Miskov
Geboortedatum: 01-01-1990
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
Telefoonnummer: 0612345678
E-mail: mykola@email.com

Waar werkt u?
Ik werk in een restaurant.

Wat doet u daar?
Ik maak kebab.

Hoeveel uur werkt u nu per week?
40 uur.

Hoeveel uur wilt u werken?
24 uur.

Vanaf welke datum wilt u dit veranderen?
1 mei.

Waarom wilt u minder werken?
Want ik ben moe.`,
  },
  {
    id: 54,
    title: "Feestdag",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Feest"],
    fullTask: `U schrijft voor de wijkkrant over een feestdag.

Schrijf over welke feestdag het gaat.
Schrijf wat mensen op die dag doen.
Schrijf waarom u die dag leuk vindt.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Mijn favoriete feestdag is mijn verjaardag.
Mensen eten taart en drinken koffie.
Ik vind deze dag leuk want het is gezellig.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 55,
    title: "Hulp met huiswerk",
    type: "E-mail",
    category: ["E-mail", "School", "Vrienden"],
    fullTask: `U leert Nederlands en u hebt huiswerk.
Maar u begrijpt iets niet.
U schrijft een e-mail aan uw vriend.

Schrijf wat u niet kunt doen.
Vraag of hij u kan helpen.
Stel een moment voor om samen te oefenen.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste vriend,

Ik leer Nederlands.
Ik begrijp het huiswerk niet.
Kun je mij helpen?
Kunnen wij zaterdag oefenen?

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 56,
    title: "Nieuwe woning vriendin",
    type: "E-mail",
    category: ["E-mail", "Vrienden", "Huis"],
    fullTask: `Uw vriendin heeft een nieuwe woning.
U schrijft een e-mail aan haar.

Feliciteer uw vriendin met de nieuwe woning.
Schrijf dat u wilt helpen.
Vraag wanneer ze gaat verhuizen.
Schrijf waarmee u kunt helpen.`,
    simpleAnswer: `Beste vriendin,

Gefeliciteerd met je nieuwe woning.
Ik wil je helpen.
Wanneer ga je verhuizen?
Ik kan dozen dragen.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 57,
    title: "Evaluatie taalcursus",
    type: "Formulier",
    category: ["Formulier", "School", "Cursus"],
    fullTask: `U volgt een taalcursus.
Uw docent wil weten wat goed is en wat niet goed is.
U vult het formulier in. Sommige gegevens moet u zelf bedenken.

Evaluatieformulier taalcursus

Voornaam: __________________________
Achternaam: _________________________
Niveau: ☐ A1 ☐ A2 ☐ B1

Wat vindt u goed aan de cursus? En waarom?
☐ Boek – __________________________________________
☐ Docent – _________________________________________
☐ Lokaal – _________________________________________

Wat vindt u niet goed? En waarom?
☐ Boek – __________________________________________
☐ Docent – _________________________________________
☐ Lokaal – _________________________________________`,
    simpleAnswer: `Voornaam: Mykola
Achternaam: Miskov
Niveau: A2

Wat vindt u goed aan de cursus?
Docent.

Waarom?
Want de docent helpt mij.

Wat vindt u niet goed?
Lokaal.

Waarom?
Want het lokaal is klein.`,
  },
  {
    id: 58,
    title: "Kapotte werkbroek",
    type: "E-mail",
    category: ["E-mail", "Werk"],
    fullTask: `U werkt in de keuken van een restaurant.
Uw werkbroek is kapot.
U schrijft een e-mail aan uw baas.

Schrijf wat er gebeurd is.
Schrijf wat u wilt, bijvoorbeeld nieuwe broek of reparatie.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste baas,

Mijn werkbroek is kapot.
Ik werk in de keuken.
Ik wil graag een nieuwe broek.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 59,
    title: "Vrije tijd",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Vrije tijd"],
    fullTask: `U schrijft een korte tekst voor de wijkkrant.
U vertelt over uw vrije tijd.

Schrijf wat u in uw vrije tijd doet.
Schrijf waar u dat doet.
Schrijf met wie u dat doet.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
In mijn vrije tijd kijk ik TikTok.
Ik doe dat thuis.
Ik doe dat met mijn partner.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 60,
    title: "Zieke klasgenoot huiswerk",
    type: "E-mail",
    category: ["E-mail", "School"],
    fullTask: `Uw klasgenoot is ziek en was niet op de les.
U schrijft een e-mail aan hem.

Vraag hoe het met hem gaat.
Schrijf wat jullie in de les hebben gedaan.
Schrijf wat het huiswerk is.
Wens beterschap.`,
    simpleAnswer: `Beste klasgenoot,

Hoe gaat het met je?
Wij hebben vandaag Nederlands geleerd.
Het huiswerk is pagina 10.
Beterschap!

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 61,
    title: "Internetstoring",
    type: "Formulier",
    category: ["Formulier", "Digitaal"],
    fullTask: `Uw internet werkt niet.
U vult een formulier in op de website van het internetbedrijf.
Sommige gegevens moet u zelf bedenken.

Formulier – Probleem met internet

Voor- en achternaam: ___________________________
Adres: ________________________________________
Postcode en woonplaats: _________________________
Telefoonnummer: _______________________________
E-mail: _______________________________________

Wat is het probleem?
Hoe lang hebt u dit probleem al?`,
    simpleAnswer: `Voor- en achternaam: Mykola Miskov
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
Telefoonnummer: 0612345678
E-mail: mykola@email.com

Wat is het probleem?
Mijn internet werkt niet.

Hoe lang hebt u dit probleem al?
Twee dagen.`,
  },
  {
    id: 62,
    title: "Schoonmaken restaurant niet af",
    type: "E-mail",
    category: ["E-mail", "Werk"],
    fullTask: `U werkt als schoonmaker in een restaurant.
U was vandaag ziek en kon niet alles schoonmaken.
U schrijft een e-mail aan uw collega.

Schrijf dat u ziek bent.
Schrijf waarom u ziek bent.
Schrijf wat u niet hebt gedaan.
Vraag uw collega om dat morgen te doen.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste collega,

Ik ben ziek.
Ik heb rugpijn.
Ik heb de keuken niet schoongemaakt.
Kun je dat morgen doen?

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 63,
    title: "Feest",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Feest"],
    fullTask: `U schrijft voor de wijkkrant over een feest.

Schrijf over welk feest het gaat.
Schrijf wanneer het feest was.
Schrijf wat u van het feest vond.
Schrijf waarom het leuk was.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over een feest.
Het feest was zaterdag.
Ik vond het feest leuk.
Het was leuk want er was veel eten.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 64,
    title: "Taken overnemen",
    type: "E-mail",
    category: ["E-mail", "Werk"],
    fullTask: `U werkt tot 13.00 uur.
U hebt geen tijd om uw bureau op te ruimen en koffie te brengen voor meneer de Boer.
Uw collega komt om 13.00 uur.
U schrijft een e-mail aan uw collega.

Schrijf waarom u mailt.
Schrijf wat uw collega moet doen.
Noem de twee taken.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste collega,

Ik werk vandaag tot 13 uur.
Ik heb geen tijd.
Kun je mijn bureau opruimen?
Kun je koffie brengen voor meneer De Boer?

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 65,
    title: "Energieleverancier",
    type: "Formulier",
    category: ["Formulier", "Huis"],
    fullTask: `U wilt klant worden bij een energiebedrijf.
U vult een formulier in. Sommige gegevens moet u zelf bedenken.

Formulier – Nieuwe klant energiebedrijf

Voornaam: __________________________
Achternaam: _________________________
Adres: ______________________________
Postcode en woonplaats: _______________
Telefoonnummer: _____________________
E-mail: ______________________________

Wat voor energie wilt u?
☐ Gas
☐ Elektriciteit
☐ Gas en elektriciteit

Wanneer wilt u beginnen met het contract?

Wilt u automatische betaling?
☐ Ja
☐ Nee`,
    simpleAnswer: `Voornaam: Mykola
Achternaam: Miskov
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
Telefoonnummer: 0612345678
E-mail: mykola@email.com

Wat voor energie wilt u?
Gas en elektriciteit.

Wanneer wilt u beginnen?
1 mei.

Wilt u automatische betaling?
Ja.`,
  },
  {
    id: 66,
    title: "Vriend Nederlandse cursus",
    type: "E-mail",
    category: ["E-mail", "Vrienden", "Cursus"],
    fullTask: `Uw vriend wil Nederlands leren.
U schrijft een e-mail aan hem.

Schrijf dat uw vriend een cursus zoekt.
Schrijf welke school u goed vindt.
Schrijf waarom u die school goed vindt.
Schrijf hoe hij zich kan inschrijven.

Schrijf een e-mail. Gebruik hele zinnen.`,
    simpleAnswer: `Beste vriend,

Ik weet dat je Nederlands wilt leren.
Ik vind Ad Appel een goede school.
De school is goed want de lessen zijn duidelijk.
Je kunt je online inschrijven.

Met vriendelijke groet,
Mykola`,
  },
  {
    id: 67,
    title: "Vrienden",
    type: "Wijkkrant",
    category: ["Wijkkrant", "Vrienden"],
    fullTask: `U schrijft een korte tekst voor de wijkkrant.
U vertelt over uw vrienden.

Schrijf hoeveel vrienden u hebt.
Schrijf hoe lang u hen kent.
Schrijf wat u samen doet.

Schrijf minimaal drie zinnen. Gebruik hele zinnen.`,
    simpleAnswer: `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik heb een vriend.
Zijn naam is Armen.
Ik ken Armen al 10 jaar.
Wij drinken koffie in het park.

Met vriendelijke groet,
Mykola`,
  },
];

console.log("Loaded tickets:", tickets.length);
