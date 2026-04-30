import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div 
      className="glass-strong p-8 rounded-2xl hover-elevate transition-all duration-300 group"
      data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 flex items-center justify-center mb-6 glow-sm group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 tracking-tight">{title}</h3>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </div>
  );
}