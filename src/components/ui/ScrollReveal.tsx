import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string | number[];
  };
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal = ({
  children,
  width = "100%",
  variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  transition = { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
  threshold = 0.2,
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

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
