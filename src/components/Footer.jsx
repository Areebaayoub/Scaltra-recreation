import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* NEW: Premium Luxury Footer Card Wrap */}
        <div className="group relative overflow-hidden rounded-[2rem] p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/40 hover:to-transparent transition-all duration-700">
            
            {/* Inner Card content (Deep Dark Glassmorphism) */}
            <div className="relative z-10 bg-[#080510] rounded-[2rem] p-10 md:p-16 overflow-hidden">
                
                {/* Interactive Ambient Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent_60%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/15 rounded-full blur-[90px] group-hover:bg-purple-500/25 transition-colors duration-700 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/15 rounded-full blur-[90px] group-hover:bg-indigo-500/25 transition-colors duration-700 pointer-events-none"></div>

                {/* Main Content Grid */}
                <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                  
                  {/* Column 1: Brand & Newsletter (Takes up 2 columns) */}
                  <div className="lg:col-span-2">
                    <div className="text-2xl font-black text-white flex items-center gap-2 mb-6 cursor-pointer">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded flex items-center justify-center transform rotate-12 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                           <span className="-rotate-12 text-white text-sm">S</span>
                        </div>
                        <span className="tracking-wide">Scaltra</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4 font-light">
                      We don't just design; we engineer emotion, attention, and recognition in a digital world that's always moving faster.
                    </p>
                    {/* Newsletter Form */}
                    <div className="flex gap-2 max-w-sm bg-white/[0.03] border border-white/5 p-1 rounded-full backdrop-blur-sm focus-within:border-purple-500/50 transition-colors">
                      <input 
                        type="email" 
                        placeholder="Join our newsletter" 
                        className="bg-transparent px-5 py-2.5 text-sm text-white focus:outline-none w-full placeholder:text-gray-600"
                      />
                      <button className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-xs font-semibold py-2.5 px-6 rounded-full transition-all shadow-[0_0_10px_rgba(139,92,246,0.3)] whitespace-nowrap">
                        Sign Up
                      </button>
                    </div>
                  </div>

                  {/* Column 2: Links */}
                  <div className="md:pl-10">
                    <h4 className="text-white text-sm font-semibold mb-6 tracking-wider uppercase">Links</h4>
                    <ul className="flex flex-col gap-4 text-sm text-gray-400 font-light">
                      <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                      <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                      <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
                      <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                  </div>

                  {/* Column 3: Services */}
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-6 tracking-wider uppercase">Services</h4>
                    <ul className="flex flex-col gap-4 text-sm text-gray-400 font-light">
                      <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Websites</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
                    </ul>
                  </div>

                  {/* Column 4: Contact/Info */}
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-6 tracking-wider uppercase">Socials</h4>
                    <ul className="flex flex-col gap-4 text-sm text-gray-400 font-light mb-8">
                      <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        0485 86...
                      </li>
                      <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        Sam@Scaltra.io
                      </li>
                    </ul>
                    
                    {/* Google Reviews Badge */}
                    <div className="bg-white rounded-xl p-3 inline-flex items-center gap-3 shadow-lg transform hover:scale-105 transition-transform cursor-pointer">
                        <div className="w-7 h-7 flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-2xl">G</span>
                        </div>
                        <div>
                            <div className="flex gap-0.5 text-yellow-400 text-xs">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <span className="text-black text-[11px] font-bold tracking-tight">5.0 Star Rating</span>
                        </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar inside Card */}
                <div className="relative z-20 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
                  <p>© 2026 Scaltra.io. All rights reserved.</p>
                  <p className="font-light">Queensland, Australia</p>
                </div>

            </div> {/* End Inner Card */}
        </div> {/* End Outer Wrap */}

      </div>
    </footer>
  );
};

export default Footer;