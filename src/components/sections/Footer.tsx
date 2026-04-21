import React from 'react';
import { Github, Instagram, Twitter, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const services = [
  "Mobile App Development",
  "Web Development",
  "UI / UX Design",
  "Custom Digital Solutions",
  "PFE Support",
  "Presentations & Reports"
];

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Tech', href: '#tech' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-white/5 bg-background">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter">
                W&H <span className="neon-text">Agency</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Crafting digital excellence through modern engineering and premium design. We turn complex ideas into scalable products.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="https://instagram.com/wh__agency" className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground mb-6">Navigation</h3>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-sm text-muted-foreground hover:text-primary cursor-default transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Map Column */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground mb-6">Location</h3>
            <div className="bg-glass glow-border group relative rounded-2xl p-4 overflow-hidden shadow-glow-soft hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute inset-0 grid-overlay opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center justify-center py-6">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-primary/20 border border-primary/40 text-primary mb-4 shadow-[0_0_20px_rgba(0,242,255,0.2)]">
                  <MapPin size={24} />
                </div>
                <h4 className="font-display font-bold text-lg text-foreground">Casablanca</h4>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">MOROCCO, NORTH AFRICA</p>
                <div className="mt-4 pt-4 border-t border-white/10 w-full text-center">
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest animate-pulse">Available Globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} W&H Agency. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8 text-[11px] text-muted-foreground font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
