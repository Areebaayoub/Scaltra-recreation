import React from 'react';

const Process = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Strategy Session",
      description: "We understand your business, your goals, and your growth potential.",
      graphic: (
        <div className="bg-[#111111] rounded-xl p-4 border border-white/5 space-y-3 h-full">
            {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded w-full"></div>
                </div>
            ))}
            <div className="h-1.5 bg-white/5 rounded w-2/3 ml-6"></div>
        </div>
      )
    },
    {
      step: "Step 2",
      title: "Execution",
      description: "We implement marketing, apps, websites, and design that actually generate revenue.",
      graphic: (
        <div className="bg-[#0a0a0a] rounded-xl p-4 border border-white/5 font-mono text-[10px] text-gray-400 h-full">
            <div className="flex gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
            </div>
            <p className="text-purple-400">class <span className="text-blue-400">GrowthEngine</span>:</p>
            <p className="pl-3">def <span className="text-yellow-200">execute</span>(self):</p>
            <p className="pl-6 text-green-400">return "More Revenue"</p>
        </div>
      )
    },
    {
      step: "Step 3",
      title: "Results",
      description: "More leads, more sales, more growth. You see measurable results fast.",
      graphic: (
        <div className="bg-[#111111] rounded-xl p-4 border border-white/5 h-full flex items-end gap-2">
             <div className="w-full bg-purple-900/30 rounded-t-sm h-1/3 hover:bg-purple-500/40 transition-colors"></div>
             <div className="w-full bg-purple-800/40 rounded-t-sm h-1/2 hover:bg-purple-500/50 transition-colors"></div>
             <div className="w-full bg-purple-600/50 rounded-t-sm h-3/4 hover:bg-purple-500/70 transition-colors"></div>
             <div className="w-full bg-purple-500 rounded-t-sm h-full shadow-[0_0_15px_rgba(139,92,246,0.4)]"></div>
        </div>
      )
    }
  ];

  return (
    // UPDATED: py-24 ki jagah py-12 kar diya taake top/bottom space kam ho jaye
    <section className="py-12 px-6 max-w-7xl mx-auto w-full overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 w-full"> {/* mb-16 se mb-10 */}
         <div className="inline-block border border-white/10 rounded-lg px-4 py-1.5 mb-5 bg-[#0a0a0a]">
             <span className="text-gray-200 text-xs font-medium tracking-wide">Our Process</span>
         </div>
         
         {/* Font size thora adjust kiya taake screen par easily fit ho */}
         <h2 className="text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] font-medium tracking-tight text-white lg:whitespace-nowrap w-full">
             Our Growth Process is Simple, Proven, and Fast
         </h2>
      </div>

      {/* Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
         {steps.map((item, index) => (
             // UPDATED: p-8 ki jagah p-6 kar diya taake card compact lagay
             <div key={index} className="bg-[#050505] border border-white/10 rounded-2xl p-6 flex flex-col h-full hover:border-white/20 transition-colors duration-300">
                 
                 <div className="inline-block bg-[#111] border border-white/5 rounded-md px-3 py-1 text-xs font-medium text-white mb-5 self-start">
                     {item.step}
                 </div>
                 
                 <h3 className="text-2xl md:text-[28px] font-medium tracking-tight text-white mb-2">
                     {item.title}
                 </h3>
                 
                 <p className="text-[#a1a1aa] text-[15px] leading-relaxed mb-6 flex-grow">
                     {item.description}
                 </p>
                 
                 {/* UPDATED: Height h-40 se kam kar ke h-32 kar di */}
                 <div className="h-32 w-full mt-auto">
                     {item.graphic}
                 </div>
                 
             </div>
         ))}
      </div>

    </section>
  );
};

export default Process;