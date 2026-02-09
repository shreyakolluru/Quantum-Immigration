import React from 'react';

const InterestingFeatures = () => {
  const features = [
    {
      title: "Built for Consultants",
      description: "Built to support consultants and scale their business.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Human-Led AI",
      description: "Our AI works only where automation helps; critical decisions remain human-led.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Growth & Revenue",
      description: "Consultants save time and grow revenue while scaling operations.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Clarity and Ease",
      description: "Students move through the process with unmatched clarity and ease.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    }
  ];

  const bottomTags = [
    { name: "Guided Case Journeys", color: "bg-blue-400" }, 
    { name: "Workflow-First Platform", color: "bg-cyan-400" },
    { name: "Preparation Before Advisory", color: "bg-green-400" },
    { name: "Human-in-the-Loop Reviews", color: "bg-blue-500" },
    { name: "Compliance-Ready Workflows", color: "bg-purple-400" },
    { name: "End-to-End Orchestration", color: "bg-indigo-400" },
    { name: "Focus on Decisions", color: "bg-yellow-400" },
    { name: "Automation Over Admin", color: "bg-red-400" }
  ];

  return (
    <section className="bg-[#0A0A0A] px-6 pb-16 font-sans border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        {/* --- 4-Column Feature Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-white/10 border-b border-white/5">
          {features.map((feature, idx) => (
            <div key={idx} className="px-6 py-8 first:pl-0 last:pr-0">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* --- Divider with "Other Interesting Features" Pill --- */}
        <div className="relative py-10 flex items-center justify-center">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10"></div>
            
            <div className="relative bg-[#0A0A0A] px-3 z-10">
                <div className="p-[1.5px] rounded-full bg-gradient-to-r from-cyan-400 to-green-500 shadow-lg shadow-cyan-500/10">
                    <div className="relative rounded-full bg-[#1A1A1A] px-5 py-2">
                        <span className="text-xs font-semibold text-gray-300">Modern Immigration Consultancy</span>
                    </div>
                </div>
            </div>
        </div>

        {/* --- Bottom Tags Row --- */}
        <div className="flex flex-wrap justify-center gap-3 opacity-100">
            {bottomTags.map((tag, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#111] ${idx === 0 || idx === bottomTags.length - 1 ? 'opacity-40' : 'opacity-100'}`}
                >
                    <div className={`w-1.5 h-1.5 rounded-full ${tag.color}`}></div>
                    <span className="text-xs text-gray-300 font-medium">{tag.name}</span>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default InterestingFeatures;