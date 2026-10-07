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
  url: 'https://windye.web.app',

  /** Locale / time zone shown on the contact page. */
  timezone: 'Asia/Kuala_Lumpur (UTC+8)',
} as const;

export const links = {
  email: 'mailto:windye0407@gmail.com',

  github: 'https://github.com/windyyye',

  linkedin: 'https://www.linkedin.com/in/windy-e-8088712b4/',

  /** Upwork was retired with the v1 objective — see docs/spec.md. */
} as const;
