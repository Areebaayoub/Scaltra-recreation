import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Big Logo Graphic */}
        <div className="relative flex justify-center items-center order-2 lg:order-1">
            {/* Background glow */}
            <div className="absolute w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>
            
            {/* Stylized 'S' Logo (Agency jaisa premium 3D look dene ki koshish) */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#2a0845] via-[#6441A5] to-[#8a2387] rounded-3xl transform rotate-12 flex items-center justify-center shadow-[0_0_50px_rgba(147,51,234,0.3)] border border-purple-400/20">
                <div className="absolute inset-2 border-2 border-white/10 rounded-2xl"></div>
                <span className="-rotate-12 text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-200 opacity-90 drop-shadow-2xl">
                    S
                </span>
            </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="order-1 lg:order-2">
            {/* Small Badge */}
            <div className="inline-block border border-white/10 rounded-full px-4 py-1.5 mb-6 bg-white/5">
                <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider">About Us</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Where Strategy Meets <br className="hidden l:block" /> Spectacle
            </h2>
            
            {/* Paragraph */}
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Scaltra, a creative agency built for brands that refuse to play it safe. We exist to transform ideas into powerful visual stories, stories that cut through the noise, stop the scroll, and leave lasting impact. <span className="text-white border-b border-purple-500 pb-0.5 cursor-pointer hover:text-purple-400 transition-colors">Our Work</span> isn't just about design or animation. It is about engineering emotion, attention, and recognition in a digital world that's always moving faster.
            </p>
            
            {/* Button */}
            <button className="bg-purple-900/40 hover:bg-purple-600 border border-purple-500/50 hover:border-purple-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
                Learn More
            </button>
        </div>

      </div>
    </section>
  );
};

export default About;