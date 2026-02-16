import React from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function LogoCloud({ className, ...props }) {
  return (
    <div
      {...props}
      className={cn(
        "bg-[#F4F2F1] border-b border-gray-200/50 py-4 relative z-10",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-center">
        
        {/* Compact Highlighted Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 shadow-sm backdrop-blur-sm">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
          
          <p className="text-[10px] md:text-xs font-bold tracking-widest text-gray-400 uppercase">
            Powered by <span className="text-gray-900 ml-1">High Volt Analytics</span>
          </p>
          
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
        </div>

      </div>
    </div>
  );
}

export default LogoCloud;