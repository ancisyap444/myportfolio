import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16"
        >
          <div className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-semibold mb-3">
            04 // PROFESSIONAL EXPERIENCE
          </div>
          <h2 className="font-display font-bold text-text-primary text-[clamp(28px,4vw,40px)] tracking-tight mb-4">
            Industry & Production Track Record
          </h2>
          <p className="text-text-secondary max-w-2xl text-base leading-relaxed">
            Real engineering contributions spanning full-stack application development, database management, 
            and team deployment workflows.
          </p>
        </motion.div>

        <div className="relative pl-6 sm:pl-10 border-l border-primary/20 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#06090A] border-2 border-primary shadow-[0_0_12px_#39FF88] group-hover:scale-125 transition-transform" />
              </div>

              <div className="glass-card rounded-[14px] p-6 sm:p-8 hover:border-primary/40 hover:shadow-glow-subtle transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-4 border-b border-border-custom">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary">
                        {exp.role}
                      </h3>
                    </div>
                    <div className="text-base font-medium text-primary font-mono">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-text-secondary">
                    <span className="flex items-center gap-1.5 bg-surface px-3 py-1 rounded-full border border-border-custom">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1.5 bg-surface px-3 py-1 rounded-full border border-border-custom">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {exp.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                      <span className="text-primary font-mono font-bold mt-0.5">›</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border-custom/60 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-text-muted mr-1">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-text-primary bg-surface border border-border-custom hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
