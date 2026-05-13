/**
 * achievements.ts
 *
 * All achievement entries displayed in the AchievementsSection.
 * Update this file to add, remove, or reorder achievements.
 */

export interface Achievement {
  title: string;
  description: string;
  /** Bullet points summarizing the key impact. */
  highlights?: string[];
  /** Path to an image illustrating the achievement (relative to /public) */
  image: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'AI Workshop – Corporate Communication',
    description:
      'Trained a government Corporate Communication team on integrating AI into their daily content and creative workflows.',
    highlights: [
      'Hands-on training in prompt engineering and structured content generation',
      'Enabled non-technical staff to produce posters and campaign materials with AI',
      'Boosted team efficiency and creativity in content production',
    ],
    image: '/assets/AiWorkShop.webp',
  },
  {
    title: 'V-TAC Featured at National MCIT Event',
    description:
      'V-TAC was selected by the Saudi Digital Academy and invited by MCIT to represent the academy at the national WTISD event.',
    highlights: [
      'Chosen from many projects across the academy',
      'Showcased to industry leaders and decision-makers',
      'Recognition of project impact and execution quality',
    ],
    image: '/achievement-vtac-new.webp',
  },
  {
    title: '3rd Place – AgentX National Hackathon',
    description:
      'Won 3rd place among 1,000+ participants and 243 teams across Saudi Arabia.',
    highlights: [
      'Team "SABEQ" built a fully functional AI agent',
      'Solved real-world problems in a one-week intensive challenge',
      'Competed against 243 teams nationwide',
    ],
    image: '/achievement-agentx-new.webp',
  },
  {
    title: 'Top 10 – SDA × Le Wagon Data & AI Bootcamp',
    description:
      'Recognized among the Top 10 performers of the Saudi Digital Academy × Le Wagon Data & AI Bootcamp.',
    image: '/achievement-top10-new.webp',
  },
];
