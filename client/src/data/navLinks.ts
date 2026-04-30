/**
 * navLinks.ts
 *
 * Canonical navigation link definitions.
 * The nav component and any scroll helper should import from here.
 * Section `id` attributes in each section component must match `sectionId`.
 */

export interface NavLink {
  /** Display label in the navigation bar */
  label: string;
  /** The anchor href, e.g. #about */
  href: string;
  /** The DOM element id this link scrolls to (without the #) */
  sectionId: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home',         href: '#hero',         sectionId: 'hero'         },
  { label: 'About',        href: '#about',        sectionId: 'about'        },
  { label: 'Experience',   href: '#experience',   sectionId: 'experience'   },
  { label: 'Projects',     href: '#projects',     sectionId: 'projects'     },
  { label: 'Skills',       href: '#skills',       sectionId: 'skills'       },
  { label: 'Achievements', href: '#achievements', sectionId: 'achievements' },
  { label: 'Certificates', href: '#certificates', sectionId: 'certificates' },
  { label: 'Contact',      href: '#contact',      sectionId: 'contact'      },
];
