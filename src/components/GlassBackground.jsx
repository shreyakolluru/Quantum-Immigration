import React from 'react';

const GlassBackground = () => {
  // Generates 48 vertical strips
  const strips = Array(48).fill(null);

  return (
    <div 
      className="absolute inset-0 overflow-hidden -z-20 pointer-events-none"
      style={{
        // UPDATED MASK:
        // Starts fading at 0%, purely transparent by 70%.
        // This guarantees the bottom 30% of the section is just flat background color.
        maskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 70%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 70%)'
      }}
    >
      
      {/* 1. VIBRANT BACKGROUND BLOBS */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full opacity-60 mix-blend-multiply animate-pulse"
        style={{ 
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.8) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(80px)',
        }} 
      />
      
      <div 
        className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-60 mix-blend-multiply"
        style={{ 
          background: 'radial-gradient(circle, rgba(52, 211, 153, 0.8) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(80px)',
        }} 
      />

      {/* 2. THE VERTICAL GLASS GRID */}
      <div className="absolute inset-0 grid h-full w-full grid-cols-12 md:grid-cols-[repeat(24,minmax(0,1fr))] lg:grid-cols-[repeat(48,minmax(0,1fr))]">
        {strips.map((_, index) => (
          <div 
            key={index} 
            className="h-full border-r border-white/30" 
            style={{
              backdropFilter: 'blur(25px)',
              WebkitBackdropFilter: 'blur(25px)',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%)',
              boxShadow: 'inset 0.5px 0 0 rgba(255, 255, 255, 0.15)'
            }}
          />
        ))}
      </div>
      
      {/* 3. NOISE TEXTURE */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default GlassBackground;