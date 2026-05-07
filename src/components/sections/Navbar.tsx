import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import Magnetic from '../ui/Magnetic';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = useMemo(() => [
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.services'), href: '#services' },
    { name: t('navbar.tech'), href: '#tech' },
    { name: t('navbar.projects'), href: '#projects' },
    { name: t('navbar.reviews'), href: '#reviews' },
    { name: t('navbar.contact'), href: '#contact' },
  ], [t]);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const sections = navLinks.map(link => link.href.substring(1));
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [navLinks]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-4 md:py-6">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          maxWidth: isScrolled ? "600px" : "1152px",
          height: isScrolled ? "60px" : "72px"
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={`w-full flex items-center justify-between px-6 rounded-full bg-glass backdrop-blur-xl border border-white/10 transition-all duration-500 ${
          isScrolled ? 'shadow-[0_20px_50px_rgba(0,0,0,0.3)] shadow-[var(--neon)]/10 ring-1 ring-white/10' : 'shadow-lg'
        }`}
      >
        <Magnetic>
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center shadow-[0_0_15px_hsla(var(--primary-glow),0.2)] group-hover:border-primary transition-all duration-300">
              <span className="text-primary text-sm font-black font-display italic tracking-tighter">WH</span>
            </div>
            {!isScrolled && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden sm:block text-base font-bold tracking-tighter font-display uppercase"
              >
                W&H <span className="text-[var(--neon)] font-light">Agency</span>
              </motion.span>
            )}
          </div>
        </Magnetic>

        <div className={`hidden lg:flex items-center gap-1 bg-muted/20 p-1 rounded-full ${isScrolled ? 'scale-90 origin-center' : ''}`}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-[13px] font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-full"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>


        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          {!isScrolled && (
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <Magnetic>
                <a href="#contact" className="btn-primary py-1.5 px-5 text-[9px] whitespace-nowrap font-bold uppercase tracking-widest">
                  {t('navbar.contact')}
                </a>
              </Magnetic>
            </div>
          )}
          {isScrolled && (
            <div className="flex items-center gap-2">
               <ThemeToggle />
               <a href="#contact" className="h-10 w-10 flex items-center justify-center rounded-full bg-[var(--neon)] text-background shadow-[0_0_15px_rgba(0,242,255,0.3)] hover:scale-110 transition-transform">
                  <Menu size={18} />
               </a>
            </div>
          )}
        </div>

        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-full bg-muted/50 transition-colors hover:bg-muted">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-24 left-4 right-4 bg-background rounded-3xl p-6 shadow-2xl md:hidden z-40"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-lg font-medium text-foreground/70 hover:text-primary hover:bg-muted transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;