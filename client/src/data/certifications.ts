/**
 * certifications.ts
 *
 * All certification entries displayed in the CertificationsSection.
 * Update this file to add, remove, or reorder certifications.
 *
 * Set `inProgress: true` for certifications currently being pursued.
 */

export interface Certification {
  title: string;
  organization: string;
  /** Path to the organization logo (relative to /public) */
  image: string;
  /** Set to true if the certification is still in progress */
  inProgress?: boolean;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'CompTIA Data+',
    organization: 'CompTIA',
    image: '/assets/comptia.webp',
  },
  {
    title: 'SDA × Le Wagon — Top 10 Performer',
    organization: 'Saudi Digital Academy',
    image: '/assets/SDA.webp',
  },
  {
    title: 'Junior Data Scientist',
    organization: 'INE',
    image: '/assets/ine.webp',
  },
  {
    title: 'Deep Learning Nanodegree',
    organization: 'Udacity',
    image: '/assets/UD.webp',
  },
  {
    title: 'Generative AI Nanodegree',
    organization: 'Udacity',
    image: '/assets/UD.webp',
    inProgress: true,
  },
  {
    title: 'Data Analysis Nanodegree',
    organization: 'Udacity',
    image: '/assets/UD.webp',
    inProgress: true,
  },
  {
    title: 'KAUST AI Enrichment Program',
    organization: 'KAUST',
    image: '/assets/kaust.webp',
  },
  {
    title: 'Power BI Skills Track',
    organization: 'DataCamp',
    image: '/assets/datacamp.webp',
  },
];
