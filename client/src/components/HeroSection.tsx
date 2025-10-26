import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 glow-sm">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Introducing the Future</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-glow">
          Experience the Next
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Generation of Design
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto mb-12 leading-relaxed">
          Immerse yourself in a world of translucent interfaces, glowing accents, and cutting-edge aesthetics. 
          Where form meets function in perfect harmony.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="glow text-base px-8"
            data-testid="button-hero-start"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base px-8 glass"
            data-testid="button-hero-learn"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "50k+", label: "Users" },
            { value: "200+", label: "Countries" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div 
              key={stat.label} 
              className="glass-strong p-6 rounded-2xl hover-elevate transition-all duration-300"
              data-testid={`stat-${stat.label.toLowerCase()}`}
            >
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}