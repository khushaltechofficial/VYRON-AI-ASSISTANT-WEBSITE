'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, ArrowRight, ShieldCheck, Key, Zap, Clock, Sliders } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import GlitchText from '@/components/GlitchText';
import PaymentModal from '@/components/PaymentModal';

export default function PricingPage() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [dailyCommands, setDailyCommands] = useState<number>(50);

  // Dynamic calculations for real-time ROI calculator
  const monthlyCommands = dailyCommands * 30;
  const timeSavedSeconds = monthlyCommands * 15; // average 15 seconds saved per command
  const timeSavedHours = Math.round((timeSavedSeconds / 3600) * 10) / 10;
  const estimatedProductivityBoost = Math.round((timeSavedHours / 160) * 100);

  const features = [
    'Lifetime Activation License Key',
    'Full Voice Command Control (under 1.5s latency)',
    'Creative Suite automation (Premiere Pro, Photoshop, After Effects)',
    'Live PDF Viewer & Manager (Text edit, renaming, search)',
    'Advanced Office Excel & Word Extractors (OCR data entry)',
    'PowerPoint Presentation Slide Deck Creator (16:9 theme & images)',
    'Dynamic high-tech charts & analytics data visualizations',
    'Facial Biometric Verification / Zero-Trust security gates',
    'Universal Hotkey system (Ctrl+Alt+V for quick command triggers)',
    'Direct developer Email support'
  ];

  return (
    <div className="relative bg-[#050505] min-h-screen text-white pt-36 pb-20 px-6 overflow-hidden">
      {/* Background soft glow lamps */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute top-[30%] left-[-15%] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(124,58,237,0.06)_0%,_transparent_75%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-[20%] right-[-15%] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(124,58,237,0.06)_0%,_transparent_75%)] pointer-events-none blur-3xl" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <ScrollReveal yOffset={30}>
          <div className="space-y-4">
            <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#a78bfa] uppercase select-none">
              system deployment plan
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
              Get Lifetime <span className="text-[#a78bfa]" style={{ filter: 'drop-shadow(0 0 15px rgba(124,58,237,0.4))' }}><GlitchText text="Premium Access" /></span>
            </h1>
            <p className="text-zinc-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mt-4">
              Unlock the full potential of VYRON AI. Complete visual control, neural office suites, and creative suite macros in a single lifetime key.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Main Grid */}
      <section className="max-w-5xl mx-auto mb-20 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {/* Pricing Card */}
        <div className="md:col-span-7 rounded-3xl border border-[#7C3AED]/30 bg-zinc-950/40 backdrop-blur-md relative flex flex-col justify-between overflow-hidden shadow-2xl p-8 sm:p-10">
          {/* Top highlight bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6]" />
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center shadow shadow-[#7C3AED]/20">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight leading-none">VYRON PREMIUM</h3>
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider">ONE-TIME DEPLOYMENT</span>
              </div>
            </div>

            <div className="flex items-baseline gap-2 text-5xl font-black text-white">
              ₹400
              <span className="text-zinc-500 text-xs font-mono font-semibold">/ lifetime license key</span>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Complete offline control, zero monthly recurring fees, and managed neural engine activation.
            </p>

            <div className="h-px bg-zinc-900" />

            <ul className="space-y-3.5 text-sm font-medium">
              {features.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#a78bfa] shrink-0 mt-0.5" />
                  <span className="text-zinc-300 font-medium">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8">
            <button
              onClick={() => setIsPaymentOpen(true)}
              className="w-full py-4.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Buy Activation Key</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Real-time ROI & Productivity Calculator */}
        <div className="md:col-span-5 rounded-3xl border border-zinc-900 bg-[#09090b]/80 p-6 md:p-8 relative overflow-hidden shadow-2xl flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <Sliders className="w-5 h-5 text-[#a78bfa]" />
              <h3 className="text-md font-black tracking-tight uppercase">Productivity Calculator</h3>
            </div>
            <p className="text-zinc-500 text-xs">Simulate time saved using VYRON daily keyboard and office workflows.</p>

            {/* Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between text-xs font-mono font-bold text-zinc-400">
                <span>Daily commands</span>
                <span className="text-[#a78bfa]">{dailyCommands} / day</span>
              </div>
              <input
                type="range"
                min="10"
                max="300"
                value={dailyCommands}
                onChange={(e) => setDailyCommands(parseInt(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#7C3AED]"
              />
            </div>

            {/* Dynamic Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="bg-zinc-950/60 p-4 rounded-xl border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] uppercase font-mono tracking-wider font-bold">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" /> Time Saved
                </div>
                <p className="text-xl font-black text-white leading-none">{timeSavedHours} hrs</p>
                <p className="text-[9px] text-zinc-600 uppercase font-mono">per month</p>
              </div>

              <div className="bg-zinc-950/60 p-4 rounded-xl border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] uppercase font-mono tracking-wider font-bold">
                  <Zap className="w-3.5 h-3.5 text-[#a78bfa]" /> Velocity
                </div>
                <p className="text-xl font-black text-white leading-none">+{estimatedProductivityBoost}%</p>
                <p className="text-[9px] text-zinc-600 uppercase font-mono">efficiency boost</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/30 text-[10px] font-mono text-zinc-500 leading-relaxed space-y-2">
              <div className="text-white font-bold flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Security Assurance</span>
              </div>
              <p>Your license key is checked directly against our Vercel keys database serverless API and is tied locally to your unique PC device configuration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} />
    </div>
  );
}
