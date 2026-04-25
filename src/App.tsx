import { useEffect, useMemo, useState } from "react";
import { cheatsheet } from "./data/cheatsheet";
import { tickets } from "./data/tickets";
import type { Ticket } from "./types";

const FILTERS = [
  "Formulier",
  "E-mail",
  "Wijkkrant",
  "Briefje",
  "Brief",
  "Werk",
  "School",
  "Buurt",
  "Dokter",
  "Winkel",
  "Vrienden",
  "Cursus",
  "Familie",
  "Transport",
];

const STORAGE_KEYS = {
  known: "a2_known_tickets",
  answers: "a2_answers",
  theme: "a2_theme",
  exam: "a2_exam_mode",
  userName: "a2_user_name",
};

const QUICK_REASONS = [
  "want ik ben ziek",
  "want ik heb geen tijd",
  "want ik moet werken",
  "want het is goedkoper",
  "want het is duur",
  "want het is leuk",
  "want het is belangrijk",
  "want mijn auto is kapot",
  "want mijn fiets is kapot",
  "want mijn laptop is kapot",
];

const QUICK_REQUESTS = [
  "Kun je mij helpen?",
  "Kun je koffie maken?",
  "Kun je mij bellen?",
  "Wil je mij helpen?",
  "Wil je de deur dicht doen?",
];

const QUICK_PLACES = ["thuis", "in het park", "op het werk", "in de stad", "bij mij thuis"];
const QUICK_TIMES = ["om 10 uur", "in de ochtend", "in de middag", "morgen", "volgende week"];
const QUICK_ACTIONS = ["drink koffie", "eet kebab", "kijk TikTok", "werk", "studeer Nederlands"];

type CheckResult = {
  pass: boolean;
  checks: { label: string; ok: boolean }[];
};

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function sentenceCount(input: string): number {
  return input
    .split(/[\n.!?]+/)
    .map((part) => part.trim())
    .filter(Boolean).length;
}

function containsAny(input: string, words: string[]): boolean {
  const lower = input.toLowerCase();
  return words.some((word) => lower.includes(word.toLowerCase()));
}

function evaluateAnswer(answer: string, ticket: Ticket, userName: string): CheckResult {
  const lower = answer.toLowerCase();
  const keywordHits = ticket.keywords.filter((k) => lower.includes(k.toLowerCase()));
  const keyWordsOk = keywordHits.length >= Math.max(2, Math.ceil(ticket.keywords.length * 0.3));
  const safeName = userName.trim() || "Mykola";
  const nameRegex = new RegExp(escapeRegExp(safeName), "i");

  const checks = [
    { label: "Є привітання (Beste/Hallo)", ok: /beste|hallo/i.test(answer) },
    { label: "Є завершення (Met vriendelijke groet)", ok: /met vriendelijke groet/i.test(answer) },
    { label: `Є ім'я ${safeName}`, ok: nameRegex.test(answer) },
    { label: "Мінімум 3 речення", ok: sentenceCount(answer) >= 3 },
    { label: "Є ключові слова білета", ok: keyWordsOk },
  ];

  return { pass: checks.every((check) => check.ok), checks };
}

function pickRandomTicket(exceptId?: number): Ticket {
  const list = tickets.filter((ticket) => ticket.id !== exceptId);
  return list[Math.floor(Math.random() * list.length)];
}

