import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Instagram, Linkedin, ChevronDown, Sparkles, Music2 as Tiktok } from 'lucide-react';

const serviceDetails = [
  { title: "Mobile App Development", desc: "Crafting high-performance iOS and Android applications with React Native and Flutter." },
  { title: "Web Development", desc: "Building cutting-edge web platforms using Next.js and React." },
  { title: "UI / UX Design", desc: "Modern, premium designs that wow users." },
  { title: "Custom Digital Solutions", desc: "Bespoke software tailored to your business needs." }
];

const Footer: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <footer className="relative pb-10 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-glass rounded-[40px] border border-foreground/10 dark:border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="px-4 py-1.5 rounded-full border border-blue-900/30 dark:border-primary/30 bg-blue-900/5 dark:bg-primary/5 flex items-center justify-center">
                  <span className="text-blue-900 dark:text-primary text-sm font-black font-display italic">WH</span>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold tracking-tighter font-display uppercase leading-tight text-foreground">W&H Agency</h2>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-900/80 dark:text-primary/80">Agence Digitale</span>
                </div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                We bridge the gap between complex engineering and premium design.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { Icon: Instagram, href: "https://instagram.com/wh__agency" },
                  { Icon: Tiktok, href: "https://www.tiktok.com/@wh.agency8?_r=1&_t=ZS-95adLSQzL7I" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/w-h-agency/" },
                  { Icon: Github, href: "https://github.com/Wissal-badri" }
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-2xl bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 text-muted-foreground hover:text-blue-900 dark:hover:text-primary hover:border-blue-900/50 dark:hover:border-primary/50 transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <div className="pt-8 border-t border-foreground/10 dark:border-white/5">
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                  © {new Date().getFullYear()} W&H Agency. ALL RIGHTS RESERVED.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="text-blue-900 dark:text-primary h-4 w-4" />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Our Expertise</h3>
              </div>
              <div className="grid gap-3">
                {serviceDetails.map((service, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setExpandedService(expandedService === i ? null : i)}
                      className={`w-full text-left p-4 rounded-3xl border transition-all ${expandedService === i ? 'bg-blue-900/5 dark:bg-primary/5 border-blue-900/30 dark:border-primary/30' : 'border-transparent hover:bg-foreground/5 dark:hover:bg-white/5'}`}
                    >
                      <span className={`font-semibold ${expandedService === i ? 'text-blue-900 dark:text-primary' : 'text-foreground/70 dark:text-foreground/70'}`}>{service.title}</span>
                      <ChevronDown size={18} className={`float-right transition-transform ${expandedService === i ? 'rotate-180 text-blue-900 dark:text-primary' : 'text-foreground/50'}`} />
                    </button>
                    <AnimatePresence>
                      {expandedService === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <p className="p-4 text-sm text-muted-foreground">{service.desc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;