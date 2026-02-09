import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the floating effect after scrolling 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // The Container
    // We use a fixed container to handle the centering transition smoothly
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300 pointer-events-none">
      
      <nav 
        className={`pointer-events-auto transition-all duration-500 ease-in-out flex justify-between items-center
          ${isScrolled 
            ? 'mt-4 w-[90%] max-w-6xl bg-white rounded-2xl shadow-xl border border-gray-100 py-3 px-6' // Scrolled: Floating Capsule
            : 'mt-0 w-full bg-transparent py-6 px-6 border-transparent' // Top: Transparent & Full Width
          }
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* Logo Icon - Replaced placeholder with your image */}
          <img 
            src="/favicon.png" 
            alt="Quantum Immigration Logo" 
            className="h-9 w-auto object-contain" 
          />
          
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Quantum Immigration
          </span>
        </div>

        {/* Links (Centered) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-black transition-colors">Home</a>
          <a href="#features" className="hover:text-black transition-colors">Features</a>
          <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#comparison" className="hover:text-black transition-colors">Comparison</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          {/* Join Waitlist - Outline Style */}
          <button className="hidden md:block px-5 py-2.5 text-sm font-semibold text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
            Book a Demo
          </button>
          
          {/* Contact Us - Now links to #contact section */}
          <a 
            href="#contact" 
            className="px-5 py-2.5 text-sm font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-all shadow-lg text-center inline-block"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;