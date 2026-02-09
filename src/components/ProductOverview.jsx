import React from 'react';

const ProductOverview = () => {
  return (
    <section className="py-24 px-6 bg-[#0A0A0A] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* --- Header Tag --- */}
        <div className="flex justify-center mb-8">
            <div className="p-[1.5px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 inline-block">
                <div className="px-5 py-1.5 rounded-full bg-gray-900">
                    <span className="text-xs font-semibold text-gray-200 tracking-wide">Product Overview</span>
                </div>
            </div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Streamline Every Step to Run a <br /> Modern Immigration Consultancy
        </h2>
        
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Built to support consultants and scale their business. Our AI works only in areas where automation helps, while critical decisions remain human-led.
        </p>
        
        <button className="bg-white text-black font-bold py-3.5 px-8 rounded-xl hover:bg-gray-100 transition-all mb-20">
            Get Started
        </button>

        {/* --- Main Image Container (Clean) --- */}
        <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                    src="/productover.png" 
                    alt="Quantum Immigration Dashboard" 
                    className="w-full h-auto block"
                />
            </div>
        </div>

      </div>
    </section>
  );
};

export default ProductOverview;