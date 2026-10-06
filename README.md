# Windy — a career diary (Vol. I)

A personal site for Windy: a sketchbook that narrows into her career. It is a work in
progress, built in public for fun and self-expression — explicitly **not** for marketing or
showcases. The pivot from freelance portfolio to diary is the site's origin story, told in
[entry No. 001](https://omaopoao.com/log/2026-10-02-the-pivot/) and specified in
[`docs/spec.md`](docs/spec.md).

## What this site is for

A digital diary: what Windy is building, reading, and deciding, kept in public on purpose.
The intended domain is [omaopoao.com](https://omaopoao.com), served from Firebase Hosting's
`windye` project. Claims reflect work that can be shown and explained — no invented clients,
metrics, or experience, and no AI-generated imagery.

## Stack

- [Astro](https://astro.build/) static site, Markdown content
- Visual system: [`DESIGN.md`](DESIGN.md) v2 — "Vol. I", an illustrated garden with book craft
- [Firebase Hosting](https://firebase.google.com/products/hosting) using the `windye` project

## Run locally

```bash
npm install
npm run dev
npm run build
```

The development server is for local preview. The build command checks that the site can be
generated for deployment.

## Repository workflow

1. Open an issue describing one change.
2. Create a branch for that issue.
3. Make a small, focused change and commit it clearly.
4. Open a pull request that references the issue.
5. Review and merge the pull request to `main`.

This repository is public. I aim for steady, real activity — roughly three or four useful
sessions per week rather than empty commits.

## How this is built

The code in this repository is written by AI coding agents. I direct the agents, provide the
plan and constraints, review their output, and check the result. The goal is not to pretend
that every line is hand-written; the human decisions, testing, and accountability remain mine.

Specs, architecture choices, and working rules are documented in [`docs/`](docs/), so the
process can be inspected as well as the finished site.

## Project documentation

- [`docs/spec.md`](docs/spec.md) — v2 specification: the diary, its audience, and quality bar
- [`docs/research/revamp-inspiration.md`](docs/research/revamp-inspiration.md) — the archetype
  sweep behind the Vol. I design
- [`docs/decisions/`](docs/decisions/) — short architecture decision records
- [`docs/agent-playbook.md`](docs/agent-playbook.md) — rules for AI agents working here
- [`PROVENANCE.md`](PROVENANCE.md) — where every image came from
- [`DESIGN.md`](DESIGN.md) — the visual source of truth
- [`CHANGELOG.md`](CHANGELOG.md) — notable changes

## Status

Vol. I — launch-ready work in progress. The revamp foundation (research, spec v2, ADRs), the
design system, the book skeleton, and entry No. 001 are merged; the shells are being filled.
