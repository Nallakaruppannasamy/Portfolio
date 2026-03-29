'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Terminal, Cpu, Globe, Code2 } from 'lucide-react';
import Link from 'next/link';

const ROLES = ["Full Stack Learner", "MERN Stack Developer", "Software Engineer"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isBooted, setIsBooted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Follower Springs for smooth movement
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const bootTimer = setTimeout(() => setIsBooted(true), 1500);
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => {
      clearTimeout(bootTimer);
      clearInterval(roleTimer);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-16 overflow-hidden bg-background text-foreground transition-colors duration-500 selection:bg-cyan-500/30"
    >
      {/* --- BACKGROUND LAYER --- */}
      {/* Feature: Moving Animated Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-[0.2] dark:opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            x: [0, -60],
            y: [0, -60],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Feature: Smooth Mouse Follower Glow */}
        <motion.div
          className="absolute w-150 h-150 rounded-full bg-cyan-500/20 blur-[120px] pointer-events-none"
          style={{
            x: useTransform(mouseX, (x) => x - 300),
            y: useTransform(mouseY, (y) => y - 300),
          }}
        />
      </div>

      {/* Feature 2: Terminal Boot Overlay */}
      <AnimatePresence>
        {!isBooted && (
          <motion.div
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black flex items-center justify-center font-mono text-cyan-500 p-6"
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="mb-2 text-sm md:text-base">{`> Initializing MERN_Engine...`}</p>
              <p className="mb-2 text-sm md:text-base">{`> Mounting IT_Architecture...`}</p>
              <motion.p
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="text-sm md:text-base"
              >{`> _`}</motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side Content */}
        <motion.div
          initial="hidden"
          animate={isBooted ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="flex flex-col gap-4 md:gap-6 text-center lg:text-left items-center lg:items-start"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 glass px-4 py-1.5 rounded-full border border-primary/10">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-cyan-500 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">
              Dev.Environment: Active
            </p>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-2xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-none">
            <span className="bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
              Nallakaruppannasamy R
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="h-10 md:h-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-xl md:text-3xl text-muted-foreground font-medium font-mono"
              >
                {`{ ${ROLES[roleIndex]} }`}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-light">
            Sathyabama Institute B.E. student specializing in <span className="text-foreground font-semibold">MERN Stack Development</span>. Focusing on building scalable cloud architectures and high-performance software systems.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-cyan-500 text-white dark:text-black font-bold rounded-2xl flex items-center gap-2 transition-all"
              >
                Explore Projects <ExternalLink size={18} />
              </motion.button>
            </a>
            <motion.button
              whileHover={{ backgroundColor: "var(--accent)" }}
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="px-8 py-4 glass text-foreground font-bold rounded-2xl border border-primary/10 flex items-center gap-2"
            >
              Resume <ArrowDown size={18} />
            </motion.button>
          </motion.div>

          {/* IT Meta-data and Socials */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-8">
            <div className="flex gap-5 border-r border-primary/10 pr-6 text-muted-foreground">
              <Link href="https://github.com/Nallakaruppannasamy" target="_blank" className="hover:text-cyan-500 transition-all hover:-translate-y-1 cursor-pointer"><Github size={22} /></Link>
              <Link href="https://www.linkedin.com/in/nallakaruppannasamyr/" target="_blank" className="hover:text-cyan-500 transition-all hover:-translate-y-1 cursor-pointer"><Linkedin size={22} /></Link>
              <button
                onClick={() => navigator.clipboard.writeText('rnksamy007@gmail.com')}
                className="hover:text-cyan-500 cursor-pointer transition-all hover:-translate-y-1"
              >
                <Mail size={22} />
              </button>
            </div>
            <div className="text-[10px] font-mono text-muted-foreground uppercase flex flex-col gap-1">
              <div className="flex items-center gap-2"><Globe size={10} /> <span>Loc: Chennai, INDIA</span></div>
              <div className="flex items-center gap-2"><Cpu size={10} /> <span>Stack: MERN_Engine_v1.0</span></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive System Core */}
        <motion.div
          style={{ y: y2, opacity }}
          className="relative hidden lg:flex items-center justify-center h-150"
        >
          <div className="relative w-full max-w-80.5 aspect-square">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="w-full h-full glass rounded-[4rem] border border-primary/10 flex items-center justify-center relative overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-purple-600/10" />
              <div className="text-center z-10 group cursor-default">
                <Terminal size={80} className="mx-auto mb-6 text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-transform group-hover:scale-110" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-mono text-muted-foreground tracking-[0.4em] uppercase">Architecture</span>
                  <span className="text-[10px] font-mono text-cyan-500/50">Build: {new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>

            {/* Orbiting Tech Nodes */}
            {[
              { label: 'MongoDB', icon: <Code2 size={16} />, color: 'text-green-500', angle: 0 },
              { label: 'Express', icon: <Terminal size={16} />, color: 'text-gray-500', angle: 90 },
              { label: 'React', icon: <Globe size={16} />, color: 'text-cyan-500', angle: 180 },
              { label: 'Node.js', icon: <Cpu size={16} />, color: 'text-emerald-500', angle: 270 }
            ].map((node, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
                style={{ rotate: node.angle }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 group">
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: -node.angle }}
                    className={`w-14 h-14 glass rounded-2xl border border-primary/10 flex items-center justify-center ${node.color} shadow-lg cursor-help backdrop-blur-2xl transition-all`}
                  >
                    {node.icon}
                  </motion.div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-foreground text-background text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 whitespace-nowrap shadow-xl">
                    {node.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll CTA */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity"
      >
        <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-[0.3em]">Initialize Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-cyan-500 to-transparent" />
      </motion.div>
    </section>
  );
}