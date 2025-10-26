import StarField from '@/components/StarField';
import ThemeToggle from '@/components/ThemeToggle';
import MouseGlow from '@/components/MouseGlow';
import HomeHero from '@/components/HomeHero';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Portfolio() {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <MouseGlow />
      <ThemeToggle />
      
      <div className="relative z-10">
        <HomeHero />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        
        <footer className="py-8 px-6 text-center text-foreground/60 border-t border-border/30 relative z-20">
          <p>© 2025 Osama Alghamdi. Built with passion and AI.</p>
        </footer>
      </div>
    </div>
  );
}