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

### Aufbau eines Themas

- **Fakten zuerst** – kurze Abschnitte, 2–3 Sätze pro Idee
- **Balance** – „Was ist daran eigentlich gut?"
- **Selbstcheck** – „Wie ist das bei dir?" mit beschreibenden Antworten; keine Punktzahl,
  keine Wertung, nichts wird gespeichert
- **„Was kann ich tun?"** – 1–3 machbare Tipps als Angebot
- **„Womit willst du weitermachen?"** – Weiter zu den anderen Themen

### Grundsätze

- **Sprache:** nur Deutsch
- **Datenschutz:** null Datensammlung – keine Konten, kein Tracking, keine Cookies,
  keine Drittanbieter-Requests (keine CDNs, keine externen Schriften)
- **Statisch und wartbar:** keine Laufzeit-Abhängigkeiten; ein Elternteil kann die Seite
  über Jahre pflegen

### Technik

- **Eleventy (11ty) 3.1.6** als Static-Site-Generator (einzige Dev-Abhängigkeit)
- Nunjucks-Templates; Inhalte datengetrieben in `src/_data/topics.json`
- Handgeschriebenes CSS mit Design-Tokens; minimales Vanilla-JS nur für die
  Screenreader-Ankündigung des Selbstchecks (plus Fallback für Browser ohne `:has()`)
- **Hosting:** GitHub Pages

### Struktur

```
src/
  index.njk              Startseite
  themen.njk             Themen-Template (rendert aus topics.json)
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
speichert nichts über Besucherinnen und Besucher.

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

### How each topic is structured

- **Facts first** – short sections, 2–3 sentences per idea
- **Balance** – "What's actually good about it?"
- **Self-check** – "How is it for you?" with descriptive answers; no score, no verdict,
  nothing stored
- **"What can I do?"** – 1–3 doable tips, offered as suggestions
- **"What would you like to continue with?"** – links to the other topics

### Principles

- **Language:** German only
- **Privacy:** zero data collection – no accounts, no tracking, no cookies, no third-party
  requests (no CDNs, no external fonts)
- **Static and durable:** no runtime dependencies; a parent can maintain it for years

### Stack

- **Eleventy (11ty) 3.1.6** static site generator (the only dev dependency)
- Nunjucks templates; content is data-driven from `src/_data/topics.json`
- Hand-written CSS with design tokens; a tiny bit of vanilla JS only to announce the
  self-check to screen readers (plus a fallback for browsers without `:has()`)
- **Hosting:** GitHub Pages

### Structure

See the file tree in the German section above. Key files: `src/_data/topics.json` holds all
five topics; `src/themen.njk` renders one page per topic; `VOICE-SPEC.md` defines the voice
and content rules; `PROJECT-HANDOFF.md` is the full handoff.

### Develop

```bash
npm install
npm run dev     # local dev server
npm run build   # build the site into _site/
```

### Legal

The Impressum (German legal notice) contains the parent's data only, never the child's. The
site stores nothing about its visitors.
