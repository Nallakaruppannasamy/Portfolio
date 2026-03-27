'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-between pt-24 px-8 md:px-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute -left-32 -top-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -right-32 -bottom-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side - Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div variants={itemVariants}>
            <p className="text-cyan-400 font-semibold text-lg">Welcome to my portfolio</p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-balance leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nallakaruppannasamy R
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-xl leading-relaxed"
          >
            Full Stack Developer | Problem Solver | Building beautiful web experiences with modern technologies
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg hover:glow-cyan transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-dark text-cyan-400 font-semibold rounded-lg hover:text-white transition-colors duration-300"
            >
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right side - 3D Animation Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-96 md:h-full flex items-center justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Rotating cube effect */}
            <motion.div
              animate={{ rotateX: 360, rotateY: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-full h-full"
            >
              <div className="glass-dark rounded-2xl w-full h-full flex items-center justify-center glow-cyan-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-cyan-400 font-semibold">3D Animation</p>
                  <p className="text-gray-400 text-sm mt-2">Interactive Element</p>
                </div>
              </div>
            </motion.div>

            {/* Orbiting elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-400 rounded-full glow-cyan" />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-purple-500 rounded-full glow-cyan" />
              <div className="absolute top-1/2 right-0 w-5 h-5 bg-blue-400 rounded-full glow-cyan" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-6 h-6 text-cyan-400" />
      </motion.div>
    </section>
  );
}
