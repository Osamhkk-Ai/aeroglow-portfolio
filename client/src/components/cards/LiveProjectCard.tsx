import { ExternalLink, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  LiveProjectStatus,
  STATUS_LABELS,
  STATUS_COLORS,
} from '@/data/liveProjects';

interface LiveProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  status: LiveProjectStatus;
  technologies: string[];
  /** External URL — if provided and status is 'live' or 'launching-soon', the CTA is active */
  link?: string;
}

/** Statuses that indicate the project is active / nearly ready */
const ACTIVE_STATUSES: LiveProjectStatus[] = ['live', 'launching-soon'];

/** Small animated dot shown on active statuses to signal ongoing work */
function PulseDot({ status }: { status: LiveProjectStatus }) {
  const dotColor: Record<LiveProjectStatus, string> = {
    'live':              'bg-emerald-400',
    'launching-soon':    'bg-violet-400',
    'in-progress':       'bg-amber-400',
    'coming-soon':       'bg-cyan-400',
    'under-development': 'bg-blue-400',
  };
  return (
    <span className="relative flex h-2 w-2 mr-1.5">
      <span
        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor[status]}`}
      />
      <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor[status]}`} />
    </span>
  );
}

export default function LiveProjectCard({
  title,
  tagline,
  description,
  status,
  technologies,
  link,
}: LiveProjectCardProps) {
  const isClickable = !!link && ACTIVE_STATUSES.includes(status);

  return (
    <div className="glass-strong rounded-2xl hover-elevate transition-all duration-300 group h-full flex flex-col overflow-hidden relative">

      {/* Status Badge — top-right corner */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${STATUS_COLORS[status]}`}
        >
          <PulseDot status={status} />
          {STATUS_LABELS[status]}
        </span>
      </div>

      {/* Top accent bar — matches status colour */}
      <div
        className={`h-1 w-full opacity-60 ${
          status === 'live'              ? 'bg-emerald-400' :
          status === 'launching-soon'    ? 'bg-violet-400'  :
          status === 'in-progress'       ? 'bg-amber-400'   :
          status === 'coming-soon'       ? 'bg-cyan-400'    :
                                           'bg-blue-400'
        }`}
      />

      {/* Card Body */}
      <div className="p-8 flex flex-col flex-grow">

        {/* Icon + Title */}
        <div className="flex items-start gap-3 mb-3 pr-24">
          <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0 glow-sm group-hover:scale-110 transition-transform duration-300">
            <Rocket className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-glow group-hover:text-primary transition-colors leading-tight">
            {title}
          </h3>
        </div>

        {/* Tagline */}
        <p className="text-primary/80 font-medium text-sm mb-3 pl-[3.25rem]">
          {tagline}
        </p>

        {/* Description */}
        <p className="text-foreground/70 mb-6 leading-relaxed flex-grow text-sm">
          {description}
        </p>

        {/* Tech Stack Pills */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium glass rounded-full"
                data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* CTA Button */}
        {isClickable ? (
          <Button
            onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
            className="w-full glow-sm group-hover:glow"
            data-testid={`button-live-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            Try It Now
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            disabled
            variant="outline"
            className="w-full glass border-primary/20 opacity-60 cursor-not-allowed"
            data-testid={`button-live-${title.toLowerCase().replace(/\s+/g, '-')}-disabled`}
          >
            {STATUS_LABELS[status]}
          </Button>
        )}
      </div>
    </div>
  );
}
