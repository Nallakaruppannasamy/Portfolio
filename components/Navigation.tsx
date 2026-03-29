'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, FileText, Github, Linkedin } from 'lucide-react';

// Feature: Magnetic Link Component for high-end interaction
const MagneticLink = ({ children, href, onClick, isActive }: any) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: dx, y: dy }}
    >
      <a
        href={href}
        onClick={onClick}
        className={`relative px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] transition-colors duration-300 flex items-center group ${
          isActive ? 'text-cyan-400' : 'text-gray-500 hover:text-white'
        }`}
      >
        <span className="opacity-0 group-hover:opacity-100 text-cyan-500 transition-opacity mr-1 font-bold">{'<'}</span>
        {children}
        <span className="opacity-0 group-hover:opacity-100 text-cyan-500 transition-opacity ml-1 font-bold">{'>'}</span>
      </a>
    </motion.div>
  );
};

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  
  const links = [
    { name: 'About', href: '#about', id: '01' },
    { name: 'Experience', href: '#experience', id: '02' },
    { name: 'Education', href: '#education', id: '03' },
    { name: 'Skills', href: '#skills', id: '04' },
    { name: 'Projects', href: '#projects', id: '05' },
    { name: 'Contact', href: '#contact', id: '06' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sectionElements = links.map(l => document.getElementById(l.href.substring(1)));
      const currentPos = window.scrollY + 150;

      sectionElements.forEach((el, i) => {
        if (el && currentPos >= el.offsetTop && currentPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(links[i].href.substring(1));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const elem = document.getElementById(href.replace('#', ''));
    window.scrollTo({
      top: elem ? elem.offsetTop - 80 : 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Floating Section Counter */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-60 hidden xl:flex flex-col gap-6 items-center">
        <div className="h-20 w-px bg-white/10" />
        {links.map((link) => (
          <span 
            key={link.id} 
            className={`font-mono text-[10px] transition-all duration-500 ${
              activeSection === link.href.substring(1) ? 'text-cyan-400 scale-150 font-bold' : 'text-gray-700'
            }`}
          >
            {link.id}
          </span>
        ))}
        <div className="h-20 w-px bg-white/10" />
      </div>

      <nav className={`fixed top-0 w-full z-100 transition-all duration-500 border-b ${
        isScrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-white/5 py-3' : 'bg-transparent border-transparent py-8'
      } px-8 md:px-16`}>
        
        {/* Glassmorphism Scanning Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <motion.div 
            animate={{ x: ['-100%', '100%'] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-1/2 h-full bg-linear-to-r from-transparent via-cyan-500 to-transparent skew-x-12" 
          />
        </div>

        <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
          
          {/* Progress Ring Logo with Gradient Text */}
          <Link href="/" className="relative group flex items-center justify-center w-12 h-12">
            <svg className="absolute inset-0 w-full h-full -rotate-90 scale-110">
              <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/10" />
              <motion.circle 
                cx="24" cy="24" r="20" fill="none" stroke="#06b6d4" strokeWidth="2" 
                strokeDasharray="100" style={{ pathLength: scrollYProgress }} 
              />
            </svg>
            <span className="font-black text-xl bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              RNKS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
              {links.map((link) => (
                <MagneticLink 
                  key={link.name} 
                  href={link.href} 
                  isActive={activeSection === link.href.substring(1)}
                  onClick={(e: any) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </MagneticLink>
              ))}
            </div>

            <div className="flex gap-4 border-l border-white/10 pl-4 ml-2 items-center">
              <Link href="https://github.com/Nallakaruppannasamy" target="_blank" className="p-2 text-gray-500 hover:text-white transition-colors">
                <Github size={18} />
              </Link>
              <Link href="https://linkedin.com/in/nallakaruppannasamyr/" target="_blank" className="p-2 text-gray-500 hover:text-white transition-colors">
                <Linkedin size={18} />
              </Link>
              
              {/* Resume Button */}
              <Link 
                href="/resume.pdf" 
                target="_blank" 
                className="flex items-center gap-2 px-4 py-2 glass border border-white/10 rounded-full text-[10px] font-bold text-gray-400 hover:text-white hover:border-white/20 transition-all"
              >
                <FileText size={14} className="text-cyan-500" />
                RESUME
              </Link>
            </div>

            <div className="relative group">
              <motion.a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                whileHover={{ scale: 1.05 }}
                className="ml-4 px-6 py-2 rounded-full bg-cyan-500 text-black text-[10px] font-black tracking-widest flex items-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all"
              >
                <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" /> HIRE ME
              </motion.a>
              
              <div className="absolute top-full right-0 mt-4 px-4 py-2 bg-[#0a0a0a] border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none translate-y-2 group-hover:translate-y-0 shadow-2xl z-110">
                <p className="text-[9px] font-mono text-cyan-400 whitespace-nowrap uppercase tracking-widest">
                  Status: Available for MERN Developer Roles
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-cyan-400 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }} 
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }} 
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }} 
            className="fixed inset-0 z-90 bg-black/90 flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {links.map((link, i) => (
              <motion.a 
                key={link.name} 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: i * 0.1 }}
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)} 
                className="text-4xl font-black text-white italic uppercase tracking-tighter hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <Link 
              href="/resume.pdf" 
              target="_blank" 
              className="mt-4 flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white text-lg font-bold"
            >
              <FileText className="text-cyan-500" /> RESUME
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}