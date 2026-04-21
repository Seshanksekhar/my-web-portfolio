import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`mx-auto max-w-5xl rounded-full px-6 py-2 transition-all duration-300 ${
          scrolled ? 'glass shadow-2xl backdrop-blur-xl' : 'bg-transparent border-transparent'
        } flex items-center justify-between`}>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-2xl font-display font-black tracking-tighter text-white">
              SESHANK<span className="text-brand-primary">.</span>
            </a>
            <div className="hidden lg:flex items-center text-[10px] text-brand-accent font-mono uppercase tracking-widest gap-2">
              <span className="status-dot"></span>
              Available for projects
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 border-l border-zinc-800 pl-6 ml-2">
            <a href="https://github.com/seshanksekhar" className="text-zinc-400 hover:text-white transition-colors"><Github size={18} /></a>
            <a href="https://linkedin.com/in/b-seshanksekhar" className="text-zinc-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="mailto:seshanksekharbobbili@gmail.com" className="text-zinc-400 hover:text-white transition-colors"><Mail size={18} /></a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass-dark border-b border-white/5 py-8 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-zinc-400 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-8 pt-4 border-t border-zinc-800 w-full justify-center">
               <a href="https://github.com/seshanksekhar" className="text-zinc-400"><Github size={24} /></a>
               <a href="https://linkedin.com/in/b-seshanksekhar" className="text-zinc-400"><Linkedin size={24} /></a>
               <a href="mailto:seshanksekharbobbili@gmail.com" className="text-zinc-400"><Mail size={24} /></a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
