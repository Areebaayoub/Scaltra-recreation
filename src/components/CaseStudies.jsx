import React, { useState } from 'react';

const CaseStudies = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Data updated to exactly match the provided screenshots
  const caseStudiesData = [
    {
      title: "Wiwanthai Massage",
      titleColor: "text-[#d8b4fe]", // Light purple to match screenshot
      client: "Wiwanthai",
      problem: "Website Redesign",
      solution: "Clear content structure that educates and converts. Strong contact accessibility (especially for mobile). Booking-enabled build with scalable management, WordPress + Elementor + WooCommerce",
      result: "40% increase in online bookings\n+ 60% improvement in mobile traffic",
      imageBg: "bg-white",
      logoText: "WIWANTHAI MASSAGE",
      logoColor: "text-[#f472b6]", // Pink
      fakeIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-20 h-20 mb-3 text-[#f472b6]">
            <path d="M12 3L22 21H2L12 3z" />
        </svg>
      )
    },
    {
      title: "Connect Physiotherapy",
      titleColor: "text-white",
      client: "Connect Physio",
      problem: "Brand Identity & Patient Experience",
      solution: "Focused homepage flow, Clear service segmentation, FAQ content to reduce friction, Strong booking CTA + admin clarity.",
      result: "Built a calm, trustworthy digital early communicating specialised services while guiding patients.",
      imageBg: "bg-gray-100",
      logoText: "CONNECT PHYSIO",
      logoColor: "text-blue-600",
      fakeIcon: (
         <div className="w-16 h-16 bg-blue-600 rounded-full mb-3 flex items-center justify-center">
             <span className="text-white text-2xl font-bold">C</span>
         </div>
      )
    },
    {
      title: "Hobart Chargers",
      titleColor: "text-[#a855f7]", // Solid purple matching screenshot
      client: "Hobart Chargers",
      problem: "Brand Refresh & Matchday Design System",
      solution: "New Logo, New Branding System, Match Day & Event Templates, Sponsorship Deck Designs, Merch Mockups",
      result: "This project gave Hobart Chargers a complete identity system designed for the realities of modern sport—fast content cycles, multi-channel visibility, and sponsor-facing professionalism. The result is a unified, confident brand that looks consistent everywhere, scales effortlessly, and supports the club's growth on and off the court.",
      imageBg: "bg-[#5a678f]", // The grayish-blue background from your screenshot
      logoText: "HOBART CHARGERS",
      logoColor: "text-white",
      fakeIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 mb-2 text-white opacity-90">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-14.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 11h-4v-1h4v1zm0-3h-4v-1h4v1zm0-3h-4v-1h4v1z" />
        </svg>
      )
    }
  ];

  return (
    // Top/Bottom padding reduced (py-24 to py-12) to fit everything in one view
    <section id="case-studies" className="py-12 px-6 max-w-7xl mx-auto">
      
      {/* Header Margin Reduced */}
      <div className="flex justify-start mb-10">
         <div className="inline-block border border-white/10 rounded-lg px-3 py-1 bg-[#0a0a0a]">
             <span className="text-gray-300 text-xs font-semibold tracking-wide">Case Studies</span>
         </div>
      </div>

      <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              
              {/* Left Side: Text Details */}
              <div className="order-2 lg:order-1 animate-fade-in">
                  <h2 className={`text-4xl lg:text-[44px] font-bold mb-8 tracking-tight ${caseStudiesData[activeSlide].titleColor}`}>
                      {caseStudiesData[activeSlide].title}
                  </h2>
                  
                  {/* Spacing reduced from space-y-6 to space-y-4 */}
                  <div className="space-y-4">
                      <div>
                          <h4 className="text-white text-base font-semibold mb-0.5">Client</h4>
                          <p className="text-gray-300 text-[15px]">{caseStudiesData[activeSlide].client}</p>
                      </div>
                      <div>
                          <h4 className="text-white text-base font-semibold mb-0.5">Problem</h4>
                          <p className="text-gray-300 text-[15px]">{caseStudiesData[activeSlide].problem}</p>
                      </div>
                      <div>
                          <h4 className="text-white text-base font-semibold mb-0.5">Solution</h4>
                          <p className="text-gray-300 text-[15px] leading-relaxed pr-4">{caseStudiesData[activeSlide].solution}</p>
                      </div>
                      <div>
                          <h4 className="text-white text-base font-semibold mb-0.5">Result</h4>
                          <p className="text-gray-300 text-[15px] leading-relaxed pr-4 whitespace-pre-line">
                              {caseStudiesData[activeSlide].result}
                          </p>
                      </div>
                  </div>

                  {/* Button matches the screenshot now (Filled Purple) */}
                  <button className="mt-8 bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-sm font-semibold py-2.5 px-5 rounded-md transition-all duration-300">
                      See Full Case Study
                  </button>
              </div>

              {/* Right Side: Image/Logo Display (Size Reduced) */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  {/* Reduced max-width (max-w-[340px]) to make it proportionally smaller */}
                  <div className={`w-full max-w-[340px] aspect-square ${caseStudiesData[activeSlide].imageBg} rounded-[2rem] flex flex-col items-center justify-center p-6 shadow-2xl transition-colors duration-500`}>
                      {caseStudiesData[activeSlide].fakeIcon}
                      <h3 className={`text-xl font-black text-center tracking-tight ${caseStudiesData[activeSlide].logoColor}`}>
                          {caseStudiesData[activeSlide].logoText}
                      </h3>
                  </div>
              </div>
          </div>

          {/* Slider Dots (Controls) */}
          <div className="flex justify-center gap-2.5 mt-10">
              {caseStudiesData.map((_, index) => (
                  <button 
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-10 h-1.5 rounded-full transition-all duration-300 ${activeSlide === index ? 'bg-[#8B5CF6]' : 'bg-gray-800 hover:bg-gray-600'}`}
                      aria-label={`Go to slide ${index + 1}`}
                  ></button>
              ))}
          </div>
      </div>

    </section>
  );
};

export default CaseStudies;