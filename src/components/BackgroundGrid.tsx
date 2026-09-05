import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      <div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(57,255,136,0.3) 0%, rgba(27,67,50,0.08) 60%, transparent 80%)'
        }}
      />
      <div 
        className="absolute top-1/3 -left-48 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(57,255,136,0.2) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-10 right-[-10%] w-[600px] h-[600px] rounded-full blur-[180px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(57,255,136,0.25) 0%, transparent 70%)'
        }}
      />

      <div 
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(57, 255, 136, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(57, 255, 136, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)'
        }}
      />

      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(rgba(57, 255, 136, 0.3) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
          maskImage: 'radial-gradient(circle at 50% 30%, black 20%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black 20%, transparent 85%)'
        }}
      />
    </div>
  );
};
