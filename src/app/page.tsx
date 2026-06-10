'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  Download, ArrowRight, Mic, Terminal, Clipboard, Check, Command, ShieldAlert
} from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import Image from 'next/image';
import AgentFace from '@/components/AgentFace';
import GlitchText from '@/components/GlitchText';
import ScrollReveal from '@/components/ScrollReveal';
import PaymentModal from '@/components/PaymentModal';

/* ---------- Voice Wave Bars ---------- */
function VoiceWave() {
  return (
    <div className="flex items-end gap-0.75 h-4 select-none">
      <span className="iris-wave-bar" />
      <span className="iris-wave-bar" />
      <span className="iris-wave-bar" />
      <span className="iris-wave-bar" />
      <span className="iris-wave-bar" />
      <span className="iris-wave-bar" />
      <span className="iris-wave-bar" />
    </div>
  );
}

/* ---------- Bento Card Mouse Glow Tracker ---------- */
interface BentoCardProps {
  category: string;
  title: string;
  desc: string;
  index: number;
}

function BentoCard({ category, title, desc, index }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for 3D card tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to eliminate any sudden movements
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [24, -24]), { stiffness: 100, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-24, 24]), { stiffness: 100, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    
    // Mouse coordinates mapped between -0.5 and 0.5
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(relativeX);
    y.set(relativeY);

    // Glow effect
    const glowX = e.clientX - rect.left;
    const glowY = e.clientY - rect.top;
    card.style.setProperty('--glow-x', `${glowX}px`);
    card.style.setProperty('--glow-y', `${glowY}px`);
    card.style.setProperty('--glow-intensity', '1');
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--glow-intensity', '0');
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        '--glow-radius': '240px',
      } as any}
      className="glass-liquid-tile bento-section p-8 text-left transition-all duration-300 min-h-[220px] flex flex-col justify-between cursor-pointer"
    >
      <div className="space-y-4" style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
        <span
          className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#a78bfa] uppercase w-max block"
        >
          {category}
        </span>
        <h3 className="text-white font-black text-xl tracking-tight leading-tight" style={{ transform: 'translateZ(20px)' }}>
          {title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed" style={{ transform: 'translateZ(10px)' }}>
          {desc}
        </p>
      </div>
    </motion.div>
  );
}


/* ---------- Custom Cursor Follower ---------- */
function CursorFollower() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#7C3AED]/50 bg-[#7C3AED]/5 pointer-events-none z-50 hidden md:block mix-blend-screen shadow-[0_0_20px_rgba(124,58,237,0.3)]"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    />
  );
}

/* ---------- Magnetic Button Wrapper ---------- */
interface MagneticProps {
  children: React.ReactElement;
}

function MagneticButton({ children }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 14, stiffness: 140, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = el.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const pullX = (clientX - centerX) * 0.35; 
    const pullY = (clientY - centerY) * 0.35;
    x.set(pullX);
    y.set(pullY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      className="w-full sm:w-auto"
    >
      {children}
    </motion.div>
  );
}

