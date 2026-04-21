import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';

const techStack = [
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Next.js", category: "Frontend", icon: "▲" },
  { name: "Tailwind", category: "Design", icon: "🌊" },
  { name: "TypeScript", category: "Language", icon: "TS" },
  { name: "Node.js", category: "Backend", icon: "🟢" },
  { name: "Flutter", category: "Mobile", icon: "📱" },
  { name: "Figma", category: "Design", icon: "🎨" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "Firebase", category: "Database", icon: "🔥" },
];

const Tech: React.FC = () => {
  return (
    <section id="tech" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Our Tech Stack" 
          subtitle="Modern, battle-tested technologies picked for speed, reliability, and great user experience."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className="glass p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center group cursor-default"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h4 className="font-bold text-lg mb-1">{tech.name}</h4>
              <p className="text-[10px] uppercase tracking-widest text-primary/70">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
