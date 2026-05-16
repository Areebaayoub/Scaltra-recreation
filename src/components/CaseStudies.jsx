import React, { useState, useEffect } from 'react';

const CaseStudies = () => {
  const caseStudiesData = [
    {
      id: 1,
      mainTitle: "Hobart Chargers",
      client: "Hobart Chargers",
      problem: "Brand Refresh & Matchday Design System",
      solution: "New Logo, New Branding System, Match Day & Event Templates, Sponsorship Deck Designs, Merch Mockups",
      result: "This project gave Hobart Chargers a complete identity system designed for the realities of modern sport—fast content cycles, multi-channel visibility, and sponsor-facing professionalism. The result is a unified, confident brand that looks consistent everywhere, scales effortlessly, and supports the club’s growth on and off the court.",
      image: "https://scaltra.io/wp-content/uploads/2026/02/Hobart_Chargers_Logo_final-11-1024x1024.jpg",
      link: "/case-study/hobart-chargers-brand-refresh-case-study/"
    },
    {
      id: 2,
      mainTitle: "Perth Lymph",
      client: "Perth Lymph — Lymphoedema, Lipoedema, Cancer Care & Physiotherapy (Belmont, Perth)",
      problem: "Their website needed to clearly communicate specialist services, build trust quickly, and guide visitors toward booking a session—while keeping the experience calm, supportive, and easy to navigate for patients.",
      solution: "Conversion-focused homepage flow, Clear service segmentation, FAQ content designed to reduce friction, Strong booking CTA + admin clarity",
      result: "The Perth Lymph website was designed to act as a calm, trustworthy digital front desk—clearly communicating specialised services while guiding patients toward booking with confidence. Through structured service presentation, friction-reducing FAQs, and conversion-focused page flow, the final site supports both patient experience and clinic growth.",
      image: "https://scaltra.io/wp-content/uploads/2026/02/imgi_8_Veera-03-scaled-1-1024x1024.jpg",
      link: "/case-study/perth-lymph-website/"
    },
    {
      id: 3,
      mainTitle: "Wiwanthai Massage",
      client: "Wiwanthai",
      problem: "Website Redesign",
      solution: "Clear content structure that educates and converts, Strong contact accessibility (especially for mobile), Booking-enabled build with scalable management, WordPress + Elementor + WooCommerce",
      result: "40% increase in online bookings \n +60% improvement in mobile traffic",
      image: "https://scaltra.io/wp-content/uploads/2026/02/imgi_12_logo-4.webp",
      link: "#"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % caseStudiesData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [caseStudiesData.length]);

  const currentStudy = caseStudiesData[activeSlide];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400;500;600;700&display=swap');
        `}
      </style>

      {/* FIX 1: Section Padding (py) reduced from 100px to 60px to prevent scrolling */}
      {/* ADDED: id="case-studies" right here to link it with the Navbar toggle seamlessly */}
      <section id="case-studies" className="w-full bg-[#000] font-['Figtree'] py-[40px] md:py-[60px] px-[20px] overflow-hidden">
        
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center gap-[40px] md:gap-[60px]">
          
          {/* --- LEFT SIDE: CONTENT --- */}
          <div className="w-full md:w-[50%] flex flex-col items-start text-left">
            
            {/* Badge margin reduced */}
            <div className="mb-[10px]">
               <span className="inline-block bg-transparent border border-white/20 text-white text-[11px] font-medium py-[4px] px-[12px] rounded-[4px] tracking-wide">
                  Case Studies
               </span>
            </div>

            {/* Main Heading (FIXED: Size increased, fontWeight reduced to 400 for clean look) */}
            <h2 
              className="text-[#8B5CF6] text-[40px] md:text-[54px] leading-[1.1] tracking-tight mb-[16px]"
              style={{ fontFamily: "'Rethink Sans', sans-serif", fontWeight: 400 }}
            >
              {currentStudy.mainTitle}
            </h2>

            {/* FIX 2: Gap between sub-blocks reduced from 15px to 10px */}
            <div className="flex flex-col gap-[10px] w-full">
              
              {/* Client */}
              <div>
                {/* FIX 3: Subheadings shrunk (16px) & Margin-bottom minimized (2px) */}
                <h3 className="text-white text-[16px] font-medium mb-[2px]">Client</h3>
                {/* FIX 4: Text color forced to #ffffff (pure white) and size scaled to 15.5px */}
                <p className="text-[#ffffff] font-normal text-[15.5px] leading-[1.4]">{currentStudy.client}</p>
              </div>

              {/* Problem */}
              <div>
                <h3 className="text-white text-[16px] font-medium mb-[2px]">Problem</h3>
                <p className="text-[#ffffff] font-normal text-[15.5px] leading-[1.4]">{currentStudy.problem}</p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-white text-[16px] font-medium mb-[2px]">Solution</h3>
                <p className="text-[#ffffff] font-normal text-[15.5px] leading-[1.4]">{currentStudy.solution}</p>
              </div>

              {/* Result */}
              <div>
                <h3 className="text-white text-[16px] font-medium mb-[2px]">Result</h3>
                <p className="text-[#ffffff] font-normal text-[15.5px] leading-[1.4] whitespace-pre-line">{currentStudy.result}</p>
              </div>

            </div>

            {/* FIX 5: Button margin-top reduced so it stays visible */}
            <div className="mt-[20px]">
              <a href={currentStudy.link} className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-[13px] font-medium py-[8px] px-[18px] rounded-[4px] transition-transform hover:scale-105 inline-block">
                See Full Case Study
              </a>
            </div>

          </div>

          {/* --- RIGHT SIDE: IMAGE --- */}
          <div className="w-full md:w-[50%] flex justify-center items-center relative">
            {/* Aapka perfect 330px wala size locked hai! */}
            <img 
              src={currentStudy.image} 
              alt={currentStudy.mainTitle} 
              className="w-full max-w-[330px] rounded-[24px] object-cover shadow-2xl transition-opacity duration-500 ease-in-out block mx-auto"
            />
          </div>

        </div>

        {/* --- SLIDER DOTS --- */}
        {/* Dots margin-top reduced from 40px to 24px */}
        <div className="max-w-[1100px] mx-auto flex justify-center gap-[10px] mt-[24px]">
          {caseStudiesData.map((_, index) => (
            <button 
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-[8px] h-[8px] rounded-full transition-colors duration-300 ${activeSlide === index ? 'bg-[#8B5CF6]' : 'bg-white/20 hover:bg-white/40'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </section>
    </>
  );
};

export default CaseStudies;