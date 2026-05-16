import React from 'react';

const AboutUs = () => {
  return (
    // FIX: Only injected id="about" right here to enable smooth scroll functionality. No other style or tag touched!
    <section id="about" className="relative w-full bg-[#000] font-['Figtree'] py-[80px] md:py-[120px] px-[20px] overflow-hidden">
      
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-[40px] md:gap-[80px]">
        
        {/* --- LEFT SIDE: 3D LOGO IMAGE --- */}
        <div className="w-full md:w-1/2 flex justify-center p-[20px]">
          <img 
            src="https://scaltra.io/wp-content/uploads/2026/02/scaltra-logo-10-scaled.png" 
            alt="Scaltra 3D Logo" 
            className="w-[60%] rounded-[20px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* --- RIGHT SIDE: CONTENT SECTION --- */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          
          {/* Exact "About Us" Badge (Border softened, text slightly smaller) */}
          <div className="mb-[20px]">
             <span className="inline-block bg-transparent border border-white/10 text-white text-[12px] font-medium py-[6px] px-[14px] rounded-[4px] tracking-wide">
                About Us
             </span>
          </div>

          {/* Main Heading (Weight reduced to font-medium, tighter tracking/leading) */}
          <h2 className="text-[#ffffff] font-medium text-[36px] md:text-[50px] leading-[1.1] tracking-[-0.02em] mb-[20px] max-w-[500px]">
            Where Strategy Meets Spectacle
          </h2>

          {/* Paragraph (Color changed to softer grey #a1a1aa, line height adjusted) */}
          <p className="text-[#a1a1aa] font-normal text-[16px] md:text-[17px] leading-[1.2] mb-[35px] max-w-[550px]">
            Scaltra, a creative agency built for brands that refuse to play it safe. We exist to transform ideas into powerful visual stories, stories that cut through the noise, stop the scroll, and leave lasting impact. <a href="https://scaltra.io/case-studies/" className="text-[#8B5CF6] hover:underline font-medium transition-colors">Our Work</a> isn’t just about design or animation. It is about engineering emotion, attention, and recognition in a digital world that’s always moving faster.
          </p>

          {/* "Learn More" Button (Text made slightly bolder and larger) */}
          <a href="/about/" className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-[14px] font-semibold py-[6px] px-[24px] rounded-[4px] transition-transform hover:scale-105 inline-block">
            Learn More
          </a>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;