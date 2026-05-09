import { useRef, useState, useEffect } from "react";
import PowerBiIcon from '../../assets/PowerBi.png';
import PowerPointIcon from '../../assets/PowerPoint.png';
import CanvaIcon from '../../assets/canvalogo.png';
import CssIcon from '../../assets/csslogo.png';
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


const technologies = [
  { name: "HTML5", slug: "html5", category: "Frontend" },
  { name: "CSS3", src: CssIcon, category: "Frontend" },
  { name: "JavaScript", slug: "javascript", category: "Frontend" },
  { name: "Bootstrap", slug: "bootstrap", category: "Frontend" },
  { name: "Tailwind", slug: "tailwindcss", category: "Frontend" },
  { name: "ReactJS", slug: "react", category: "Frontend" },
  { name: "Angular", slug: "angular", category: "Frontend" },
  { name: "React Native", slug: "react", category: "Mobile" },
  { name: "Expo", slug: "expo", category: "Mobile" },
  { name: "Flutter", slug: "flutter", category: "Mobile" },
  { name: "Ionic", slug: "ionic", category: "Mobile" },
  { name: "PHP", slug: "php", category: "Backend" },
  { name: "Node.js", slug: "nodedotjs", category: "Backend" },
  { name: "Express.js", slug: "express", category: "Backend" },
  { name: "Laravel", slug: "laravel", category: "Backend" },
  { name: "Spring Boot", slug: "springboot", category: "Backend" },
  { name: "Python", slug: "python", category: "Backend" },
  { name: "MySQL", slug: "mysql", category: "Database" },
  { name: "MongoDB", slug: "mongodb", category: "Database" },
  { name: "Canva", src: CanvaIcon, category: "Design" },
  { name: "PowerPoint", src: PowerPointIcon, category: "Presentation" },
  { name: "Power BI", src: PowerBiIcon, category: "Business" },
];

export default function Tech() {
  const { t } = useTranslation();
  
  // Duplicate the array for seamless looping
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section id="tech" className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden bg-background">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.03)_0%,transparent_70%)] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
            className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-tight mb-4"
          >
            Technologies we <span className="text-gradient">build</span> with
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous utilisons les meilleurs outils du marché pour créer des expériences numériques performantes, sécurisées et évolutives.
          </p>
        </div>

        {/* Infinite Marquee Container */}
        <div className="relative flex overflow-hidden py-10 group">
          {/* Gradient masks for soft edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-10 whitespace-nowrap"
          >
            {duplicatedTechs.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center gap-4 min-w-[120px] sm:min-w-[150px]"
              >
                <div className="relative">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-[var(--neon)]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm group-hover:border-[var(--neon)]/30 transition-all">
                    <img 
                      src={tech.src || `https://cdn.simpleicons.org/${tech.slug}`}
                      alt={tech.name}
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-bold text-foreground/80 group-hover:text-[var(--neon)] transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/40">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
