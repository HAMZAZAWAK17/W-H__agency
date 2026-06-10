import { useRef, useEffect, useState } from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";

// ============================================
// PREMIUM EASING CURVES
// ============================================

/** Apple/Linear-style ease: fast start, smooth landing */
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/** Snappy spring for UI elements */
export const easeOutBack = [0.34, 1.56, 0.64, 1] as const;

/** Cinematic slow ease */
export const easeCinematic = [0.43, 0.13, 0.23, 0.96] as const;

/** Ultra-premium transition durations */
export const duration = {
  fast: 0.35,
  normal: 0.65,
  slow: 0.9,
  cinematic: 1.2,
};

// ============================================
// FRAMER MOTION VARIANTS
// ============================================

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const fadeUpItemFast = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

export const scaleInItem = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOutBack },
  },
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const slideFromBottom = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.0, ease: easeCinematic },
  },
};

// ============================================
// PARALLAX HOOK
// ============================================

export function useParallax(
  target: React.RefObject<HTMLElement | null>,
  outputRange: [string | number, string | number] = ["-5%", "5%"]
) {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });

  return useTransform(scrollYProgress, [0, 1], outputRange);
}

// ============================================
// MOUSE TILT HOOK
// ============================================

export function useTilt(intensity = 8) {
  const ref = useRef<HTMLElement | null>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) / (rect.width / 2);
    const dy = (e.clientY - centerY) / (rect.height / 2);
    rotateX.set(-dy * intensity);
    rotateY.set(dx * intensity);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove as EventListener);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove as EventListener);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { ref, rotateX: springRotateX, rotateY: springRotateY };
}

// ============================================
// COUNT-UP HOOK
// ============================================

export function useCountUp(
  target: number,
  duration = 2000,
  start = false
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startValue + (target - startValue) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

// ============================================
// CURSOR GLOW ON CARD HOOK
// ============================================

export function useCursorGlow() {
  const ref = useRef<HTMLElement | null>(null);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glowX.set(x);
    glowY.set(y);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove as EventListener);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove as EventListener);
    };
  }, []);

  return { ref, glowX, glowY };
}

// ============================================
// REDUCED MOTION CHECK
// ============================================

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}
