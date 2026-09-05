import React from 'react';
import { ArrowUp, Mail, Terminal } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-border-custom bg-[#06090A] relative z-10 py-12 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border-custom/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-surface border border-border-custom flex items-center justify-center">
              <Terminal className="w-4 h-4 text-primary" />
            </div>
            <div>
              <span className="font-display font-semibold text-text-primary text-base">
                {PERSONAL_INFO.name}
              </span>
              <span className="block font-mono text-xs text-text-muted">
                Full Stack Developer • Cebu, Philippines
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface hover:bg-surface-hover border border-border-custom hover:border-primary/40 flex items-center justify-center text-text-secondary hover:text-primary transition-all hover:shadow-glow-subtle focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                aria-label={social.ariaLabel}
              >
                {social.name === 'GitHub' && <GithubIcon className="w-4 h-4" />}
                {social.name === 'LinkedIn' && <LinkedinIcon className="w-4 h-4" />}
                {social.name === 'Facebook' && <FacebookIcon className="w-4 h-4" />}
                {social.name === 'Instagram' && <InstagramIcon className="w-4 h-4" />}
                {social.name === 'Email' && <Mail className="w-4 h-4" />}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface hover:bg-surface-hover border border-border-custom hover:border-primary/40 text-xs font-mono text-text-secondary hover:text-primary transition-all hover:shadow-glow-subtle focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-primary" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            © 2026 Francis Vernard Yap. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Built with React 19, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
