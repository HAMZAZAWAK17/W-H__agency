import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Reviews() {
  const { t } = useTranslation();

  // Get translated reviews array
  const translatedReviews = t('reviews.items', { returnObjects: true }) as Array<{
    name: string;
    role: string;
    comment: string;
  }>;

  return (
    <section id="reviews" className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--neon)]/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--electric)]/5 blur-[120px] rounded-full -z-10" />

      <div className="mx-auto max-w-7xl px-4">
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
            className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            {t('reviews.title_prefix')} <span className="text-gradient">{t('reviews.title_accent')}</span> {t('reviews.title_suffix')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {translatedReviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 dark:bg-[#0b0e14]/50 backdrop-blur-md border border-[var(--neon)]/20 hover:border-[var(--neon)]/50 shadow-xl hover:shadow-[var(--neon)]/10 relative rounded-[2rem] p-6 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-[var(--neon)]/10 transition-colors group-hover:text-[var(--neon)]/20" />
              
              <div className="flex gap-0.5 mb-4 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]" />
                ))}
              </div>

              <p className="relative z-10 text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic mb-6 flex-grow">
                "{item.comment}"
              </p>

              <div className="flex items-center gap-3 border-t border-slate-200 dark:border-white/10 pt-6 mt-auto relative z-10">
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-xl ring-2 ring-[var(--neon)]/20 group-hover:ring-[var(--neon)]/60 transition-all duration-300">
                  <img
                    src={`https://i.pravatar.cc/150?u=${item.name.replace(/ /g, '')}`}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white group-hover:text-[var(--neon)] transition-colors truncate">{item.name}</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold tracking-wider uppercase mt-0.5 truncate">{item.role}</p>
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