function downloadFile(filename: string, content: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function getTemplateByType(type: Ticket["type"]): string {
  if (type === "Wijkkrant") {
    return `Beste buren,

Mijn naam is Mykola. Ik kom uit Oekraïne.
Ik wil jullie vertellen over ...
Ik vind het leuk want ...

Met vriendelijke groet,
Mykola`;
  }
  if (type === "Formulier") {
    return `Voornaam: Mykola
Achternaam: Miskov
Adres: Hoofdstraat 10
Postcode en woonplaats: 1234 AB Amsterdam
Telefoonnummer: 0612345678
E-mail: mykola@email.com`;
  }
  if (type === "Briefje") {
    return `Hallo,

Ik schrijf ... want ...
Kun je ...?

Groet,
Mykola`;
  }
  if (type === "Brief") {
    return `Beste [naam],

Ik schrijf ... want ...
Kunnen wij praten?

Met vriendelijke groet,
Mykola`;
  }
  return `Beste heer/mevrouw,

Mijn naam is Mykola.
Ik schrijf u want ...
Kun je mij helpen?

Met vriendelijke groet,
Mykola`;
}

export default function App() {
  const [activePage, setActivePage] = useState<"trainer" | "cheatsheet" | "koli">("trainer");
  const [selectedId, setSelectedId] = useState<number>(1);
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [knownMap, setKnownMap] = useState<Record<number, boolean>>({});
  const [hideSimpleAnswer, setHideSimpleAnswer] = useState(true);
  const [hideTemplate, setHideTemplate] = useState(false);
  const [collapseHelpPanels, setCollapseHelpPanels] = useState(false);
  const [checkResult, setCheckResult] = useState<CheckResult | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [examMode, setExamMode] = useState(false);
  const [examTicketId, setExamTicketId] = useState<number | null>(null);
  const [examSeconds, setExamSeconds] = useState(600);
  const [exportMessage, setExportMessage] = useState("");
  const [userName, setUserName] = useState("Mykola");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileTicketsOpen, setIsMobileTicketsOpen] = useState(false);
  const [quickReason, setQuickReason] = useState(QUICK_REASONS[0]);
  const [quickRequest, setQuickRequest] = useState(QUICK_REQUESTS[0]);
  const [quickPlace, setQuickPlace] = useState(QUICK_PLACES[0]);
  const [quickTime, setQuickTime] = useState(QUICK_TIMES[0]);
  const [quickAction, setQuickAction] = useState(QUICK_ACTIONS[0]);

  const selectedTicket = useMemo(
    () => tickets.find((ticket) => ticket.id === selectedId) ?? null,
    [selectedId],
  );

  const examTicket = useMemo(
    () => tickets.find((ticket) => ticket.id === examTicketId) ?? null,
    [examTicketId],
  );

  useEffect(() => {
    const known = localStorage.getItem(STORAGE_KEYS.known);
    const savedAnswers = localStorage.getItem(STORAGE_KEYS.answers);
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
    const savedExam = localStorage.getItem(STORAGE_KEYS.exam);
    const savedUserName = localStorage.getItem(STORAGE_KEYS.userName);

    if (known) setKnownMap(JSON.parse(known) as Record<number, boolean>);
    if (savedAnswers) setAnswers(JSON.parse(savedAnswers) as Record<number, string>);
    if (savedTheme === "dark") setIsDark(true);
    if (savedUserName && savedUserName.trim()) setUserName(savedUserName);
    if (savedExam) {
      const examState = JSON.parse(savedExam) as { examMode: boolean; examTicketId: number | null; examSeconds: number };
      setExamMode(Boolean(examState.examMode));
      setExamTicketId(examState.examTicketId ?? null);
      setExamSeconds(examState.examSeconds ?? 600);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.known, JSON.stringify(knownMap));
  }, [knownMap]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.answers, JSON.stringify(answers));
  }, [answers]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.theme, isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.userName, userName.trim() || "Mykola");
  }, [userName]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.exam, JSON.stringify({ examMode, examTicketId, examSeconds }));
  }, [examMode, examTicketId, examSeconds]);

  useEffect(() => {
    if (!examMode) return;
    if (examSeconds <= 0) return;
    const timer = window.setInterval(() => setExamSeconds((prev) => Math.max(0, prev - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [examMode, examSeconds]);

  const filteredTickets = useMemo(() => {
    const q = search.toLowerCase().trim();
    return tickets.filter((ticket) => {
      const haystack = `${ticket.id} ${ticket.title} ${ticket.type} ${ticket.fullTask} ${ticket.keywords.join(" ")}`.toLowerCase();
      const matchesSearch = !q || haystack.includes(q);
      const matchesFilters =
        activeFilters.length === 0 || activeFilters.some((filter) => ticket.category.includes(filter) || ticket.type === filter);
      return matchesSearch && matchesFilters;
    });
  }, [search, activeFilters]);

  const currentTicket = examMode && examTicket ? examTicket : selectedTicket;
  const currentAnswer = currentTicket ? answers[currentTicket.id] ?? "" : "";
  const progressDone = Object.values(knownMap).filter(Boolean).length;
  const displayName = userName.trim() || "Mykola";
  const personalizeText = (text: string) => text.replace(/\bMykola\b/g, displayName);
  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]));
  };

  const updateAnswer = (value: string) => {
    if (!currentTicket) return;
    setAnswers((prev) => ({ ...prev, [currentTicket.id]: value }));
    setCheckResult(null);
  };

  const toggleKnown = () => {
    if (!currentTicket) return;
    setKnownMap((prev) => ({ ...prev, [currentTicket.id]: !prev[currentTicket.id] }));
  };

  const runCheck = () => {
    if (!currentTicket) return;
    setCheckResult(evaluateAnswer(currentAnswer, currentTicket, displayName));
  };

  const copySimpleAnswer = async () => {
    if (!currentTicket) return;
    await navigator.clipboard.writeText(personalizeText(currentTicket.simpleAnswer));
  };

  const toggleExamMode = () => {
    if (tickets.length === 0) return;
    if (!examMode) {
      const random = pickRandomTicket(selectedId);
      setExamTicketId(random.id);
      setExamSeconds(600);
      setHideSimpleAnswer(true);
    } else {
      setExamTicketId(null);
      setExamSeconds(600);
    }
    setCheckResult(null);
    setExamMode((prev) => !prev);
  };

  const nextExamTicket = () => {
    if (tickets.length === 0) return;
    const random = pickRandomTicket(examTicketId ?? undefined);
    setExamTicketId(random.id);
    setExamSeconds(600);
    setCheckResult(null);
  };

  const exportAnswersAsJson = () => {
    const payload = tickets
      .filter((ticket) => (answers[ticket.id] ?? "").trim().length > 0)
      .map((ticket) => ({
        id: ticket.id,
        title: ticket.title,
        type: ticket.type,
        fullTask: ticket.fullTask,
        answer: answers[ticket.id] ?? "",
        known: Boolean(knownMap[ticket.id]),
      }));
    downloadFile(
      "a2-schrijven-antwoorden-mykola.json",
      JSON.stringify(payload, null, 2),
      "application/json;charset=utf-8",
    );
    setExportMessage(`Експортовано ${payload.length} відповідей у JSON.`);
  };

  const exportAnswersAsTxt = () => {
    const blocks = tickets
      .filter((ticket) => (answers[ticket.id] ?? "").trim().length > 0)
      .map((ticket) => {
        const userAnswer = answers[ticket.id] ?? "";
        return [
          `#${ticket.id} ${ticket.title} [${ticket.type}]`,
          `Full task: ${ticket.fullTask}`,
          "My answer:",
          userAnswer,
          "",
          "------------------------------",
        ].join("\n");
      });
    const text = blocks.length > 0 ? blocks.join("\n") : "Немає збережених відповідей.";
    downloadFile("a2-schrijven-antwoorden-mykola.txt", text, "text/plain;charset=utf-8");
    setExportMessage(`Експортовано ${blocks.length} відповідей у TXT.`);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-[1500px] p-3 md:p-5">
        <header className="mb-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold">A2 Schrijven Trainer — Mykola System</h1>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Простий стиль A2: коротко, want замість omdat, ім'я Mykola, країна Oekraïne.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="rounded-xl bg-slate-200 px-3 py-2 text-sm font-semibold dark:bg-slate-700" onClick={() => setActivePage("trainer")}>
                Тренажер
              </button>
              <button className="rounded-xl bg-slate-200 px-3 py-2 text-sm font-semibold dark:bg-slate-700" onClick={() => setActivePage("cheatsheet")}>
                Шпаргалка
              </button>
              <button className="rounded-xl bg-slate-200 px-3 py-2 text-sm font-semibold dark:bg-slate-700" onClick={() => setActivePage("koli")}>
                Шпаргалка Колі
              </button>
              <button className="rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white" onClick={exportAnswersAsTxt}>
                Експорт TXT
              </button>
              <button className="rounded-xl bg-emerald-700 px-3 py-2 text-sm font-semibold text-white" onClick={exportAnswersAsJson}>
                Експорт JSON
              </button>
              <button className="rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white" onClick={toggleExamMode}>
                {examMode ? "Вийти з екзамену" : "Режим Екзамен"}
              </button>
              <button className="rounded-xl bg-sky-700 px-3 py-2 text-sm font-semibold text-white" onClick={() => setIsProfileOpen((prev) => !prev)}>
                Ім'я: {displayName}
              </button>
              <button className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white dark:bg-slate-100 dark:text-slate-900" onClick={() => setIsDark((prev) => !prev)}>
                {isDark ? "Світла тема" : "Темна тема"}
              </button>
            </div>
          </div>
          {isProfileOpen && (
            <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
              <label className="block text-sm font-semibold">Твоє ім'я для листів</label>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
                placeholder="Введи ім'я"
              />
            </div>
          )}
          <div className="mt-3 text-sm">
            <span className="rounded-lg bg-emerald-100 px-3 py-1 font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
              Прогрес: {progressDone}/{tickets.length} білетів знаю
            </span>
            {exportMessage && (
              <span className="ml-2 rounded-lg bg-sky-100 px-3 py-1 font-semibold text-sky-700 dark:bg-sky-900/40 dark:text-sky-200">
                {exportMessage}
              </span>
            )}
            {examMode && (
              <span className="ml-2 rounded-lg bg-orange-100 px-3 py-1 font-semibold text-orange-700 dark:bg-orange-900/40 dark:text-orange-200">
                Екзамен: {Math.floor(examSeconds / 60)
                  .toString()
                  .padStart(2, "0")}
                :{(examSeconds % 60).toString().padStart(2, "0")}
              </span>
            )}
          </div>
        </header>

        {activePage === "cheatsheet" ? (
          <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 text-xl font-bold">Шпаргалка</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <h3 className="mb-2 font-semibold">E-mail</h3>
                <pre className="whitespace-pre-wrap text-sm">{personalizeText(cheatsheet.email)}</pre>
              </article>
              <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <h3 className="mb-2 font-semibold">Wijkkrant</h3>
                <pre className="whitespace-pre-wrap text-sm">{personalizeText(cheatsheet.wijkkrant)}</pre>
              </article>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <ListBlock title="Причини" items={cheatsheet.reasons} />
              <ListBlock title="Питання" items={cheatsheet.questions} />
              <ListBlock title="Місце" items={cheatsheet.places} />
              <ListBlock title="Час" items={cheatsheet.times} />
            </div>
          </section>
        ) : activePage === "koli" ? (
          <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 text-xl font-bold">Шпаргалка Колі</h2>
            <div className="grid gap-4">
              <PhraseCard
                title="1. Дієслова"
                displayName={displayName}
                lines={[
                  "drinken = пити | ik drink | jij/u/hij/zij/het drinkt | wij/jullie/zij drinken",
                  "kijken = дивитись",
                  "eten = їсти",
                  "fietsen = їздити на велосипеді",
                  "denken = думати",
                ]}
                examples={["Ik eet kebab.", "Ik drink koffie.", "Ik kijk TikTok."]}
              />
              <PhraseCard
                title="2. Модальні дієслова"
                displayName={displayName}
                lines={[
                  "Kunnen = can | ik kan | jij/u kunt | hij/zij/het kan | wij/jullie/zij kunnen",
                  "Willen = хотіти | ik wil | jij/u wilt | hij/zij/het wil | wij/jullie/zij willen",
                  "Moeten = must | ik/jij/u/hij/zij/het moet | wij/jullie/zij moeten",
                  "Mogen = may | ik/jij/u/hij/zij/het mag | wij/jullie/zij mogen",
                ]}
                examples={["Ik kan kebab eten.", "Ik wil koffie drinken.", "Ik moet werken.", "Ik mag niet komen."]}
              />
              <PhraseCard
                title="3. Слова, які НЕ міняють порядок слів"
                displayName={displayName}
                lines={[
                  "want = тому що | dus = тому | of = або | maar = але | en = і",
                  "Після цих слів порядок слів звичайний.",
                ]}
                examples={[
                  "Ik werk niet want ik ben ziek.",
                  "Ik heb geld dus ik kan koffie kopen.",
                  "Ik ga naar Spanje of ik ga naar Amsterdam.",
                  "Ik wil slapen maar ik moet werken.",
                  "Ik werk en ik studeer.",
                ]}
              />
              <PhraseCard
                title="4. Правило Колі — Спочатку крадемо, потім думаємо"
                displayName={displayName}
                lines={[
                  "На екзамені спочатку переписуємо максимум інформації з умови.",
                  "Якщо щось не розуміємо — теж переписуємо простими словами.",
                  "Мінімум вигадуємо самі.",
                ]}
                examples={["З умови: U hebt morgen een afspraak.", "Відповідь: Ik heb morgen een afspraak."]}
              />
              <PhraseCard
                title="5. Afspraak verzetten"
                displayName={displayName}
                lines={[
                  "Beste [naam],",
                  "Ik heb morgen een afspraak met je.",
                  "Ik kan niet want ik ben ziek.",
                  "Ik wil een andere afspraak maken.",
                  "Ik stel een nieuwe datum voor: 2 april.",
                  "Is het goed?",
                  "Met vriendelijke groet,",
                  "Mykola",
                ]}
              />
              <PhraseCard
                title="6. Wijkkrant / Газета"
                displayName={displayName}
                lines={[
                  "Beste buren,",
                  "Mijn naam is Mykola.",
                  "Ik kom uit Oekraïne.",
                  "Ik wil jullie vertellen over ...",
                  "Het is mooi.",
                  "Ik vind het leuk.",
                  "Ik doe dit elke dag.",
                  "Met vriendelijke groet,",
                  "Mykola",
                  "Пояснення: початок завжди Beste buren, кінець завжди Met vriendelijke groet.",
                ]}
              />
              <PhraseCard
                title="7. Hoe ziet ... eruit?"
                displayName={displayName}
                lines={["Hoe ziet ... eruit? = Як виглядає ...?"]}
                examples={[
                  "Het is mooi.",
                  "Het is groot.",
                  "Het is klein.",
                  "Het is groen.",
                  "Het is schoon.",
                  "Het park is mooi en groen.",
                  "Mijn huis is klein en mooi.",
                  "Mijn keuken is groot.",
                ]}
              />
              <PhraseCard
                title="8. Універсальні активності"
                displayName={displayName}
                examples={[
                  "ik eet kebab",
                  "ik eet pizza",
                  "ik eet pasta",
                  "ik drink koffie",
                  "ik drink thee",
                  "ik drink cappuccino",
                  "ik drink Fanta",
                  "ik kijk TikTok",
                  "ik kijk tv",
                  "ik kijk YouTube",
                ]}
              />
              <PhraseCard
                title="9. Інструкції"
                displayName={displayName}
                lines={["1) Je moet ...", "2) a.u.b. / a.j.b.", "3) Kun je ...? / Wil je ...?"]}
                examples={[
                  "Je moet Mahmud bellen.",
                  "Je moet de deur dicht doen.",
                  "Koop a.u.b. koffie.",
                  "Maak a.j.b. thee.",
                  "Kun je mij helpen?",
                  "Kun je koffie maken?",
                  "Wil je mij bellen?",
                ]}
              />
              <PhraseCard
                title="10. Слова широкого значення"
                displayName={displayName}
                lines={[
                  "controleren = перевіряти",
                  "repareren = ремонтувати",
                  "maken = робити",
                  "schoonmaken = чистити / прибирати",
                  "gebruiken = використовувати",
                  "alles = все",
                ]}
                examples={[
                  "Kun je dit controleren?",
                  "Kun je mijn fiets repareren?",
                  "Kun je alles schoonmaken?",
                  "Ik wil deze fiets gebruiken.",
                ]}
              />
              <PhraseCard
                title="11. Минулий час — мінімальна шпаргалка"
                displayName={displayName}
                lines={[
                  "Якщо можна — не ускладнюй. Можна писати простіше в теперішньому часі.",
                  "Формула: хто + hebben/zijn + все інше + дієслово в минулому часі",
                  "Топ неправильні: eten→gegeten, drinken→gedronken, doen→gedaan, kopen→gekocht, gaan→gegaan",
                ]}
                examples={[
                  "Ik heb gewerkt.",
                  "Ik heb gestudeerd.",
                  "Ik heb kebab gegeten.",
                  "Ik heb koffie gedronken.",
                  "Ik heb een fiets gekocht.",
                  "Ik ben naar huis gegaan.",
                ]}
              />
              <PhraseCard
                title="12. Топ питання для e-mail"
                displayName={displayName}
                examples={[
                  "Hoeveel kost het?",
                  "Wanneer begint de cursus?",
                  "Wanneer kan ik beginnen?",
                  "Kan ik met iDEAL betalen?",
                  "Kun je mij helpen?",
                  "Kun je mij bellen?",
                  "Kun je mij een recept sturen?",
                  "Mag ik jouw laptop lenen?",
                ]}
              />
              <PhraseCard title="13. Найпростіші причини" displayName={displayName} examples={QUICK_REASONS} />

              <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <h3 className="mb-3 font-semibold">15. Швидка фраза</h3>
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                  <QuickSelect label="Причина" value={quickReason} onChange={setQuickReason} options={QUICK_REASONS} />
                  <QuickSelect label="Прохання" value={quickRequest} onChange={setQuickRequest} options={QUICK_REQUESTS} />
                  <QuickSelect label="Місце" value={quickPlace} onChange={setQuickPlace} options={QUICK_PLACES} />
                  <QuickSelect label="Час" value={quickTime} onChange={setQuickTime} options={QUICK_TIMES} />
                  <QuickSelect label="Дія" value={quickAction} onChange={setQuickAction} options={QUICK_ACTIONS} />
                </div>
                <div className="mt-4 space-y-2 rounded-lg bg-slate-100 p-3 text-sm dark:bg-slate-800">
                  <CopyRow text={`Ik kan niet ${quickReason}.`} />
                  <CopyRow text={quickRequest} />
                  <CopyRow text={`Ik ben ${quickTime} ${quickPlace}.`} />
                  <CopyRow text={`Ik ${quickAction} ${quickPlace}.`} />
                </div>
              </article>
            </div>
          </section>
        ) : (
          <div className="grid gap-4 lg:grid-cols-[340px_1fr]">
            <aside
              className={`rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 ${
                isMobileTicketsOpen ? "block" : "hidden"
              } lg:block`}
            >
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Пошук по слову..."
                className="mb-3 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
              />
              <div className="mb-4 flex flex-wrap gap-2">
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => toggleFilter(filter)}
                    className={`rounded-xl px-3 py-1 text-sm font-semibold ${
                      activeFilters.includes(filter)
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-100"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <div className="max-h-[65vh] space-y-2 overflow-auto pr-1">
                {filteredTickets.map((ticket) => (
                  <button
                    key={ticket.id}
                    onClick={() => setSelectedId(ticket.id)}
                    className={`w-full rounded-xl border p-3 text-left ${
                      ticket.id === selectedId && !examMode
                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                        : "border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800"
                    }`}
                  >
                    <div className="text-sm font-bold">
                      #{ticket.id} {ticket.title}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-300">{ticket.type}</div>
                  </button>
                ))}
              </div>
            </aside>

            <main className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <button
                className="mb-3 w-full rounded-xl bg-slate-200 px-3 py-2 text-sm font-semibold dark:bg-slate-700 lg:hidden"
                onClick={() => setIsMobileTicketsOpen((prev) => !prev)}
              >
                {isMobileTicketsOpen ? "Сховати список білетів" : "Показати список білетів"}
              </button>
              {currentTicket ? (
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-xl font-bold">
                    #{currentTicket.id} {currentTicket.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {examMode && (
                      <button className="rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white" onClick={nextExamTicket}>
                        Наступний випадковий
                      </button>
                    )}
                    <button className="rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white" onClick={toggleKnown}>
                      {knownMap[currentTicket.id] ? "Позначено: знаю" : "Я знаю цей білет"}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mb-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-slate-700 dark:bg-slate-800">
                  Немає білетів у базі. Додай нові білети в `src/data/tickets.ts`.
                </div>
              )}

              {currentTicket && (
                <article className="mb-4 rounded-xl border border-slate-200 p-3 dark:border-slate-700">
                <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">Повний текст білета</h3>
                  <button
                    className="rounded-lg bg-slate-200 px-3 py-1 text-sm font-semibold dark:bg-slate-700"
                    onClick={() => navigator.clipboard.writeText(currentTicket.fullTask)}
                  >
                    Скопіювати білет
                  </button>
                </div>
                <pre className="whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-4 text-base leading-relaxed dark:border-slate-700 dark:bg-slate-800">
                  {currentTicket.fullTask}
                </pre>
                <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-700 dark:bg-slate-800">
                  <p className="font-semibold">Що обов'язково написати:</p>
                  <ul className="mt-1 list-inside list-disc">
                    {currentTicket.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="mt-2">
                    <span className="font-semibold">Ключові слова:</span> {currentTicket.keywords.join(", ")}
                  </p>
                </div>
              </article>
              )}

              {!examMode && currentTicket && (
                <div className="mb-4 grid gap-4 lg:grid-cols-2">
                  <article className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-semibold">Найпростіша відповідь</h3>
                      <div className="flex gap-2">
                        <button
                          className="rounded-lg bg-slate-200 px-3 py-1 text-sm font-semibold dark:bg-slate-700"
                          onClick={() => setCollapseHelpPanels((prev) => !prev)}
                        >
                          {collapseHelpPanels ? "Розгорнути обидва" : "Згорнути обидва"}
                        </button>
                        <button
                          className="rounded-lg bg-slate-200 px-3 py-1 text-sm font-semibold dark:bg-slate-700"
                          onClick={() => setHideSimpleAnswer((prev) => !prev)}
                        >
                          {hideSimpleAnswer ? "Показати відповідь" : "Сховати відповідь"}
                        </button>
                        <button className="rounded-lg bg-slate-200 px-3 py-1 text-sm font-semibold dark:bg-slate-700" onClick={copySimpleAnswer}>
                          Скопіювати відповідь
                        </button>
                      </div>
                    </div>
                    {!collapseHelpPanels && (
                      <pre className="whitespace-pre-wrap text-sm">
                      {hideSimpleAnswer ? "Відповідь прихована" : personalizeText(currentTicket.simpleAnswer)}
                      </pre>
                    )}
                  </article>
                  <article className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-semibold">Шаблон</h3>
                      <button
                        className="rounded-lg bg-slate-200 px-3 py-1 text-sm font-semibold dark:bg-slate-700"
                        onClick={() => setHideTemplate((prev) => !prev)}
                      >
                        {hideTemplate ? "Показати шаблон" : "Сховати шаблон"}
                      </button>
                    </div>
                    {!collapseHelpPanels && (
                      <pre className="whitespace-pre-wrap text-sm">
                        {hideTemplate ? "Шаблон прихований" : personalizeText(getTemplateByType(currentTicket.type))}
                      </pre>
                    )}
                  </article>
                </div>
              )}

              <div>
                <label className="mb-2 block font-semibold">Моя відповідь</label>
                <textarea
                  value={currentAnswer}
                  onChange={(e) => updateAnswer(e.target.value)}
                  className="h-56 w-full rounded-xl border border-slate-300 p-3 text-sm dark:border-slate-700 dark:bg-slate-800"
                  placeholder="Пиши коротко, просто, рівень A2..."
                  disabled={!currentTicket}
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  <button className="rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white" onClick={runCheck}>
                    Перевірити
                  </button>
                </div>
              </div>

              {checkResult && (
                <div
                  className={`mt-4 rounded-xl border p-3 ${
                    checkResult.pass
                      ? "border-emerald-400 bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200"
                      : "border-orange-400 bg-orange-50 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200"
                  }`}
                >
                  <p className="mb-2 text-lg font-bold">{checkResult.pass ? "PASS" : "RISK"}</p>
                  <ul className="space-y-1 text-sm">
                    {checkResult.checks.map((check) => (
                      <li key={check.label}>
                        {check.ok ? "✅" : "⚠️"} {check.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </main>
          </div>
        )}
      </div>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
      <h3 className="mb-2 font-semibold">{title}</h3>
      <ul className="list-inside list-disc space-y-1 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function PhraseCard({
  title,
  lines,
  examples,
  displayName,
}: {
  title: string;
  lines?: string[];
  examples?: string[];
  displayName: string;
}) {
  const withName = (text: string) => text.replace(/\bMykola\b/g, displayName);
  return (
    <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
      <h3 className="mb-2 font-semibold">{title}</h3>
      {lines && (
        <div className="mb-3 space-y-1 text-sm">
          {lines.map((line) => (
            <p key={line}>{withName(line)}</p>
          ))}
        </div>
      )}
      {examples && (
        <div className="space-y-2">
          {examples.map((example) => (
            <CopyRow key={example} text={withName(example)} />
          ))}
        </div>
      )}
    </article>
  );
}

function CopyRow({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800">
      <span>{text}</span>
      <button
        className="shrink-0 rounded-lg bg-slate-200 px-2 py-1 text-xs font-semibold dark:bg-slate-700"
        onClick={() => navigator.clipboard.writeText(text)}
      >
        Копіювати фразу
      </button>
    </div>
  );
}

function QuickSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="text-sm">
      <span className="mb-1 block font-semibold">{label}</span>
      <select
        className="w-full rounded-lg border border-slate-300 bg-white px-2 py-2 dark:border-slate-700 dark:bg-slate-900"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
