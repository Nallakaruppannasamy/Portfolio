'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

export default function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
      icon: '🎨',
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase'],
      icon: '⚙️',
    },
    {
      name: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'VS Code'],
      icon: '🛠️',
    },
    {
      name: 'Soft Skills',
      skills: ['Leadership', 'Communication', 'Problem Solving', 'Teamwork'],
      icon: '💼',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen py-24 px-8 md:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      {/* Floating background elements */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
      />

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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-xl">Technologies I work with</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group relative perspective"
            >
              <motion.div
                whileHover={{ rotateY: 10 }}
                className="glass-dark p-8 rounded-2xl h-full transition-all duration-300 hover:glow-cyan-lg cursor-pointer"
              >
                <div className="flex flex-col h-full">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-6">{category.name}</h3>

                  {/* Skill tags with floating effect */}
                  <div className="space-y-3 flex-1">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{
                          delay: index * 0.1 + skillIndex * 0.05,
                          duration: 0.5,
                        }}
                        whileHover={{
                          x: 5,
                          scale: 1.05,
                        }}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-sm font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors"
                      >
                        ✓ {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Background glow on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional floating skill cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 glass-dark p-12 rounded-2xl text-center"
        >
          <p className="text-gray-300 mb-4">
            Always learning and exploring new technologies to enhance my skillset
          </p>
          <motion.div className="flex flex-wrap justify-center gap-3">
            {['Web3', 'AI/ML', 'DevOps', 'Mobile Dev'].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/50 rounded-full text-sm font-semibold text-cyan-400 hover:glow-cyan"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
