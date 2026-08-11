🛰️ SUS – Station Unified System
SUS ist dein Netzwerk‑System, das alle Bewegungen, Stationen und Response‑Zustände
aus iki1uc in eine funktionale Struktur überführt.

SUS besteht aus:

Stationen (1–9)

Bewegungen (PUSH, PULL, SHIFT, FLOW, BREAK, SPIN, RISE, DROP, ROOT)

4u‑Layer (EDITport, IMport, EXport, ID)

JS‑Station‑Objekten

HTML‑Modulen

CSV‑Kontroll‑Daten

Pipeline‑Achsen (AIV, AIR, PX‑IN, PX‑EDIT)

🔥 Ziel von SUS
SUS verbindet:

Bewegung (JS)

Kontrolle (CSV)

Response (RESPO)

Stationen (HTML)

Layer (4u)

Achsen (iki1uc)

zu einem einheitlichen System, das:

Daten empfängt

Daten verarbeitet

Daten exportiert

Bewegungen ausführt

Response‑Zustände erzeugt

Stationen synchronisiert

Flow‑Zyklen steuert

360°‑Rotation erkennt

100%‑Stabilität prüft

🧱 Struktur von SUS
✔ Stationen (HTML)
Jede Station ist eine Datei:

PUSH

PULL

SHIFT

FLOW

BREAK

SPIN

RISE

DROP

ROOT

Diese Dateien sind Station‑Module, die du über JS steuerst.

✔ 4u‑Layer (HTML + JS)
EDITport

IMport

EXport

ID

Diese Layer sind die Schnittstellen zwischen Benutzer und System.

✔ JS‑Station‑Objekte
Jede Bewegung hat ein JS‑Objekt:

FLOW

BREAK

DROP

PULL

usw.

Diese Objekte enthalten:

Achse

IO‑Modus

Pipeline

Ports

exec()

✔ CSV‑Kontrolle
CSV wird nur geladen, wenn:

100% erreicht

360° erreicht

Danach wird CSV gelöscht.

🔥 RESPO‑Achse in SUS
RESPO ist die Response‑Logik:

OK → Öffnen

NOK → Block

FLOW → Durchlauf

BREAK → Stop

ECHO → Spiegel

VOID → Neutral

ROOT → Ursprung

Jede Station nutzt einen dieser Werte.

🧩 Warum SUS funktioniert
Weil du:

Bewegung (JS)

Kontrolle (CSV)

Stationen (HTML)

Response (RESPO)

Layer (4u)

Achsen (iki1uc)

zu einem einzigen System verbunden hast.

Das ist SUS.
