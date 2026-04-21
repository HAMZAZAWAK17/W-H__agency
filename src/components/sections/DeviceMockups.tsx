import React from 'react';
import { motion } from 'framer-motion';

export const DeviceMockups: React.FC = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-video flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
      
      {/* Floating Mockup */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotateY: [0, 5, 0],
          rotateX: [0, -2, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon)] to-[var(--electric)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img 
            src="/src/assets/hero-mockup.png" 
            alt="Device Mockups" 
            className="relative glass w-full rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>

        {/* Small floating widgets */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-5 glass px-4 py-2 rounded-xl border border-primary/20 text-[10px] font-bold uppercase tracking-widest text-primary shadow-lg hidden lg:block"
        >
          Performance 99%
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-10 -left-5 glass px-4 py-2 rounded-xl border border-secondary/20 text-[10px] font-bold uppercase tracking-widest text-secondary shadow-lg hidden lg:block"
        >
          UI/UX Optimized
        </motion.div>
      </motion.div>

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
    </div>
  );
};
