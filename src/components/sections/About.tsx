import { motion } from "framer-motion";
import { Github, Linkedin, GraduationCap } from "lucide-react";
import profileImg from "../../assets/profile.jpg";
import wissalImg from "../../assets/image.png";

type Founder = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  github: string;
  linkedin: string;
  gradient: string;
};

const founders: Founder[] = [
  {
    initials: "EH",
    name: "EZ-ZOUEK Hamza",
    role: "Full-stack Developer",
    bio: "Builds robust web platforms end-to-end — from API to pixel.",
    image: profileImg,
    github: "https://github.com/HAMZAZAWAK17",
    linkedin: "https://www.linkedin.com/in/hamza-ezzouek-a99aa327a/",
    gradient: "from-[var(--neon)] to-[var(--electric)]",
  },
  {
    initials: "BW",
    name: "BADRI Wissal",
    role: "Mobile Developer · UI/UX",
    bio: "Crafts polished mobile experiences with care for every detail.",
    image: wissalImg,
    github: "https://github.com/Wissal-badri",
    linkedin: "https://www.linkedin.com/in/wissal-badri-77099a335/",
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
            <div className="bg-[#0b0e14] dark:bg-glass glow-border overflow-hidden rounded-2xl shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.05] px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="h-3 w-3" />
              </div>

              {/* Code body */}
              <div className="font-mono text-[13px] leading-relaxed text-slate-300">
                <pre className="overflow-x-auto p-5">
                  <code>
                    <span className="text-slate-500">{"// who we are"}</span>
                    {"\n"}
                    <span className="text-[#c792ea]">const</span>{" "}
                    <span className="text-[#89ddff]">agency</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-white">{"{"}</span>
                    {"\n  "}
                    <span className="text-[#f07178]">name</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#c3e88d]">'W&H Agency'</span>
                    <span className="text-white">,</span>
                    {"\n  "}
                    <span className="text-[#f07178]">team</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-white">[</span>
                    <span className="text-[#c3e88d]">'Hamza'</span>
                    <span className="text-white">,</span>{" "}
                    <span className="text-[#c3e88d]">'Wissal'</span>
                    <span className="text-white">],</span>
                    {"\n  "}
                    <span className="text-[#f07178]">stack</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#c3e88d]">'web · mobile · design'</span>
                    <span className="text-white">,</span>
                    {"\n  "}
                    <span className="text-[#f07178]">mission</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#c792ea]">() =&gt;</span>{" "}
                    <span className="text-white">(</span>
                    {"\n    "}
                    <span className="text-[#c3e88d]">'ship fast, ship clean'</span>
                    {"\n  "}
                    <span className="text-white">),</span>
                    {"\n"}
                    <span className="text-white">{"};"}</span>
                    {"\n\n"}
                    <span className="text-[#c792ea]">export default</span>{" "}
                    <span className="text-[#89ddff]">agency</span>
                    <span className="text-white">;</span>
                    <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-[var(--neon)]" />
                  </code>
                </pre>
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2 text-[11px] text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] shadow-[0_0_8px_var(--neon)]" />
                  online · building
                </span>
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

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 px-4">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="bg-glass glow-border group relative rounded-[2rem] p-8 text-center transition-all hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
              >
                {/* Background decorative glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${f.gradient} blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity`} />
                
                <div className="relative mx-auto h-32 w-32 mb-6">
                  {/* Glowing Ring */}
                  <div className={`absolute -inset-1 rounded-full bg-gradient-to-br ${f.gradient} opacity-40 group-hover:opacity-100 blur-sm transition-all duration-500 group-hover:scale-110`} />
                  
                  {/* Profile Image Container */}
                  <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-white/20">
                    <motion.img 
                      src={f.image} 
                      alt={f.name}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  {/* Graduation Badge */}
                  <div className={`absolute -bottom-2 -right-2 p-2 rounded-lg bg-gradient-to-br ${f.gradient} shadow-lg ring-2 ring-background`}>
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="font-display text-xl font-bold tracking-tight">{f.name}</h4>
                  <p className="mt-1 text-sm font-semibold text-primary uppercase tracking-widest">{f.role}</p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed italic">
                    "{f.bio}"
                  </p>
                  
                  <div className="mt-8 flex items-center justify-center gap-3">
                    <a
                      href={f.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group/icon flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 transition-all hover:bg-white hover:text-black hover:border-transparent"
                    >
                      <Github className="h-5 w-5 transition-transform group-hover/icon:scale-110" />
                    </a>
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="group/icon flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 transition-all hover:bg-[#0A66C2] hover:text-white hover:border-transparent"
                    >
                      <Linkedin className="h-5 w-5 transition-transform group-hover/icon:scale-110" />
                    </a>
                  </div>
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

