# Portfolio v1 specification

## Purpose and audience

The site should get freelance clients to trust Windy enough to reach out. It is also a documented build for practising technical and writing skills, and a way to maintain honest, steady GitHub activity.

The main reader is a potential freelance client skimming for about one minute. Peers and connections are a secondary audience.

## Positioning and honesty

Working headline idea:

> Frontend and QA, built with AI agents. I design the plan, direct the agents, and check every result.

Windy is early in her career, with university and internship experience. The site must never invent clients, outcomes, or metrics. It should be open about the use of AI agents and explain where human direction and review happen.

The brand name is a working name. Keep the name, colours, and fonts in one configuration location so they can be changed without searching through pages.

## Pages and content

### Home

- Headline and short introduction
- Three offer cards: Frontend, QA testing, and Agentic builds
- Latest build-log entry
- Clear contact button

### Work

Project cards should explain:

- The problem
- What the agents were directed to do
- What was checked
- What was learned
- A repository link

Launch with this portfolio site and, optionally, the `buttercakerice.web.app` checklist app.

### How I work

Explain the workflow: specification, prompting, review, testing, and where the human decides.

### Build log

Publish dated Markdown posts. Content is stored in `src/content/log/`.

### About

Cover university, internship, interests, why freelancing, and the direction Windy is taking. Frame the early-career stage positively without overstating experience.

### Other ways I help

Include virtual assistance and English/Malay tutoring for kindergarten and primary pupils.

### Contact

Provide email, LinkedIn, GitHub, and later Upwork. Use a `mailto` link or a simple form. State Malaysia time zone (UTC+8).

## Technology and quality bar

- Astro static site
- Markdown content
- Firebase Hosting on the `windye` project
- `omaopoao.com` as the custom domain
- Contact via `mailto` or a free form service; no backend in v1

The site should be mobile-friendly, target Lighthouse 90+, meet basic accessibility expectations, and include a title and description on every page.

## GitHub plan

- Keep one public repository.
- Use one issue per feature.
- Use a branch and pull request for each change, then merge to `main`.
- Use a commit email linked to the GitHub account.
- Have three or four useful sessions per week, with no empty commits.
- Keep a useful README.

## Documentation

The repository should contain:

- `README.md`
- `docs/spec.md`
- `docs/decisions/`
- `docs/agent-playbook.md`
- `CHANGELOG.md`

## Milestones

### Week 1 — 28 September to 4 October 2026

Repository, Astro skeleton, Firebase deploy, domain, and README.

### Week 2

Home, About, and Contact with real copy.

### Week 3

How I work and two build-log posts.

### Week 4

Work page with one or two honest case studies, polish, Lighthouse check, and a `v1.0` tag.

### After v1

Publish a weekly build-log post, make a small project roughly monthly, and add the Upwork link once it is live.

## Definition of done

- The site is live on `omaopoao.com`.
- A stranger knows within 30 seconds what Windy offers and how to reach her.
- Every claim is true.
- The repository shows at least four weeks of real issues, pull requests, and documentation work.

## Out of scope for v1

- CMS
- Dark-mode toggle
- Animations
- Analytics dashboards
- Multiple languages
- A separate tutoring site
