import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulated progress counter
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712]"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Section */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative mb-12"
            >
              <div className="w-28 h-28 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_80px_rgba(0,242,255,0.15)] overflow-hidden">
                <motion.span 
                  initial={{ y: 40 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
                  className="text-white text-5xl font-black font-display italic tracking-tighter"
                >
                  WH
                </motion.span>
                
                {/* Internal Glow Pulse */}
                <motion.div 
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-primary/5 blur-2xl"
                />
              </div>
              
              {/* Outer Orbital Ring */}
              <svg className="absolute -inset-6 w-40 h-40 -rotate-90">
                <motion.circle
                  cx="80"
                  cy="80"
                  r="78"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/20"
                />
                <motion.circle
                  cx="80"
                  cy="80"
                  r="78"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="490"
                  initial={{ strokeDashoffset: 490 }}
                  animate={{ strokeDashoffset: 490 - (490 * progress) / 100 }}
                  className="text-primary"
                  style={{ strokeLinecap: "round", filter: "drop-shadow(0 0 8px var(--neon))" }}
                />
              </svg>
            </motion.div>

            {/* Content Section */}
            <div className="text-center">
              <div className="overflow-hidden mb-2">
                <motion.h2 
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-2xl font-bold tracking-[0.4em] uppercase text-white"
                >
                  W&H <span className="text-primary">Agency</span>
                </motion.h2>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/20" />
                <motion.span 
                  className="text-4xl font-display font-light text-white/40 tabular-nums"
                >
                  {Math.min(progress, 100)}%
                </motion.span>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/20" />
              </div>
            </div>
          </div>

          {/* Dynamic Background */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -z-10"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default Loader;
