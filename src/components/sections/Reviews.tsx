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
    <section id="reviews" className="relative py-20 sm:py-28 overflow-hidden bg-background/30">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--neon)]/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--electric)]/5 blur-[120px] rounded-full -z-10" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
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
        </div>

        {/* 4-Column Grid for Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {translatedReviews.slice(0, 4).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              className="relative group/card flex flex-col h-full rounded-[2rem] p-8 bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[0.04] dark:to-transparent border border-slate-100 dark:border-white/[0.05] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Giant Watermark Quote */}
              <Quote className="absolute -top-6 -right-6 h-32 w-32 text-slate-50 dark:text-white/[0.02] rotate-12 transition-transform duration-700 group-hover/card:-rotate-6" />
              
              <div className="relative z-10 flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-sm" />
                ))}
              </div>

              <p className="relative z-10 text-slate-600 dark:text-slate-300 text-[15px] leading-[1.8] flex-grow font-medium">
                "{item.comment}"
              </p>

              <div className="relative z-10 flex items-center gap-4 pt-8 mt-6">
                <div className="relative">
                  {/* Elegant glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00b8c4] to-[#7000ff] rounded-full blur-md opacity-0 group-hover/card:opacity-60 transition-opacity duration-500" />
                  <img
                    src={`https://i.pravatar.cc/150?u=${item.name.replace(/ /g, '')}`}
                    alt={item.name}
                    className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-[#0b0e14]"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-base group-hover/card:text-[#00b8c4] dark:group-hover/card:text-[#00f2ff] transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 mt-1">
                    {item.role}
                  </p>
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


