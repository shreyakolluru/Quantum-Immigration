'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TextWheel = () => {
  const [index, setIndex] = useState(0);
  const words = [
    "missing website leads",
    "hours of course search",
    "chasing student documents",
    "manual form filling",
    "copy-pasting student data",
    "generic SOP rejections",
    "manual visa re-entry"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    // Added pb-8 for slight bottom padding
    <div className="w-full pt-4 pb-8 overflow-hidden bg-[#F4F2F1] dark:bg-black">
      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-y-2 md:gap-x-4 px-4 text-center md:text-left">
          <div className="flex-shrink-0">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              Wave goodbye to
            </h2>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
             <div className="h-[40px] md:h-[65px] min-w-full md:min-w-[580px] relative flex items-center justify-center md:justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={words[index]}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute"
                  >
                    <span className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 whitespace-nowrap">
                      {words[index]}
                    </span>
                  </motion.div>
                </AnimatePresence>
             </div>
          </div>
      </div>
    </div>
  );
};

export default TextWheel;