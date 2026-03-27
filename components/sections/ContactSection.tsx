'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:hello@example.com', color: 'text-red-400' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'text-blue-400' },
    { icon: Github, label: 'GitHub', href: '#', color: 'text-gray-300' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'text-cyan-400' },
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
      id="contact"
      ref={ref}
      className="relative min-h-screen py-24 px-8 md:px-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none" />

      {/* Animated background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let&apos;s connect and create something amazing together!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Message Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="glass-dark p-8 rounded-2xl group hover:glow-cyan-lg transition-all duration-300"
          >
            <div className="text-5xl mb-4">💌</div>
            <h3 className="text-2xl font-bold text-white mb-3">Send Me an Email</h3>
            <p className="text-gray-400 mb-6">
              Drop me a message with your ideas, questions, or collaboration opportunities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg hover:glow-cyan transition-all duration-300"
            >
              Send Email
            </motion.button>
          </motion.div>

          {/* Connect Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="glass-dark p-8 rounded-2xl group hover:glow-cyan-lg transition-all duration-300"
          >
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-white mb-3">Connect With Me</h3>
            <p className="text-gray-400 mb-6">
              Find me on social media and stay updated with my latest projects and insights.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.icon === Mail ? 'mailto:hello@example.com' : link.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 glass-dark rounded-lg ${link.color} hover:glow-cyan transition-all duration-300`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.05 }}
                className="glass-dark p-8 rounded-2xl text-center group hover:glow-cyan transition-all duration-300"
              >
                <Icon className={`w-10 h-10 mx-auto mb-3 ${link.color} group-hover:scale-110 transition-transform`} />
                <p className="text-sm font-semibold text-gray-300">{link.label}</p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center glass-dark p-12 rounded-2xl mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Let&apos;s Build Something Extraordinary</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking for a developer to join your team or want to collaborate on an exciting project,
            I&apos;m always open to new opportunities and challenges.
          </p>
          <motion.button
            whileHover={{ scale: 1.08, glow: true }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-lg rounded-lg hover:glow-cyan-lg transition-all duration-300"
          >
            Start a Conversation
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center border-t border-cyan-500/20 pt-8"
        >
          <p className="text-gray-500 text-sm">
            © 2024 Nallakaruppannasamy R. All rights reserved. Built with React, Framer Motion & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
