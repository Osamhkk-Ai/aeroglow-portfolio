/**
 * achievements.ts
 *
 * All achievement entries displayed in the AchievementsSection.
 * Update this file to add, remove, or reorder achievements.
 */

export interface Achievement {
  title: string;
  description: string;
  /** Path to an image illustrating the achievement (relative to /public) */
  image: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'AI Workshop Leader – Corporate Communication Transformation',
    description:
      'Led and delivered a specialized AI workshop for the Corporate Communication team within a government authority, focusing on modernizing content creation workflows. Introduced practical methods for building effective prompts, generating structured content, and transforming ideas into professional campaign materials (e.g., posters and awareness content). Enabled non-technical participants to independently create high-quality outputs using AI tools, improving efficiency and creativity across the team.',
    image: '/assets/AiWorkShop.jpg',
  },
  {
    title: 'Selected to Present V-TAC at a National MCIT Event',
    description:
      'Our V-TAC project was chosen by the Saudi Digital Academy and invited by the Ministry of Communications and Information Technology to represent the academy during the national WTISD event. Selected from many projects, V-TAC was showcased in front of industry leaders and decision-makers — a recognition of its impact and the quality of our work.',
    image: '/achievement-vtac-new.png',
  },
  {
    title: '3rd Place – AgentX National Hackathon',
    description:
      'Achieved 3rd place in the AgentX Hackathon among 1,000+ participants and 243 teams across Saudi Arabia. Our team "SABEQ" built a fully functional AI Agent designed to solve real-world problems during an intensive one-week challenge.',
    image: '/achievement-agentx-new.png',
  },
  {
    title: 'Top 10 Performer – SDA × Le Wagon Data & AI Bootcamp',
    description:
      'Recognized among the Top 10 performers of the Saudi Digital Academy × Le Wagon Data & AI Bootcamp.',
    image: '/achievement-top10-new.png',
  },
];
