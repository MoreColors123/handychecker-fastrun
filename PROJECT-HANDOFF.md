# HandyChecker — Project Handoff

A plain-language description of the project for an LLM (or developer) picking it up cold.
No build-system or planning-tooling context is required to understand what follows.

---

## 1. What this is

HandyChecker is a small, **German-language information website** about the dangers of
smartphone overuse, made for a **10–12 year old girl** (the owner's daughter). She opens it
on her phone like a home-screen app and learns — through short facts, small self-check
questions, and practical tip boxes — why mindful phone use matters and what she can actually
do about it.

**Core intent:** make the topic understandable and relatable to a child, while leaving her
feeling *empowered* to make her own healthier choices — **never scared and never lectured**.
This "friendly guide, not a parent lecture" tone is the single most important product rule.

It is intentionally tiny: a focused information site, **not** a platform, app, or service.

---

## 2. Audience and tone rules (non-negotiable)

- **Language:** all user-facing copy is German. No multi-language support by design.
- **Reading level:** tuned to a 10–12 year old — short sentences, everyday imagery, no jargon.
- **Voice:** a warm, friendly guide. The mascot is a cat named **Happi**, who can narrate in
  first person ("ich") and addresses the reader informally ("du").
- **No lecturing:** no "du solltest/musst" imperatives, no guilt framing, no right/wrong
  judgment.
- **No fear-mongering:** never "das Handy macht süchtig" / "du bist süchtig". Correlation
  claims are hedged ("kann dazu führen").
- **No scoring or shaming:** the self-check never produces a score, verdict, ranking, or
  diagnosis. It gives descriptive answer options and friendly, observational reflections.
- **Facts first, then encouragement:** short sections (2–3 sentences per idea, at most one
  number per section), no walls of text.
- **Balance:** every topic includes a "Was ist daran eigentlich gut?" section so the phone is
  not painted as purely bad.

---

## 3. Hard constraints

- **Privacy:** zero data collection — no accounts, no analytics, no tracking cookies, no
  third-party embeds. No Google Fonts or any CDN-hosted font (a German court ruling makes
  that a GDPR issue, and this is a German child's site). Assets are system or self-hosted;
  the total external-request count must stay at zero.
- **Hosting:** free static hosting behind a normal HTTPS URL she can bookmark and share.
  GitHub Pages is the current target; Cloudflare Pages is a documented alternative.
- **Scope:** small and durable — a parent should be able to maintain it for years.
- **Shareable:** links are meant to be shareable with friends/classmates (German only).

---

## 4. Technology stack

| Layer | Choice | Why |
|-------|--------|-----|
| Static site generator | **Eleventy (11ty) 3.1.6** | One shared Nunjucks template renders topic pages from data; output is plain HTML, no client framework |
| Build/runtime | **Node.js 22 LTS** (dev only) | Eleventy requires Node ≥18; nothing runs on the server |
| Output | Semantic HTML5 + one hand-written CSS pair + minimal vanilla JS | No framework, no asset build step |
| App feel | Web App Manifest + full icon set (PWA-style install) | Makes it feel installed without an app store |
| Fonts | System font stack | Zero third-party requests; covers German umlauts |
| Hosting | GitHub Pages (primary), Cloudflare Pages (alternative) | Free, automatic HTTPS |

There are **no runtime dependencies**. Eleventy is the only dev dependency.

### Build commands

```bash
npm install      # install dev dependency
npm run build    # build static site into _site/
npm run dev      # local dev server (eleventy --serve)
```

The build output goes to `_site/`. `pathPrefix` in `eleventy.config.js` is set to
`/handychecker/` (it must match the repo/subpath, or be `/` for a user-site/Cloudflare).

---

## 5. Repository layout

```
src/
  index.njk              # home page: greeting + five topic cards
  impressum.njk          # legal notice (§5 DDG) — contains placeholders to fill
  datenschutz.njk        # child-friendly privacy page + short parent note
  404.njk                # not-found page
  manifest.webmanifest   # PWA manifest (name, icons, standalone, theme color)
  _data/
    site.json            # site metadata + the list of five topics (slug + title)
  _includes/
    head.njk             # shared <head>: meta, CSS, manifest, icons, iOS tags
    footer.njk           # shared footer: Impressum + Datenschutz links
  css/
    tokens.css           # design tokens (colors, spacing, font sizes, tap size)
    site.css             # mobile-first base styles + card component
  icons/                 # generated PNG/SVG app icons
  icons-src/             # the single Happi art source SVG
eleventy.config.js       # passthrough copies + input/output dirs + pathPrefix
package.json             # scripts + Eleventy dev dependency
.github/workflows/deploy.yml   # build + deploy to GitHub Pages on push to main
tools/strip-png-meta.cjs # helper to strip metadata from icon PNGs
_site/                   # build output (generated)
```

### Topic data model

Topics live in `src/_data/site.json` as a simple list of `{ slug, title }` entries. The five
v1 topics are:

1. Bildschirmzeit & Balance
2. Schlaf
3. Aufmerksamkeit & Fokus
4. Körper (Haltung/Augen)
5. Datenschutz & Daten

The home page loops over this list to render cards. The plan is for topic *content*
(facts, self-check questions, tips) to also be data-driven, so adding a topic never means
touching the other pages.

---

## 6. What is already done

The **foundation shell** is complete and deployed:

- **Home page** (`/`) in German: a greeting from Happi, a short privacy reassurance, and five
  tappable topic cards (currently linking to `/themen/<slug>/` routes that don't have content
  yet).
- **Legal pages:** an Impressum using the §5 DDG layout (still contains `[placeholder]`
  parent data — see follow-ups) and a child-friendly Datenschutz page that states plainly
  that nothing is stored and explains "die Seite kann das gar nicht", plus a short parent note.
- **PWA identity:** a validating web-app manifest (name, `display: standalone`, theme/background
  colors, 192/512 PNG icons, a maskable SVG) and a full icon set — 192/512 PNG, maskable SVG,
  `apple-touch-icon` 180×180, favicon — served on every page, plus iOS meta tags.
- **Design foundation:** warm, cozy, light-only palette (cream background, ginger/cocoa tones),
  rounded cards, 18px base font, and a **minimum 48×48px tap target** rule for every
  interactive element. Mobile-first single-column layout with no horizontal scrolling at
  narrow widths. System font stack only, zero third-party requests.
- **Shared partials:** `head.njk` and `footer.njk` so every page gets consistent meta and
  legal nav.
- **Deployment:** a GitHub Actions workflow builds with Eleventy and deploys `_site/` to
  GitHub Pages on every push to `main`. (Requires the one-time repo setting
  **Settings → Pages → Source = "GitHub Actions"**.)
- **Accessibility basics:** a keyboard skip link, focus-visible outlines, and accessible
  color contrast for links and body text.

---

## 7. What still needs building

### Next: reusable content components + one reference topic
Build **one topic page to full quality** (Bildschirmzeit & Balance) that establishes the
copyable pattern for all the rest. This includes:

- **A written voice/style guide** (German, in-repo) that locks Happi's persona, graded
  language, no-lecture rules, and a per-text checklist. All copy written afterward must pass
  it.
- **A self-check widget** ("Wie ist das bei dir?"): the reader taps one of several descriptive
  answers and a friendly per-answer reflection appears immediately below. No submit button,
  no score, re-tappable. Runs entirely client-side; answers are never stored or sent.
- **A "Was kann ich tun?" tip box** with 1–2 small, concrete, doable-today solo actions
  (e.g. "Leg das Handy nach der Schule eine Stunde in die Küche").
- **A balance section** ("Was ist daran eigentlich gut?").
- **"Weiter geht's" next-topic cards** at the page end, reusing the existing card component.
- **A visible Happi illustration** on the topic page, on the home page, and as a small
  recurring mark in the header of every page (derived from the single Happi SVG source; must
  stay same-origin and not crowd the 48px tap targets).

The reference topic's self-check should be **calibrated to the girl's real life**: her usage
is roughly 30–60 min/day and varies, the family rule is a 45-minute limit, and music
(Spotify) is exempt. The music exemption is a natural balance-section point.

### Then: content build-out for the remaining four topics
Complete German content for Schlaf, Aufmerksamkeit & Fokus, Körper, and Datenschutz & Daten,
each following the reference pattern: facts first in short sections, source-backed (pediatric
sources such as AAP / Mayo Clinic / sleep research), hedged correlation claims, a self-check,
a tip box, and a balance section. Until content exists, empty topics should render a friendly
"kommt bald" guard page so next-topic cards always lead somewhere real.

### Finally: polish, offline decision, and real-device QA
- Decide whether to ship a service worker (default: no service worker in v1 unless the
  device is Android Chrome and the automatic install prompt is wanted). If one is added, a
  non-empty cache-first `fetch()` handler is required for Chrome's automatic install prompt.
- Validate install-to-home-screen on her **actual phone**, including the correct icon and the
  documented OS-specific path.
- Confirm updates appear after a content change (no stale cache).
- Add standalone-mode navigation affordance and Open Graph meta tags so shared links show a
  proper German title/preview.
- Verify the zero-third-party-request promise from a clean browser profile on every page.
- Confirm readability at 200% zoom with ≥48px tap targets.

---

## 8. Owner action items / known follow-ups

- **Fill in the Impressum placeholders** (`[Name der Eltern]`, address, email) with real
  parent data before the URL is shared publicly. Never child data.
- **Set Pages source** to "GitHub Actions" once in the repo (and again after any
  fork/transfer).
- The **social media & feelings** topic is deliberately deferred until the child actually has
  social media access; when it is added it uses the exact same content pattern.

---

## 9. Deliberately out of scope (do not add)

- Accounts, login, or personalized progress (GDPR Art. 8 concerns for under-16s in Germany;
  also breaks the trust promise).
- Analytics, tracking cookies, or ad networks of any kind.
- Comments, chat, or any user-generated content.
- Engagement gamification (streaks, notifications, points-for-login) — it contradicts the
  site's own message.
- Fear-based messaging and diagnostic quizzes ("Bist du schon süchtig?").
- Third-party embeds (YouTube, Google Fonts, social buttons) — each one is a data-collection
  pipeline from the child's device.
- Monetization, sponsors, in-app purchases.
- A backend, database, or server-side anything.
- App-store packaging.

Ideas tracked for a possible later version, but **not in the current scope**: offline
real-world "missions", a printable "Handy-Profi" certificate, a printable family media
agreement, per-topic share cards, and a myth-buster ("Stimmt das eigentlich?") element per
topic. These are meant to plug into the same components with no architecture change.

---

## 10. Quick orientation for an LLM picking this up

- Read `src/_data/site.json` first to see the topic model, then `src/index.njk` and the
  `_includes/` partials to see the page shell.
- Read `src/css/tokens.css` before writing any new UI — colors, spacing, font sizes, and the
  48px tap minimum are all defined there.
- Everything user-facing must be **German**, warm, and free of lecture/fear/scoring.
- Any new asset must be same-origin (no CDNs), and any new interactive state must stay
  in-memory — nothing stored, nothing transmitted.
- The build is `npm run build`; verify output in `_site/`.
