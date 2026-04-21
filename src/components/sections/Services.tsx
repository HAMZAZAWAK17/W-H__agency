import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Palette,
  Wand2,
  GraduationCap,
  Presentation,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native-feel iOS & Android apps built with React Native and Flutter.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Fast, scalable websites and dashboards using modern stacks.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "Clean, modern interfaces designed around real user needs.",
  },
  {
    icon: Wand2,
    title: "Custom Digital Solutions",
    description: "Tailor-made tools, automations, and integrations for your business.",
  },
  {
    icon: GraduationCap,
    title: "PFE Support",
    description: "End-to-end help for final year projects — from idea to defense.",
  },
  {
    icon: Presentation,
    title: "Presentations & Reports",
    description: "Polished slide decks and professional reports that impress.",
  },
];

export default function Services({ compact = false }: { compact?: boolean }) {
  const items = compact ? services.slice(0, 6) : services;
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon)]">
            What we do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Services built to <span className="text-gradient">scale your idea</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            One team, multiple disciplines — pick what you need or get the full package.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-glass glow-border group relative rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow-soft"
            >
              <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon)]/20 to-[var(--violet-glow)]/20 ring-1 ring-[var(--neon)]/40">
                <s.icon className="h-5 w-5 text-[var(--neon)]" />
                <span className="absolute inset-0 rounded-xl bg-[var(--neon)]/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
