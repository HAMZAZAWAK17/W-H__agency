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


const technologies = [
  { name: "HTML5", slug: "html5", category: "Frontend", color: "E34F26" },
  { name: "CSS3", slug: "css3", category: "Frontend", color: "1572B6" },
  { name: "JavaScript", slug: "javascript", category: "Frontend", color: "F7DF1E" },
  { name: "Bootstrap", slug: "bootstrap", category: "Frontend", color: "7952B3" },
  { name: "Tailwind", slug: "tailwindcss", category: "Frontend", color: "06B6D4" },
  { name: "ReactJS", slug: "react", category: "Frontend", color: "61DAFB" },
  { name: "Angular", slug: "angular", category: "Frontend", color: "DD0031" },
  { name: "React Native", slug: "react", category: "Mobile", color: "61DAFB" },
  { name: "Expo", slug: "expo", category: "Mobile", color: "000020" },
  { name: "Flutter", slug: "flutter", category: "Mobile", color: "02569B" },
  { name: "Ionic", slug: "ionic", category: "Mobile", color: "3880FF" },
  { name: "PHP", slug: "php", category: "Backend", color: "777BB4" },
  { name: "Node.js", slug: "nodedotjs", category: "Backend", color: "339933" },
  { name: "Express.js", slug: "express", category: "Backend", color: "000000" },
  { name: "Laravel", slug: "laravel", category: "Backend", color: "FF2D20" },
  { name: "Spring Boot", slug: "springboot", category: "Backend", color: "6DB33F" },
  { name: "Python", slug: "python", category: "Backend", color: "3776AB" },
  { name: "MySQL", slug: "mysql", category: "Database", color: "4479A1" },
  { name: "MongoDB", slug: "mongodb", category: "Database", color: "47A248" },
  { name: "Canva", slug: "canva", category: "Design", color: "00C4CC" },
  { name: "PowerPoint", slug: "microsoftpowerpoint", category: "Presentation", color: "B7472A" },
  { name: "Power BI", slug: "powerbi", category: "Business", color: "F2C811" },
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
                      src={`https://cdn.simpleicons.org/${tech.slug}`}
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
