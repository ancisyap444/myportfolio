import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ShieldCheck, MapPin, Sparkles, Code2, Cpu } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export const ReactiveProfile: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 40]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.15, 0.9]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.45, 0.2]);

  const chip1Y = useTransform(scrollYProgress, [0, 1], [40, -45]);
  const chip2Y = useTransform(scrollYProgress, [0, 1], [-20, 35]);
  const chip3Y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rX = -(mouseY / (rect.height / 2)) * 8;
    const rY = (mouseX / (rect.width / 2)) * 8;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[440px] mx-auto select-none py-6"
    >
            <motion.div
        style={{
          scale: glowScale,
          opacity: glowOpacity,
        }}
        className="absolute inset-0 rounded-full blur-[90px] bg-gradient-to-tr from-primary/40 via-[#1B4332]/50 to-transparent pointer-events-none -z-10"
      />

            <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative rounded-[22px] p-2 sm:p-2.5 bg-[#06090A]/90 border border-primary/25 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(57,255,136,0.15)] transition-shadow duration-300 hover:shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(57,255,136,0.28)]"
      >
                <div className="px-3.5 py-2 bg-surface/80 rounded-t-[16px] border-b border-border-custom flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
            <span className="ml-2 text-[10px] text-text-muted hidden sm:inline">francis_profile.raw</span>
          </div>

          <div className="flex items-center gap-1.5 text-primary text-[11px]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            <span className="text-[10px] tracking-wider uppercase font-semibold">ONLINE</span>
          </div>
        </div>

                <div className="relative rounded-b-[16px] overflow-hidden aspect-[4/5] bg-[#0A0F11]">
                    <motion.div
            style={{ y: imageY }}
            className="w-full h-[115%] -mt-[7.5%] relative"
          >
            <img
              src={profileImg}
              alt="Francis Vernard Yap in Cebu, Philippines"
              className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.05] transition-transform duration-700 hover:scale-105"
              loading="eager"
            />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#06090A] via-[#06090A]/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-primary/5 mix-blend-color-dodge pointer-events-none" />
          </motion.div>

                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary/70 pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-primary/70 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-primary/70 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-primary/70 pointer-events-none" />

                    <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(57,255,136,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,136,0.5) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#06090A]/85 backdrop-blur-md border border-border-custom pointer-events-none">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-display font-bold text-text-primary tracking-tight">
                  Francis Vernard Yap
                </p>
                <p className="text-[10px] font-mono text-primary flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" /> Cebu, Philippines
                </p>
              </div>
              <div className="p-1.5 rounded-lg bg-surface border border-primary/20 text-primary">
                <Code2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

                <motion.div
          style={{ y: chip1Y }}
          className="absolute -top-4 -right-4 sm:-right-6 z-20 pointer-events-none"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#06090A]/95 border border-primary/40 backdrop-blur-md shadow-glow-subtle font-mono text-xs text-text-primary">
            <Cpu className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="font-semibold text-[11px] text-primary">Full Stack Dev</span>
          </div>
        </motion.div>

                <motion.div
          style={{ y: chip2Y }}
          className="absolute top-1/2 -left-4 sm:-left-7 z-20 pointer-events-none"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#06090A]/95 border border-primary/30 backdrop-blur-md shadow-lg font-mono text-xs text-text-primary">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px]">Cisco CCNA</span>
          </div>
        </motion.div>

                <motion.div
          style={{ y: chip3Y }}
          className="absolute -bottom-3 -right-3 sm:-right-5 z-20 pointer-events-none"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1B4332]/80 border border-primary/40 backdrop-blur-md shadow-glow-subtle font-mono text-[11px] text-primary">
            <Sparkles className="w-3 h-3" />
            <span>React • PHP • Supabase</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
