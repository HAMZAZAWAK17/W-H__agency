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
          {/* Mockups Visualization */}
          <div className="relative z-10">
            <div className="glass aspect-video w-full rounded-2xl p-4 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
              <div className="h-full w-full bg-background/40 rounded-lg flex items-center justify-center border border-white/5">
                <div className="space-y-4 w-3/4">
                  <div className="h-4 bg-white/5 rounded w-3/4 animate-pulse" />
                  <div className="h-4 bg-white/5 rounded w-1/2 animate-pulse" />
                  <div className="h-32 bg-white/5 rounded w-full animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 glass w-32 h-64 rounded-3xl p-4 border border-white/10 shadow-2xl overflow-hidden hidden lg:block">
              <div className="h-full w-full bg-background/40 rounded-2xl flex flex-col items-center py-8 space-y-4">
                <div className="w-8 h-8 rounded-full bg-primary/20" />
                <div className="w-12 h-2 bg-white/10 rounded" />
                <div className="w-16 h-24 bg-white/5 rounded-lg" />
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 right-10 w-12 h-12 glass rounded-xl border border-primary/30 flex items-center justify-center text-primary"
          >
            💻
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute top-1/2 -left-10 w-14 h-14 glass rounded-full border border-secondary/30 flex items-center justify-center text-secondary text-2xl"
          >
            ✨
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
