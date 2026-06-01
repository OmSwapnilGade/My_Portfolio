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
      setScrolled(window.scrollY > 50);

      // Determine active section
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
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-lg' : ''
      }`}
      style={scrolled ? { boxShadow: '0 4px 30px rgba(0,0,0,0.05)' } : {}}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-bold gradient-text tracking-tight"
          >
            OSG<span className="text-accent-cyan">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                style={
                  activeSection === link.href.slice(1)
                    ? { color: '#3b82f6', background: 'rgba(59, 130, 246, 0.1)' }
                    : { color: '#475569' }
                }
                onMouseEnter={(e) => {
                  if (activeSection !== link.href.slice(1)) {
                    e.currentTarget.style.color = '#1e293b';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href.slice(1)) {
                    e.currentTarget.style.color = '#475569';
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
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ cursor: 'pointer' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 relative flex flex-col justify-center items-center">
              <span
                className="block w-5 h-0.5 bg-text-primary transition-all duration-300"
                style={{
                  transform: mobileOpen ? 'rotate(45deg)' : 'translateY(-6px)',
                  position: mobileOpen ? 'absolute' : 'relative',
                }}
              />
              <span
                className="block w-5 h-0.5 bg-text-primary transition-all duration-300"
                style={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-0.5 bg-text-primary transition-all duration-300"
                style={{
                  transform: mobileOpen ? 'rotate(-45deg)' : 'translateY(6px)',
                  position: mobileOpen ? 'absolute' : 'relative',
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden glass-strong"
            style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                  style={
                    activeSection === link.href.slice(1)
                      ? { color: '#3b82f6', background: 'rgba(59, 130, 246, 0.1)' }
                      : { color: '#475569' }
                  }
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
