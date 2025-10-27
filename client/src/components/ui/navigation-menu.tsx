import * as React from "react";
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function GlassNav() {
  const [isDark, setIsDark] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [active, setActive] = React.useState("Home");

  React.useEffect(() => {
    document.body.className = isDark ? "dark" : "light";
  }, [isDark]);

  const links = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Achievements",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 dark:bg-black/30 shadow-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <h1 className="text-cyan-400 text-lg font-semibold tracking-wide">
          Osama.dev
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={`transition-all duration-300 ${
                  active === link
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-gray-300 hover:text-cyan-300"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Osamhkk-Ai"
            target="_blank"
            className="hover:text-cyan-400 text-gray-300 transition"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/osama-alghamdi-4aa902302"
            target="_blank"
            className="hover:text-cyan-400 text-gray-300 transition"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            className="hover:text-cyan-400 text-gray-300 transition"
          >
            <FiTwitter size={18} />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            {isDark ? (
              <FiSun className="text-yellow-400" />
            ) : (
              <FiMoon className="text-gray-300" />
            )}
          </button>

          {/* Resume Button */}
          <a
            href="/Osama_Resume.pdf"
            download
            className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/40 transition"
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-cyan-400 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur-lg py-4">
          <ul className="flex flex-col items-center space-y-4">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => {
                    setActive(link);
                    setMenuOpen(false);
                  }}
                  className={`text-lg transition ${
                    active === link
                      ? "text-cyan-400 border-b border-cyan-400"
                      : "text-gray-300 hover:text-cyan-300"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}