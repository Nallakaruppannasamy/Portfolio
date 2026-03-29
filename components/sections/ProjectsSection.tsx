'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, ShoppingCart, Heart, Zap, Code2 } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    name: 'EZYBUY',
    category: 'MERN E-Commerce',
    description: 'A complete full-stack ecosystem with authentication, cart management, and order processing.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    src: '/projects/ezybuy_img.png',
    color: 'from-cyan-500/20 to-blue-500/20',
    icon: <ShoppingCart className="text-cyan-400" size={32} />,
  },
  {
    name: 'Joy of Giving',
    category: 'Donation Portal',
    description: 'Centralized platform for Maatram Foundation allowing monetary donations via Stripe/Razorpay for student needs.',
    tech: ['Next.js', 'Stripe', 'Tailwind', 'Node.js'],
    src: '/projects/chat_app_img.png',
    color: 'from-rose-500/20 to-purple-500/20',
    icon: <Heart className="text-rose-500" size={32} />,
  },
  {
    name: 'Hackforge',
    category: 'Hackathon Management',
    description: 'Multi-portal system for admins, mentors, and students to manage large-scale technical events.',
    tech: ['React', 'Turborepo', 'PostgreSQL', 'pnpm'],
    src: '/projects/portfolio_img.png',
    color: 'from-yellow-500/20 to-orange-500/20',
    icon: <Zap className="text-yellow-400" size={32} />,
  },
  // {
  //   name: 'Smart Waste Segregator',
  //   category: 'IoT & Embedded Systems',
  //   description: 'Automated waste management system using ESP32 and Arduino for real-time segregation.',
  //   tech: ['C++', 'Arduino', 'ESP32', 'IoT'],
  //   src: '/projects/ezybuy_img.png',
  //   color: 'from-emerald-500/20 to-cyan-500/20',
  //   icon: <Code2 className="text-emerald-400" size={32} />,
  // },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-[#050505] py-15 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Step 1: Heading is shown first */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            {/* <span className="text-cyan-500 font-mono text-xs uppercase tracking-[0.6em] mb-6">
              {`> exec.view_portfolio()`}
            </span> */}
            <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-none">
              FEATURED<br /><span className="bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">PROJECTS</span>
            </h2>
            <div className="h-0.5 w-24 bg-cyan-500 mt-10 shadow-[0_0_15px_#06b6d4]" />
          </motion.div>
        </div>

        {/* Step 2: Projects appear one by one stacking from bottom to up */}
        <div className="space-y-[10vh]"> {/* Spacing between starts of cards */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="sticky top-[15vh] mb-[15vh]" // This creates the "stacking" effect
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative w-full min-h-[60vh] rounded-[3.5rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl group`}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-700`} />

                <div className="flex flex-col lg:flex-row h-full">
                  {/* Text Content */}
                  <div className="flex-1 p-10 md:p-16 flex flex-col justify-between relative z-10">
                    <div>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                          {project.icon}
                        </div>
                        <div>
                          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Project 0{index + 1}</span>
                          <h3 className="text-3xl md:text-4xl font-black text-white italic tracking-tighter uppercase">
                            {project.name}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-xl">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-10">
                        {project.tech.map((t) => (
                          <span key={t} className="px-4 py-2 glass border border-white/5 rounded-xl text-xs font-bold text-gray-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-cyan-500 transition-all text-xs tracking-widest uppercase">
                        <ExternalLink size={16} /> Live Demo
                      </button>
                      <button className="flex items-center gap-2 px-8 py-4 glass border border-white/10 text-white font-black rounded-2xl hover:bg-white/5 transition-all text-xs tracking-widest uppercase">
                        <Github size={16} /> Code
                      </button>
                    </div>
                  </div>

                  {/* Project Image Area */}
                  <div className="flex-1 relative min-h-75 min-w-150 lg:min-h-full overflow-hidden border-l border-white/5">
                    <Image
                      src={project.src}
                      alt={project.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a] to-transparent lg:block hidden" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* System Interaction Footer */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-32 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 glass rounded-full border border-white/5">
            <Terminal className="text-cyan-500 animate-pulse" size={20} />
            <p className="text-xs font-mono text-gray-500 uppercase tracking-[0.5em]">
              All project modules loaded successfully
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}