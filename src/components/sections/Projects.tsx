import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight, Smartphone, Globe, LayoutDashboard,
  ShoppingBag, GraduationCap, Sparkles, ChevronLeft,
  ChevronRight, X, Activity, type LucideIcon
} from "lucide-react";

import dentaire1 from "../../assets/dentaire/image.png";
import dentaire2 from "../../assets/dentaire/image copy.png";
import dentaire3 from "../../assets/dentaire/image copy 2.png";
import dentaire4 from "../../assets/dentaire/image copy 3.png";
import dentaire5 from "../../assets/dentaire/image copy 4.png";
import responsiveMockup from "../../assets/cover_image/coverprjt.png";
import eduzen1 from "../../assets/eduzen/1776688885730.jpg";
import eduzen2 from "../../assets/eduzen/1776688885765.jpg";
import eduzen3 from "../../assets/eduzen/1776688885857.jpg";
import eduzen4 from "../../assets/eduzen/1776688885993.jpg";
import eduzen5 from "../../assets/eduzen/1776688886006.jpg";
import eduzen6 from "../../assets/eduzen/1776688886123.jpg";
import eduzen7 from "../../assets/eduzen/1776688886191.jpg";
import eduzen8 from "../../assets/eduzen/1776688886362.jpg";
import school1 from "../../assets/education-manag/image copy 2.png";
import school2 from "../../assets/education-manag/image.png";
import school3 from "../../assets/education-manag/image copy.png";
import school4 from "../../assets/education-manag/image copy 3.png";
import school5 from "../../assets/education-manag/image copy 4.png";
import school6 from "../../assets/education-manag/image copy 5.png";
import school7 from "../../assets/education-manag/image copy 6.png";
import logo1 from "../../assets/Logo/valeryon.png";
import logo2 from "../../assets/Logo/image.png";
import logo3 from "../../assets/Logo/image copy.png";
import logo4 from "../../assets/Logo/image copy 2.png";

type Filter = "All" | "Web" | "Mobile" | "UI" | "Logo";

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
  {
    icon: Activity,
    title: "Dental Clinic",
    category: "Website",
    type: "Web",
    description: "A modern and responsive website for a dental clinic, featuring appointment scheduling and service showcases.",
    tags: ["React", "Tailwind", "Healthcare"],
    accent: "from-[var(--neon)]/30 to-[var(--violet-glow)]/10",
    captures: [
      responsiveMockup, dentaire1, dentaire2, dentaire3, dentaire4, dentaire5
    ]
  },
  {
    icon: GraduationCap,
    title: "EDUZEN",
    category: "Training Platform",
    type: "Web",
    description: "Professional training management platform simplifying the entire educational workflow.",
    tags: ["React.js", "Spring Boot", "MySQL"],
    accent: "from-[var(--electric)]/30 to-[var(--violet-glow)]/10",
    captures: [
      eduzen2, eduzen1, eduzen3, eduzen4, eduzen5, eduzen6, eduzen7, eduzen8
    ]
  },
  {
    icon: Globe,
    title: "ESTEM SUP",
    category: "School Management",
    type: "Web",
    description: "Comprehensive school management system for tracking students, schedules, assignments, and attendance.",
    tags: ["React", "Spring Boot", "MySQL"],
    accent: "from-[var(--neon)]/30 to-[var(--violet-glow)]/10",
    captures: [
      school1, school2, school3, school4, school5, school6, school7
    ]
  },
  {
    icon: Sparkles,
    title: "Logo Collection",
    category: "Branding",
    type: "Logo",
    description: "A collection of unique and memorable logos designed to define brand identities.",
    tags: ["Illustrator", "Branding", "Vector"],
    accent: "from-[var(--violet-glow)]/30 to-[var(--neon)]/10",
    captures: [
      logo1, logo2, logo3, logo4
    ]
  },
];

const filters: Filter[] = ["All", "Web", "Mobile", "UI", "Logo"];

export default function Projects() {
  const { t } = useTranslation();
  const [active, setActive] = useState<Filter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const visible = active === "All" ? projects : projects.filter((p) => p.type === active);

  const translatedProjects = visible.map((p) => ({
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
                className={`relative rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${isActive
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
                  <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${p.accent}`}>
                    {p.captures && p.captures.length > 0 ? (
                      <img src={p.captures[0]} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    ) : (
                      <>
                        <div className="absolute inset-0 grid-overlay opacity-40" />
                        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--neon)]/20 blur-3xl transition-all duration-500 group-hover:scale-125" />
                        <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-[var(--violet-glow)]/20 blur-3xl" />
                        <div className="relative flex h-full items-center justify-center">
                          <div className="bg-glass flex h-16 w-16 items-center justify-center rounded-2xl shadow-glow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <Icon className="h-7 w-7 text-[var(--neon)]" strokeWidth={1.5} />
                          </div>
                        </div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/10 bg-background/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--neon)] backdrop-blur z-10">
                      {p.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold tracking-tight">
                        {p.title}
                      </h3>
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-w-4xl bg-white dark:bg-[#0b0e14] border border-black/10 dark:border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 lg:right-6 lg:top-6 z-50 p-2.5 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 backdrop-blur-md transition-colors text-foreground"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col lg:grid lg:grid-cols-5 h-full overflow-y-auto lg:overflow-hidden">
                {/* Left: Image Gallery */}
                <div className="lg:col-span-3 relative h-[250px] sm:h-[350px] lg:h-[450px] bg-black/5 dark:bg-white/5 group shrink-0">
                  <div className="absolute inset-0 overflow-y-auto">
                    <div className="min-h-full flex items-center w-full">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImgIndex}
                          src={selectedProject.captures?.[currentImgIndex]}
                          alt={selectedProject.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="w-full h-auto block shadow-xl"
                        />
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 text-white -translate-x-2 group-hover:translate-x-0"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 text-white translate-x-2 group-hover:translate-x-0"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Counter Badge */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-[10px] text-white font-bold uppercase tracking-widest">
                    {currentImgIndex + 1} / {selectedProject.captures?.length}
                  </div>
                </div>

                {/* Right: Project Details */}
                <div className="lg:col-span-2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-white dark:bg-[#0b0e14]">
                  <span className="text-xs font-bold bg-gradient-to-r from-[#00b8c4] to-[#7000ff] dark:from-[#00f2ff] dark:to-[#bd00ff] bg-clip-text text-transparent uppercase tracking-[0.2em] mb-4">
                    {selectedProject.category}
                  </span>

                  <h3 className="text-3xl sm:text-4xl font-display font-bold mb-4 tracking-tight text-foreground">
                    {selectedProject.title}
                  </h3>

                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 lg:mb-10">
                    {selectedProject.tags.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-black/10 dark:border-white/10 flex justify-center lg:justify-start">
                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 rounded-xl w-full bg-gradient-to-r from-[#00b8c4] to-[#7000ff] dark:from-[#00f2ff] dark:to-[#bd00ff] text-white font-bold text-sm hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(0,184,196,0.3)] dark:shadow-[0_0_20px_rgba(0,242,255,0.3)] flex items-center justify-center gap-2"
                    >
                      {t('projects.modal.inquire')}
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

