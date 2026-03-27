'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

export default function EducationSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const education = [
    {
      degree: 'B.E. Computer Science',
      period: '2024 - Present',
      institution: 'Engineering College',
      description: 'Currently pursuing Bachelor of Engineering with focus on full-stack development',
    },
    {
      degree: 'Higher Secondary Education',
      period: '2022 - 2024',
      institution: 'Secondary School',
      description: 'Completed higher secondary education with distinction',
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className="relative min-h-screen py-24 px-8 md:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

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
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-xl">Academic Timeline</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 origin-top"
            style={{ background: 'linear-gradient(to bottom, rgba(34, 211, 238, 0.8), rgba(168, 85, 247, 0.8), rgba(34, 211, 238, 0.8))' }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-dark p-8 rounded-2xl"
                  >
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">{item.degree}</h3>
                    <p className="text-purple-400 font-semibold mb-2">{item.period}</p>
                    <p className="text-gray-300 mb-3">{item.institution}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex justify-center items-start pt-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.3 + 0.4 }}
                    className="relative"
                  >
                    <div className="w-6 h-6 bg-cyan-400 rounded-full glow-cyan" />
                    <div className="absolute inset-0 w-6 h-6 bg-cyan-400 rounded-full animate-pulse" />
                  </motion.div>
                </div>

                {/* Mobile dot */}
                <div className="md:hidden flex justify-center items-start pt-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.3 + 0.4 }}
                    className="w-4 h-4 bg-cyan-400 rounded-full glow-cyan"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
