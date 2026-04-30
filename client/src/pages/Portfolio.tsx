import StarField from '@/components/StarField';
import ThemeToggle from '@/components/ThemeToggle';
import MouseGlow from '@/components/MouseGlow';
import FloatingCharacter from '@/components/FloatingCharacter';
import HomeHero from '@/components/sections/HomeHero';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import LiveProjectsSection from '@/components/sections/LiveProjectsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import Nav from '@/components/layout/Nav';
import { OWNER } from '@info/portfolio_and_socials';

export default function Portfolio() {
  return (
    <div className="min-h-screen relative">
      {/* Background Effects */}
      <StarField />
      <FloatingCharacter />
      <MouseGlow />
      <ThemeToggle />
      <Nav />

      {/* Main Content */}
      <div className="relative z-10">
        <HomeHero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <LiveProjectsSection />
        <AchievementsSection />
        <CertificationsSection />
        <SkillsSection />
        <ContactSection />

        {/* Footer */}
        <footer className="py-8 px-6 text-center text-foreground/60 border-t border-border/30 relative z-20">
          <p>© {OWNER.copyrightYear} {OWNER.name}. Built with passion and AI.</p>
        </footer>
      </div>
    </div>
  );
}
