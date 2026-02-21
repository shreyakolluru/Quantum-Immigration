import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] dark:bg-black pt-24 pb-8 font-sans text-white border-t border-white/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- CTA Section --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Start your journey with us.
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            Join the waitlist to experience seamless immigration management built for the modern consultant.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-[#1A1A1A] text-gray-300 placeholder-gray-500 border border-white/5 rounded-xl px-6 py-4 pr-36 focus:outline-none focus:border-white/20 transition-colors text-sm"
            />
            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-black font-bold px-6 rounded-lg hover:bg-gray-200 transition-colors text-sm">
              Get Started
            </button>
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="w-full h-[1px] bg-white/10 mb-16"></div>

        {/* --- Footer Links Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Contact */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
               <img 
                 src="/favicon.png" 
                 alt="Quantum Immigration Logo" 
                 className="w-10 h-10 rounded-full object-contain"
               />
               <div className="flex flex-col">
                 <span className="text-sm font-bold text-white leading-tight uppercase tracking-wider">Quantum</span>
                 <span className="text-sm font-bold text-white leading-tight uppercase tracking-wider">Immigration</span>
               </div>
            </div>

            <div className="flex flex-col gap-3">
              {/* Email Link */}
              <a href="mailto:contact@quantum-immigration.com" className="inline-flex items-center gap-3 border border-white/10 rounded-lg px-5 py-3 text-sm text-gray-400 hover:text-white hover:border-white/30 transition-colors w-fit">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                sales@highvolt.tech
              </a>
            </div>
          </div>

          {/* Column 2: Home Links */}
          <div className="lg:pl-8">
            <h4 className="font-bold text-white mb-6">Home</h4>
            <ul className="space-y-3 text-gray-500 text-sm font-medium">
              {['Features', 'Pricing', 'About', 'Comparison', 'Contact'].map((item) => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="lg:pl-8">
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-3 text-gray-500 text-sm font-medium">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="font-bold text-white mb-6">Social</h4>
            <div className="space-y-3">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/showcase/quantum-immigration/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-3 text-sm text-gray-400 hover:bg-[#252525] hover:text-white transition-all group">
                <svg className="w-4 h-4 opacity-60 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                Linkedin
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@HighVoltAnalytics-fe8li" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-3 text-sm text-gray-400 hover:bg-[#252525] hover:text-white transition-all group">
                <svg className="w-4 h-4 opacity-60 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
              {/* Twitter / X */}
              <a href="https://highvolt.tech/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-3 text-sm text-gray-400 hover:bg-[#252525] hover:text-white transition-all group">
                <svg className="w-4 h-4 opacity-60 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Website
              </a>
            </div>
          </div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
            <p>© {new Date().getFullYear()} Quantum Immigration. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;