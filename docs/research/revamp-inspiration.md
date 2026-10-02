# Revamp inspiration research

Issue: #21 · Date: 2026-10-01 · Method: archetype sweep

The agent curated one strong exemplar per design archetype (15 sites across 14 archetypes), captured screenshots, and presented them one at a time. Windy's reactions — recorded verbatim below — are the findings. Screenshots are captured 2026-10-01 for research reference only; all designs belong to their authors.

## Scoreboard

| # | Archetype | Exemplar | Reaction | Verdict |
|---|-----------|----------|----------|---------|
| 1 | Brutalist | brutalistwebsites.com | "less like this, i like the content feeling 'raw' but a little too old-fashioned to my liking." | No |
| 2 | Editorial / visual essays | pudding.cool | "i don really prefer it much, i like the ideas tho, funny hahaha" | No (wit: yes) |
| 3 | Illustrated digital garden | maggieappleton.com | "omg i loveeee this... KIV it." | **LOVE — foundation** |
| 4 | 3D / canvas playground | bruno-simon.com | "i dont like it. too much graphic movements. and i dont want it to cost me any money, lmao" | No |
| 5 | Terminal / dev-punk | terminal.shop | "NOPE" | No |
| 6 | Neo-brutalist maximalist | gumroad.com | "i love it, but not enough soul into it, imo" → later: "i don like neo-brutalism, hurts my eyes. smtg in between please." | Energy: yes · execution: no |
| 7 | Hand-made zine / indie web | 100r.co | "even more no soul fo rme. NO" | No |
| 8 | Retro desktop OS | windows93.net | *(capture failed in headless browser; no reaction recorded)* | — |
| 9 | CSS-craft / annual edition | lynnandtonic.com | "i like lynnandtonic.com, but no color leh.." | **Like — craft layer** |
| 10 | Type-poster | cargo.site | *(no reaction)* | No |
| 11 | Cluttercore / yesternet | cinni.net | *(no reaction)* | No |
| 12 | Scrapbook diary | scrapbook.hackclub.com | *(no reaction)* | No |
| 13 | Warm playful | joshwcomeau.com | "i dont like it." | No |
| 14 | Designer's catalog | frankchimero.com | *(no reaction)* | No |
| 15 | Modern craft, one toy | eva.town | *(no reaction)* | No |
| 16 | One-idea chronicle | chenhuijing.com | *(no reaction)* | No |

Additional spontaneous response to the agent's first synthesis attempt ("sticker-book garden"): *"perhaps show me more options?"* — synthesis deferred until the wider sweep. After exemplars 9–16, Windy closed the search: *"none. sokay.. we stick the ones i said i like and kiv-ed."*

## Exemplar notes and reactions

### 1 · Brutalist — brutalistwebsites.com
Raw HTML as aesthetic: default-ish type, harsh contrast, visible grids. Reaction: rawness of content appeals, aesthetics too old-fashioned.

### 2 · Editorial / visual essays — pudding.cool
Magazine-grade typography serving longform. Reaction: the frame doesn't grab; the wit does. Third appearance of humor as a positive signal.

### 3 · Illustrated digital garden — maggieappleton.com (`03-digital-garden.png`)
Personal site as illustrated commonplace book: warm cream palette, hand-drawn spot illustrations, garden growth stages (seedling → evergreen) instead of a feed, wit in captions and margins. Reaction: strong positive — the only LOVE of the sweep. Foundation exemplar.

### 4 · 3D / canvas playground — bruno-simon.com (`04-canvas-playground.png`)
Portfolio as toy (drivable Three.js world). Reaction: too much movement; introduced the **$0 budget constraint**.

### 5 · Terminal / dev-punk — terminal.shop (`05-terminal.png`)
Storefront as fake terminal session. Reaction: hard no.

### 6 · Neo-brutalist maximalist — gumroad.com (`06-neo-brutalist.png`)
Thick borders, hard offset shadows, clashing saturation, sticker energy. Reaction: initial "love" for the energy, later reversed — the hard-chunk execution "hurts my eyes." The energy survives; the frames don't.

### 7 · Hand-made zine — 100r.co (`07-handmade.png`)
Photocopied-zine humility, own photos and drawings, plain pages. Reaction: "even more no soul." Key finding: **soul ≠ plainness** — humble minimalism reads as soul-less. Soul means visible personality: warmth, illustration, color, life.

### 9 · CSS-craft / annual edition — lynnandtonic.com (`09-css-craft.png`)
Art-nouveau masthead on paper texture, navigation as a table of contents with dotted leaders and roman numerals, "v. XIX" — 19th annual pure-CSS redesign; even the 404 is a designed book page. Reaction: like, "but no color." Gives the **craft/structure layer**: masthead, TOC-as-navigation, numbered editions, rituals.

### 13 · Warm playful — joshwcomeau.com (`13-warm-playful.png`)
Color-as-world (skies, hills, character, confetti) with soft shapes. Reaction: no — too scene-y/mascot. Distinguishes *where color lives*: not in outlined frames (eye-stab) nor in decorative scenes, but as part of a cohesive system.

### 14–16 · Catalog / modern craft / chronicle — frankchimero.com (`14-designers-book.png`), eva.town (`15-modern-craft.png`), chenhuijing.com (`16-notebook-diary.png`)
Three flavors of typographic cohesion: catalog restraint; neutral canvas + one crafted toy; one retro-idea carried everywhere (a Malaysian FE dev's literal career chronicle). Reaction: none clicked — but the search confirmed what was already liked.

## Extracted constraints

**Wants**
1. A cohesive illustrated system (Maggie's site: the only unconditional positive)
2. Book craft and structure: masthead, TOC-style navigation, numbered entries/editions, paper texture, rituals (Lynn)
3. Color and playful energy — softly executed, never hard outlines/offset-shadow chunk (neo-brutalism's lesson, reversed)
4. Wit and humor in the writing (three unprompted mentions)

**Does not want**
1. Graphic movement / WebGL / animation-heavy pages
2. Terminal or single-gimmick concepts
3. Plain or humble minimalism ("no soul")
4. Institutional editorial polish
5. Dark restrained catalogs; mascot/scene-based playfulness
6. Old-fashioned rawness and dated trends, in either direction

**Hard constraints**
- Budget: $0 — free tiers, own hands, no paid assets or services
- Near-zero motion: CSS transitions at most
- Content-first: the site is a diary, not a demo

## Emerging direction (carried into spec v2 and ADR 002)

An **illustrated garden with book craft, in color**: Maggie Appleton's cohesive illustrated personal system as the foundation; Lynn Fisher's designed-book structure (masthead, TOC navigation, numbered entries, edition rituals, paper texture) as the discipline layer; color and playfulness turned on softly — ink-warm, part of the system, never hard-framed. Wit in the small text. CSS and hand-drawn SVG only; near-zero motion; $0.

The final visual system is future work (DESIGN.md v2) and must be developed against the constraints above.
