import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  // Custom cursor removed by user request
  return null;
};

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Fast spring for the dot
  const dotSpringConfig = { damping: 25, stiffness: 500, mass: 0.3 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  // Medium spring for the ring
  const ringSpringConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  // Very slow spring for the glow blob
  const blobSpringConfig = { damping: 30, stiffness: 60, mass: 1 };
  const blobX = useSpring(mouseX, blobSpringConfig);
  const blobY = useSpring(mouseY, blobSpringConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = target.closest('button, a, .group, [role="button"], .cursor-pointer, input, textarea');
      setIsHovering(!!isHoverable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof navigator !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      <style>
        {`
          @media (pointer: fine) {
            body, a, button, [role="button"], .group, .cursor-pointer {
              cursor: none !important;
            }
          }
        `}
      </style>

      {/* Trailing glow blob — large, very slow spring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9995]"
        style={{
          x: blobX,
          y: blobY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="w-48 h-48 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(0,242,255,${isHovering ? 0.08 : 0.04}) 0%, transparent 70%)`,
            filter: 'blur(20px)',
            transform: isHovering ? 'scale(1.5)' : 'scale(1)',
            transition: 'transform 0.6s ease, background 0.4s ease',
          }}
        />
      </motion.div>

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border-2 border-[var(--neon)] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? 48 : isClicking ? 28 : 40,
          height: isHovering ? 48 : isClicking ? 28 : 40,
          backgroundColor: isHovering ? 'rgba(0, 242, 255, 0.12)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 18, stiffness: 280 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] bg-[var(--neon)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 0 : isClicking ? 2 : 1,
          width: 6,
          height: 6,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      />
    </>
  );
};

export default CustomCursor;
