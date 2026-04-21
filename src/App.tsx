import React from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Tech from './components/sections/Tech';
import Projects from './components/sections/Projects';
import Steps from './components/sections/Steps';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Tech />
        <Projects />
        <Steps />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
