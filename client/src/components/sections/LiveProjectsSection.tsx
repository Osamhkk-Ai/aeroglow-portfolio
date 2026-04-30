import { Zap } from 'lucide-react';
import LiveProjectCard from '@/components/cards/LiveProjectCard';
import { LIVE_PROJECTS } from '@/data/liveProjects';

export default function LiveProjectsSection() {
  return (
    <section id="live-projects" className="py-24 px-6 relative">
      {/* Subtle background accent — same treatment as other sections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">

        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Label pill — same pattern as nav badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 glow-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Production Builds</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Beyond Demos —{' '}
            <span className="text-primary text-glow">
              Real Projects You Can Actually Use
            </span>
          </h2>

          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            These are not local experiments or unfinished prototypes — they are
            production-oriented systems built to be used.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Bottom note */}
        <p className="text-center text-sm text-foreground/40 mt-10">
          All listed projects are actively being built. Status badges update as work progresses.
        </p>
      </div>
    </section>
  );
}
