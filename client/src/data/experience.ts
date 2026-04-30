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
  /** Path to a company logo or representative image (relative to /public) */
  image: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    title: 'Data Engineering Intern',
    company: 'Saudi National Bank (SNB)',
    department: 'Finance Department — Enterprise Data Management Division',
    period: 'Jun 2024 – Jul 2024',
    location: 'Jeddah',
    description:
      'Worked within the Finance Department as part of the Enterprise Data Management division, supporting financial data processing and reporting. Analyzed over 1M+ financial records using SQL and Python, and developed several reports and dashboards that improved data visibility, reporting accuracy, and decision support for finance leaders.',
    image: '/experience-snb.png',
  },
];
