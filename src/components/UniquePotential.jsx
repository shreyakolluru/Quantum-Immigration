import React, { useState, useEffect } from 'react';

const UniquePotential = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: 0,
      title: "AI Course Discovery",
      color: "text-blue-600",
      iconBg: "bg-blue-100",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      headline: "Intelligent Matching Percentages",
      description: "Stop the manual search chaos. Our AI analyzes student profiles against thousands of programs to show match percentages and explains exactly why a course fits or what requirements are missing.",
      image: "matches.png"
    },
    {
      id: 1,
      title: "Deep Match Analysis",
      color: "text-purple-600",
      iconBg: "bg-purple-100",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      headline: "Evidence-Based Consulting",
      description: "Show students 25+ options with clear reasoning. Compare institutions like Victoria University and Australian College of Business Intelligence based on career goals and credentials.",
      image: "dash.png"
    },
    {
      id: 2,
      title: "Milestone Roadmap",
      color: "text-green-600",
      iconBg: "bg-green-100",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      headline: "Automated Workflow Engine",
      description: "Track progress through AI-generated checklists. From profile setup to SOP preparation, the engine hand-holds students through every high-priority task automatically.",
      image: "check.png"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F4F2F1] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gray-200 bg-white shadow-sm">
            <span className="text-xs font-bold text-gray-900 uppercase tracking-widest">Built for Scale</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Unleash Quantum Immigration’s <br /> Unique Potential for You
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Eliminate manual work and save 8-12 hours per student with an engine designed for modern immigration consultants.
          </p>
        </div>

        {/* Card Stack */}
        <div className="relative h-[700px] max-w-6xl mx-auto perspective-1000 mb-12">
            {features.map((item, index) => {
                let position = (index - activeIndex + 3) % 3;
                let zIndex, translateY, scale, opacity;

                if (position === 0) {
                    zIndex = 30;
                    translateY = '90px';
                    scale = 1;
                    opacity = 1;
                } else if (position === 2) {
                    zIndex = 20;
                    translateY = '45px';
                    scale = 0.96;
                    opacity = 0.6;
                } else {
                    zIndex = 10;
                    translateY = '0px';
                    scale = 0.92;
                    opacity = 0.4;
                }

                return (
                    <div 
                        key={item.id}
                        className="absolute top-0 left-0 right-0 w-full transition-all duration-700 ease-in-out cursor-pointer"
                        style={{
                            zIndex: zIndex,
                            transform: `translateY(${translateY}) scale(${scale})`,
                            opacity: opacity
                        }}
                        onClick={() => setActiveIndex(index)}
                    >
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-[600px] flex flex-col">
                            
                            {/* Card Header Tab */}
                            <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3 bg-white">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.iconBg} ${item.color}`}>
                                    {item.icon}
                                </div>
                                <span className="font-bold text-gray-800 text-base tracking-tight">{item.title}</span>
                            </div>

                            <div className="flex-1 flex flex-col lg:flex-row">
                                {/* Left Side: Text Content */}
                                <div className="p-10 lg:p-12 flex-1 flex flex-col justify-center relative z-10 bg-white">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                                        {item.headline}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-lg mb-8">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Right Side: Bleeding Image Layout */}
                                <div className="flex-1 relative bg-gray-50 overflow-hidden group">
                                    <div className="absolute top-8 left-8 w-[115%] h-[115%] shadow-2xl rounded-tl-xl border border-gray-200 bg-white overflow-hidden transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                                        
                                        {/* Browser Header Bar */}
                                        <div className="h-7 bg-gray-50 border-b border-gray-100 flex items-center gap-1.5 px-3">
                                            <div className="w-2 h-2 rounded-full bg-red-400 opacity-50"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-400 opacity-50"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-400 opacity-50"></div>
                                        </div>

                                        {/* IMAGE CROP FIX:
                                           - width-[125%]: Makes image wider than container
                                           - -ml-[22%]: Pulls image left by 22%, effectively hiding the sidebar
                                           - object-left-top: Anchors the crop from the top-left
                                        */}
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-[125%] h-full object-cover object-left-top -ml-[22%]" 
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default UniquePotential;