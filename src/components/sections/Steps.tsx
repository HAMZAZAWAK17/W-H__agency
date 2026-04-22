import { motion } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Idea",
    summary: "Discovery, scoping, and a clear roadmap.",
    details: "We dig into your goals, audience, and constraints — then map a path that's lean and realistic.",
    tags: ["DISCOVERY", "SCOPE", "ROADMAP"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    summary: "Wireframes and polished UI prototypes.",
    details: "From low-fi flows to pixel-perfect screens, we design interfaces that feel as good as they look.",
    tags: ["WIREFRAMES", "UI", "PROTOTYPE"],
    color: "from-cyan-400 to-emerald-400"
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    summary: "Clean, tested, production-grade code.",
    details: "Modern stack, modular architecture, and code that's built to scale — not just to ship.",
    tags: ["REACT", "API", "TESTS"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    summary: "Ship, monitor, iterate — fast.",
    details: "We deploy, watch the metrics, and keep improving based on real usage from day one.",
    tags: ["DEPLOY", "MONITOR", "ITERATE"],
    color: "from-purple-500 to-pink-500"
  }
];

export default function Steps() {
  return (
    <section id="steps" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--neon)] mb-4"
          >
            How we work
          </motion.p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
            A simple, focused <span className="text-gradient">process</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col bg-glass glow-border rounded-[2.5rem] p-8 min-h-[480px] transition-all hover:-translate-y-2"
            >
              {/* Header: Icon and Step Number */}
              <div className="flex items-start justify-between mb-8">
                <div className="p-3.5 rounded-2xl bg-foreground/5 border border-foreground/10 text-[var(--neon)]">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="relative">
                  <span className="absolute -top-4 -right-2 text-7xl font-black text-foreground/[0.03] dark:text-white/[0.03] pointer-events-none select-none">
                    {s.number}
                  </span>
                  <span className="relative z-10 text-[10px] font-bold tracking-[0.2em] text-muted-foreground">
                    STEP / {s.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="font-display text-2xl font-bold mb-4 tracking-tight text-foreground group-hover:text-[var(--neon)] transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {s.summary}
                </p>
                <p className="text-muted-foreground/80 dark:text-muted-foreground/60 text-sm leading-relaxed mb-8">
                  {s.details}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2 mb-8">
                  {s.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full border border-foreground/10 bg-foreground/[0.02] text-[9px] font-black tracking-widest text-muted-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="h-[2px] w-1/3 bg-foreground/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className={`h-full bg-gradient-to-r ${s.color}`}
                  />
                </div>
              </div>

              {/* Connector Arrow (Desktop only, except last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                  <div className="h-6 w-6 rounded-full bg-background border border-foreground/10 flex items-center justify-center text-[var(--neon)] shadow-lg ring-4 ring-background">
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

