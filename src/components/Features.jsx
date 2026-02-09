import React from 'react';
import TextWheel from './TextWheel'; 
import Stats from './Stats';

const Features = () => {
  return (
    <section className="py-24 px-6 bg-[#F4F2F1] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* ==========================================
            SECTION 1: Not a CRM / Workflow Engine
            ========================================== */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="flex-1 max-w-xl pt-10">
            <div className="inline-block px-3 py-1 mb-6 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm">
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Not a CRM. Not a Chatbot.
              </span>
            </div>

            <h2 className="text-5xl font-semibold text-gray-900 leading-[1.1] mb-12">
              A Workflow Engine
            </h2>

            {/* Feature Icons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              <div className="group">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4 text-red-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">A Guided Path</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">Hand-holds students through the entire journey</p>
              </div>

              <div className="group">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-4 text-purple-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Automated Reminders</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">Automates follow-ups eliminates manual chasing</p>
              </div>

              <div className="group">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mb-4 text-green-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Prefills SOPs</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">Prepares applications and documents</p>
              </div>

              <div className="group">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-4 text-orange-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Decision-Focused Consulting</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">Lets consultants focus on advice not paperwork</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Feature Image 1 Mockup */}
          <div className="flex-1 w-full relative">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-gray-100/50 relative overflow-hidden h-full min-h-[500px] flex items-center justify-center">
              <div className="absolute top-8 right-8 bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-20">
                New Project
              </div>

              <div className="relative z-10 w-full rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
                <img src="/feature 1.png" alt="Feature 1" className="w-full h-auto block" />
              </div>

              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-gray-50 to-white -z-10"></div>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 2: Eliminate Manual Work
            ========================================== */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Timeline Mockup (Design Preserved + Fixed Coverage) */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-2xl p-4 shadow-xl shadow-gray-200/40">
                <div className="bg-[#111111] rounded-xl overflow-hidden shadow-2xl relative flex flex-col min-h-[520px]">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 border-b border-white/10 shrink-0 z-30 bg-[#111111]">
                        <div className="flex items-center gap-2">
                            <span className="text-white">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </span>
                            <span className="text-sm font-medium text-white">Course Recommendation</span>
                        </div>
                    </div>

                    {/* Timeline Body Area */}
                    <div className="relative flex-1 w-full overflow-hidden bg-[#F8F7F6]">
                        
                        {/* THE IMAGE: Covers space perfectly, aligned to top to show title */}
                        <img 
                          src="/feature 2.png" 
                          alt="Timeline" 
                          className="absolute inset-0 w-full h-full object-cover object-top" 
                        />

                        {/* RESTORED: Assign Task Overlay at the BOTTOM */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col-reverse items-center pointer-events-none">
                            <div className="bg-black text-white text-[11px] font-bold px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 mt-1 border border-white/20">
                                Top Courses
                                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>

                            <div className="h-10 w-px bg-red-500 shadow-lg"></div>
                            
                            <div className="bg-[#111] p-1.5 rounded-full flex gap-1 shadow-2xl border border-white/10">
                                <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-7 h-7 rounded-full border border-gray-700" />
                                <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-7 h-7 rounded-full border border-gray-700" />
                                <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-7 h-7 rounded-full border border-gray-700" />
                            </div>
                        </div>

                        {/* Gradient shade for bottom contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Text Content & Checklist */}
          <div className="flex-1 max-w-xl">
             <div className="inline-block px-3 py-1 mb-6 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm">
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Designed to Eliminate Manual Work
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.1] mb-8">
              Work Smarter with Quantum Immigration Powerful Features
            </h2>
            
            <ul className="space-y-5">
                {[
                    { bold: "Application and VISA Checklist Manager", text: "- validates, and tracks documents in one place with clear checklists" },
                    { bold: "AI Based Course Search", text: "- shows match percentages, and explains gaps" },
                    { bold: "AI-Driven Application Forms and SOP Generation", text: "that consultants review" },
                    { bold: "AI-Generated, Human-Approved", text: "- Real-time communication and meeting booking with consultants" }
                ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 p-[2px]">
                            <div className="w-full h-full rounded-lg bg-[#111111] flex items-center justify-center">
                                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                        </div>
                        <span className="text-gray-700 text-[16px] leading-relaxed font-medium">
                            <span className="font-bold text-gray-900">{item.bold}</span> {item.text}
                        </span>
                    </li>
                ))}
            </ul>

          </div>

        </div>

        <div className="pt-20 md:pt-32 pb-20">
             <TextWheel />
        </div>
        <Stats />

      </div>
    </section>
  );
};

export default Features;