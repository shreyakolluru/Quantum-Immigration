'use client';

import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Is this just a chatbot?",
      answer: "No—Quantum is a complete workflow system. It handles lead capture, qualification, meeting booking, course matching, document automation, SOP generation, and portal prefill in one unified platform."
    },
    {
      question: "Does it work for teams?",
      answer: "Yes. Quantum is built for collaboration with role-based access controls and centralized dashboard tracking, making it perfectly suited for team-based environments."
    },
    {
      question: "Do we lose control of submissions?",
      answer: "No. You maintain full oversight. You can configure the system to require mandatory consultant review and approval before any final submission steps are executed."
    },
    {
      question: "How fast can we start?",
      answer: "You can start almost immediately. We recommend starting with Module 1 in a lightweight setup, then expanding your automation capabilities module-by-module as your team scales."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#F4F2F1] dark:bg-black font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 md:mb-6 rounded-full bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10">
            <span className="text-[10px] md:text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide">FAQs</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* --- Unified FAQ Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-4 mb-12 md:mb-20 items-start">
          {faqData.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 dark:border-white/10 h-full">
              <div
                onClick={() => toggleFaq(idx)}
                className="flex items-start justify-between py-5 md:py-6 cursor-pointer group hover:bg-black/5 dark:hover:bg-white/5 transition-colors px-2 rounded-lg"
              >
                <span className="text-sm md:text-base font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-900 dark:text-gray-200 flex-shrink-0 mt-0.5 transition-transform duration-300 ${activeIndex === idx ? 'rotate-45' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${activeIndex === idx ? 'max-h-96 pb-6 px-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Bottom Banner (Restored Sleek Structure with Updated Copy) --- */}
        <div className="bg-white dark:bg-[#141414] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-gray-100 dark:border-white/10">
          <div className="text-center md:text-left">
            <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1">
              Ready to stop leaking leads and drowning in admin?
            </h3>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
              Turn your process into a system that converts, organizes, and lodges faster.
            </p>
          </div>
          <button className="w-full md:w-auto bg-[#111] dark:bg-white dark:text-black text-white text-sm font-bold py-3.5 px-8 rounded-lg hover:bg-black dark:hover:bg-gray-200 transition-all hover:-translate-y-0.5 whitespace-nowrap active:scale-95">
            Buy Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;