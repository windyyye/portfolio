# DESIGN.md — visual source of truth

One file describing how this site looks. Any agent or human editing UI reads this first and
follows it exactly. Product scope lives in `docs/spec.md`; this file owns appearance and
interaction feel. When this file and improvisation disagree, this file wins.

**Brand in one line:** an early-career freelancer who directs AI coding agents — professional
with a pulse, honest, plain-English. The design should feel like a well-set document, not a
startup landing page.

**Direction:** monochrome editorial minimalism (morflax-style structure), warmed by an
off-white page, generous whitespace, and first-person copy. No accent color. No dark mode in v1.

---

## 1. Design principles

1. **Type is the interface.** Hierarchy comes from size, weight, and spacing — not color or boxes.
2. **Hairlines over shadows.** Structure is drawn with 1px borders. No drop shadows, no glows.
3. **Monochrome means it.** Grayscale only. If a design idea needs color to work, it's the wrong idea.
4. **Space is a feature.** When in doubt, add whitespace instead of decoration.
5. **Motion is feedback, not entertainment.** Things respond to the cursor; nothing moves on its own.
6. **Every claim stays true.** Design may not imply clients, results, or scale that don't exist.

## 2. Colors

Grayscale with a warm tint. Defined once as CSS variables on `:root`; never hard-code a hex
value in a component.

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#FAFAF7` | Page background (warm off-white) |
| `--color-text` | `#111110` | Headlines, body text, primary buttons |
| `--color-text-muted` | `#6B6A66` | Dates, labels, footer, secondary text |
| `--color-border` | `#E3E2DD` | All 1px hairlines |
| `--color-surface` | `#F1F0EB` | Hover fills, subtle backgrounds |

- Contrast: body text ≥ 4.5:1 on `--color-bg`; muted text ≥ 4.5:1 (both pass).
- No other colors. Links use `--color-text` with underline, not a colored accent.

## 3. Typography

Two families, no more:

- **Geist Variable** (self-hosted at `public/fonts/`, OFL license file kept alongside) —
  everything: headlines, body, nav, buttons. Weights: 400 body, 500 nav/labels, 600–700 display.
- **System monospace** (`ui-monospace, 'SF Mono', 'Cascadia Mono', Menlo, monospace`) —
  micro-labels, dates, and the footer colophon only.

Scale (fluid via `clamp()`):

| Role | Size | Weight | Line height |
|---|---|---|---|
| Hero headline | `clamp(2.75rem, 7vw, 5.5rem)` | 600 | 1.05, letter-spacing `-0.02em` |
| H2 section | `clamp(1.5rem, 3vw, 2.25rem)` | 600 | 1.15, `-0.01em` |
| H3 / card title | `1.125rem` | 500 | 1.3 |
| Body | `1rem` | 400 | 1.6 |
| Small / meta | `0.875rem` | 400 | 1.5 |
| Micro-label | `0.75rem` mono | 500 | 1.2, `text-transform: uppercase`, `letter-spacing: 0.08em` |

Body text measures at most `65ch`. Sentence case everywhere except micro-labels (uppercase).

## 4. Spacing & layout

- 4px base grid; spacing values are multiples of 4 (`8, 12, 16, 24, 32, 48, 64, 96…`).
- Container: `max-width: 72rem`, `padding-inline: clamp(1.25rem, 4vw, 2.5rem)`.
- Text-measure wrapper inside container: `max-width: 65ch`.
- Sections separated by `1px` hairlines and `clamp(3rem, 8vw, 6rem)` vertical padding — not
  by background blocks.
- Full-page vertical rhythm: header → content → footer, content area breathes (`min-height`
  so short pages still pin the footer down).

## 5. Components

- **Header** — sticky, `--color-bg` background, hairline bottom border. Site name left
  (500, no underline), nav right: `0.75rem` mono uppercase links, `2rem` gap. Active page:
  underline. Hover: color → `--color-text-muted`.
- **Hero (home only)** — headline (scale top row) followed by tagline paragraph at `1.25rem`,
  muted; hairline bottom border closes the hero.
- **Offer cards (home)** — 3-column grid (1 column under `640px`), each cell: hairline border,
  `0` radius, mono micro-label ("01 / FRONTEND"), H3 title, one-line description. Hover:
  background → `--color-surface` (transition only).
- **Buttons** — two variants, `0` radius, `0.75rem` mono uppercase, `12px × 24px` padding:
  - Primary: `--color-text` background, `--color-bg` text. Hover: `--color-text-muted` background.
  - Secondary: transparent background, hairline border, `--color-text` text. Hover: surface fill.
- **Links (inline)** — `--color-text`, underlined with `text-underline-offset: 3px`.
  Hover: color → `--color-text-muted`. Focus always shows the focus ring (see §7).
- **Build-log list** — hairline-separated rows: title (500) left, date right in mono muted.
  Hover: row background → `--color-surface`. No cards, no thumbnails.
- **Footer** — hairline top border; mono micro-labels for link groups ("ELSEWHERE"),
  inline links, muted colophon line: name · built with AI agents · Malaysia (UTC+8).
- **Icons** — none by default. If ever needed: single-color SVG, `currentColor`, `1.5px` stroke.
  No emoji in UI chrome.

## 6. Motion

- One token: `--transition: 150ms ease`, applied to `color`, `background-color`,
  `border-color`, `opacity` only. No transforms, no scroll-triggered or entrance animation.
- Motion is only ever a state change the user caused (hover/focus). Nothing loops, bounces,
  or animates on load.
- `prefers-reduced-motion: reduce` → all transitions `none`.
- This section refines `docs/spec.md` §13: interaction feedback only, nothing decorative.

## 7. Accessibility (non-negotiable)

- Focus ring: `2px solid var(--color-text)` with `2px` offset, on `:focus-visible`, everywhere.
- Touch/click targets ≥ 44×44px on mobile (pad, don't stretch text).
- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page, headings never
  skipped.
- Skip-to-content link, visible on focus.
- Meaningful `alt` text or none (`alt=""`) for decorative images. No text baked into images.
- Every page: unique `<title>` + meta description (layout enforces this).

## 8. Page layouts

- **Home** — hero (headline + tagline) → "WHAT I DO" offer cards → "LATEST" single newest
  log entry + link to `/log/` → contact CTA (primary button).
- **Work** — mono label + H1, intro sentence, then the honest case-study list (kept simple
  until real case studies exist in week 4).
- **How I work** — text page: H1, intro, hairline-ruled subsections, generous measure.
- **Build log** — list component from §5, newest first. Post pages: H1, mono date line,
  article at `65ch` measure.
- **About** — text page, same treatment as How I work.
- **Contact** — link list styled as rows (label in mono muted left, value right), primary
  email button, timezone note.

## 9. Do / Don't

**Do** use the tokens; keep corners square; underline links; label sections in mono
uppercase; let headlines be huge; keep copy first-person and plain.

**Don't** introduce any color outside §2; add shadows, gradients, or rounded corners; center
long body text; use font weights beyond 400/500/600/700; add emoji to navigation or buttons;
animate anything the cursor didn't cause; use exclamation marks.

---

*Changes to this file go through a `docs:` PR, like everything else in docs. The redesign
implementing it is tracked in #14.*
