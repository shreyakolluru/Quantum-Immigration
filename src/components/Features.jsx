'use client';

import React, { useState, useEffect, useRef } from 'react';
import * as Tabs from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserPlus, 
  FileSearch, 
  ClipboardCheck, 
  Send, 
  Sparkles, 
  ShieldCheck
} from "lucide-react";

import TextWheel from './TextWheel'; 
import Stats from './Stats';

const Features = () => {
  const tabs = [
    {
      value: "immi-agent",
      icon: <UserPlus className="h-4 w-4" />,
      label: "Immi Agent",
      badge: "Module 1 — Quantum Immi Agent",
      title: "Your 24/7 website receptionist.",
      points: [
        { bold: "Greets visitors instantly", text: "and answers FAQs conversationally" },
        { bold: "Captures and qualifies", text: "high-intent leads through custom fields" },
        { bold: "Auto-books meetings", text: "directly to your calendar" },
        { bold: "Prospect Fact Sheets", text: "generated automatically before calls" },
      ],
      buttonText: "Buy Module 1",
      imageSrc: "/feature-agent.png",
    },
    {
      value: "course-match",
      icon: <FileSearch className="h-4 w-4" />,
      label: "Course Match",
      badge: "Module 2 — Quantum Course Match",
      title: "Personalized shortlists with Match %.",
      points: [
        { bold: "Matches by profile", text: "career goals, and specific budget" },
        { bold: "Pathway Alignment", text: "aligns choice with labour market demand" },
        { bold: "Trust Reasoning", text: "provides 'Why this course' logic" },
        { bold: "Ranked Shortlists", text: "with clear percentage match scores" }
      ],
      buttonText: "Buy Module 2",
      imageSrc: "/feature 1.png",
    },
    {
      value: "doc-manager",
      icon: <ClipboardCheck className="h-4 w-4" />,
      label: "Doc Manager",
      badge: "Module 3 — Document Management",
      title: "Documents arrive messy. Your process shouldn’t.",
      points: [
        { bold: "Automated Intake", text: "handles uploads and email intake" },
        { bold: "Checklist Status", text: "real-time updates for received or verified" },
        { bold: "Smart Reminders", text: "automatically alerts clients of missing items" },
        { bold: "Consolidated Packs", text: "generates form sets for confirmation" }
      ],
      buttonText: "Buy Module 3",
      imageSrc: "/feature 2.png",
    },
    {
      value: "prefill",
      icon: <Send className="h-4 w-4" />,
      label: "App Prefill",
      badge: "Module 4 — Application Prefill",
      title: "Apply to multiple universities faster.",
      points: [
        { bold: "Eliminate Retyping", text: "stop entering the same data into multiple portals" },
        { bold: "Auto-prefill", text: "uses admission data to populate portal fields" },
        { bold: "Error Reduction", text: "removes manual mistakes from typing" },
        { bold: "Maintain Control", text: "consultants review everything before submission" }
      ],
      buttonText: "Buy Module 4",
      imageSrc: "/feature-prefill.png",
    },
    {
      value: "sop-gen",
      icon: <Sparkles className="h-4 w-4" />,
      label: "SOP Generator",
      badge: "Module 5 — SOP Generation",
      title: "Specific, grounded, and consistent SOPs.",
      points: [
        { bold: "Fix Common Issues", text: "eliminates generic templates and weak logic" },
        { bold: "Profile Alignment", text: "drafts SOPs based on student profile" },
        { bold: "Best-practice Structure", text: "provides guidance so students can refine" },
        { bold: "Stronger Credibility", text: "includes key grounding facts" }
      ],
      buttonText: "Buy Module 5",
      imageSrc: "/feature-sop.png",
    },
    {
      value: "visa-manager",
      icon: <ShieldCheck className="h-4 w-4" />,
      label: "Visa Manager",
      badge: "Module 6 — Visa Manager",
      title: "End-to-end visa processing.",
      points: [
        { bold: "Checklist Management", text: "visa-specific automated tracking" },
        { bold: "Master Form", text: "confirmation sent to client before lodgement" },
        { bold: "Portal Prefill", text: "automatically populates the visa portal" },
        { bold: "Real-time Alerts", text: "notifications for consultants" }
      ],
      buttonText: "Buy Module 6",
      imageSrc: "/feature-visa.png",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const ROTATION_TIME = 10000; 
  const timerRef = useRef(null);
  const isPaused = useRef(false);

  const startRotation = () => {
    stopRotation();
    timerRef.current = setInterval(() => {
      if (!isPaused.current) {
        setActiveTab((currentTab) => {
          const currentIndex = tabs.findIndex((tab) => tab.value === currentTab);
          const nextIndex = (currentIndex + 1) % tabs.length;
          return tabs[nextIndex].value;
        });
      }
    }, ROTATION_TIME);
  };

  const stopRotation = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startRotation();
    return () => stopRotation();
  }, [tabs]);

  const activeTabData = tabs.find((t) => t.value === activeTab);

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-[#F4F2F1] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* PROBLEM HOOK */}
        <div className="w-full pb-12 md:pb-20 text-center">
          <TextWheel />
        </div>

        <Tabs.Root 
          value={activeTab} 
          onValueChange={(val) => {
            setActiveTab(val);
            startRotation();
          }} 
          className="w-full"
        >
          {/* MOBILE SCROLLABLE TABS */}
          <div className="relative w-full mb-12 md:mb-24">
            <Tabs.List className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto no-scrollbar scroll-smooth px-2 pb-4 
              [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:[mask-image:none]">
              {tabs.map((tab) => (
                <Tabs.Trigger
                  key={tab.value}
                  value={tab.value}
                  className="group relative flex-shrink-0 p-[1.5px] rounded-lg transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-400 data-[state=active]:to-blue-500 focus:outline-none"
                >
                  <div className="flex items-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-4 rounded-[7px] text-xs md:text-sm font-bold bg-white text-gray-500 transition-all 
                    group-data-[state=active]:text-gray-900 whitespace-nowrap">
                    <span className="group-data-[state=active]:text-blue-500">{tab.icon}</span>
                    {tab.label}
                  </div>
                  {/* Progress bar line removed from here */}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </div>

          {/* CONTENT AREA WITH HOVER PAUSE */}
          <div 
            className="w-full min-h-fit md:min-h-[600px] relative"
            onMouseEnter={() => { isPaused.current = true; }}
            onMouseLeave={() => { isPaused.current = false; }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-24 items-center w-full"
              >
                {/* TEXT COLUMN */}
                <div className="flex-1 w-full max-w-xl order-2 lg:order-1 text-left">
                  <div className="inline-block px-3 py-1 mb-4 md:mb-6 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm">
                    <span className="text-[9px] md:text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                      {activeTabData?.badge}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-[1.2] md:leading-[1.1] mb-6 md:mb-10 tracking-tight">
                    {activeTabData?.title}
                  </h3>
                  
                  <ul className="grid grid-cols-1 gap-4 md:gap-5 mb-8 md:mb-10">
                    {activeTabData?.points.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 md:gap-4 text-left">
                        <div className="flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 p-[1.5px] md:p-[2px]">
                          <div className="w-full h-full rounded-lg bg-[#111111] flex items-center justify-center">
                            <svg className="w-3 md:w-3.5 h-3 md:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-gray-700 text-sm md:text-[16px] leading-relaxed font-medium">
                          <span className="font-bold text-gray-900">{item.bold}</span> {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full md:w-fit bg-black text-white px-7 py-3 rounded-lg font-bold text-sm md:text-base hover:bg-gray-800 transition-all shadow-md active:scale-95">
                    {activeTabData?.buttonText} →
                  </button>
                </div>

                {/* IMAGE COLUMN */}
                <div className="flex-1 w-full relative order-1 lg:order-2">
                  <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl border border-gray-100/50 flex items-center justify-center">
                    <div className="relative z-10 w-full rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white h-[280px] sm:h-[400px] md:h-[500px]">
                      <img 
                        src={activeTabData?.imageSrc} 
                        alt={activeTabData?.label} 
                        className="w-full h-full object-cover object-top block" 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Tabs.Root>

        <div className="mt-24 md:mt-40 w-full">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Features;