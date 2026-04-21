import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, hoverGlow = true }) => {
  return (
    <motion.div
      whileHover={hoverGlow ? { y: -5, boxShadow: "0 0 30px rgba(0, 242, 255, 0.2)" } : {}}
      className={cn(
        "glass p-6 rounded-2xl transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
