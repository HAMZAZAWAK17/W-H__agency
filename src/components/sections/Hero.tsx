import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="glow-spot top-[-10%] left-[-10%]" />
      <div className="glow-spot-secondary bottom-[-20%] right-[-10%]" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-primary">Available for new projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Turn Your Ideas <br />
            Into <span className="neon-text">Reality</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-lg">
            Web • Mobile • Digital Solutions — crafted by two software engineers who care about the details.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary group">
              Let's Build Together
              <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline">
              Our Work
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Main Visual */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotateZ: [0, 1, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative z-10"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="/src/assets/hero-mockup.png" 
                alt="W&H Agency Mockup" 
                className="relative glass w-full rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Particle Effects / Floating elements */}
          <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
