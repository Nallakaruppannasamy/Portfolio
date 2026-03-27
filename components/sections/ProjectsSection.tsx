'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const projects = [
    {
      name: 'EZYBUY',
      category: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, cart management, and secure checkout. Built with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      icon: '🛍️',
      link: '#',
    },
    {
      name: 'MsgHub',
      category: 'Real-time Chat Application',
      description: 'A real-time messaging application with user authentication, group chats, and instant notifications. Built with Socket.io and Express.',
      technologies: ['React', 'Socket.io', 'Express', 'Firebase', 'Redux'],
      icon: '💬',
      link: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen py-24 px-8 md:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-xl">Showcasing my best work</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative glass-dark rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:glow-cyan-lg"
            >
              {/* Card content */}
              <div className="p-8 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{project.icon}</div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="flex gap-3"
                  >
                    <button className="p-2 glass-dark rounded-lg text-cyan-400 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="p-2 glass-dark rounded-lg text-cyan-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-cyan-400 font-semibold text-sm mb-4">{project.category}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.2 + techIndex * 0.05 }}
                      className="px-4 py-2 glass-dark rounded-full text-xs text-cyan-400 font-semibold border border-cyan-500/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover effect overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
