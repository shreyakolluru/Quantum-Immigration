'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Simple SVG Checkmark Component
const CheckIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Process = () => {
  const steps = [
    {
      id: "1",
      title: "AI-Powered Lead Capture & Qualification",
      tag: "Step 1",
      tagColor: "bg-green-100 text-green-800",
      bullets: [
        "Stop manually entering leads",
        "AI captures student leads directly",
        "Creates a profile from website ads"
      ]
    },
    {
      id: "2",
      title: "Automated Course Matching & Eligibility",
      tag: "Step 2",
      tagColor: "bg-blue-100 text-blue-800",
      bullets: [
        "AI suggests best-fit courses",
        "Over 25+ options provided",
        "Provides clear reasoning"
      ]
    },
    {
      id: "3",
      title: "Smart Document & Application Automation",
      tag: "Step 3",
      tagColor: "bg-purple-100 text-purple-800",
      bullets: [
        "Scans certificates and resumes",
        "Pre-fill university forms",
        "Automates visa application forms"
      ]
    },
    {
      id: "4",
      title: "Centralised Communication & Real-Time Visibility",
      tag: "Step 4",
      tagColor: "bg-orange-100 text-orange-800",
      bullets: [
        "End the communication chaos",
        "Get a real-time dashboard",
        "Shows status of every case"
      ]
    },
    {
      id: "5",
      title: "Guided Revisions & Visa-Ready Outcomes",
      tag: "Step 5",
      tagColor: "bg-pink-100 text-pink-800",
      bullets: [
        "Consultants can request edits",
        "Complete applications",
        "Advisor-approved outcomes"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#F4F2F1] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CENTERED HEADER SECTION */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            How Quantum Immigration Transforms <br className="hidden md:block"/> Your Workflow in 5 Steps
          </h2>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          
          {/* CENTRAL VERTICAL LINE (Desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gray-300 hidden md:block"></div>
          
          {/* MOBILE VERTICAL LINE (Left aligned) */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-300 md:hidden"></div>

          <div className="flex flex-col gap-12 md:gap-24 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0; // Right side
              
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* CENTRAL NUMBER NODE */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-y-0 top-0 md:top-auto w-10 h-10 md:w-16 md:h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center z-20 shadow-sm">
                    <span className="text-lg md:text-xl font-bold text-gray-600">{step.id}</span>
                  </div>

                  {/* CONTENT CARD HALF */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-24' : 'md:pr-24'}`}>
                    <div 
                      className="relative p-8 rounded-3xl shadow-sm transition-all hover:shadow-md bg-gradient-to-br from-[#FFE4E1] via-[#FFFACD] to-[#E0F7FA] border border-white/60"
                    >
                      {/* CONNECTING LINE (Horizontal) */}
                      <div className={`hidden md:block absolute top-1/2 h-px w-24 bg-gray-300 
                        ${isEven ? '-left-24' : '-right-24'}
                      `}></div>

                      {/* Header Row: Title + Tag */}
                      <div className="flex flex-col gap-3 mb-6">
                        <div className="flex justify-between items-start">
                             <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider ${step.tagColor}`}>
                              {step.tag}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 leading-tight">{step.title}</h3>
                      </div>

                      {/* Checkbox List */}
                      <ul className="space-y-3">
                        {step.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-0.5 text-gray-900 shrink-0">
                              <CheckIcon />
                            </div>
                            <span className="text-sm font-medium text-gray-800 leading-relaxed">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                  {/* EMPTY HALF (For Layout Balance on Desktop) */}
                  <div className="hidden md:block w-1/2"></div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;