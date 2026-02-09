import React, { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [activePlan, setActivePlan] = useState('Pro');

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for small teams and startups.',
      price: '10',
      iconColor: 'from-blue-300 to-blue-500',
      features: ['Task Management', 'AI Summary', 'Progress Tracking', 'Smart Labels']
    },
    {
      name: 'Pro',
      description: 'Ideal for growing teams and projects.',
      price: '25',
      iconColor: 'from-cyan-300 to-cyan-500',
      features: [
        'Everything in Basic +', 
        'Team Collaboration', 
        'Bulk Actions', 
        '2-way Translation',
        'Advanced Reporting',
        'Customizable Dashboards',
        'Priority Support'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Built for large organizations needs.',
      price: '39',
      iconColor: 'from-purple-300 to-purple-500',
      features: [
        'Everything in Basic +', 
        'SAML sso', 
        'Dedicated Account Manager', 
        'Enterprise Integrations',
        'Data Analytics',
        'Security Enhancements',
        'Custom Workflows'
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F4F2F1] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gray-200 bg-white shadow-sm">
            <span className="text-xs font-bold text-gray-900 uppercase tracking-widest">Pricing & Plans</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Affordable Pricing Plans
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Flexible, transparent pricing to support your team’s productivity and growth at every stage.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`text-sm font-semibold ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Billed Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-12 h-7 bg-black rounded-full p-1 transition-colors duration-200 ease-in-out relative cursor-pointer"
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${isYearly ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-semibold ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Billed yearly</span>
          </div>
        </div>

        {/* --- Pricing Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const isActive = activePlan === plan.name;
            
            return (
              // Outer div for the gradient border effect (Bottom heavy)
              <div 
                key={plan.name}
                onClick={() => setActivePlan(plan.name)}
                className={`relative rounded-[34px] transition-all duration-300 cursor-pointer group ${
                  isActive 
                    ? 'p-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-cyan-500 shadow-2xl shadow-cyan-100/50 translate-y-[-4px]' 
                    : 'p-[2px] bg-transparent hover:translate-y-[-4px]'
                }`}
              >
                {/* Inner Card Body with Beige Background */}
                <div className="flex flex-col h-full rounded-[32px] overflow-hidden bg-[#EAE8E6]">
                  
                  {/* Top White Section with Rounded Corners */}
                  <div className="bg-white p-8 pb-10 rounded-[32px] shadow-sm relative z-10">
                    {/* Dynamic Icon */}
                    <div className={`w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br ${plan.iconColor} blur-[2px] opacity-80`} />
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-500 font-medium mb-8 min-h-[40px]">{plan.description}</p>
                    
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-500 font-medium text-sm">per member / month</span>
                    </div>

                    <button 
                      className={`w-full font-medium py-3.5 px-4 rounded-xl transition-colors duration-300 ${
                        isActive 
                          ? 'bg-black text-white hover:bg-gray-800' 
                          : 'bg-[#111] text-white hover:bg-black'
                      }`}
                    >
                      {plan.name === 'Basic' ? 'Get Started' : 'Start 7-day free trial'}
                    </button>
                  </div>
                  
                  {/* Bottom Beige Section */}
                  <div className="p-8 flex-grow">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-4 h-4 mt-1 text-gray-900 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-[15px] font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Startup Program Banner --- */}
        <div className="mb-8">
          {/* Main Banner Rect */}
          <div className="bg-[#EAE8E6] rounded-xl px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/50 shadow-sm">
            <p className="text-gray-900 font-medium text-[17px] text-center md:text-left">
              We just launched our startup program - <span className="text-cyan-500 font-semibold cursor-pointer hover:underline">Get 50% off</span>
            </p>
            <button className="bg-white hover:bg-gray-50 text-gray-900 font-bold py-2.5 px-6 rounded-lg shadow-sm transition-colors whitespace-nowrap text-sm">
              Apply Now
            </button>
          </div>

          {/* Bottom Features Info */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-6 text-sm font-medium text-gray-900">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Free 7 days trial</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300 hidden md:block"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300 hidden md:block"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
              <span>Data migration</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;