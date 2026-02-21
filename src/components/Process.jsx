'use client';

import React from 'react';

// --- Icons ---
const CheckIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const StepIcon = ({ id }) => {
  const iconProps = { className: "w-8 h-8 text-white", strokeWidth: 1.5 };
  switch (id) {
    case "1": 
      return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
    case "2": 
      return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
    case "3": 
      return <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
    default:
      return <div className="w-8 h-8 bg-white/20 rounded-full" />;
  }
};

const Process = () => {
  const steps = [
    {
      id: "1",
      title: "Configure your workflow",
      bullets: [
        "Set your intake fields",
        "Qualification rules & checklists",
        "Automated reminders & approvals"
      ]
    },
    {
      id: "2",
      title: "Quantum runs the process",
      bullets: [
        "Captures & matches courses",
        "Generates SOPs & manages docs",
        "Pre-fills applications & portals"
      ]
    },
    {
      id: "3",
      title: "You stay in control",
      bullets: [
        "Consultants review & approve",
        "Submit faster with fewer errors",
        "Real-time status tracking"
      ]
    }
  ];

  return (
    // Reduced vertical padding: py-8 on mobile, py-12 on desktop
    <section className="py-8 md:py-12 bg-[#F4F2F1] dark:bg-black font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CENTERED HEADER - Reduced margin bottom */}
        <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
            How it works in 3 simple steps
          </h2>
        </div>

        {/* FLIP CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step) => (
            <div key={step.id} className="group h-[380px] md:h-[420px] w-full [perspective:1000px] cursor-pointer">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* --- FRONT FACE --- */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-br from-blue-600 to-emerald-500 p-8 flex flex-col justify-between [backface-visibility:hidden] shadow-xl">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                      <StepIcon id={step.id} />
                    </div>
                    <span className="text-6xl font-bold text-white/20">0{step.id}</span>
                  </div>

                  <div className="w-full">
                    <h3 className="text-lg sm:text-xl md:text-[1.3rem] lg:text-2xl font-bold text-white leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                      {step.title}
                    </h3>
                    <div className="w-12 h-1 bg-white/40 mt-6 rounded-full"></div>
                  </div>
                </div>

                {/* --- BACK FACE --- */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-white dark:bg-[#141414] border border-gray-100 dark:border-white/10 p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-blue-600 dark:text-cyan-400 font-bold tracking-wider text-[10px] md:text-xs uppercase mb-1 block">Phase 0{step.id}</span>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white whitespace-nowrap">{step.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {step.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 text-emerald-500 shrink-0"><CheckIcon /></div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/10">
                     <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center uppercase tracking-widest font-semibold">Hover to Flip</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;