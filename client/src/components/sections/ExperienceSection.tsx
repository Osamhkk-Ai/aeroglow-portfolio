import ProjectCard from '@/components/cards/ProjectCard';
import { EXPERIENCE } from '@/data/experience';

export default function ExperienceSection() {
  // Currently renders the first experience entry.
  // Extend to map over EXPERIENCE array when multiple roles are added.
  const entry = EXPERIENCE[0];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="text-primary text-glow">Experience</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Professional journey and contributions
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ProjectCard
            title={`${entry.title} — ${entry.company}`}
            description={`${entry.department}\n${entry.period} — ${entry.location}\n\n${entry.description}`}
            image={entry.image}
          // No link provided
          />
        </div>
      </div>
    </section>
  );
}
