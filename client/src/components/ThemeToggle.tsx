import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const darkMode = document.body.classList.contains('dark');
    setIsDark(darkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full glass flex items-center justify-center hover-elevate transition-all duration-300 glow-sm"
      aria-label="Toggle theme"
      data-testid="button-theme-toggle"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-primary transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-primary transition-transform duration-300" />
      )}
    </button>
  );
}