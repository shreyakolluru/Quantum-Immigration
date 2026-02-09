'use client';

import React from 'react';

const Stats = () => {
  return (
    // REDUCED GAP: Changed py-24 to pb-24 pt-0
    <section className="pb-24 pt-0 px-6 bg-[#F4F2F1] font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="absolute top-8 left-4 right-4 h-[1px] bg-gray-200 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            
            {/* 1. Time Saved to Scale Business */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center bg-[#F4F2F1] px-4 mb-4">
                 <div className="flex -space-x-3">
                    <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                    <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                    <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                 </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">80%+</h3>
              <p className="text-gray-500 font-medium">Time Saved to Scale Business</p>
            </div>

            {/* 2. Time Saved on Per Student */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center bg-[#F4F2F1] px-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 p-[2px] shadow-lg shadow-blue-500/20">
                  <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">8–12 Hrs</h3>
              <p className="text-gray-500 font-medium">Time Saved on Per Student</p>
            </div>

            {/* 3. Unified Communication */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center bg-[#F4F2F1] px-4 mb-4">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 p-[2px] shadow-lg shadow-blue-500/20">
                  <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
              </div>
              {/* Forced 2 lines for "Unified Communication" as requested */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                Unified <br/> Communication
              </h3>
              <p className="text-gray-500 font-medium text-sm">WhatsApp / Chat / Email</p>
            </div>

            {/* 4. Better Student Experience */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center bg-[#F4F2F1] px-4 mb-4">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 p-[2px] shadow-lg shadow-blue-500/20">
                  <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">100% Better</h3>
              <p className="text-gray-500 font-medium">Student Experience</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;