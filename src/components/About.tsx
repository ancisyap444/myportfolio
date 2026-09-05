import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, Database, Network } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20"
        >
          <div className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-semibold mb-3">
            01 // BACKGROUND & ACADEMICS
          </div>
          <h2 className="font-display font-bold text-text-primary text-[clamp(28px,4vw,40px)] tracking-tight">
            Building durable systems from the database up.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio & Core Philosophy (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card rounded-[14px] p-6 sm:p-8 space-y-5">
              <h3 className="font-display font-semibold text-xl text-text-primary flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Engineering Profile
              </h3>
              
              <p className="text-text-secondary leading-relaxed text-base">
                I am an Information Technology student and full-stack developer based in Cebu, Philippines. 
                My focus centers on architecting database-driven applications, crafting resilient REST APIs, 
                and designing role-based workflows that solve operational bottlenecks.
              </p>

              <p className="text-text-secondary leading-relaxed text-base">
                With a blend of hands-on software development at Smart-Q IT and Engineering Solutions 
                and formal Cisco CCNA networking education, I understand how web systems function end-to-end — 
                from relational schemas and query execution to network packet routing and client rendering.
              </p>

              {/* Quick Specs Pill Badges */}
              <div className="pt-4 border-t border-border-custom grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-surface border border-border-custom">
                  <span className="text-text-muted block text-[11px] uppercase tracking-wider mb-1">Location</span>
                  <span className="text-primary font-medium">{PERSONAL_INFO.location}</span>
                </div>
                <div className="p-3 rounded-xl bg-surface border border-border-custom">
                  <span className="text-text-muted block text-[11px] uppercase tracking-wider mb-1">Focus</span>
                  <span className="text-primary font-medium">Full Stack & Systems</span>
                </div>
                <div className="p-3 rounded-xl bg-surface border border-border-custom">
                  <span className="text-text-muted block text-[11px] uppercase tracking-wider mb-1">Status</span>
                  <span className="text-primary font-medium">Open for Work</span>
                </div>
              </div>
            </div>

            {/* Education Block */}
            <div className="glass-card rounded-[14px] p-6 sm:p-8 space-y-5">
              <h3 className="font-display font-semibold text-lg text-text-primary flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>

              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface/40 border border-border-custom hover:border-primary/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h4 className="font-medium text-text-primary text-base">
                        {edu.degree}
                      </h4>
                      <span className="font-mono text-xs text-primary/80">
                        {edu.location}
                      </span>
                    </div>
                    <div className="text-sm text-text-secondary mb-1">
                      {edu.institution}
                    </div>
                    {edu.notes && (
                      <p className="text-xs text-text-muted font-sans mt-1">
                        {edu.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Certifications & Competencies (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-[14px] p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-lg text-text-primary flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-primary" />
                  Certifications
                </h3>
                <span className="font-mono text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                  Verified
                </span>
              </div>

              <div className="space-y-3.5">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface/50 border border-border-custom hover:border-primary/40 hover:shadow-glow-badge transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-surface border border-border-custom group-hover:border-primary/40 text-primary mt-0.5">
                        {cert.name.includes('CCNA') ? (
                          <Network className="w-4 h-4" />
                        ) : (
                          <Database className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors leading-snug">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-text-secondary mt-1 flex items-center gap-1.5 font-mono">
                          <ShieldCheck className="w-3.5 h-3.5 text-primary/70 inline" />
                          <span>{cert.issuer}</span>
                        </p>
                        {cert.type && (
                          <span className="inline-block mt-2 font-mono text-[11px] text-text-muted bg-surface px-2 py-0.5 rounded border border-border-custom">
                            {cert.type}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Highlights Box */}
            <div className="p-5 rounded-[14px] bg-[#1B4332]/25 border border-primary/20 space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                Technical Competencies
              </div>
              <ul className="space-y-2 text-xs text-text-secondary font-sans leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">›</span>
                  <span>End-to-end full-stack architectures (React, PHP, Node/Flask, RESTful APIs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">›</span>
                  <span>Relational data modeling, SQL indexing, and Supabase RLS security policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">›</span>
                  <span>Enterprise network protocols, packet tracing, and switching topologies</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
