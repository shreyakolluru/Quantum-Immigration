'use client';

import React from 'react';
import { MousePointerClick, ShieldCheck, Zap, TrendingUp, Eraser } from 'lucide-react';

const Stats = () => {
  const outcomes = [
    {
      icon: <MousePointerClick className="w-5 h-5 text-white" />,
      metric: "3x More",
      label: "Leads Captured",
      subtext: "From existing traffic"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      metric: "100%",
      label: "Student Trust",
      subtext: "Quality SOPs & Matching"
    },
    {
      icon: <Eraser className="w-5 h-5 text-white" />,
      metric: "Zero",
      label: "Manual Work",
      subtext: "Sorting & Reminders"
    },
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      metric: "70% Faster",
      label: "Turnaround",
      subtext: "Portal Prefill Speed"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-white" />,
      metric: "Scale",
      label: "Without Hiring",
      subtext: "No extra headcount"
    }
  ];

  return (
    <section className="pb-24 pt-0 px-6 bg-[#F4F2F1] font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          
          {/* Connecting Line: Only visible on large desktops where items are in one row */}
          <div className="absolute top-8 left-10 right-10 h-[1px] bg-gray-200 hidden lg:block" />

          {/* GRID LOGIC:
              - grid-cols-1: Mobile stacks vertically.
              - sm:grid-cols-2: Tablet (like your 840px view) shows 2 per row.
              - lg:grid-cols-5: Desktop shows all 5 in one row.
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-8 relative z-10">
            
            {outcomes.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center group ${
                  // On tablets (sm), make the 5th item center itself across both columns
                  idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Icon Container */}
                <div className="h-16 flex items-center justify-center bg-[#F4F2F1] px-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 p-[2px] shadow-lg shadow-blue-500/10 transition-transform duration-300 group-hover:scale-110">
                    <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Metric & Labels */}
                <h3 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
                  {item.metric}
                </h3>
                <div className="space-y-1">
                  <p className="text-gray-900 font-bold text-sm uppercase tracking-wider leading-tight">
                    {item.label}
                  </p>
                  <p className="text-gray-500 font-medium text-xs md:text-sm">
                    {item.subtext}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;