/* ========== HOMEPAGE ========== */
export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [username, setUsername] = useState('KHUSHAL');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  // 3D Laptop Scroll Parallax Refs & Hooks
  const laptopSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: laptopSectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth transforms for official premium Macbook Scroll
  const rawLidScaleX = useTransform(scrollYProgress, [0, 0.45], [1.2, 1.2]);
  const rawLidScaleY = useTransform(scrollYProgress, [0, 0.45], [0.0, 1.0]);
  const rawLidRotateX = useTransform(scrollYProgress, [0, 0.45], [-90, -10]);
  const rawLaptopScale = useTransform(scrollYProgress, [0, 0.45], [0.45, 1.0]);
  const rawLaptopTranslateY = useTransform(scrollYProgress, [0, 0.45], [100, 0]);

  // Spring physics for soft organic motion
  const lidScaleXSpring = useSpring(rawLidScaleX, { stiffness: 80, damping: 20 });
  const lidScaleYSpring = useSpring(rawLidScaleY, { stiffness: 80, damping: 20 });
  const lidRotateXSpring = useSpring(rawLidRotateX, { stiffness: 80, damping: 20 });
  const laptopScaleSpring = useSpring(rawLaptopScale, { stiffness: 80, damping: 20 });
  const laptopTranslateYSpring = useSpring(rawLaptopTranslateY, { stiffness: 80, damping: 20 });

  // Parallax Hero Title Scroll Hooks
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 450], [0, 160]);
  const titleOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const smoothTitleY = useSpring(titleY, { stiffness: 90, damping: 25 });
  const smoothTitleOpacity = useSpring(titleOpacity, { stiffness: 90, damping: 25 });

  // 3D Terminal Scroll Parallax Hooks
  const terminalSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: terminalScrollProgress } = useScroll({
    target: terminalSectionRef,
    offset: ["start end", "end start"]
  });
  const terminalFloatY = useTransform(terminalScrollProgress, [0, 1], [-80, 80]);
  const smoothTerminalFloatY = useSpring(terminalFloatY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    // Check if user has set a preferred username in localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('vyron_username');
      if (stored) {
        setUsername(stored.toUpperCase());
      }
    }
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('vyron --boot --interface=neural');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-[#050505] min-h-screen text-white overflow-hidden">
      {/* Custom Glowing Cursor Follower */}
      <CursorFollower />

      {/* Dynamic Particle Background */}
      <ParticleBackground />

      {/* Hero Glow Backdrop */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18)_0%,_transparent_65%)]" />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex flex-col justify-center items-center z-10 pt-20 px-6">
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl gap-2 mt-16 md:mt-24">
          
          {/* Main Huge Brand Heading */}
          <div className="relative w-full flex justify-center flex-col items-center mb-4">
            <motion.h1
              style={{ y: smoothTitleY, opacity: smoothTitleOpacity }}
              className="text-[26vw] sm:text-[18vw] md:text-[11vw] font-black tracking-tighter leading-none select-none text-white vyron-hero-title"
            >
              VYRON AI
            </motion.h1>
          </div>

          {/* Divider rule */}
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <hr className="iris-rule" />
            </div>
          </ScrollReveal>

          {/* Hinglish Personalization details */}
          <ScrollReveal delay={0.2}>
            <p className="text-[11px] md:text-sm font-mono tracking-[0.35em] uppercase text-white mb-2 font-bold select-none text-center">
              <GlitchText text="Visionary Reasoning Operational Neural-Network" />
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="mt-4 max-w-2xl text-sm md:text-lg text-zinc-400 font-medium leading-relaxed max-w-xl">
              Your device. Fully under command.{' '}
              <span className="text-[#c4b5fd] font-bold">Speak once</span> — VYRON handles the rest.
              From files and apps to browser and beyond,{' '}
              <span className="text-white font-bold">real-time, zero friction.</span>
            </p>
          </ScrollReveal>

          {/* Top-Class Iris voice assistant interactive Orb */}
          <ScrollReveal delay={0.4}>
            <div className="my-4 relative z-20">
              <AgentFace />
            </div>
          </ScrollReveal>

          {/* Time Greet Display */}
          <ScrollReveal delay={0.5}>
            <div className="flex items-center gap-3 mt-4 mb-10 bg-[#7C3AED]/10 border border-[#7C3AED]/30 px-5 py-2.5 rounded-full select-none shadow-[0_0_20px_rgba(124,58,237,0.15)]">
              <Mic className="w-4 h-4 text-[#a78bfa]" />
              <VoiceWave />
              <span className="text-[10px] sm:text-[11px] font-mono text-[#a78bfa] tracking-widest uppercase font-semibold">
                Voice-native AI
              </span>
              <span className="text-zinc-500 font-mono">|</span>
              <span className="text-[10px] sm:text-[11px] font-mono text-zinc-300 font-bold uppercase">
                Hello, {username}!
              </span>
            </div>
          </ScrollReveal>

          {/* Action CTAs */}
          <ScrollReveal delay={0.6}>
            <div className="flex md:flex-row flex-col justify-center items-center gap-5 w-full sm:w-auto">
              <MagneticButton>
                <button
                  onClick={() => setIsPaymentOpen(true)}
                  className="group relative flex items-center justify-between px-8 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-shadow cursor-pointer w-full sm:w-auto min-w-[320px] z-20 bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-white shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:shadow-[0_0_60px_rgba(124,58,237,0.5)] hover:bg-[#7C3AED] hover:text-black transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <div className="flex items-center justify-center">
                      <Command className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-start leading-tight text-left">
                      <span>Download VYRON</span>
                      <span className="text-[11px] font-mono opacity-80 uppercase tracking-wider">
                        Get Windows App
                      </span>
                    </div>
                  </span>
                  <div className="relative ml-2 z-10 w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black transition-all duration-300">
                    <Download className="w-5 h-5 text-current group-hover:text-[#a78bfa]" />
                  </div>
                  <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.4),transparent)] group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </button>
              </MagneticButton>

              <MagneticButton>
                <Link href="/how-to-install" className="w-full sm:w-auto">
                  <button
                    className="group relative flex items-center justify-between px-8 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-shadow cursor-pointer w-full sm:w-auto min-w-[320px] z-20 bg-transparent border border-white/15 text-white hover:bg-white/80 hover:text-black backdrop-blur-sm shadow-none transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <div className="flex items-center justify-center">
                        <Terminal className="w-6 h-6 text-[#a78bfa] group-hover:text-current" />
                      </div>
                      <div className="flex flex-col items-start leading-tight text-left">
                        <span>How to Install</span>
                        <span className="text-[11px] font-mono opacity-80 uppercase tracking-wider">
                          Watch Tutorial
                        </span>
                      </div>
                    </span>
                    <div className="relative ml-2 z-10 w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-current group-hover:text-[#a78bfa]" />
                    </div>
                    <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.4),transparent)] group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  </button>
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>

          {/* Specifications Badges */}
          <ScrollReveal delay={0.7}>
            <div className="flex items-center gap-4 mt-12 flex-wrap justify-center select-none">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#7C3AED]/20 bg-black/80 backdrop-blur-md">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Latency</span>
              <span className="text-[11px] font-mono text-[#a78bfa] font-bold">&lt;1.5s</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#7C3AED]/20 bg-black/80 backdrop-blur-md">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Context</span>
              <span className="text-[11px] font-mono text-[#a78bfa] font-bold">128k+</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#7C3AED]/20 bg-black/80 backdrop-blur-md">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Uptime</span>
              <span className="text-[11px] font-mono text-[#a78bfa] font-bold">24/7</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#7C3AED]/20 bg-black/80 backdrop-blur-md">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Local AI</span>
              <span className="text-[11px] font-mono text-[#a78bfa] font-bold">Local-First</span>
            </div>
          </div>
        </ScrollReveal>
        </div>

        {/* Scroll explorer indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none select-none">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/50">
            Scroll to Explore
          </span>
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="opacity-50">
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="#7C3AED" strokeWidth="1.5" />
            <rect x="9" y="6" width="2" height="6" rx="1" fill="#7C3AED" className="iris-scroll-dot" />
          </svg>
        </div>
      </section>      {/* ===== 3D LAPTOP & SCREEN MOCKUP SECTION ===== */}
      <section ref={laptopSectionRef} className="relative z-20 bg-black min-h-[140vh] border-y border-white/5 overflow-hidden flex flex-col items-center">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden w-full">
          <ScrollReveal>
            <div className="max-w-6xl w-full px-6 flex flex-col items-center text-center mb-6">
              <span className="text-xs font-mono font-bold tracking-widest px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#a78bfa] uppercase mb-4">
                System Interface
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-3">
                <GlitchText text="Your AI. Your Rules." />
              </h2>
              <p className="text-zinc-400 text-sm md:text-base max-w-xl">
                One Voice. Total Control Over Your Device.
              </p>
            </div>
          </ScrollReveal>

          {/* 3D Mockup Container */}
          <motion.div
            className="relative w-full max-w-5xl px-6 flex flex-col items-center [perspective:1200px]"
            style={{
              scale: laptopScaleSpring,
              y: laptopTranslateYSpring,
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="flex flex-col items-center justify-start [perspective:800px] sm:scale-50 md:scale-100 scale-[0.45]">
              <div className="relative [perspective:800px] z-10">
                {/* Base Cover */}
                <div
                  style={{
                    transform: 'perspective(800px) rotateX(-25deg) translateZ(0px)',
                    transformOrigin: 'bottom',
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2"
                >
                  <div
                    style={{ boxShadow: '0px 2px 0px 2px #171717 inset' }}
                    className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
                  >
                    <span className="text-[#a78bfa] drop-shadow-[0_0_15px_rgba(124,58,237,0.7)] animate-pulse">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.904-4.474a9.003 9.003 0 11-8.09-8.09L9.813 15.904z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Screen Lid (Connected in 3D perspective!) */}
                <motion.div
                  className="absolute top-0 left-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2 shadow-2xl"
                  style={{
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'top',
                    scaleX: lidScaleXSpring,
                    scaleY: lidScaleYSpring,
                    rotateX: lidRotateXSpring,
                    boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(124,58,237,0.15)',
                  }}
                >
                  <div className="absolute inset-0 rounded-lg bg-[#272729] p-1.5">
                    <div className="relative w-full h-full rounded-md overflow-hidden bg-[#050505] flex items-center justify-center border border-zinc-900 shadow-inner">
                      <img
                        src="/img/screen.png"
                        alt="VYRON System UI Mockup"
                        className="w-full h-full object-contain rounded-sm"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Keyboard Keypad base */}
              <div
                className="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-[#121214] border border-zinc-800 p-4 flex flex-col items-center"
                style={{
                  transform: 'perspective(800px) rotateX(45deg) translateZ(-40px) translateY(-50px)',
                  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.9), inset 0 2px 2px rgba(255,255,255,0.05)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Keypad trackpad notch and keys */}
                <div className="relative h-6 w-full"><div className="absolute inset-x-0 mx-auto h-2 w-[80%] bg-[#050505] rounded-b-md"></div></div>
                <div className="relative flex w-full h-full">
                  <div className="mx-auto h-full w-[5%] overflow-hidden"><div className="mt-2 flex h-40 gap-[2px] px-[0.5px]" style={{ backgroundImage: 'radial-gradient(circle, #2d2d30 0.5px, transparent 0.5px)', backgroundSize: '3px 3px' }}></div></div>
                  
                  <div className="mx-auto h-full w-[90%]">
                    <div className="mx-1 h-full rounded-md bg-[#050505] p-1 border border-zinc-950">
                      <div className="grid grid-cols-15 gap-1 w-full select-none pointer-events-none opacity-90 p-1 h-full">
                        {/* Keyboard Keys Layout grid */}
                        {/* Row 1 */}
                        <div className="keyboard-key text-[4px] text-zinc-500 py-1 rounded text-center font-bold">esc</div>
                        <div className="keyboard-key text-[4px] text-zinc-500 py-1 rounded text-center">F1</div>
                        <div className="keyboard-key text-[4px] text-zinc-500 py-1 rounded text-center">F2</div>
                        <div className="keyboard-key text-[4px] text-zinc-500 py-1 rounded text-center">F3</div>
                        <div className="keyboard-key text-[4px] text-zinc-500 py-1 rounded text-center">F4</div>
                        <div className="keyboard-key text-[4px] text-zinc-500 py-1 rounded text-center">F5</div>
                        <div className="keyboard-key text-[4px] text-zinc-500 py-1 rounded text-center">F6</div>
                        <div className="keyboard-key text-[4px] text-zinc-500 py-1 rounded text-center">F7</div>
                        <div className="keyboard-key text-[4px] text-zinc-500 py-1 rounded text-center">F8</div>
                        <div className="keyboard-key text-[4px] text-zinc-500 py-1 rounded text-center font-bold">F9</div>
                        <div className="keyboard-key text-[4px] text-zinc-500 py-1 rounded text-center">F10</div>
                        <div className="keyboard-key text-[4px] text-zinc-500 py-1 rounded text-center">F11</div>
                        <div className="keyboard-key text-[4px] text-zinc-500 py-1 rounded text-center">F12</div>
                        <div className="keyboard-key text-[4px] text-zinc-500 py-1 rounded text-center col-span-2">del</div>

                        {/* Row 2 */}
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">~</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">1</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">2</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">3</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">4</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">5</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">6</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">7</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">8</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">9</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">0</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">-</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">=</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center col-span-2">del</div>

                        {/* Row 3 */}
                        <div className="keyboard-key text-[4px] py-1 rounded text-center col-span-2">tab</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">Q</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">W</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">E</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">R</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">T</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">Y</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">U</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">I</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">O</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">P</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">[</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">]</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">\</div>

                        {/* Row 4 */}
                        <div className="keyboard-key text-[4px] py-1 rounded text-center col-span-2">caps</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">A</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">S</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">D</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">F</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">G</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">H</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">J</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">K</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">L</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">;</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">&apos;</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center col-span-2">enter</div>

                        {/* Row 5 */}
                        <div className="keyboard-key text-[4px] py-1 rounded text-center col-span-2">shift</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">Z</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">X</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">C</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">V</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">B</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">N</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">M</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">,</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">.</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">/</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center col-span-3">shift</div>

                        {/* Row 6 */}
                        <div className="keyboard-key text-[4px] py-1 rounded text-center font-bold">ctrl</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center font-bold">fn</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center font-bold">opt</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center col-span-2 font-bold">cmd</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center col-span-5 bg-zinc-800"></div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center col-span-2 font-bold">cmd</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center font-bold">opt</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">◀</div>
                        <div className="keyboard-key text-[4px] py-1 rounded text-center">▼</div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto h-full w-[5%] overflow-hidden"><div className="mt-2 flex h-40 gap-[2px] px-[0.5px]" style={{ backgroundImage: 'radial-gradient(circle, #2d2d30 0.5px, transparent 0.5px)', backgroundSize: '3px 3px' }}></div></div>
                </div>
                
                {/* Trackpad */}
                <div className="mx-auto my-2 h-14 w-28 rounded-lg bg-zinc-900 border border-zinc-950 shadow-inner" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TERMINAL RUN SECTION ===== */}
      <section ref={terminalSectionRef} className="relative z-20 bg-black py-32 px-6 border-b border-white/5 flex flex-col items-center">
        <ScrollReveal>
          <div className="max-w-3xl w-full text-center mb-12">
            <span className="text-zinc-500 font-mono text-[10px] mb-3 uppercase tracking-widest block">
              developer console
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              <GlitchText text="Run VYRON straight from your Terminal" />
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {/* Interactive Shell Box in 3D Perspective */}
          <motion.div
            style={{
              boxShadow: '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
              transform: 'scale(1.05) rotateX(20deg)',
              transformStyle: 'preserve-3d',
              y: smoothTerminalFloatY
            }}
            className="w-full max-w-4xl mx-auto rounded-[30px] border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] shadow-2xl overflow-hidden text-left"
          >
            <div className="h-full w-full overflow-hidden rounded-2xl bg-[#09090b] border border-zinc-800">
              {/* Terminal Window chrome */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-[#0f0f12]">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]/80" />
                <div className="w-3 h-3 rounded-full bg-[#eab308]/80" />
                <div className="w-3 h-3 rounded-full bg-[#22c55e]/80" />
                <span className="ml-3 text-[11px] font-mono text-zinc-500 tracking-wider">
                  bash ~ vyron-cli
                </span>
              </div>

              {/* Terminal Lines content */}
              <div className="p-6 font-mono text-sm space-y-3 min-h-[140px] text-zinc-300">
                <div className="flex items-center justify-between bg-black/30 border border-white/5 p-3 rounded-lg">
                  <span className="text-[#a78bfa]">vyron --boot --interface=neural</span>
                  <button
                    onClick={copyToClipboard}
                    className="p-1.5 rounded hover:bg-white/5 text-zinc-500 hover:text-white transition-colors"
                    title="Copy command"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Clipboard className="w-4 h-4" />}
                  </button>
                </div>

                <div className="text-zinc-500 text-xs space-y-1 pt-2">
                  <p># Initialize core visionary reasoning operational neural-network</p>
                  <p># Connecting to local system socket on port 8080...</p>
                  <p># VYRON Neural Interface loaded successfully.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </section>

      {/* ===== MEET VYRON AI / TECH STACK SECTION ===== */}
      <section className="relative z-20 py-32 bg-black overflow-hidden flex flex-col items-center">
        <ScrollReveal>
          {/* Large neon bright glow drop text */}
          <h1
            className="text-6xl md:text-8xl lg:text-[8rem] font-bold tracking-[-0.03em] mb-4 pb-2 select-none text-center flex flex-wrap justify-center"
            style={{ filter: 'drop-shadow(0px 0px 25px rgba(124, 90, 237, 0.55))' }}
          >
            {Array.from("Meet VYRON AI").map((char, index) => (
              <motion.span
                key={index}
                whileHover={{
                  textShadow: "0 0 30px rgba(124, 58, 237, 0.95), 0 0 60px rgba(167, 139, 250, 0.7), 0 0 90px #ffffff",
                  color: "#ffffff",
                  scale: 1.15,
                  y: -12
                }}
                transition={{ type: "spring", stiffness: 350, damping: 12 }}
                className="inline-block cursor-pointer transition-all duration-300 font-black text-zinc-300 hover:text-white"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
          <h2 className="text-2xl md:text-4xl text-zinc-400 font-normal tracking-tight mb-16 text-center px-4">
            The Agentic Assistant Built for the Future
          </h2>
        </ScrollReveal>

        {/* Feature metrics array */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-12 max-w-5xl px-6 w-full mt-8 text-center select-none">
            <div className="space-y-2">
              <div className="text-5xl font-black text-white">24/7</div>
              <div className="text-xs uppercase font-mono text-zinc-500 tracking-widest font-bold">Autonomous</div>
            </div>
            <div className="h-16 w-px bg-white/10 hidden md:block" />
            <div className="space-y-2">
              <div className="text-5xl font-black text-white">&lt;1.5s</div>
              <div className="text-xs uppercase font-mono text-zinc-500 tracking-widest font-bold">Latency</div>
            </div>
            <div className="h-16 w-px bg-white/10 hidden md:block" />
            <div className="space-y-2">
              <div className="text-5xl font-black text-white">128k+</div>
              <div className="text-xs uppercase font-mono text-zinc-500 tracking-widest font-bold">Context Window</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tech stack logo placeholder grid */}
        <div className="w-full max-w-4xl px-6 py-12 mt-20 relative flex flex-col items-center">
          <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-6 font-bold">
            Built with a bleeding-edge modern stack
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-zinc-400 max-w-xl text-center">
            {['Gemini Flash', 'Office Automation', 'Python Voice Automation', 'ADB Bridge', 'CustomTkinter', 'Whisper Core'].map((t, idx) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="px-3.5 py-2 rounded-lg bg-[#0c0c0e] border border-white/5 hover:border-[#7C3AED]/40 hover:text-white transition-colors cursor-pointer"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SYSTEM CAPABILITIES (BENTO GRID) ===== */}
      <section id="systems" className="relative z-20 min-h-screen w-full px-6 md:px-20 py-32 border-t border-white/5 flex flex-col justify-center bg-black">
        <div className="max-w-6xl mx-auto w-full">
          <div className="space-y-4 mb-16 text-left">
            <span className="text-xs font-mono font-bold tracking-widest px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 text-[#a78bfa] uppercase w-max block">
              VYRON_OS // ACTIVE_MODULES
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              <GlitchText text="System Capabilities." />
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-3xl">
              VYRON is not a chatbot; it is a deep-system neural extension. By weaponizing{' '}
              <span className="text-[#a78bfa] font-bold">kernel-level execution hooks</span>,
              autonomous keystroke injection, and a persistent memory matrix, VYRON bridges the gap between
              human thought and OS execution.
            </p>
          </div>

          {/* Bento grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BentoCard
              category="Core Interface"
              title="Always-on-Top Sleek UI"
              desc="Adjustable, drag-and-resize responsive window designed to float seamlessly over your workspace with customizable opacity."
              index={0}
            />
            <BentoCard
              category="Acoustic Stream"
              title="Gemini Live Voice Array"
              desc="High-speed bidirectional audio chat powered by WebSockets to ensure zero lag voice response times under 1.5s."
              index={1}
            />
            <BentoCard
              category="Global Overlays"
              title="System Shortcut Hotkeys"
              desc="Universal hardware keyboard hooks (Ctrl+Alt+V) letting you toggle recording and mute from any background app."
              index={2}
            />
            <BentoCard
              category="Automation"
              title="Direct Keystroke Control"
              desc="Deep local automation utilizing PyAutoGUI for opening apps, triggering scripts, and running keyboard shortcuts hands-free."
              index={3}
            />
            <BentoCard
              category="Security Gates"
              title="Zero-Trust Biometrics"
              desc="Smart camera facial verification registering and checking user identity before sensitive commands run."
              index={4}
            />
            <BentoCard
              category="Diagnostics"
              title="Core Process Logs"
              desc="Robust diagnostics monitoring real-time CPU, RAM, active windows, and secure debug history local logs."
              index={5}
            />
            <BentoCard
              category="Acoustic Alerts"
              title="Voice Reminder Speeches"
              desc="Background task reminders featuring out-loud voice synthesizer feedback, verbally alerting you when scheduling alarms trigger."
              index={6}
            />
            <BentoCard
              category="File Operations"
              title="Word & PDF Conversion"
              desc="Convert documents instantly between DOCX and high-fidelity PDF, preserving structures and layout formatting perfectly."
              index={7}
            />
            <BentoCard
              category="Disk Management"
              title="Silent System Cleaners"
              desc="Silently empty temporary workspace folders and the Recycle Bin using native, high-performance PowerShell routines."
              index={8}
            />
          </div>
        </div>
      </section>

      {/* Payment Activation Gate Modal */}
      <PaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} />
    </div>
  );
}
