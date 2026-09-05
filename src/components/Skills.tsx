import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Network, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 className="w-4 h-4 text-primary" />,
  'Web Development': <Globe className="w-4 h-4 text-primary" />,
  Databases: <Database className="w-4 h-4 text-primary" />,
  'Networking & Systems': <Network className="w-4 h-4 text-primary" />,
  'Tools & Ecosystem': <Wrench className="w-4 h-4 text-primary" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Eyebrow & Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16"
        >
          <div className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-semibold mb-3">
            02 // TECHNICAL SKILLS
          </div>
          <h2 className="font-display font-bold text-text-primary text-[clamp(28px,4vw,40px)] tracking-tight mb-4">
            Categorized Stack & Tooling
          </h2>
          <p className="text-text-secondary max-w-2xl text-base leading-relaxed">
            A comprehensive overview of languages, frameworks, database systems, and networking protocols 
            used across production applications and academic projects.
          </p>
        </motion.div>

        {/* Categories Grid */}
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
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-border-custom">
                  <div className="p-2 rounded-lg bg-surface border border-border-custom">
                    {categoryIcons[category.title] || <Code2 className="w-4 h-4 text-primary" />}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-primary">
                    {category.title}
                  </h3>
                </div>

                {/* Badge Grid (Mono font, green border, transparent fill, subtle hover lift + glow) */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -3, scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg font-mono text-xs font-medium text-text-primary bg-surface/70 border border-primary/20 hover:border-primary hover:text-primary hover:shadow-glow-badge transition-colors cursor-default select-none"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Counter footer */}
              <div className="mt-6 pt-3 border-t border-border-custom/60 flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span>{category.skills.length} technologies</span>
                <span className="text-primary/70">ready</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
