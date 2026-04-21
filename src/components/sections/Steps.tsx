import { motion } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, type LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const steps: Step[] = [
  { icon: Lightbulb, title: "Idea", text: "Discovery, scoping, and a clear roadmap." },
  { icon: PenTool, title: "Design", text: "Wireframes and polished UI prototypes." },
  { icon: Code2, title: "Development", text: "Clean, tested, production-grade code." },
  { icon: Rocket, title: "Launch", text: "Ship, monitor, iterate — fast." },
];

export default function Steps() {
  return (
    <section id="steps" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon)]">
            How we work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            A simple, focused <span className="text-gradient">process</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Four deliberate steps from raw idea to a product live in the wild.
          </p>
        </div>

        <div className="relative mt-16">
          {/* connecting line — horizontal on desktop, vertical on mobile */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--neon)]/40 to-transparent md:left-0 md:top-10 md:h-px md:w-full md:bg-gradient-to-r"
          />

          <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative flex items-start gap-5 md:block"
                >
                  {/* icon node */}
                  <div className="relative z-10 shrink-0">
                    <div className="bg-glass relative mx-0 flex h-16 w-16 items-center justify-center rounded-2xl shadow-glow-soft transition-transform duration-300 group-hover:-translate-y-1 md:mx-auto md:h-20 md:w-20">
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--neon)]/20 via-transparent to-[var(--violet-glow)]/20 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                      />
                      <Icon className="relative h-7 w-7 text-[var(--neon)] md:h-8 md:w-8" strokeWidth={1.5} />
                      <span className="absolute -inset-1 rounded-2xl bg-[var(--neon)]/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    {/* step number badge */}
                    <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--neon)]/40 bg-background text-[10px] font-bold text-[var(--neon)] md:left-1/2 md:-translate-x-1/2 md:translate-y-0">
                      0{i + 1}
                    </div>
                  </div>

                  <div className="flex-1 md:mt-6 md:text-center">
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground md:mx-auto md:max-w-[14rem]">
                      {s.text}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
