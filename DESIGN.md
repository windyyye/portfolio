# DESIGN.md — visual source of truth

**v2 — "Vol. I" (2026).** Supersedes v1 (monochrome editorial minimalism, preserved in Git
history and frozen on 2026-10-01). One file describing how this site looks. Any agent or
human editing UI reads this first and follows it exactly. Product scope lives in
`docs/spec.md`; research grounding lives in `docs/research/revamp-inspiration.md`; the
technology decisions behind this system live in `docs/decisions/002-illustrated-css-craft.md`.
When this file and improvisation disagree, this file wins.

**Brand in one line:** Windy's career diary — an illustrated, cohesive personal garden with
book craft, in color. A hand-illustrated almanac that could belong to no one else.

**Direction:** a designed book — warm cream paper, ink typography, table-of-contents
navigation, numbered entries, a colophon — illustrated by a hand-drawn CC0 kit and colored
with a limited riso-style ink set. Soft on the eyes, loud on the soul. Wit lives in the
small text. Near-zero motion. $0, forever.

---

## 1. Design principles

1. **Cohesion over effects.** One system, carried everywhere. No effect is used once.
2. **The book is the structure.** Masthead, TOC navigation, numbered entries, colophon,
   Volume ritual. Structure carries the craft so decoration doesn't have to.
3. **Color lives in the world, not the frame.** Ink-warm accents inside a paper system —
   never hard neon outlines, never offset-shadow chunk, never full-bleed color floods.
4. **Soul is visible personality.** Illustration, warmth, and wit — never plainness
   justified as honesty.
5. **Provenance is aesthetic.** Every image traces to something real: a CC0 library, a
   committed script, a screenshot, or Windy's own photos. No AI-generated imagery.
6. **It must stay cheap and fast.** CSS + committed SVG. No paid assets, no motion
   libraries, no Lighthouse sacrifices for decoration.

## 2. Colors

A limited riso-style ink set on paper. Four inks, fixed roles, no others.

| Ink | Hex | Role |
|---|---|---|
| **Paper** | `#FAF6EE` | Site background, everywhere. Subtle grain overlay (§4). |
| **Ink** | `#2B2520` | All body text, headings, ink-line borders, primary doodle linework. |
| **Fluoro pink** | `#FF48B0` | Accent ink: link underlines, hover states, doodle fills, stamps, marginalia leaders, selection tint. |
| **Riso blue** | `#0078BF` | Second accent: focus outlines, alternating tag stamps, secondary doodle fills, quiet highlights. |

Derived, not new inks: secondary text is Ink at ~70% opacity; hairlines are Ink at ~20%.

**Usage rules (eye-safety is law):**
- Accents are **details, never surfaces.** No pink or blue backgrounds larger than a stamp.
- Pink is never used for body-size text (contrast on paper fails WCAG). Pink is for
  underlines, graphics, stamps, and display-size accents only.
- Blue text on paper passes AA at large sizes; for small blue text, verify AA before use.
- Text selection: Fluoro pink at ~25% opacity.

## 3. Typography

Four faces, self-hosted via Fontsource (OFL, $0). Set in `src/styles` tokens, never inline.

| Face | Role | Notes |
|---|---|---|
| **Fraunces** | Masthead, display headings | Soft wonky serif with ink traps. Use high optical-size axis for the masthead; letter-spacing tight (-1%). |
| **Literata** | Body text, long-form | The reading voice. 1.125rem/1.7 on a 65ch measure. |
| **IBM Plex Mono** | Micro-labels: dates, entry numbers, tags, captions, TOC page numbers | Uppercase, tracked (+8%), 0.8125rem. Carried over from v1. |
| **Caveat** | Marginalia and doodle captions **only** | Never headings, never UI, never body. If a page has more Caveat than two notes, it has too much. |

Scale: masthead `clamp(2.8rem, 8vw, 5.5rem)`; h2 `1.75rem` Fraunces; h3 `1.25rem` Fraunces;
body `1.125rem` Literata; mono labels `0.8125rem`. Line length: max `65ch`.

## 4. Spacing & layout — the book page

- **One centered column**, `65ch` measure, generous top rhythm. Content breathes; nothing
  floats over text.
- **Margins wake up at ≥1100px:** marginalia (Caveat notes, small doodles) sit in the
  outside margin beside the paragraph they annotate, connected by a dotted leader. On
  smaller screens marginalia drops inline below its paragraph. Marginalia is optional
  decoration — entries must read perfectly without it.
- **Paper grain:** one committed SVG noise texture, opacity ≤4%, site-wide. It should be
  felt, not seen.
- **Masthead:** tall on the home page (Fraunces masthead + intro + TOC); slim everywhere
  else (wordmark + one-line TOC).
