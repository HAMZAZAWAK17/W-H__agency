import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Globe,
  Palette,
  Wand2,
  GraduationCap,
  Presentation,
  ArrowUpRight,
  X,
  CheckCircle2
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      features: [
        "Développement natif & multiplateforme",
        "Design UI/UX intuitif et fluide",
        "Intégration d'API et services tiers",
        "Optimisation des performances"
      ]
    },
    {
      icon: Globe,
      title: t('services.web.title'),
      description: t('services.web.description'),
      features: [
        "Applications web modernes (React, Next.js)",
        "Sites vitrines et e-commerce",
        "Hébergement et déploiement scalables",
        "SEO et accessibilité avancés"
      ]
    },
    {
      icon: Palette,
      title: t('services.design.title'),
      description: t('services.design.description'),
      features: [
        "Création d'identité visuelle",
        "Maquettage et prototypage (Figma)",
        "Design system sur-mesure",
        "Recherche utilisateur (UX Research)"
      ]
    },
    {
      icon: Wand2,
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      features: [
        "Solutions logicielles sur-mesure",
        "Automatisation de processus métier",
        "Architecture cloud et bases de données",
        "Maintenance et support technique"
      ]
    },
    {
      icon: GraduationCap,
      title: t('services.pfe.title'),
      description: t('services.pfe.description'),
      features: [
        "Accompagnement de bout en bout",
        "Choix des technologies modernes",
        "Revue de code et bonnes pratiques",
        "Aide à la rédaction de rapports"
      ]
    },
    {
      icon: Presentation,
      title: t('services.presentation.title'),
      description: t('services.presentation.description'),
      features: [
        "Slides professionnels et impactants",
        "Pitch decks pour startups",
        "Design de présentation d'entreprise",
        "Animations et transitions soignées"
      ]
    },
  ];

  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);


  return (
    <section id="services" className="relative py-20 sm:py-28">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.02)_0%,transparent_70%)] -z-10" />

      <div className="mx-auto max-w-6xl px-4">
        {/* Header - kept very compact */}
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
            transition={{ delay: 0.1 }}
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

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="bg-glass glow-border group relative overflow-hidden rounded-2xl p-6 transition-all hover:shadow-lg hover:shadow-[var(--neon)]/5 cursor-pointer"
            >
              {/* Subtle hover glow inside */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--neon)] blur-[50px] opacity-0 transition-opacity duration-500 group-hover:opacity-15" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 group-hover:bg-[#00f2ff]/10 group-hover:border-[#00f2ff]/30 transition-all duration-300">
                    <service.icon className="h-5 w-5 text-[var(--neon)] group-hover:text-[#00f2ff] transition-colors" />
                  </div>
                  <button type="button" className="h-8 w-8 rounded-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 flex items-center justify-center group-hover:bg-[#00f2ff]/20 group-hover:border-[#00f2ff]/50 transition-all">
                    <ArrowUpRight className="h-4 w-4 text-[var(--neon)]/60 group-hover:text-[#00f2ff] transition-colors" />
                  </button>
                </div>
                
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-[#00f2ff] mb-2 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Popup */}
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
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-w-lg bg-white/95 dark:bg-[#0b0e14]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Decorative glow in modal */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--neon)] opacity-[0.07] blur-[80px] rounded-full pointer-events-none" />
              
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 h-8 w-8 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:text-[var(--neon)] transition-colors z-50 cursor-pointer text-slate-500"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00b8c4]/15 to-[#7000ff]/15 dark:from-[#00f2ff]/20 dark:to-[#bd00ff]/20 border border-[#00b8c4]/30 dark:border-[#00f2ff]/30 shadow-[0_0_20px_rgba(0,184,196,0.15)] dark:shadow-[0_0_20px_rgba(0,242,255,0.15)]">
                    <selectedService.icon className="h-7 w-7 text-[#00b8c4] dark:text-[#00f2ff]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {selectedService.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {selectedService.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#00b8c4] to-[#7000ff] dark:from-[#00f2ff] dark:to-[#bd00ff] bg-clip-text text-transparent mb-3">
                    Inclus dans ce service :
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-5 w-5 text-[#00b8c4] dark:text-[#00f2ff] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex justify-end">
                  <button 
                    onClick={() => {
                      setSelectedService(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00b8c4] to-[#7000ff] dark:from-[#00f2ff] dark:to-[#bd00ff] text-white font-bold text-sm hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(0,184,196,0.3)] dark:shadow-[0_0_20px_rgba(0,242,255,0.3)]"
                  >
                    Demander ce service
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
