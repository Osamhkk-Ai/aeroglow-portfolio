/**
 * skills.ts
 *
 * Technical skill categories and their items.
 * Update this file to add, remove, or reorganize skills.
 * Rendering order follows the array order.
 */

export interface SkillCategory {
  /** Section heading displayed in the UI */
  label: string;
  /** Individual skill names */
  items: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'AI & Machine Learning',
    items: [
      'Large Language Models',
      'Generative AI',
      'Deep Learning',
      'Neural Networks',
      'GANs',
      'Transformers',
      'RAG Systems',
    ],
  },
  {
    label: 'Frameworks & Libraries',
    items: [
      'PyTorch',
      'TensorFlow',
      'Hugging Face',
      'LangChain',
      'Scikit-learn',
      'OpenCV',
      'Pandas',
      'NumPy',
    ],
  },
  {
    label: 'Specializations',
    items: [
      'NLP',
      'Computer Vision',
      'Sentiment Analysis',
      'Object Detection',
      'Image Classification',
      'Text Translation',
    ],
  },
  {
    label: 'Programming & Tools',
    items: [
      'Python',
      'Jupyter',
      'Git',
      'Docker',
      'SQL',
      'HTML/CSS',
      'Data Analysis',
      'Model Deployment',
    ],
  },
];
