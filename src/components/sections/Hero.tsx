import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Zap, Code2, Presentation, FileText, Palette, Terminal, Database, Smartphone, Cpu, Layers } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import TextType from "../ui/TextType";
import Magnetic from "../ui/Magnetic";
import heroVideo from "../../assets/14519250_3840_2160_25fps.mp4";

const Link = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => (
  <a href={to} className={className}>{children}</a>
);

// Floating icon wrapper with breathing animation
const FloatingIcon = ({
  children,
  className,
  style,
  delay = 0,
}: {
  children: React.ReactNode;
  className: string;
  style?: React.CSSProperties;
  delay?: number;
}) => (
  <motion.div
    className={className}
    style={style}
    animate={{
      y: [0, -10, 0],
      rotate: [0, 1, -1, 0],
    }}
    transition={{
      duration: 6 + delay * 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      delay: delay,
    }}
  >
    {children}
  </motion.div>
);

export function Hero() {
  const { t } = useTranslation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLElement>(null);

  // Spring physics for smooth cursor movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) * 2 - 1);
      mouseY.set((clientY / innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax transforms for floating icons
  const floatX1 = useTransform(springX, [-1, 1], [-30, 30]);
  const floatY1 = useTransform(springY, [-1, 1], [-30, 30]);
  const floatX2 = useTransform(springX, [-1, 1], [20, -20]);
  const floatY2 = useTransform(springY, [-1, 1], [20, -20]);
  const floatX3 = useTransform(springX, [-1, 1], [-45, 45]);
  const floatY3 = useTransform(springY, [-1, 1], [45, -45]);

  // Scroll-based parallax for video background
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Stagger variants for text reveal — line by line
  const lineVariants = {
    hidden: { opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0% 0)",
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.3 + i * 0.15,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  // Background ambient particles
  const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    x: `${10 + (i * 7) % 80}%`,
    y: `${15 + (i * 11) % 70}%`,
    size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1.5,
    duration: 4 + (i % 3) * 1.5,
    delay: i * 0.4,
    opacity: 0.15 + (i % 4) * 0.08,
  }));

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[var(--neon)]"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [p.opacity, p.opacity * 2.5, p.opacity],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: p.duration,
              ease: "easeInOut",
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Floating Icon Elements with parallax + breathing */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Code Icon */}
        <motion.div
          style={{ x: floatX1, y: floatY1 }}
          className="absolute top-[20%] left-[10%] hidden lg:block"
        >
          <FloatingIcon
            className="w-24 h-24 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center"
            delay={0}
          >
            <Code2 className="w-10 h-10 text-[var(--neon)] opacity-60" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent" />
          </FloatingIcon>
        </motion.div>

        {/* Database Icon */}
        <motion.div
          style={{ x: floatX2, y: floatY3 }}
          className="absolute top-[15%] left-[25%] hidden lg:block"
        >
          <FloatingIcon
            className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl flex items-center justify-center"
            delay={1}
          >
            <Database className="w-6 h-6 text-white opacity-30" />
          </FloatingIcon>
        </motion.div>

        {/* Smartphone Icon */}
        <motion.div
          style={{ x: floatX3, y: floatY1 }}
          className="absolute top-[35%] right-[8%] hidden lg:block"
        >
          <FloatingIcon
            className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl flex items-center justify-center"
            delay={0.8}
          >
            <Smartphone className="w-8 h-8 text-[var(--neon)] opacity-40" />
          </FloatingIcon>
        </motion.div>

        {/* Design Icon */}
        <motion.div
          style={{ x: floatX2, y: floatY2 }}
          className="absolute bottom-[25%] right-[15%] hidden lg:block"
        >
          <FloatingIcon
            className="w-28 h-28 rounded-[2rem] bg-primary/5 backdrop-blur-xl border border-primary/20 shadow-2xl flex items-center justify-center"
            delay={1.5}
          >
            <Palette className="w-12 h-12 text-[var(--electric)] opacity-60" />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-[var(--neon)]/10 to-transparent" />
          </FloatingIcon>
        </motion.div>

        {/* Cpu Icon */}
        <motion.div
          style={{ x: floatX1, y: floatY2 }}
          className="absolute bottom-[35%] left-[8%] hidden lg:block"
        >
          <FloatingIcon
            className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl flex items-center justify-center"
            delay={2}
          >
            <Cpu className="w-6 h-6 text-[var(--electric)] opacity-30" />
          </FloatingIcon>
        </motion.div>

        {/* Report Icon */}
        <motion.div
          style={{ x: floatX3, y: floatY3 }}
          className="absolute top-[15%] right-[20%] hidden lg:block"
        >
          <FloatingIcon
            className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl flex items-center justify-center"
            delay={0.5}
          >
            <FileText className="w-8 h-8 text-white opacity-40" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-bl from-white/10 to-transparent" />
          </FloatingIcon>
        </motion.div>

        {/* Presentation Icon */}
        <motion.div
          style={{ x: floatX1, y: floatY3 }}
          className="absolute bottom-[20%] left-[15%] hidden lg:block"
        >
          <FloatingIcon
            className="w-24 h-24 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center"
            delay={1.2}
          >
            <Presentation className="w-10 h-10 text-[var(--neon)] opacity-50" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent" />
          </FloatingIcon>
        </motion.div>

        {/* Layers Icon */}
        <motion.div
          style={{ x: floatX3, y: floatY2 }}
          className="absolute top-[40%] right-[25%] hidden lg:block"
        >
          <FloatingIcon
            className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg flex items-center justify-center"
            delay={1.8}
          >
            <Layers className="w-5 h-5 text-white opacity-30" />
          </FloatingIcon>
        </motion.div>

        {/* Terminal Icon */}
        <motion.div
          style={{ x: floatX2, y: floatY1 }}
          className="absolute top-[45%] left-[5%] hidden lg:block"
        >
          <FloatingIcon
            className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl flex items-center justify-center"
            delay={2.5}
          >
            <Terminal className="w-6 h-6 text-[var(--electric)] opacity-40" />
          </FloatingIcon>
        </motion.div>
      </div>

      {/* Video Background with Parallax */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 0.65 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 -z-20 overflow-hidden"
        style={{ y: videoY }}
      >
        <motion.div className="w-full h-full" style={{ scale: videoScale }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-[0.65]"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/55 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />
      </motion.div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Title — Line by line reveal */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
            >
              {t('hero.title1')}
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
            >
              {t('hero.title2_prefix')}{" "}
              <TextType
                text={[t('hero.title2_accent'), "Success", "Digital Innovation"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
                className="text-gradient-shimmer inline-block"
              />
            </motion.h1>
          </div>

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
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0,242,255,0.3)",
                    "0 0 35px rgba(0,242,255,0.5)",
                    "0 0 20px rgba(0,242,255,0.3)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-xl"
              >
                <Link
                  to="#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon)] to-[var(--electric)] px-8 py-4 text-base font-semibold text-background transition-all hover:scale-[1.05] active:scale-95"
                >
                  {t('hero.cta_start')}
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </Magnetic>
            <Magnetic>
              <Link
                to="#projects"
                className="bg-glass inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10"
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

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

export default Hero;
