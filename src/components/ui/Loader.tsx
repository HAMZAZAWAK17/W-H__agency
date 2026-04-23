import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -100,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-3xl border-2 border-primary/30 bg-primary/5 flex items-center justify-center shadow-[0_0_50px_rgba(0,242,255,0.2)]">
                <span className="text-primary text-4xl font-black font-display italic tracking-tighter">WH</span>
              </div>
              
              {/* Spinning Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-t-2 border-primary/20 rounded-full"
              />
            </motion.div>

            {/* Text Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.5, duration: 0.5 }
              }}
              className="mt-8 text-center"
            >
              <h2 className="text-xl font-bold tracking-[0.3em] uppercase">
                W&H <span className="text-primary">Agency</span>
              </h2>
              <div className="mt-2 h-1 w-48 bg-muted/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-primary shadow-[0_0_10px_var(--neon)]"
                />
              </div>
            </motion.div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
