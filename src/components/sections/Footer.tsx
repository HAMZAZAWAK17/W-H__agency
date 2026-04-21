import React from 'react';
import { Github, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">W&H <span className="neon-text">Agency</span></h2>
            <p className="text-gray-500 text-sm max-w-xs">
              Building the future of digital experiences, one pixel at a time.
            </p>
          </div>

          <div className="flex space-x-12">
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Navigation</span>
              <a href="#home" className="text-sm text-gray-500 hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm text-gray-500 hover:text-primary transition-colors">About Us</a>
              <a href="#projects" className="text-sm text-gray-500 hover:text-primary transition-colors">Projects</a>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Services</span>
              <span className="text-sm text-gray-500">Web Dev</span>
              <span className="text-sm text-gray-500">Mobile Apps</span>
              <span className="text-sm text-gray-500">UI/UX</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-gray-600 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} W&H Agency. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors"><Github size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
