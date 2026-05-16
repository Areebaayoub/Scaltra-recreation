import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#120822] to-[#05020a] font-['Figtree'] pt-[60px] pb-[20px] px-[20px] overflow-hidden">
      
      {/* --- FOOTER MAIN GRID --- */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-[30px] md:gap-[20px] mb-[40px]">
        
        {/* COLUMN 1: Logo, Intro & Newsletter (Spans 2 columns) */}
        <div className="md:col-span-2 flex flex-col items-start pr-[0px] md:pr-[40px]">
          
          {/* Main Logo */}
          <img 
            src="https://scaltra.io/wp-content/uploads/2026/02/scaltra-logo-10-scaled.png" 
            alt="Scaltra Logo" 
            className="w-[60px] mb-[15px] object-contain"
          />
          
          {/* Intro Text */}
          <p className="text-[#f8fafc] font-[400] text-[13.5px] leading-[1.6] mb-[25px]">
            Our work isn’t just about design or animation. It is about engineering emotion, attention, and recognition in a digital world that’s always moving faster.
          </p>

          {/* Newsletter Section */}
          <h4 className="text-white text-[15px] font-medium mb-[10px]">
            Join our newsletter
          </h4>
          
          {/* --- FIXED: BUTTON INSIDE INPUT BOX --- */}
          <div className="w-full max-w-[360px] relative flex items-center bg-[#130b20] border border-[#2a1a4a] rounded-[6px] p-[4px] focus-within:border-[#8B5CF6] transition-colors">
            <input 
              type="email" 
              placeholder="name@email.com" 
              className="w-full bg-transparent pl-[12px] pr-[110px] py-[8px] text-white text-[13px] placeholder:text-[#a1a1aa] focus:outline-none"
            />
            <button className="absolute right-[4px] bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-[12px] font-medium py-[7px] px-[16px] rounded-[4px] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>

        </div>

        {/* COLUMN 2: Links */}
        <div className="flex flex-col">
          <h4 className="text-white text-[15px] font-medium mb-[15px]">Links</h4>
          <ul className="flex flex-col gap-[10px]">
            <li><a href="#" className="text-white hover:text-[#8B5CF6] text-[13.5px] transition-colors">Home</a></li>
            <li><a href="#" className="text-white hover:text-[#8B5CF6] text-[13.5px] transition-colors">About Us</a></li>
            <li><a href="#" className="text-white hover:text-[#8B5CF6] text-[13.5px] transition-colors">Case Studies</a></li>
            <li><a href="#" className="text-white hover:text-[#8B5CF6] text-[13.5px] transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* COLUMN 3: Services */}
        <div className="flex flex-col">
          <h4 className="text-white text-[15px] font-medium mb-[15px]">Services</h4>
          <ul className="flex flex-col gap-[10px]">
            <li><a href="#" className="text-white hover:text-[#8B5CF6] text-[13.5px] transition-colors">Marketing</a></li>
            <li><a href="#" className="text-white hover:text-[#8B5CF6] text-[13.5px] transition-colors">Mobile Apps</a></li>
            <li><a href="#" className="text-white hover:text-[#8B5CF6] text-[13.5px] transition-colors">Websites</a></li>
            <li><a href="#" className="text-white hover:text-[#8B5CF6] text-[13.5px] transition-colors">Design</a></li>
          </ul>
        </div>

        {/* COLUMN 4: Socials */}
        <div className="flex flex-col">
          <h4 className="text-white text-[15px] font-medium mb-[15px]">Socials</h4>
          <ul className="flex flex-col gap-[12px]">
            
            {/* Phone */}
            <li className="flex items-start gap-[10px]">
              <svg className="w-[15px] h-[15px] text-white mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <a href="tel:0485864525" className="text-white hover:text-[#8B5CF6] text-[13.5px] transition-colors">0485 864 525</a>
            </li>
            
            {/* Email */}
            <li className="flex items-start gap-[10px]">
              <svg className="w-[15px] h-[15px] text-white mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <a href="mailto:Sam@Scaltra.io" className="text-white hover:text-[#8B5CF6] text-[13.5px] transition-colors">Sam@Scaltra.io</a>
            </li>
            
            {/* Address */}
            <li className="flex items-start gap-[10px]">
              <svg className="w-[16px] h-[16px] text-white mt-[2px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span className="text-white text-[13.5px] leading-[1.4]">39/71 Eagle Street<br/>Brisbane City QLD 4000</span>
            </li>
            
            {/* --- HARDCODED NATIVE INLINE WIDGET EMBED --- */}
            <li className="mt-[10px]">
              <a 
                href="https://www.designrush.com" 
                target="_blank" 
                rel="noreferrer"
                className="block w-[188px] h-[74px] transition-opacity hover:opacity-90 bg-white rounded-[4px] p-[6px] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between w-full border-b border-gray-100 pb-[4px]">
                  <span className="text-[#003399] font-['Outfit'] font-bold text-[14px] tracking-tight uppercase leading-none">Review Us</span>
                  <span className="text-[#003399] font-['Outfit'] font-bold text-[10px] tracking-tight uppercase leading-none block text-right">On Designrush</span>
                </div>
                <div className="flex items-center justify-between w-full pt-[2px]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#003399" className="opacity-95">
                    <path d="M12 2L2 22h20L12 2zm0 4l6.5 13h-13L12 6z"/>
                  </svg>
                  <div className="flex gap-[2px] text-[#ffb400]">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-[14px] leading-none">{star}</span>
                    ))}
                  </div>
                </div>
              </a>
            </li>
            
          </ul>
        </div>

      </div>

      {/* --- BOTTOM COPYRIGHT BAR --- */}
      <div className="max-w-[1200px] mx-auto pt-[20px] border-t border-white/20 text-center flex items-center justify-center">
        <p className="text-white text-[13px]">
          © 2026 <span className="text-[#8B5CF6] font-medium">Scaltra.io</span>. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;