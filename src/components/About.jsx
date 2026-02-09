'use client';

import React from 'react';

const About = () => {
  return (
    <section className="py-24 px-6 bg-[#F4F2F1] font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* --- MAIN CARD --- */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 flex flex-col lg:flex-row gap-12 lg:items-center shadow-sm">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            {/* Tag */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#F4F2F1]">
              <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">About Us</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.15] tracking-tight">
              Quantum Immigration
            </h2>
            
            {/* Description */}
            <div className="space-y-4">
                <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                  Quantum Immigration was built to eliminate manual work and give more power to immigration consultants, along with world class AI experience to students.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                  Built with experienced consultants then funded by High Volt Analytics LLC.
                </p>
            </div>
            
            {/* Buttons & Rating */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
              <button className="bg-[#111] text-white font-medium py-3.5 px-8 rounded-xl hover:bg-black transition-transform hover:-translate-y-0.5 duration-200">
                Contact Us
              </button>
              
              <div className="flex items-center gap-3">
                 {/* Google 'G' Icon */}
                 <svg className="w-5 h-5 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/>
                 </svg>
                 {/* Stars */}
                 <div className="flex text-black gap-0.5">
                   {[1,2,3,4].map(i => (
                     <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                   ))}
                   <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                 </div>
                 <span className="text-xs text-gray-900 font-bold">4.9 <span className="font-medium text-gray-500">Average user rating</span></span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full relative">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden grayscale">
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                   alt="Team" 
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 />
              </div>
          </div>
        </div>

        {/* --- STATS GRID --- */}
        {/* Keeps original stats as requested */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           
           {/* Stat 1: Downloads */}
           <StatCard 
             number="65k+" 
             label="Downloads"
             icon={
               <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                 <rect x="7" y="4" width="10" height="16" rx="2" />
                 <path d="M11 17h2" />
               </svg>
             }
           />

           {/* Stat 2: Active Users (App Store) */}
           <StatCard 
             number="24k+" 
             label="Active Users"
             icon={
               <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 22h20L12 2zm0 4l-5 11h10L12 6z" />
                 <path strokeLinecap="round" strokeLinejoin="round" d="M7 16h10" />
               </svg>
             }
           />

           {/* Stat 3: Active Users (Play Store) */}
           <StatCard 
             number="22k+" 
             label="Active Users"
             icon={
               <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M5 3.8L5.8 4.6L16.2 15L17.8 14L5 3.8ZM5.2 3.5L16.8 15.6L19 13.5L5.2 3.5ZM4 4.5V19.5L11.5 12L4 4.5ZM5.5 20.5L16.5 9.5L18.5 10.5L5.5 20.5Z" />
                 <path d="M3 3v18l15-9L3 3z" />
               </svg>
             }
           />

           {/* Stat 4: Client Satisfaction */}
           <StatCard 
             number="98%" 
             label="Client Satisfaction"
             icon={
               <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363 1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
               </svg>
             }
           />

        </div>

      </div>
    </section>
  );
};

// Sub-component for individual stats to handle the line effect cleanly
const StatCard = ({ number, label, icon }) => {
  return (
    <div className="bg-[#EAE8E6] rounded-[24px] py-10 px-6 text-center relative overflow-hidden group hover:shadow-md transition-shadow">
      
      {/* Horizontal Line Decoration */}
      <div className="absolute top-[3.2rem] left-0 w-full flex items-center justify-center gap-4 opacity-30">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-400 to-gray-400"></div>
        <div className="w-24"></div> {/* Gap for icon */}
        <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-gray-400 to-gray-400"></div>
      </div>

      {/* Dots on line */}
      <div className="absolute top-[3.15rem] left-[20%] w-1 h-1 bg-white rounded-full"></div>
      <div className="absolute top-[3.15rem] right-[20%] w-1 h-1 bg-white rounded-full"></div>

      {/* Icon Wrapper with Gradient Border */}
      <div className="relative z-10 mx-auto mb-6 w-12 h-12 p-[2px] bg-gradient-to-br from-blue-400 to-green-400 rounded-xl shadow-lg">
         <div className="w-full h-full bg-[#1A1A1A] rounded-xl flex items-center justify-center">
             {icon}
         </div>
      </div>
      
      {/* Content */}
      <h3 className="text-3xl font-bold text-gray-900 mb-1 tracking-tight">{number}</h3>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
    </div>
  )
}

export default About;