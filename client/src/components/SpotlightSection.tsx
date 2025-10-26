import { Code2, Cpu, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SpotlightSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="glass-strong p-12 lg:p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Built for the
                <span className="block bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Modern Creator
                </span>
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                We've reimagined what's possible with design and technology. 
                Our platform combines stunning aesthetics with powerful functionality, 
                giving you the tools to create extraordinary experiences.
              </p>
              <Button 
                size="lg" 
                className="glow"
                data-testid="button-spotlight-explore"
              >
                Explore Platform
              </Button>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Code2,
                  title: "Developer Friendly",
                  description: "Clean APIs and extensive documentation make integration seamless",
                },
                {
                  icon: Cpu,
                  title: "High Performance",
                  description: "Optimized for speed with advanced caching and edge computing",
                },
                {
                  icon: Palette,
                  title: "Beautiful Design",
                  description: "Carefully crafted UI components that look amazing out of the box",
                },
              ].map((item) => (
                <div 
                  key={item.title} 
                  className="flex gap-4 p-4 rounded-xl hover-elevate transition-all duration-300"
                  data-testid={`spotlight-item-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-600/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}