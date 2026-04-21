import { motion } from "framer-motion";
import { MapPin, Globe2, Compass } from "lucide-react";

export default function Map() {
  return (
    <section id="location" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon)]">
              Our Base
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Based in <span className="text-gradient">Casablanca</span>, Morocco.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              While we work with clients globally, our roots are in the heart of Morocco&apos;s 
              business hub. We combine local passion with international standards to deliver 
              world-class digital solutions.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary group-hover:border-primary/50 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Physical Presence</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Casablanca, Morocco</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary group-hover:border-primary/50 transition-colors">
                  <Globe2 size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Global Reach</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Working with clients across 3+ continents</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary group-hover:border-primary/50 transition-colors">
                  <Compass size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Timezone</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">GMT+1 (Western European Time)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Stylized Map Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--neon)]/20 to-transparent blur-3xl rounded-full opacity-30" />
            <div className="bg-glass glow-border relative overflow-hidden rounded-3xl aspect-[4/3] shadow-glow-soft">
              <img 
                src="/casablanca_location_map_1776761741492.png" 
                alt="Map of Casablanca, Morocco" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 grid-overlay opacity-30" />
              
              {/* Animated Radar Effect on Pin */}
              <div className="absolute top-[48%] left-[45%] h-6 w-6">
                <span className="absolute inset-0 rounded-full bg-[var(--neon)] animate-ping opacity-75" />
                <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[var(--neon)] shadow-[0_0_20px_var(--neon)]">
                  <MapPin size={12} className="text-background" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
