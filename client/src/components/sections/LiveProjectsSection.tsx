import LiveProjectCard from '@/components/cards/LiveProjectCard';
import { LIVE_PROJECTS } from '@/data/liveProjects';

export default function LiveProjectsSection() {
  return (
    <section id="live-projects" className="py-24 px-6 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Production AI —{' '}
            <span className="text-primary text-glow">
              Built for Real Use
            </span>
          </h2>

          <p className="text-base text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Deployed systems and shipping-ready products — not demos or abandoned prototypes.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {LIVE_PROJECTS.map((project) => (
            <LiveProjectCard
              key={project.title}
              title={project.title}
              tagline={project.tagline}
              description={project.description}
              status={project.status}
              technologies={project.technologies}
              link={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
