'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TextWheel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const words = [
    "repetitive tasks",
    "missed documents",
    "hours of web search",
    "manual college applications",
    "manual VISA applications",
    "fragmented communication"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  const itemHeight = 60; 

  return (
    // OUTER CONTAINER: overflow-hidden prevents scrollbars
    <div className="w-full pt-0 pb-24 overflow-hidden bg-[#F4F2F1]">
      
      {/* FLEX WRAPPER: 
          md:pl-64 -> Increased from 32 to 64. 
          This pushes the "center seam" much further to the right.
      */}
      <div className="flex w-full items-center justify-center md:pl-64">
          
          {/* LEFT SIDE: "Wave goodbye to" */}
          <div className="flex-1 flex justify-end px-2 md:px-4 z-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-none whitespace-nowrap">
              Wave goodbye to
            </h2>
          </div>

          {/* RIGHT SIDE: The Wheel */}
          <div className="flex-1 flex justify-start px-2 md:px-4">
             
             {/* THE WHEEL CONTAINER: 
                 w-[800px] + flex-shrink-0 ensures no text cutting. 
             */}
             <div className="h-[300px] w-[800px] flex-shrink-0 relative flex items-center">
                
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F4F2F1] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F4F2F1] to-transparent z-10 pointer-events-none"></div>

                <motion.div 
                    className="absolute w-full"
                    initial={false}
                    animate={{
                      y: `calc(50% - ${activeIndex * itemHeight}px - ${itemHeight / 2}px)`
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                >
                    {words.map((word, idx) => {
                        const isActive = idx === activeIndex;
                        const distance = Math.abs(activeIndex - idx);
                        
                        return (
                            <div 
                                key={idx} 
                                className="h-[60px] flex items-center justify-start transform origin-center md:origin-left"
                            >
                               <span 
                                  className={`
                                    text-2xl md:text-5xl whitespace-nowrap px-2 font-bold transition-all duration-500
                                    ${isActive 
                                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 opacity-100 scale-105" 
                                      : distance === 1 
                                          ? "text-gray-400 opacity-100 scale-95" 
                                          : distance === 2
                                              ? "text-gray-300 opacity-40 scale-90 blur-[0.5px]" 
                                              : "opacity-0 scale-75" 
                                    }
                                  `}
                                >
                                  {word}
                               </span>
                            </div>
                        )
                    })}
                </motion.div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default TextWheel;