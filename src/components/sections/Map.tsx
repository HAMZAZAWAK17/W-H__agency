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
            <div className="bg-glass glow-border relative overflow-hidden rounded-3xl aspect-[4/3] shadow-glow-soft group">
              <iframe
                title="Casablanca Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106371.49129528643!2d-7.6693945892578!3d33.57226079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full border-0 grayscale-[0.2] brightness-[0.9] contrast-[1.1] dark:invert-[0.9] dark:hue-rotate-[180deg] dark:brightness-[0.8] transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Decorative overlays */}
              <div className="absolute inset-0 pointer-events-none border-[12px] border-black/[0.03] dark:border-white/[0.03] rounded-3xl" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
