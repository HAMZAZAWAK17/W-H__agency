import React from 'react';
import { motion } from 'framer-motion';
import powerbiImg from '../../assets/PowerBi.png';
import powerpointImg from '../../assets/PowerPoint.png';
import javaImg from '../../assets/javalogo.png';
import canvaImg from '../../assets/canvalogo.png';

type Tech = {
  name: string;
  slug: string;
  category: "Frontend" | "Backend" | "Mobile" | "Design" | "Database" | "Business";
  color?: string;
  image?: string;
};

const techs: Tech[] = [
  { name: "Reactjs", slug: "react", category: "Frontend", color: "61DAFB" },
  { name: "React Native", slug: "react", category: "Mobile", color: "61DAFB" },
  { name: "Flutter", slug: "flutter", category: "Mobile", color: "02569B" },
  { name: "Ionic", slug: "ionic", category: "Mobile", color: "3880FF" },
  { name: "Java", slug: "java", category: "Backend", color: "ED8B00", image: javaImg },
  { name: "Expressjs", slug: "express", category: "Backend", color: "ffffff" },
  { name: "SpringBoot", slug: "springboot", category: "Backend", color: "6DB33F" },
  { name: "PowerPoint", slug: "microsoftpowerpoint", category: "Business", color: "B7472A", image: powerpointImg },
  { name: "PowerBI", slug: "powerbi", category: "Business", color: "F2C811", image: powerbiImg },
  { name: "Canva", slug: "canva", category: "Design", color: "00C4CC", image: canvaImg },
  { name: "MySQL", slug: "mysql", category: "Database", color: "4479A1" },
  { name: "MongoDB", slug: "mongodb", category: "Database", color: "47A248" },
  { name: "Laravel", slug: "laravel", category: "Backend", color: "FF2D20" },
];


function TechCard({ name, slug, category, color, image }: Tech) {
  return (
    <div className="group relative shrink-0 px-3">
      <div className="bg-glass relative flex h-32 w-40 sm:h-40 sm:w-48 flex-col items-center justify-center gap-3 sm:gap-4 rounded-[1.5rem] sm:rounded-[2rem] px-4 py-4 sm:py-6 transition-all hover:-translate-y-1 hover:shadow-glow-soft overflow-hidden">
        <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-[1.25rem] sm:rounded-[1.5rem] bg-foreground/5 transition-colors group-hover:bg-foreground/10">
          <span
            aria-hidden
            className="absolute inset-0 rounded-[1.25rem] sm:rounded-[1.5rem] blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-20"
            style={{ backgroundColor: color ? `#${color}` : 'var(--neon)' }}
          />
          <img 
            src={image || `https://cdn.simpleicons.org/${slug}/${color || '00f2ff'}`} 
            alt={`${name} logo`}
            className="relative h-10 w-10 sm:h-14 sm:w-14 object-contain transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="text-center">
          <div className="text-sm font-bold text-foreground/90 whitespace-nowrap tracking-tight">{name}</div>
          <div className="mt-1 text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
            {category}
          </div>
        </div>
      </div>
    </div>



  );
}


export function Tech() {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...techs, ...techs, ...techs];

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
            A modern, battle-tested stack — using the original tools for maximum performance.
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
              <TechCard key={`${t.slug}-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;
