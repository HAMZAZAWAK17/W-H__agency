import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  ChevronLeft, 
  ChevronRight, 
  Globe, 
  Layers, 
  Smartphone, 
  Code2, 
  Terminal, 
  Palette, 
  Database, 
  Cpu 
} from "lucide-react";

import javaImg from '../../assets/javalogo.png';
import canvaImg from '../../assets/canvalogo.png';
import powerbiImg from '../../assets/PowerBi.png';
import powerpointImg from '../../assets/PowerPoint.png';

const technologies = [
  { name: "Next.js", icon: Globe, category: "Frontend", color: "from-white/20 to-white/5", slug: "nextdotjs" },
  { name: "React", icon: Layers, category: "Frontend", color: "from-blue-500/20 to-cyan-500/5", slug: "react" },
  { name: "Flutter", icon: Smartphone, category: "Mobile", color: "from-blue-400/20 to-indigo-400/5", slug: "flutter" },
  { name: "Laravel", icon: Code2, category: "Backend", color: "from-red-500/20 to-orange-500/5", slug: "laravel" },
  { name: "TypeScript", icon: Terminal, category: "Frontend", color: "from-blue-600/20 to-blue-400/5", slug: "typescript" },
  { name: "Tailwind CSS", icon: Palette, category: "Frontend", color: "from-cyan-400/20 to-teal-400/5", slug: "tailwindcss" },
  { name: "PostgreSQL", icon: Database, category: "Database", color: "from-indigo-400/20 to-blue-400/5", slug: "postgresql" },
  { name: "Figma", icon: Cpu, category: "Design", color: "from-purple-500/20 to-pink-500/5", slug: "figma" },
  { name: "Node.js", icon: Terminal, category: "Backend", color: "from-emerald-500/20 to-green-500/5", slug: "nodedotjs" },
  { name: "Java", image: javaImg, category: "Backend", color: "from-orange-500/20 to-yellow-500/5", name_alt: "java" },
  { name: "Canva", image: canvaImg, category: "Design", color: "from-cyan-500/20 to-blue-500/5", name_alt: "canva" },
  { name: "PowerBI", image: powerbiImg, category: "Business", color: "from-yellow-500/20 to-orange-500/5", name_alt: "powerbi" },
  { name: "PowerPoint", image: powerpointImg, category: "Business", color: "from-red-600/20 to-red-400/5", name_alt: "powerpoint" },
];

export default function Tech() {
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
                      {tech.image ? (
                        <img src={tech.image} alt={tech.name} className="w-8 h-8 object-contain" />
                      ) : (
                        <tech.icon size={28} strokeWidth={1.5} />
                      )}
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
