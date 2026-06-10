'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Clock, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="relative bg-[#050505] min-h-screen text-white pt-36 pb-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12)_0%,_transparent_60%)] pointer-events-none" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#a78bfa] uppercase">
            support channel
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
            Contact <span className="text-[#a78bfa]" style={{ filter: 'drop-shadow(0 0 15px rgba(124,58,237,0.4))' }}>VYRON</span>
          </h1>
          <p className="text-zinc-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have a question about your license key, need technical help, or want to know more about VYRON AI? Reach out directly — we respond fast.
          </p>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-4xl mx-auto mb-16 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* WhatsApp Card */}
        <motion.a
          href="https://wa.me/917015140937?text=Hi,%20I%20need%20help%20with%20VYRON%20AI."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group rounded-3xl overflow-hidden border border-[#25D366]/20 bg-[#09090b]/85 backdrop-blur-xl shadow-2xl relative flex flex-col p-8 hover:border-[#25D366]/50 hover:shadow-[0_0_30px_rgba(37,211,102,0.1)] transition-all duration-300 cursor-pointer"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center mb-6">
            <MessageCircle className="w-6 h-6 text-[#25D366]" />
          </div>
          <h3 className="text-xl font-black text-white mb-2">WhatsApp Support</h3>
          <p className="text-zinc-500 text-sm leading-relaxed mb-6">
            Fastest response channel. Send your payment screenshot, license query, or tech issue — we&apos;ll get back to you quickly.
          </p>
          <div className="mt-auto space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/5 border border-[#25D366]/10">
              <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
              <span className="text-white font-mono font-bold text-lg tracking-widest">+91 70151 40937</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-600 font-mono">
              <Clock className="w-3 h-3" />
              Available: Mon–Sat, 9 AM – 9 PM IST
            </div>
          </div>
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="w-5 h-5 text-[#25D366]" />
          </div>
        </motion.a>

        {/* Email Card */}
        <motion.a
          href="mailto:smartkhushal2007@gmail.com"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group rounded-3xl overflow-hidden border border-[#7C3AED]/20 bg-[#09090b]/85 backdrop-blur-xl shadow-2xl relative flex flex-col p-8 hover:border-[#7C3AED]/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all duration-300 cursor-pointer"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center mb-6">
            <Mail className="w-6 h-6 text-[#a78bfa]" />
          </div>
          <h3 className="text-xl font-black text-white mb-2">Email Support</h3>
          <p className="text-zinc-500 text-sm leading-relaxed mb-6">
            For detailed queries, billing issues, or partnership inquiries. We typically respond within 24 hours.
          </p>
          <div className="mt-auto space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#7C3AED]/5 border border-[#7C3AED]/10">
              <Mail className="w-4 h-4 text-[#a78bfa] shrink-0" />
              <span className="text-white font-mono font-bold text-sm">smartkhushal2007@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-600 font-mono">
              <Clock className="w-3 h-3" />
              Response within 24 hours
            </div>
          </div>
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="w-5 h-5 text-[#a78bfa]" />
          </div>
        </motion.a>
      </section>

      {/* Info Banner */}
      <section className="max-w-4xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl p-7 border border-[#7C3AED]/20 bg-[#7C3AED]/5 backdrop-blur-xl"
        >
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/15 border border-[#7C3AED]/20 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#a78bfa]" />
            </div>
            <div className="space-y-2">
              <h3 className="font-black text-white text-base">Activation Key Support</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                After making payment on the <Link href="/pricing" className="text-[#a78bfa] underline hover:text-white transition-colors">pricing page</Link>, send your{' '}
                <span className="text-white font-bold">UPI transaction screenshot</span> to WhatsApp{' '}
                <span className="text-[#25D366] font-bold font-mono">+91 70151 40937</span>.
                Your activation key will be shared within minutes during business hours.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quick Links */}
      <section className="max-w-4xl mx-auto relative z-10 text-center">
        <p className="text-zinc-600 text-sm mb-6 font-mono uppercase tracking-widest">Quick Links</p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: 'Pricing', href: '/pricing' },
            { label: 'Download VYRON', href: '/download' },
            { label: 'How to Install', href: '/how-to-install' },
            { label: 'Features', href: '/features' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-5 py-2.5 rounded-full border border-white/10 hover:border-[#7C3AED]/50 text-zinc-400 hover:text-white font-bold text-xs uppercase tracking-widest transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
