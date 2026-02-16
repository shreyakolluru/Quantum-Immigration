import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
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
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#F4F2F1]">
      
      {/* --- GLOBAL BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[900px] h-[900px] rounded-full opacity-60 mix-blend-multiply bg-[radial-gradient(circle,rgba(56,189,248,0.8)_0%,rgba(255,255,255,0)_70%)] blur-[80px]" />
        <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] rounded-full opacity-60 mix-blend-multiply bg-[radial-gradient(circle,rgba(52,211,153,0.8)_0%,rgba(255,255,255,0)_70%)] blur-[80px]" />
        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10">
        <Navbar />
        
        {/* We use section tags with IDs so the Navbar links know where to scroll */}
        <section id="home">
          <Hero />
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
  );
}

export default App;