'use client';

import Link from 'next/link';
import { Heart, Activity, Globe, Send, MessageCircle, Instagram } from 'lucide-react';

// YouTube SVG icon (not in lucide)
function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}
import { motion } from 'framer-motion';

function MarqueeText({ strokeColor }: { strokeColor: string }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from("VYRON AI").map((char, index) => (
        <motion.span
          key={index}
          whileHover={{
            color: strokeColor.includes("124,58,237") ? "#a78bfa" : "#ffffff",
            textShadow: strokeColor.includes("124,58,237") 
              ? "0 0 25px rgba(124, 58, 237, 0.95), 0 0 50px rgba(124, 58, 237, 0.5)"
              : "0 0 25px rgba(255, 255, 255, 0.85), 0 0 50px rgba(124, 58, 237, 0.6)",
            scale: 1.18,
            y: -10,
            WebkitTextStrokeColor: strokeColor.includes("124,58,237") ? "#a78bfa" : "#ffffff",
          } as any}
          transition={{ type: "spring", stiffness: 400, damping: 13 }}
          className="inline-block transition-all duration-300 cursor-pointer text-transparent font-black"
          style={{
            WebkitTextStroke: `1px ${strokeColor}`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 md:px-20 border-t border-white/5 relative overflow-hidden font-sans">
      {/* Background radial soft violet glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Triple scrolling marquee */}
      <div className="overflow-hidden border-y border-white/5 py-4 mb-20">
        <div className="marquee-track select-none">
          {Array(3).fill(null).map((_, groupIdx) => (
            <div key={groupIdx} className="flex items-center gap-16 pr-16 text-7xl md:text-8xl font-black tracking-tighter uppercase select-none">
              <MarqueeText strokeColor="rgba(255,255,255,0.06)" />
              <span className="text-[#7C3AED] text-3xl font-black shrink-0">•</span>
              <MarqueeText strokeColor="rgba(124,58,237,0.15)" />
              <span className="text-[#7C3AED] text-3xl font-black shrink-0">•</span>
              <MarqueeText strokeColor="rgba(255,255,255,0.06)" />
              <span className="text-[#7C3AED] text-3xl font-black shrink-0">•</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
        {/* Brand Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-3">
            <h3 className="text-white font-black tracking-widest text-2xl">
              VYRON
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Neural Interface. Bypassing standard algorithms to deliver raw, unfiltered system-level desktop automation.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/vyron_ai_assistant/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#E1306C] hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@vyron_ai_assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#FF0000] hover:border-[#FF0000] hover:bg-[#FF0000]/10 transition-all duration-300"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: About Links */}
        <div>
          <h4 className="text-zinc-400 font-bold tracking-widest text-xs uppercase mb-6">
            About
          </h4>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/guide" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                System Guide
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Company Links */}
        <div>
          <h4 className="text-zinc-400 font-bold tracking-widest text-xs uppercase mb-6">
            Product
          </h4>
          <ul className="space-y-4">
            <li>
              <Link href="/features" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                Capabilities
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                Pricing Tiers
              </Link>
            </li>
            <li>
              <Link href="/download" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                Get Desktop App
              </Link>
            </li>
            <li>
              <Link href="/how-to-install" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                Watch Tutorial
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: System Board */}
        <div>
          <h4 className="text-zinc-400 font-bold tracking-widest text-xs uppercase mb-6">
            System Status
          </h4>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-zinc-500 text-xs">Network</span>
              <span className="text-emerald-400 text-xs font-bold font-mono ml-auto">Operational</span>
            </div>

            <div className="flex flex-col gap-1 border-t border-white/5 pt-4">
              <span className="text-zinc-600 text-[10px] uppercase font-mono tracking-wider">Parent Command</span>
              <span className="text-zinc-400 text-xs font-mono font-medium">VYRON AI v1.2.4 - Stable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bottom bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-zinc-600 text-xs font-medium">
          &copy; {new Date().getFullYear()} VYRON AI. All rights reserved.
        </p>
        <p className="text-zinc-500 text-xs font-medium flex items-center gap-1.5">
          Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" /> by{' '}
          <Link
            href="/about"
            className="text-[#a78bfa] hover:text-[#c4b5fd] transition-colors font-black tracking-tight"
          >
            Khushal
          </Link>
        </p>
      </div>
    </footer>
  );
}
