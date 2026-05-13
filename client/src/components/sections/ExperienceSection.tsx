import ProjectCard from '@/components/cards/ProjectCard';
import { EXPERIENCE } from '@/data/experience';

export default function ExperienceSection() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EXPERIENCE.map((entry) => (
            <ProjectCard
              key={`${entry.company}-${entry.title}`}
              title={`${entry.title} — ${entry.company}`}
              description={`${entry.department} · ${entry.period} · ${entry.location} — ${entry.description}`}
              highlights={entry.highlights}
              image={entry.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
