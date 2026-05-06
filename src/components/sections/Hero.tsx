import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import TextType from "../ui/TextType";
import Magnetic from "../ui/Magnetic";

import heroVideo from "../../assets/14519250_3840_2160_25fps.mp4";

const Link = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => (
  <a href={to} className={className}>{children}</a>
);

export function Hero() {
  const { t } = useTranslation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Normalize to -1 to 1
      mouseX.set((clientX / innerWidth) * 2 - 1);
      mouseY.set((clientY / innerHeight) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  // Parallax transforms for background elements
  const floatX1 = useTransform(springX, [-1, 1], [-40, 40]);
  const floatY1 = useTransform(springY, [-1, 1], [-40, 40]);
  const floatX2 = useTransform(springX, [-1, 1], [30, -30]);
  const floatY2 = useTransform(springY, [-1, 1], [30, -30]);
  const floatX3 = useTransform(springX, [-1, 1], [-60, 60]);
  const floatY3 = useTransform(springY, [-1, 1], [60, -60]);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Parallax Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Glass Sphere 1 */}
        <motion.div 
          style={{ x: floatX1, y: floatY1 }}
          className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hidden lg:block"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
        </motion.div>

        {/* Glass Sphere 2 */}
        <motion.div 
          style={{ x: floatX2, y: floatY2 }}
          className="absolute bottom-[25%] right-[12%] w-48 h-48 rounded-full bg-primary/5 backdrop-blur-xl border border-primary/20 shadow-2xl hidden lg:block"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--neon)]/10 to-transparent" />
        </motion.div>

        {/* Glass Cube/Diamond 3 */}
        <motion.div 
          style={{ x: floatX3, y: floatY3, rotate: 45 }}
          className="absolute top-[15%] right-[20%] w-20 h-20 bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-white/10 to-transparent" />
        </motion.div>

        {/* Small floating dots */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[5%] w-4 h-4 rounded-full bg-[var(--neon)]/30 blur-sm"
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] left-[5%] w-6 h-6 rounded-full bg-[var(--electric)]/20 blur-md"
        />
      </div>

      {/* Video Background with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 -z-20 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.7]"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />
      </motion.div>

      <div className="mx-auto max-w-5xl px-4 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >


          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl"
          >
            {t('hero.title1')}
            <br />
            {t('hero.title2_prefix')}{" "}
            <TextType 
              text={[t('hero.title2_accent'), "Success", "Digital Innovation"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              className="text-gradient inline-block"
            />
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground/90 sm:text-xl leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap justify-center items-center gap-4"
          >
            <Magnetic>
              <Link
                to="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon)] to-[var(--electric)] px-8 py-4 text-base font-semibold text-background shadow-neon transition-all hover:scale-[1.05] active:scale-95"
              >
                {t('hero.cta_start')}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="#projects"
                className="bg-glass inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-white/10 hover:shadow-glow-soft border border-white/10"
              >
                {t('hero.cta_explore')}
              </Link>
            </Magnetic>
          </motion.div>

          {/* Meta Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground/60"
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--neon)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--neon)]"></span>
              </span>
              {t('hero.available')}
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-[var(--electric)]" />
              {t('hero.delivery')}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative gradient for bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

export default Hero;

