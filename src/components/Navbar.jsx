import React, { useState, useEffect } from 'react';

const Navbar = ({ isDark = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-500 ease-in-out flex justify-between items-center
          ${isScrolled
            ? 'mt-4 w-[90%] max-w-6xl bg-white dark:bg-[#141414] rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 py-3 px-6'
            : 'mt-0 w-full bg-transparent py-6 px-6 border-transparent'
          }
        `}
      >
        <div className="flex items-center gap-3">
          <img src="/favicon.png" alt="Quantum Immigration Logo" className="h-9 w-auto object-contain" />
          <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
            Quantum Immigration
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href="#home" className="hover:text-black dark:hover:text-white transition-colors">Home</a>
          <a href="#features" className="hover:text-black dark:hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-black dark:hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#comparison" className="hover:text-black dark:hover:text-white transition-colors">Comparison</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:block px-5 py-2.5 text-sm font-semibold text-gray-900 dark:text-white border border-gray-300 dark:border-white/15 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all">
            Book a Demo
          </button>
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-black dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg text-center inline-block"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;