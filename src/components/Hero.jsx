import React, { useState, useEffect } from 'react';

// Internal Background Component
const GlassBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
    
    {/* Blobs */}
    <div className="absolute top-[-10%] left-[-10%] w-[900px] h-[900px] rounded-full opacity-60 mix-blend-multiply bg-[radial-gradient(circle,rgba(56,189,248,0.8)_0%,rgba(255,255,255,0)_70%)] blur-[80px]" />
    <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] rounded-full opacity-60 mix-blend-multiply bg-[radial-gradient(circle,rgba(52,211,153,0.8)_0%,rgba(255,255,255,0)_70%)] blur-[80px]" />

    {/* Glass Grid */}
    <div className="absolute inset-0 grid grid-cols-12 md:grid-cols-[repeat(24,minmax(0,1fr))] lg:grid-cols-[repeat(48,minmax(0,1fr))] h-full w-full">
      {Array(48).fill(null).map((_, i) => (
        <div 
          key={i} 
          className="h-full border-r border-white/30 backdrop-blur-[25px] shadow-[inset_0.5px_0_0_rgba(255,255,255,0.15)]"
          style={{
             background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%)'
          }}
        />
      ))}
    </div>

    {/* Noise */}
    <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
  </div>
);

const Hero = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const newScale = 1 + (window.scrollY * 0.0005);
      setScale(Math.min(newScale, 1.15));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-44 pb-40 px-6 flex flex-col items-center text-center min-h-screen overflow-x-hidden font-sans bg-[#F4F2F1]">
      
      {/* BACKGROUND */}
      <GlassBackground />

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col items-center max-w-7xl mx-auto w-full">
        
        {/* Badge */}
        <div className="mb-8 animate-fade-in">
          <span className="inline-block bg-white/50 backdrop-blur-md border border-white/60 px-4 py-1.5 rounded-full text-sm text-gray-600 shadow-sm">
            <span className="text-blue-600 font-bold">200K+</span> Projects Managed Daily
          </span>
        </div>
        
        {/* Headline - FIXED: Increased max-width to 7xl and tuned font size to ensure 2 lines */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight max-w-7xl mb-6 leading-[1.15]">
          AI-Driven Educational Immigration Workflow <br /> 
          Engine That Actually Scales
        </h1>
        
        {/* Subtext */}
        <p className="text-gray-500 font-normal max-w-xl mb-10 text-lg leading-relaxed">
          Built for Immigration Consultants to eliminate 100% of manual work
        </p>
        
        {/* Button */}
        <button className="bg-black text-white px-8 py-3.5 rounded-xl font-medium hover:bg-gray-900 transition-all shadow-2xl shadow-gray-400/20 mb-24 cursor-pointer">
          Book a 45-min Walkthrough
        </button>

        {/* Dashboard Preview */}
<div 
  className="w-full max-w-6xl transition-transform duration-100 ease-out origin-top"
  style={{ transform: `scale(${scale})` }}
>
  <div className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 shadow-2xl">
    {/* Remove fixed height/aspect here to allow the container to fit the image */}
    <div className="rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-inner flex flex-col">
      
      {/* DARK MODE BROWSER TAB */}
      <div className="bg-[#2d2d2d] border-b border-white/10 px-4 py-3 flex items-center gap-4 relative z-30">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex-1 max-w-2xl mx-auto bg-[#1a1a1a] border border-white/10 rounded-md h-7 flex items-center justify-center text-xs text-gray-400 font-mono shadow-sm">
          quantum-immigration.com
        </div>
      </div>
      
      {/* IMAGE CONTAINER - Aspect ratio removed to kill the dead space */}
      <div className="relative bg-[#0B1120]">
        <img 
          src="/dashboard-preview.png" 
          alt="Dashboard Interface" 
          className="w-full h-auto block" 
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.innerHTML = '<div class="flex items-center justify-center py-20 text-gray-600 font-bold text-3xl">Dashboard Image Not Found</div>';
          }}
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;