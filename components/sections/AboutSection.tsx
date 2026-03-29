'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { 
  Users, 
  Trophy, 
  Code2, 
  ShieldCheck, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  ChevronRight 
} from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);

  const bentoCards = [
    {
      title: 'ISTE Executive Council',
      description: 'Leading technical initiatives and community engagement at Sathyabama University.',
      icon: <Users className="text-cyan-400" size={32} />,
      colSpan: 'md:col-span-2',
      highlight: true,
      link: '#contact'
    },
    {
      title: 'Hackforge 1.0 Finalist',
      description: 'Placed top 6 out of 180 teams in the national hackathon by Maatram Foundation.',
      icon: <Trophy className="text-purple-400" size={32} />,
      colSpan: 'md:col-span-2',
      highlight: true,
    },
    {
      title: 'Hackforge 2.0 Semi-Finalist',
      description: 'Recognized in the top 25 teams out of 200 for centralized platform development.',
      icon: <ShieldCheck className="text-green-400" size={32} />,
      colSpan: 'md:col-span-2',
    },
    {
      title: 'MERN Stack Developer',
      description: 'Developing scalable IT solutions like EZYBUY and donation portals.',
      icon: <Code2 className="text-blue-400" size={32} />,
      colSpan: 'md:col-span-2',
      link: '#projects'
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref} 
      className="relative min-h-screen py-24 px-8 md:px-16 bg-[#050505] overflow-hidden"
    >
      {/* --- SUBTLE BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        {/* Subtle Moving Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[40px_40px]" />
        
        {/* Animated Data Mist */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-150 h-150 bg-cyan-500/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        {/* --- LEFT SIDE: IDENTITY & AVATAR --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="lg:w-1/3 w-full lg:sticky lg:top-32"
        >
          {/* Feature 2: Glitch Reveal Avatar */}
          <div 
            className="relative group w-full max-w-[320px] mx-auto lg:mx-0 cursor-crosshair"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-purple-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            
            <div className="relative aspect-square w-full rounded-[2.2rem] overflow-hidden border border-white/10 glass-dark">
              <Image 
                src="/profile_img.jpg"
                alt="Nallakaruppannasamy R"
                fill
                className={`object-cover transition-all duration-700 scale-105 group-hover:scale-100 ${isHovered ? 'grayscale-0' : 'grayscale'}`}
              />
              {/* Feature 7: Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-10 bg-size-[100%_4px,3px_100%] pointer-events-none opacity-30" />
            </div>

            {/* Feature 15: Status Indicator */}
            <div className="absolute -bottom-4 -right-4 glass-dark border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 shadow-2xl">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-300">System_Online</span>
            </div>
          </div>

          <div className="mt-10 text-center lg:text-left">
            {/* Feature 3: Hacker Brackets */}
            <h2 className="text-4xl font-black text-white tracking-tighter mb-2 italic">
              <span className="text-cyan-500 font-mono not-italic mr-2">{'<'}</span>
              Who_Am_I?
              <span className="text-cyan-500 font-mono not-italic ml-2">{'>'}</span>
            </h2>
            
            {/* Feature 5: Terminal-Style Loading Description */}
            <div className="mt-6 space-y-4">
              <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                B.E. Electronics and Communication Engineering student at Sathyabama Institute of Science and Technology. I lead technical teams at ISTE 
                and build centralized MERN platforms to solve real-world organizational 
                challenges.
              </p>
              <div className="flex items-center gap-2 text-cyan-500/50 font-mono text-[10px]">
                <Terminal size={12} />
                <span>[INFO] Profile_Data_Loaded_Success</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: BENTO GRID --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="lg:w-2/3 w-full space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {bentoCards.map((card, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -5 }}
                className={`${card.colSpan} glass-dark border border-white/5 p-6 rounded-4xl hover:border-cyan-500/30 hover:glow-cyan transition-all duration-500 group relative overflow-hidden`}
              >
                {/* Feature 8: Content Parallax Shift */}
                <div className="mb-4 group-hover:scale-110 group-hover:translate-x-1 transition-transform duration-500">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{card.title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {card.description}
                </p>
                {card.link && (
                  <a href={card.link} className="absolute bottom-6 right-6 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={20} />
                  </a>
                )}
              </motion.div>
            ))}
            
            {/* Feature 12: Section Entry Logs */}
            {/* <div className="md:col-span-4 glass-dark border border-white/5 p-4 rounded-xl font-mono text-[10px] text-gray-500 space-y-1">
              <p className="text-emerald-500/70">{`> [OK] Initializing_Identity_Matrix...`}</p>
              <p>{`> [INFO] Fetching Hackforge_Records... Success`}</p>
              <p>{`> [INFO] ISTE_Council_Status: Active`}</p>
            </div> */}

            {/* Feature 18: Personalized Time Greeting Card */}
            <div className="md:col-span-4 glass-dark border border-white/5 p-8 rounded-[2.5rem] flex items-center justify-between group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Cpu size={120} />
              </div>
              <div className="relative z-10">
                <h4 className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-2">Current_Session</h4>
                <p className="text-2xl font-bold text-white">
                  Welcome back, Developer.
                </p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="relative z-10 px-6 py-3 bg-cyan-500 text-black font-bold rounded-xl text-xs tracking-tighter"
              >
                EXECUTE_RESUME_FETCH
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}