import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <div className="glass-strong p-8 rounded-2xl hover-elevate transition-all duration-300 group h-full flex flex-col">
      <h3 className="text-2xl font-bold mb-3 text-glow">{title}</h3>
      <p className="text-foreground/70 mb-6 leading-relaxed flex-grow">{description}</p>
      
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium glass rounded-full"
              data-testid={`badge-tech-${tech.toLowerCase()}`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      
      <Button
        onClick={() => link && console.log('Navigating to:', link)}
        className="w-full glow-sm group-hover:glow"
        data-testid={`button-view-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        View Project
        <ExternalLink className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}