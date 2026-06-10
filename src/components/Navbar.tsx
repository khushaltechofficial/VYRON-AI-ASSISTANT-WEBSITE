'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/guide', label: 'Guide' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="relative z-50">
        {/* Floating Pill Container */}
        <div
          className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[65%] max-w-5xl px-6 py-4 flex justify-between items-center bg-black/45 backdrop-blur-lg border border-[#7C3AED]/20 rounded-full text-white shadow-[0_4px_30px_rgba(124,58,237,0.18)]"
          style={{ transition: 'all 0.3s ease' }}
        >
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3.5 cursor-pointer group">
            <div className="relative w-9 h-9 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              {/* Outer pulsing shadow glow ring */}
              <div className="absolute inset-0 rounded-full bg-[#7C3AED]/10 blur-[6px] animate-pulse" />
              
              {/* Outer spinning dash ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#7C3AED]/50 animate-[spin_30s_linear_infinite]" />
              
              {/* Inner reverse-spinning target scope ring */}
              <div className="absolute w-7 h-7 rounded-full border border-double border-[#a78bfa]/40 border-t-[#7C3AED] border-b-[#7C3AED] animate-[spin_12s_linear_infinite_reverse]" />
              
              {/* Inner glowing core ring */}
              <div className="absolute w-4 h-4 rounded-full border border-[#7C3AED] bg-black flex items-center justify-center shadow-[0_0_12px_rgba(124,58,237,0.8)]">
                {/* Center bright core dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping absolute" />
                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff] relative z-10" />
              </div>
              
              {/* Four corner tech bracket ticks */}
              <div className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 border-t-2 border-l-2 border-[#a78bfa]/60 rounded-tl" />
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 border-t-2 border-r-2 border-[#a78bfa]/60 rounded-tr" />
              <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 border-b-2 border-l-2 border-[#a78bfa]/60 rounded-bl" />
              <div className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 border-b-2 border-r-2 border-[#a78bfa]/60 rounded-br" />
            </div>
            <span
              className="text-xl font-black tracking-tighter text-[#7C3AED] select-none"
              style={{ filter: 'drop-shadow(0 0 8px rgba(124,58,237,0.6))' }}
            >
              VYRON
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-8 text-[11px] lg:text-xs font-bold uppercase tracking-[0.25em]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  className="relative group transition-all duration-300"
                  style={{ color: isActive ? '#a78bfa' : '#d1d5db' }}
                  href={link.href}
                >
                  <span className="hover:text-[#a78bfa] transition-colors">{link.label}</span>
                  <span
                    className="absolute -bottom-1.5 left-0 h-[2px] bg-[#7C3AED] transition-all duration-300"
                    style={{ width: isActive ? '100%' : '0%' }}
                  />
                  {!isActive && (
                    <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#a78bfa] group-hover:w-full transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">


            {/* CTA Download button */}
            <Link href="/download">
              <div className="hidden md:block px-5 py-2.5 rounded-full border border-[#7C3AED]/50 bg-[#7C3AED]/10 text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#5B21B6] hover:border-[#7C3AED] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300 cursor-pointer">
                Download VYRON
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#a78bfa] p-1 rounded-full hover:bg-[#7C3AED]/10 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[92px] left-1/2 -translate-x-1/2 w-[90%] bg-black/95 backdrop-blur-xl border border-[#7C3AED]/20 rounded-3xl p-6 z-40 md:hidden shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(124,58,237,0.15)]"
          >
            <nav className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-3 text-sm font-semibold uppercase tracking-widest border-b border-white/5 last:border-b-0"
                    style={{ color: isActive ? '#a78bfa' : '#ffffff' }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/5">

                <Link
                  href="/download"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white font-bold tracking-widest text-xs uppercase"
                >
                  <Download className="w-4 h-4" /> Download VYRON
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
