'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ShoppingCart, Heart, Zap } from 'lucide-react';
import Image from 'next/image';
import ScrollStack, { ScrollStackItem } from '@/components/ui/ScrollStack';

const projects = [
  {
    name: 'EZYBUY',
    category: 'MERN E-Commerce',
    description: 'A complete full-stack ecosystem with authentication, cart management, and order processing.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    src: '/projects/ezybuy_img.png',
    color: 'from-cyan-500/30 to-blue-600/10',
    glowColor: 'rgba(6, 182, 212, 0.15)',
    icon: <ShoppingCart className="text-cyan-400" size={28} />,
  },
  {
    name: 'Joy of Giving',
    category: 'Donation Portal',
    description: 'Centralized platform for Maatram Foundation allowing monetary donations via Stripe/Razorpay for student needs.',
    tech: ['Next.js', 'Stripe', 'Tailwind', 'Node.js'],
    src: '/projects/chat_app_img.png',
    color: 'from-rose-500/30 to-purple-600/10',
    glowColor: 'rgba(244, 63, 94, 0.15)',
    icon: <Heart className="text-rose-400" size={28} />,
  },
  {
    name: 'Hackforge',
    category: 'Hackathon Management',
    description: 'Multi-portal system for admins, mentors, and students to manage large-scale technical events.',
    tech: ['React', 'Turborepo', 'PostgreSQL', 'pnpm'],
    src: '/projects/portfolio_img.png',
    color: 'from-yellow-500/30 to-orange-600/10',
    glowColor: 'rgba(234, 179, 8, 0.15)',
    icon: <Zap className="text-yellow-400" size={28} />,
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-[#050505] py-10 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Structural Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-200 bg-cyan-500/2 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-150 h-150 bg-purple-500/2 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Moving Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="max-w-7xl  relative z-10">

        {/* Step 1: Heading Area */}
        <div className="mb-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-2 px-3 py-1 bg-white/3 border border-white/8 rounded-full mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-gray-400">Production Builds</span>
            </div>
            
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-none">
              FEATURED<br />
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent filter drop-shadow-[0_2px_20px_rgba(6,182,212,0.15)]">
                PROJECTS
              </span>
            </h2>
            <div className="h-px w-32 bg-linear-to-r from-transparent via-cyan-500 to-transparent mt-12 opacity-60" />
          </motion.div>
        </div>

        {/* Step 2: Realistic ScrollStack Layer */}
        <ScrollStack 
          useWindowScroll={true}
          baseScale={0.86}       // Subtle initial scaling for depth hierarchy
          itemScale={0.04}       // Clear tactile differentiation when layered
          itemDistance={160}     // Generous vertical breathing space before unpinning
          stackPosition="14%"    // Locks neat and close to top viewport edge
          scaleEndPosition="6%"  // Finished compaction limit
          blurAmount={2.5}       // Emphasizes perspective focal depth
          rotationAmount={-0.5}   // Adds organic structural alignment variant
        >
          {projects.map((project, index) => (
            <ScrollStackItem 
              key={index}
              itemClassName="!h-auto !my-0 !p-0 bg-transparent rounded-[2.5rem] !shadow-none perspective-2000"
            >
              {/* Tactical Structural Container */}
              <div 
                className="relative w-full rounded-[2.5rem] border border-white/[0.07] bg-[#09090d]/90 backdrop-blur-2xl transition-all duration-500 group overflow-hidden"
                style={{
                  boxShadow: `0 30px 100px -20px rgba(0, 0, 0, 0.7), 0 0 80px -10px ${project.glowColor}`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Micro-Grid Tech Inner Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff/[0.01]_1px,transparent_1px),linear-gradient(to_bottom,#ffffff/[0.01]_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none rounded-[2.5rem]" />

                {/* Dynamic Vector Gradient Glow */}
                <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-[0.12] group-hover:opacity-[0.22] transition-opacity duration-700 pointer-events-none`} />

                <div className="flex flex-col lg:flex-row min-h-[55vh] lg:min-h-[60vh]">
                  
                  {/* Left Column: Interactive Content Fields */}
                  <div className="flex-1 p-8 sm:p-12 md:p-16 flex flex-col justify-between relative z-10">
                    <div>
                      {/* Badge / Identity Matrix */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className="p-3.5 bg-white/3 border border-white/8 rounded-2xl shadow-inner text-gray-300 backdrop-blur-md group-hover:border-white/20 group-hover:text-white transition-all duration-500">
                          {project.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-cyan-500 tracking-widest uppercase">System Config 0{index + 1}</span>
                            <span className="text-white/20 text-xs">•</span>
                            <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase">{project.category}</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mt-1 uppercase group-hover:text-cyan-400 transition-colors duration-300">
                            {project.name}
                          </h3>
                        </div>
                      </div>

                      {/* Description Context block */}
                      <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl">
                        {project.description}
                      </p>

                      {/* Architecture Dependency Chips */}
                      <div className="flex flex-wrap gap-2.5 mb-12">
                        {project.tech.map((t) => (
                          <span 
                            key={t} 
                            className="px-3.5 py-1.5 bg-white/2 border border-white/6 rounded-xl text-xs font-mono font-medium text-gray-400 shadow-sm hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Operational Trigger Actions */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-white/4">
                      <button className="flex items-center gap-2.5 px-7 py-3.5 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs tracking-wider uppercase shadow-xl cursor-pointer">
                        <ExternalLink size={15} /> Live Matrix
                      </button>
                      <button className="flex items-center gap-2.5 px-7 py-3.5 bg-white/2 border border-white/8 text-gray-300 font-bold rounded-xl hover:bg-white/[0.06] hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all text-xs tracking-wider uppercase backdrop-blur-md cursor-pointer">
                        <Github size={15} /> Source Code
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Parallax Image Pipeline */}
                  <div className="flex-1 relative min-h-64 lg:min-h-auto overflow-hidden lg:border-l border-white/6 bg-[#050508]">
                    <div className="absolute inset-0 z-10 bg-linear-to-t lg:bg-linear-to-r from-[#09090d] via-[#09090d]/40 to-transparent pointer-events-none mix-blend-multiply" />
                    
                    {/* Shadow overlay block activated exclusively on scroll stacking actions */}
                    <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-10 bg-black pointer-events-none transition-opacity duration-500" />

                    <Image
                      src={project.src}
                      alt={project.name}
                      fill
                      sizes="(max-w: 1024px) 100vw, 50vw"
                      className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-[1.04] transition-all duration-700 ease-out"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
}