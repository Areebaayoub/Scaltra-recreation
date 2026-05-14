import React from 'react';

const LogosTicker = () => {
  const logosList = [
    <div key="1" className="flex items-center gap-3 mx-10 md:mx-16 relative group">
        <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-12 h-12 bg-blue-500 rounded-full blur-[2px] relative z-10"></div>
        <span className="text-2xl font-bold tracking-tight text-white relative z-10">The Washhouse</span>
    </div>,
    <div key="2" className="flex flex-col items-center mx-10 md:mx-16 relative group">
        <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <span className="text-3xl font-black tracking-widest text-red-600 relative z-10">TNT</span>
        <span className="text-sm font-semibold tracking-[0.2em] text-red-800 relative z-10">SEALING</span>
    </div>,
    <div key="3" className="flex items-center gap-3 mx-10 md:mx-16 relative group">
        <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-10 h-10 bg-pink-500 transform rotate-45 relative z-10"></div>
        <span className="text-xl font-medium tracking-wide text-white relative z-10">MASSAGE</span>
    </div>
  ];

  return (
    <section className="py-16 px-6 border-t border-white/5 bg-[#050505] overflow-hidden">
      
      {/* CSS Animation inject ki gayi hai (Time 20s se 40s kar diya gaya hai for slower speed) */}
      <style>
        {`
          @keyframes scrollTicker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-ticker {
            display: flex;
            width: max-content;
            /* Yahan 40s kiya hai taake speed slow ho jaye */
            animation: scrollTicker 40s linear infinite; 
          }
          .animate-ticker:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Top Heading */}
      <div className="max-w-7xl mx-auto mb-12">
         <p className="text-center text-sm font-semibold tracking-widest text-white uppercase opacity-90">
             Trusted by 102+ Australian Businesses
         </p>
      </div>

      {/* Ticker Container */}
      <div className="relative w-full max-w-[100vw] overflow-hidden flex mb-24 opacity-80 hover:opacity-100 transition-opacity duration-300">
          
          <div className="absolute left-0 top-0 w-24 md:w-40 h-full bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-24 md:w-40 h-full bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>
          
          <div className="animate-ticker items-center cursor-pointer">
              {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center">
                      {logosList}
                  </div>
              ))}
          </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white">102+</h3>
              <p className="text-gray-400 text-sm font-medium">Businesses Served Across Australia</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white">500+</h3>
              <p className="text-gray-400 text-sm font-medium">Campaigns Run</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white">$12M+</h3>
              <p className="text-gray-400 text-sm font-medium">Ad Spend Optimized</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white">100%</h3>
              <p className="text-gray-400 text-sm font-medium">Custom Mobile Apps Delivered</p>
            </div>
          </div>

          {/* Center Button */}
          <div className="flex justify-center mt-16">
              <button className="bg-transparent border border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-300">
                  See Case Studies
              </button>
          </div>
      </div>

    </section>
  );
};

export default LogosTicker;