import React from 'react';
import { motion } from 'framer-motion';

const GlassBackground = () => {
  // Generates 48 vertical strips
  const strips = Array(48).fill(null);

  return (
    <div 
      className="absolute inset-0 overflow-hidden -z-20 pointer-events-none"
      style={{
        // UPDATED MASK:
        // Starts fading at 0%, purely transparent by 70%.
        // This guarantees the bottom 30% of the section is just flat background color.
        maskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 70%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 70%)'
      }}
    >
      
      {/* 1. Background orbs — faster motion; softer blend on dark */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full opacity-60 dark:opacity-0 dark:invisible mix-blend-multiply dark:mix-blend-soft-light will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.8) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, 180, -120, 80, 0],
          y: [0, -100, 140, -60, 0],
          scale: [1, 1.12, 0.95, 1.08, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-60 dark:opacity-0 dark:invisible mix-blend-multiply dark:mix-blend-soft-light will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(52, 211, 153, 0.8) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -160, 100, -80, 0],
          y: [0, 120, -100, 70, 0],
          scale: [1, 0.92, 1.15, 0.98, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 2. Glassmorphic strips — no visible lines: only soft frosted blur + whisper highlight */}
      <div className="absolute inset-0 grid h-full w-full grid-cols-12 md:grid-cols-[repeat(24,minmax(0,1fr))] lg:grid-cols-[repeat(48,minmax(0,1fr))]">
        {strips.map((_, index) => (
          <div
            key={index}
            className="h-full border-0 border-transparent bg-gradient-to-b from-white/[0.04] to-transparent dark:from-white/[0.015] dark:to-transparent backdrop-blur-[24px]"
            style={{
              WebkitBackdropFilter: 'blur(24px)',
              boxShadow: 'none',
            }}
          />
        ))}
      </div>
      {/* 3. Noise — lighter in dark so it doesn't dominate */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default GlassBackground;