import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import TextType from "../ui/TextType";

import heroVideo from "../../assets/14519250_3840_2160_25fps.mp4";

const Link = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => (
  <a href={to} className={className}>{children}</a>
);

export function Hero() {
  const { t } = useTranslation();

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

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
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

      <div className="mx-auto max-w-5xl px-4 text-center">
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
            <Link
              to="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon)] to-[var(--electric)] px-8 py-4 text-base font-semibold text-background shadow-neon transition-all hover:scale-[1.05] active:scale-95"
            >
              {t('hero.cta_start')}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="#projects"
              className="bg-glass inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-white/10 hover:shadow-glow-soft border border-white/10"
            >
              {t('hero.cta_explore')}
            </Link>
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

