import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";

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
    <section id="about" className="relative py-20 sm:py-28">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-lg"
          >
            {/* Soft ambient glow */}
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(circle_at_center,oklch(0.85_0.18_200/25%),transparent_70%)] blur-3xl" />

            {/* Code editor card */}
            <div className="bg-glass glow-border overflow-hidden rounded-2xl shadow-glow-soft">
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  wh-agency.tsx
                </span>
                <span className="h-3 w-3" />
              </div>

              {/* Code body */}
              <div className="font-mono text-[13px] leading-relaxed">
                <pre className="overflow-x-auto p-5">
                  <code>
                    <span className="text-muted-foreground">{"// who we are"}</span>
                    {"\n"}
                    <span className="text-[var(--violet-glow)]">const</span>{" "}
                    <span className="text-[var(--neon)]">agency</span>{" "}
                    <span className="text-foreground">=</span>{" "}
                    <span className="text-foreground">{"{"}</span>
                    {"\n  "}
                    <span className="text-[var(--electric)]">name</span>
                    <span className="text-foreground">:</span>{" "}
                    <span className="text-[var(--neon)]">'W&H Agency'</span>
                    <span className="text-foreground">,</span>
                    {"\n  "}
                    <span className="text-[var(--electric)]">team</span>
                    <span className="text-foreground">:</span>{" "}
                    <span className="text-foreground">[</span>
                    <span className="text-[var(--neon)]">'Hamza'</span>
                    <span className="text-foreground">,</span>{" "}
                    <span className="text-[var(--neon)]">'Wissal'</span>
                    <span className="text-foreground">],</span>
                    {"\n  "}
                    <span className="text-[var(--electric)]">stack</span>
                    <span className="text-foreground">:</span>{" "}
                    <span className="text-[var(--neon)]">'web · mobile · design'</span>
                    <span className="text-foreground">,</span>
                    {"\n  "}
                    <span className="text-[var(--electric)]">mission</span>
                    <span className="text-foreground">:</span>{" "}
                    <span className="text-[var(--violet-glow)]">() =&gt;</span>{" "}
                    <span className="text-foreground">(</span>
                    {"\n    "}
                    <span className="text-[var(--neon)]">'ship fast, ship clean'</span>
                    {"\n  "}
                    <span className="text-foreground">),</span>
                    {"\n"}
                    <span className="text-foreground">{"};"}</span>
                    {"\n\n"}
                    <span className="text-[var(--violet-glow)]">export default</span>{" "}
                    <span className="text-[var(--neon)]">agency</span>
                    <span className="text-foreground">;</span>
                    <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-[var(--neon)]" />
                  </code>
                </pre>
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] shadow-[0_0_8px_var(--neon)]" />
                  online · building
                </span>
                <span className="font-mono">utf-8 · ts</span>
              </div>
            </div>

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
