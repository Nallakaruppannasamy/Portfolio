'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function ThemeToggle({ isDark, setIsDark }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-8 right-8 z-40 p-4 glass-dark rounded-full hover:glow-cyan transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-cyan-400" />
      ) : (
        <Moon className="w-6 h-6 text-cyan-400" />
      )}
    </motion.button>
  );
}
