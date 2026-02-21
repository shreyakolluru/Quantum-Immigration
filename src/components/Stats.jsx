'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

// Bar chart data: percentage (for bar length), label, subtext. Max bar = 100%.
const barData = [
  { value: 100, label: "Student Trust", subtext: "Quality SOPs & Matching" },
  { value: 70, label: "Turnaround", subtext: "Portal Prefill Speed" },
  { value: 75, label: "Leads Captured", subtext: "From existing traffic" },
  { value: 0, label: "Manual Work", subtext: "Sorting & Reminders" },
  { value: 85, label: "Scale", subtext: "Without Hiring" },
];

const BAR_GRADIENT = 'linear-gradient(90deg, #1e40af 0%, #2563eb 35%, #0d9488 70%, rgba(16, 185, 129, 0.75) 100%)';

const Stats = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px 0px -80px 0px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-10 md:py-12 px-4 md:px-6 font-sans overflow-hidden bg-[#F4F2F1] dark:bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: title + footnote */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="w-10 h-10 rounded-full border-2 border-gray-800 dark:border-gray-300 flex items-center justify-center mb-4">
              <div className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-300" />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight mb-6"
            >
              Outcomes that matter
            </motion.h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-auto">
              Each bar represents impact vs. baseline for consultants using the platform.
            </p>
          </div>

          {/* Right: horizontal bar chart */}
          <div className="lg:col-span-7 space-y-4 md:space-y-5">
            {barData.map((item, idx) => (
              <BarRow key={idx} item={item} idx={idx} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function BarRow({ item, idx, inView }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, item.value, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplayValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, item.value]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3, delay: idx * 0.08 }}
      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
    >
      {/* Percentage - fixed width for alignment */}
      <div className="flex-shrink-0 w-12 sm:w-14 text-left">
        <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white tabular-nums">
          {displayValue}%
        </span>
      </div>

      {/* Bar + label row */}
      <div className="flex-1 flex items-center gap-2 min-w-0">
        {/* Bar container: rectangular bars with fade-from-above */}
        <div className="flex-1 h-10 md:h-12 rounded-md overflow-hidden bg-gray-200/80 dark:bg-white/10 flex items-stretch min-w-0 relative">
          <motion.div
            className="h-full min-w-[4px] relative overflow-hidden"
            style={{
              background: BAR_GRADIENT,
              width: `${item.value}%`,
              transformOrigin: 'left',
            }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.9, delay: 0.15 + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Fade from above */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 40%, transparent 100%)',
              }}
              aria-hidden
            />
          </motion.div>
        </div>

        {/* Thin line + label */}
        <div className="flex-shrink-0 flex items-center gap-2 w-full sm:w-auto sm:min-w-[180px]">
          <div className="flex-shrink-0 w-4 h-px bg-gray-300 dark:bg-white/20" />
          <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
            {item.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Stats;
