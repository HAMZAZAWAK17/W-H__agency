import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import {
  Smartphone, Globe, Palette, Wand2, GraduationCap, Presentation,
  BarChart, Shapes, ArrowUpRight, X, CheckCircle2,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Particles from "./Particles";

// Card tilt component
function TiltCard({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springCfg = { damping: 20, stiffness: 200 };
  const springRotateX = useSpring(rotateX, springCfg);
  const springRotateY = useSpring(rotateY, springCfg);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) / (rect.width / 2);
    const dy = (e.clientY - centerY) / (rect.height / 2);
    rotateX.set(-dy * 5);
    rotateY.set(dx * 5);
  }, []);

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

export default function Services() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 0.8, 0.8, 0]
  );

  const services = [
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      features: ["Développement natif & multiplateforme", "Design UI/UX intuitif et fluide", "Intégration d'API et services tiers", "Optimisation des performances"],
    },
    {
      icon: Globe,
      title: t('services.web.title'),
      description: t('services.web.description'),
      features: ["Applications web modernes (React, Next.js)", "Sites vitrines et e-commerce", "Hébergement et déploiement scalables", "SEO et accessibilité avancés"],
    },
    {
      icon: Palette,
      title: t('services.design.title'),
      description: t('services.design.description'),
      features: ["Création d'identité visuelle", "Maquettage et prototypage (Figma)", "Design system sur-mesure", "Recherche utilisateur (UX Research)"],
    },
    {
      icon: Wand2,
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      features: ["Solutions logicielles sur-mesure", "Automatisation de processus métier", "Architecture cloud et bases de données", "Maintenance et support technique"],
    },
    {
      icon: GraduationCap,
      title: t('services.pfe.title'),
      description: t('services.pfe.description'),
      features: ["Accompagnement de bout en bout", "Choix des technologies modernes", "Revue de code et bonnes pratiques", "Aide à la rédaction de rapports"],
    },
    {
      icon: Presentation,
      title: t('services.presentation.title'),
      description: t('services.presentation.description'),
      features: ["Slides professionnels et impactants", "Pitch decks pour startups", "Design de présentation d'entreprise", "Animations et transitions soignées"],
    },
    {
      icon: BarChart,
      title: t('services.bi.title'),
      description: t('services.bi.description'),
      features: ["Création de tableaux de bord interactifs", "Visualisation de données et reporting", "Intégration de Business Intelligence", "Analyse de données en temps réel"],
    },
    {
      icon: Shapes,
      title: t('services.logo.title'),
      description: t('services.logo.description'),
      features: ["Création de logos vectoriels", "Charte graphique complète", "Déclinaisons pour réseaux sociaux", "Fichiers haute résolution (AI, EPS, PNG)"],
    },
  ];

  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section ref={sectionRef} id="services" className="relative py-20 sm:py-28 overflow-hidden">
      {/* ── Background personnalisé Services ── */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
      >
        <Particles
          speed={0.4}
          density={55}
          maxDistance={110}
          mouseRadius={135}
        />
        {/* Smooth blending overlays to transition between sections */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </motion.div>
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,242,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,242,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon)] mb-3"
          >
            {t('services.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl font-bold tracking-tight sm:text-4xl mb-4"
          >
            {t('services.title_prefix')} <span className="text-gradient">{t('services.title_accent')}</span> {t('services.title_suffix')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground leading-relaxed"
          >
            {t('services.description')}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard
                className="card-border-travel bg-glass glow-border group relative overflow-hidden rounded-2xl p-6 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,242,255,0.08)] cursor-pointer h-full"
                onClick={() => setSelectedService(service)}
              >
                {/* Hover glow blob */}
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--neon)] blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-15" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    {/* Icon with rotation on hover */}
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 group-hover:bg-[#00f2ff]/10 group-hover:border-[#00f2ff]/30 transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <service.icon className="h-5 w-5 text-[var(--neon)] group-hover:text-[#00f2ff] transition-colors" />
                    </motion.div>

                    <button
                      type="button"
                      className="h-8 w-8 rounded-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 flex items-center justify-center group-hover:bg-[#00f2ff]/20 group-hover:border-[#00f2ff]/50 transition-all"
                    >
                      <ArrowUpRight className="h-4 w-4 text-[var(--neon)]/60 group-hover:text-[#00f2ff] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>

                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-[#00f2ff] mb-2 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.25 }}
              className="relative w-full max-w-lg bg-white/95 dark:bg-[#0b0e14]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--neon)] opacity-[0.06] blur-[80px] rounded-full pointer-events-none" />

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 h-8 w-8 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:text-[var(--neon)] transition-colors z-50 cursor-pointer text-slate-500"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00b8c4]/15 to-[#7000ff]/15 dark:from-[#00f2ff]/20 dark:to-[#bd00ff]/20 border border-[#00b8c4]/30 dark:border-[#00f2ff]/30 shadow-[0_0_20px_rgba(0,184,196,0.15)]"
                    animate={{ rotate: [0, 3, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <selectedService.icon className="h-7 w-7 text-[#00b8c4] dark:text-[#00f2ff]" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{selectedService.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">{selectedService.description}</p>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#00b8c4] to-[#7000ff] dark:from-[#00f2ff] dark:to-[#bd00ff] bg-clip-text text-transparent mb-3">
                    Inclus dans ce service :
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08, duration: 0.4 }}
                        className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#00b8c4] dark:text-[#00f2ff] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex justify-end">
                  <motion.button
                    onClick={() => {
                      setSelectedService(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00b8c4] to-[#7000ff] dark:from-[#00f2ff] dark:to-[#bd00ff] text-white font-bold text-sm shadow-[0_0_20px_rgba(0,184,196,0.3)] dark:shadow-[0_0_20px_rgba(0,242,255,0.3)]"
                  >
                    Demander ce service
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
