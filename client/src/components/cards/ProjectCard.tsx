import { useRef } from 'react';
import { ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
  image?: string;
  video?: string;
  videoSpeed?: number;
  videoPosition?: 'top' | 'center' | 'bottom';
  highlights?: string[];
  hideImage?: boolean;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  image,
  video,
  videoSpeed = 1,
  videoPosition = 'center',
  highlights,
  hideImage = false,
  featured = false
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = videoSpeed;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  if (featured && image) {
    // Featured project card with premium hover effect
    return (
      <div
        className="relative rounded-2xl overflow-hidden group h-full flex flex-col glass-strong transition-all duration-500 ease-out hover:scale-[1.5] hover:z-50 hover:shadow-2xl hover:shadow-primary/30 origin-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image / Video Container */}
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              video ? 'group-hover:opacity-0' : ''
            }`}
          />

          {video && (
            <video
              ref={videoRef}
              src={video}
              muted
              loop
              playsInline
              preload="metadata"
              className={`absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                videoPosition === 'top'
                  ? 'object-top'
                  : videoPosition === 'bottom'
                  ? 'object-bottom'
                  : 'object-center'
              }`}
            />
          )}

          {/* Overlay that appears on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
        </div>

        {/* Content section - Always visible */}
        <div className="p-5 flex flex-col flex-grow bg-background/95 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-2 text-glow group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-foreground/70 mb-3 leading-relaxed line-clamp-3">{description}</p>

          {highlights && highlights.length > 0 && (
            <ul className="mb-3 space-y-1">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="text-xs text-foreground/80 flex items-start gap-2 leading-relaxed"
                >
                  <span className="text-primary mt-0.5 leading-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-[10px] font-medium glass rounded-full"
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
        <div className="w-full h-72 bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          ) : (
            <ImageIcon className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 text-glow">{title}</h3>
        <p className="text-xs text-foreground/70 mb-3 leading-relaxed">{description}</p>

        {highlights && highlights.length > 0 && (
          <ul className="mb-3 space-y-1">
            {highlights.map((item) => (
              <li
                key={item}
                className="text-xs text-foreground/80 flex items-start gap-2 leading-relaxed"
              >
                <span className="text-primary mt-0.5 leading-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-[10px] font-medium glass rounded-full"
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
