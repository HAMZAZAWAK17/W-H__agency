import { motion } from "framer-motion";
import { MapPin, Globe2, Compass } from "lucide-react";

export default function Map() {
  return (
    <section id="location" className="relative pt-20 sm:pt-28 pb-10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--neon)] mb-4">
                Our Headquarters
              </p>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl leading-[1.1]">
                Based in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon)] to-[#7000ff]">Casablanca</span>, Morocco.
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base max-w-md">
                We combine local passion with international standards.
              </p>
            </div>

            <div className="space-y-8 mt-12">
              {[
                { icon: MapPin, title: "Physical Presence", desc: "Casablanca, Morocco" },
                { icon: Globe2, title: "Global Reach", desc: "Working across 3+ continents" },
                { icon: Compass, title: "Timezone", desc: "GMT+1 (Western European)" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="relative pt-1">
                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[var(--neon)] group-hover:border-[var(--neon)]/50 group-hover:bg-[var(--neon)]/5 transition-all duration-500">
                      <item.icon size={20} />
                    </div>
                    {/* Vertical Connecting Line */}
                    {i < 2 && (
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-white/10 to-transparent" />
                    )}
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1 group-hover:text-[var(--neon)] transition-colors">{item.title}</h4>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white leading-tight">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Clean Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <iframe
                title="Casablanca Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106371.49129528643!2d-7.6693945892578!3d33.57226079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full aspect-[4/3] border-0 grayscale-[0.5] brightness-[0.8] contrast-[1.1] dark:invert-[0.9] dark:hue-rotate-[180deg] dark:brightness-[0.8] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Minimal Tech Accents */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Corners */}
                <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-[var(--neon)]/40" />
                <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-[var(--neon)]/40" />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
