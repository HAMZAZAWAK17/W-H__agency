import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { DeviceMockups } from "./DeviceMockups";

// Note: Temporarily using standard <a> tags as TanStack Router is not yet initialized in App.tsx
// To use real Links, initialize the RouterProvider in main.tsx
const Link = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => (
  <a href={to} className={className}>{children}</a>
);

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background glow effects to match the premium visual */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-[var(--neon)]" />
              {t('hero.badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              {t('hero.title1')}
              <br />
              {t('hero.title2_prefix')} <span className="text-gradient">{t('hero.title2_accent')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon)] to-[var(--electric)] px-5 py-3 text-sm font-semibold text-background shadow-neon transition-transform hover:scale-[1.03]"
              >
                {t('hero.cta_start')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="#projects"
                className="bg-glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition-all hover:shadow-glow-soft border border-white/5"
              >
                {t('hero.cta_explore')}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--neon)] shadow-[0_0_12px_var(--neon)]" />
                {t('hero.available')}
              </div>
              <div>{t('hero.delivery')}</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <DeviceMockups />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
