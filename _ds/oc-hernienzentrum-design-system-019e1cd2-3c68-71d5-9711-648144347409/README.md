# OC | OrthoChirurgie — Hernienzentrum Design System

A design system extracted from the live OC | OrthoChirurgie Hernienzentrum web-app. It captures the patient-facing visual language, content tone, and component vocabulary used across the practice's certified hernia-center experience in Ludwigshafen.

The source product is a static, four-language (DE / EN / AR / TR) patient-information SPA built around an AI-assisted FAQ. This design system distills the product into reusable tokens, copy guidelines, brand assets, and a UI kit you can pull from when designing new pages, slides, prototypes, or print material for the practice.

---

## Sources

- **GitHub repository:** `titoosm77-gif/OC-Hernienzentrum` (imported via the GitHub connector)
  - `index.html` — full 6-page SPA markup (Start, Über mich, Hernienarten, FAQ, Kontakt, Impressum)
  - `css/style.css` — the full design system (≈1300 lines): tokens, components, RTL
  - `js/data-1.js`, `js/data-2.js` — 105 FAQ entries × 4 languages (not imported — content-only)
  - `js/i18n.js` — UI translations, hernia-type definitions, synonym dictionary
  - `js/app.js` — search engine, navigation, render logic
  - `assets/` — logo, doctor portrait, certification seal, partner-clinic logos, QR code, surgery photo
- The original repo README is preserved at `source/oc-original-README.md`.
- The source HTML + CSS used for extraction are at `source/index.html` and `source/style.css`.

No Figma file was provided.

---

## Brand at a glance

**Who.** OC | OrthoChirurgie is a joint orthopedic-and-general-surgery practice in Ludwigshafen, Germany. The Hernienzentrum is a DHG-certified sub-program led by **Dr. med. Tarek Osman**, focused on the operative care of all hernia forms.

**What is in the system.** The visible product is a single static web-app — patient information, doctor bio, hernia-type explainers, a 105-entry FAQ, contact and imprint. It serves four languages including a full right-to-left build for Arabic.

**Audience.** Patients (often older, multilingual, anxious about an upcoming operation), referring doctors, and curious GPs. Tone has to be calm, factual, and accessible without being condescending.

**Voice tag-line.** *"Ihre Fragen zur Hernie beantwortet."* — soft, italicized serif sets the editorial / consultative mood; clean sans body keeps the medical content legible.

---

## Index

| File / folder | What's in it |
|---|---|
| `README.md` | This document — context, content fundamentals, visual foundations, iconography |
| `SKILL.md` | Cross-compatible Agent Skill manifest |
| `styles.css` | Entry stylesheet — link this one file; it imports the rest |
| `colors_and_type.css` | Design tokens (CSS custom properties) + semantic typography classes |
| `thumbnail.html` | Homepage tile for the design system |
| `components/` | The exported React component library (see **Components** below) |
| `assets/` | Logos, doctor portrait, certification seal, partner-clinic logos, QR code, surgery photo |
| `fonts/` | Notes — fonts are loaded from Google Fonts (Fraunces, Manrope, Noto Naskh Arabic) |
| `preview/` | Design-system preview cards (typography, colors, components, etc.) |
| `ui_kits/web/` | UI kit for the patient web-app — components, kit index, click-through demo |
| `source/` | Imported source files from the GitHub repo (untouched, for reference) |

---

## Components

Nine exported React components live under `components/`, each with a typed `.d.ts` and a preview card. Import them from the compiled bundle:

```js
const { Button, Card, Icon } = window.OCHernienzentrumDesignSystem_019e1c;
```

| Component | What it is |
|---|---|
| **Icon** | The icon primitive — 24-grid, `fill: none`, `stroke: currentColor`. 18 glyphs; `Icon.names` lists them. |
| **Button** | Primary (navy-700 filled) and ghost (hairline border) actions, `md` and `lg`, with optional leading or trailing glyph. |
| **Eyebrow** | The tracked uppercase label above a section title, plus the `pill` variant used as the hero chip. |
| **SectionHead** | The brand's signature heading block: eyebrow, serif-italic title carrying one upright teal accent word, optional sub-line. |
| **Card** | The canonical white surface — hairline border, no resting shadow, hover lift. `accentBar` adds the navy→teal gradient edge. |
| **FAQItem** | Accordion row with the rotating `+` → `×` toggle glyph. Controlled or uncontrolled. |
| **InfoBox** | Callout with the recurring 3px accent edge, in info / warning / danger tones. Carries `InfoBox.DISCLAIMER_DE`, the required medical notice. |
| **Pill** | Rounded chip for FAQ category filters (`md`) and the DE/EN/AR/TR language switcher (`sm`). |
| **TrustItem** | One credential in the trust strip — certification seal or circular glyph chip plus a two-line claim. |

