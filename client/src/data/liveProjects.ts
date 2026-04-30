/**
 * liveProjects.ts
 *
 * Production-oriented projects for the LiveProjectsSection.
 * These are real or upcoming launches — not demos, not abandoned prototypes.
 *
 * Status options:
 *   'live'            — fully deployed, users can try it right now
 *   'launching-soon'  — finished, launch imminent
 *   'in-progress'     — actively being built
 *   'coming-soon'     — planned and publicly communicated
 *   'under-development' — early-stage, not ready for public
 */

export type LiveProjectStatus =
  | 'live'
  | 'launching-soon'
  | 'in-progress'
  | 'coming-soon'
  | 'under-development';

export interface LiveProject {
  /** Project display name */
  title: string;
  /** One-sentence value proposition */
  tagline: string;
  /** 2–3 sentence description */
  description: string;
  /** Technology stack pills */
  technologies: string[];
  /** Current build status */
  status: LiveProjectStatus;
  /** URL to the live app (required when status === 'live' or 'launching-soon') */
  url?: string;
}

/** Human-readable labels for each status value */
export const STATUS_LABELS: Record<LiveProjectStatus, string> = {
  'live':               'Live',
  'launching-soon':     'Launching Soon',
  'in-progress':        'In Progress',
  'coming-soon':        'Coming Soon',
  'under-development':  'Under Development',
};

/** Tailwind color classes applied to each status badge */
export const STATUS_COLORS: Record<LiveProjectStatus, string> = {
  'live':               'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'launching-soon':     'bg-violet-500/20 text-violet-400 border-violet-500/30',
  'in-progress':        'bg-amber-500/20 text-amber-400 border-amber-500/30',
  'coming-soon':        'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'under-development':  'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

export const LIVE_PROJECTS: LiveProject[] = [
  {
    title: 'KSA Legal AI',
    tagline: 'AI-powered legal guidance for Saudi labor law.',
    description:
      'Ask any question about Saudi Arabian work regulations and receive accurate, cite-backed answers instantly. Built on a production RAG pipeline with real legal document ingestion — not a chatbot demo.',
    technologies: ['RAG', 'LLMs', 'FastAPI', 'Vector DB', 'Python'],
    status: 'in-progress',
  },
  {
    title: 'AI Content Studio',
    tagline: 'End-to-end content generation for social media.',
    description:
      'A production pipeline that combines LLMs and computer vision to generate platform-ready content — posts, thumbnails, captions — tailored to brand identity and audience data.',
    technologies: ['Generative AI', 'Computer Vision', 'LangChain', 'React'],
    status: 'coming-soon',
  },
  {
    title: 'FootballIQ',
    tagline: 'Real-time football analytics and AI prediction engine.',
    description:
      'Production sports analytics platform built on real match data. Delivers live insights, performance forecasts, and tactical recommendations using ML models trained on professional league datasets.',
    technologies: ['ML Models', 'Real-time Data', 'Python', 'Dashboard'],
    status: 'under-development',
  },
];
