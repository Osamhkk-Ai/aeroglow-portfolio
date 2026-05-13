import { Mail, Github, Linkedin, Download, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { OWNER } from '@info/portfolio_and_socials';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(OWNER.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard not available — ignore */
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-2xl mx-auto relative z-20 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Get in <span className="text-primary text-glow">Touch</span>
        </h2>
        <p className="text-base text-foreground/70 mb-10">
          Have a project in mind? Drop me an email.
        </p>

        {/* Email card */}
        <div className="glass-strong rounded-2xl p-6 mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <a
              href={`mailto:${OWNER.email}`}
              className="text-base sm:text-lg font-medium text-foreground hover:text-primary transition-colors truncate"
              data-testid="link-email"
            >
              {OWNER.email}
            </a>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="glass border-primary/30 hover:border-primary flex-shrink-0"
            data-testid="button-copy-email"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        </div>

        {/* Primary CTA */}
        <Button
          size="lg"
          onClick={() => (window.location.href = `mailto:${OWNER.email}`)}
          className="glow text-base px-8 py-6 mb-8"
          data-testid="button-send-email"
        >
          <Mail className="w-5 h-5 mr-2" />
          Send Me an Email
        </Button>

        {/* Social Links & CV */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(OWNER.github, '_blank', 'noopener,noreferrer')}
            className="glass border-primary/30 hover:border-primary"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(OWNER.linkedin, '_blank', 'noopener,noreferrer')}
            className="glass border-primary/30 hover:border-primary"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(OWNER.cvDownloadUrl, '_blank')}
            className="glass border-primary/30 hover:border-primary glow-sm"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}
