import React from 'react';

const Navbar = () => {
  return (
    // position-absolute locked: scrolling par sath neechay nahi aayega, sirf top par rahega
    // Added a sleek bottom border line to mimic the original image design perfectly
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent font-['Figtree'] py-[24px] px-[20px] md:px-[40px] border-b border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        
        {/* --- LOGO SECTION (FIXED: BARA LOGO & TEXT REMOVED) --- */}
        {/* Dimensions scaled up to match the elegant, large icon presence */}
        <a href="#home" className="flex items-center">
          <img 
            src="https://scaltra.io/wp-content/uploads/2026/02/scaltra-logo-10-scaled.png" 
            alt="Scaltra Logo" 
            className="w-[55px] h-[55px] md:w-[65px] md:h-[65px] object-contain transition-transform hover:scale-105"
          />
        </a>

        {/* --- LINKS LIST (WORKABLE WITH SMOOTH SCROLL ANCHORS) --- */}
        <div className="hidden md:flex items-center gap-[30px]">
          {/* #home targets your hero section */}
          <a href="#home" className="text-white hover:text-[#8B5CF6] text-[14.5px] font-medium transition-colors">
            Home
          </a>
          
          {/* #about targets your About section */}
          <a href="#about" className="text-white hover:text-[#8B5CF6] text-[14.5px] font-medium transition-colors">
            About
          </a>
          
          {/* #services targets your Process/Services section */}
          <a href="#services" className="text-white hover:text-[#8B5CF6] text-[14.5px] font-medium transition-colors">
            Services
          </a>

          {/* #case-studies targets your Case Studies section */}
          <a href="#case-studies" className="text-white hover:text-[#8B5CF6] text-[14.5px] font-medium transition-colors">
            Case Studies
          </a>
          
          {/* #contact targets your Contact section */}
          <a href="#contact" className="text-white hover:text-[#8B5CF6] text-[14.5px] font-medium transition-colors">
            Contact
          </a>
        </div>

        {/* --- CALL CTA BUTTON --- */}
        <div>
          <a 
            href="#contact" 
            className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-[13.5px] font-medium py-[8px] px-[18px] rounded-[6px] transition-transform hover:scale-105 inline-block"
          >
            Book A Call
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;