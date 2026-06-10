'use client';

import { motion } from 'framer-motion';
import { Shield, BookOpen, AlertCircle, Scale, Mail } from 'lucide-react';

const sections = [
  {
    icon: BookOpen,
    title: '1. Acceptable Use',
    content: `VYRON AI provides automated system automation tools. By running the executable:
    
    • You accept absolute responsibility for all local commands, scripts, mouse clicks, and terminal operations executed by the agent on your machine.
    • You agree not to utilize VYRON to perform automated malware distribution, DDOS attacks, or automated unauthorized network hacks.
    • You agree not to bypass security protections or write automation loops that overload third-party target API systems.`,
  },
  {
    icon: AlertCircle,
    title: '2. Liability & Warranties',
    content: `VYRON AI is delivered "AS IS" without direct warranties of any kind. 
    
    Because the agent interacts natively with active directories, shell processes, and custom python execution:
    • The developer (Khushal) is NOT liable for any local data loss, process crashes, hardware degradation, or folder mutations caused by running voice commands or automated key scripts.
    • You retain full power to review commands and parameters inside the local terminal window before executing them.`,
  },
  {
    icon: Scale,
    title: '3. API Charges',
    content: `Core local execution is free, but requests routed to Google Gemini or Groq portals are governed by their direct token pricing. You assume full charge responsibility for any personal API tokens used inside settings.`,
  }
];

export default function TermsPage() {
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
            operational terms
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
            Terms of <span className="text-[#a78bfa]" style={{ filter: 'drop-shadow(0 0 15px rgba(124,58,237,0.4))' }}>Service</span>
          </h1>
          <p className="text-zinc-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            By running VYRON, you agree to our local system execution terms.
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
          <h3 className="text-lg font-bold text-white tracking-tight">Need Legal Clarification?</h3>
          <p className="text-zinc-500 text-sm">Send us a request if you have any operational queries.</p>
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
