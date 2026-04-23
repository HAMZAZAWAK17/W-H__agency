import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  ArrowUpRight, Smartphone, Globe, LayoutDashboard, 
  ShoppingBag, GraduationCap, Sparkles, ChevronLeft, 
  ChevronRight, X, type LucideIcon 
} from "lucide-react";

type Filter = "All" | "Web" | "Mobile" | "UI";

type Project = {
  icon: LucideIcon;
  title: string;
  category: string;
  type: Exclude<Filter, "All">;
  description: string;
  tags: string[];
  accent: string;
  captures?: string[]; // Array of image URLs/paths
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
    captures: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1200",
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200"
    ]
  },
  {
    icon: ShoppingBag,
    title: "Nova Store",
    category: "E-commerce",
    type: "Web",
    description: "Modern headless storefront with smooth checkout, animated product galleries, and CMS.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    accent: "from-[var(--violet-glow)]/30 to-[var(--neon)]/10",
    captures: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200"
    ]
  },
  {
    icon: LayoutDashboard,
    title: "OpsBoard",
    category: "SaaS Dashboard",
    type: "Web",
    description: "Real-time analytics dashboard for SMBs — KPIs, team management, and exportable reports.",
    tags: ["React", "Supabase", "Charts"],
    accent: "from-[var(--electric)]/30 to-[var(--violet-glow)]/10",
    captures: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
    ]
  },
  {
    icon: Globe,
    title: "Atlas Studio",
    category: "Agency Site",
    type: "UI",
    description: "Award-style portfolio site with cinematic scroll, custom cursor, and CMS-driven case studies.",
    tags: ["Astro", "GSAP", "Sanity"],
    accent: "from-[var(--neon)]/30 to-[var(--violet-glow)]/10",
    captures: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200"
    ]
  },
  {
    icon: GraduationCap,
    title: "EduTrack",
    category: "PFE Project",
    type: "Mobile",
    description: "Final-year project: an AI-powered student progress tracker with smart recommendations.",
    tags: ["Python", "FastAPI", "ML"],
    accent: "from-[var(--electric)]/30 to-[var(--neon)]/10",
    captures: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200",
      "https://images.unsplash.com/photo-1523240715639-99a808406742?q=80&w=1200"
    ]
  },
  {
    icon: Sparkles,
    title: "Pitch Deck Pro",
    category: "Branding",
    type: "UI",
    description: "Investor-ready pitch deck and brand identity for an early-stage AI startup.",
    tags: ["Figma", "Slides", "Branding"],
    accent: "from-[var(--violet-glow)]/30 to-[var(--electric)]/10",
    captures: [
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200"
    ]
  },
];

const filters: Filter[] = ["All", "Web", "Mobile", "UI"];

export default function Projects() {
  const { t } = useTranslation();
  const [active, setActive] = useState<Filter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const visible = active === "All" ? projects : projects.filter((p) => p.type === active);

  const translatedProjects = visible.map((p, index) => ({
    ...p,
    title: t(`projects.items.${p.title.toLowerCase().replace(/ /g, '_')}.title`),
    description: t(`projects.items.${p.title.toLowerCase().replace(/ /g, '_')}.description`),
    category: t(`projects.items.${p.title.toLowerCase().replace(/ /g, '_')}.category`),
  }));


  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.captures) {
      setCurrentImgIndex((prev) => (prev + 1) % selectedProject.captures!.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.captures) {
      setCurrentImgIndex((prev) => (prev - 1 + selectedProject.captures!.length) % selectedProject.captures!.length);
    }
  };

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon)]">
            {t('projects.subtitle')}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t('projects.title_prefix')} <span className="text-gradient">{t('projects.title_accent')}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t('projects.description')}
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
            {translatedProjects.map((p, i) => {
              const Icon = p.icon;

              return (
                <motion.article
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => {
                    setSelectedProject(p);
                    setCurrentImgIndex(0);
                  }}
                  className="bg-glass glow-border group relative overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-glow-soft cursor-pointer"
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

      {/* Discovery Modal / Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-glass border border-white/10 rounded-3xl overflow-y-auto lg:overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 lg:right-6 lg:top-6 z-50 p-2 rounded-full bg-background/50 hover:bg-background transition-colors text-foreground"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                {/* Left: Image Gallery */}
                <div className="lg:col-span-3 relative h-[250px] sm:h-[400px] lg:h-[600px] bg-black/20 flex items-center justify-center group shrink-0">

                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImgIndex}
                      src={selectedProject.captures?.[currentImgIndex]}
                      alt={selectedProject.title}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="h-full w-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/50 hover:bg-background transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/50 hover:bg-background transition-all opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Counter */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-background/50 backdrop-blur text-xs font-bold uppercase tracking-widest">
                    {currentImgIndex + 1} / {selectedProject.captures?.length}
                  </div>
                </div>

                {/* Right: Project Details */}
                <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-4xl font-bold mb-6 tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {selectedProject.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="btn-primary w-full text-center flex items-center justify-center gap-2"
                  >
                    {t('projects.modal.inquire')}
                    <ArrowUpRight size={18} />
                  </a>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

