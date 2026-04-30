import { ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
  image?: string;
  hideImage?: boolean;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  image,
  hideImage = false,
  featured = false
}: ProjectCardProps) {
  if (featured && image) {
    // Featured project card with premium hover effect
    return (
      <div className="relative rounded-2xl overflow-hidden group h-full flex flex-col glass-strong hover-elevate transition-all duration-300">
        {/* Image Container */}
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay that appears on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-500" />
        </div>

        {/* Content section - Always visible */}
        <div className="p-6 flex flex-col flex-grow bg-background/95 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-3 text-glow group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-foreground/70 mb-4 leading-relaxed line-clamp-3">{description}</p>

          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
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

          {link && (
            <Button
              onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
              className="w-full glow-sm group-hover:glow mt-auto"
              data-testid={`button-view-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              View Project
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    );
  }

  // Text-only or standard project card
  return (
    <div className="glass-strong rounded-2xl hover-elevate transition-all duration-300 group h-full flex flex-col overflow-hidden">
      {!hideImage && (
        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          ) : (
            <ImageIcon className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
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

        {link && (
          <Button
            onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
            className="w-full glow-sm group-hover:glow"
            data-testid={`button-view-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            View Project
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
