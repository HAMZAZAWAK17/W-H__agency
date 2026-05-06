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
  featured?: boolean;
};

const techs: Tech[] = [
  { name: "Next.js", slug: "nextdotjs", category: "Frontend", color: "ffffff", featured: true },
  { name: "React", slug: "react", category: "Frontend", color: "61DAFB", featured: true },
  { name: "Flutter", slug: "flutter", category: "Mobile", color: "02569B", featured: true },
  { name: "TypeScript", slug: "typescript", category: "Frontend", color: "3178C6" },
  { name: "Tailwind CSS", slug: "tailwindcss", category: "Frontend", color: "06B6D4" },
  { name: "Laravel", slug: "laravel", category: "Backend", color: "FF2D20", featured: true },
  { name: "SpringBoot", slug: "springboot", category: "Backend", color: "6DB33F" },
  { name: "Node.js", slug: "nodedotjs", category: "Backend", color: "339933" },
  { name: "Supabase", slug: "supabase", category: "Database", color: "3ECF8E" },
  { name: "Figma", slug: "figma", category: "Design", color: "F24E1E", featured: true },
  { name: "PowerBI", slug: "powerbi", category: "Business", color: "F2C811" },
  { name: "Java", slug: "java", category: "Backend", color: "ED8B00", image: javaImg },
  { name: "MySQL", slug: "mysql", category: "Database", color: "4479A1" },
  { name: "MongoDB", slug: "mongodb", category: "Database", color: "47A248" },
  { name: "Canva", slug: "canva", category: "Design", color: "00C4CC", image: canvaImg },
  { name: "PowerPoint", slug: "microsoftpowerpoint", category: "Business", color: "B7472A", image: powerpointImg },
];

function TechCard({ name, slug, category, color, image, featured }: Tech) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-[2.5rem] bg-white/5 dark:bg-[#0b0e14]/50 border border-white/10 dark:border-white/5 hover:border-[var(--neon)]/30 transition-all duration-500 p-6 flex flex-col justify-between ${
        featured ? 'md:col-span-2 md:row-span-2 min-h-[300px]' : 'md:col-span-1 md:row-span-1 min-h-[160px]'
      }`}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, #${color}, transparent 70%)` }}
      />
      
      <div className="relative z-10 flex items-start justify-between">
        <div className={`rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors ${
          featured ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-12 h-12'
        }`}>
          <img 
            src={image || `https://cdn.simpleicons.org/${slug}/${color || '00f2ff'}`} 
            alt={name}
            className={`object-contain transition-transform duration-500 group-hover:scale-110 ${
              featured ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-7 h-7'
            }`}
          />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">
          {t(`tech.categories.${category.toLowerCase()}`)}
        </span>
      </div>

      <div className="relative z-10 mt-auto">
        <h3 className={`font-display font-bold text-foreground group-hover:text-[var(--neon)] transition-colors ${
          featured ? 'text-2xl sm:text-3xl' : 'text-lg'
        }`}>
          {name}
        </h3>
        {featured && (
          <p className="mt-2 text-sm text-muted-foreground/80 line-clamp-2 max-w-[200px]">
            {t(`services.${slug === 'nextdotjs' ? 'web' : slug === 'flutter' ? 'mobile' : slug === 'figma' ? 'design' : 'custom'}.description`)}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function Tech() {
  const { t } = useTranslation();

  return (
    <section id="tech" className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden bg-background">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[var(--neon)]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[var(--electric)]/5 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
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
            className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl"
          >
            {t('tech.title_prefix')} <span className="text-gradient">{t('tech.title_accent')}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-fr">
          {techs.map((tech, index) => (
            <TechCard key={tech.slug + index} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tech;
