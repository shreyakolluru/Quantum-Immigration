'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Sparkles, 
  GitCompare, 
  Compass, 
  FileCheck, 
  Send, 
  PenTool,
  Bell,
  LayoutDashboard
} from 'lucide-react';

const ACCENT = { 
  lime: '#d4ff00', 
  purple: '#8b5cf6', 
  dark: '#171717',
};

const features = [
  { label: 'AI Course Matching', icon: Sparkles, iconBg: ACCENT.lime },            
  { label: 'AI Course Comparison', icon: GitCompare, iconBg: ACCENT.purple },      
  { label: 'Structured Guidance', icon: Compass, iconBg: ACCENT.dark },            
  { label: 'Document Tracking', icon: FileCheck, iconBg: ACCENT.lime },            
  { label: 'Auto Form Submission', icon: Send, iconBg: ACCENT.purple },            
  { label: 'Tailored SOP Writing', icon: PenTool, iconBg: ACCENT.dark },           
  { label: 'Preemptive Alerts', icon: Bell, iconBg: ACCENT.lime },                 
  { label: 'Real-Time Dashboard', icon: LayoutDashboard, iconBg: ACCENT.purple },  
];

const positions = [
  { top: '12%', left: 0, right: 0, margin: 'auto' }, 
  { top: '26%', left: '6%' },                        
  { top: '26%', right: '6%' },                       
  { top: '50%', left: '2%' },                        
  { top: '50%', right: '2%' },                       
  { top: '74%', left: '6%' },                        
  { top: '74%', right: '6%' },                       
  { bottom: '6%', left: 0, right: 0, margin: 'auto'} 
];

// --- New Helper Component for the Rolling Text Animation ---
const RollingTextButton = ({ text }) => {
  return (
    <div className="relative overflow-hidden h-[20px] flex items-center">
      <div className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
        <span className="flex items-center justify-center h-[20px]">{text}</span>
        <span className="flex items-center justify-center h-[20px] absolute top-full">{text}</span>
      </div>
    </div>
  );
};

const Hero = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: '-10% 0px -10% 0px' });

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-36 px-4 sm:px-6 font-sans overflow-hidden min-h-[900px] lg:min-h-[100vh] flex flex-col items-center justify-center bg-[#050505]"
    >
      <div className="relative z-20 w-full max-w-2xl mx-auto text-center px-4 flex flex-col items-center justify-center">
        
        {/* Background Orb */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[500px] pointer-events-none z-[-1]"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 136, 0.25) 0%, rgba(0, 191, 255, 0.2) 40%, transparent 70%)',
            filter: 'blur(70px)'
          }}
          aria-hidden
        />

        {/* UPDATED: Quantum Immigration Label with Moving Gold/Silver Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          {/* Sparkles icon removed here */}
          <motion.span 
            className="text-[12px] font-bold uppercase tracking-[0.15em] bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
              backgroundSize: '200% auto'
            }}
            animate={{
              backgroundPosition: ['0% center', '-200% center']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Quantum Immigration
          </motion.span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: inView ? 0.1 : 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6"
        >
          Next-Gen
          <br />
          Immigration
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: inView ? 0.2 : 0 }}
          className="text-gray-300 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Our AI-driven platform provides personalized university matching, automated document tracking, tailored SOP writing, and structured guidance at every stage of your study abroad journey.
        </motion.p>
        
        {/* UPDATED: Buttons with Gradients and Rolling Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: inView ? 0.3 : 0 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary Button: Blue Gradient Background + Rolling Text */}
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white overflow-hidden transition-transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700" />
            <span className="relative z-10">
              <RollingTextButton text="Get Started" />
            </span>
          </a>

          {/* Secondary Button: Blue/Green Gradient Border + Rolling Text */}
          <a
            href="#features"
            // The outer div creates the gradient border effect
            className="group relative p-[2px] rounded-full overflow-hidden transition-transform hover:scale-105 bg-gradient-to-r from-blue-500 to-green-500"
          >
            {/* The inner div is the actual button background, slightly smaller to reveal the border */}
            <div className="relative h-full w-full bg-[#050505] rounded-full px-8 py-3.5 flex items-center justify-center transition-colors group-hover:bg-[#0a0a0a]">
               <span className="text-sm font-medium text-white">
                 <RollingTextButton text="Learn More" />
               </span>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Floating Feature Pills (Desktop) */}
      <div className="absolute inset-0 z-10 hidden md:block pointer-events-none">
        <div className="relative w-full max-w-6xl h-full mx-auto">
          {features.map((item, idx) => (
            <FloatingPill key={idx} item={item} position={positions[idx]} inView={inView} idx={idx} />
          ))}
        </div>
      </div>

      {/* Mobile Feature Pills */}
      <div className="relative z-20 flex flex-wrap justify-center gap-3 mt-16 md:hidden px-2">
        {features.map((item, idx) => {
          const Icon = item.icon;
          const dynamicDelay = inView ? idx * 0.1 : (7 - idx) * 0.1;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: dynamicDelay, duration: 0.4 }}
              className="flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-full bg-[#111] border border-white/5"
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ 
                  background: item.iconBg,
                  color: item.iconBg === ACCENT.lime ? 'black' : 'white' 
                }}
              >
                <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
              </div>
              <span className="text-xs font-medium text-white">{item.label}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

function FloatingPill({ item, position, inView, idx }) {
  const Icon = item.icon;
  const iconColor = item.iconBg === '#d4ff00' ? 'text-black' : 'text-white';
  const dynamicDelay = inView ? idx * 0.15 : (7 - idx) * 0.1;

  return (
    <motion.div
      className="absolute flex items-center gap-3 pl-2.5 pr-5 py-2.5 rounded-full w-max pointer-events-auto border border-white/5 bg-[#111111]/90 backdrop-blur-sm shadow-xl"
      style={{
        top: position.top,
        bottom: position.bottom,
        left: position.left,
        right: position.right,
        margin: position.margin || '0',
      }}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
      transition={{ duration: 0.5, delay: dynamicDelay, type: "spring", stiffness: 90, damping: 15 }}
    >
      <motion.div 
        className="flex items-center gap-3"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
      >
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${iconColor}`}
          style={{ background: item.iconBg }}
        >
          <Icon className="w-4 h-4" strokeWidth={2.5} />
        </div>
        <span className="text-sm font-medium text-white">{item.label}</span>
      </motion.div>
    </motion.div>
  );
}

export default Hero;