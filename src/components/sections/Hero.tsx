import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

// Note: Temporarily using standard <a> tags as TanStack Router is not yet initialized in App.tsx
const Link = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => (
  <a href={to} className={className}>{children}</a>
);

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-background-of-soft-and-abstract-blue-lines-41278-large.mp4" type="video/mp4" />
        </video>
        {/* Overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted-foreground border border-white/10 shadow-glow-soft mb-8"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--neon)]" />
            {t('hero.badge')}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {t('hero.title1')}
            <br />
            {t('hero.title2_prefix')} <span className="text-gradient">{t('hero.title2_accent')}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground/80"
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

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

export default Hero;
