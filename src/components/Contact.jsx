import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-[#000] font-['Figtree'] py-[80px] md:py-[100px] px-[20px] overflow-hidden">
      
      {/* --- HEADER SECTION (100% SAME) --- */}
      <div className="max-w-[800px] mx-auto flex flex-col items-center text-center mb-[40px]">
        
        <div className="mb-[15px]">
           <span className="inline-block bg-transparent border border-white/10 text-white text-[11px] font-medium py-[4px] px-[12px] rounded-[4px] tracking-wide">
              Get In Touch
           </span>
        </div>
        
        <h2 className="text-[#ffffff] font-[400] text-[25px] md:text-[50px] leading-[1.2] tracking-tight">
           Stay Ahead in the Digital World
        </h2>
        
      </div>

      {/* --- FORM CARD (100% SAME) --- */}
      <div className="max-w-[800px] mx-auto bg-[#A7AAB614] border border-[#BBBBBB4A] rounded-[20px] p-[30px] md:p-[50px]">
        <form>
          
          {/* 2-COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mb-[24px]">
            
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-white text-[12px] font-semibold tracking-[1.5px] uppercase mb-[8px]">Name</label>
              <input 
                type="text" 
                placeholder="Sam" 
                className="w-full bg-black/20 border border-white/10 rounded-[6px] px-[16px] py-[12px] text-white text-[15px] placeholder:text-[#a1a1aa] focus:border-[#8B5CF6] focus:bg-black/40 focus:outline-none transition-all" 
              />
            </div>

            {/* Business Name */}
            <div className="flex flex-col">
              <label className="text-white text-[12px] font-semibold tracking-[1.5px] uppercase mb-[8px]">Business Name</label>
              <input 
                type="text" 
                placeholder="XYZ company" 
                className="w-full bg-black/20 border border-white/10 rounded-[6px] px-[16px] py-[12px] text-white text-[15px] placeholder:text-[#a1a1aa] focus:border-[#8B5CF6] focus:bg-black/40 focus:outline-none transition-all" 
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-white text-[12px] font-semibold tracking-[1.5px] uppercase mb-[8px]">Email</label>
              <input 
                type="email" 
                placeholder="sam@gmail.com" 
                className="w-full bg-black/20 border border-white/10 rounded-[6px] px-[16px] py-[12px] text-white text-[15px] placeholder:text-[#a1a1aa] focus:border-[#8B5CF6] focus:bg-black/40 focus:outline-none transition-all" 
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-white text-[12px] font-semibold tracking-[1.5px] uppercase mb-[8px]">Phone</label>
              <input 
                type="tel" 
                placeholder="+123456789" 
                className="w-full bg-black/20 border border-white/10 rounded-[6px] px-[16px] py-[12px] text-white text-[15px] placeholder:text-[#a1a1aa] focus:border-[#8B5CF6] focus:bg-black/40 focus:outline-none transition-all" 
              />
            </div>

          </div>

          {/* SELECT SERVICE (Full Width) */}
          <div className="flex flex-col mb-[24px]">
            <label className="text-white text-[12px] font-semibold tracking-[1.5px] uppercase mb-[8px]">Select Service</label>
            <div className="relative">
              <select className="w-full bg-black/20 border border-white/10 rounded-[6px] px-[16px] py-[12px] text-white text-[15px] appearance-none focus:border-[#8B5CF6] focus:bg-black/40 focus:outline-none transition-all cursor-pointer">
                <option value="Marketing" className="bg-[#111]">Marketing</option>
                <option value="Mobile Apps" className="bg-[#111]">Mobile Apps</option>
                <option value="Website" className="bg-[#111]">Website</option>
                <option value="Design" className="bg-[#111]">Design</option>
              </select>
              <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16"><path d="M4 6h8l-4 5-4-5z"/></svg>
              </div>
            </div>
          </div>

          {/* MESSAGE (Full Width) */}
          <div className="flex flex-col mb-[35px]">
            <label className="text-white text-[12px] font-semibold tracking-[1.5px] uppercase mb-[8px]">Message</label>
            <textarea 
              placeholder="Hi, I am sam" 
              className="w-full bg-black/20 border border-white/10 rounded-[6px] px-[16px] py-[12px] text-white text-[15px] placeholder:text-[#a1a1aa] focus:border-[#8B5CF6] focus:bg-black/40 focus:outline-none transition-all min-h-[120px] resize-none"
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button 
            type="submit" 
            className="w-full bg-[#7c3aed] hover:bg-[#7c3aed] text-white text-[15px] font-medium py-[8px] rounded-[6px] transition-transform hover:scale-[1.01]"
          >
            Book My Free Growth Call
          </button>

        </form>
      </div>
{/* --- ELEGANT "READY TO GROW" CARD (PERFECT MATCH) --- */}
      <div className="max-w-[800px] mx-auto mt-[80px] bg-gradient-to-b from-[#1c1233] to-[#0a0a0a] border border-[#2a1a4a] rounded-[24px] py-[50px] px-[30px] flex flex-col items-center text-center">
        
        {/* Elegant Heading */}
        <h2 className="text-[#ffffff] font-[400] text-[32px] md:text-[46px] leading-[1.15] tracking-tight mb-[35px]">
          Ready to Grow Your Business?<br className="hidden md:block" /> Let’s Make It Happen
        </h2>
        
        {/* Premium Button with Right Arrow */}
        <button className="bg-[#7c3aed] hover:bg-[#7c3aed] text-white text-[15px] font-medium py-[8px] px-[20px] rounded-[6px] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-[10px] mb-[25px]">
          Book My Free Growth Call
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
        
        {/* Italic Subtext */}
        <p className="text-[#a1a1aa] text-[14px] italic opacity-90">
          No spam. 100% actionable advice. $0 risk.
        </p>
        
      </div>
    </section>
  );
};

export default Contact;