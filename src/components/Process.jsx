import React from 'react';

const Process = () => {
  const processData = [
    {
      step: "Step 1",
      title: "Strategy Session",
      description: "We understand your business, your goals, and your growth potential.",
      image: "https://scaltra.io/wp-content/uploads/2026/02/Capture2.jpg"
    },
    {
      step: "Step 2",
      title: "Execution",
      description: "We implement marketing, apps, websites, and design that actually generate revenue.",
      image: "https://scaltra.io/wp-content/uploads/2026/02/CODE.gif"
    },
    {
      step: "Step 3",
      title: "Results",
      description: "More leads, more sales, more growth. You see measurable results fast.",
      image: "https://scaltra.io/wp-content/uploads/2026/02/SLACK.gif"
    }
  ];

  return (
    <section className="w-full bg-[#000] font-['Figtree'] py-[80px] md:py-[100px] px-[20px] overflow-hidden">
      
      {/* --- HEADER SECTION --- */}
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center mb-[50px]">
        
        {/* Main Badge */}
        <div className="mb-[20px]">
           <span className="inline-block bg-[#0b0b0f] border border-white/10 text-white text-[12px] font-medium py-[6px] px-[16px] rounded-[4px] tracking-wide">
              Our Process
           </span>
        </div>

        {/* --- EXACT FIX FROM DEVTOOLS SCREENSHOT --- */}
        {/* Font-weight 400, Desktop 50px, Mobile 24px */}
        <h2 className="text-[#ffffff] font-[400] text-[24px] md:text-[50px] leading-[1.2] tracking-tight">
          Our Growth Process is Simple, Proven, and Fast
        </h2>

      </div>

      {/* --- 3-COLUMN PROCESS GRID --- */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {processData.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#080808] border border-white/[0.08] rounded-[24px] px-[30px] py-[12px]  flex flex-col items-start text-left hover:border-white/20 transition-all duration-300"
          >
            
            {/* Step Badge */}
            <div className="mb-[25px]">
              <span className="inline-block bg-[#161616] border border-white-[0.05] text-[#e2e8f0] text-[11px] font-semibold py-[6px] px-[12px] rounded-[6px]">
                {item.step}
              </span>
            </div>

            {/* --- FIX: Card Title --- */}
            {/* Removed Rethink Sans, using default Figtree with 400 weight */}
            <h3 className="text-white font-[400] text-[24px] md:text-[35px] tracking-tight mb-[15px]">
              {item.title}
            </h3>

            {/* Card Description */}
            <p className="text-white font-[400] text-[15px] md:text-[16px] leading-[1.6] mb-[35px] flex-grow">
              {item.description}
            </p>

            {/* Images/GIFs */}
            <div className="w-full mt-auto">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full rounded-[12px] object-cover border border-white/5 opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Process;