import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Reviews() {
  const { t } = useTranslation();
  
  // Get items from translations
  // i18next returns an array if the key points to one
  const reviewItems = t('reviews.items', { returnObjects: true }) as any[];

  const avatars = [
    "https://i.pravatar.cc/150?u=alex",
    "https://i.pravatar.cc/150?u=sarah",
    "https://i.pravatar.cc/150?u=james"
  ];

  return (
    <section id="reviews" className="relative py-20 sm:py-28 overflow-hidden bg-background/50">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon)]"
          >
            {t('reviews.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {t('reviews.title_prefix')} <span className="text-gradient">{t('reviews.title_accent')}</span> {t('reviews.title_suffix')}
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviewItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-glass glow-border group relative rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-glow-soft"
            >
              <Quote className="absolute top-6 right-8 h-10 w-10 text-primary/10 transition-colors group-hover:text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--neon)] text-[var(--neon)]" />
                ))}
              </div>

              <p className="relative text-muted-foreground leading-relaxed italic mb-8">
                "{item.comment}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10 group-hover:ring-[var(--neon)]/50 transition-all">
                  <img
                    src={avatars[index]}
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
      </div>
    </section>
  );
}

export default Reviews;
