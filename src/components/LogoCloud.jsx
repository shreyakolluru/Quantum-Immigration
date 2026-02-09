import React from "react";
import { InfiniteSlider } from "./ui/infinite-slider";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const logos = [
  {
    alt: "Logoipsum Star",
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 40" fill="%23404040"><text x="0" y="28" font-family="sans-serif" font-weight="bold" font-style="italic" font-size="26" letter-spacing="-1">logoipsum</text><path d="M115,10 L118,16 L124,16 L119,21 L121,27 L115,22 L109,27 L111,21 L106,16 L112,16 Z"/></svg>`,
    width: 130
  },
  {
    alt: "Square Logo",
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" fill="%23404040"><rect x="0" y="5" width="30" height="30" stroke="%23404040" stroke-width="6" fill="none"/><rect x="18" y="22" width="12" height="12"/><text x="40" y="30" font-family="sans-serif" font-weight="900" font-size="28">LOGO</text></svg>`,
    width: 100
  },
  {
    alt: "Clover",
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 40" fill="%23404040"><path d="M20,2 L20,15 M8,15 L32,15" stroke="%23404040" stroke-width="5"/><path d="M20,15 L28,7 L36,15 L28,23 L20,15"/><text x="45" y="28" font-family="sans-serif" font-weight="bold" font-size="22">LOGOIPSUM</text></svg>`,
    width: 150
  },
  {
    alt: "Rings",
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 40" fill="%23404040"><text x="0" y="30" font-family="sans-serif" font-weight="900" font-size="30" letter-spacing="-2">LOOO</text><circle cx="95" cy="12" r="4"/></svg>`,
    width: 100
  },
  {
    alt: "Ipsum Dot",
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" fill="%23404040"><text x="0" y="30" font-family="sans-serif" font-weight="900" font-size="28">IPSUM</text><circle cx="92" cy="10" r="4"/></svg>`,
    width: 90
  },
  {
    alt: "Circles",
    src: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 40" fill="%23404040"><path d="M0,5 h12 v30 h16 v-14 h-16" stroke="%23404040" stroke-width="5" fill="none"/><circle cx="58" cy="20" r="12" stroke="%23404040" stroke-width="5" fill="none"/><circle cx="92" cy="20" r="12" stroke="%23404040" stroke-width="5" fill="none"/></svg>`,
    width: 100
  }
];

export function LogoCloud({ className, ...props }) {
  return (
    <div
      {...props}
      className={cn(
        "bg-[#F4F2F1] border-b border-gray-200/50 -mt-24 pt-24 pb-20 relative z-10",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header - Centered, proper spacing */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className="text-sm font-medium text-gray-500 tracking-wide">
            Backed by the best
          </span>
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Slider Wrapper */}
        <div 
          className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <InfiniteSlider gap={80} speed={35}>
            {logos.map((logo) => (
              <div 
                key={`logo-${logo.alt}`} 
                className="flex items-center justify-center flex-shrink-0" // prevent crushing
              >
                <img
                  alt={logo.alt}
                  // Increased height, removed grayscale/opacity for full visibility
                  className="h-9 md:h-10 w-auto object-contain text-gray-800"
                  src={logo.src}
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>

      </div>
    </div>
  );
}

export default LogoCloud;