import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [activePlan, setActivePlan] = useState('Growth');
  const [isDesktop, setIsDesktop] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mq.matches);
    const fn = () => setIsDesktop(mq.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);

  const handleToggle = () => {
    const next = !isYearly;
    setIsYearly(next);
    if (next && toggleRef.current) {
      const rect = toggleRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: x / window.innerWidth, y: y / window.innerHeight },
        colors: ['#06b6d4', '#22d3ee', '#0ea5e9', '#f4f2f1', '#111'],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ['circle'],
      });
    }
  };

  const plans = [
    {
      name: 'Starter',
      description: 'Best for solo consultants looking to automate their initial workflow.',
      iconColor: 'from-blue-300 to-blue-500',
      features: [
        'Module 1 (Immi Agent)',
        'Basic dashboard',
        'Calendar booking integration',
        'Standard Support'
      ]
    },
    {
      name: 'Growth',
      description: 'Best for teams handling volume and requiring document automation.',
      iconColor: 'from-cyan-300 to-cyan-500',
      features: [
        'Modules 1–3',
        'Document automation',
        'Automated reminders',
        'Consultant review workflow',
        'Priority email support'
      ]
    },
    {
      name: 'Pro Suite',
      description: 'Best for end-to-end operations and full-stack immigration management.',
      iconColor: 'from-purple-300 to-purple-500',
      features: [
        'Modules 1–6 (Full Quantum stack)',
        'Application + visa portal prefill',
        'SOP generation',
        'Admin controls + roles',
        'Dedicated account manager'
      ]
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 bg-[#F4F2F1] dark:bg-black font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#141414] shadow-sm">
            <span className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest">Pricing & Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Choose your rollout
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Flexible tiers designed to scale with your consultancy, from solo practice to global operations.
          </p>

          {/* Toggle Switch — confetti when switching to yearly */}
          <div className="flex items-center justify-center gap-4 mt-8 md:mt-10">
            <span className={`text-sm font-semibold ${!isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>Billed Monthly</span>
            <button
              ref={toggleRef}
              onClick={handleToggle}
              className="w-12 h-7 bg-black dark:bg-white rounded-full p-1 transition-colors duration-200 ease-in-out relative cursor-pointer focus:outline-none"
            >
              <div className={`w-5 h-5 bg-white dark:bg-[#141414] rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${isYearly ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-semibold ${isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>Billed yearly</span>
          </div>
        </div>

        {/* --- Pricing Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {plans.map((plan, index) => {
            const isActive = activePlan === plan.name;
            const isCenter = index === 1;

            return (
              <motion.div
                key={plan.name}
                initial={{ y: 50, opacity: 1 }}
                whileInView={
                  isDesktop
                    ? {
                        y: isCenter ? -20 : 0,
                        opacity: 1,
                        x: index === 2 ? -30 : index === 0 ? 30 : 0,
                        scale: index === 0 || index === 2 ? 0.94 : 1,
                      }
                    : { y: 0, opacity: 1 }
                }
                viewport={{ once: true, margin: '-40px 0px' }}
                transition={{
                  duration: 1.6,
                  type: 'spring',
                  stiffness: 100,
                  damping: 30,
                  delay: 0.4,
                  opacity: { duration: 0.5 },
                }}
                className={`flex flex-col ${index === 0 ? 'origin-right' : index === 2 ? 'origin-left' : ''} ${!isCenter ? 'md:mt-5' : ''}`}
              >
                <div
                  onClick={() => setActivePlan(plan.name)}
                  className={`relative rounded-[34px] transition-all duration-300 cursor-pointer group flex flex-col ${
                    isActive
                      ? 'p-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-cyan-500 shadow-2xl shadow-cyan-100/50 md:translate-y-[-4px]'
                      : 'p-[2px] bg-transparent md:hover:translate-y-[-4px]'
                  }`}
                >
                  <div className="flex flex-col h-full rounded-[32px] overflow-hidden bg-[#EAE8E6] dark:bg-[#141414]">
                  {/* Top White Section */}
                  <div className="bg-white dark:bg-[#1a1a1a] p-6 sm:p-8 pb-10 rounded-[32px] shadow-sm relative z-10">
                    <div className={`w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br ${plan.iconColor} blur-[2px] opacity-80`} />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-8 min-h-[40px]">{plan.description}</p>
                    <div className="mb-8 h-8 md:h-12 border-t border-gray-50 dark:border-white/10 mt-4" />
                    <button
                      className={`w-full font-bold py-3.5 px-4 rounded-xl transition-colors duration-300 ${
                        isActive
                          ? 'bg-black dark:bg-white dark:text-black text-white hover:bg-gray-800 dark:hover:bg-gray-200'
                          : 'bg-[#111] dark:bg-[#1a1a1a] text-white dark:text-white hover:bg-black dark:hover:bg-[#252525]'
                      }`}
                    >
                      Buy {plan.name}
                    </button>
                  </div>
                  
                  {/* Bottom Beige Section */}
                  <div className="p-6 sm:p-8 flex-grow">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-4 h-4 mt-1 text-gray-900 dark:text-gray-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300 text-[15px] font-medium leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- Startup Program Banner --- */}
        <div className="mb-8">
          <div className="bg-[#EAE8E6] dark:bg-[#141414] rounded-2xl px-6 md:px-8 py-6 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/50 dark:border-white/10 shadow-sm">
            <p className="text-gray-900 dark:text-white font-medium text-base md:text-[17px] text-center md:text-left">
              Need custom workflows or enterprise? – <span className="text-cyan-600 dark:text-cyan-400 font-semibold cursor-pointer hover:underline">Talk to us.</span>
            </p>
            <button className="bg-white dark:bg-[#1a1a1a] hover:bg-gray-50 dark:hover:bg-[#252525] text-gray-900 dark:text-white font-bold py-2.5 px-6 rounded-lg shadow-sm transition-colors whitespace-nowrap text-sm w-full md:w-auto">
              Apply Now
            </button>
          </div>

          {/* New Match Content Trust Tokens */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-8 text-sm font-medium text-gray-900 dark:text-gray-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-800 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Lead capture + meeting booking </span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-white/20 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-800 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>University application prefill</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-white/20 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-800 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Personalized course matching with reasoning </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;