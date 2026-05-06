import React, { useState, useEffect } from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import PfeServices from './components/sections/PfeServices';
import Tech from './components/sections/Tech';
import Projects from './components/sections/Projects';
import Reviews from './components/sections/Reviews';
import Steps from './components/sections/Steps';
import Contact from './components/sections/Contact';
import Map from './components/sections/Map';
import Footer from './components/sections/Footer';
import Loader from './components/ui/Loader';
import CustomCursor from './components/ui/CustomCursor';
import ChatBot from './components/ui/ChatBot';
import SectionDivider from './components/ui/SectionDivider';
import { ScrollReveal } from './components/ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Synchronize with the new dynamic Loader component timing
    const timer = setTimeout(() => setIsLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <ChatBot />
      <Loader />
      
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navbar />
            <main>
              <div className="relative">
                <Hero />
                <SectionDivider type="curve" />
              </div>
              
              <ScrollReveal threshold={0.15}>
                <div className="relative">
                  <About />
                  <SectionDivider type="tilt" reverse />
                </div>
              </ScrollReveal>

              <ScrollReveal threshold={0.15}>
                <div className="relative">
                  <Services />
                  <SectionDivider type="wave" />
                </div>
              </ScrollReveal>

              <ScrollReveal threshold={0.15}>
                <PfeServices />
              </ScrollReveal>

              <ScrollReveal threshold={0.15}>
                <div className="relative">
                  <Tech />
                  <SectionDivider type="tilt" />
                </div>
              </ScrollReveal>

              <ScrollReveal threshold={0.15}>
                <Projects />
              </ScrollReveal>

              <ScrollReveal threshold={0.15}>
                <div className="relative">
                  <Reviews />
                  <SectionDivider type="curve" reverse />
                </div>
              </ScrollReveal>

              <ScrollReveal threshold={0.15}>
                <Steps />
              </ScrollReveal>

              <ScrollReveal threshold={0.15}>
                <div className="relative">
                  <Contact />
                </div>
              </ScrollReveal>

              <ScrollReveal threshold={0.15}>
                <Map />
              </ScrollReveal>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default App;
