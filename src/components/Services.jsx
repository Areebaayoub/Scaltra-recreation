import React from 'react';

const Services = () => {
  const servicesData = [
    {
      title: "Marketing",
      description: "SEO, Paid Ads, Organic Social—We don't just get clicks, we get customers.",
      icon: (
        <svg className="w-7 h-7 text-[#8B5CF6] mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    {
      title: "Mobile Apps",
      description: "Custom apps that drive engagement, retention, and revenue. Built for your business goals",
      icon: (
        <svg className="w-7 h-7 text-[#8B5CF6] mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Design",
      description: "Branding, graphics, UI/UX, everything aligned to your growth and revenue goals.",
      icon: (
        <svg className="w-7 h-7 text-[#8B5CF6] mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Websites",
      description: "Websites designed to convert visitors into paying customers, fast.",
      icon: (
        <svg className="w-7 h-7 text-[#8B5CF6] mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    // Container width reduced from 7xl to 5xl for a more compact, premium look
    <section id="services" className="py-20 px-6 max-w-5xl mx-auto">
      
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-14 w-full">
         <div className="inline-block border border-white/10 rounded-lg px-4 py-1.5 mb-5 bg-[#0a0a0a]">
             <span className="text-gray-300 text-xs font-medium tracking-wide">Services Overview</span>
         </div>
         
         <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight text-white w-full">
             Services That Actually Grow Your Business
         </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
         {servicesData.map((service, index) => (
             <div 
                key={index} 
                className="bg-[#0e0a16] border border-white/5 rounded-2xl p-7 md:p-8 flex flex-col justify-start hover:bg-[#130e1d] transition-colors duration-300"
             >
                 {/* Icon */}
                 {service.icon}
                 
                 {/* Card Title */}
                 <h3 className="text-2xl font-semibold tracking-tight text-white mb-3">
                    {service.title}
                 </h3>
                 
                 {/* Card Description */}
                 <p className="text-gray-400 text-[15px] leading-relaxed mb-8 flex-grow">
                     {service.description}
                 </p>
                 
                 {/* Button at the bottom */}
                 <div className="mt-auto">
                    <button className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-[13px] font-semibold py-2 px-5 rounded-md transition-colors duration-300 shadow-sm shadow-purple-500/20">
                       Learn More
                    </button>
                 </div>
             </div>
         ))}
      </div>

    </section>
  );
};

export default Services;