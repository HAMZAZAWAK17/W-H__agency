import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

export function Reviews() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Get translated reviews array
  const translatedReviews = t('reviews.items', { returnObjects: true }) as Array<{
    name: string;
    role: string;
    comment: string;
  }>;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 1.5 
        : scrollLeft + clientWidth / 1.5;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

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
          
          {/* Desktop Navigation Buttons */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-glass border border-[var(--neon)]/30 hover:bg-[var(--neon)]/10 hover:border-[var(--neon)] hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-all"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="h-6 w-6 text-[var(--neon)]" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-glass border border-[var(--neon)]/30 hover:bg-[var(--neon)]/10 hover:border-[var(--neon)] hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-all"
              aria-label="Scroll Right"
            >
              <ChevronRight className="h-6 w-6 text-[var(--neon)]" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative group">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 snap-x snap-mandatory scrollbar-hide no-scrollbar"
            style={{ 
              msOverflowStyle: 'none', 
              scrollbarWidth: 'none'
            }}
          >
            {translatedReviews.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[300px] sm:w-[400px] snap-center bg-white/5 dark:bg-[#0b0e14]/50 backdrop-blur-md border border-[var(--neon)]/40 hover:border-[var(--neon)] shadow-[0_0_20px_rgba(0,242,255,0.15)] hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] group/card relative rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <Quote className="absolute top-6 right-8 h-10 w-10 text-[var(--neon)]/20 transition-colors group-hover/card:text-[var(--neon)]/40" />
                
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--neon)] text-[var(--neon)] drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]" />
                  ))}
                </div>

                <p className="relative z-10 text-slate-700 dark:text-slate-300 leading-relaxed italic mb-8 flex-grow">
                  "{item.comment}"
                </p>

                <div className="flex items-center gap-4 border-t border-[var(--neon)]/20 pt-6 mt-auto relative z-10">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl ring-2 ring-[var(--neon)]/50 group-hover/card:ring-[var(--neon)] group-hover/card:shadow-[0_0_15px_rgba(0,242,255,0.5)] transition-all">
                    <img
                      src={`https://i.pravatar.cc/150?u=${item.name.replace(/ /g, '')}`}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 dark:text-white group-hover/card:text-[var(--neon)] transition-colors">{item.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wider uppercase mt-1">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Navigation Indicators (Fade edges) */}
          <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none z-10 md:hidden" />
          <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none z-10 md:hidden" />
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-4">
          <button
            onClick={() => scroll('left')}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-glass border border-[var(--neon)]/30 active:bg-[var(--neon)]/10"
          >
            <ChevronLeft className="h-6 w-6 text-[var(--neon)]" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-glass border border-[var(--neon)]/30 active:bg-[var(--neon)]/10"
          >
            <ChevronRight className="h-6 w-6 text-[var(--neon)]" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Reviews;


