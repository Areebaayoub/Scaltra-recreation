import React from 'react';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-36 pb-20 px-4 md:px-8 w-full relative overflow-hidden bg-[#050505]">
      
      {/* --- SUPER DENSE WHITE GALAXY STARS START --- */}
      <style>
        {`
          @keyframes spaceRotate {
            from { transform: translateY(0); }
            to { transform: translateY(-1000px); }
          }
          .star-layer {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 200%;
            height: 200%;
            pointer-events: none;
            z-index: 0;
          }
          /* Layer 1: Choty aur bohat saare dense stars */
          .stars-dense-small {
            background: radial-gradient(1px 1px at 10px 10px, #fff, rgba(0,0,0,0)),
                        radial-gradient(1px 1px at 50px 50px, #fff, rgba(0,0,0,0)),
                        radial-gradient(1px 1px at 100px 100px, #fff, rgba(0,0,0,0)),
                        radial-gradient(1.5px 1.5px at 150px 150px, #fff, rgba(0,0,0,0));
            background-size: 150px 150px; /* Chota size = zyada density */
            animation: spaceRotate 120s linear infinite;
            opacity: 0.6;
          }
          /* Layer 2: Thore bare aur wazeh white stars */
          .stars-dense-bold {
            background: radial-gradient(2px 2px at 20px 80px, #fff, rgba(0,0,0,0)),
                        radial-gradient(2px 2px at 120px 20px, #fff, rgba(0,0,0,0)),
                        radial-gradient(1.5px 1.5px at 200px 180px, #fff, rgba(0,0,0,0));
            background-size: 250px 250px;
            animation: spaceRotate 180s linear infinite;
            opacity: 0.5;
          }
        `}
      </style>
      
      <div className="star-layer stars-dense-small"></div>
      <div className="star-layer stars-dense-bold"></div>
      {/* --- SUPER DENSE WHITE GALAXY STARS END --- */}

      {/* Faint Purple Glow Behind Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1100px] mx-auto text-center flex flex-col items-center">
         
         {/* Top Badge */}
         <div className="inline-flex items-center gap-3 border border-white/10 rounded-full p-1 pr-5 mb-8 bg-white/5 backdrop-blur-sm">
             <span className="bg-[#8B5CF6] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                 New
             </span>
             <span className="text-gray-300 text-sm font-medium">
                 Growth Solutions
             </span>
         </div>
         
         {/* Main Heading */}
         <h1 className="text-4xl md:text-5xl lg:text-[54px] xl:text-[55px] font-bold tracking-tight text-white mb-6 leading-[1.15] w-full max-w-[1050px] mx-auto">
            We Help Australian Businesses <br className="hidden md:block" />
            Get More Leads, Sales, and Revenue Fast
         </h1>
         
         {/* Subheading */}
         <p className="text-gray-400 text-lg md:text-[20px] mb-10 font-normal max-w-3xl mx-auto">
            Marketing, Apps, Websites, and Design Built to Drive Results, Not Just Look Pretty
         </p>
         
         {/* Two Buttons Row */}
         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-base font-semibold py-3.5 px-6 rounded-md transition-colors flex items-center gap-2 group">
               Book Your Free Growth Call 
               <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="bg-transparent border border-white/10 text-white hover:bg-white/5 text-base font-semibold py-3.5 px-6 rounded-md transition-colors">
               See How We've Helped 102+ Businesses
            </button>
         </div>

      </div>
    </section>
  );
};

export default Hero;