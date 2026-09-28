# Windy's Portfolio

A personal portfolio site for Windy, an early-career freelancer offering frontend development, QA testing, and agentic coding / harness engineering. It is a work in progress, built in public to earn client trust and practice technical and documentation skills.

## What this site is for

The site is a clear, honest introduction to what I offer, how I work, and what I am learning. It is written for potential freelance clients first, with peers and connections as a secondary audience. I will not invent clients, metrics, or experience; claims will reflect work I can show and explain.

The brand name is still a working name. The intended domain is [omaopoao.com](https://omaopoao.com), with Firebase Hosting's `windye` project at [windye.web.app](https://windye.web.app).

## Stack

- [Astro](https://astro.build/) static site
- Markdown content for the build log and case studies
- [Firebase Hosting](https://firebase.google.com/products/hosting) using the `windye` project

## Run locally

Once the Astro project is scaffolded:

```bash
npm install
npm run dev
npm run build
```

The development server is for local preview. The build command checks that the site can be generated for deployment.

## Repository workflow

1. Open an issue describing one change.
2. Create a branch for that issue.
3. Make a small, focused change and commit it clearly.
4. Open a pull request that references the issue.
5. Review and merge the pull request to `main`.

This repository is public. I aim for steady, real activity—roughly three or four useful sessions per week rather than empty commits.

## How this is built

The code in this repository is written by AI coding agents, including opencode with GLM. I direct the agents, provide the plan and constraints, review their output, and check the result. The goal is not to pretend that every line is hand-written; the human decisions, testing, and accountability remain mine.

Specs, architecture choices, and working rules are documented in [`docs/`](docs/), so the process can be inspected as well as the finished site.

## Project documentation

- [`docs/spec.md`](docs/spec.md) — v1 purpose, pages, quality bar, and milestones
- [`docs/decisions/`](docs/decisions/) — short architecture decision records
- [`docs/agent-playbook.md`](docs/agent-playbook.md) — rules for AI agents working here
- [`CHANGELOG.md`](CHANGELOG.md) — notable changes

## Status

Work in progress. The first milestone covers the repository, Astro skeleton, Firebase deployment, custom domain, and project documentation.
