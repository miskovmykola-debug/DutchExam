from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path

from pypdf import PdfReader


ROOT = Path("/Users/mykolamiskov/Dutch")
PDF_PATHS = [
    Path("/Users/mykolamiskov/Downloads/Письма от учеников.pdf"),
    Path("/Users/mykolamiskov/Downloads/куча писем.pdf"),
    Path("/Users/mykolamiskov/Downloads/письма от учеников на голландском.pdf"),
]
OUT_PATH = ROOT / "src/data/tickets.ts"


@dataclass
class Ticket:
    title: str
    type: str
    category: list[str]
    fullTask: str
    points: list[str]
    keywords: list[str]
    simpleAnswer: str


def clean_text(text: str) -> str:
    text = text.replace("\u00ad", "")
    text = re.sub(r"\n--\s*\d+\s+of\s+\d+\s*--\n?", "\n", text)
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    return text


def extract_text(path: Path) -> str:
    reader = PdfReader(str(path))
    pages: list[str] = []
    for page in reader.pages:
        pages.append(page.extract_text() or "")
    return clean_text("\n\n".join(pages))


def infer_type(text: str) -> str:
    lower = text.lower()
    if "formulier" in lower or "invullen" in lower or "inschrijfformulier" in lower:
        return "Formulier"
    if "wijkkrant" in lower or "газет" in lower:
        return "Wijkkrant"
    if "briefje" in lower or "bericht" in lower:
        return "Briefje"
    if "brief" in lower and "e-mail" not in lower and "email" not in lower:
        return "Brief"
    return "E-mail"


def infer_categories(text: str, ticket_type: str) -> list[str]:
    lower = text.lower()
    categories: set[str] = set()
    if ticket_type in {"E-mail", "Wijkkrant", "Formulier", "Briefje", "Brief"}:
        categories.add(ticket_type)

    mappings = {
        "Werk": ["werk", "collega", "baas", "restaurant", "kantoor", "fabriek", "monteur"],
        "School": ["school", "docent", "toets", "les", "examen", "student", "taalschool"],
        "Buurt": ["buurt", "buren", "wijk", "wijkkrant", "park"],
        "Dokter": ["dokter", "huisarts", "ziek", "rugpijn", "fysiotherapeut", "klacht"],
        "Winkel": ["winkel", "besteld", "producten", "abonnement", "kpn", "expert", "stofzuiger"],
        "Vrienden": ["vriend", "vrienden", "karim", "hassan", "omar", "amir", "lisa", "diego"],
        "Cursus": ["cursus", "opleiding", "inburgering", "muziekschool", "ehbo", "kookcursus"],
        "Familie": ["kind", "zoon", "partner", "baby", "familie", "vrouw", "man"],
        "Transport": ["fiets", "auto", "bus", "markt", "rijden", "ophalen", "vervoer"],
    }
    for cat, words in mappings.items():
        if any(word in lower for word in words):
            categories.add(cat)
    return sorted(categories)


def infer_title(full_task: str, idx: int) -> str:
    first = full_task.splitlines()[0].strip()
    first = re.sub(r"^[✅\d\.\-\)\s]+", "", first)
    first = re.sub(r"\s+", " ", first)
    if len(first) > 70:
        first = first[:70].rstrip() + "..."
    if not first:
        return f"Ticket {idx}"
    return first


def extract_points(full_task: str) -> list[str]:
    points: list[str] = []
    for line in full_task.splitlines():
        l = line.strip()
        if not l:
            continue
        if l.startswith("●") or l.startswith("-") or re.match(r"^\d+\)", l):
            p = re.sub(r"^[●\-\d\)\.\s]+", "", l).strip()
            if p:
                points.append(p)
    return points[:6]


def extract_keywords(full_task: str) -> list[str]:
    words = re.findall(r"[A-Za-zÀ-ÿА-Яа-яІіЇїЄє0-9\-]{4,}", full_task.lower())
    stop = {
        "schrijf",
        "hele",
        "zinnen",
        "gebruik",
        "waarom",
        "wanneer",
        "welke",
        "deze",
        "that",
        "this",
        "voor",
        "naar",
        "your",
        "want",
        "with",
        "maar",
        "niet",
        "если",
        "надо",
        "написать",
        "письмо",
        "формуляр",
    }
    uniq: list[str] = []
    for w in words:
        if w in stop:
            continue
        if w not in uniq:
            uniq.append(w)
        if len(uniq) >= 8:
            break
    return uniq


