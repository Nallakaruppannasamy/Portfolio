'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import {
  Database,
  Terminal,
  Cpu,
  Layers,
} from 'lucide-react';
import Image from 'next/image';

export default function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const skillCategories = [
    {
      name: 'Frontend Architecture',
      skills: [
        { name: 'HTML', level: 90, color: 'text-red-400' },
        { name: 'CSS', level: 70, color: 'text-yellow-400' },
        { name: 'React', level: 90, color: 'text-cyan-400' },
        { name: 'Next.js', level: 85, color: 'text-white' },
        { name: 'TypeScript', level: 80, color: 'text-blue-500' },
        { name: 'Tailwind CSS', level: 95, color: 'text-sky-400' },
        { name: 'Framer Motion', level: 85, color: 'text-purple-500' },
      ],
      icon: <Layers size={32} />,
      tag: 'UI_ENGINE',
      accent: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      name: 'Backend Systems',
      skills: [
        { name: 'Node.js', level: 85, color: 'text-emerald-500' },
        { name: 'Express', level: 90, color: 'text-gray-400' },
        { name: 'MongoDB', level: 88, color: 'text-green-500' },
        { name: 'PostgreSQL', level: 75, color: 'text-blue-400' },
        { name: 'Firebase', level: 80, color: 'text-orange-500' },
      ],
      icon: <Database size={32} />,
      tag: 'DATA_CORE',
      accent: 'from-purple-500/20 to-blue-500/20',
    },
    {
      name: 'Engineering Ops',
      skills: [
        { name: 'Git & GitHub', level: 90, color: 'text-white' },
        { name: 'Excel', level: 70, color: 'text-blue-600' },
        { name: 'Vercel / Netlify', level: 95, color: 'text-emerald-400' },
        { name: 'REST APIs', level: 85, color: 'text-yellow-500' },
        { name: 'Matlab', level: 60, color: 'text-orange-400' },
      ],
      icon: <Terminal size={32} />,
      tag: 'DEV_OPS',
      accent: 'from-emerald-500/20 to-cyan-500/20',
    },
    {
      name: 'Core Logic',
      skills: [
        { name: 'DSA', level: 85, color: 'text-pink-500' },
        { name: 'Python', level: 80, color: 'text-red-500' },
        { name: 'C Programming', level: 75, color: 'text-blue-500' },
        { name: 'Problem Solving', level: 90, color: 'text-amber-400' },
      ],
      icon: <Cpu size={32} />,
      tag: 'LOGIC_UNIT',
      accent: 'from-pink-500/20 to-rose-500/20',
    },
  ];

  const marqueeSkills = [
    { name: 'HTML5', src: '/icons/HTML_logo.svg' },
    { name: 'CSS3', src: '/icons/CSS_logo.svg' },
    { name: 'JavaScript', src: '/icons/JAVASCRIPT_logo.svg' },
    { name: 'React', src: '/icons/REACT_logo.svg' },
    { name: 'Next.js', src: '/icons/NEXTJS_logo.png' },
    { name: 'Bootstrap', src: '/icons/BOOTSTRAP_logo.svg' },
    { name: 'Tailwind', src: '/icons/TAILWINDCSS_logo.svg' },
    { name: 'Node.js', src: '/icons/NODEJS_logo.svg' },
    { name: 'Express', src: '/icons/EXPRESSJS_logo.svg' },
    { name: 'MongoDB', src: '/icons/MONGODB_logo.png' },
    { name: 'MySQL', src: '/icons/MYSQL_logo.svg' },
    { name: 'Git', src: '/icons/GIT_logo.svg' },
    { name: 'GitHub', src: '/icons/GITHUB_logo.svg' },
    { name: 'Python', src: '/icons/PYTHON_logo.svg' },
    { name: 'Excel', src: '/icons/EXCEL_logo.svg' },
    { name: 'Canva', src: '/icons/CANVA_logo.svg' },
  ];

  const duplicatedSkills = [...marqueeSkills, ...marqueeSkills, ...marqueeSkills];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" ref={ref} className="relative min-h-screen py-24 px-4 sm:px-8 md:px-16 bg-[#050505] overflow-hidden selection:bg-cyan-500/30">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Subtle Moving Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="mb-20 text-center sm:text-left"
        >
          <h2 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter italic uppercase group cursor-default text-white">
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:animate-pulse">
              Tech_Stack
            </span>
          </h2>
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <div className="h-0.5 w-24 bg-cyan-500 shadow-[0_0_15px_#06b6d4]" />
            <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.5em]">{`> diagnostic.run()`}</p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative h-full">
              <div className="absolute -inset-px bg-linear-to-r from-cyan-500 to-purple-600 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
              <div className="relative glass-dark p-6 sm:p-8 rounded-[2.5rem] h-full transition-all duration-500 overflow-hidden border border-white/5 bg-[#080808]">
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8 text-cyan-400">
                    <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">{category.icon}</div>
                    <span className="text-[10px] font-mono text-gray-600 border border-white/10 px-2 py-1 rounded">{category.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-8 tracking-tight">{category.name}</h3>
                  <div className="space-y-6 flex-1">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-2 group/skill">
                        <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest">
                          <span className={`${skill.color} opacity-70 group-hover/skill:opacity-100 transition-opacity`}>{`<${skill.name} />`}</span>
                          <span className="text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            className={`h-full bg-linear-to-r ${category.accent} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- OPTIMIZED MOBILE-RESPONSIVE MOVING CAROUSEL --- */}
        <div className="mt-10 sm:mt-20 relative overflow-hidden py-6 sm:py-10 w-full horizontal-carousel-container">
          {/* Enhanced Feathered Edges for Mobile Smooth Layout */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-linear-to-r from-[#050505] to-transparent z-30 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-linear-to-l from-[#050505] to-transparent z-30 pointer-events-none" />

          <div className="flex flex-col items-center mb-10 sm:mb-16 text-center px-4">
            <span className="text-[14px] sm:text-xl font-mono text-gray-200 uppercase tracking-[0.3em] sm:tracking-[0.5em] mb-4">
              Integrated_Production_Stream
            </span>
            <div className="h-px w-12 bg-white/40" />
          </div>

          <div className="w-full overflow-hidden flex">
            <motion.div
              className="flex whitespace-nowrap gap-8 sm:gap-16 items-center will-change-transform"
              animate={{ x: [0, -1920] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } }}
            >
              {duplicatedSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 sm:gap-5 group cursor-pointer shrink-0"
                >
                  <div className="p-2.5 sm:p-3 glass rounded-2xl sm:rounded-4xl bg-white/2 border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-white/20 relative w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center">
                    <div className="relative w-8 h-8 sm:w-15 sm:h-15 flex items-center justify-center">
                      <Image
                        src={skill.src}
                        alt={skill.name}
                        fill
                        className="object-contain sm:grayscale sm:group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                        sizes="(max-w: 640px) 32px, 60px"
                      />
                    </div>
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-mono font-bold tracking-[0.2em] sm:tracking-[0.4em] uppercase opacity-60 sm:opacity-0 group-hover:opacity-100 transition-all text-gray-400">
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}