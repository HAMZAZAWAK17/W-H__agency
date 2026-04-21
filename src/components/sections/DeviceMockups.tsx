import React from 'react';
import { motion } from 'framer-motion';

export const DeviceMockups: React.FC = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-video flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full animate-pulse" />
      
      {/* Laptop Mockup */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ 
          x: 0,
          opacity: 1,
          y: [0, -15, 0],
          rotateZ: [0, 1, 0]
        }}
        transition={{ 
          duration: 1,
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative z-10 w-4/5 -ml-20"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon)] to-[var(--electric)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img 
            src="/src/assets/hero-laptop.png" 
            alt="Laptop Mockup" 
            className="relative glass w-full rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>
      </motion.div>

      {/* Separate Phone Mockup */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ 
          x: 0,
          opacity: 1,
          y: [0, 20, 0],
          rotateZ: [0, -2, 0]
        }}
        transition={{ 
          duration: 1,
          delay: 0.2,
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          rotateZ: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
        className="absolute right-0 top-1/4 z-20 w-1/4"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          
          {/* Futuristic CSS Phone */}
          <div className="relative w-full aspect-[9/19] bg-background/80 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 p-2 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            
            {/* Screen Content */}
            <div className="h-full w-full rounded-[2rem] bg-[#050b1a] overflow-hidden flex flex-col p-4 space-y-3">
              <div className="h-4 w-12 bg-white/10 rounded-full mx-auto mb-2" /> {/* Notch */}
              
              <div className="space-y-2">
                <div className="h-2 w-3/4 bg-[var(--neon)]/50 rounded" />
                <div className="h-2 w-1/2 bg-white/10 rounded" />
              </div>
              
              <div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-2 flex items-end">
                <div className="w-full space-y-1">
                  <div className="h-1 w-full bg-white/10 rounded" />
                  <div className="h-1 w-2/3 bg-white/10 rounded" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 h-16">
                <div className="rounded-lg bg-primary/20 animate-pulse" />
                <div className="rounded-lg bg-secondary/20 animate-pulse delay-75" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating UI Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-10 left-1/4 z-30 glass px-3 py-1.5 rounded-lg border border-primary/30 text-[10px] font-bold text-primary shadow-glow-soft"
      >
        ACTIVE NODES: 24
      </motion.div>
    </div>
  );
};
