import { ArrowUpRight } from 'lucide-react';
import {
  LiveProjectStatus,
  STATUS_LABELS,
} from '@/data/liveProjects';

interface LiveProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  status: LiveProjectStatus;
  technologies: string[];
  link?: string;
}

const ACTIVE_STATUSES: LiveProjectStatus[] = ['live', 'launching-soon'];

const DOT_COLOR: Record<LiveProjectStatus, string> = {
  'live':              'bg-emerald-400',
  'launching-soon':    'bg-violet-400',
  'in-progress':       'bg-amber-400',
  'coming-soon':       'bg-cyan-400',
  'under-development': 'bg-blue-400',
};

const TEXT_COLOR: Record<LiveProjectStatus, string> = {
  'live':              'text-emerald-400',
  'launching-soon':    'text-violet-400',
  'in-progress':       'text-amber-400',
  'coming-soon':       'text-cyan-400',
  'under-development': 'text-blue-400',
};

export default function LiveProjectCard({
  title,
  tagline,
  description,
  status,
  technologies,
  link,
}: LiveProjectCardProps) {
  const isClickable = !!link && ACTIVE_STATUSES.includes(status);

  const body = (
    <div className="glass-strong rounded-2xl p-6 h-full flex flex-col transition-all duration-300 border border-transparent hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 group">
      {/* Status row */}
      <div className="flex items-center gap-2 mb-5 text-[11px]">
        <span className="relative flex h-2 w-2">
          {ACTIVE_STATUSES.includes(status) && (
            <span
              className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${DOT_COLOR[status]}`}
            />
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${DOT_COLOR[status]}`} />
        </span>
        <span className={`font-mono uppercase tracking-[0.15em] ${TEXT_COLOR[status]}`}>
          {STATUS_LABELS[status]}
        </span>
      </div>

      {/* Title + arrow */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-xl font-bold text-glow group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>
        {isClickable && (
          <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-0.5" />
        )}
      </div>

      {/* Tagline */}
      <p className="text-xs text-primary/70 mb-3 leading-snug">{tagline}</p>

      {/* Description */}
      <p className="text-xs text-foreground/60 mb-4 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Tech pills */}
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-medium glass rounded-full text-foreground/70"
              data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (isClickable) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        data-testid={`link-live-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {body}
      </a>
    );
  }

  return body;
}
