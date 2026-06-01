import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Metrics', href: '#metrics' },
  { label: 'Academics', href: '#academics' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ visible }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.slice(1));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);

        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`rounded-2xl transition-all duration-500 ${
          scrolled ? '' : ''
        }`}
        style={{
          background: scrolled
            ? 'rgba(10, 15, 28, 0.85)'
            : 'rgba(10, 15, 28, 0.6)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.04)'
            : '0 4px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="flex items-center justify-between h-16 px-6 md:px-10">
          {/* Logo */}
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
            className="text-xl font-bold gradient-text tracking-tight"
          >
            OSG.
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                style={{
                  color: activeSection === link.href.slice(1)
                    ? '#22d3ee'
                    : 'rgba(148, 163, 184, 0.8)',
                  background: activeSection === link.href.slice(1)
                    ? 'rgba(34, 211, 238, 0.08)'
                    : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.href.slice(1)) {
                    e.currentTarget.style.color = '#e2e8f0';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href.slice(1)) {
                    e.currentTarget.style.color = 'rgba(148, 163, 184, 0.8)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-text-secondary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden px-6 pb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className="block w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300"
                    style={{
                      color: activeSection === link.href.slice(1)
                        ? '#22d3ee'
                        : 'rgba(148, 163, 184, 0.8)',
                      background: activeSection === link.href.slice(1)
                        ? 'rgba(34, 211, 238, 0.08)'
                        : 'transparent',
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
