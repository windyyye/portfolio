---
title: 'The scaffold: Astro up, docs merged, branches cleaned'
date: 2026-09-28
summary: 'Week 1, day 1: minimal Astro scaffold, four docs PRs merged, and a lesson in branch hygiene.'
---

Day one of building this site in the open. The agent scaffolded a minimal Astro project — no UI framework, no Tailwind, static output — with everything brand-related in one `src/config.ts`, so a rebrand later is a single-file edit. I merged the docs PRs (README, spec, decision record, changelog + playbook) and reviewed the scaffold before it went in.

One thing I got wrong: branches piled up because nobody deleted them after merge. Five branches for five PRs made the repo look busier than it was. Fixed by deleting each branch on merge — small thing, but the repo is part of the portfolio, so hygiene matters.

What I checked before merging: `npm run build` passes, the placeholder page renders, and the layout gives every page a title and meta description.

Next: placeholder pages for all six sections, then deploy to Firebase.
