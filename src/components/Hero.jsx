'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Background remains identical for consistency
const GlassBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] overflow-hidden">
    <div className="absolute top-[-5%] left-[-10%] w-[300px] h-[300px] md:w-[900px] md:h-[900px] rounded-full opacity-60 mix-blend-multiply bg-[radial-gradient(circle,rgba(56,189,248,0.8)_0%,rgba(255,255,255,0)_70%)] blur-[40px] md:blur-[80px]" />
    <div className="absolute top-[10%] right-[-10%] w-[250px] h-[250px] md:w-[800px] md:h-[800px] rounded-full opacity-60 mix-blend-multiply bg-[radial-gradient(circle,rgba(52,211,153,0.8)_0%,rgba(255,255,255,0)_70%)] blur-[40px] md:blur-[80px]" />
    <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-[repeat(48,minmax(0,1fr))] h-full w-full">
      {Array(48).fill(null).map((_, i) => (
        <div key={i} className="h-full border-r border-white/20 md:border-white/30 backdrop-blur-[10px] md:backdrop-blur-[25px] shadow-[inset_0.5px_0_0_rgba(255,255,255,0.1)] md:shadow-[inset_0.5px_0_0_rgba(255,255,255,0.15)]"
          style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)' }}
        />
      ))}
    </div>
    <div className="absolute inset-0 opacity-30 md:opacity-40 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
  </div>
);

const Hero = () => {
  const containerRef = useRef(null);
  
  // High-performance scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to scale (1 to 1.15)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={containerRef} className="relative pt-44 md:pt-52 pb-20 md:pb-40 px-4 md:px-6 flex flex-col items-center text-center min-h-screen overflow-x-hidden font-sans bg-[#F4F2F1]">
      <GlassBackground />

      <div className="relative z-20 flex flex-col items-center max-w-7xl mx-auto w-full">
        
        {/* Headline - Lowered with pt-44 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-gray-900 tracking-tight max-w-5xl mb-6 md:mb-8 leading-[1.2] px-2">
          Turn your education + visa workflow into an <br className="hidden md:block" />
          automated conversion & processing engine.
        </h1>
        
        <div className="flex flex-col items-center max-w-3xl mb-8 md:mb-10 space-y-3 md:space-y-4 px-4">
          <p className="text-gray-900 font-bold text-base md:text-xl leading-snug">
            Stop losing leads. Stop chasing documents. Stop re-typing applications.
          </p>
          <p className="text-gray-500 font-normal text-sm md:text-lg leading-relaxed">
            Quantum Immigration is a modular platform for education and migration consultants to capture more enquiries, match courses, manage documents, and lodge faster.
          </p>
        </div>
        
        <button className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:scale-105 transition-all shadow-xl mb-24 active:scale-95 cursor-pointer">
          Buy Now
        </button>

        {/* Dashboard Preview - Automated Scale on Scroll */}
        <motion.div 
          style={{ scale }}
          className="w-full max-w-6xl origin-top px-2 md:px-0"
        >
          <div className="p-[1.5px] md:p-[2px] rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 shadow-2xl">
            <div className="rounded-xl md:rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-inner flex flex-col">
              
              {/* Browser Header */}
              <div className="bg-[#2d2d2d] border-b border-white/10 px-3 md:px-4 py-2 md:py-3 flex items-center gap-3 md:gap-4 relative z-30">
                <div className="flex gap-1.5 md:gap-2">
                  <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#27c93f]"></div>
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
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;