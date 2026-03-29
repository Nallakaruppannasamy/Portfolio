'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { MapPin, ArrowUpRight, Calendar, Globe, Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function ExperienceSection() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    const experiences = [
        {
            company: 'Zyra Academy',
            logo: '/zyra_logo.png',
            location: 'Chennai, TN • Remote',
            duration: 'Mar 2026 - Present',
            roles: [
                {
                    title: 'Software Developer',
                    period: 'Mar 2026 - Present',
                    type: 'Full-time',
                    description: 'Providing advanced technical support and development assistance, contributing to scalable software solutions and system optimization.',
                    current: true,
                    skills: ['Technical Support', 'Software Dev', 'Problem Solving']
                }
            ]
        },
        {
            company: 'ISTE ECE (SIST) Student Chapter',
            logo: '/iste_logo.png',
            location: 'Sathyabama Institute, Chennai',
            duration: 'Mar 2025 - Present',
            roles: [
                {
                    title: 'Executive Council Member',
                    period: 'Jul 2025 - Present',
                    type: 'Hybrid',
                    description: 'Leading the technical wing, orchestrating chapter-wide initiatives, and fostering a culture of technical excellence among 200+ members.',
                    current: true,
                    skills: ['Leadership', 'Management', 'Coordination']
                },
                {
                    title: 'Technical Team Member',
                    period: 'Mar 2025 - Jul 2025',
                    type: 'On-site',
                    description: 'Coordinated technical logistics for workshops and symposiums, ensuring seamless execution of complex event workflows.',
                    current: false,
                    skills: ['Event Support', 'Tech Asst', 'Troubleshooting']
                }
            ]
        },
        {
            company: 'Sathyabama Institute of Science and Technology',
            logo: '/sist_logo.jpeg',
            location: 'Chennai, TN',
            duration: 'Aug 2024 - Present',
            roles: [
                {
                    title: 'Class Representative',
                    period: 'Aug 2024 - Present',
                    type: 'Leadership Role',
                    description: 'Acting as the primary liaison between faculty and students, managing internal communications and peer-leadership responsibilities.',
                    current: true,
                    skills: ['Leadership', 'Communication', 'Organization']
                }
            ]
        }
    ];

    return (
        <section id="experience" ref={ref} className="relative min-h-screen py-32 px-6 md:px-16 bg-[#050505] overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    className="mb-28"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white italic uppercase">
                        Experience
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="h-0.5 w-24 bg-cyan-500 shadow-[0_0_15px_#06b6d4]" />
                        <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.5em]">{`> init.career_path()`}</p>
                    </div>
                </motion.div>

                <div className="space-y-30">
                    {experiences.map((exp, expIndex) => (
                        <motion.div
                            key={expIndex}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: expIndex * 0.2, duration: 0.8 }}
                            className="relative group"
                        >
                            {/* Organization Header */}
                            <div className="flex flex-col md:flex-row gap-10 items-start md:items-center mb-16">
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: -2 }}
                                    className="relative w-20 h-40 md:w-20 md:h-20 shrink-0 rounded-4xl overflow-hidden bg-white/5 border border-white/10 p-4 backdrop-blur-2xl group-hover:border-cyan-500/50 transition-all duration-700 shadow-2xl flex items-center justify-center"
                                >
                                    <Image
                                        src={exp.logo}
                                        alt={exp.company}
                                        fill
                                        className="object-contain p-3 grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </motion.div>

                                <div className="space-y-3">
                                    <h3 className="text-2xl md:text-4xl font-black text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                                        {exp.company}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-6 text-gray-400 font-mono text-[10px] md:text-xs tracking-widest uppercase">
                                        <span className="flex items-center gap-2"><MapPin size={14} className="text-cyan-500" /> {exp.location}</span>
                                        <span className="flex items-center gap-2"><Calendar size={14} /> {exp.duration}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Roles Timeline */}
                            <div className="ml-10 md:ml-14 pl-12 border-l-2 border-white/5 space-y-10 relative">
                                {exp.roles.map((role, roleIndex) => (
                                    <motion.div
                                        key={roleIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.4 + roleIndex * 0.2 }}
                                        className="relative"
                                    >
                                        {/* Timeline Node */}
                                        <div className={`absolute -left-14.75 top-2 w-5 h-5 rounded-full border-4 border-[#050505] z-10 transition-all duration-500 ${role.current
                                                ? 'bg-emerald-500 shadow-[0_0_20px_#10b981]'
                                                : 'bg-gray-700 border-white/5'
                                            }`} />

                                        <div className="glass-dark border border-white/5 p-8 md:p-8 rounded-[2.5rem] hover:border-cyan-500/20 transition-all duration-500 group/card">
                                            <div className="flex flex-col gap-3">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                                    <h4 className="text-xl md:text-2xl font-bold text-gray-100 group-hover/card:text-cyan-400 transition-colors tracking-tight">
                                                        {role.title}
                                                    </h4>
                                                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-gray-300 bg-white/5 px-4 py-2 rounded-full w-fit">
                                                        <span>{role.type}</span>
                                                        <span className="text-white/10">•</span>
                                                        <span>{role.period}</span>
                                                    </div>
                                                </div>

                                                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl font-light italic">
                                                    {`"${role.description}"`}
                                                </p>

                                                <div className="flex flex-wrap gap-3 mt-4">
                                                    {role.skills.map(skill => (
                                                        <span
                                                            key={skill}
                                                            className="px-4 py-2 text-[10px] md:text-xs font-mono font-bold bg-[#111] text-gray-400 rounded-xl border border-white/5 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                                                        >
                                                            {`#${skill.toLowerCase().replace(' ', '_')}`}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Interaction Footer */}
                {/* <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="mt-32 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full border border-white/5">
                        <Globe size={14} className="text-cyan-500 animate-spin-slow" />
                        <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.4em]">
                            Synchronizing Career Data
                        </p>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
}