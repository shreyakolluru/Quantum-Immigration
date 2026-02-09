import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-[#F4F2F1] font-sans">
      <div className="max-w-6xl mx-auto"> 
        {/* ^ Changed to max-w-6xl to stop cards from being too broad */}

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm">
            <span className="text-xs font-bold text-gray-900 uppercase tracking-widest">Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
            What Our Users Are <br /> Saying About Us
          </h2>
        </div>

        {/* Grid Layout - min-h-[320px] ensures vertical rectangular shape */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* ==================== ROW 1 ==================== */}
          
          {/* 10X Revenue Boost - Light Blue */}
          <div className="md:col-span-3 bg-[#E9F9FF] rounded-[32px] p-8 flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-1 duration-300">
            <div>
              <h3 className="text-5xl font-bold text-gray-900 mb-2">10X</h3>
              <p className="text-gray-600 font-medium">Revenue Boost</p>
            </div>
            <div className="mt-8">
               {/* Logo LogoIpsum */}
               <svg className="h-8 w-auto text-black" viewBox="0 0 105 32" fill="currentColor">
                 <path d="M23.333 11.235h-7.662V3.573H23.333v7.662zm-12.04 0H3.632V3.573h7.661v7.662zm0 12.04H3.632v-7.662h7.661v7.662zm12.04 0h-7.662v-7.662H23.333v7.662zm14.23-14.23h-7.662V1.383h7.662V9.045zm0 12.04h-7.662v-7.662h7.662v7.662zm0 12.04h-7.662v-7.662h7.662v7.662zM48 16c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12zm6 0c0 3.314 2.686 6 6 6s6-2.686 6-6-2.686-6-6-6-6 2.686-6 6zm34-4h7.662v7.662H88V12zm-3.631-7.662H92V12h-7.632V4.338z"/>
              </svg>
            </div>
          </div>

          {/* 2X Increase Efficiency - Mint Green */}
          <div className="md:col-span-3 bg-[#E7FFF3] rounded-[32px] p-8 flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-1 duration-300">
            <div>
              <h3 className="text-5xl font-bold text-gray-900 mb-2">2X</h3>
              <p className="text-gray-600 font-medium">Increase Efficiency</p>
            </div>
            <div className="mt-8">
               <img src="https://logoipsum.com/logoipsum-297.svg" alt="logo" className="h-6 w-auto grayscale contrast-125" />
            </div>
          </div>

          {/* John Matthews Quote */}
          <div className="md:col-span-6 bg-white rounded-[32px] p-10 shadow-sm border border-white flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-1 duration-300">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              "QI has completely transformed how our team manages tasks. The platform has made our workflow seamless and boosted overall productivity."
            </p>
            <div className="flex justify-between items-end mt-8">
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/150?img=11" alt="John" className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900 text-base">John Matthews</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Project Manager</p>
                </div>
              </div>
              <div className="bg-black p-2.5 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
            </div>
          </div>

          {/* ==================== ROW 2 ==================== */}

          {/* Sarah Collins Quote */}
          <div className="md:col-span-6 bg-white rounded-[32px] p-10 shadow-sm border border-white flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-1 duration-300">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              "With QI, we've streamlined our project management, reducing time spent on administrative tasks. It's user-friendly, and our team is now more efficient than ever."
            </p>
            <div className="flex justify-between items-end mt-8">
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/150?img=5" alt="Sarah" className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Sarah Collins</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Operations Lead</p>
                </div>
              </div>
              <div className="bg-black p-2.5 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
            </div>
          </div>

          {/* David Chen Quote */}
          <div className="md:col-span-6 bg-white rounded-[32px] p-10 shadow-sm border border-white flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-1 duration-300">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              "We saw a massive improvement in our team's collaboration and communication. QI helped us organize tasks efficiently, leading to better outcomes across all projects."
            </p>
            <div className="flex justify-between items-end mt-8">
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/150?img=33" alt="David" className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900 text-base">David Chen</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Team Lead</p>
                </div>
              </div>
              <div className="bg-black p-2.5 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
            </div>
          </div>

          {/* ==================== ROW 3 ==================== */}

          {/* 5X Team Growth - Soft Green */}
          <div className="md:col-span-3 bg-[#F0F9E8] rounded-[32px] p-8 flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-1 duration-300">
            <div>
              <h3 className="text-5xl font-bold text-gray-900 mb-2">5X</h3>
              <p className="text-gray-600 font-medium">Team Growth</p>
            </div>
            <div className="mt-8">
               {/* Logo LogoIpsum */}
               <svg className="h-7 w-auto text-black" viewBox="0 0 118 32" fill="currentColor">
                 <path d="M12 4a8 8 0 100 16 8 8 0 000-16zM0 12a12 12 0 1124 0 12 12 0 01-24 0zm38.4 12L36 21.6 38.4 12 48 14.4l-9.6 9.6zM48 24l-2.4-9.6L36 12l9.6-2.4L48 24zm18.4-1.6h-7.662V3.573h7.662v18.827zm14.23-14.23h-7.662V3.573h7.662v4.572zm0 14.23h-7.662v-7.662h7.662v7.662zm14.23-14.23h-7.662V3.573h7.662v4.572zm0 14.23h-7.662v-7.662h7.662v7.662z"/>
               </svg>
            </div>
          </div>

          {/* Olivia Turner Quote */}
          <div className="md:col-span-6 bg-white rounded-[32px] p-10 shadow-sm border border-white flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-1 duration-300">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              "We've increased our efficiency by at least 40% since implementing QI. It's helped our team stay aligned and deliver exceptional results."
            </p>
            <div className="flex justify-between items-end mt-8">
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/150?img=26" alt="Olivia" className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Olivia Turner</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Operations Director</p>
                </div>
              </div>
              <div className="bg-black p-2.5 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
            </div>
          </div>

          {/* 3X Productivity - Light Blue */}
          <div className="md:col-span-3 bg-[#E9F9FF] rounded-[32px] p-8 flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-1 duration-300">
            <div>
              <h3 className="text-5xl font-bold text-gray-900 mb-2">3X</h3>
              <p className="text-gray-600 font-medium">Increased Productivity</p>
            </div>
            <div className="mt-8">
               <div className="flex items-center gap-2 font-bold text-xl">
                 <img src="https://logoipsum.com/logoipsum-295.svg" alt="logo" className="h-6 w-auto grayscale contrast-125" />
                 <span>LOGOIPSUM</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;