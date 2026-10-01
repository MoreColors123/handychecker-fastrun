# HandyChecker 🧡

**Live-Site / Live site:** <https://morecolors123.github.io/handychecker-fastrun/>

---

## Deutsch

HandyChecker ist eine kleine, deutschsprachige Info-Website über den Umgang mit dem
Smartphone – gemacht für ein Mädchen von 10–12 Jahren, aber teilbar mit Freundinnen,
Freunden und der Familie.

Sie öffnet sich auf dem Handy wie eine App (installierbar auf den Startbildschirm) und
erklärt in fünf Themen, wie das Handy wirkt und was guttut:

1. Bildschirmzeit & Balance
2. Schlaf
3. Aufmerksamkeit & Fokus
4. Körper (Haltung & Augen)
5. Datenschutz & Daten

Der Ton ist eine freundliche Begleitung – verkörpert von **Happi**, einer gingerfarbenen
Katze – und nie ein Vortrag. Die Seite schafft **Awareness**: Sie unterstellt kein Problem,
bewertet nichts und macht keine Angst.

### Ablauf

1. **Startseite:** Erst nach Klick auf **▶ Start** erscheinen die Themen – unter der Frage
   „Welches Thema möchtest du zuerst anschauen?".
2. **Themenseite** (`/themen/<slug>/`): kurz und knapp – Fakten zuerst, dann
   „Was ist daran eigentlich gut?", dann **„Wie ist das bei dir?" → ▶ Los geht's**.
3. **Quizseite** (`/themen/<slug>/check/`): der Selbstcheck. **Nach der Antwort** erscheinen
   darunter **„Was kann ich tun?"** (Tipps) und **„Womit willst du weitermachen?"**.
4. **Gesehene Themen** verschwinden aus der Weiter-Liste – das merkt sich das Gerät lokal.

### Selbstcheck

- **Eine** Frage, **vier** beschreibende Antworten (Single-Choice, die anderen verschwinden)
- Kein richtig/falsch, keine Punktzahl, keine Wertung
- Läuft im Browser; die **Antworten** werden nicht gespeichert und nicht gesendet

### Grundsätze

- **Sprache:** nur Deutsch
- **Datenschutz:** keine Konten, kein Tracking, keine Cookies, keine Drittanbieter-Requests
  (keine CDNs, keine externen Schriften). Zur Navigation merkt sich das Gerät lokal
  (`localStorage`), welche Themen schon gesehen wurden – nur lokal, ohne Personenbezug,
  nichts wird übertragen.
- **Statisch und wartbar:** keine Laufzeit-Abhängigkeiten; ein Elternteil kann die Seite
  über Jahre pflegen

### Technik

- **Eleventy (11ty) 3.1.6** als Static-Site-Generator (einzige Dev-Abhängigkeit)
- Nunjucks-Templates; Inhalte datengetrieben in `src/_data/topics.json`
- Handgeschriebenes CSS mit Design-Tokens
- Minimales Vanilla-JS (`src/js/app.js`) für: Screenreader-Ankündigung des Selbstchecks
  (plus Fallback für Browser ohne `:has()`), das Aufdecken der Themen nach „Start" und das
  lokale Merken gesehener Themen
- CSS und JS werden versioniert (`?v=…`), damit Updates ankommen
- **Hosting:** GitHub Pages

### Struktur

```
src/
  index.njk              Startseite (Start-Knopf + Themen)
  themen.njk             Themenseite je Thema (Fakten + Balance + „Los geht's")
  themen-check.njk       Quizseite je Thema (Selbstcheck → Tipps → Weiter)
  installieren.njk       „App aufs Handy"
  impressum.njk          Impressum (§5 DDG)
  datenschutz.njk        Kindgerechte Datenschutzerklärung
  404.njk                Nicht-gefunden-Seite
  _data/
    site.json            Seiten-Metadaten
    topics.json          Alle fünf Themen (Texte, Selbstchecks, Tipps)
  _includes/
    head.njk  footer.njk  happi.njk
  css/
    tokens.css  site.css
  js/
    app.js
  icons/  icons-src/
eleventy.config.js
VOICE-SPEC.md            Stimme, Ton-Regeln und Inhaltsmuster
PROJECT-HANDOFF.md       Ausführliche Projektübergabe (englisch)
```

### Entwickeln

```bash
npm install
npm run dev     # lokaler Dev-Server
npm run build   # baut die Seite nach _site/
```

### Rechtliches

Das Impressum enthält ausschließlich Daten der Eltern, niemals Daten des Kindes. Die Seite
überträgt nichts über Besucherinnen und Besucher; lokal wird auf dem Gerät nur gemerkt,
welche Themen bereits angesehen wurden.

---

## English

HandyChecker is a small, German-language information site about mindful smartphone use –
built for a 10–12-year-old girl, but made to be shared with friends, classmates and family.

It opens on a phone like an app (installable to the home screen) and explains, across five
topics, how phones affect us and what helps:

1. Screen time & balance
2. Sleep
3. Attention & focus
4. Body (posture & eyes)
5. Privacy & data

The tone is a friendly companion – voiced by **Happi**, a ginger cat – never a lecture. The
site builds **awareness**: it assumes no problem, passes no judgment and never uses fear.

### Flow

1. **Home:** topics appear only after tapping **▶ Start**, under the question
   "Which topic would you like to look at first?".
2. **Topic page** (`/themen/<slug>/`): short – facts first, then "What's actually good about
   it?", then **"How is it for you?" → ▶ Let's go**.
3. **Quiz page** (`/themen/<slug>/check/`): the self-check. **After answering**, "What can I
   do?" (tips) and "What would you like to continue with?" appear below.
4. **Seen topics** disappear from the "continue" list – remembered locally on the device.

### Self-check

- **One** question, **four** descriptive answers (single choice; the others disappear)
- No right/wrong, no score, no verdict
- Runs in the browser; the **answers** are neither stored nor transmitted

### Principles

- **Language:** German only
- **Privacy:** no accounts, no tracking, no cookies, no third-party requests (no CDNs, no
  external fonts). For navigation, the device remembers locally (`localStorage`) which
  topics have been seen – on-device only, with no personal reference, nothing transmitted.
- **Static and durable:** no runtime dependencies; a parent can maintain it for years

### Stack

- **Eleventy (11ty) 3.1.6** static site generator (the only dev dependency)
- Nunjucks templates; content is data-driven from `src/_data/topics.json`
- Hand-written CSS with design tokens
- A tiny bit of vanilla JS (`src/js/app.js`) for: screen-reader announcement of the
  self-check (plus a fallback for browsers without `:has()`), revealing the topics after
  "Start", and remembering seen topics locally
- CSS and JS are versioned (`?v=…`) so updates actually arrive
- **Hosting:** GitHub Pages

### Structure

See the file tree in the German section above. Key files: `src/_data/topics.json` holds all
five topics; `src/themen.njk` renders a topic page and `src/themen-check.njk` a quiz page per
topic; `VOICE-SPEC.md` defines the voice and content rules; `PROJECT-HANDOFF.md` is the full
handoff.

### Develop

```bash
npm install
npm run dev     # local dev server
npm run build   # build the site into _site/
```

### Legal

The Impressum (German legal notice) contains the parent's data only, never the child's. The
site transmits nothing about its visitors; it only remembers locally, on the device, which
topics have already been viewed.
