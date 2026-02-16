'use client';

import React from 'react';
import { MousePointerClick, ShieldCheck, Zap, TrendingUp, Eraser } from 'lucide-react';

const About = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-[#F4F2F1] font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* --- MAIN CARD --- */}
        <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center shadow-sm">
          
          {/* Left Content */}
          <div className="flex-1 space-y-6 md:space-y-8">
            {/* Tag */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#F4F2F1]">
              <span className="text-[10px] md:text-xs font-bold text-gray-900 uppercase tracking-wide">About Us</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.15] tracking-tight">
              Quantum Immigration
            </h2>
            
            {/* Description */}
            <div className="space-y-4">
                <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
                  Quantum Immigration was built to eliminate manual work and give more power to immigration consultants, along with world class AI experience to students.
                </p>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
                  Built with experienced consultants then funded by High Volt Analytics LLC.
                </p>
            </div>
            
            {/* Button */}
            <div className="pt-2">
              <button className="w-full sm:w-auto bg-[#111] text-white font-medium py-3.5 px-8 rounded-xl hover:bg-black transition-transform hover:-translate-y-0.5 duration-200">
                Contact Us
              </button>
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
        {/* grid-cols-1: Mobile | sm:grid-cols-2: Tablet | lg:grid-cols-5: Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
           
           <StatCard 
             number="3x More" 
             label="Leads Captured"
             icon={<MousePointerClick className="w-5 h-5 text-white" />}
           />

           <StatCard 
             number="100%" 
             label="Student Trust"
             icon={<ShieldCheck className="w-5 h-5 text-white" />}
           />

           <StatCard 
             number="Zero" 
             label="Manual Work"
             icon={<Eraser className="w-5 h-5 text-white" />}
           />

           <StatCard 
             number="70% Faster" 
             label="Turnaround"
             icon={<Zap className="w-5 h-5 text-white" />}
           />

           <StatCard 
             number="Scale" 
             label="Without Hiring"
             icon={<TrendingUp className="w-5 h-5 text-white" />}
           />

        </div>

      </div>
    </section>
  );
};

const StatCard = ({ number, label, icon }) => {
  return (
    <div className="bg-[#EAE8E6] rounded-[24px] py-8 md:py-10 px-4 md:px-6 text-center relative overflow-hidden group hover:shadow-md transition-shadow">
      
      {/* Horizontal Line Decoration - Hidden on very small screens to keep it clean */}
      <div className="absolute top-[3.2rem] left-0 w-full hidden sm:flex items-center justify-center gap-4 opacity-20">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-400 to-gray-400"></div>
        <div className="w-24 flex-shrink-0"></div> 
        <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-gray-400 to-gray-400"></div>
      </div>

      {/* Dots on line */}
      <div className="absolute top-[3.15rem] left-[15%] md:left-[20%] w-1 h-1 bg-white rounded-full hidden sm:block"></div>
      <div className="absolute top-[3.15rem] right-[15%] md:right-[20%] w-1 h-1 bg-white rounded-full hidden sm:block"></div>

      {/* Icon Wrapper */}
      <div className="relative z-10 mx-auto mb-6 w-12 h-12 p-[2px] bg-gradient-to-br from-blue-400 to-green-400 rounded-xl shadow-lg">
         <div className="w-full h-full bg-[#1A1A1A] rounded-xl flex items-center justify-center">
             {icon}
         </div>
      </div>
      
      {/* Content */}
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 tracking-tight">{number}</h3>
      <p className="text-xs md:text-sm text-gray-500 font-medium">{label}</p>
    </div>
  )
}

export default About;