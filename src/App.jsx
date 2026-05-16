import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/AboutUs';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Yeh import kiya
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans overflow-x-hidden selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <CaseStudies />
      <Process />
      <Contact />
      <Footer /> {/* Yeh add kiya */}
    </div>
  );
}

export default App;