import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Alex Thompson",
    role: "CEO, TechFlow",
    comment: "The team at W&H Agency transformed our vision into a stunning reality. Their attention to detail and technical expertise is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director, Lumina",
    comment: "Working with Hamza and Wissal was a breeze. They delivered a high-performance web app that exceeded our expectations.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "James Wilson",
    role: "Founder, Artisan",
    comment: "Professional, creative, and fast. The best agency we've worked with for mobile development.",
    avatar: "https://i.pravatar.cc/150?u=james"
  },
  {
    name: "Elena Rodriguez",
    role: "Startup Founder, Vibe",
    comment: "As a student founder, finding a team that understands both the budget and the ambition is rare. W&H crushed it!",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    name: "David Chen",
    role: "Project Manager, Nexus",
    comment: "Their code is clean, their communication is proactive, and the final product is beautiful. Highly recommend.",
    avatar: "https://i.pravatar.cc/150?u=david"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-20 sm:py-28 overflow-hidden bg-background/30">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--neon)]/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--electric)]/5 blur-[120px] rounded-full -z-10" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon)]"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            What our <span className="text-gradient">clients</span> say
          </motion.h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Scroll horizontally to see more reviews
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div 
            className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 snap-x snap-mandatory scrollbar-hide no-scrollbar"
            style={{ 
              msOverflowStyle: 'none', 
              scrollbarWidth: 'none',
              scrollBehavior: 'smooth' 
            }}
          >
            {reviews.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[300px] sm:w-[400px] snap-center bg-glass glow-border group relative rounded-3xl p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
              >
                <Quote className="absolute top-6 right-8 h-10 w-10 text-primary/10 transition-colors group-hover:text-primary/20" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--neon)] text-[var(--neon)]" />
                  ))}
                </div>

                <p className="relative text-muted-foreground leading-relaxed italic mb-8 min-h-[80px]">
                  "{item.comment}"
                </p>

                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl ring-2 ring-white/10 group-hover:ring-[var(--neon)]/50 transition-all">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Fading edges for better UX */}
          <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}

export default Reviews;

