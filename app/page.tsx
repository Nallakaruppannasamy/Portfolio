'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EducationSection from '@/components/sections/EducationSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <main className="relative w-full overflow-hidden bg-background text-foreground">
      <Navigation isDark={isDark} />
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
