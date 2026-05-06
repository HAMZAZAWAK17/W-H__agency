import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  type: 'curve' | 'tilt' | 'spike' | 'wave';
  color?: string;
  position?: 'top' | 'bottom';
  className?: string;
  reverse?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ 
  type, 
  color = "bg-background", 
  position = 'bottom',
  className = "",
  reverse = false
}) => {
  const getPath = () => {
    switch (type) {
      case 'curve':
        return "M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z";
      case 'tilt':
        return "M0,160L1440,32L1440,320L0,320Z";
      case 'spike':
        return "M0,160L720,0L1440,160L1440,320L0,320Z";
      case 'wave':
        return "M0,96C480,192,960,0,1440,96L1440,320L0,320Z";
      default:
        return "";
    }
  };

  return (
    <div className={`absolute left-0 w-full overflow-hidden leading-[0] z-10 ${
      position === 'top' ? 'top-0 -translate-y-full' : 'bottom-0 translate-y-full'
    } ${reverse ? 'scale-x-[-1]' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="relative block w-[calc(100%+1.3px)] h-[100px]"
        fill="currentColor"
      >
        <path d={getPath()} className="text-background fill-current"></path>
      </svg>
    </div>
  );
};

export default SectionDivider;
