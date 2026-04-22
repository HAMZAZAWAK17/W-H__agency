import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, type LucideIcon } from "lucide-react";
import { useRef } from "react";

type Step = {
  icon: LucideIcon;
  title: string;
  text: string;
  color: string;
};

const steps: Step[] = [
  { icon: Lightbulb, title: "Discovery", text: "Deep dive into your goals, users, and technical requirements.", color: "var(--neon)" },
  { icon: PenTool, title: "Design", text: "Iterative UI/UX design focused on conversion and usability.", color: "var(--electric)" },
  { icon: Code2, title: "Development", text: "Building with scalable architecture and clean, modular code.", color: "var(--violet-glow)" },
  { icon: Rocket, title: "Launch", text: "Production deployment, monitoring, and continuous scaling.", color: "var(--neon)" },
];

export default function Steps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="steps" ref={containerRef} className="relative py-20 sm:py-32 overflow-hidden bg-background">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.03)_0%,transparent_70%)] -z-10" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--neon)] mb-4"
          >
            Workflow
          </motion.p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
            Our <span className="text-gradient">Battle-Tested</span> Process
          </h2>
        </div>

        <div className="relative">
          {/* Main Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-white/5 -z-10">
            <motion.div 
              style={{ scaleX, originX: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-[var(--neon)] via-[var(--electric)] to-[var(--violet-glow)] shadow-[0_0_15px_var(--neon)]"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Step Node */}
                <div className="relative mb-8">
                  {/* Outer Pulsing Glow */}
                  <div 
                    className="absolute inset-0 rounded-full bg-[var(--neon)]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                    style={{ backgroundColor: `${s.color}33` }}
                  />
                  
                  {/* Icon Container */}
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#0b0e14] border-2 border-white/10 group-hover:border-[var(--neon)] transition-colors duration-500 shadow-2xl">
                    <s.icon className="h-8 w-8 text-white group-hover:text-[var(--neon)] transition-colors duration-500" strokeWidth={1.5} />
                    
                    {/* Number Badge */}
                    <div className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon)] to-[var(--electric)] text-[11px] font-black text-background shadow-lg">
                      0{i + 1}
                    </div>
                  </div>

                  {/* Mobile Connecting Line (Vertical) */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-white/10 to-transparent" />
                  )}
                </div>

                <div className="px-4">
                  <h3 className="font-display text-xl font-bold mb-3 tracking-tight group-hover:text-[var(--neon)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed max-w-[200px] mx-auto">
                    {s.text}
                  </p>
                </div>

                {/* Desktop Indicator Dot on Line */}
                <div className="hidden md:block absolute top-[39px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-background border-2 border-white/20 group-hover:border-[var(--neon)] group-hover:scale-125 transition-all z-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
