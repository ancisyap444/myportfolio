import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Star } from 'lucide-react';
import type { ProjectItem } from '../types';
import { GsyHardwarePreview, BudgetTrackerPreview } from './ProjectPreviews';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isFeatured = project.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className={`glass-card rounded-[14px] overflow-hidden border border-border-custom hover:border-primary/40 hover:shadow-glow-subtle transition-all duration-300 flex flex-col ${
        isFeatured ? 'lg:col-span-12' : 'lg:col-span-6'
      }`}
    >
      <div className={`grid grid-cols-1 ${isFeatured ? 'lg:grid-cols-12 gap-8' : 'gap-6'} p-6 sm:p-8 flex-1`}>
                <div className={`${isFeatured ? 'lg:col-span-7' : 'w-full'} flex flex-col`}>
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border-custom bg-[#080D0F] group">
                        <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.02]">
              {project.id === 'gsy-hardware' ? (
                <GsyHardwarePreview />
              ) : (
                <BudgetTrackerPreview />
              )}
            </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-[#06090A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-end p-4">
              <span className="font-mono text-xs text-primary flex items-center gap-1.5 bg-[#06090A]/90 px-3 py-1 rounded-full border border-primary/30">
                <ExternalLink className="w-3.5 h-3.5" /> Inspect Architecture
              </span>
            </div>
          </div>
        </div>

                <div className={`${isFeatured ? 'lg:col-span-5' : 'w-full'} flex flex-col justify-between space-y-5`}>
          <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-primary/80 uppercase tracking-wider">
                  {project.type}
                </span>
                <span className="text-text-muted">•</span>
                <span className="font-mono text-xs text-text-muted">
                  {project.year}
                </span>
              </div>
              {isFeatured && (
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                  <Star className="w-3 h-3 fill-primary" /> Featured Build
                </span>
              )}
            </div>

                        <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-text-secondary/90 mb-3">
              {project.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
              {project.description}
            </p>

                        {isFeatured && project.highlights && (
              <div className="space-y-2 mb-5">
                {project.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-text-secondary leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}

                        <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-primary bg-surface border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

                    <div className="pt-4 border-t border-border-custom flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-[#06090A] text-xs font-semibold tracking-wide shadow-glow-subtle hover:shadow-glow-primary hover:bg-[#48ff92] transition-all active:scale-95 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                aria-label={`Open live demo for ${project.title}`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-surface-hover border border-border-custom hover:border-primary/40 text-text-primary text-xs font-medium transition-all hover:shadow-glow-subtle active:scale-95 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              aria-label={`View source code for ${project.title} on GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5 text-primary" />
              <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
