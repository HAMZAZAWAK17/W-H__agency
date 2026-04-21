import React from 'react';
import {
  type LucideIcon,
  Atom,
  Smartphone,
  Boxes,
  Zap,
  Coffee,
  Server,
  Leaf,
  Presentation,
  BarChart3,
  Database,
  Infinity,
  Code2,
} from "lucide-react";

type Tech = {
  name: string;
  icon: LucideIcon;
  category: "Frontend" | "Backend" | "Mobile" | "Design" | "Database" | "Business";
};

const techs: Tech[] = [
  { name: "Reactjs", icon: Atom, category: "Frontend" },
  { name: "React Native", icon: Smartphone, category: "Mobile" },
  { name: "Flutter", icon: Boxes, category: "Mobile" },
  { name: "Ionic", icon: Zap, category: "Mobile" },
  { name: "Java", icon: Coffee, category: "Backend" },
  { name: "Expressjs", icon: Server, category: "Backend" },
  { name: "SpringBoot", icon: Leaf, category: "Backend" },
  { name: "PowerPoint", icon: Presentation, category: "Business" },
  { name: "PowerBI", icon: BarChart3, category: "Business" },
  { name: "MySQL", icon: Database, category: "Database" },
  { name: "MongoDB", icon: Code2, category: "Database" },
  { name: "Laravel", icon: Infinity, category: "Backend" },
];

function TechCard({ name, icon: Icon, category }: Tech) {
  return (
    <div className="group relative shrink-0 px-3">
      <div className="bg-glass glow-border relative flex h-36 w-44 flex-col items-center justify-center gap-3 rounded-2xl px-4 py-5 transition-all hover:-translate-y-1 hover:shadow-glow-soft">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02]">
          <span
            aria-hidden
            className="absolute inset-0 rounded-xl bg-[var(--neon)]/0 blur-xl transition-all duration-300 group-hover:bg-[var(--neon)]/30"
          />
          <Icon
            className="relative h-6 w-6 text-foreground/80 transition-colors group-hover:text-[var(--neon)]"
            strokeWidth={1.6}
          />
        </div>
        <div className="text-center">
          <div className="text-sm font-semibold text-foreground/90 whitespace-nowrap">{name}</div>
          <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            {category}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Tech() {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...techs, ...techs, ...techs]; // Triple for smoother long screen loops

  return (
    <section id="tech" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon)]">
            Our toolkit
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies we <span className="text-gradient">build with</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A modern, battle-tested stack — picked for speed, reliability, and great DX.
          </p>
        </div>
      </div>

      {/* Carousel — full-bleed, edge fades, infinite scroll */}
      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="group overflow-hidden">
          <div className="marquee-track flex w-max items-center py-2 group-hover:[animation-play-state:paused]">
            {loop.map((t, i) => (
              <TechCard key={`${t.name}-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;
