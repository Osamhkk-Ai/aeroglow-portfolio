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
}

/** Number of projects displayed as large featured cards (with image + full layout) */
export const FEATURED_PROJECT_COUNT = 2;

export const PROJECTS: Project[] = [
  {
    title: 'KSA Work Law RAG',
    description:
      'An intelligent Retrieval-Augmented Generation system for Saudi Arabian labor law compliance. Provides accurate legal information and guidance by combining document retrieval with large language models to help users understand their rights and obligations under KSA work regulations.',
    technologies: ['LLMs', 'RAG', 'Retrieval'],
    link: 'https://github.com/Osamhkk-Ai/KSA-Work-Law-RAG',
    image: '/project-ksa.png',
  },
  {
    title: 'VTAC – Football AI Assistant',
    description:
      'An Agentic AI system designed for football analytics. Combines machine learning models with real-world use cases to provide actionable insights and assistance for football analysis.',
    technologies: ['Agentic AI', 'ML Models', 'Real Use-case'],
    link: '#',
    image: '/project-vtac.png',
  },
  {
    title: 'Landmark Classification',
    description:
      'CNN-based image classification system for automatic landmark recognition using transfer learning and state-of-the-art computer vision techniques.',
    technologies: ['Computer Vision', 'Transfer Learning'],
    link: 'https://github.com/Osamhkk-Ai/Landmark-Classification-Tagging-for-Social-Media',
  },
  {
    title: 'Bike Sharing Demand Prediction',
    description:
      'Machine learning regression model to predict bike-sharing demand based on weather conditions, time, and seasonal patterns. Demonstrates data analysis and business modeling skills.',
    technologies: ['Regression', 'Data Analysis', 'Business Modeling'],
    link: 'https://github.com/Osamhkk-Ai/Bike-Sharing-Demand',
  },
  {
    title: 'Text Translation & Sentiment Analysis',
    description:
      'NLP project leveraging Transformer models for multilingual text translation and sentiment analysis.',
    technologies: ['Transformers', 'Hugging Face', 'NLP', 'Python'],
    link: 'https://github.com/Osamhkk-Ai/Osamhkk-Ai-Text-Translation-and-Sentiment-Analysis-using-Transformers',
  },
];