---

## CONTENT FUNDAMENTALS

The product is German-first medical patient information. Copy is calm, accurate, and grown-up — never marketing-bright, never childish.

### Tone & register

- **Calm-professional, never breezy.** This is medical content; patients are anxious. No exclamation marks, no hype.
- **"Sie", not "Du".** Always the formal patient address in German. English uses "you" — neutral and respectful.
- **First-person plural for the practice** when speaking institutionally: *"In unserem zertifizierten Hernienzentrum verbinden wir…"* — collective, reassuring.
- **First-person singular** only inside Dr. Osman's bio: *"…habe ich mich auf die operative Behandlung… spezialisiert."* — a single human voice on the About page.
- **Editorial italic accent.** Display titles are italic serif with one upright accent word: *"Antworten auf Ihre __medizinischen__ Fragen."* This is the system's voice in typographic form.

### Casing

- **Sentence case** for body, paragraph headings, and most UI labels.
- **Title case (German style: capitalized nouns)** for proper headings — German orthography does the work.
- **ALL-CAPS** is reserved for eyebrows and small tag labels with wide letter-spacing (`0.1em`–`0.18em`). Never for body, never for buttons.
- Button labels and nav links are **single words or short phrases** in sentence case: *"Suchen"*, *"Termin buchen"*, *"Zurück zu Hernienarten"*.

### Vocabulary

- **Lay terms first, then the medical term in parentheses.** *"Leistenbruch (Leistenhernie)"*. Never lead with jargon.
- Use the proper German medical noun (*"Bruchsack", "Bruchlücke", "Bauchwand"*) — the audience expects it. Don't soft-pedal with euphemisms.
- Procedure names use their **technical abbreviations in caps** with the explainer next to them: *"TEP- oder TAPP-Operation (Schlüssellochoperationen)"*.
- Reference authorities by their **full German short-name**, not initialism alone: *"Deutsche Herniengesellschaft (DHG)"*, *"Kassenärztliche Vereinigung Rheinland-Pfalz"*.

### The disclaimer pattern

Every detail page ends with the **identical sentence**, set in a soft teal info-box with a left-border accent:

> **Hinweis:** Diese Informationen ersetzen keine ärztliche Beratung. Sprechen Sie für Ihre individuelle Situation mit Ihrem behandelnden Arzt.

It also appears under the search box in the hero, paired with an amber warning-triangle. **Never omit this from any patient-facing screen.** It is a legal and ethical fixture.

### What we don't do

- **No emoji.** Anywhere. The aesthetic is editorial / clinical.
- **No exclamation marks** in patient copy. The only acceptable usage is a quoted publication title.
- **No fear-based language.** Risks are stated factually ("Rezidivrisiko", "Risikofaktoren"), never dramatized.
- **No hard CTAs** ("Jetzt buchen!"). The product is informational; appointment booking is offered ("Termin buchen", "Online-Termin buchen") with no urgency styling.
- **No fake stats.** Single quantitative claim on the site: *"Über 1.000 Hernien-Eingriffe"* — verifiable and rounded.

### Example specimens (German)

- **Hero h1:** *"Ihre Fragen zur __Hernie__ beantwortet."*
- **Section eyebrow:** *"ÜBERSICHT"* / *"HÄUFIG GESTELLTE FRAGEN"*
- **Hernia-card therapy label:** *"BEHANDLUNG"* (all-caps eyebrow over one calm paragraph)
- **Button:** *"Mehr erfahren →"*  /  *"Termin buchen"*
- **Trust-strip claim:** *"DHG-zertifiziertes Hernienzentrum — Qualitätsgesicherte Hernienchirurgie"*
- **Disclaimer:** *"Diese Informationen ersetzen keine ärztliche Beratung."*

---

## VISUAL FOUNDATIONS

### Palette & mood

- **Navy + teal on warm off-white.** `--navy-700 #1F2C5C` is the primary brand color (lifted from the OC wordmark). `--teal-600 #3FA796` is the accent — used for italic-title highlights, eyebrows, focus rings, info-box borders, success states. Together they read clinical-but-warm.
- **Page background is never pure white.** `--bg #FAFAF7` is a warm off-white. Card surfaces are `#FFF`. This contrast — warm page, bright card — does most of the visual lifting.
- **Imagery is cool-teal and cinematic.** The hero/surgery photograph uses cool color temperature, soft over-the-shoulder framing, with surgical-blue scrubs as the dominant hue. No filters, no grain, no duotone treatments.
- **Gradients are restrained.** Two uses only: (1) the dark navy `linear-gradient(135deg, --navy-700, --navy-800)` on the QR-code block, and (2) thin 4 px decorative gradient bars (`90deg, --navy-700 → --teal-600`) on top of hover-elevated cards. Never use gradient text. Never gradient backgrounds.

