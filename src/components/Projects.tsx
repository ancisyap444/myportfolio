import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { FolderGit2 } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-semibold mb-3">
              03 // SELECTED WORK
            </div>
            <h2 className="font-display font-bold text-text-primary text-[clamp(28px,4vw,40px)] tracking-tight mb-4">
              Featured Systems & Applications
            </h2>
            <p className="text-text-secondary max-w-2xl text-base leading-relaxed">
              Real-world software engineered with robust database schemas, secure authentication, 
              and clean front-end interfaces.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-text-muted bg-surface px-3 py-1.5 rounded-lg border border-border-custom self-start md:self-auto">
            <FolderGit2 className="w-4 h-4 text-primary" />
            <span>2 Flagship Repositories</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
