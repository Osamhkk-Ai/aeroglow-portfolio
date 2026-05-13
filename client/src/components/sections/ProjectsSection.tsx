import ProjectCard from '@/components/cards/ProjectCard';
import { PROJECTS, FEATURED_PROJECT_COUNT } from '@/data/projects';

export default function ProjectsSection() {
  const featuredProjects = PROJECTS.slice(0, FEATURED_PROJECT_COUNT);
  const otherProjects = PROJECTS.slice(FEATURED_PROJECT_COUNT);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Innovative AI solutions that make a real-world impact
          </p>
        </div>

        {/* Featured Projects (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 justify-center max-w-5xl mx-auto">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              image={project.image}
              video={project.video}
              videoSpeed={project.videoSpeed}
              videoPosition={project.videoPosition}
              highlights={project.highlights}
              featured={true}
            />
          ))}
        </div>

        {/* Other Projects (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              hideImage={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
