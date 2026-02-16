import React from 'react';

const Comparison = () => {
  const leftFeatures = [
    "Generic university and course selection",
    "Manual course comparison with no goal-based reasoning",
    "No clear guidelines for next steps",
    "Manual Checklist for document follow-up",
    "Repetitive manual data entry",
    "Manual application form submission",
    "No structured support for SOPs",
    "Manual follow-ups and deadline tracking",
    "Difficult to track student status"
  ];

  const rightFeatures = [
    "AI-driven Personalized course matching",
    "AI-driven comparison with clear reasoning",
    "Structured guidance with defined timelines",
    "Automated document tracking & follow-up",
    "Automated application form completion",
    "Automatic Form Submission",
    "Specialised SOP writing tailored to profiles",
    "Preemptive automated alerts & communications",
    "Real-time dashboard for clear visibility"
  ];

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 bg-[#F4F2F1] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gray-200 bg-white shadow-sm">
            <span className="text-xs font-bold text-gray-900 uppercase tracking-widest">Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            What Sets Us Apart
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover how we outperform other platforms with superior features and unmatched ease of use.
          </p>
        </div>

        {/* --- Comparison Grid --- */}
        <div className="relative flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-[120px] mb-12 md:mb-16 max-w-6xl mx-auto">
          
          {/* === THE CENTRAL CONNECTOR === */}
          {/* Hidden on small screens, shown as a floating bridge on large screens */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 z-30 flex-col items-center w-[120px] pointer-events-none">
             <div className="relative z-40 mt-[60px]"> 
               <div className="bg-[#0A0A0A] text-white text-[15px] font-medium rounded-full px-5 py-2.5 flex items-center justify-center shadow-lg min-w-[60px]">
                 V/S
               </div>
             </div>

             <svg className="absolute top-[95px] left-0 w-full h-[50px] overflow-visible" viewBox="0 0 120 50" fill="none">
                <defs>
                  <linearGradient id="rightPipeGrad" x1="60" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#22D3EE" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                <path d="M 45 -5 L 45 25 Q 45 45 25 45 L -2 45" stroke="#D4D4D4" strokeWidth="2" fill="none" />
                <path d="M 75 -5 L 75 25 Q 75 45 95 45 L 122 45" stroke="url(#rightPipeGrad)" strokeWidth="2" fill="none" />
             </svg>
          </div>

          {/* Mobile V/S Badge (Only visible on small/medium screens) */}
          <div className="lg:hidden flex justify-center -mb-4 z-20">
             <div className="bg-[#0A0A0A] text-white text-xs font-bold rounded-full px-4 py-2 shadow-lg">
                V/S
             </div>
          </div>

          {/* --- LEFT CARD (Competitors) --- */}
          <div className="flex-1 relative rounded-[24px] md:rounded-[32px] bg-[#EAE8E6] z-10">
            {/* Connection Dot - hidden on mobile */}
            <div className="hidden lg:block absolute -right-[6px] top-[134px] w-[12px] h-[12px] bg-white border-2 border-[#D4D4D4] rounded-full z-50"></div>
            
            <div className="flex flex-col h-full rounded-[24px] md:rounded-[32px] overflow-hidden">
                <div className="h-[100px] md:h-[140px] flex items-center justify-center border-b border-gray-300/60 bg-[#EAE8E6]">
                  <h3 className="text-base md:text-xl font-bold text-gray-800 uppercase tracking-wide">OTHER PLATFORMS</h3>
                </div>
                <div className="p-6 md:p-10 space-y-4 md:space-y-6 flex-grow">
                {leftFeatures.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 md:gap-4 text-gray-500">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-sm md:text-[15px] font-medium leading-snug">{item}</span>
                    </div>
                ))}
                </div>
            </div>
          </div>

          {/* --- RIGHT CARD (Quantum) --- */}
          <div className="flex-1 relative rounded-[26px] md:rounded-[34px] p-[1.5px] bg-gradient-to-b from-blue-500 to-cyan-300 shadow-2xl shadow-cyan-100/40 z-10">
            {/* Connection Dot - hidden on mobile */}
            <div className="hidden lg:block absolute -left-[6px] top-[134px] w-[12px] h-[12px] bg-white border-[2.5px] border-cyan-400 rounded-full z-50"></div>
            
            <div className="bg-white w-full h-full rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col relative">
               <div className="h-[100px] md:h-[140px] flex items-center justify-center border-b border-blue-100 relative bg-white">
                 <div className="flex items-center gap-2 md:gap-3">
                   <img src="/favicon.png" alt="Quantum Icon" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                   <span className="text-lg md:text-xl font-bold text-blue-900 tracking-tight">Quantum <span className="text-cyan-500">Immigration</span></span>
                 </div>
               </div>
               
               <div className="p-6 md:p-10 space-y-4 md:space-y-6 flex-grow bg-white">
                  {rightFeatures.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 md:gap-4">
                      <div className="w-5 h-5 md:w-6 md:h-6 mt-0.5 rounded-md md:rounded-lg bg-[#111] flex items-center justify-center flex-shrink-0 shadow-md shadow-gray-300">
                        <svg className="w-3 md:w-3.5 h-3 md:h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-[15px] font-semibold text-gray-800 leading-snug">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

        </div>

        {/* --- CTA Button --- */}
        <div className="flex justify-center px-4">
          <button className="w-full sm:w-auto bg-[#111] text-white text-base font-medium py-4 px-10 rounded-xl hover:bg-black transition-all hover:-translate-y-1 shadow-xl shadow-gray-200">
            Book a Demo
          </button>
        </div>

      </div>
    </section>
  );
};

export default Comparison;