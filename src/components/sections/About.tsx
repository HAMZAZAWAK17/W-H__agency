import { motion } from "framer-motion";
import { Cpu, Instagram, Linkedin } from "lucide-react";

type Founder = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  gradient: string;
};

const founders: Founder[] = [
  {
    initials: "EH",
    name: "EZ-ZOUEK Hamza",
    role: "Full-stack Developer",
    bio: "Builds robust web platforms end-to-end — from API to pixel.",
    gradient: "from-[var(--neon)] to-[var(--electric)]",
  },
  {
    initials: "BW",
    name: "BADRI Wissal",
    role: "Mobile Developer · UI/UX",
    bio: "Crafts polished mobile experiences with care for every detail.",
    gradient: "from-[var(--violet-glow)] to-[var(--neon)]",
  },
];

export function About() {
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
              Who we are
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              A duo of engineers shipping <span className="text-gradient">future-ready</span> products.
            </h2>
            <p className="mt-5 text-muted-foreground">
              We&apos;re two software engineering students obsessed with crafting
              fast, beautiful, and reliable digital solutions. From early-stage
              concepts to fully-shipped products, we partner with founders,
              students, and small teams to bring ideas to life.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-4 text-sm">
              {[
                ["10+", "Projects shipped"],
                ["2", "Founders, one vision"],
                ["24h", "Response time"],
                ["100%", "Custom code"],
              ].map(([k, v]) => (
                <li key={v} className="bg-glass rounded-xl px-4 py-3">
                  <div className="font-display text-2xl font-bold text-gradient">{k}</div>
                  <div className="text-xs text-muted-foreground">{v}</div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.85_0.18_200/30%),transparent_60%)] blur-2xl" />
            <div className="absolute inset-6 rounded-full border border-white/10 animate-pulse-glow" />
            <div className="absolute inset-16 rounded-full border border-white/10" style={{ animationDelay: "-1s" }} />
            <div className="absolute inset-28 rounded-full border border-[var(--neon)]/40" />
            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon)] to-[var(--violet-glow)] shadow-neon">
              <Cpu className="h-10 w-10 text-background" strokeWidth={2} />
            </div>
            <span className="absolute left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--neon)] shadow-[0_0_18px_var(--neon)]" />
            <span className="absolute right-6 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[var(--electric)] shadow-[0_0_18px_var(--electric)]" />
            <span className="absolute bottom-10 left-12 h-2 w-2 rounded-full bg-[var(--violet-glow)] shadow-[0_0_18px_var(--violet-glow)]" />
          </motion.div>
        </div>

        {/* Founders embedded inside About */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon)]">
              The founders
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Meet the <span className="text-gradient">team</span>
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
