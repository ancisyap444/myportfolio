import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Track scroll state for enhanced background blur and border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for scroll-spy (threshold ~0.4)
  useEffect(() => {
    const sectionIds = ['hero', ...NAV_LINKS.map(link => link.href.replace('#', ''))];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-10% 0px -40% 0px',
      threshold: 0.35,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06090A]/85 backdrop-blur-md border-b border-border-custom py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 font-mono text-sm tracking-wide text-text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-lg p-1"
          aria-label="Francis Vernard Yap homepage"
        >
          <div className="w-8 h-8 rounded-lg bg-surface border border-border-custom group-hover:border-primary/40 flex items-center justify-center transition-colors">
            <Terminal className="w-4 h-4 text-primary transition-transform group-hover:scale-110" />
          </div>
          <span className="font-display font-semibold tracking-tight text-base sm:text-lg">
            francis<span className="text-primary font-mono">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          className="hidden md:flex items-center gap-1 bg-surface/60 backdrop-blur-md border border-border-custom rounded-full px-4 py-1.5"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors rounded-full focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-primary/10 border border-primary/30 rounded-full shadow-[0_0_12px_rgba(57,255,136,0.25)] -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Download CV */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`/${PERSONAL_INFO.cvFileName}`}
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-text-primary bg-surface hover:bg-surface-hover border border-border-custom hover:border-primary/40 hover:shadow-glow-subtle rounded-[14px] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 active:scale-95"
            aria-label="Download Curriculum Vitae (PDF)"
          >
            <Download className="w-3.5 h-3.5 text-primary" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-surface border border-border-custom text-text-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slide-Down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-b border-border-custom bg-[#06090A]/95 backdrop-blur-xl px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#39FF88]" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 opacity-40" />
                    )}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-border-custom">
                <a
                  href={`/${PERSONAL_INFO.cvFileName}`}
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-[14px] bg-primary text-[#06090A] font-semibold text-sm shadow-glow-subtle transition-all active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
