'use client'
import { motion } from 'framer-motion';
export default function NeuralCore() {
  return (
    <div className="relative w-72 h-72 flex items-center justify-center mx-auto">
      {/* Ring 1 — slow rotate */}
      <motion.div className="absolute w-64 h-64 rounded-full
        border border-violet-500/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}>
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2
          w-3 h-3 rounded-full bg-violet-400
          shadow-[0_0_12px_4px_#7C3AED]" />
      </motion.div>
      {/* Ring 2 — tilted, reverse */}
      <motion.div className="absolute w-48 h-48 rounded-full
        border border-yellow-500/25"
        style={{ transform:'rotateX(55deg)' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}>
        <div className="absolute -top-1 left-1/2 -translate-x-1/2
          w-2 h-2 rounded-full bg-yellow-400
          shadow-[0_0_10px_3px_#F59E0B]" />
      </motion.div>
      {/* Ring 3 — inner, side tilt */}
      <motion.div className="absolute w-32 h-32 rounded-full
        border border-violet-400/30"
        style={{ transform:'rotateY(55deg)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}>
        <div className="absolute -top-1 left-1/2 -translate-x-1/2
          w-1.5 h-1.5 rounded-full bg-violet-300" />
      </motion.div>
      {/* Core orb */}
      <motion.div
        className="w-20 h-20 rounded-full z-10 flex items-center justify-center
          bg-gradient-to-br from-violet-500 to-violet-900"
        animate={{
          boxShadow: [
            '0 0 25px 8px #7C3AED60',
            '0 0 55px 16px #7C3AEDaa',
            '0 0 25px 8px #7C3AED60'
          ],
          scale: [1, 1.06, 1]
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}>
        <span className="text-3xl">⚡</span>
      </motion.div>
      {/* Orbiting sparks */}
      {[0,1,2,3,4,5].map(i => (
        <motion.div key={i}
          className="absolute w-1 h-1 rounded-full bg-yellow-300"
          animate={{
            x: [0, Math.cos(i*60*Math.PI/180)*85, 0],
            y: [0, Math.sin(i*60*Math.PI/180)*85, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 2.5, repeat: Infinity,
            delay: i * 0.42, ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
}
