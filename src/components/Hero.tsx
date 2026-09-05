import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowDown, Download, Mail, MapPin, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

const iconMap: Record<string, React.ReactNode> = {
  Github: <GithubIcon className="w-5 h-5" />,
  Linkedin: <LinkedinIcon className="w-5 h-5" />,
  Mail: <Mail className="w-5 h-5" />,
};

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6"
    >
      <div className="max-w-[1200px] w-full mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          {/* Status Eyebrow */}
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-primary/20 backdrop-blur-sm shadow-[0_0_15px_rgba(57,255,136,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_8px_#39FF88]" />
              </span>
              <span className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-semibold">
                {PERSONAL_INFO.status}
              </span>
            </div>
          </motion.div>

          {/* Large Headline (H1 clamp) */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-text-primary tracking-tight leading-[1.08] text-[clamp(40px,6vw,72px)] mb-6 text-balance"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* Subhead / Technical Pitch */}
          <motion.div variants={itemVariants} className="space-y-4 mb-9 max-w-2xl text-center">
            <p className="text-xl sm:text-2xl font-medium text-text-primary/90 leading-snug">
              Full Stack Developer specializing in{' '}
              <span className="text-primary font-mono font-medium">database-driven systems</span>,{' '}
              <span className="text-primary font-mono font-medium">REST APIs</span>, and role-based web applications.
            </p>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
              {PERSONAL_INFO.pitch}
            </p>
          </motion.div>

          {/* Interactive Terminal Snippet Preview */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-xl mb-10 rounded-[14px] bg-[#06090A]/90 border border-border-custom shadow-2xl text-left overflow-hidden hidden sm:block"
          >
            <div className="flex items-center justify-between px-4 py-2.5 bg-surface/50 border-b border-border-custom">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs font-mono text-text-muted flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-primary/70" /> francis@cebu: ~
              </span>
              <span className="text-[10px] font-mono text-primary/70">zsh</span>
            </div>
            <div className="p-4 font-mono text-xs space-y-1.5 text-text-secondary">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">➜</span>
                <span className="text-text-primary">developer.location</span>
                <span className="text-primary">=</span>
                <span className="text-primary/90 flex items-center gap-1">
                  <MapPin className="w-3 h-3 inline text-primary" /> "{PERSONAL_INFO.location}"
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">➜</span>
                <span className="text-text-primary">developer.stack</span>
                <span className="text-primary">=</span>
                <span className="text-primary/90">["React", "TypeScript", "PHP", "Supabase", "SQL"]</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">➜</span>
                <span className="text-text-primary">developer.certifications</span>
                <span className="text-primary">=</span>
                <span className="text-primary/90">["Cisco CCNA", "DataCamp SQL"]</span>
              </div>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-10 w-full sm:w-auto"
          >
            {/* Primary Filled CTA with Glow */}
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[14px] bg-primary text-[#06090A] font-semibold text-sm tracking-wide shadow-glow-subtle hover:shadow-glow-primary hover:bg-[#48ff92] transition-all duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>View Projects</span>
            </a>

            {/* Ghost / Outline CTA for CV Download */}
            <a
              href={`/${PERSONAL_INFO.cvFileName}`}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[14px] bg-surface hover:bg-surface-hover border border-border-custom hover:border-primary/40 text-text-primary text-sm font-medium transition-all duration-200 hover:shadow-glow-subtle active:scale-95 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              aria-label="Download Francis Vernard Yap's CV"
            >
              <Download className="w-4 h-4 text-primary" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Social Icons Row */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3"
            aria-label="Social profiles and contact methods"
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-[14px] bg-surface hover:bg-surface-hover border border-border-custom hover:border-primary/40 flex items-center justify-center text-text-secondary hover:text-primary transition-all duration-200 hover:scale-105 hover:shadow-glow-subtle focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                aria-label={social.ariaLabel}
              >
                {iconMap[social.icon] || <Terminal className="w-5 h-5" />}
              </a>
            ))}
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.a
            variants={itemVariants}
            href="#about"
            className="mt-14 inline-flex items-center justify-center text-text-muted hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-full p-2"
            aria-label="Scroll down to About section"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4 text-primary/70" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
