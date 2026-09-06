import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Database, 
  Network, 
  Wrench,
  LayoutGrid,
  List
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TechLogo } from './TechLogos';

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 className="w-4 h-4 text-primary" />,
  'Web Development': <Globe className="w-4 h-4 text-primary" />,
  Databases: <Database className="w-4 h-4 text-primary" />,
  'Networking & Systems': <Network className="w-4 h-4 text-primary" />,
  'Tools & Ecosystem': <Wrench className="w-4 h-4 text-primary" />,
};

export const Skills: React.FC = () => {
  const [viewMode, setViewMode] = useState<'logos' | 'badges'>('logos');

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-semibold mb-3">
              02 // TECHNICAL SKILLS
            </div>
            <h2 className="font-display font-bold text-text-primary text-[clamp(28px,4vw,40px)] tracking-tight mb-4">
              Categorized Stack & Tooling
            </h2>
            <p className="text-text-secondary max-w-2xl text-base leading-relaxed">
              An interactive matrix of languages, frameworks, database architectures, and networking protocols
              powering production systems and scalable web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="self-start md:self-auto flex items-center p-1 bg-surface border border-border-custom rounded-xl shadow-inner"
          >
            <button
              type="button"
              onClick={() => setViewMode('logos')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 ${
                viewMode === 'logos'
                  ? 'bg-primary text-[#06090A] font-semibold shadow-glow-subtle'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
              aria-label="View creative tech logos grid"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Tech Logos</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('badges')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 ${
                viewMode === 'badges'
                  ? 'bg-primary text-[#06090A] font-semibold shadow-glow-subtle'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
              aria-label="View badges with text names"
            >
              <List className="w-3.5 h-3.5" />
              <span>Logos + Names</span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="glass-card rounded-[14px] p-6 flex flex-col justify-between hover:border-primary/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2.5 mb-5 pb-3 border-b border-border-custom">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-surface border border-border-custom text-primary">
                      {categoryIcons[category.title] || <Code2 className="w-4 h-4 text-primary" />}
                    </div>
                    <h3 className="font-display font-semibold text-lg text-text-primary">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-text-muted px-2 py-0.5 rounded bg-surface/50 border border-border-custom">
                    {category.skills.length}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {viewMode === 'logos' ? (
                    <motion.div
                      key="logos-view"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-4 sm:grid-cols-5 gap-2.5 sm:gap-3"
                    >
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="group relative flex flex-col items-center justify-center p-3 rounded-xl bg-surface/80 hover:bg-surface-hover border border-border-custom hover:border-primary/50 transition-all duration-200 hover:shadow-glow-subtle hover:-translate-y-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary"
                          tabIndex={0}
                          role="img"
                          aria-label={skill}
                        >
                          <TechLogo name={skill} className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-200 group-hover:scale-110" />
                          
                          <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#06090A]/95 border border-primary/40 text-primary font-mono text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-150 pointer-events-none z-30 shadow-xl shadow-black/80">
                            {skill}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-primary/40" />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="badges-view"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-wrap gap-2"
                    >
                      {category.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ y: -2, scale: 1.02 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs font-medium text-text-primary bg-surface/70 border border-primary/20 hover:border-primary hover:text-primary hover:shadow-glow-badge transition-colors cursor-default select-none"
                        >
                          <TechLogo name={skill} className="w-3.5 h-3.5 shrink-0" />
                          <span>{skill}</span>
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 pt-3 border-t border-border-custom/60 flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span>{category.skills.length} technologies</span>
                <span className="text-primary/70">verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
