import { useEffect, useRef, useState } from 'react';
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
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isMobileActive, setIsMobileActive] = useState(false);

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

  // On mobile only: auto-activate when the card scrolls into view.
  useEffect(() => {
    if (!featured || !video) return;
    const mq = window.matchMedia('(max-width: 767px)');
    if (!mq.matches) return;

    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const active = entry.isIntersecting && entry.intersectionRatio >= 0.6;
        setIsMobileActive(active);
        if (!videoRef.current) return;
        if (active) {
          videoRef.current.playbackRate = videoSpeed;
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: [0, 0.6, 1] }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [featured, video, videoSpeed]);

  if (featured && image) {
    // Featured project card with premium hover effect
    return (
      <div
        ref={cardRef}
        className={`relative rounded-2xl overflow-hidden group h-full flex flex-col glass-strong transition-all duration-500 ease-out origin-center md:hover:scale-[1.5] md:hover:z-50 md:hover:shadow-2xl md:hover:shadow-primary/30 ${
          isMobileActive ? 'scale-[1.1] z-30 shadow-xl shadow-primary/20' : ''
        }`}
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
              video ? 'md:group-hover:opacity-0' : ''
            } ${video && isMobileActive ? 'opacity-0' : ''}`}
          />

          {video && (
            <video
              ref={videoRef}
              src={video}
              muted
              loop
              playsInline
              preload="metadata"
              className={`absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 md:group-hover:opacity-100 ${
                isMobileActive ? 'opacity-100' : ''
              } ${
                videoPosition === 'top'
                  ? 'object-top'
                  : videoPosition === 'bottom'
                  ? 'object-bottom'
                  : 'object-center'
              }`}
            />
          )}

          {/* Overlay that appears on hover/active */}
          <div
            className={`absolute inset-0 transition-all duration-500 md:group-hover:bg-black/20 ${
              isMobileActive ? 'bg-black/20' : 'bg-black/0'
            }`}
          />

          {/* Live indicator — mobile only, when card is in view */}
          {video && isMobileActive && (
            <div className="absolute top-3 right-3 z-10 md:hidden">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full opacity-75 bg-primary animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
            </div>
          )}
        </div>

        {/* Content section - Always visible */}
        <div className="p-5 flex flex-col flex-grow bg-background/95 backdrop-blur-sm">
          <h3
            className={`text-xl font-bold mb-2 text-glow transition-colors md:group-hover:text-primary ${
              isMobileActive ? 'text-primary' : ''
            }`}
          >
            {title}
          </h3>
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
