import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';

const steps = [
  { id: "01", title: "Idea", desc: "We discuss your vision and goals to understand the project's core.", icon: "💡" },
  { id: "02", title: "Planning", desc: "We define the roadmap, architecture, and technology stack.", icon: "📊" },
  { id: "03", title: "Design", desc: "We craft intuitive UI/UX that brings your brand to life.", icon: "🎨" },
  { id: "04", title: "Development", desc: "We build your solution using modern, efficient code.", icon: "💻" },
  { id: "05", title: "Launch", desc: "We deploy your project and ensure everything runs smoothly.", icon: "🚀" },
];

const Steps: React.FC = () => {
  return (
    <section id="steps" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="How We Work" 
          subtitle="Our structured process ensures every project is delivered with quality and precision."
        />

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div className="space-y-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className="lg:w-1/2 flex justify-center lg:px-12">
                  <div className={`glass p-8 rounded-3xl border border-white/10 max-w-md w-full relative ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <span className="text-primary font-mono text-sm mb-2 block">{step.id} —</span>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                    
                    {/* Glowing dot on the line */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(0,242,255,1)] hidden lg:block ${i % 2 === 0 ? '-right-[54px]' : '-left-[54px]'}`} />
                  </div>
                </div>
                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
