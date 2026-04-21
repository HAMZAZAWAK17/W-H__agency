import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { Github, Instagram, Linkedin } from 'lucide-react';

const founders = [
  {
    name: "EZ-ZOUEK Hamza",
    role: "Full-stack Developer",
    bio: "Passionate software engineering student specializing in building robust web architectures and seamless digital experiences.",
    initials: "EH",
    skills: ["React", "Node.js", "TypeScript"],
    socials: { ig: "#", li: "#", gh: "#" }
  },
  {
    name: "BADRI Wissal",
    role: "Mobile / UI UX Designer",
    bio: "Software engineering student with a sharp eye for design and a focus on crafting high-performance mobile applications.",
    initials: "BW",
    skills: ["Flutter", "Figma", "React Native"],
    socials: { ig: "#", li: "#", gh: "#" }
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Meet the Team" 
          subtitle="A duo of software engineering students obsessed with crafting fast, beautiful, and reliable digital solutions."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder) => (
            <Card key={founder.name} className="group overflow-hidden">
              <div className="relative mb-8 flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px] animate-glow">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-3xl font-bold text-white overflow-hidden">
                    {founder.initials}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                <p className="text-primary font-medium mb-4">{founder.role}</p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {founder.bio}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {founder.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-widest text-gray-300 border border-white/5 group-hover:border-primary/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center space-x-4">
                  <a href={founder.socials.ig} className="text-gray-500 hover:text-primary transition-colors"><Instagram size={20} /></a>
                  <a href={founder.socials.li} className="text-gray-500 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                  <a href={founder.socials.gh} className="text-gray-500 hover:text-primary transition-colors"><Github size={20} /></a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
