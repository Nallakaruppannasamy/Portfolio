'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { Mail, Phone, MapPin, Send, Terminal, Github, Linkedin, MessageSquare, Zap } from 'lucide-react';
import { useState, useRef } from 'react';
import { toast, Toaster } from 'sonner';

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Magnetic Button Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150 };
  const magneticX = useSpring(mouseX, springConfig);
  const magneticY = useSpring(mouseY, springConfig);

  const handleMagnetic = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const resetMagnetic = () => { mouseX.set(0); mouseY.set(0); };

  // Integrated Web3Forms Submission Logic from Previous Portfolio
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "4f505c92-93ef-4759-8698-dbe4287e5182"); // Your Web3Forms Key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Connection Established: Message Transmitted Successfully!");
        formRef.current?.reset();

        // Automatic Reload after a short delay to allow toast visibility
        setTimeout(() => {
          window.location.reload();
        }, 2000);

      } else {
        toast.error("Transmission Failed: Error in system link.");
      }
    } catch (error) {
      toast.error("Critical System Error: Submission Server Unreachable.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative min-h-screen py-32 px-8 md:px-16 bg-[#050505] overflow-hidden">
      <Toaster position="top-right" theme="dark" richColors />

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-100 h-100 bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-7xl md:text-9xl font-black text-white italic uppercase tracking-tighter mb-8 group"
            >
              Let&apos;s <span className="text-cyan-500 group-hover:animate-pulse transition-all">talk</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <p className="text-gray-400 text-xl max-w-md leading-relaxed font-light">
                I&apos;m always open to <span className="text-white font-bold">exciting opportunities</span>, meaningful collaborations, or simply a <span className="text-cyan-400 font-mono">tech-focused conversation</span>.
              </p>

              <div className="space-y-6 pt-8 border-t border-white/5">
                <a href="mailto:rnksamy007@gmail.com" className="flex items-center gap-4 group cursor-pointer w-fit">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-rose-500/20 transition-all">
                    <Mail className="text-rose-400" size={24} />
                  </div>
                  <span className="text-gray-300 font-mono text-sm group-hover:text-white transition-colors">rnksamy007@gmail.com</span>
                </a>
                <a href="tel:+916369606763" className="flex items-center gap-4 group cursor-pointer w-fit">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-cyan-500/20 transition-all">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <span className="text-gray-300 font-mono text-sm group-hover:text-white transition-colors">+91 6369606763</span>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-purple-500/20 transition-all">
                    <MapPin className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Chennai, India</p>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Sathyabama University Campus</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-10">
                {[
                  { Icon: Github, href: "https://github.com/Nallakaruppannasamy" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/nallakaruppannasamyr/" },
                  { Icon: MessageSquare, href: "#" }
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target='_blank'
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="p-4 glass rounded-2xl border border-white/5 text-gray-500 hover:text-cyan-400 transition-colors"
                  >
                    <item.Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="relative glass-dark p-10 md:p-14 rounded-[4rem] border border-white/5 overflow-hidden group"
          >
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-10 space-y-10">
              <div className="flex items-center gap-3 mb-8">
                <Terminal size={20} className="text-cyan-500" />
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em]">system.input_stream()</span>
              </div>

              <form ref={formRef} onSubmit={onSubmit} className="space-y-12">
                <div className="space-y-4">
                  <label className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 ml-2">Full Name:</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-white/3 border border-white/5 p-6 rounded-2xl text-white focus:outline-none focus:border-cyan-500/50 transition-all font-light"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 ml-2">Email Address:</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full bg-white/3 border border-white/5 p-6 rounded-2xl text-white focus:outline-none focus:border-cyan-500/50 transition-all font-light"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 ml-2">Payload Data (Message):</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, idea, or question..."
                    className="w-full bg-white/3 border border-white/5 p-6 rounded-2xl text-white focus:outline-none focus:border-cyan-500/50 transition-all font-light resize-none"
                  />
                </div>

                <motion.div
                  onMouseMove={handleMagnetic}
                  onMouseLeave={resetMagnetic}
                  style={{ x: magneticX, y: magneticY }}
                  className="relative w-fit"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative px-12 py-5 bg-linear-to-r from-[#ff819c] to-[#7fffd4] rounded-full font-black text-black uppercase text-xs tracking-widest overflow-hidden hover:scale-105 active:scale-95 transition-all group/btn disabled:opacity-50 disabled:grayscale"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? 'Transmitting...' : 'Submit Payload'}
                      <Send size={16} />
                    </span>
                  </button>
                  <div className="absolute inset-0 blur-2xl bg-cyan-500/20 group-hover/btn:bg-cyan-500/40 transition-colors" />
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer Info */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-gray-600 font-mono text-[10px] uppercase tracking-[0.4em]">© 2026 Nallakaruppan. All systems optimized.</p>
            <p className="text-gray-800 text-[8px] mt-2 uppercase tracking-[0.2em]">Crafted at SIST with Next.js</p>
          </div>

          <div className="flex items-center gap-6">
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex items-center gap-2 text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest"
            >
              <Zap size={12} className="fill-cyan-500" />
              <span>Status: Hire_Protocol_Active</span>
            </motion.div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-6 py-2 glass rounded-full text-[9px] font-mono text-gray-500 hover:text-white transition-all uppercase tracking-widest border border-white/5"
            >
              {`> sudo_reboot`}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}