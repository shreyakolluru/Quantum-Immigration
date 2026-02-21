import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-[#F4F2F1] dark:bg-black font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* --- Left Column: Contact Info --- */}
          <div className="flex-1 space-y-8 w-full">
            {/* Tag */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10">
              <span className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide">Contact</span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
              We’d Love to Hear <br /> From You
            </h2>

            {/* Description */}
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-md">
              Contact us for inquiries, support, or feedback. We're here to assist you every step of the way.
            </p>

            {/* Contact Actions Stack */}
            <div className="space-y-4 pt-4">
              
              {/* Email Card */}
              <div className="bg-[#EAE8E6] dark:bg-[#141414] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-900 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">sales@highvolt.tech</span>
                </div>
                <button className="w-full sm:w-40 bg-[#111] dark:bg-white dark:text-black text-white text-xs font-bold py-3 px-6 rounded-lg hover:bg-black dark:hover:bg-gray-200 transition-colors whitespace-nowrap text-center">
                  Email Us
                </button>
              </div>
              <div className="bg-[#EAE8E6] dark:bg-[#141414] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-5 h-5 flex items-center justify-center">
                     <svg className="w-5 h-5 text-gray-900 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">+00 0000 000 00</span>
                </div>
                <button className="w-full sm:w-40 bg-[#111] dark:bg-white dark:text-black text-white text-xs font-bold py-3 px-6 rounded-lg hover:bg-black dark:hover:bg-gray-200 transition-colors whitespace-nowrap text-center">
                  Call Us
                </button>
              </div>
              <div className="bg-[#EAE8E6] dark:bg-[#141414] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                   <div className="w-5 h-5 flex items-center justify-center">
                     <svg className="w-5 h-5 text-gray-900 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                   </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Office</span>
                </div>
                <button className="w-full sm:w-40 bg-[#111] dark:bg-white dark:text-black text-white text-xs font-bold py-3 px-6 rounded-lg hover:bg-black dark:hover:bg-gray-200 transition-colors whitespace-nowrap text-center">
                  Get Direction
                </button>
              </div>

            </div>
          </div>

          {/* --- Right Column: Form --- */}
          <div className="flex-1 w-full relative rounded-[32px] p-[2px] bg-gradient-to-br from-blue-500 to-green-400 shadow-2xl shadow-blue-100/50">
            <div className="bg-white dark:bg-[#141414] rounded-[30px] p-8 md:p-10 h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send us your query</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-200">Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full bg-[#EEEEEE] dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 text-sm rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-gray-400 dark:placeholder-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-200">Subject</label>
                    <input
                      type="text"
                      placeholder="Enter your subject"
                      className="w-full bg-[#EEEEEE] dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 text-sm rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-gray-400 dark:placeholder-gray-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-gray-200">E-Mail</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-[#EEEEEE] dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 text-sm rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-gray-400 dark:placeholder-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-gray-200">Message</label>
                  <textarea 
                    rows="4"
                    placeholder="Enter your message" 
                    className="w-full bg-[#EEEEEE] dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 text-sm rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                  ></textarea>
                </div>

                {/* UPDATED BUTTON: font-normal, py-3 (smaller vertical) */}
                <button 
                  type="button"
                  className="bg-[#111] dark:bg-white dark:text-black text-white font-normal py-3 px-8 rounded-xl hover:bg-black dark:hover:bg-gray-200 transition-transform hover:-translate-y-1 shadow-lg mt-2"
                >
                  Send Your Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;