import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Palette,
  Wand2,
  GraduationCap,
  Presentation,
  ArrowUpRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native-feel iOS & Android apps built with React Native and Flutter.",
      className: "md:col-span-2 md:row-span-1",
      gradient: "from-blue-500/20 to-cyan-500/20",
      accent: "text-blue-400"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Fast, scalable websites and dashboards using modern stacks like Next.js and React.",
      className: "md:col-span-1 md:row-span-2",
      gradient: "from-purple-500/20 to-pink-500/20",
      accent: "text-purple-400"
    },
    {
      icon: Palette,
      title: "UI / UX Design",
      description: "Clean, modern interfaces designed around real user needs and accessibility.",
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-amber-500/20 to-orange-500/20",
      accent: "text-amber-400"
    },
    {
      icon: Wand2,
      title: "Custom Digital Solutions",
      description: "Tailor-made tools, automations, and integrations for your business.",
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-400"
    },
    {
      icon: GraduationCap,
      title: "PFE Support",
      description: "End-to-end help for final year projects — from idea to defense.",
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-indigo-500/20 to-violet-500/20",
      accent: "text-indigo-400"
    },
    {
      icon: Presentation,
      title: "Presentations & Reports",
      description: "Polished slide decks and professional reports that impress.",
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-rose-500/20 to-red-500/20",
      accent: "text-rose-400"
    },
  ];

  return (
    <section id="services" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.02)_0%,transparent_70%)] -z-10" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--neon)] mb-4"
            >
              Expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Our <span className="text-gradient">Specialized</span> Services
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-sm text-lg leading-relaxed"
          >
            A duo of engineers dedicated to building high-performance digital products that scale with your vision.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-glass glow-border p-8 transition-all hover:shadow-2xl hover:shadow-primary/5 ${service.className}`}
            >
              {/* Inner Glow */}
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${service.gradient} blur-3xl opacity-0 transition-opacity group-hover:opacity-100`} />
              
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-2xl bg-white/[0.03] border border-white/10 ${service.accent}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 45, scale: 1.2 }}
                    className="h-10 w-10 rounded-full border border-white/5 flex items-center justify-center text-muted-foreground/30 group-hover:text-[var(--neon)] group-hover:border-[var(--neon)]/30 transition-colors"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </motion.div>
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-4 tracking-tight group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground/80 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                {/* Decorative Bottom Line */}
                <div className="mt-auto pt-8">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </div>

              {/* Spotlight Effect overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(255,255,255,0.06),transparent_80%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
