'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Shield, Zap, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We push boundaries to make AI feel less like a tool and more like an operational extension.',
    color: '#7C3AED',
  },
  {
    icon: Shield,
    title: 'Privacy by Design',
    description: 'Your voice commands, keystrokes, and screens stay on your machine. Zero cloud dependency.',
    color: '#f43f5e',
  },
  {
    icon: Users,
    title: 'Built for Efficiency',
    description: 'Bypassing standard slow paths, designed directly for engineers and power users.',
    color: '#3B82F6',
  },
  {
    icon: Zap,
    title: 'Sub-Second Latency',
    description: 'Direct live WebSocket audio streaming triggers immediate, split-second keyboard inputs.',
    color: '#10B981',
  },
];

const techStack = [
  { name: 'Gemini Flash', category: 'AI Engine', desc: 'Core reasoning and multimodal screen understanding' },
  { name: 'Python Core', category: 'Backend Engine', desc: 'Local system execution, processes, and tools framework' },
  { name: 'pyautogui', category: 'OS Automation', desc: 'Sub-millisecond keyboard and cursor movement injection' },
  { name: 'Whisper API', category: 'Voice Array', desc: 'High-speed audio-to-intent stream decoding' },
  { name: 'Next.js 14', category: 'Web App', desc: 'React app with server-side generation features' },
  { name: 'Tailwind CSS', category: 'Design System', desc: 'Utility tokens powering modern premium animations' },
  { name: 'PyInstaller', category: 'Packaging', desc: 'Lightweight desktop executable compiler under 120MB' },
  { name: 'SQLite 3', category: 'Local Memory', desc: 'Local vector context database keeping system private' },
];

export default function AboutPage() {
  return (
    <div className="relative bg-[#050505] min-h-screen text-white pt-36 pb-20 px-6 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12)_0%,_transparent_60%)] pointer-events-none" />

      {/* Hero Header */}
      <section className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#a78bfa] uppercase">
            about the project
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
            The Vision Behind <span className="text-[#a78bfa]" style={{ filter: 'drop-shadow(0 0 15px rgba(124,58,237,0.4))' }}>VYRON AI</span>
          </h1>
          <p className="text-zinc-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Built by a solo developer on a mission to bypass standard chat limitations and make desktop computers truly autonomous.
          </p>
        </motion.div>
      </section>

      {/* Solo Creator Section */}
      <section className="max-w-4xl mx-auto mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-12 border border-zinc-800 bg-[#09090b]/80 backdrop-blur-xl relative overflow-hidden shadow-2xl"
        >
          {/* Internal soft violet corner light */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.1)_0%,_transparent_75%)] pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Avatar block */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center text-white text-3xl font-black shrink-0 shadow-lg shadow-[#7C3AED]/20">
              K
            </div>

            <div className="space-y-6 text-center md:text-left">
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-center md:justify-start gap-3">
                  <h2 className="text-2xl font-black text-white">Khushal</h2>
                  <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#a78bfa] uppercase w-max mx-auto sm:mx-0">
                    Solo Developer
                  </span>
                </div>
                <p className="text-zinc-400 text-sm font-semibold">Creator & Lead Architect</p>
              </div>

              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
                VYRON AI is engineered from the ground up by Khushal. Dissatisfied with standard &quot;passive chatbots&quot;
                that could only answer questions within a browser tab, Khushal set out to construct a robust operational
                bridge. The result is VYRON — a powerful, voice-activated desktop assistant executing commands
                locally with zero friction.
              </p>

              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
                VYRON stands for <span className="text-[#a78bfa] font-bold">Visionary Reasoning Operational Neural-Network</span>.
                It allows you to manage active directories, search local files, spin up code snippets, browse websites,
                and toggle system resources through clean voice inputs.
              </p>


            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission details */}
      <section className="max-w-4xl mx-auto mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-12 border border-[#7C3AED]/15 bg-[#050505]/40 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center border border-[#7C3AED]/20">
              <Target className="w-5 h-5 text-[#a78bfa]" />
            </div>
            <h2 className="text-2xl font-black text-white">Our Mission</h2>
          </div>
          <p className="text-zinc-500 text-lg leading-relaxed mb-6">
            Computers should truly obey human intent. Switch directories, write files, compile codes, and research websites hands-free.
          </p>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
            By avoiding complicated cloud pipelines and processing keys completely locally, we guarantee maximum privacy. No mouse dragging, no keyboard shortcut tracking — speak once, done.
          </p>
        </motion.div>
      </section>

      {/* Core Values grid */}
      <section className="max-w-6xl mx-auto mb-32 relative z-10">
        <h2 className="text-3xl font-black text-white text-center mb-16">
          Core Operating <span className="text-[#a78bfa]">Values</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6 border border-zinc-800 bg-[#09090b] text-center space-y-4 hover:border-[#7C3AED]/40 hover:shadow-[0_0_25px_rgba(124,58,237,0.1)] transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto"
                  style={{ backgroundColor: `${v.color}15`, border: `1px solid ${v.color}25` }}
                >
                  <Icon className="w-5 h-5" style={{ color: v.color }} />
                </div>
                <h3 className="font-black text-white text-lg tracking-tight">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bleeding Edge Tech Stack list */}
      <section className="max-w-5xl mx-auto mb-32 relative z-10">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl font-black text-white">
            Built With the <span className="text-[#a78bfa]">Best</span>
          </h2>
          <p className="text-zinc-500 text-sm">A highly performant technology foundation powering the agent core.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-xl p-5 border border-zinc-800 bg-[#09090b] hover:border-[#7C3AED]/30 transition-colors"
            >
              <span className="text-[9px] font-mono font-bold tracking-widest text-[#a78bfa] uppercase mb-1.5 block">
                {tech.category}
              </span>
              <h4 className="font-bold text-white text-base mb-1">{tech.name}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="max-w-3xl mx-auto text-center relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 border border-[#7C3AED]/25 bg-gradient-to-b from-[#7C3AED]/10 to-transparent space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Ready to Try <span className="text-[#a78bfa]">VYRON AI</span>?
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            Download the desktop software locally and experience autonomous desktop control first-hand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/download"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
