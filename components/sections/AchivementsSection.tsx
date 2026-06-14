'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { Award, Trophy, Calendar, Building } from 'lucide-react';
import Image from 'next/image';

const achievements = [
  {
    title: 'Star of Maatram',
    year: '2026',
    organization: 'Maatram Foundation',
    description: 'Awarded the prestigious Star of Maatram at the Sangamam event for exceptional dedication to service, leadership, and volunteering initiatives.',
    tag: 'HONOR_CORE',
    icon: <Trophy size={22} />,
    src: '/star_of_maatram.jpeg',
    accent: 'from-amber-500/20 to-orange-500/5',
    glowColor: 'rgba(245, 158, 11, 0.12)',
    borderColor: 'group-hover:border-amber-500/50',
    textGlow: 'group-hover:text-amber-400',
    nodeGlow: 'shadow-[0_0_20px_rgba(245,158,11,0.5)] border-amber-500 text-amber-400',
  },
  {
    title: 'Best Outgoing Student',
    year: '2025',
    organization: 'Bhuvana Krishna Mat.Hr.Sec. School',
    description: 'Recognized for holistic excellence across academic execution, technical leadership, and extracurricular contributions in the academic year 2023 - 2024.',
    tag: 'PRESTIGE_UNIT',
    icon: <Award size={22} />,
    src: '/best_outgoing_student.png',
    accent: 'from-cyan-500/20 to-blue-500/5',
    glowColor: 'rgba(6, 182, 212, 0.12)',
    borderColor: 'group-hover:border-cyan-500/50',
    textGlow: 'group-hover:text-cyan-400',
    nodeGlow: 'shadow-[0_0_20px_rgba(6,182,212,0.5)] border-cyan-500 text-cyan-400',
  }
];

export default function AchievementsSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section 
      id="achievements" 
      ref={ref} 
      className="relative min-h-screen py-24 px-4 sm:px-8 md:px-16 bg-[#050505] overflow-hidden selection:bg-cyan-500/30"
    >
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Subtle Structural Moving Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141416_1px,transparent_1px),linear-gradient(to_bottom,#141416_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="mb-15 text-center lg:text-left"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 tracking-tighter italic uppercase text-white">
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Milestone_Logs
            </span>
          </h2>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="h-0.5 w-24 bg-cyan-500 shadow-[0_0_15px_#06b6d4]" />
            <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.5em]">{`> history.fetch_records()`}</p>
          </div>
        </motion.div>

        {/* Timeline Core Track */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative w-full ml-0 lg:ml-0 space-y-20 before:absolute before:inset-y-0 before:left-4 lg:before:left-1/2 before:-translate-x-1/2 before:w-px before:bg-white/5"
        >
          {/* Glow-Tracing Vector Overlay */}
          <motion.div 
            className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-px bg-linear-to-b from-cyan-500 via-purple-500 to-transparent z-10"
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            style={{ filter: 'drop-shadow(0 0 8px #06b6d4)' }}
          />

          {achievements.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className={`relative w-full flex flex-col lg:flex-row items-start pl-12 lg:pl-0 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                } group`}
              >
                {/* Hexagonal Node Upgrade */}
                <div 
                  className={`absolute left-4 lg:left-1/2 top-4 lg:-translate-x-1/2 z-20 flex items-center justify-center w-9 h-9 bg-[#080808] border border-white/10 transition-all duration-500 text-gray-500 ${item.borderColor} ${item.textGlow}`}
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  }}
                >
                  <div 
                    className="absolute inset-px bg-[#050505] transition-all duration-500"
                    style={{
                      clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    }}
                  />
                  <span className="relative z-10 text-[10px] font-mono font-black">{item.year.slice(-2)}</span>
                </div>

                {/* Left-Gutter Margin Refactored Year Field for Desktop */}
                <div 
                  className={`hidden lg:block absolute top-5 w-35 font-mono font-black text-2xl text-gray-600 group-hover:text-cyan-400 transition-colors duration-500 ${
                    isEven ? 'left-1/2 translate-x-12 text-left' : 'right-1/2 -translate-x-12 text-right'
                  }`}
                >
                  {item.year}
                </div>

                {/* Alternating Layout Grid Wrapper */}
                <div className={`w-full lg:w-[46%] ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                  
                  {/* Chameleon Radial Glow Base */}
                  <div className={`absolute -inset-px bg-linear-to-r from-transparent via-white/5 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[1px] ${item.borderColor}`} />
                  
                  <div 
                    className="relative p-6 sm:p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-[#08080c]/90 backdrop-blur-3xl overflow-hidden transition-all duration-500 scale-[0.98] min-[400px]:scale-100 shadow-2xl"
                    style={{
                      boxShadow: `0 30px 100px -20px rgba(0, 0, 0, 0.8), 0 0 60px -15px ${item.glowColor}`
                    }}
                  >
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/2 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    {/* Vertically Stacked Content Tree */}
                    <div className="relative z-10 flex flex-col gap-6 w-full">
                      
                      {/* Top Context Section */}
                      <div className="space-y-4 w-full">
                        <div className="flex justify-between items-start gap-4">
                          <div className="p-3 bg-white/5 border border-white/5 rounded-2xl text-gray-400 group-hover:text-white transition-transform duration-500 shadow-xl">
                            {item.icon}
                          </div>
                          <span className="text-[9px] font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                            {item.tag}
                          </span>
                        </div>

                        <div className="space-y-1">
                          {/* Year label for mobile views */}
                          <div className="lg:hidden flex items-center gap-1.5 text-xs font-mono text-cyan-500 font-bold mb-1">
                            <Calendar size={12} />
                            <span>{item.year}</span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase group-hover:text-cyan-400 transition-colors duration-300">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                            <Building size={12} className="shrink-0" />
                            <span className="truncate text-gray-300">{item.organization}</span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-400 leading-relaxed font-light pt-1">
                          {item.description}
                        </p>
                      </div>

                      {/* Static Clean Grid Image Display */}
                      <div className="w-full aspect-video relative rounded-2xl overflow-hidden border border-white/5 bg-[#040406] group/img shadow-md group-hover:border-white/20 transition-all duration-500 mt-2">
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          className="object-cover sm:grayscale opacity-50 sm:group-hover/img:grayscale-0 group-hover/img:opacity-100 group-hover/img:scale-[1.01] transition-all duration-500 ease-out"
                          sizes="(max-w: 1024px) 100vw, 500px"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
                        <div className={`absolute inset-0 bg-linear-to-br ${item.accent} opacity-15 pointer-events-none group-hover/img:opacity-0 transition-opacity duration-500`} />
                      </div>

                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}