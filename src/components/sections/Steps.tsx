import { motion } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Steps() {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      icon: Lightbulb,
      title: t('steps.items.idea.title'),
      summary: t('steps.items.idea.summary'),
      details: t('steps.items.idea.details'),
      tags: ["DISCOVERY", "ROADMAP"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      number: "02",
      icon: PenTool,
      title: t('steps.items.design.title'),
      summary: t('steps.items.design.summary'),
      details: t('steps.items.design.details'),
      tags: ["UI/UX", "PROTOTYPE"],
      color: "from-cyan-400 to-emerald-400"
    },
    {
      number: "03",
      icon: Code2,
      title: t('steps.items.dev.title'),
      summary: t('steps.items.dev.summary'),
      details: t('steps.items.dev.details'),
      tags: ["REACT", "API"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      number: "04",
      icon: Rocket,
      title: t('steps.items.launch.title'),
      summary: t('steps.items.launch.summary'),
      details: t('steps.items.launch.details'),
      tags: ["DEPLOY", "ITERATE"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="steps" className="relative py-24 sm:py-32 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1 rounded-full bg-blue-900/10 dark:bg-primary/10 border border-blue-900/20 dark:border-primary/20 mb-6"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-900 dark:text-primary">
              {t('steps.subtitle')}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight uppercase"
          >
            {t('steps.title_prefix')} <span className="text-gradient">{t('steps.title_accent')}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-glass border border-foreground/10 dark:border-white/5 rounded-[2.5rem] p-8 min-h-[400px] flex flex-col hover:border-foreground/20 dark:hover:border-white/20 transition-all hover:-translate-y-1"
            >
              {/* Step Number Background */}
              <div className="absolute top-8 right-8 text-6xl font-black text-foreground/[0.03] dark:text-white/[0.03] group-hover:text-foreground/[0.06] dark:group-hover:text-white/[0.06] transition-colors pointer-events-none">
                {s.number}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="h-12 w-12 rounded-2xl bg-foreground/[0.03] dark:bg-white/[0.03] border border-foreground/10 dark:border-white/10 flex items-center justify-center text-blue-900 dark:text-primary mb-8 group-hover:scale-110 transition-transform">
                  <s.icon size={24} strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-xl font-bold mb-4 tracking-tight text-foreground group-hover:text-blue-900 dark:group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium">
                  {s.summary}
                </p>
                
                <p className="text-muted-foreground/60 text-xs leading-relaxed mb-8">
                  {s.details}
                </p>

                <div className="mt-auto pt-6 border-t border-foreground/10 dark:border-white/5 flex items-center justify-between">
                  <div className="flex gap-2">
                    {s.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                  <ArrowRight size={14} className="text-blue-900/40 dark:text-primary/40 group-hover:text-blue-900 dark:group-hover:text-primary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
