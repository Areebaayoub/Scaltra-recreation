import React from 'react';

const Services = () => {
  const servicesData = [
    {
      title: "Marketing",
      description: "SEO, Paid Ads, Organic Social—We don't just get clicks, we get customers.",
      icon: (
        // Icon size thora aur chota (24px) aur margin bottom kam kiya (12px)
        <svg className="w-[24px] h-[24px] text-[#8B5CF6] mb-[12px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    {
      title: "Mobile Apps",
      description: "Custom apps that drive engagement, retention, and revenue. Built for your business goals",
      icon: (
        <svg className="w-[24px] h-[24px] text-[#8B5CF6] mb-[12px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Design",
      description: "Branding, graphics, UI/UX, everything aligned to your growth and revenue goals.",
      icon: (
        <svg className="w-[24px] h-[24px] text-[#8B5CF6] mb-[12px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Websites",
      description: "Websites designed to convert visitors into paying customers, fast.",
      icon: (
        <svg className="w-[24px] h-[24px] text-[#8B5CF6] mb-[12px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400;500;600&display=swap');
        `}
      </style>

      <section id="services" className="w-full bg-[#000] font-['Figtree'] py-[80px] md:py-[100px] px-[20px] overflow-hidden">
        
        {/* CENTERED HEADER SECTION */}
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center mb-[30px]">
           
           <div className="mb-[15px]">
               <span className="inline-block bg-[#0b0b0f] border border-white/10 text-white text-[12px] font-medium py-[6px] px-[16px] rounded-[4px] tracking-wide">
                  Services Overview
               </span>
           </div>
           
           <h2 className="text-[#ffffff] font-semibold text-[32px] md:text-[44px] leading-[1.2] tracking-tight w-full">
               Services That Actually Grow Your Business
           </h2>
        </div>

        {/* SERVICES GRID */}
        {/* Grid gap ko 24px se 20px kiya hai further compact feel ke liye */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[20px]">
           {servicesData.map((service, index) => (
               <div 
                  key={index} 
                  /* FIX: Padding ko aur shrink karke p-[24px] md:p-[28px] kiya hai */
                  className="bg-[#0f0a18] border border-[#241a35] rounded-[16px] p-[24px] md:p-[28px] flex flex-col items-start text-left hover:border-[#3b2b56] transition-all duration-300 group"
               >
                   <div className="transform group-hover:scale-105 transition-transform duration-300">
                      {service.icon}
                   </div>
                   
                   {/* FIX: Title size 24px se 22px aur margin kam kiya */}
                   <h3 
                      className="text-white text-[22px] tracking-[0.5px] capitalize mb-[8px]" 
                      style={{ fontFamily: "'Rethink Sans', sans-serif", fontWeight: 500 }}
                   >
                      {service.title}
                   </h3>
                   
                   {/* FIX: Description size 15px se 14.5px aur margin shrink kiya */}
                   <p className="text-[#a1a1aa] text-[14.5px] leading-[1.6] mb-[20px] flex-grow">
                       {service.description}
                   </p>
                   
                   {/* FIX: Button padding further compact */}
                   <div className="mt-auto">
                      <a href="#" className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-[12.5px] font-medium py-[7px] px-[16px] rounded-[4px] transition-transform hover:scale-105 inline-block">
                         Learn More
                      </a>
                   </div>
               </div>
           ))}
        </div>

      </section>
    </>
  );
};

export default Services;