### Typography

- **Display:** Fraunces — variable-weight serif, opsz axis enabled, soft axis nudged toward soft. Used at weight 400 italic (most h1/h2) and 500 upright (the em-accent inside a title). Letter-spacing ranges `-0.02em` (h1) to `-0.01em` (h3).
- **Body:** Manrope — modern geometric sans, weights 400/500/600/700. Body sits at **16.5 px** (the half-pixel is intentional, lifted from the source CSS — it adds a touch of editorial weight).
- **Arabic / RTL:** Noto Naskh Arabic. The RTL build flips header/CV bullet padding sides and mirrors arrow icons via `transform: scaleX(-1)`.
- **The italic-+-upright pattern.** Every page title is a serif italic phrase containing one upright-accent word in teal-700. Don't break this rhythm; it is the brand's signature.

### Layout

- **Max content width:** `1180px`. Outer gutters: `24px`. Centered with `margin: 0 auto`.
- **One column on mobile, grid on desktop.** Hero shortcuts and trust-strip use `auto-fit, minmax(N, 1fr)` — never fixed column counts. About page goes 1fr → 1.4fr two-column at desktop (photo:content).
- **Sticky translucent header** with backdrop-blur 12 px on a `rgba(255,255,255,0.92)` surface. Bottom border 1 px `--line`.
- **No fixed elements other than the header.** No floating CTA, no bottom nav, no scroll-to-top arrow.

### Backgrounds

- The hero uses two **enormous, very soft radial-gradient orbs** offscreen at top-right (`--teal-100`, 0.6 opacity) and bottom-left (`--navy-100`, 0.5 opacity) for atmosphere. They are nearly subliminal — set `pointer-events: none` and never animate.
- No repeating patterns, no textures, no noise, no hand-drawn illustrations anywhere in the product.
- Full-bleed imagery is reserved for the doctor portrait on About and the surgery photograph (when used).

### Corners & shadows

- **Radii ladder:** `--r-sm 6px` (chips), `--r 10px` (buttons, inputs, pills, info-box), `--r-lg 16px` (cards), `--r-xl 24px` (hero search box, QR block, doctor portrait), `--r-pill 999px` (lang switch, eyebrow chips, hero shortcuts hover).
- **Shadows are navy-tinted, never gray.** All three shadow tokens use `rgba(15,26,61, …)`. The system has three steps — `--shadow-sm`, `--shadow`, `--shadow-lg` — and a focus ring `--shadow-focus-teal` (4 px halo of `--teal-50`).
- **Cards default to a 1 px border, NO shadow.** Shadows only appear on hover or on the FAQ accordion when it's open. The "lifted" feel is created by the warm-page / white-card contrast plus the border, not by drop shadow.

### Borders & dividers

- **Default border color:** `--line #E5E7EE`. Soft variant `--line-soft #F0F2F7` for inner dividers (FAQ answer top-rule, CV-list bottom-rules).
- **The 3 px left-border accent** in teal-600 is a recurring motif: credentials list, info-boxes, special-cards, the FAQ section title rule. **In RTL it flips to right-border** — handled in source CSS as `html[dir="rtl"] .x { border-left: none; border-right: 3px solid var(--teal-600); }`.
- **The 6 × 24 teal rectangle** before section-title text (`::before` pseudo) is the heading marker. It is small, calm, and present on every FAQ section title.

### Hover & press

- **Buttons** (primary): background steps from `--navy-700` to `--navy-600`, plus `translateY(-1px)`. No box-shadow change.
- **Cards** (hernia-card, contact-card, shortcut): `translateY(-2px to -3px)` + `--shadow-lg` + border color shifts to `--teal-500`. Hernia cards also reveal a 4 px gradient bar at top.
- **Nav links:** background fades in to `--navy-50`, color to `--navy-700`. The active link also gets a 2 px teal under-bar between the right and left padding edges.
- **Press states** are NOT explicitly styled — buttons inherit the browser default. If you add a press state, scale to 0.98 with no shadow change. Never invert color on press.
- **Hover transitions** are uniformly `transition: all .2s` (`--t`). FAQ accordion is `.35s ease`. No bouncy easings, no spring physics, no `cubic-bezier` overrides.

### Animation

