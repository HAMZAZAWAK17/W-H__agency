import React from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Tech from './components/sections/Tech';
import Projects from './components/sections/Projects';
import Reviews from './components/sections/Reviews';
import Steps from './components/sections/Steps';
import Contact from './components/sections/Contact';
import Map from './components/sections/Map';
import Footer from './components/sections/Footer';

import { ScrollReveal } from './components/ui/ScrollReveal';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal>
          <Tech />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Reviews />
        </ScrollReveal>
        <ScrollReveal>
          <Steps />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
        <ScrollReveal>
          <Map />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
