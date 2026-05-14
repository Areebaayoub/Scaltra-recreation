import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto border-t border-white/5">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
         <div className="inline-block border border-white/10 rounded-full px-4 py-1 mb-6 bg-white/5">
             <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider">Get In Touch</span>
         </div>
         {/* UPDATED: solid color changed to lavender/light purple to match reference images 5 & 6 */}
         <h2 className="text-4xl md:text-5xl font-bold leading-tight text-purple-300 mb-4">
             Stay Ahead in the Digital World
         </h2>
      </div>

      {/* Form Container */}
      <div className="bg-[#0d0a14] border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none"></div>

          <form className="relative z-10 flex flex-col gap-6">
              {/* Row 1: Name & Business Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Name</label>
                      <input type="text" placeholder="Sam" className="bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Business Name</label>
                      <input type="text" placeholder="XYZ company" className="bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" />
                  </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Email</label>
                      <input type="email" placeholder="sam@gmail.com" className="bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Phone</label>
                      <input type="tel" placeholder="+123456789" className="bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" />
                  </div>
              </div>

              {/* Row 3: Select Service */}
              <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Select Service</label>
                  <select className="bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer">
                      <option>Marketing</option>
                      <option>Websites</option>
                      <option>Mobile Apps</option>
                      <option>Design</option>
                  </select>
              </div>

              {/* Row 4: Message */}
              <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Message</label>
                  <textarea rows="4" placeholder="Hi, I am sam..." className="bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"></textarea>
              </div>

              {/* Submit Button */}
              <button type="button" className="mt-4 w-full bg-[#8B5CF6] hover:bg-[#7c3aed] text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]">
                  Book My Free Growth Call
              </button>
          </form>
      </div>

      {/* Premium Luxury CTA Card */}
      <div className="mt-28 mb-10 relative max-w-3xl mx-auto">
          <div className="group relative overflow-hidden rounded-[2rem] p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/40 hover:to-transparent transition-all duration-700 cursor-pointer">
              
              {/* Inner Card content */}
              <div className="relative z-10 bg-[#080510] rounded-[2rem] px-6 py-16 md:py-20 text-center flex flex-col items-center justify-center overflow-hidden">
                  
                  {/* Interactive Ambient Glows */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_60%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="absolute -top-20 -right-20 w-56 h-56 bg-purple-600/20 rounded-full blur-[70px] group-hover:bg-purple-500/30 transition-colors duration-700"></div>
                  <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-indigo-600/20 rounded-full blur-[70px] group-hover:bg-indigo-500/30 transition-colors duration-700"></div>

                  {/* NOTE: This card heading uses a premium gradient already, it's not plain gray */}
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300 mb-4 tracking-tight relative z-20 group-hover:text-white transition-colors duration-500">
                      Ready to Grow Your Business?
                  </h2>
                  <p className="text-gray-400 text-sm mb-10 max-w-md relative z-20 font-light group-hover:text-gray-300 transition-colors duration-500">
                      No spam. 100% actionable advice. $0 risk. <br/> Let's engineer your growth together.
                  </p>
                  
                  {/* Premium Hover-Fill Button */}
                  <button className="relative z-20 group/btn overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-purple-500 to-indigo-500 shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
                      <div className="bg-[#050505] group-hover/btn:bg-transparent transition-colors duration-300 rounded-full px-6 py-3 flex items-center gap-3">
                          <span className="text-white font-medium text-sm tracking-wide">Book My Free Growth Call</span>
                          <span className="text-purple-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300 text-lg">→</span>
                      </div>
                  </button>
              </div>
          </div>
      </div>

    </section>
  );
};

export default Contact;