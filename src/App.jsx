import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aurora from "./components/Aurora";
import "./components/Aurora.css";
import LogoCloud from "./components/LogoCloud";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Comparison from "./components/Comparison";
import ProductOverview from "./components/ProductOverview";
import InterestingFeatures from "./components/InterestingFeatures";
import UniquePotential from "./components/UniquePotential";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const theme = localStorage.getItem('theme');
      return theme !== 'light';
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch (_) {}
    } else {
      root.classList.remove('dark');
      try {
        localStorage.setItem('theme', 'light');
      } catch (_) {}
    }
  }, [isDark]);

  return (
    <>
    <main className="min-h-screen relative overflow-x-hidden bg-[#F4F2F1] dark:bg-transparent transition-colors duration-300" style={isDark ? { background: 'transparent' } : undefined}>
      <div className="fixed inset-0 z-0 pointer-events-none dark:opacity-0 dark:invisible">
        <div className="absolute top-[-10%] left-[-10%] w-[900px] h-[900px] rounded-full opacity-60 mix-blend-multiply bg-[radial-gradient(circle,rgba(56,189,248,0.8)_0%,rgba(255,255,255,0)_70%)] blur-[80px]" />
        <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] rounded-full opacity-60 mix-blend-multiply bg-[radial-gradient(circle,rgba(52,211,153,0.8)_0%,rgba(255,255,255,0)_70%)] blur-[80px]" />
        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {isDark && (
        <div className="fixed inset-0 z-[1] pointer-events-none" style={{ width: '100vw', height: '100vh' }}>
          <div className="absolute inset-0 w-full h-full">
            <Aurora
              colorStops={['#2e5c30', '#1a2744', '#2d1b4e']}
              amplitude={1.0}
              blend={0.65}
            />
          </div>
        </div>
      )}

      <div className="relative z-10" style={isDark ? { background: 'transparent' } : undefined}>
        {/* Dark mode: aurora fixed behind content so it’s always visible */}
        <Navbar isDark={isDark} />
        
        {/* We use section tags with IDs so the Navbar links know where to scroll */}
        <section id="home">
          <Hero isDark={isDark} />
        </section>

        <LogoCloud />

        <section id="features">
          <Features />
          <ProductOverview />
          <InterestingFeatures />
          <UniquePotential />
        </section>
        <Process />

        <section id="pricing">
          <Pricing />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="comparison">
          <Comparison />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <FAQ />
        <Footer />
      </div>

    </main>
    </>
  );
}

export default App;