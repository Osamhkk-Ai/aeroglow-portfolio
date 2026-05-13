/**
 * portfolio.ts
 *
 * Single source of truth for all owner-specific constants:
 * personal info, social links, CV URL, and asset paths.
 *
 * Update this file when any of these values change.
 * No other file should hardcode these values directly.
 */

export const OWNER = {
  /** Display name — used in nav logo, hero heading, HTML title, footer */
  name: 'Osama Alghamdi',

  /** Professional title shown in hero and meta description */
  title: 'AI Engineer',

  /** Sub-title shown in the hero section */
  subtitle: 'specializing in Generative Models & Large Language Models',

  /** Short positioning sentence for hero body */
  tagline:
    'Exploring how intelligence can be created, aligned, and deployed to make life smarter. I build AI solutions that bridge cutting-edge technology with real-world impact—from preserving cultural heritage to enhancing accessibility.',

  /** Social & contact */
  email: 'osamh.wk@gmail.com',
  github: 'https://github.com/Osamhkk-Ai',
  linkedin: 'https://www.linkedin.com/in/osama-alghamdi-4aa902302',
  twitter: 'https://x.com',

  /**
   * CV download endpoint.
   * In local dev this hits express server/routes.ts → /api/download-cv
   * On Vercel this hits api/download-cv.ts (serverless function)
   */
  cvDownloadUrl: '/api/download-cv',

  /** Profile photo — used in AboutSection */
  profileImage: '/assets/image_v2.webp',

  /** Floating rocket image in background */
  rocketImage: '/rocket-astronaut.webp',

  /** Copyright year — ideally rendered dynamically but stored here as baseline */
  copyrightYear: new Date().getFullYear(),
} as const;
