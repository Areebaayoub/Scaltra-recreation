import React from 'react';

const Hero = () => {
  return (
    <>
      {/* SCALTRA EXACT CUSTOM CSS FROM THEIR <head> */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap');

          /* Logos Marquee Exactly From Source */
          .techbrio-stats-slider2 { width: 100%; overflow: hidden; position: relative; }
          .techbrio-stats-slider2::before { content: ""; position: absolute; top: 0; left: 0; width: 120px; height: 100%; z-index: 2; pointer-events: none; background: linear-gradient(to right, #000 0%, rgba(0,0,0,0) 100%); }
          .techbrio-stats-slider2::after { content: ""; position: absolute; top: 0; right: 0; width: 120px; height: 100%; z-index: 2; pointer-events: none; background: linear-gradient(to left, #000 0%, rgba(0,0,0,0) 100%); }
          .techbrio-stats-track2 { display: flex; align-items: center; gap: 90px; width: max-content; animation: scrollLogos2 120s linear infinite; }
          .techbrio-stats-slider2:hover .techbrio-stats-track2 { animation-play-state: paused; }
          .techbrio-stat-item2 { flex-shrink: 0; position: relative; display: flex; align-items: center; justify-content: center; padding-bottom: 40px; }
          .techbrio-stat-item2::after { content: ""; position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); width: 120px; height: 35px; background: radial-gradient(ellipse at center, rgba(140, 0, 255, 0.6) 0%, rgba(140, 0, 255, 0.35) 40%, rgba(140, 0, 255, 0.1) 70%, transparent 100%); filter: blur(10px); border-radius: 50%; z-index: 0; }
          .techbrio-stat-item2 img { max-height: 70px; width: auto; object-fit: contain; position: relative; z-index: 1; transition: 0.3s ease; }
          .techbrio-stat-item2 img:hover { transform: scale(1.07); }
          @keyframes scrollLogos2 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

          /* Stats Section Exactly From Source */
          .techbrio-stats-wrapper { display: flex; justify-content: center; align-items: center; gap: 60px; flex-wrap: nowrap; animation: floatStats 20s linear infinite; }
          .techbrio-stat-item { min-width: 200px; text-align: center; color: #ffffff; font-family: 'Poppins', sans-serif; display: flex; flex-direction: column; justify-content: center; }
          .techbrio-stat-number { font-size: 38px; font-weight: 700; letter-spacing: 1px; margin-bottom: 10px; line-height: 1.2; }
          .techbrio-stat-text { font-size: 15px; opacity: 0.7; line-height: 1.6; }
          @keyframes floatStats { 0% { transform: translateX(0); } 50% { transform: translateX(-10px); } 100% { transform: translateX(0); } }

          @media (max-width: 768px) {
            .techbrio-stat-item2 img { max-height: 45px; }
            .techbrio-stat-item2::after { width: 80px; height: 25px; }
            .techbrio-stat-number { font-size: 28px; }
            .techbrio-stat-text { font-size: 13px; }
            .techbrio-stats-wrapper { gap: 30px; }
          }
        `}
      </style>

      {/* HERO SECTION CONTAINER */}
      <section className="relative w-full min-h-screen bg-[#000] font-['Figtree'] flex flex-col pt-[150px] overflow-hidden">
        
        {/* EXACT BACKGROUND VIDEO FROM SCALTRA */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-80 mix-blend-screen">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
            src="https://scaltra.io/wp-content/uploads/2026/02/698a60d5894921351waTFeixUj3150.mp4"
          />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto text-center px-[20px] flex flex-col items-center">
          
          {/* --- TOP BADGE (1. Fixed color to purple and structure from real web) --- */}
        {/* --- TOP BADGE (Updated to be 100% Fully Rounded Pill) --- */}
<div className="flex items-center justify-center gap-[15px] mb-[25px]">
  <a href="#" className="bg-[#8B5CF6] text-white text-[13px] font-semibold px-[20px] py-[8px] rounded-full transition-transform hover:scale-105">
    {/* rounded-full use kiya hai poore gol corners ke liye */}
    New
  </a>
  <span className="text-[#e2e8f0] text-[16px]">
    Growth Solutions
  </span>
</div>
          {/* EXACT HEADING */}
          <h1 className="font-semibold text-[24px] md:text-[62px] text-white tracking-tight leading-tight">
  We Help Australian Businesses Get More Leads, Sales, and Revenue Fast
</h1>
          {/* EXACT SUBHEADING */}
          <p className="text-[#ffffff] font-normal text-[16px] md:text-[20px] max-w-[750px] mb-[45px] opacity-80">
            Marketing, Apps, Websites, and Design Built to Drive Results, Not Just Look Pretty
          </p>

          {/* --- EXACT PIXEL-PERFECT BUTTONS --- */}
{/* --- EXACT PIXEL-PERFECT MAIN BUTTONS --- */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-[15px] mb-[80px]">
  
  {/* Button 1: Purple with Left Arrow */}
  <a href="#form" className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-[13px] font-medium py-[10px] px-[12px] rounded-[4px] transition-transform hover:scale-105 flex items-center justify-center gap-[8px] group">
     {/* Arrow on the LEFT */}
     <span className="text-[15px] leading-none group-hover:-translate-x-1 transition-transform">→</span>
     <span>Book Your Free Growth Call</span>
  </a>

  {/* Button 2: Solid Dark Grey (Not Transparent) */}
  <a href="/case-studies/" className="bg-[#32373c] hover:bg-[#1f2327] text-white text-[13px] font-medium py-[10px] px-[12px] rounded-[4px] transition-transform hover:scale-105 flex items-center justify-center">
     See How We’ve Helped 102+ Businesses
  </a>

</div>

        </div>

        {/* --- TRUSTED BY LOGOS (EXACT FROM HTML) --- */}
        <div className="relative z-10 w-full bg-[#000] pt-[50px]">
          <p className="techbrio-stats-text text-center font-normal text-[16px] leading-[1.6] mb-[30px] opacity-100">
            Trusted by 102+ Australian Businesses
          </p>
          
          <div className="techbrio-stats-slider2">
            <div className="techbrio-stats-track2">
              <div className="techbrio-stat-item2"><img src="https://scaltra.io/wp-content/uploads/2026/02/imgi_15_THE-WASHOUSE-LOGO-BLUE-BG-1536x276-1.png" alt="Washouse" /></div>
              <div className="techbrio-stat-item2"><img src="https://scaltra.io/wp-content/uploads/2026/02/imgi_22_Exclusive_Auto_Detail_Logo_FF-01-removebg-preview-e1755279951478.webp" alt="Exclusive Auto" /></div>
              <div className="techbrio-stat-item2"><img src="https://scaltra.io/wp-content/uploads/2026/02/imgi_8_Veera-03-scaled-1.jpg" alt="Veera" /></div>
              <div className="techbrio-stat-item2"><img src="https://scaltra.io/wp-content/uploads/2026/02/imgi_18_Tin_Can_Bay_Signs_Logo-04-1-1024x637-1.webp" alt="Tin Can Bay" /></div>
              <div className="techbrio-stat-item2"><img src="https://scaltra.io/wp-content/uploads/2026/02/imgi_27_ElixirSkinCare-Logos-HOR-1024x225-1.png" alt="Elixir Skin Care" /></div>
              <div className="techbrio-stat-item2"><img src="https://scaltra.io/wp-content/uploads/2026/02/logo-4-768x108-1.webp" alt="Logo 4" /></div>
              
              <div className="techbrio-stat-item2"><img src="https://scaltra.io/wp-content/uploads/2026/02/imgi_15_THE-WASHOUSE-LOGO-BLUE-BG-1536x276-1.png" alt="Washouse" /></div>
              <div className="techbrio-stat-item2"><img src="https://scaltra.io/wp-content/uploads/2026/02/imgi_22_Exclusive_Auto_Detail_Logo_FF-01-removebg-preview-e1755279951478.webp" alt="Exclusive Auto" /></div>
              <div className="techbrio-stat-item2"><img src="https://scaltra.io/wp-content/uploads/2026/02/imgi_8_Veera-03-scaled-1.jpg" alt="Veera" /></div>
              <div className="techbrio-stat-item2"><img src="https://scaltra.io/wp-content/uploads/2026/02/imgi_18_Tin_Can_Bay_Signs_Logo-04-1-1024x637-1.webp" alt="Tin Can Bay" /></div>
              <div className="techbrio-stat-item2"><img src="https://scaltra.io/wp-content/uploads/2026/02/imgi_27_ElixirSkinCare-Logos-HOR-1024x225-1.png" alt="Elixir Skin Care" /></div>
              <div className="techbrio-stat-item2"><img src="https://scaltra.io/wp-content/uploads/2026/02/logo-4-768x108-1.webp" alt="Logo 4" /></div>
            </div>
          </div>
        </div>

        {/* --- STATS SECTION (EXACT FROM HTML) --- */}
        <div className="relative z-10 w-full bg-[#000] pb-[80px]">
          <div className="techbrio-stats-wrapper">
              <div className="techbrio-stat-item">
                  <div className="techbrio-stat-number">102+</div>
                  <div className="techbrio-stat-text">Businesses Served Across Australia</div>
              </div>
              <div className="techbrio-stat-item">
                  <div className="techbrio-stat-number">500+</div>
                  <div className="techbrio-stat-text">Campaigns Run</div>
              </div>
              <div className="techbrio-stat-item">
                  <div className="techbrio-stat-number">$12M+</div>
                  <div className="techbrio-stat-text">Ad Spend Optimized</div>
              </div>
              <div className="techbrio-stat-item">
                  <div className="techbrio-stat-number">100%</div>
                  <div className="techbrio-stat-text">Custom Mobile Apps Delivered</div>
              </div>
          </div>
          
          {/* --- EXACT CASE STUDIES BUTTON --- */}
{/* --- EXACT CASE STUDIES BUTTON (Updated from Inspect Element) --- */}
<div className="flex justify-center mt-[40px]">
   <a href="https://scaltra.io/case-studies/" className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-[13px] font-medium py-[10px] px-[12px] rounded-[4px] transition-colors inline-block">
      See Case Studies
   </a>
</div>
        </div>

      </section>
    </>
  );
};

export default Hero;