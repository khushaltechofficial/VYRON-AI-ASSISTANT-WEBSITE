'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type OrbState = 'idle' | 'listening' | 'processing' | 'speaking';

export default function IrisOrb() {
  const [state, setState] = useState<OrbState>('idle');

  // Animation variants for the core blob
  const coreVariants: any = {
    idle: {
      scale: 1,
      borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%',
      rotate: 0,
      background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
      boxShadow: '0 0 40px 15px rgba(124, 58, 237, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)',
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'easeInOut',
      },
    },
    listening: {
      scale: [1, 1.15, 0.95, 1.1, 1],
      borderRadius: [
        '45% 55% 50% 50% / 50% 50% 50% 50%',
        '30% 70% 70% 30% / 50% 30% 70% 50%',
        '65% 35% 40% 60% / 40% 60% 40% 60%',
        '40% 60% 60% 40% / 50% 50% 50% 50%',
      ],
      rotate: 360,
      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      boxShadow: '0 0 50px 25px rgba(16, 185, 129, 0.6), inset 0 0 25px rgba(255, 255, 255, 0.3)',
      transition: {
        scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        borderRadius: { duration: 2.2, repeat: Infinity, ease: 'linear' },
        rotate: { duration: 5, repeat: Infinity, ease: 'linear' },
      },
    },
    processing: {
      scale: 0.9,
      borderRadius: '50%',
      rotate: -360,
      background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
      boxShadow: '0 0 45px 20px rgba(236, 72, 153, 0.55), inset 0 0 15px rgba(255, 255, 255, 0.2)',
      transition: {
        rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
        scale: { duration: 0.8, repeat: Infinity, repeatType: 'reverse' as const, ease: 'easeInOut' },
      },
    },
    speaking: {
      scale: [1, 1.25, 0.85, 1.3, 0.95, 1.1, 1],
      borderRadius: [
        '50%',
        '40% 60% 55% 45% / 45% 55% 50% 50%',
        '60% 40% 45% 55% / 55% 45% 50% 50%',
        '50%',
      ],
      rotate: 180,
      background: 'linear-gradient(135deg, #7C3AED 0%, #10B981 50%, #3B82F6 100%)',
      boxShadow: '0 0 60px 30px rgba(124, 58, 237, 0.5), 0 0 40px 10px rgba(16, 185, 129, 0.3)',
      transition: {
        scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        borderRadius: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
      },
    },
  };

  // Outer ring rotation speeds
  const ringRotations = {
    idle: 25,
    listening: 10,
    processing: 4,
    speaking: 8,
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 select-none py-12 relative w-full max-w-lg mx-auto">
      {/* Orb Stage Canvas Wrapper */}
      <div className="relative w-80 h-80 flex items-center justify-center">
        
        {/* Deep background glow blur */}
        <AnimatePresence mode="wait">
          <motion.div
            key={state}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`absolute w-72 h-72 rounded-full blur-3xl filter opacity-45 z-0 pointer-events-none transition-colors duration-700 ${
              state === 'idle' ? 'bg-violet-600/50' :
              state === 'listening' ? 'bg-emerald-500/60' :
              state === 'processing' ? 'bg-pink-500/60' :
              'bg-gradient-to-r from-violet-600 via-emerald-500 to-blue-500'
            }`}
          />
        </AnimatePresence>

        {/* Concentric Circle Orbit 1 (Outer Ring) */}
        <motion.div
          className={`absolute w-[280px] h-[280px] rounded-full border border-dashed z-10 opacity-30 ${
            state === 'listening' ? 'border-emerald-500' :
            state === 'processing' ? 'border-pink-500' :
            'border-violet-500'
          }`}
          animate={{ rotate: 360 }}
          transition={{
            duration: ringRotations[state],
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Concentric Circle Orbit 2 (Inner Ring, reversed) */}
        <motion.div
          className={`absolute w-[220px] h-[220px] rounded-full border border-double border-spacing-2 z-10 opacity-40 ${
            state === 'listening' ? 'border-emerald-400' :
            state === 'processing' ? 'border-pink-400' :
            'border-violet-400'
          }`}
          animate={{ rotate: -360 }}
          transition={{
            duration: ringRotations[state] * 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Floating Ring Sparks */}
        <AnimatePresence>
          {state === 'listening' && (
            <>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
                <motion.div
                  key={idx}
                  className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0.2, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                    x: [0, Math.cos((angle * Math.PI) / 180) * 140],
                    y: [0, Math.sin((angle * Math.PI) / 180) * 140],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.25,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Active sound pings (Speaking Waves) */}
        <AnimatePresence>
          {state === 'speaking' && (
            <>
              {[1.2, 1.5, 1.8].map((scaleVal, index) => (
                <motion.div
                  key={index}
                  className="absolute w-52 h-52 rounded-full border border-violet-500/25 pointer-events-none z-10"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: scaleVal, opacity: 0 }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: index * 0.6,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Core Operational AI Orb */}
        <motion.div
          variants={coreVariants}
          animate={state}
          className="relative w-44 h-44 z-20 cursor-pointer flex items-center justify-center text-white"
          onClick={() => {
            // Cycle through states on center click
            const cycle: OrbState[] = ['idle', 'listening', 'processing', 'speaking'];
            const nextIdx = (cycle.indexOf(state) + 1) % cycle.length;
            setState(cycle[nextIdx]);
          }}
        >
          {/* Inner pulsating glow spark */}
          <motion.div
            className="w-10 h-10 rounded-full bg-white opacity-20 filter blur-sm"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Core State Icon Overlay */}
          <span className="absolute text-sm font-mono tracking-widest text-white/80 font-black uppercase text-center pointer-events-none drop-shadow-md">
            {state === 'idle' && 'idle'}
            {state === 'listening' && 'active'}
            {state === 'processing' && 'thinking'}
            {state === 'speaking' && 'speaking'}
          </span>
        </motion.div>
      </div>

      {/* Controller Buttons to select state manually */}
      <div className="flex items-center gap-3 bg-[#0a0a0c]/85 border border-[#7C3AED]/20 px-4 py-2.5 rounded-full backdrop-blur-md shadow-2xl relative z-30">
        {(['idle', 'listening', 'processing', 'speaking'] as OrbState[]).map((s) => (
          <button
            key={s}
            onClick={() => setState(s)}
            className={`px-4.5 py-2 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase transition-all duration-300 ${
              state === s
                ? s === 'idle'
                  ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                  : s === 'listening'
                  ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)] font-extrabold'
                  : s === 'processing'
                  ? 'bg-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]'
                  : 'bg-gradient-to-r from-violet-600 to-emerald-500 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