- Spacing tokens: `--space-1..8` (4 → 128px), consistent vertical rhythm of `--space-5`
  between blocks.

## 5. Components

- **TOC navigation** — the site nav as a table of contents: IBM Plex Mono page titles,
  dotted leaders, roman-numeral page numbers (`. . . . . . II`). On the entry index, same
  treatment lists entries: `No. 012 . . . . title . . . . date`.
- **Entry header** — mono row: `No. 047 · 2026-10-01 · [growth stamp]`, then Fraunces title.
- **Growth stamps** — seedling / budding / evergreen as small hand-drawn SVG stamps (from
  the kit or Rough.js), pink or blue linework, mono label. Never emoji.
- **Links** — Ink text with a Fluoro-pink rough underline (Rough.js SVG) that fades in on
  hover (opacity only). Visited links stay ink; the underline does the talking.
- **Tags** — mono stamps with a small doodle circle, alternating pink/blue.
- **Images & illustrations** — ink-line border (`1.5px` Ink, radius `0`); featured images
  may use a Rough.js sketchy border. Explicit `width`/`height`, `loading="lazy"` below the
  fold, mono micro-caption directly below (e.g. `VOL. I — 2026-10-01`).
- **Marginalia** — Caveat note + optional small doodle in the margin, dotted leader to the
  text. Two notes per page, max.
- **Colophon footer** — every page: ink hairline, then mono line `VOL. I · SET IN FRAUNCES,
  LITERATA & PLEX MONO · COLOPHON`. The colophon page itself holds materials, licenses,
  provenance, and the honest changelog.
- **Buttons** — ink-line pill, paper fill, pink underline-hover; never filled accent blocks.

## 6. Motion

Near-zero, per ADR 002. CSS transitions on hover/focus only, ≤200ms, limited to color,
opacity, and underline. Nothing moves by itself: no scroll effects, no autoplay, no
animation libraries, no parallax, no entrance animations. `prefers-reduced-motion` is
honored (and is nearly free given the above).

**Single sanctioned exception — the tip-jar easter egg** (contact page): a click-triggered
confetti burst + escalating message, scoped to one button. Hand-rolled CSS particles, no
animation libraries, suppressed under `prefers-reduced-motion` (the message still shows).
Any further motion anywhere requires amending this section first.

## 7. Accessibility (non-negotiable)

Carried from v1, intact: WCAG AA contrast for all text (see §2 usage rules for accent
limits); visible focus states (Riso blue outline, never removed); full keyboard navigation;
alt text on every illustration (describing content, not decoration-status — decorative
doodles get `alt=""`); semantic headings; title and description on every page. Lighthouse
90+ target.

## 8. Page layouts

Vol. I defines four patterns; v1's remaining pages (Work, About, Contact, Build log) are
pending implementation-phase decisions under #21 and will adopt these patterns when their
fate is settled.

- **Home** — tall masthead (Fraunces wordmark + one-line diary intro + a small peep or
  doodle), then the TOC: latest entries with numbers and dates, dotted leaders.
- **Journal index** — the full TOC of entries: `No. . . . title . . . date . . . stage`.
- **Entry** — entry header (number, date, stage stamp), Literata body on the book page,
  marginalia as available, ink-line figures with captions.
- **Colophon** — the "about this site" book page: built with, set in, drawn from (kit
  sources + licenses), honest changelog, link to `PROVENANCE.md`.

## 9. Imagery & provenance

- **The kit (CC0):** [Open Peeps](https://openpeeps.com), [Open Doodles](https://opendoodles.com),
  [Humaaans](https://humaaans.com) — hand-drawn characters, scenes, and objects,
  recolored into the ink set and committed to the repo.
- **Rough.js accents (MIT):** sketchy borders, arrows, circles, dividers, hatching —
  generated at build time by committed scripts; the script is the provenance.
- **Real sources:** screenshots of this site/repo and Windy's own photos remain welcome,
  captioned in mono.
- **Banned:** AI-generated imagery, stock photos, anything implying clients, teams, or work
  that doesn't exist.
- **Rules:** SVG preferred; recolor kit art into §2 inks only; every committed asset is
  listed in `PROVENANCE.md` (source, author, license, date); files live in
  `public/images/`, named by subject and date (`entry-047-peep-2026-10-01.svg`).

## 10. Do / Don't

**Do:** reach for the kit before reaching for anything new; keep accents small; number
everything; put the wit in captions and margins; let long entries be long; bump the Volume
when it sparks joy, never on a schedule.

**Don't:** don't add a motion library "just for one page"; don't fill backgrounds with
accent ink; don't use Caveat for anything but marginalia; don't introduce a fifth ink; don't
import unmodified kit art without recoloring and provenance; don't resize the measure past
65ch; don't improvise a component that isn't here — extend this file first.
