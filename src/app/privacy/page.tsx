'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Database, Lock, Globe, Trash2, Mail } from 'lucide-react';

const sections = [
  {
    icon: Eye,
    title: '1. Information Processing',
    content: `VYRON AI processes operational intent locally on your machine. We record:
    
    • Key Settings: Saved locally inside secure database structures.
    • Diagnostic Logs: Performance diagnostics and system call error traces for diagnostic debugging.
    • Device Parameters: Operating system parameters to ensure system automation shortcuts function properly.
    
    We do NOT record:
    • Voice files or acoustic recordings (processed in-stream and discarded)
    • Key logs or system input text histories
    • Local database content or active workspace code directories`,
  },
  {
    icon: Database,
    title: '2. Local-First Execution',
    content: `All operational tasks (active directory commands, web crawls, keyboard injections, system process triggers) are executed locally under the client process.
    
    We NEVER:
    • Telemetrize your personal code files or voice inputs to remote clouds.
    • Sell or distribute your local diagnostics to advertisements.
    • Access your folders outside the scope of voice or text triggers.`,
  },
  {
    icon: Lock,
    title: '3. Handshake Security',
    content: `Local biometric Face ID templates are encrypted under system cryptography keys. All local parameters, diagnostics, and vector histories are stored on-device and isolated from browser contexts using strict sandboxing.`,
  },
  {
    icon: Globe,
    title: '4. Third-Party Web Links',
    content: `When executing tasks, VYRON forwards queries to Google Gemini or Groq APIs. These interactions are processed on the fly and are governed by their respective API privacy frameworks.`,
  }
];

export default function PrivacyPage() {
  return (
    <div className="relative bg-[#050505] min-h-screen text-white pt-36 pb-20 px-6 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12)_0%,_transparent_60%)] pointer-events-none" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#a78bfa] uppercase">
            privacy framework
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
            Privacy <span className="text-[#a78bfa]" style={{ filter: 'drop-shadow(0 0 15px rgba(124,58,237,0.4))' }}>Policy</span>
          </h1>
          <p className="text-zinc-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Your machine. Your data. Here is exactly how VYRON safeguards your local privacy.
          </p>
          <p className="text-zinc-650 text-xs font-mono select-none pt-2">Last updated: May 24, 2026</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto space-y-6 mb-20 relative z-10">
        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-3xl p-6 sm:p-8 border border-zinc-800 bg-[#09090b]/80 backdrop-blur-md space-y-4 hover:border-[#7C3AED]/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center border border-[#7C3AED]/20">
                  <Icon className="w-5 h-5 text-[#a78bfa]" />
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight leading-none">{section.title}</h2>
              </div>
              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </motion.div>
          );
        })}
      </section>

      {/* Contact */}
      <section className="max-w-xl mx-auto text-center relative z-10">
        <div className="rounded-3xl p-8 border border-zinc-850 bg-[#09090b]/60 backdrop-blur-md space-y-4">
          <Mail className="w-8 h-8 text-[#a78bfa] mx-auto" />
          <h3 className="text-lg font-bold text-white tracking-tight">Questions About Privacy?</h3>
          <p className="text-zinc-500 text-sm">Our developer support is here to clarify local agent security pipelines.</p>
          <a
            href="mailto:smartkhushal2007@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest transition-colors"
          >
            smartkhushal2007@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
