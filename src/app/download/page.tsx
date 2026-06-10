'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Download, ShieldCheck, Zap, HardDrive, Key, HelpCircle, Smartphone, Clock, RefreshCcw, Infinity } from 'lucide-react';
import Link from 'next/link';
import PaymentModal from '@/components/PaymentModal';

export default function DownloadPage() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <div className="relative bg-[#050505] min-h-screen text-white pt-36 pb-20 px-6 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12)_0%,_transparent_60%)] pointer-events-none" />

      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#a78bfa] uppercase">
            executable resources
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
            Get <span className="text-[#a78bfa]" style={{ filter: 'drop-shadow(0 0 15px rgba(124,58,237,0.4))' }}>VYRON AI</span>
          </h1>
          <p className="text-zinc-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Download the Windows desktop executable, load your Gemini API Key in the settings tab, and start voice automation in under 2 minutes.
          </p>
        </motion.div>
      </section>

      {/* 2-Column Download Cards */}
      <section className="max-w-5xl mx-auto mb-16 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* === PC DOWNLOAD CARD === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-zinc-800 bg-[#09090b]/85 backdrop-blur-xl shadow-2xl relative flex flex-col"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] py-3 text-center text-[10px] font-mono font-black uppercase tracking-widest text-white shadow-inner">
            ⚡ Windows Desktop Agent — v1.2.1 Stable Build
          </div>

          <div className="p-8 space-y-6 flex flex-col flex-1">
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center shadow-lg shadow-[#7C3AED]/20">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/5 text-[#a78bfa]">
                v1.2.1 Stable
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-black text-white tracking-tight">VYRON AI — Windows PC</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Full-featured autonomous desktop command center for Windows. Control your mouse, run scripts, search dirs, and crawl sites with clean voice inputs.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-3 gap-3 text-xs font-mono text-zinc-400 select-none border-y border-white/5 py-4">
              <span className="flex items-center gap-1.5">
                <HardDrive className="w-3.5 h-3.5 text-[#a78bfa]" /> ~437 MB
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#a78bfa]" /> Verified .exe
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#a78bfa]" /> Premium Key
              </span>
            </div>

            {/* System Requirements */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono font-bold tracking-widest text-white uppercase">System Requirements</h4>
              <ul className="grid grid-cols-1 gap-2">
                {[
                  'Windows 10 / 11 (64-bit)',
                  '4 GB RAM minimum',
                  '~437 MB disk space',
                  'Mic (for Voice commands)',
                  'Active Internet Connection',
                  'Gemini API Key (Free tier OK)',
                ].map((req) => (
                  <li key={req} className="flex items-center gap-2 text-zinc-500 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Button */}
            <div className="pt-2 mt-auto space-y-3">
              <button
                onClick={() => setIsPaymentOpen(true)}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:shadow-[0_0_25px_rgba(124,58,237,0.45)] text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <Download className="w-4 h-4" /> Get Lifetime Key &amp; Download PC
              </button>
              
              <a
                href="/api/download/demo"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl border border-zinc-800 hover:border-zinc-700 hover:bg-white/5 text-zinc-400 hover:text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
              >
                <Download className="w-4 h-4" /> Download PC Free (Limited Trial)
              </a>
              
              <p className="text-center text-[9px] text-zinc-500 font-mono select-none">
                * Free trial version has usage limits, auto-resets later.
              </p>
              
              <p className="text-center text-[10px] text-zinc-600 font-mono mt-1 select-none">
                SHA-256 verified · Digital Signature secure · Malware scanned
              </p>
            </div>
          </div>
        </motion.div>

        {/* === ANDROID CARD (Under Development) === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl overflow-hidden border border-zinc-800/50 bg-zinc-950/40 backdrop-blur-xl shadow-xl relative flex flex-col opacity-70"
        >
          {/* Header Banner - greyed out */}
          <div className="bg-zinc-800 py-3 text-center text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 shadow-inner">
            📱 Android App — Coming Soon
          </div>

          <div className="p-8 space-y-6 flex flex-col flex-1">
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-zinc-500" />
              </div>
              <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-full border border-zinc-700/50 bg-zinc-800/40 text-zinc-500">
                Under Development
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-black text-zinc-400 tracking-tight">VYRON AI — Android</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                The full VYRON AI experience coming to Android. Voice command your phone, automate apps, and control your device with neural precision — from your palm.
              </p>
            </div>

            {/* Placeholder specs - greyed */}
            <div className="grid grid-cols-3 gap-3 text-xs font-mono text-zinc-600 select-none border-y border-zinc-800/40 py-4">
              <span className="flex items-center gap-1.5">
                <HardDrive className="w-3.5 h-3.5 text-zinc-600" /> Android 10+
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-600" /> Secure APK
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-zinc-600" /> Same Key
              </span>
            </div>

            {/* Placeholder features */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-600 uppercase">Planned Features</h4>
              <ul className="grid grid-cols-1 gap-2">
                {[
                  'Voice-controlled Android shell',
                  'App launch & control via ADB Bridge',
                  'Cross-device sync with PC session',
                  'Mobile screen capture & analysis',
                  'WhatsApp & SMS automation',
                  'Same license key as PC version',
                ].map((req) => (
                  <li key={req} className="flex items-center gap-2 text-zinc-600 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Disabled button */}
            <div className="pt-2 mt-auto">
              <div className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-zinc-800/60 border border-zinc-700/40 text-zinc-500 font-bold text-xs uppercase tracking-widest cursor-not-allowed select-none">
                <Clock className="w-4 h-4" /> Under Development
              </div>
              <p className="text-center text-[10px] text-zinc-700 font-mono mt-2 select-none">
                Notify me when Android launches → Coming in next major release
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* API Key requirement details */}
      <section className="max-w-5xl mx-auto mb-12 relative z-10">
        <div className="rounded-3xl p-6 sm:p-8 border border-[#7C3AED]/20 bg-[#7C3AED]/5 backdrop-blur-xl flex flex-col sm:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/15 flex items-center justify-center shrink-0 border border-[#7C3AED]/20">
            <Key className="w-5 h-5 text-[#a78bfa]" />
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-white text-base">You Need a Free Google Gemini API Key</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              VYRON processes logical systems locally but accesses LLM nodes using your own Google Gemini key. Get yours free in under 2 minutes at{' '}
              <a
                href="https://aistudio.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a78bfa] hover:text-white transition-colors underline font-semibold"
              >
                aistudio.google.com
              </a>
              . Enter the key in the settings tab of the app upon launch — no environment variables needed!
            </p>
          </div>
        </div>
      </section>

      {/* Security Notices */}
      <section className="max-w-5xl mx-auto mb-20 relative z-10">
        <div className="rounded-3xl p-6 sm:p-8 border border-zinc-800 bg-[#09090b]/80 backdrop-blur-xl flex flex-col sm:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center shrink-0 border border-white/5">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-white text-base">Windows SmartScreen Notices</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Because VYRON AI interacts directly with native system directories, shell execution, and keyboard events, Windows Defender may display a SmartScreen warning upon initial launch. Click &quot;More Info&quot; then &quot;Run anyway&quot;. The software is completely verified, digitally signed, and fully private.
            </p>
          </div>
        </div>
      </section>

      {/* 7-Day Refund Policy Banner */}
      <section className="max-w-5xl mx-auto mb-10 relative z-10">
        <div className="rounded-3xl p-6 sm:p-8 border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <RefreshCcw className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="space-y-1">
                <h3 className="font-black text-white text-base">7-Day Full Refund Guarantee</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Not satisfied? Get a <span className="text-white font-bold">complete refund within 7 days</span> — no questions asked. Just message us on WhatsApp with your UTR number.
                </p>
              </div>
            </div>
            <Link
              href="/refund-policy"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-widest hover:bg-emerald-500/10 transition-all"
            >
              View Policy
            </Link>
          </div>

          <div className="mt-5 pt-5 border-t border-emerald-500/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: RefreshCcw, text: '7-Day Full Refund — Any Reason' },
              { icon: Infinity, text: 'One-Time ₹360 — No Future Charges' },
              { icon: ShieldCheck, text: 'All Future Updates Included Free' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 text-xs text-zinc-500">
                <item.icon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help links */}
      <section className="max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">Need help setting it up?</h3>
          <p className="text-zinc-500 text-sm">Follow our visual guides and tutorials.</p>
          <Link
            href="/how-to-install"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 hover:border-white/20 text-zinc-300 font-bold text-xs uppercase tracking-widest transition-all"
          >
            <HelpCircle className="w-4 h-4 text-[#a78bfa]" /> Installation Guide
          </Link>
        </div>
      </section>

      {/* Payment Activation Gate Modal */}
      <PaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} />
    </div>
  );
}
