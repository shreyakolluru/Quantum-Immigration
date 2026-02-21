'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
      images: ["/feature-agent.png", "/feature-agent.png", "/feature-agent.png", "/feature-agent.png"],
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
      images: ["/feature 1.png", "/feature 1.png", "/feature 1.png", "/feature 1.png"],
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
      images: ["/feature 2.png", "/feature 2.png", "/feature 2.png", "/feature 2.png"],
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
      images: ["/feature-prefill.png", "/feature-prefill.png", "/feature-prefill.png", "/feature-prefill.png"],
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
      images: ["/feature-sop.png", "/feature-sop.png", "/feature-sop.png", "/feature-sop.png"],
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
      images: ["/feature-visa.png", "/feature-visa.png", "/feature-visa.png", "/feature-visa.png"],
    },
  ];

  // Different entrance animation per card (index 0–5)
  const imageAnimations = [
    { initial: { opacity: 0, x: -48 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    { initial: { opacity: 0, x: 48 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    { initial: { opacity: 0, filter: 'blur(12px)' }, whileInView: { opacity: 1, filter: 'blur(0px)' }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    { initial: { opacity: 0, scale: 0.92 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    { initial: { opacity: 0, x: 36, y: 20 }, whileInView: { opacity: 1, x: 0, y: 0 }, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  ];

  const timelineRef = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [tabs]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-[#F4F2F1] dark:bg-black font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* PROBLEM HOOK */}
        <div className="w-full pb-12 md:pb-20 text-center">
          <TextWheel />
        </div>

        {/* TIMELINE: 2 columns — text left, image right; scroll line on left edge */}
        <div className="w-full" ref={containerRef}>
          <div ref={timelineRef} className="relative max-w-7xl mx-auto pb-20 pl-10 md:pl-12">
            {tabs.map((tab, index) => (
              <div
                key={tab.value}
                className="relative flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-24 items-start pt-16 md:pt-24 first:pt-10 md:first:pt-16"
              >
                {/* Circle on timeline bar */}
                <div className="absolute -left-[3.75rem] md:-left-[4.25rem] top-0 w-10 h-10 rounded-full bg-[#F4F2F1] dark:bg-black flex items-center justify-center border border-gray-200 dark:border-white/10 z-10">
                  <div className="h-4 w-4 rounded-full bg-white border-2 border-blue-400" />
                </div>
                {/* TEXT COLUMN (left) */}
                <div className="flex-1 w-full max-w-xl text-left">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="text-[10px] md:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      {tab.badge}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-gray-800 dark:text-white leading-snug mb-5 md:mb-6">
                    {tab.title}
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 md:gap-4 mb-6 md:mb-8">
                    {tab.points.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-left">
                        <div className="flex-shrink-0 mt-1 w-4 h-4 md:w-5 md:h-5 rounded-md bg-gradient-to-br from-blue-500 to-emerald-500 p-[1.5px]">
                          <div className="w-full h-full rounded-[5px] bg-[#111111] flex items-center justify-center">
                            <svg className="w-2.5 md:w-3 h-2.5 md:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                          <span className="font-medium text-gray-800 dark:text-gray-200">{item.bold}</span> {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full md:w-fit bg-black dark:bg-white dark:text-black text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-all active:scale-[0.98]">
                    {tab.buttonText} →
                  </button>
                </div>
                {/* IMAGE COLUMN (right) — 4 images in 2x2 grid per module */}
                <div className="flex-1 w-full min-w-0">
                  <div className="bg-white dark:bg-[#141414] rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 dark:border-white/10 overflow-hidden">
                    <motion.div
                      className="grid grid-cols-2 gap-2 md:gap-3"
                      initial={imageAnimations[index]?.initial}
                      whileInView={imageAnimations[index]?.whileInView}
                      viewport={{ once: true, margin: '-60px 0px -60px 0px' }}
                      transition={imageAnimations[index]?.transition}
                    >
                      {(tab.images || []).slice(0, 4).map((src, imgIdx) => (
                        <div
                          key={imgIdx}
                          className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] aspect-[4/3] min-h-[120px] md:min-h-[160px]"
                        >
                          <img
                            src={src}
                            alt={`${tab.label} ${imgIdx + 1}`}
                            className="w-full h-full object-cover object-top block"
                          />
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
            {/* Animated vertical line */}
            <div
              style={{ height: height + 'px' }}
              className="absolute left-0 top-0 overflow-hidden w-1 bg-gradient-to-b from-transparent from-[0%] via-gray-200 dark:via-gray-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-1 bg-gradient-to-t from-blue-500 via-emerald-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-40 w-full">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Features;