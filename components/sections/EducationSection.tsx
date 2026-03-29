'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { 
  GraduationCap, School, Star, MapPin, Terminal, 
  ShieldCheck, Zap, Activity, Cpu 
} from 'lucide-react';
import Image from 'next/image';

export default function EducationSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  // Feature 3 & 5: Scroll-driven timeline progress with Neon Glow Trail
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scaleY = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });
  
  // Feature 7: Dynamic Scroll Counter (Transforms scroll position to Year/Status)
  // const statusText = useTransform(scrollYProgress, 
  //   [0, 0.5, 1], 
  //   ["INITIATING_SESSION", "CORE_ACADEMICS", "SYSTEMS_DEPLOYED"]
  // );

  const education = [
    {
      degree: 'B.E. Electronics and Communication Engineering',
      period: '2024 - 2028',
      institution: 'Sathyabama Institute of Science and Technology',
      location: 'Chennai, India',
      description: 'Focusing on scalable IT architectures, full-stack engineering, and embedded systems.',
      icon: <GraduationCap size={24} />,
      courses: ['Data Structures', 'Web Technology', 'Database Systems', 'Microprocessors'],
      isScholar: true,
      cgpa: '8.59', // Added CGPA Readout
      semester: '04 / 08', // Added Semester Readout
      status: 'Current',
      isISTE: true, // Feature 10: ISTE Leadership
      logo: '/icons/sathyabama-logo.svg' // Feature 9: Dimmed Watermark
    },
    {
      degree: 'Higher Secondary Education',
      period: '2022 - 2024',
      institution: 'Bhuvana Krishna Matriculation Higher Secondary School',
      location: 'Chennai, India',
      description: 'Specialized in Computer Science and Mathematics with academic distinction.',
      icon: <School size={24} />,
      courses: ['C++', 'Python', 'Mathematics', 'Physics'],
      isScholar: false,
      cgpa: '91%',
      status: 'Completed'
    },
  ];

  return (
    <section id="education" ref={ref} className="relative min-h-screen py-32 px-8 md:px-16 bg-[#050505] overflow-hidden">
      
      {/* Feature 7: Side Progress Counter */}
      {/* <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden 2xl:flex flex-col items-end gap-2 mix-blend-difference">
        <motion.span className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase">
          {statusText}
        </motion.span>
        <div className="h-[1px] w-12 bg-cyan-500/50" />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} className="mb-24">
          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic text-white">
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Academic_Path
            </span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-24 bg-cyan-500 shadow-[0_0_15px_#06b6d4]" />
            <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.5em]">{`> loading.educational_database()`}</p>
          </div>
        </motion.div>

        <div className="relative">
          {/* Feature 1 & 3: Neon "Power Line" Trail */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-white/5" />
          <motion.div
            style={{ scaleY }}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-cyan-500 via-blue-500 to-transparent origin-top z-10 shadow-[0_0_20px_rgba(6,182,212,0.8)]"
          />

          <div className="space-y-32">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Education Card */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative glass-dark p-10 rounded-[3rem] border border-white/5 group overflow-hidden bg-[#080808]"
                  >
                    {/* Feature 9: Dimmed University Logo Watermark */}
                    {item.logo && (
                      <div className="absolute top-10 right-10 opacity-[0.03] grayscale group-hover:opacity-[0.07] transition-opacity">
                         <Cpu size={150} /> {/* Replace with <img src={item.logo} /> if you have the file */}
                      </div>
                    )}

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-8">
                        <div className="p-4 bg-white/5 rounded-2xl text-cyan-400 border border-white/10 group-hover:glow-cyan transition-all">
                          {item.icon}
                        </div>
                        
                        {/* Feature 11: Current Module / Status Indicator */}
                        <div className="flex flex-col items-end gap-2">
                           <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[9px] font-mono uppercase tracking-widest border border-emerald-500/20">
                            {item.status}
                           </span>
                           {item.semester && (
                             <span className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-tighter">
                               Progress: {item.semester}
                             </span>
                           )}
                        </div>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase italic mb-2">
                        {item.degree}
                      </h3>
                      <p className="text-cyan-500 font-mono text-xs uppercase tracking-[0.3em] mb-6">{item.institution}</p>

                      <div className="flex items-center gap-6 mb-8 text-gray-500 text-[10px] font-mono uppercase tracking-widest">
                        <span className="flex items-center gap-2"><MapPin size={12} /> {item.location}</span>
                        <span className="flex items-center gap-2"><Activity size={12} /> {item.period}</span>
                      </div>

                      {/* Added: CGPA System Readout */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                         <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                            <p className="text-[8px] font-mono text-gray-600 uppercase mb-1">Score_Metric</p>
                            <p className="text-xl font-black text-white">{item.cgpa}</p>
                         </div>
                         {item.isISTE && (
                           <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/20 flex items-center gap-3">
                              <ShieldCheck className="text-purple-400" size={20} />
                              <div>
                                <p className="text-[8px] font-mono text-purple-400 uppercase">ISTE_Leadership</p>
                                <p className="text-[10px] font-bold text-white uppercase">Executive Council</p>
                              </div>
                           </div>
                         )}
                      </div>

                      <p className="text-gray-400 leading-relaxed mb-8 font-light italic">
                        {`"${item.description}"`}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {item.courses.map((course) => (
                          <span key={course} className="px-3 py-1 glass border border-white/5 rounded-lg text-[9px] font-bold text-gray-500 hover:text-cyan-400 transition-colors uppercase">
                            {course}
                          </span>
                        ))}
                      </div>

                      {item.isScholar && (
                        <div className="mt-8 pt-6 border-t border-white/5">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest glow-cyan">
                            <Star size={12} className="fill-cyan-400" /> Maatram Foundation Scholar
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Feature 1 & 2: Magnetic Hexagonal Node */}
                <div className="hidden md:flex justify-center items-center w-24 h-24 relative z-20">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-8 h-8 bg-cyan-500 rotate-45 shadow-[0_0_25px_rgba(6,182,212,0.8)] relative z-10"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  />
                  <div className="absolute inset-0 w-full h-full border border-cyan-500/10 rounded-full animate-ping" />
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Summary Module */}
        {/* <div className="mt-32 flex justify-center">
            <div className="px-10 py-5 glass rounded-[2rem] border border-white/5 flex items-center gap-6">
                <Terminal className="text-cyan-500" size={20} />
                <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">Total_Educational_Uptime</span>
                    <span className="text-white font-bold">16+ Years of Academic Integration</span>
                </div>
            </div>
        </div> */}
      </div>
    </section>
  );
}