import React from 'react';

const Comparison = () => {
  const leftFeatures = [
    "Generic university and course selection",
    "Manual course comparison with no credential- or goal-based reasoning",
    "No clear guidelines for next step",
    "Manual Checklist for admission document follow-up",
    "Manual application form updates with repetitive data entry",
    "Manual application form submission",
    "No structured support—students write their Statement of Purpose (SOP)",
    "Manual communication, follow-ups, and deadline tracking",
    "Difficult to track or visualise each student’s status across stages"
  ];

  const rightFeatures = [
    "AI-driven Personalized university and course matching",
    "AI-driven comparison of courses with clear reasoning based on credentials and career goals",
    "AI-driven structured guidance with defined timelines at every stage",
    "Automated document tracking and follow-up",
    "Automated application form completion based on the checklist",
    "Automatic Form Submission",
    "Specialised SOP writing tailored to each student’s profile",
    "Preemptive, automated follow-ups, alerts, and communications",
    "Real-time dashboard offers clear visibility into student progress"
  ];

  return (
    <section className="py-24 px-6 bg-[#F4F2F1] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gray-200 bg-white shadow-sm">
            <span className="text-xs font-bold text-gray-900 uppercase tracking-widest">Comparison</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            What Sets Us Apart
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover how we outperform other platforms with superior features, better performance, and unmatched ease of use.
          </p>
        </div>

        {/* --- Comparison Grid --- */}
        <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-16 md:gap-[120px] mb-16 max-w-6xl mx-auto">
          
          {/* === THE CENTRAL CONNECTOR (Absolute) === */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 z-30 flex-col items-center w-[120px] pointer-events-none">
             
             {/* V/S Pill */}
             <div className="relative z-40 mt-[60px]"> 
               <div className="bg-[#0A0A0A] text-white text-[15px] font-medium rounded-full px-5 py-2.5 flex items-center justify-center shadow-lg min-w-[60px]">
                 V/S
               </div>
             </div>

             {/* Connector Lines SVG */}
             <svg className="absolute top-[95px] left-0 w-full h-[50px] overflow-visible" viewBox="0 0 120 50" fill="none">
                <defs>
                  <linearGradient id="rightPipeGrad" x1="60" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#22D3EE" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                {/* Left Line */}
                <path d="M 45 -5 L 45 25 Q 45 45 25 45 L -2 45" stroke="#D4D4D4" strokeWidth="2" fill="none" />
                {/* Right Line */}
                <path d="M 75 -5 L 75 25 Q 75 45 95 45 L 122 45" stroke="url(#rightPipeGrad)" strokeWidth="2" fill="none" />
             </svg>
          </div>

          {/* --- LEFT CARD (Competitors) --- */}
          <div className="flex-1 relative rounded-[32px] bg-[#EAE8E6] z-10">
            
            <div className="hidden md:block absolute -right-[6px] top-[134px] w-[12px] h-[12px] bg-white border-2 border-[#D4D4D4] rounded-full z-50"></div>

            <div className="flex flex-col h-full rounded-[32px] overflow-hidden">
                {/* Header Area */}
                <div className="h-[140px] flex items-center justify-center border-b border-gray-300/60 bg-[#EAE8E6]">
                <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wide">OTHER PLATFORMS</h3>
                </div>
                
                {/* List */}
                <div className="p-8 md:p-10 space-y-6 flex-grow bg-[#EAE8E6]">
                {leftFeatures.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-gray-500">
                    <svg className="w-5 h-5 flex-shrink-0 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-[15px] font-medium">{item}</span>
                    </div>
                ))}
                </div>
            </div>
          </div>

          {/* --- RIGHT CARD (Quantum) --- */}
          <div className="flex-1 relative rounded-[34px] p-[1.5px] bg-gradient-to-b from-blue-500 to-cyan-300 shadow-2xl shadow-cyan-100/40 z-10">
            
            <div className="hidden md:block absolute -left-[6px] top-[134px] w-[12px] h-[12px] bg-white border-[2.5px] border-cyan-400 rounded-full z-50"></div>

            <div className="bg-white w-full h-full rounded-[32px] overflow-hidden flex flex-col relative">
               {/* Header Area */}
               <div className="h-[140px] flex items-center justify-center border-b border-blue-100 relative bg-white">
                 <div className="flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                   </div>
                   <span className="text-xl font-bold text-blue-900 tracking-tight">Quantum <span className="text-cyan-500">Immigration</span></span>
                 </div>
               </div>
               
               {/* List */}
               <div className="p-8 md:p-10 space-y-6 flex-grow bg-white">
                  {rightFeatures.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-lg bg-[#111] flex items-center justify-center flex-shrink-0 shadow-md shadow-gray-300 transition-transform hover:scale-110">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[15px] font-semibold text-gray-800">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

        </div>

        {/* --- CTA Button --- */}
        <div className="flex justify-center">
          <button className="bg-[#111] text-white text-base font-medium py-4 px-10 rounded-xl hover:bg-black transition-all hover:-translate-y-1 shadow-xl shadow-gray-200">
            Start 7-day free trial
          </button>
        </div>

      </div>
    </section>
  );
};

export default Comparison;