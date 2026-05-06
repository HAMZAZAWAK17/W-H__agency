import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, ArrowRight, Circle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

export default function Steps() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      number: "01",
      icon: Lightbulb,
      title: t('steps.items.idea.title'),
      summary: t('steps.items.idea.summary'),
      details: t('steps.items.idea.details'),
      tags: ["DISCOVERY", "ROADMAP"],
      color: "var(--neon)"
    },
    {
      number: "02",
      icon: PenTool,
      title: t('steps.items.design.title'),
      summary: t('steps.items.design.summary'),
      details: t('steps.items.design.details'),
      tags: ["UI/UX", "PROTOTYPE"],
      color: "var(--electric)"
    },
    {
      number: "03",
      icon: Code2,
      title: t('steps.items.dev.title'),
      summary: t('steps.items.dev.summary'),
      details: t('steps.items.dev.details'),
      tags: ["REACT", "API"],
      color: "var(--neon)"
    },
    {
      number: "04",
      icon: Rocket,
      title: t('steps.items.launch.title'),
      summary: t('steps.items.launch.summary'),
      details: t('steps.items.launch.details'),
      tags: ["DEPLOY", "ITERATE"],
      color: "var(--electric)"
    }
  ];

  return (
    <section id="steps" className="relative py-16 sm:py-20 overflow-hidden bg-background" ref={containerRef}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-foreground/5 dark:bg-white/5" />
      
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              {t('steps.subtitle')}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight uppercase max-w-2xl"
          >
            {t('steps.title_prefix')} <span className="text-gradient">{t('steps.title_accent')}</span>
          </motion.h2>
        </div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 top-[150px] bottom-0 -translate-x-1/2 w-1 hidden lg:block">
          <motion.div 
            style={{ scaleY }}
            className="w-full h-full bg-gradient-to-b from-[var(--neon)] to-[var(--electric)] origin-top rounded-full shadow-[0_0_15px_rgba(0,242,255,0.5)]"
          />
        </div>

        <div className="space-y-16 sm:space-y-24 relative">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              {/* Step Marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 rounded-full bg-background border-4 border-foreground/10 dark:border-white/10 flex items-center justify-center relative group"
                >
                   <div className="absolute inset-0 rounded-full bg-[var(--neon)] opacity-0 group-hover:opacity-20 blur-md transition-opacity" />
                   <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--electric)]" />
                </motion.div>
              </div>

              <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-[42%] group"
                >
                  <div className="bg-glass relative overflow-hidden rounded-[2.5rem] p-6 sm:p-8 border border-foreground/10 dark:border-white/5 hover:border-[var(--neon)]/30 transition-all duration-500 shadow-xl">
                    <div className="absolute top-0 right-0 p-6 text-6xl font-black text-foreground/[0.03] dark:text-white/[0.03] group-hover:text-foreground/[0.07] transition-colors pointer-events-none">
                      {s.number}
                    </div>
                    
                    <div className="relative z-10">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/[0.05] dark:bg-white/[0.05] border border-foreground/10 dark:border-white/10 text-[var(--neon)] mb-6 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all duration-500">
                        <s.icon size={24} strokeWidth={1.5} />
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 tracking-tight text-foreground group-hover:text-[var(--neon)] transition-colors">
                        {s.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-base leading-relaxed mb-4 font-medium">
                        {s.summary}
                      </p>
                      
                      <p className="text-muted-foreground/60 text-xs leading-relaxed mb-6">
                        {s.details}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {s.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-foreground/5 dark:bg-white/5 text-[9px] font-bold text-muted-foreground/60 uppercase tracking-widest border border-foreground/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block lg:w-[42%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
