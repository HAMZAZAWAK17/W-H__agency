import { motion, useInView, useAnimation, type Variants, type Transition } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { usePrefersReducedMotion } from "../../lib/useAnimations";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  variants?: Variants;
  transition?: Transition;
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal = ({
  children,
  width = "100%",
  variants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  transition = {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1] as const,
  },
  threshold = 0.2,
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const isInView = useInView(ref, { amount: threshold, once });
  const mainControls = useAnimation();

  useEffect(() => {
    if (reducedMotion) {
      mainControls.start("visible");
      return;
    }
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls, reducedMotion]);

  if (reducedMotion) {
    return <div style={{ position: "relative", width }}>{children}</div>;
  }

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={transition}
      >
        {children}
      </motion.div>
    </div>
  );
};
