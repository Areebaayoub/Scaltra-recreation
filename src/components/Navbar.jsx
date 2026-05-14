import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-black text-white flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded flex items-center justify-center transform rotate-12">
               <span className="-rotate-12 text-white text-sm">S</span>
            </div>
            <span className="tracking-wide">Scaltra</span>
        </div>
        
        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#home" className="hover:text-white transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
          <a href="#services" className="hover:text-white transition-colors duration-300">Services ▾</a>
          <a href="#case-studies" className="hover:text-white transition-colors duration-300">Case Studies</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
        
        {/* Button */}
        <button className="hidden md:block bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold py-2.5 px-6 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300">
          Book A Call
        </button>
      </div>
    </nav>
  );
};

export default Navbar;