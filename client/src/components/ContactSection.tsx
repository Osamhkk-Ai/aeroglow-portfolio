import { Mail, Send, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Get in <span className="text-primary text-glow">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Have a project in mind? Let's work together to build something amazing.
          </p>
          
          {/* Social Links & CV Download */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://github.com/Osamhkk-Ai', '_blank', 'noopener,noreferrer')}
              className="glass border-primary/30 hover:border-primary"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://www.linkedin.com/in/osama-alghamdi-4aa902302', '_blank', 'noopener,noreferrer')}
              className="glass border-primary/30 hover:border-primary"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
			<Button
				variant="outline"
				size="lg"
				onClick={() =>
					window.open(
						'https://github.com/Osamhkk-Ai',
						'_blank',
						'noopener,noreferrer'
					)
				}
				className="glass border-primary/30 hover:border-primary"
			>
				<Github className="w-5 h-5 mr-2" />
				GitHub
			</Button>

			<Button
				variant="outline"
				size="lg"
				onClick={() =>
					window.open(
						'https://www.linkedin.com/in/osama-alghamdi-4aa902302',
						'_blank',
						'noopener,noreferrer'
					)
				}
				className="glass border-primary/30 hover:border-primary"
			>
				<Linkedin className="w-5 h-5 mr-2" />
				LinkedIn
			</Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass border-primary/30 hover:border-primary glow-sm"
            >
              <a
                href="/CV/OSAMA-ALGHAMDI-2026-FEB.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </Button>
          </div>
        </div>

        <div className="glass-strong p-8 lg:p-12 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="glass border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                data-testid="input-name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="pl-10 glass border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  data-testid="input-email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={6}
                className="glass border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                data-testid="input-message"
              />
            </div>

            <Button
              type="submit"
              className="w-full glow text-base py-6"
              data-testid="button-send-message"
            >
              Send Message
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}