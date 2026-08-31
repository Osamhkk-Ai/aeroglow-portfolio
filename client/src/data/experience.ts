/**
 * experience.ts
 *
 * Professional experience entries.
 * Update this file to add or update roles.
 */

export interface ExperienceEntry {
  title: string;
  company: string;
  department: string;
  period: string;
  location: string;
  description: string;
  /** Bullet points summarizing key contributions and impact. */
  highlights?: string[];
  /** Path to a company logo or representative image (relative to /public) */
  image: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    title: 'AI Specialist',
    company: 'Emdad Solutions',
    department: 'Confidential Government Project',
    period: 'Aug 2026 – Present',
    location: 'Riyadh',
    description:
      'Contributing to confidential government AI initiatives in collaboration with Emdad Solutions.',
    image: '/experience-emdad.png',
  },
  {
    title: 'AI Specialist',
    company: 'Saudi Food and Drug Authority',
    department: 'AI Division',
    period: '2025 – Aug 2026',
    location: 'Riyadh',
    description:
      'Designing and deploying AI solutions that automate field operations and strengthen regulatory compliance across pharmaceuticals and food products.',
    highlights: [
      'Automated manual field workflows using AI to accelerate inspection and reporting',
      'Built high-accuracy detection systems for policy violations in pharmaceuticals and regulated goods',
      'Translated regulatory requirements into scalable, production-ready AI pipelines',
    ],
    image: '/experience-sfda.webp',
  },
  {
    title: 'Data Science Intern',
    company: 'Saudi National Bank (SNB)',
    department: 'Finance Department — Enterprise Data Management Division',
    period: 'Jun 2024 – Jul 2024',
    location: 'Jeddah',
    description:
      'Supported financial data processing and reporting within the Enterprise Data Management division.',
    highlights: [
      'Analyzed 1M+ financial records using SQL and Python',
      'Built reports and dashboards that improved data visibility',
      'Enhanced reporting accuracy and decision support for finance leaders',
    ],
    image: '/experience-snb.webp',
  },
];
