import ProjectCard from '@/components/cards/ProjectCard';
import { ACHIEVEMENTS } from '@/data/achievements';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="text-primary text-glow">Achievements</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Recognition of impact and excellence in the field
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, index) => {
            const isLastOrphan =
              index === ACHIEVEMENTS.length - 1 && ACHIEVEMENTS.length % 3 === 1;
            return (
              <div key={index} className={isLastOrphan ? 'lg:col-start-2' : ''}>
                <ProjectCard
                  title={item.title}
                  description={item.description}
                  highlights={item.highlights}
                  image={item.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
