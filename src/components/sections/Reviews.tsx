import { motion, useMotionValue, useSpring } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef, useCallback } from "react";

// Individual tiltable review card
function ReviewCard({
  item,
  index,
}: {
  item: { name: string; role: string; comment: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springCfg = { damping: 25, stiffness: 180 };
  const springRotateX = useSpring(rotateX, springCfg);
  const springRotateY = useSpring(rotateY, springCfg);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    rotateX.set(-dy * 5);
    rotateY.set(dx * 5);
  }, []);

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      className="group bg-white/45 dark:bg-[#0b0e14]/40 border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:border-[var(--neon)]/30 dark:hover:border-[var(--neon)]/30 backdrop-blur-xl relative rounded-[2rem] p-6 flex flex-col w-[320px] shrink-0 transition-all duration-300 cursor-default"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Hover glow blob */}
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--neon)] blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none" />
      <Quote className="absolute top-6 right-6 h-8 w-8 text-[var(--neon)]/10 transition-colors group-hover:text-[var(--neon)]/25" />

      {/* Stars — sequential reveal */}
      <div className="flex gap-0.5 mb-4 relative z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -15, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.06 + i * 0.07,
              duration: 0.35,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
          </motion.div>
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
          <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white group-hover:text-[var(--neon)] transition-colors truncate">
            {item.name}
          </h4>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold tracking-wider uppercase mt-0.5 truncate">
            {item.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Reviews() {
  const { t } = useTranslation();

  const translatedReviews = t('reviews.items', { returnObjects: true }) as Array<{
    name: string;
    role: string;
    comment: string;
  }>;

  // Duplicate for seamless loop
  const allReviews = [...translatedReviews, ...translatedReviews];
  const midPoint = Math.ceil(allReviews.length / 2);
  const row1 = allReviews.slice(0, midPoint);
  const row2 = allReviews.slice(midPoint);

  return (
    <section id="reviews" className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* ── Background personnalisé Reviews ── */}
      {/* Two large orbes symétriques */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--neon)]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--electric)]/5 blur-[120px] rounded-full pointer-events-none" />
      {/* Diamond / caret pattern */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,242,255,0.6) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Horizontal light bar centre */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon)]/10 to-transparent pointer-events-none" />

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
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            {t('reviews.title_prefix')} <span className="text-gradient">{t('reviews.title_accent')}</span> {t('reviews.title_suffix')}
          </motion.h2>
        </div>
      </div>

      {/* Marquee Row 1 — left scroll */}
      <div 
        className="relative overflow-hidden mb-6 group"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >

        <div
          className="flex gap-6 marquee-track-fast"
          style={{ width: "max-content" }}
        >
          {row1.map((item, idx) => (
            <ReviewCard key={`r1-${idx}`} item={item} index={idx} />
          ))}
          {/* Duplicate for seamless loop */}
          {row1.map((item, idx) => (
            <ReviewCard key={`r1-dup-${idx}`} item={item} index={idx} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — right scroll (reverse) */}
      {row2.length > 0 && (
        <div 
          className="relative overflow-hidden group"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}
        >

          <div
            className="flex gap-6 marquee-track-reverse"
            style={{ width: "max-content" }}
          >
            {row2.map((item, idx) => (
              <ReviewCard key={`r2-${idx}`} item={item} index={idx} />
            ))}
            {/* Duplicate for seamless loop */}
            {row2.map((item, idx) => (
              <ReviewCard key={`r2-dup-${idx}`} item={item} index={idx} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Reviews;
