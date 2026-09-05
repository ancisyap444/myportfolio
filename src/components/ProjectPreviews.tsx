import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, TrendingUp, Smartphone, Users, ExternalLink, Sparkles } from 'lucide-react';
import gsyScreenshot from '../assets/gsy-hardware.png';

export const GsyHardwarePreview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full bg-[#080D0F] rounded-xl overflow-hidden border border-border-custom flex flex-col font-sans select-none group/gsy"
    >
            <div className="px-3.5 py-2.5 bg-[#0D1315] border-b border-border-custom flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
        </div>

                <div className="flex items-center gap-2 bg-[#06090A] px-3.5 py-1 rounded-md border border-border-custom text-[11px] font-mono text-text-muted">
          <ShieldCheck className="w-3 h-3 text-primary" />
          <span className="text-text-primary/90">gsyhardware.com</span>
          <span className="text-primary/80 font-mono text-[10px] hidden sm:inline">| SSL 256-bit</span>
        </div>

                <div className="flex items-center gap-1.5 font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          <span className="hidden sm:inline">1 LIVE VISITOR</span>
          <span className="sm:hidden">LIVE</span>
        </div>
      </div>

            <div className="relative flex-1 overflow-hidden bg-[#06090A]">
                <motion.div
          style={{ y: imageY }}
          className="w-full h-[106%] -mt-[3%] relative"
        >
          <img
            src={gsyScreenshot}
            alt="GSY Hardware E-Commerce Platform interface built by Francis Vernard Yap"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/gsy:scale-[1.03]"
            loading="lazy"
          />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06090A]/70 via-transparent to-black/10 pointer-events-none" />
        </motion.div>

                <div className="absolute top-3 left-3 flex flex-wrap gap-2 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#06090A]/90 backdrop-blur-md border border-primary/30 font-mono text-[10px] text-primary shadow-lg">
            <Users className="w-3 h-3 text-primary" />
            <span>Storefront & Admin RLS</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-[#06090A]/90 backdrop-blur-md border border-border-custom font-mono text-[10px] text-text-muted">
            <Sparkles className="w-2.5 h-2.5 text-primary" />
            <span>Wholesale & PDC Terms</span>
          </span>
        </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/gsy:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="px-4 py-2 rounded-full bg-primary text-[#06090A] font-mono text-xs font-semibold shadow-glow-primary flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Inspect Production Platform</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export const BudgetTrackerPreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#080D0F] rounded-xl overflow-hidden border border-border-custom flex flex-col font-sans select-none">
            <div className="px-4 py-2 bg-[#0D1315] border-b border-border-custom flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-text-muted">
          <Smartphone className="w-3.5 h-3.5 text-primary" />
          <span>Flutter Mobile Client</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>Supabase Synced</span>
        </div>
      </div>

            <div className="p-4 flex-1 flex flex-col justify-between gap-3 bg-gradient-to-b from-[#080D0F] to-[#06090A]">
                <div className="p-3.5 rounded-xl bg-surface border border-primary/20 shadow-inner">
          <div className="flex justify-between items-center mb-1 text-[11px] text-text-muted font-mono">
            <span>TOTAL NET BALANCE</span>
            <span className="text-primary flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +14.2%
            </span>
          </div>
          <div className="text-xl sm:text-2xl font-display font-bold text-text-primary tracking-tight">
            ₱ 48,250.00
          </div>
          <div className="mt-2 pt-2 border-t border-border-custom/60 flex justify-between text-[10px] font-mono">
            <span className="text-emerald-400">Income: ₱ 65,000</span>
            <span className="text-red-400">Expenses: ₱ 16,750</span>
          </div>
        </div>

                <div className="p-3 rounded-lg bg-surface/60 border border-border-custom">
          <div className="flex justify-between items-center text-[10px] font-mono text-text-muted mb-2">
            <span>WEEKLY SPENDING VELOCITY</span>
            <span className="text-primary">Target: OK</span>
          </div>
          <div className="flex items-end gap-2 h-12 pt-2">
            {[45, 60, 30, 85, 40, 95, 55].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div 
                  className={`w-full rounded-t transition-all ${
                    i === 5 ? 'bg-primary shadow-[0_0_8px_#39FF88]' : 'bg-primary/30'
                  }`}
                  style={{ height: `${val}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[8px] font-mono text-text-muted mt-1">
            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
          </div>
        </div>

                <div className="space-y-1.5">
          <div className="flex items-center justify-between p-2 rounded bg-surface/40 border border-border-custom text-[11px]">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary text-[10px]">
                🛒
              </div>
              <span className="font-medium text-text-primary">Supplies & Groceries</span>
            </div>
            <span className="font-mono text-red-400 text-[10px]">- ₱ 1,420.00</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded bg-surface/40 border border-border-custom text-[11px]">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary text-[10px]">
                💻
              </div>
              <span className="font-medium text-text-primary">Dev Tools & Hosting</span>
            </div>
            <span className="font-mono text-red-400 text-[10px]">- ₱ 850.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
