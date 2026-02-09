import React, { useState } from 'react';

const FAQ = () => {
  // State to track the active (open) FAQ index
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Will this replace my consultants?",
      answer: "Absolutely not. Quantum Immigration is designed to augment your consultants, not replace them. By automating the repetitive, low-value tasks that cause burnout, we empower your consultants to focus on the high-value strategic advisory work that requires their expertise and delivers the most value to your clients."
    },
    {
      question: "How long does it take to get set up?",
      answer: "We can have your consultancy set up on the platform in as little as 48 hours. Our team will work with you to embed the platform on your website, import your existing data, and train your team to ensure a smooth and seamless transition."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We take data security very seriously. Our platform is built with bank-level security and is fully compliant with Australian data privacy regulations. Your client data is safe, secure, and stored in Australia."
    },
    {
      question: "How does the pricing work?",
      answer: "Contact us for a detailed breakdown of our pricing tiers tailored to your consultancy's specific needs."
    }
  ];

  // Splitting data for the two-column grid
  const leftFaqs = faqData.slice(0, 2);
  const rightFaqs = faqData.slice(2, 4);

  return (
    <section className="py-24 px-6 bg-[#F4F2F1] font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white border border-gray-200">
            <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">FAQs</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* --- FAQ Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 mb-20 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col">
            {leftFaqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200">
                <div 
                  onClick={() => toggleFaq(idx)}
                  className="flex items-center justify-between py-6 cursor-pointer group hover:bg-black/5 transition-colors px-2 rounded-lg"
                >
                  <span className="text-base font-semibold text-gray-900">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-900 flex-shrink-0 transition-transform duration-300 ${activeIndex === idx ? 'rotate-45' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${activeIndex === idx ? 'max-h-96 mb-6 px-2' : 'max-h-0'}`}>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {rightFaqs.map((faq, idx) => {
              const actualIdx = idx + 2; // Offset for right column
              return (
                <div key={actualIdx} className="border-b border-gray-200">
                  <div 
                    onClick={() => toggleFaq(actualIdx)}
                    className="flex items-center justify-between py-6 cursor-pointer group hover:bg-black/5 transition-colors px-2 rounded-lg"
                  >
                    <span className="text-base font-semibold text-gray-900">{faq.question}</span>
                    <svg 
                      className={`w-5 h-5 text-gray-900 flex-shrink-0 transition-transform duration-300 ${activeIndex === actualIdx ? 'rotate-45' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${activeIndex === actualIdx ? 'max-h-96 mb-6 px-2' : 'max-h-0'}`}>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* --- Bottom Banner --- */}
        <div className="bg-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Have Questions? We're Here to Help!</h3>
            <p className="text-sm text-gray-500 font-medium">Reach out to our support team for any queries or assistance.</p>
          </div>
          <button className="bg-[#111] text-white text-sm font-bold py-3.5 px-8 rounded-lg hover:bg-black transition-transform hover:-translate-y-0.5 whitespace-nowrap">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;