- **One named keyframe in the system:** `pageIn` — opacity 0→1, translateY 8 → 0, `.35s ease`. Used as a single page-transition fade on the SPA.
- **One pulse:** `pulseHighlight` on a FAQ item the user searched-to. 1.6 s, single-shot, expanding teal box-shadow.
- **No looping animations, no parallax, no scroll-triggered reveals.** This is a medical practice, not a scroll-tale.
- **The FAQ "+" icon rotates 45°** to become an "×" when an item is open. `transition: all .25s`.

### Transparency & blur

- **One blur surface only:** the sticky header — `rgba(255,255,255,0.92)` + `backdrop-filter: blur(12px)`. Vendor-prefix the `-webkit-backdrop-filter`.
- **No glass-morphism cards.** Cards are opaque white with a border.

### Cards — the canonical recipe

```
background: var(--surface);        /* pure white */
border: 1px solid var(--line);     /* 1 px hairline */
border-radius: var(--r-lg);        /* 16 px */
padding: 26–28 px 24 px;
transition: all .2s;

hover:
  border-color: var(--teal-500);
  transform: translateY(-2 or -3px);
  box-shadow: var(--shadow-lg);
```

### Imagery

- **Doctor portrait** sits inside a `3:4` aspect frame with `--r-xl 24 px` radius, `--shadow-lg`, and a decorative inset/offset teal-600 outline rectangle 16 px below-right (negative z-index). It is the only "framing" treatment in the system.
- **Logos** sit inside a 56 × 56 white rounded chip with a 1 px line-soft border and 6 px padding — `object-fit: contain` so partner logos never distort.

---

## ICONOGRAPHY

The product does **not** use an icon font, sprite system, or external icon CDN. Every icon in the source is a **hand-coded inline SVG** that follows a very narrow recipe:

### The recipe

- `viewBox="0 0 24 24"`
- `fill="none"` — outlined-only, never filled
- `stroke="currentColor"` — color is inherited from the surrounding text
- `stroke-width` is the only knob that varies: **1.6** (large decorative trust-strip / contact-card glyphs), **1.8** (hero shortcuts), **2** (default, almost everywhere), **2.4** (the small arrow inside the primary search button — bumped for visibility at 16 × 16)

This is essentially the **Lucide / Feather** drawing convention (24-grid, 2-px stroke, rounded joins) — but Lucide is **not** loaded. The icons are inlined per-use.

### Substitution guidance

- If you need an icon not present in `index.html`, **use Lucide** (CDN: `https://unpkg.com/lucide@latest`) — it is visually indistinguishable from the existing inline set.
- Match `stroke-width: 2`, `stroke: currentColor`, `fill: none`.
- Avoid Heroicons-solid, Material-filled, or any duotone style — they will read as foreign in this system.

### Icon size & placement

- **Inside text-buttons:** 14 × 14, gap `8px` from the label.
- **Inside hero shortcut chips:** 18 × 18 inside a 36 × 36 teal-50 circle.
- **Inside trust-strip / contact-card logo slots:** 28 × 28 inside a 56 × 56 round.
- **Inside FAQ item toggle:** the rotating "+" / "×" — set via CSS `content`, not SVG (font-weight 700, 14 px).

### Emoji & unicode

- **No emoji anywhere** in the product. Don't introduce any.
- **No unicode glyph icons.** Even the "+" used as the FAQ toggle is the ASCII plus, not the heavier U+2795 / U+FF0B.

### Logos & seals (in `assets/`)

| File | Use |
|---|---|
| `assets/logo.png` | Primary OC | OrthoChirurgie wordmark. Navy `#1F2C5C` on transparent. Use at 34 px height in header. On the dark footer apply `filter: brightness(0) invert(1)` to flip to white. |
| `assets/dhg-siegel.png` | DHG (Deutsche Herniengesellschaft) certification seal. Transparent PNG at 1200 × 1198. Trust strip use only. Official multi-color mark — do not recolor, crop, or place on a busy/colored background. |
| `assets/dr-osman.jpg` | Portrait of Dr. Tarek Osman, surgical scrubs, cinematic. Use only inside the framed photo treatment on About. |
| `assets/qrcode.png` | QR code to the practice landing — use ONLY inside the dark `--navy-700` "Direkt zur Praxis" block on a white inner chip. |
| `assets/apollonia-logo.jpg` | Apollonia Kurpfalzklinik partner logo (third-party). Use in contact-card logo slot. |
| `assets/grn-logo.png` | GRN Klinik partner logo (third-party). Use in contact-card logo slot. |
| `assets/doctolib-logo.jpg` | Doctolib booking-partner logo (third-party). Use only in the dedicated `.doctolib-card` styled card. |
| `assets/surgery.jpg` | Optional editorial image — surgery in progress. Cool teal cast. Use for hero / feature imagery if needed. |

---
