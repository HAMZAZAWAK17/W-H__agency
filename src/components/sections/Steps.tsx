import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

export default function Steps() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const steps = [
    {
      number: "01",
      icon: Lightbulb,
      title: t('steps.items.idea.title'),
      summary: t('steps.items.idea.summary'),
      details: t('steps.items.idea.details'),
      tags: ["DISCOVERY", "ROADMAP"],
      color: "var(--neon)",
    },
    {
      number: "02",
      icon: PenTool,
      title: t('steps.items.design.title'),
      summary: t('steps.items.design.summary'),
      details: t('steps.items.design.details'),
      tags: ["UI/UX", "PROTOTYPE"],
      color: "var(--electric)",
    },
    {
      number: "03",
      icon: Code2,
      title: t('steps.items.dev.title'),
      summary: t('steps.items.dev.summary'),
      details: t('steps.items.dev.details'),
      tags: ["REACT", "API"],
      color: "var(--neon)",
    },
    {
      number: "04",
      icon: Rocket,
      title: t('steps.items.launch.title'),
      summary: t('steps.items.launch.summary'),
      details: t('steps.items.launch.details'),
      tags: ["DEPLOY", "ITERATE"],
      color: "var(--electric)",
    },
  ];

  return (
    <section
      id="steps"
      className="relative py-12 sm:py-16 overflow-hidden bg-background"
      ref={containerRef}
    >
      {/* ── Background personnalisé Steps ── */}
      {/* Centre vertical light beam with glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-[var(--neon)]/15 to-transparent pointer-events-none" />
      {/* Orbe top-left violet with breathing animation */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.07, 0.04]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-[var(--violet-glow)] blur-[100px] pointer-events-none z-0"
      />
      {/* Orbe bottom-right cyan with breathing animation */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.04, 0.06, 0.04]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-[var(--neon)] blur-[100px] pointer-events-none z-0"
      />
      {/* Cross-hatch pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,242,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,242,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              {t('steps.subtitle')}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight uppercase max-w-xl"
          >
            {t('steps.title_prefix')} <span className="text-gradient">{t('steps.title_accent')}</span>
          </motion.h2>
        </div>

        {/* Animated Timeline Line */}
        <div className="absolute left-1/2 top-[120px] bottom-0 -translate-x-1/2 w-0.5 hidden lg:block">
          <motion.div
            style={{ scaleY }}
            className="w-full h-full bg-gradient-to-b from-[var(--neon)] to-[var(--electric)] origin-top rounded-full"
            // Enhanced glow shadow on the fill
            animate={{
              boxShadow: [
                "0 0 6px rgba(0,242,255,0.3)",
                "0 0 15px rgba(0,242,255,0.6)",
                "0 0 6px rgba(0,242,255,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="space-y-12 sm:space-y-16 relative">
          {steps.map((s, i) => (
            <StepRow key={s.title} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepRow({ step, index }: { step: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div ref={ref} className="relative">
      {/* Step Marker — pulsing dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.2 }}
          className="relative w-8 h-8 rounded-full bg-background border-2 border-foreground/10 dark:border-white/10 flex items-center justify-center"
        >
          {/* Pulsing ring when in view */}
          {isInView && (
            <motion.div
              className="absolute inset-0 rounded-full border border-[var(--neon)]/40"
              animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--electric)]" />
        </motion.div>
      </div>

      <div className={`flex flex-col lg:flex-row items-center justify-between gap-6 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full lg:w-[38%] group"
        >
          <div className="bg-glass relative overflow-hidden rounded-[2rem] p-5 sm:p-6 border-2 border-[var(--neon)]/10 dark:border-white/10 group-hover:border-[var(--neon)]/40 transition-all duration-500 shadow-lg hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,242,255,0.06)]">
            {/* Ghost number */}
            <div className="absolute top-0 right-0 p-4 text-4xl font-black text-foreground/[0.03] dark:text-white/[0.03] group-hover:text-foreground/[0.06] transition-colors pointer-events-none select-none">
              {step.number}
            </div>

            <div className="relative z-10 flex gap-4 items-start">
              {/* Icon */}
              <motion.div
                className="shrink-0 h-10 w-10 items-center justify-center rounded-lg bg-foreground/[0.05] dark:bg-white/[0.05] border border-foreground/10 dark:border-white/10 text-[var(--neon)] flex"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <step.icon size={20} strokeWidth={1.5} />
              </motion.div>

              <div className="flex-1">
                <h3 className="font-display text-lg font-bold mb-1 tracking-tight text-foreground group-hover:text-[var(--neon)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3 font-medium">
                  {step.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-[8px] font-bold text-[var(--neon)]/40 group-hover:text-[var(--neon)]/70 uppercase tracking-[0.2em] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Spacer for alternating layout */}
        <div className="hidden lg:block lg:w-[38%]" />
      </div>
    </div>
  );
}
