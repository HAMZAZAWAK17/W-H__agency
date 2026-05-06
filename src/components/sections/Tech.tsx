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
export function Tech() {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="tech" className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden bg-background">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.03)_0%,transparent_70%)] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--neon)] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                Stack Technique
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-tight"
            >
              Technologies we <span className="text-gradient">build</span> with
            </motion.h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-[var(--neon)]/50 transition-all group"
            >
              <ChevronLeft className="h-6 w-6 text-muted-foreground group-hover:text-[var(--neon)] transition-colors" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-[var(--neon)]/50 transition-all group"
            >
              <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-[var(--neon)] transition-colors" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <motion.div
          ref={carouselRef}
          className="cursor-grab active:cursor-grabbing overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6 py-4"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                className="min-w-[300px] sm:min-w-[350px] aspect-[4/3] relative group"
              >
                {/* Background Card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} border border-white/10 rounded-[2.5rem] backdrop-blur-sm transition-all duration-500 group-hover:border-[var(--neon)]/30 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]`} />
                
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--neon)] group-hover:scale-110 transition-transform duration-500">
                      <tech.icon size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 border border-white/10 px-3 py-1 rounded-full">
                      {tech.category}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--neon)] transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      Expertise pointue en {tech.name} pour des solutions {tech.category.toLowerCase()} modernes et performantes.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Tech;
