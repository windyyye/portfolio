# Portfolio v2 specification

Supersedes the v1 specification (a client-facing freelance portfolio). Per issue #21, the
objective has changed; v1's positioning survives as narratable history — the site's own
pivot is part of the story it tells. v1 remains readable in Git history.

Design decisions for this rewrite are grounded in `docs/research/revamp-inspiration.md`
(the archetype sweep) and recorded in `docs/decisions/002-illustrated-css-craft.md`.

## Purpose and audience

The site is a personal project done for fun and self-expression: a **digital diary that
narrows into Windy's career**. It is not marketing and not a showcase. It exists to be a
place where Windy thinks in public, keeps a record of what she makes and learns, and enjoys
the making itself.

The primary reader is **Windy**. Peers, friends, and casual visitors are a welcome secondary
audience; potential clients or recruiters are not a designed-for audience (nothing needs to
repel them — the site simply does not optimize for them).

Success in one line: Windy enjoys writing here, and the site feels unmistakably hers.

## Positioning and honesty

The site is a career journal — an ongoing, dated, first-person record of building, learning,
and changing direction. It is honest about being in progress; unfinished work and reversed
decisions are content, not embarrassments.

The v1 portfolio (freelance positioning, offer cards, "how I work" pitch) is no longer a
goal. It remains part of the site's history and may be narrated as such — the pivot from
"get clients" to "for fun" is itself a diary entry waiting to happen.

The honesty bar carries over unchanged: **never invent clients, outcomes, metrics, or
experience.** Flag uncertainty instead of guessing.

## Voice and tone

First person, warm, plain-English, and funny where funny is available — humor lives
especially in the small text: captions, footnotes, marginal notes, tag lines. Serious
content stays serious; the voice never tips into performance.

## Content model

- **Journal entries** — the core unit: dated, first-person posts about building, learning,
  and deciding. Entries carry a growth stage (e.g. seedling → budding → evergreen) rather
  than pretending to be finished articles; reversing or superseding an older entry is normal
  and linked.
- **Makes** — things built (including this site), written up as part of the story: what it
  is, what was learned, what went wrong. Problem/agent/verification framing from v1 may
  appear inside entries where relevant, but not as sales structure.
- **The pivot** — v1's history and the objective change are narratable content.

What happens to existing v1 pages (removed, rewritten, or reframed) is an implementation-phase
decision under #21, made deliberately per page. This spec acknowledges the question; it does
not settle it.

## Visual direction (summary)

The full system is future work — a v2 `DESIGN.md`, to be written against the research
constraints before implementation. Direction in one line: **an illustrated garden with book
craft, in color** — a cohesive illustrated personal system; masthead, table-of-contents-style
navigation, numbered entries and edition rituals, paper texture; a soft, confident palette;
wit in the small text. Near-zero motion. Hand-drawn or programmatic art committed to the
repository. See `docs/decisions/002-illustrated-css-craft.md` for the technology decisions
and `docs/research/revamp-inspiration.md` for the evidence.

v1 `DESIGN.md` is frozen and must not be extended for new work.

## Technology and quality bar

Unchanged from v1 and re-affirmed by ADR 002:

- Astro static site, Markdown content
- Firebase Hosting on the `windye` project, `omaopoao.com` custom domain
- No backend; free tiers only; no paid assets or services
- Mobile-friendly, accessible (non-negotiable), fast — Lighthouse 90+ target retained
- Title and description on every page

## GitHub plan

Carried over from v1 without change: one public repository, one issue per feature, branch
and pull request per change, no empty commits, useful README. The agent playbook
(`docs/agent-playbook.md`) governs execution.

## Documentation

The repository contains: `README.md`, `docs/spec.md`, `docs/research/`, `docs/decisions/`,
`docs/agent-playbook.md`, `CHANGELOG.md`, and (once written) v2 `DESIGN.md`.

## Milestones

v1's weekly milestone table is obsolete. Implementation phases for the revamp are set under
issue #21 once the v2 design system exists. Each phase ships as its own branch and pull
request.

## Definition of done (v2)

- The diary exists and is live on `omaopoao.com`, and Windy enjoys maintaining it.
- The site feels like a cohesive illustrated book that could belong to no one else.
- Every claim is true; the v1 honesty bar holds.
- The visual system is written down in v2 `DESIGN.md` and followed exactly.

## Out of scope for v2

- Client acquisition: offer cards, conversion goals, Upwork links, "hire me" surfaces
- Backend, CMS, paid services, analytics beyond free basics
- WebGL, canvas experiments, animation-heavy pages (see ADR 002)
- Redesigning other projects; the revamp covers this site only
