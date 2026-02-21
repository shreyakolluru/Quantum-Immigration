'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Comparison = ({ isDark = false }) => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scaleRange = isMobile ? [0.72, 0.94] : [0.78, 1];
  const rotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[130vh] flex items-start justify-center px-4 md:px-6 overflow-x-hidden font-sans bg-[#F4F2F1] dark:bg-black"
    >
      <div
        className="relative z-20 pt-36 md:pt-44 pb-2 md:pb-3 w-full max-w-7xl mx-auto flex flex-col items-center text-center"
        style={{ perspective: '1200px' }}
      >
        <div className="flex flex-col items-center w-full mb-20 md:mb-28">
          <motion.h1
            initial={{ opacity: 0, y: 48, scale: 0.98, filter: 'blur(14px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.35, ease: [0.19, 1, 0.22, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-gray-900 dark:text-white tracking-tight max-w-5xl mb-6 md:mb-8 leading-[1.2] px-2"
          >
            Turn your education + visa workflow into an <br className="hidden md:block" />
            automated conversion & processing engine.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.15, delay: 0.45, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col items-center max-w-3xl mb-8 md:mb-10 space-y-3 md:space-y-4 px-4"
          >
            <p className="text-gray-900 dark:text-white font-bold text-base md:text-xl leading-snug">
              Stop losing leads. Stop chasing documents. Stop re-typing applications.
            </p>
            <p className="text-gray-500 dark:text-gray-400 font-normal text-sm md:text-lg leading-relaxed">
              Quantum Immigration is a modular platform for education and migration consultants to capture more enquiries, match courses, manage documents, and lodge faster.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 32, scale: 0.97, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.85, ease: [0.19, 1, 0.22, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black dark:bg-white dark:text-black text-white px-8 py-3 rounded-xl font-medium transition-all shadow-xl cursor-pointer"
          >
            Buy Now
          </motion.button>
        </div>

        <motion.div
          style={{
            rotateX,
            scale,
            translateY,
            boxShadow:
              '0 0 0 1px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.05), 0 12px 24px rgba(0,0,0,0.05), 0 24px 48px rgba(0,0,0,0.08), 0 48px 96px rgba(0,0,0,0.06)',
          }}
          className="w-full max-w-6xl mx-auto px-2 md:px-0 origin-center"
        >
          <div className="rounded-xl md:rounded-2xl overflow-hidden bg-[#1a1a1a] flex flex-col border border-white/10 shadow-2xl">
              <div className="bg-[#2d2d2d] border-b border-white/10 px-3 md:px-4 py-2 md:py-3 flex items-center gap-3 md:gap-4 relative z-30">
                <div className="flex gap-1.5 md:gap-2">
                  <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 max-w-[150px] sm:max-w-md md:max-w-2xl mx-auto bg-[#1a1a1a] border border-white/10 rounded md:rounded-md h-5 md:h-7 flex items-center justify-center text-[10px] md:text-xs text-gray-400 font-mono shadow-sm truncate px-2">
                  quantum-immigration.com
                </div>
              </div>
              <div className="relative bg-[#0B1120] min-h-[250px] sm:min-h-[450px]">
                <img
                  src="/dashboard-preview.png"
                  alt="Dashboard Interface"
                  className="w-full h-auto block"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
