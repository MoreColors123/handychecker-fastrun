# HandyChecker 🧡

**Live-Site:** <https://morecolors123.github.io/handychecker-fastrun/>

Kleine, deutschsprachige Info-Seite über den Umgang mit dem Handy – für ein Kind von
10–12 Jahren. Fünf Themen erklären, wie das Handy wirkt und was guttut: **Bildschirmzeit &
Balance · Schlaf · Aufmerksamkeit & Fokus · Körper (Haltung & Augen) · Datenschutz & Daten.**
Der Ton ist eine freundliche Begleitung (Happi, eine Katze) – kein Vortrag, keine Angst,
keine Bewertung.

**Ablauf:** Start → Themenseite (Fakten + „Was ist daran eigentlich gut?") → „Los geht's" →
Quizseite (Selbstcheck, danach Tipps und nächstes Thema).

**Rechtliches:** Das Impressum enthält nur Eltern-Daten, nie Daten des Kindes.

---

## Technik

- **Eleventy (11ty) 3.1.6** als Static-Site-Generator – einzige Dev-Abhängigkeit; der
  ausgelieferte Output ist reines HTML/CSS/JS ohne Runtime-Abhängigkeiten
- **Nunjucks-Templates**, Inhalte datengetrieben: `src/_data/topics.json` hält alle fünf
  Themen (Fakten, Balance, Selbstcheck, Tipps); `src/themen.njk` rendert je Thema eine Seite
  und `src/themen-check.njk` die Quizseite – ein neues Thema ist reine JSON-Autorierung
- **Handgeschriebenes CSS** mit Design-Tokens (`tokens.css`), mobile-first, Tap-Ziele ≥48 px
- **Minimales Vanilla-JS** (`src/js/app.js`): Screenreader-Ankündigung des Selbstchecks (plus
  Fallback für Browser ohne `:has()`), Aufdecken der Themen nach „Start", und lokales Merken
  gesehener Themen
- **Selbstcheck** läuft rein clientseitig (CSS `:has()` + Radios); Antworten werden **nicht
  gespeichert oder gesendet**. Einzig lokal im Browser (`localStorage`) wird gemerkt, welche
  Themen bereits gesehen wurden – ohne Personenbezug, ohne Übertragung
- **Kein Tracking, keine Cookies, keine Drittanbieter-Requests** – Systemfonts, selbst
  gehostete Assets
- **Versionierung** von CSS/JS über `?v=…`, damit Updates ankommen (kein Stale-Cache)
- **Hosting:** GitHub Pages

### Struktur

```
src/
  index.njk          Startseite (Start-Knopf + Themen)
  themen.njk         Themenseite (Fakten + Balance + „Los geht's")
  themen-check.njk   Quizseite (Selbstcheck → Tipps → Weiter)
  installieren.njk   „App aufs Handy"
  impressum.njk      Impressum (§5 DDG)
  datenschutz.njk    Kindgerechte Datenschutzerklärung
  404.njk
  _data/             site.json, topics.json
  _includes/         head.njk, footer.njk, happi.njk
  css/  js/  icons/  icons-src/
eleventy.config.js
```

### Entwickeln

```bash
npm install
npm run dev     # lokaler Dev-Server
npm run build   # baut nach _site/
```

Weitere Doku im Repo: `VOICE-SPEC.md` (Stimme & Inhaltsregeln), `PROJECT-HANDOFF.md`
(ursprüngliche Übergabe, englisch).

---

## English

A small German-language info site about mindful smartphone use, for a 10–12-year-old child.
Five topics explain how phones affect us and what helps. The tone is a friendly companion
(Happi, a cat) – no lecture, no fear, no judgment.

**Flow:** Start → topic page (facts + "What's actually good about it?") → "Let's go" → quiz
page (self-check, then tips and the next topic).

**Stack (see the German section for details):** Eleventy 3.1.6 static site generator, Nunjucks
templates with content in `src/_data/topics.json`, hand-written CSS with design tokens, a tiny
bit of vanilla JS, hosted on GitHub Pages. The self-check runs entirely client-side; answers
are never stored or transmitted (only which topics have been seen is kept locally via
`localStorage`). No tracking, no cookies, no third-party requests.
