import { motion } from "framer-motion";
import { Cpu, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  const founders = [
    {
      initials: "EH",
      name: "EZ-ZOUEK Hamza",
      role: t('about.founder1.role'),
      bio: t('about.founder1.bio'),
      gradient: "from-[var(--neon)] to-[var(--electric)]",
    },
    {
      initials: "BW",
      name: "BADRI Wissal",
      role: t('about.founder2.role'),
      bio: t('about.founder2.bio'),
      gradient: "from-[var(--violet-glow)] to-[var(--neon)]",
    },
  ];

  const stats = [
    [ "10+", t('about.stats.projects') ],
    [ "2", t('about.stats.founders') ],
    [ "24h", t('about.stats.response') ],
    [ "100%", t('about.stats.custom') ],
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background glow for the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.03)_0%,transparent_70%)] -z-10" />

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon)]">
              {t('about.subtitle')}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t('about.title_prefix')} <span className="text-gradient">{t('about.title_accent')}</span>{t('about.title_suffix')}
            </h2>
            <p className="mt-5 text-muted-foreground">
              {t('about.description')}
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-4 text-sm">
              {stats.map(([k, v]) => (
                <li key={v} className="bg-glass rounded-xl px-4 py-3">
                  <div className="font-display text-2xl font-bold text-gradient">{k}</div>
                  <div className="text-xs text-muted-foreground">{v}</div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center min-h-[400px]"
          >
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--neon)]/10 via-transparent to-[var(--electric)]/10 blur-3xl -z-10" />
            
            {/* Floating Service Cards */}
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
              {/* Card 1: Web Development */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-48 h-32 bg-glass border border-white/10 rounded-2xl p-4 shadow-xl z-20 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[var(--neon)]/20 text-[var(--neon)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider">Web Apps</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-white/10 rounded-full" />
                  <div className="h-1.5 w-2/3 bg-white/10 rounded-full" />
                </div>
              </motion.div>

              {/* Card 2: Mobile Apps */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, -2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-8 left-0 w-40 h-56 bg-glass border border-white/10 rounded-[2.5rem] p-6 shadow-2xl z-30 backdrop-blur-xl"
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full" />
                <div className="mt-8 space-y-3">
                  <div className="h-24 w-full rounded-xl bg-gradient-to-br from-[var(--neon)] to-[var(--electric)] opacity-40" />
                  <div className="h-2 w-full bg-white/10 rounded-full" />
                  <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-white/20" />
              </motion.div>

              {/* Card 3: UI/UX Design */}
              <motion.div
                animate={{ 
                  x: [-5, 5, -5],
                  y: [5, -5, 5]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-20 -left-12 w-36 h-36 bg-glass border border-white/10 rounded-full p-4 shadow-lg z-10 backdrop-blur-md flex flex-col items-center justify-center"
              >
                <div className="p-3 rounded-full bg-[var(--electric)]/20 text-[var(--electric)] mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-center">UI/UX Craft</span>
              </motion.div>

              {/* Connection Lines / Glows */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-1/2 h-1/2 rounded-full bg-[var(--neon)] blur-[100px] animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Founders embedded inside About */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon)]">
              {t('about.founders_subtitle')}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {t('about.founders_title_prefix')} <span className="text-gradient">{t('about.founders_title_accent')}</span>
            </h3>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-glass glow-border group rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:shadow-glow-soft"
              >
                <div className="relative mx-auto h-24 w-24">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${f.gradient} blur-md opacity-60 group-hover:opacity-90 transition-opacity`} />
                  <div className={`relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${f.gradient} font-display text-2xl font-bold text-background ring-2 ring-white/20`}>
                    {f.initials}
                  </div>
                </div>
                <h4 className="mt-5 font-display text-lg font-semibold">{f.name}</h4>
                <p className="text-sm text-[var(--neon)]">{f.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{f.bio}</p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <a
                    href="https://instagram.com/wh__agency"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${f.name} Instagram`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${f.name} LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
