'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Cpu, Terminal, ArrowRight, ShieldCheck, Zap, HardDrive, Key } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import GlitchText from '@/components/GlitchText';
import PaymentModal from '@/components/PaymentModal';

const capabilities = [
  {
    num: '01',
    title: 'The OS Automation Layer',
    emoji: '🖥️',
    desc: 'VYRON does not just chat; it executes. Native file system management, directories creation, search processes, and opening apps — completely via smart voice inputs.',
  },
  {
    num: '02',
    title: 'Voice-Native Acoustic Array',
    emoji: '🎤',
    desc: 'Audio streamed directly with WebSocket protocols for sub-1.5s voice command executions. No slow HTTP round-trips.',
  },
  {
    num: '03',
    title: 'Biometric Secure Gate',
    emoji: '🔒',
    desc: 'Built-in facial verification registers and checks the identity of the user before allowing any sensitive terminal commands or script execution to proceed.',
  },
  {
    num: '04',
    title: 'Mobile ADB Linkage',
    emoji: '📱',
    desc: 'Control your PC and phone under a single hub. An integrated Android Debug Bridge lets VYRON execute phone gestures and coordinate alert checks.',
  },
  {
    num: '05',
    title: 'Office Expert Core',
    emoji: '📊',
    desc: 'Natively generates PowerPoint presentation decks (.pptx) with custom slide structures, writes Excel ranges with custom formulas, and automates Voucher entry in Tally Prime.',
  },
  {
    num: '06',
    title: 'Visual Script Injection',
    emoji: '💉',
    desc: 'Inject custom JS, inspect and edit styling, or manipulate active browsers in real-time. Make your workspace truly interactive.',
  },
  {
    num: '07',
    title: 'Dual Cognitive Core',
    emoji: '⚡',
    desc: 'Split-second tool chains managed via fast Groq inference pipelines, matched with Google Gemini large context processing. Double the intelligence.',
  },
  {
    num: '08',
    title: 'Absolute Local Buffering',
    emoji: '🧠',
    desc: 'Commands, memory buffers, and preference indices are saved into a local vector database. Completely secure — no server telemetry leakage.',
  },
  {
    num: '09',
    title: 'Background Voice Reminders',
    emoji: '⏰',
    desc: 'VYRON schedules reminders on your OS system task scheduler, and verbally speaks the details out loud when triggered, ensuring you never miss a beat.',
  },
  {
    num: '10',
    title: 'Live PDF Visual Viewer',
    emoji: '📄',
    desc: 'Loads local PDF files in a custom scrollable Tk window overlay with keyword highlighting and supports find-and-replace text edits.',
  },
  {
    num: '11',
    title: 'Silent Trash Emptying',
    emoji: '🗑️',
    desc: 'Empty your Recycle Bin and systems temp garbage silently via fast PowerShell background streams on command.',
  },
  {
    num: '12',
    title: 'Adobe Creative Suite Controls',
    emoji: '🎬',
    desc: 'Direct keyboard macro integrations for Premiere Pro timeline trimming, Photoshop brush tool selection, and After Effects composition details.',
  },
  {
    num: '13',
    title: 'Encrypted PIN Vault',
    emoji: '🔑',
    desc: 'Local credentials and secure parameters are guarded by a 4-digit security PIN prompt required during login initialization.',
  },
  {
    num: '14',
    title: 'One-Time License Gate',
    emoji: '🎟️',
    desc: 'Online license verification blocks access to the interface until a valid 10-digit key is verified and stored locally in license.json.',
  },
  {
    num: '15',
    title: 'Real-Time System Diagnostics',
    emoji: '⚙️',
    desc: 'High-tech responsive GUI dashboard built on CustomTkinter with glowing particles, system performance monitors, and live diagnostic tickers.',
  }
];

export default function FeaturesPage() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <div className="relative bg-[#050505] min-h-screen text-white pt-36 pb-20 px-6 overflow-hidden">
      {/* Background glow lamps */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(124,58,237,0.05)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(124,58,237,0.05)_0%,_transparent_70%)] pointer-events-none blur-3xl" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <ScrollReveal yOffset={30}>
          <div className="space-y-4">
            <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#a78bfa] uppercase select-none">
              operational systems
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
              Beyond Passive <span className="text-[#a78bfa]" style={{ filter: 'drop-shadow(0 0 15px rgba(124,58,237,0.4))' }}><GlitchText text="Conversation" /></span>
            </h1>
            <p className="text-zinc-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mt-4">
              An autonomous, local-first neural extension for your system. Explore the core operational capabilities.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Features Grid layout */}
      <section className="max-w-5xl mx-auto mb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 80, scale: 0.85, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10.5,
                delay: (i % 2) * 0.08 + (Math.floor(i / 2) * 0.05)
              }}
            >
              <div className="glass-liquid-tile rounded-2xl p-8 flex gap-6 hover:-translate-y-1.5 group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(200px_circle_at_var(--glow-x,0px)_var(--glow-y,0px),_rgba(124,58,237,0.1)_0%,_transparent_100%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon side */}
                <div className="w-16 h-16 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-4xl shrink-0 group-hover:scale-105 group-hover:border-[#7C3AED]/30 transition-all duration-500">
                  {c.emoji}
                </div>

                {/* Text details */}
                <div className="space-y-2 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-zinc-600 group-hover:text-[#a78bfa] transition-colors font-bold">{c.num}</span>
                    <h3 className="font-bold text-white text-lg tracking-tight leading-none group-hover:text-[#a78bfa] transition-colors">
                      {c.title}
                    </h3>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {c.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Card Section */}
      <section className="max-w-2xl mx-auto mb-20 relative z-10">
        <ScrollReveal>
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-3xl font-black text-white">Lifetime Access License</h2>
            <p className="text-zinc-500 text-sm">Unlock the complete neural desktop command center with a premium key.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded-3xl p-8 sm:p-10 border border-[#7C3AED] bg-gradient-to-b from-[#7C3AED]/10 to-transparent relative flex flex-col justify-between shadow-[0_0_30px_rgba(124,58,237,0.15)] hover:shadow-[0_0_40px_rgba(124,58,237,0.25)] transition-all duration-500 hover:-translate-y-1.5 h-full">
            <div className="absolute top-0 right-0 bg-[#7C3AED] text-white text-[9px] font-mono font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest">
              PREMIUM
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#a78bfa]">VYRON Premium</h3>
                <div className="flex items-baseline gap-1 text-4xl font-black text-white">
                  ₹400<span className="text-zinc-500 text-xs font-mono font-medium">/ lifetime</span>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Full command execution capability, Visual charts, PowerPoint builder, and creative suite macros.
                </p>
              </div>

              <div className="h-px bg-[#7C3AED]/20" />

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                {[
                  '15+ System Automation Tools',
                  'Office Expert PPT & Excel',
                  'Creative Suite Keystroke Macros',
                  'Interactive Live PDF Reader',
                  'Biometric Face ID Lock',
                  '4-Digit Encrypted Pin Vault',
                  'Ultra-Fast Voice Response',
                  'Local-First Zero Data Leakage'
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-zinc-200">
                    <Check className="w-4 h-4 text-[#a78bfa] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <button
                onClick={() => setIsPaymentOpen(true)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white font-bold text-center text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all cursor-pointer"
              >
                Buy Activation Key
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Payment Popup Gate Modal */}
      <PaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} />
    </div>
  );
}
