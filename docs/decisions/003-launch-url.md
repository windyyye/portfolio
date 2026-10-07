# 003. Launch URL: windye.web.app; omaopoao.com released

- **Status:** Accepted
- **Date:** 2026-10-07

## Context

ADR 001 named `omaopoao.com` as the intended custom domain. On launch week, the domain was
repurposed for another project, and the diary needed its launch URL immediately — the
launch-day entry (No. 002) was dated and waiting.

## Decision

Vol. I launches on **`windye.web.app`** (Firebase Hosting's existing `windye` project). The
custom-domain clause in ADR 001 is superseded; `omaopoao.com` is released for another
project. The site's canonical URL is updated to match. No other part of ADR 001 changes —
Astro, static output, and Firebase Hosting all stand.

If a custom domain is ever wanted again, a future ADR records it.

## Alternatives considered

- **Hold the launch until a custom domain is connected:** rejected. The launch date serves
  the book; a URL is re-findable, a missed launch week is simply missed.
- **Buy a different domain:** rejected. The $0 constraint stands, and `windye.web.app` is
  already honest, short, and free.

## Consequences

The launch happens on Firebase's subdomain — perfectly serviceable, slightly less
brandable. All canonical links and documentation on `main` now reference `windye.web.app`.
Nothing else changes: no infrastructure, no cost, no delay.
