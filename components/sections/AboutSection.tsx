'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const bentoCards = [
    {
      title: 'Best Outgoing Student 2024',
      description: 'Recognized for exceptional performance and leadership',
      icon: '🏆',
      colSpan: 'md:col-span-2',
      highlight: true,
    },
    {
      title: 'ISTE Executive Council Member',
      description: 'Leading technical initiatives and community engagement',
      icon: '👨‍💼',
      colSpan: 'md:col-span-2',
      highlight: true,
    },
    {
      title: 'Full Stack Developer',
      description: 'React, Node.js, TypeScript, Tailwind CSS',
      icon: '💻',
      colSpan: 'md:col-span-1',
    },
    {
      title: 'Problem Solver',
      description: 'Algorithm & Data Structure Expert',
      icon: '🧠',
      colSpan: 'md:col-span-1',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
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
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-xl">Achievements & Expertise</p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg mb-12 max-w-3xl leading-relaxed"
        >
          I&apos;m a passionate full-stack developer with a keen interest in creating beautiful,
          functional web applications. With strong technical skills and leadership experience,
          I thrive in collaborative environments and continuously push the boundaries of what&apos;s possible in web development.
        </motion.p>

        {/* Bento Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {bentoCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`${card.colSpan} ${
                card.highlight ? 'glass-dark border-cyan-500/30' : 'glass-dark'
              } p-8 rounded-2xl cursor-pointer group transition-all duration-300 hover:glow-cyan`}
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${
                card.highlight ? 'text-cyan-400' : 'text-white'
              }`}>
                {card.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
