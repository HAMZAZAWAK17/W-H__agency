import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce App",
    desc: "A fully functional mobile store built with Flutter and Firebase.",
    tech: ["Flutter", "Firebase", "Stripe"],
    type: "Mobile",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "SaaS Dashboard",
    desc: "A premium admin panel for tracking business metrics in real-time.",
    tech: ["Next.js", "Tailwind", "Supabase"],
    type: "Web",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Portfolio Design",
    desc: "Clean, minimal UI/UX for a creative agency showcase.",
    tech: ["Figma", "React"],
    type: "UI/UX",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Recent Projects" 
          subtitle="A showcase of digital products we've designed and developed."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="p-0 overflow-hidden group">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <button className="p-2 bg-primary rounded-full text-background hover:bg-white transition-colors"><ExternalLink size={20} /></button>
                  <button className="p-2 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white/40 transition-colors"><Github size={20} /></button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-[10px] px-2 py-1 bg-primary/20 text-primary rounded border border-primary/30 uppercase font-bold">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs text-gray-500">#{t}</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
