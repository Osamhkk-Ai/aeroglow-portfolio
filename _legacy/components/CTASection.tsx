import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass-strong p-12 lg:p-16 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/30 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-glow">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join thousands of creators and businesses already building the future with Nexus.
              Start your free trial today, no credit card required.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 glass border-primary/30"
                  required
                  data-testid="input-email"
                />
              </div>
              <Button 
                type="submit" 
                className="glow"
                data-testid="button-subscribe"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <p className="text-sm text-foreground/60">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}