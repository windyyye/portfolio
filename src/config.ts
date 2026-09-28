/**
 * Single source of truth for brand identity and links.
 * A rebrand should only need edits to this file.
 *
 * TODO(Windy): replace placeholder values (marked below) with real ones.
 */

export const site = {
  /** Working name — change here to rebrand the whole site. */
  name: 'Windy',

  /** Short pitch shown in the hero and used as the home page title. */
  tagline:
    'Frontend and QA, built with AI agents. I design the plan, direct the agents, and check every result.',

  /** Used for meta descriptions on every page. */
  description:
    'Freelance frontend development, QA testing, and agentic coding. I spec the work, direct AI coding agents, and review every result.',

  /** Canonical URL (used by Astro for sitemap/robots later). */
  url: 'https://omaopoao.com',

  /** Locale / time zone shown on the contact page. */
  timezone: 'Asia/Kuala_Lumpur (UTC+8)',
} as const;

export const links = {
  /** TODO(Windy): real contact email. */
  email: 'mailto:you@example.com',

  github: 'https://github.com/windyyye',

  /** TODO(Windy): real LinkedIn URL. */
  linkedin: 'https://www.linkedin.com/in/placeholder/',

  /** TODO(Windy): add Upwork once the profile is live. */
  // upwork: 'https://www.upwork.com/...',
} as const;
