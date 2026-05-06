import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
  { name: "Next.js", slug: "nextdotjs", category: "Frontend", color: "ffffff" },
  { name: "React", slug: "react", category: "Frontend", color: "61DAFB" },
  { name: "Tailwind CSS", slug: "tailwindcss", category: "Frontend", color: "06B6D4" },
  { name: "TypeScript", slug: "typescript", category: "Frontend", color: "3178C6" },
  { name: "Flutter", slug: "flutter", category: "Mobile", color: "02569B" },
  { name: "React Native", slug: "react", category: "Mobile", color: "61DAFB" },
  { name: "Java", slug: "java", category: "Backend", color: "ED8B00", image: javaImg },
  { name: "Laravel", slug: "laravel", category: "Backend", color: "FF2D20" },
  { name: "SpringBoot", slug: "springboot", category: "Backend", color: "6DB33F" },
  { name: "Node.js", slug: "nodedotjs", category: "Backend", color: "339933" },
  { name: "Supabase", slug: "supabase", category: "Database", color: "3ECF8E" },
  { name: "MySQL", slug: "mysql", category: "Database", color: "4479A1" },
  { name: "MongoDB", slug: "mongodb", category: "Database", color: "47A248" },
  { name: "Figma", slug: "figma", category: "Design", color: "F24E1E" },
  { name: "Canva", slug: "canva", category: "Design", color: "00C4CC", image: canvaImg },
  { name: "PowerBI", slug: "powerbi", category: "Business", color: "F2C811", image: powerbiImg },
  { name: "PowerPoint", slug: "microsoftpowerpoint", category: "Business", color: "B7472A", image: powerpointImg },
  { name: "Docker", slug: "docker", category: "Backend", color: "2496ED" },
  { name: "Vite", slug: "vite", category: "Frontend", color: "646CFF" },
  { name: "Prisma", slug: "prisma", category: "Backend", color: "2D3748" },
];


function TechCard({ name, slug, category, color, image }: Tech) {
  const { t } = useTranslation();
  return (
    <div className="group relative shrink-0 px-4">
      <div className="bg-glass relative flex h-32 w-40 sm:h-36 sm:w-44 flex-col items-center justify-center gap-3 rounded-[2rem] px-4 py-4 transition-all hover:-translate-y-1 hover:shadow-glow-soft overflow-hidden">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/5 transition-colors group-hover:bg-foreground/10">
          <span
            aria-hidden
            className="absolute inset-0 rounded-2xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-20"
            style={{ backgroundColor: color ? `#${color}` : 'var(--neon)' }}
          />
          <img 
            src={image || `https://cdn.simpleicons.org/${slug}/${color || '00f2ff'}`} 
            alt={`${name} logo`}
            className="relative h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="text-center">
          <div className="text-xs font-bold text-foreground/90 whitespace-nowrap tracking-tight">{name}</div>
          <div className="mt-0.5 text-[8px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
            {t(`tech.categories.${category.toLowerCase()}`)}
          </div>
        </div>
      </div>
    </div>
  );
}


export function Tech() {
  const { t } = useTranslation();
  
  const row1 = [...techs.slice(0, 10), ...techs.slice(0, 10), ...techs.slice(0, 10)];
  const row2 = [...techs.slice(10), ...techs.slice(10), ...techs.slice(10)];

  return (
    <section id="tech" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon)]"
          >
            {t('tech.subtitle')}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl"
          >
            {t('tech.title_prefix')} <span className="text-gradient">{t('tech.title_accent')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-muted-foreground text-lg"
          >
            {t('tech.description')}
          </motion.p>
        </div>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-background to-transparent" />

        {/* Row 1 - Forward */}
        <div className="group overflow-hidden">
          <div className="marquee-track flex w-max items-center py-2 group-hover:[animation-play-state:paused]">
            {row1.map((t, i) => (
              <TechCard key={`row1-${t.slug}-${i}`} {...t} />
            ))}
          </div>
        </div>

        {/* Row 2 - Backward */}
        <div className="group overflow-hidden">
          <div className="marquee-track flex w-max items-center py-2 group-hover:[animation-play-state:paused] [animation-direction:reverse]">
            {row2.map((t, i) => (
              <TechCard key={`row2-${t.slug}-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;