def make_simple_answer(ticket_type: str, points: list[str], full_task: str) -> str:
    base = ["Ik schrijf want ik heb een situatie."]
    if points:
        for p in points[:3]:
            base.append(f"Ik schrijf over: {p[:60]}.")
    else:
        base.append("Ik wil dit goed regelen.")
        base.append("Kun je mij helpen?")

    if ticket_type == "Wijkkrant":
        return "\n".join(
            [
                "Beste buren,",
                "",
                "Mijn naam is Mykola. Ik kom uit Oekraïne.",
                "Ik wil jullie vertellen over dit onderwerp.",
                *base[:3],
                "",
                "Met vriendelijke groet,",
                "Mykola",
            ]
        )
    if ticket_type == "Formulier":
        extra = points[:3] if points else ["Ik vul dit formulier in want het is belangrijk."]
        return "\n".join(
            [
                "Voornaam: Mykola",
                "Achternaam: Miskov",
                "Adres: Hoofdstraat 10",
                "Postcode en woonplaats: 1234 AB Amsterdam",
                "Telefoonnummer: 0612345678",
                "E-mail: mykola@email.com",
                *[f"{p}: ..." for p in extra],
            ]
        )
    if ticket_type == "Briefje":
        return "\n".join(
            [
                "Hallo,",
                "",
                *base[:3],
                "",
                "Groet,",
                "Mykola",
            ]
        )
    if ticket_type == "Brief":
        return "\n".join(
            [
                "Beste [naam],",
                "",
                *base[:3],
                "",
                "Met vriendelijke groet,",
                "Mykola",
            ]
        )
    formal = "heer/mevrouw" in full_task.lower() or "school" in full_task.lower() or "winkel" in full_task.lower()
    if formal:
        head = ["Beste heer/mevrouw,", "", "Mijn naam is Mykola.", ""]
    else:
        head = ["Beste [naam],", ""]
    return "\n".join(head + base[:4] + ["", "Met vriendelijke groet,", "Mykola"])


def split_tasks(text: str) -> list[str]:
    parts: list[str] = []
    # Dutch exam style chunks
    for m in re.finditer(r"(✅\s*[\s\S]*?)(?=(?:\n✅\s*)|\Z)", text):
        chunk = clean_text(m.group(1))
        if len(chunk) > 80 and ("schrijf" in chunk.lower() or "formulier" in chunk.lower()):
            parts.append(chunk)

    # Additional raw numbered reports (RU/UA)
    for m in re.finditer(r"(?m)^\d+[\)\.\:]?\s+[\s\S]*?(?=(?:^\d+[\)\.\:]?\s+)|\Z)", text):
        chunk = clean_text(m.group(0))
        if len(chunk) > 120 and ("пись" in chunk.lower() or "формуляр" in chunk.lower() or "wijkkrant" in chunk.lower()):
            parts.append(chunk)

    # Fallback for 9-page dutch file (task paragraphs)
    para_blocks = [clean_text(p) for p in re.split(r"\n{2,}", text)]
    for p in para_blocks:
        lower = p.lower()
        if len(p) < 120:
            continue
        if ("u krijgt elke week een wijkkrant" in lower) or ("u schrijft een e-mail" in lower) or ("u vult een formulier in" in lower):
            parts.append(p)
    return parts


def dedupe_tasks(tasks: list[str]) -> list[str]:
    seen: set[str] = set()
    out: list[str] = []
    for task in tasks:
        key = re.sub(r"\s+", " ", task.strip().lower())
        if key in seen:
            continue
        seen.add(key)
        out.append(task.strip())
    return out


def to_ts_string(text: str) -> str:
    return text.replace("\\", "\\\\").replace("`", "\\`")


def main() -> None:
    all_chunks: list[str] = []
    for path in PDF_PATHS:
        if not path.exists():
            continue
        txt = extract_text(path)
        all_chunks.extend(split_tasks(txt))

    unique = dedupe_tasks(all_chunks)

    tickets: list[Ticket] = []
    for idx, full_task in enumerate(unique, start=1):
        ttype = infer_type(full_task)
        points = extract_points(full_task)
        keywords = extract_keywords(full_task)
        title = infer_title(full_task, idx)
        category = infer_categories(full_task, ttype)
        simple = make_simple_answer(ttype, points, full_task)
        tickets.append(
            Ticket(
                title=title,
                type=ttype,
                category=category,
                fullTask=full_task,
                points=points,
                keywords=keywords,
                simpleAnswer=simple,
            )
        )

    lines: list[str] = []
    lines.append('import type { Ticket } from "../types";')
    lines.append("")
    lines.append("export const tickets: Ticket[] = [")
    for i, t in enumerate(tickets, start=1):
        points = ", ".join([f'`{to_ts_string(p)}`' for p in t.points])
        keywords = ", ".join([f'`{to_ts_string(k)}`' for k in t.keywords])
        category = ", ".join([f'"{to_ts_string(c)}"' for c in t.category])
        lines.append("  {")
        lines.append(f"    id: {i},")
        lines.append(f"    title: `{to_ts_string(t.title)}`,")
        lines.append(f'    type: "{t.type}",')
        lines.append(f"    category: [{category}],")
        lines.append(f"    fullTask: `{to_ts_string(t.fullTask)}`,")
        lines.append(f"    points: [{points}],")
        lines.append(f"    keywords: [{keywords}],")
        lines.append(f"    simpleAnswer: `{to_ts_string(t.simpleAnswer)}`,")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    lines.append('console.log(`Loaded ${tickets.length} tickets`);')
    lines.append("")

    OUT_PATH.write_text("\n".join(lines), encoding="utf-8")
    print(f"Generated {len(tickets)} tickets into {OUT_PATH}")


if __name__ == "__main__":
    main()
