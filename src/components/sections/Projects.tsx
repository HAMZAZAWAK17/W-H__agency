import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Smartphone, Globe, LayoutDashboard, ShoppingBag, GraduationCap, Sparkles, type LucideIcon } from "lucide-react";

type Filter = "All" | "Web" | "Mobile" | "UI";

type Project = {
  icon: LucideIcon;
  title: string;
  category: string;
  type: Exclude<Filter, "All">;
  description: string;
  tags: string[];
  accent: string;
};

const projects: Project[] = [
  {
    icon: Smartphone,
    title: "FitPulse",
    category: "Mobile App",
    type: "Mobile",
    description: "Cross-platform fitness tracker with workout plans, progress charts, and social challenges.",
    tags: ["React Native", "Firebase", "UI/UX"],
    accent: "from-[var(--neon)]/30 to-[var(--electric)]/10",
  },
  {
    icon: ShoppingBag,
    title: "Nova Store",
    category: "E-commerce",
    type: "Web",
    description: "Modern headless storefront with smooth checkout, animated product galleries, and CMS.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    accent: "from-[var(--violet-glow)]/30 to-[var(--neon)]/10",
  },
  {
    icon: LayoutDashboard,
    title: "OpsBoard",
    category: "SaaS Dashboard",
    type: "Web",
    description: "Real-time analytics dashboard for SMBs — KPIs, team management, and exportable reports.",
    tags: ["React", "Supabase", "Charts"],
    accent: "from-[var(--electric)]/30 to-[var(--violet-glow)]/10",
  },
  {
    icon: Globe,
    title: "Atlas Studio",
    category: "Agency Site",
    type: "UI",
    description: "Award-style portfolio site with cinematic scroll, custom cursor, and CMS-driven case studies.",
    tags: ["Astro", "GSAP", "Sanity"],
    accent: "from-[var(--neon)]/30 to-[var(--violet-glow)]/10",
  },
  {
    icon: GraduationCap,
    title: "EduTrack",
    category: "PFE Project",
    type: "Mobile",
    description: "Final-year project: an AI-powered student progress tracker with smart recommendations.",
    tags: ["Python", "FastAPI", "ML"],
    accent: "from-[var(--electric)]/30 to-[var(--neon)]/10",
  },
  {
    icon: Sparkles,
    title: "Pitch Deck Pro",
    category: "Branding",
    type: "UI",
    description: "Investor-ready pitch deck and brand identity for an early-stage AI startup.",
    tags: ["Figma", "Slides", "Branding"],
    accent: "from-[var(--violet-glow)]/30 to-[var(--electric)]/10",
  },
];

const filters: Filter[] = ["All", "Web", "Mobile", "UI"];

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon)]">
            Selected work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Projects we&apos;re <span className="text-gradient">proud of</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A glimpse at what we&apos;ve been building — from mobile apps to full-stack platforms.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`relative rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                  isActive
                    ? "border-[var(--neon)]/60 bg-[var(--neon)]/10 text-[var(--neon)] shadow-glow-soft"
                    : "border-white/10 bg-white/5 text-foreground/70 hover:border-white/20 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.article
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-glass glow-border group relative overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-glow-soft"
                >
                  {/* Visual header */}
                  <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${p.accent}`}>
                    <div className="absolute inset-0 grid-overlay opacity-40" />
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--neon)]/20 blur-3xl transition-all duration-500 group-hover:scale-125" />
                    <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-[var(--violet-glow)]/20 blur-3xl" />
                    <div className="relative flex h-full items-center justify-center">
                      <div className="bg-glass flex h-16 w-16 items-center justify-center rounded-2xl shadow-glow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-7 w-7 text-[var(--neon)]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/10 bg-background/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--neon)] backdrop-blur">
                      {p.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold tracking-tight">
                        {p.title}
                      </h3>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-foreground/60 transition-all group-hover:border-[var(--neon)]/50 group-hover:bg-[var(--neon)]/10 group-hover:text-[var(--neon)]">
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-foreground/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
