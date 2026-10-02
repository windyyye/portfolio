/**
 * Single source of truth for brand identity and links.
 * A rebrand should only need edits to this file.
 *
 * TODO(Windy): replace placeholder values (marked below) with real ones.
 */

export const site = {
  /** Working name — change here to rebrand the whole site. */
  name: 'Windy',

  /** Short pitch shown in the masthead and used as the home page title. */
  tagline:
    'A career diary — building, learning, and changing direction in public, mostly for the fun of it.',

  /** Used for meta descriptions on every page. */
  description:
    'Windy\'s career diary: an illustrated record of what she builds, learns, and decides — kept for fun, not for hire.',

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
