import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  MonitorPlay, Presentation, FileText, SearchCheck,
  Layers, Package, Target, ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

// Animated counter
function CountUp({ target, suffix = "", inView }: { target: number; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function PfeServices() {
  const { t } = useTranslation();
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  const services = [
    { icon: MonitorPlay, title: t('pfe_services.items.creation.title'), description: t('pfe_services.items.creation.description') },
    { icon: Presentation, title: t('pfe_services.items.ppt.title'), description: t('pfe_services.items.ppt.description') },
    { icon: FileText, title: t('pfe_services.items.word.title'), description: t('pfe_services.items.word.description') },
    { icon: SearchCheck, title: t('pfe_services.items.plagiarism.title'), description: t('pfe_services.items.plagiarism.description') },
  ];

  const packs = [
    { number: "1", icon: null, title: t('pfe_services.packs.single.title'), description: t('pfe_services.packs.single.description') },
    { number: null, icon: Layers, title: t('pfe_services.packs.combine.title'), description: t('pfe_services.packs.combine.description') },
    { number: null, icon: Package, title: t('pfe_services.packs.full.title'), description: t('pfe_services.packs.full.description') },
  ];

  const stats = [
    { value: 50, suffix: "+", label: "PFEs Delivered" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: 12, suffix: "+", label: "Projects Shipped" },
  ];

  const [isRippling, setIsRippling] = useState(false);

  const handleCTAClick = () => {
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 700);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      setTimeout(() => contactSection.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  return (
    <section id="pfe-services" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,var(--neon)_0%,transparent_60%)] opacity-5 -z-10" />

      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon)] mb-3"
          >
            {t('pfe_services.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6"
          >
            {t('pfe_services.title_prefix')} <span className="text-gradient">{t('pfe_services.title_accent')}</span> {t('pfe_services.title_suffix')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed font-medium"
          >
            {t('pfe_services.description')}
          </motion.p>
        </div>

        {/* Animated Stats */}
        <div ref={statsRef} className="grid grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="font-display text-4xl sm:text-5xl font-black text-gradient mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} inView={statsInView} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[var(--neon)]" />
            {t('pfe_services.services_title')}
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-glass glow-border group relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-[var(--neon)]/10 cursor-default"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--neon)] opacity-0 blur-[40px] rounded-full group-hover:opacity-[0.1] transition-opacity duration-500" />
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--neon)]/10 text-[var(--neon)] mb-6 border border-[var(--neon)]/20"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <service.icon className="h-6 w-6" />
                </motion.div>
                <h4 className="font-display text-lg font-bold mb-3 text-foreground group-hover:text-[var(--neon)] transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Flexibility Packs */}
        <div className="relative rounded-3xl overflow-hidden bg-glass p-8 sm:p-12 glow-border">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--violet-glow)] opacity-[0.05] blur-[100px] rounded-[100%]" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--violet-glow)]/10 border border-[var(--violet-glow)]/20 text-[var(--violet-glow)] text-sm font-bold mb-6"
              >
                <Target className="h-4 w-4" />
                {t('pfe_services.flexibility_badge')}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-3xl sm:text-4xl font-bold mb-4"
              >
                {t('pfe_services.flexibility_title')}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl text-muted-foreground"
              >
                {t('pfe_services.flexibility_subtitle')}
              </motion.p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {packs.map((pack, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-[var(--violet-glow)]/5 hover:border-[var(--violet-glow)]/30 transition-all group cursor-default"
                >
                  <motion.div
                    className="h-16 w-16 rounded-full bg-white dark:bg-[#1a1f2c] flex items-center justify-center shadow-lg mb-6"
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {pack.number ? (
                      <span className="font-display text-2xl font-bold text-foreground">{pack.number}</span>
                    ) : pack.icon ? (
                      <pack.icon className="h-7 w-7 text-foreground" />
                    ) : null}
                  </motion.div>
                  <h4 className="font-display font-bold text-foreground mb-3 leading-tight">{pack.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pack.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA with glow ripple */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-black/10 dark:border-white/10 flex justify-center"
          >
            <div className="relative inline-flex">
              {/* Ripple on click */}
              {isRippling && (
                <>
                  <div className="absolute inset-0 rounded-full bg-[var(--neon)]/30 animate-[ripple-glow_0.7s_ease-out_forwards]" />
                  <div className="absolute inset-0 rounded-full bg-[var(--neon)]/15 animate-[ripple-glow_0.7s_ease-out_0.15s_forwards]" />
                </>
              )}
              <motion.button
                onClick={handleCTAClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="group relative flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--violet-glow)] text-white font-bold transition-all shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:shadow-[0_0_35px_rgba(0,242,255,0.4)]"
              >
                {t('contact.subtitle')}
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
