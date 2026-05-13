/**
 * projects.ts
 *
 * All portfolio project card data.
 * - The first N entries in the array are treated as "featured" (larger cards with images).
 * - Remaining entries are rendered in the standard grid.
 *
 * Update this file to add, remove, or reorder projects.
 */

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  /** External link to GitHub repo or live demo. Use '#' if unavailable. */
  link?: string;
  /** Path to a project cover image (optional). Only shown on featured cards. */
  image?: string;
  /** Optional video (plays on hover, replaces image zoom effect). */
  video?: string;
  /** Playback speed multiplier for the hover video (default 1). */
  videoSpeed?: number;
  /** Vertical anchor for the video inside the card (default 'center'). */
  videoPosition?: 'top' | 'center' | 'bottom';
  /** Key highlights / achievements for the project (rendered as bullet list). */
  highlights?: string[];
}

/** Number of projects displayed as large featured cards (with image + full layout) */
export const FEATURED_PROJECT_COUNT = 4;

export const PROJECTS: Project[] = [
  {
    title: 'KSA Work Law RAG',
    description:
      'A RAG assistant that answers Saudi labor law questions with grounded legal context.',
    technologies: ['LLMs', 'RAG', 'Retrieval'],
    link: 'https://github.com/Osamhkk-Ai/KSA-Work-Law-RAG',
    image: '/project-ksa.webp',
    video: '/videos/project-ksa.mp4',
    videoSpeed: 2,
    highlights: [
      'Combines document retrieval with LLM-generated answers',
      'Covers KSA work regulations for employees and employers',
      'Citation-grounded responses to reduce hallucinations',
    ],
  },
  {
    title: 'V-TAC – Vision Tactical AI Coach',
    description:
      'A next-gen football AI for analysts and coaches — pre-match predictions, live tactical advice, and fatigue-aware substitutions.',
    technologies: ['AutoGluon', 'LangChain', 'LLMs', 'Real-time API'],
    link: '#',
    image: '/project-vtac.webp',
    video: '/videos/project-vtac.mp4',
    highlights: [
      '77% accurate pre-match outcome prediction on 70K+ matches',
      'Live in-game predictions refreshed every 5 minutes',
      'Player fatigue detection at ~97% accuracy',
      'LLM chatbot + 3D avatar for tactical recommendations',
    ],
  },
  {
    title: 'SABAQ: Proactive AI Agent for Customer Service',
    description:
      'A multi-agent AI prototype that anticipates customer issues for government services.',
    technologies: ['Multi-Agent AI', 'Agentic AI', 'REST APIs', 'GovTech'],
    link: 'https://sabeq-system.netlify.app/',
    image: '/project-sabaq.webp',
    video: '/videos/project-sabaq.mp4',
    highlights: [
      '3rd Place — AgentX Hackathon',
      'Multi-Agent AI System prototype',
      'Infrastructure designed to scale to 563+ services',
      'API-driven design for seamless government integration',
    ],
  },
  {
    title: 'SAQR',
    description:
      'AI system that flags passengers entering the metro business class without a business ticket and alerts staff at the next station.',
    technologies: ['Computer Vision', 'Face Embeddings', 'Similarity Search', 'Real-time Alerts'],
    link: '#',
    image: '/project-saqr.webp',
    video: '/videos/project-saqr.mp4',
    videoPosition: 'top',
    highlights: [
      'Detects passengers entering the business class without a business ticket',
      'Face-embedding search matches them across station cameras',
      'Real-time alerts to staff at the next station for interception',
      'Computer vision detection of food and drink violations on board',
    ],
  },
];
