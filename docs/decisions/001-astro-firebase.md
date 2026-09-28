# 001. Astro and Firebase Hosting

- **Status:** Accepted
- **Date:** 2026-09-28

## Context

The portfolio needs to be quick to deploy, easy to inspect, and simple for an early-career freelancer and AI coding agents to maintain. The build log and future case studies are a good fit for Markdown. The site also needs a custom domain without introducing a backend in v1.

## Decision

Use Astro for a static site and deploy its generated `dist/` output to Firebase Hosting's existing `windye` project, with `omaopoao.com` as the intended custom domain.

Astro fits because Markdown content works naturally for the build log and case studies, it outputs plain static HTML/CSS that Windy can read, and it keeps the project simple for agents. Firebase Hosting fits because Windy already owns the `windye` project, its free tier is appropriate for this site, and it supports custom domains.

## Alternatives considered

- **Plain HTML:** Very readable, but content and page structure would become repetitive as the build log and case studies grow.
- **Next.js:** Capable, but more framework and runtime complexity than a static portfolio needs.
- **WordPress:** Provides a CMS, but adds hosting, maintenance, and administration that are out of scope for v1.

## Consequences

The site stays small, cacheable, and deployable as static files. Markdown can be reviewed in Git and changed through normal issues and pull requests. Windy and the agents must preserve the content structure and run a production build before deployment. A CMS, server-side features, or more dynamic contact handling can be reconsidered later if the site needs them.
