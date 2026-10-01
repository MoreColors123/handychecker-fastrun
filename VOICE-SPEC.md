# Voice-Spec & Inhalt-Regeln — HandyChecker

Dieses Dokument legt Stimme, Ton und Muster für **alle** Texte fest.
Jeder neue Text muss hiergegen geprüft werden (Checkliste unten).

> Grundsatz: Die Seite ist **kein Reparatur-Werkzeug**. Sie geht davon aus,
> dass alles in Ordnung ist, und schafft **Awareness** – „so funktioniert das",
> nicht „so schlimm ist das".

---

## 1. Persona

- **Wer spricht:** Happi, eine gingerfarbene Katze 🧡 – freundliche Begleitung, nie Elternteil.
- **Anrede:** informell „du". Happi sagt „ich".
- **Haltung:** warm, neugierig, auf ihrer Seite. Nie von oben herab, nie belehrend.
- **Selbstverständnis:** erklärt und bestätigt – verordnet nichts.

## 2. Ton-Regeln (nicht verhandelbar)

1. **Kein Vortrag.** Kein „du solltest", „du musst", „du darfst nicht".
2. **Keine Angst.** Keine Wörter wie *Sucht, süchtig, schädigt, zerstört, gefährlich, Leiden*.
   Betonung stattdessen auf *Balance, Pause, Feierabend, Landebahn*.
3. **Kein Urteil, kein Score.** Selbstchecks geben nie einen Wert, Rang oder eine Diagnose.
4. **Bestätigen statt korrigieren.** Bestehendes Gutes benennen (z. B. „die 20-Uhr-Sperre ist schlau").
5. **Fakten zuerst, Ermutigung danach.**
6. **Immer Balance.** Jedes Thema hat einen „Was ist daran eigentlich gut?"-Abschnitt.
7. **Familienregeln gehören der Familie**, nicht der Website. Die 45-Minuten-Regel o. Ä.
   steht nie als Regel auf der Seite. Sie darf höchstens die Antwortoptionen realistisch halten.
8. **Hedging bei Zusammenhängen:** „kann", „oft", „viele kennen das" – nie „macht".
9. **Tipps sind Angebote:** „Wenn du magst …", „Probier mal …" – nie Aufgaben.

## 3. Sprache & Lesbarkeit (Zielgruppe 10–12)

- Sätze **≤ 12 Wörter**, eine Idee pro Satz, Aktiv statt Passiv.
- **Maximal eine Zahl pro Fakten-Abschnitt.**
- Alltagsbilder statt Fachsprache. Fachwort bei Erstnutzung erklären
  (z. B. „Melatonin – das Hormon, das müde macht").
- Abschnitte **2–3 Sätze**, keine Textwände.
- Keine Verniedlichung („ganz liebe Kinder"). 10–12 will ernst genommen werden.

## 4. Inhaltliches Muster (pro Thema)

```
Intro (Happi)
→ 2–3 Fakten-Abschnitte   („so funktioniert das")
→ Balance                 („Was ist daran eigentlich gut?")   [Pflicht]
→ Selbstcheck             („Wie ist das bei dir?")
→ „Was kann ich tun?"     (1–3 Angebote)
→ „Weiter geht's"          (2 nächste Themen)
```

## 5. Selbstcheck-Regeln

- **Eine** Frage, **vier** beschreibende Antwortoptionen.
- Antworten sind Beobachtungen, keine Wertungen (nie „richtig/falsch").
- Pro Antwort ein **sanfter Spiegel** (observational, ermutigend).
- **Re-tappable**, kein Absenden, **kein Score**.
- Läuft vollständig im Browser; **nichts wird gespeichert oder gesendet**.
- Umsetzung: Radio-Buttons + CSS (`:checked`) – funktioniert ohne JavaScript.

## 6. Fakten-Fallen (aus der Recherche)

- **Blaues Licht** schädigt Kinderaugen **nicht** – nicht behaupten.
- **Kurzsichtigkeit** hängt an Nahearbeiten **und wenig Zeit draußen** – nicht am Handy allein.
- **Schlaf** ist die am besten belegte Aussage (Licht + Aufregung am Abend) – hier darf man stehen.
- **Haltung:** Verspannung/Unbehagen sind real; „dauerhafter Schaden" ist schwach belegt.
- **Dopamin/Likes:** Pop-Science – höchstens als Analogie, nie als bewiesener Fakt.
- Nur Aussagen verwenden, die eine Kinderärztin unterschreiben würde
  (Quellen: AAP, Mayo Clinic, Schlafforschung, klicksafe, Internet-ABC).

## 7. Datenmodell

Alle Inhalte liegen in `src/_data/topics.json`. Das Template `src/themen.njk`
rendert daraus je Thema eine Seite unter `/themen/<slug>/`.

```json
{
  "slug": "bildschirmzeit",
  "title": "Bildschirmzeit & Balance",
  "intro": "…",
  "facts": [{ "heading": "…", "text": "…" }],
  "balance": { "heading": "Was ist daran eigentlich gut?", "text": "…" },
  "selfCheck": {
    "question": "…",
    "options": [{ "emoji": "🙂", "label": "…", "reflection": "…" }]
  },
  "tips": ["…"],
  "next": ["schlaf", "aufmerksamkeit"]
}
```

Ein neues Thema anlegen = ein Objekt ergänzen. Keine andere Seite muss angefasst werden.

## 8. Checkliste vor dem Veröffentlichen

- [ ] Kein „du musst/solltest", kein Imperativ.
- [ ] Keine Angst-Wörter (siehe Liste oben).
- [ ] Balance-Abschnitt vorhanden.
- [ ] Fakten quellenkonform / korrekt gehedgt.
- [ ] Sätze ≤ 12 Wörter, max. eine Zahl pro Fakten-Abschnitt.
- [ ] Selbstcheck: 4 Optionen, keine Wertung, kein Score, nichts gespeichert.
- [ ] Tipps als Angebot formuliert.
- [ ] Alle Nutzertexte auf Deutsch.
