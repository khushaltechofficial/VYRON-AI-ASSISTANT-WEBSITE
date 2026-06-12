'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCcw, Infinity, Star, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <div className="relative bg-[#050505] min-h-screen text-white pt-36 pb-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.1)_0%,_transparent_60%)] pointer-events-none" />

      {/* Hero */}
      <section className="max-w-3xl mx-auto text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 uppercase">
            buyer protection
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
            <span className="text-emerald-400" style={{ filter: 'drop-shadow(0 0 15px rgba(16,185,129,0.4))' }}>
              Refund Policy
            </span>
          </h1>
          <p className="text-zinc-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            We provide a 7-day refund policy, but strictly on the condition that your Activation Key has not been activated. Once the key is activated, no refund will be given under any circumstances.
          </p>
        </motion.div>
      </section>

      {/* Key Highlights */}
      <section className="max-w-3xl mx-auto mb-16 relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
        {[
          {
            icon: ShieldCheck,
            color: 'emerald',
            title: 'Refund Eligibility',
            desc: 'Refunds are only processed if the software key is strictly un-activated within 7 days of purchase. Once activated, no refunds are provided.',
          },
          {
            icon: Infinity,
            color: 'purple',
            title: 'One-Time Payment',
            desc: 'You pay ₹400 once. That\'s it. No monthly fees, no subscription traps, no hidden charges. Ever.',
          },
          {
            icon: Star,
            color: 'amber',
            title: 'Free Future Updates',
            desc: 'All future VYRON AI updates are included free. Your key works for every version we release.',
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`rounded-2xl p-6 border ${
              item.color === 'emerald' ? 'border-emerald-500/20 bg-emerald-500/5' :
              item.color === 'purple' ? 'border-[#7C3AED]/20 bg-[#7C3AED]/5' :
              'border-amber-500/20 bg-amber-500/5'
            } flex flex-col gap-4`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
              item.color === 'emerald' ? 'bg-emerald-500/10' :
              item.color === 'purple' ? 'bg-[#7C3AED]/10' :
              'bg-amber-500/10'
            }`}>
              <item.icon className={`w-6 h-6 ${
                item.color === 'emerald' ? 'text-emerald-400' :
                item.color === 'purple' ? 'text-[#a78bfa]' :
                'text-amber-400'
              }`} />
            </div>
            <div>
              <h3 className="font-black text-white text-base mb-1">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Full Policy Details */}
      <section className="max-w-3xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="rounded-3xl border border-zinc-800 bg-[#09090b]/80 backdrop-blur-xl p-8 space-y-8"
        >
          {/* Section 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <RefreshCcw className="w-5 h-5 text-emerald-400 shrink-0" />
              <h2 className="text-lg font-black text-white">Refund Eligibility Conditions</h2>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed pl-8">
              If you have purchased VYRON AI but have not yet activated your license key, you may request a refund within <span className="text-white font-bold">7 days</span>. Please note that <span className="text-white font-bold">once the key is activated, no refund will be given</span>. To request an eligible refund, email us your UTR number.
            </p>
          </div>

          <div className="h-px bg-white/5" />

          {/* Section 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Infinity className="w-5 h-5 text-[#a78bfa] shrink-0" />
              <h2 className="text-lg font-black text-white">One-Time ₹400 — No Future Charges</h2>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed pl-8">
              VYRON AI is a <span className="text-white font-bold">lifetime license</span>. You pay ₹400 once and own it forever. We will never charge you again for:
            </p>
            <ul className="pl-8 space-y-2">
              {[
                'New feature updates and version releases',
                'Bug fixes and performance improvements',
                'New voice command capabilities',
                'UI and experience enhancements',
                'Extended platform support',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-zinc-500 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px bg-white/5" />

          {/* Section 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-amber-400 shrink-0" />
              <h2 className="text-lg font-black text-white">Free Future Updates Forever</h2>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed pl-8">
              Your activation key works across all future versions of VYRON AI. When we release v2.0, v3.0 or beyond — you get access automatically. <span className="text-white font-bold">Your key never expires.</span>
            </p>
          </div>

          <div className="h-px bg-white/5" />

          {/* How to claim */}
          <div className="space-y-3">
            <h2 className="text-lg font-black text-white">How to Request a Refund</h2>
            <div className="space-y-3">
              {[
                { step: '01', text: 'Email us at: smartkhushal2007@gmail.com' },
                { step: '02', text: 'Share your UTR / Transaction ID (12-digit number from your payment)' },
                { step: '03', text: 'We verify and initiate refund within 24–48 hours to your UPI' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-950/60 border border-zinc-900">
                  <span className="text-[10px] font-mono font-black text-[#a78bfa] bg-[#7C3AED]/10 px-2 py-1 rounded shrink-0">{item.step}</span>
                  <p className="text-zinc-400 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-3xl p-8 border border-emerald-500/20 bg-emerald-500/5 text-center space-y-5"
        >
          <h3 className="text-xl font-black text-white">Ready to try VYRON AI risk-free?</h3>
          <p className="text-zinc-500 text-sm max-w-md mx-auto">
            7-day full refund. One-time ₹400. Free updates forever. Nothing to lose.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all"
            >
              Get VYRON AI — ₹400 <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:smartkhushal2007@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-zinc-700 text-zinc-300 font-bold text-xs uppercase tracking-widest hover:border-zinc-500 hover:text-white transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Email Support
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
