import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function GlassNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 glow-sm" />
            <span className="text-xl font-bold tracking-tight text-glow">Nexus</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-lg"
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
            <Button 
              size="sm" 
              className="glow-sm"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover-elevate"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover-elevate"
                data-testid={`link-mobile-nav-${item.name.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <Button 
                size="sm" 
                className="w-full glow-sm"
                data-testid="button-mobile-get-started"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}