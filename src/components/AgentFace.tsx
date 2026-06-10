'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type OrbState = 'idle' | 'listening' | 'processing' | 'speaking';

export default function AgentFace() {
  const [state, setState] = useState<OrbState>('idle');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Mouse coordinates tracking (lerped for smooth inertia)
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      
      // Normalized coordinates from -1 to 1
      const dx = (e.clientX - cx) / (window.innerWidth / 2);
      const dy = (e.clientY - cy) / (window.innerHeight / 2);
      
      // Limit to max offset
      mouseRef.current = {
        x: Math.max(-1, Math.min(1, dx)),
        y: Math.max(-1, Math.min(1, dy)),
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Main Canvas rendering loop (60 FPS)
  useEffect(() => {
    let animId: number;
    let rotation = 0;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Smooth lerp for mouse coordinates
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.08;
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.08;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Define state-dependent styling
      let primaryGlow = 'rgba(124, 58, 237, 0.5)';
      let secondaryGlow = 'rgba(91, 33, 182, 0.3)';
      let irisColor = '#7C3AED';
      let accentColor = '#a78bfa';
      let speedFactor = 1.0;

      if (state === 'listening') {
        primaryGlow = 'rgba(16, 185, 129, 0.6)';
        secondaryGlow = 'rgba(4, 120, 87, 0.3)';
        irisColor = '#10B981';
        accentColor = '#34d399';
        speedFactor = 2.5;
      } else if (state === 'processing') {
        primaryGlow = 'rgba(236, 72, 153, 0.6)';
        secondaryGlow = 'rgba(190, 24, 74, 0.3)';
        irisColor = '#EC4899';
        accentColor = '#f472b6';
        speedFactor = 4.0;
      } else if (state === 'speaking') {
        // Multi-color dynamic rotation
        const hue = (Date.now() / 15) % 360;
        primaryGlow = `hsla(${hue}, 80%, 60%, 0.6)`;
        secondaryGlow = `hsla(${hue}, 80%, 40%, 0.3)`;
        irisColor = `hsl(${hue}, 80%, 55%)`;
        accentColor = `hsl(${hue}, 80%, 70%)`;
        speedFactor = 2.0;
      }

      rotation += 0.015 * speedFactor;

      const mx = currentRef.current.x;
      const my = currentRef.current.y;

      // ----------------------------------------------------
      // DRAW LAYER 1: Deep Holographic Background Glow
      // ----------------------------------------------------
      ctx.save();
      const bgGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, 140);
      bgGlow.addColorStop(0, primaryGlow.replace('0.6', '0.2').replace('0.5', '0.2'));
      bgGlow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = bgGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 140, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // ----------------------------------------------------
      // DRAW LAYER 2: Parallax Floating Particles
      // ----------------------------------------------------
      ctx.save();
      ctx.strokeStyle = primaryGlow.replace('0.6', '0.25').replace('0.5', '0.25');
      ctx.lineWidth = 1;
      const numParticles = 8;
      for (let i = 0; i < numParticles; i++) {
        const angle = (i * Math.PI * 2) / numParticles + rotation * 0.2;
        const dist = 100 + Math.sin(rotation + i) * 8;
        // Parallax offset: particles move slightly opposite to mouse
        const px = cx + Math.cos(angle) * dist - mx * 10;
        const py = cy + Math.sin(angle) * dist - my * 10;
        
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = irisColor;
        ctx.fill();
      }
      ctx.restore();

      // ----------------------------------------------------
      // DRAW LAYER 3: Outer Rotating Hologram Cyber-Ring
      // ----------------------------------------------------
      ctx.save();
      ctx.translate(cx - mx * 8, cy - my * 8); // subtle parallax
      ctx.rotate(rotation);
      ctx.strokeStyle = primaryGlow.replace('0.6', '0.35').replace('0.5', '0.35');
      ctx.lineWidth = 2.5;
      
      // Outer ring with gaps
      ctx.beginPath();
      ctx.arc(0, 0, 115, 0, Math.PI * 0.4);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, 115, Math.PI * 0.6, Math.PI * 1.1);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, 115, Math.PI * 1.3, Math.PI * 1.8);
      ctx.stroke();
      
      // Inner rotating dashed ring
      ctx.strokeStyle = secondaryGlow;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 12]);
      ctx.beginPath();
      ctx.arc(0, 0, 105, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // ----------------------------------------------------
      // DRAW LAYER 4: 3D Holographic Head Wireframe (Perspective)
      // ----------------------------------------------------
      ctx.save();
      const headRadius = 80;
      // Head center shifts with mouse for 3D depth/neck movement!
      const hx = cx + mx * 16;
      const hy = cy + my * 16;

      // Inner sphere base glow
      const headGlow = ctx.createRadialGradient(hx, hy, headRadius * 0.2, hx, hy, headRadius);
      headGlow.addColorStop(0, primaryGlow.replace('0.6', '0.15').replace('0.5', '0.15'));
      headGlow.addColorStop(1, 'rgba(10, 10, 12, 0.9)');
      ctx.fillStyle = headGlow;
      ctx.beginPath();
      ctx.arc(hx, hy, headRadius, 0, Math.PI * 2);
      ctx.fill();

      // Outer head ring border
      ctx.strokeStyle = primaryGlow.replace('0.6', '0.45').replace('0.5', '0.45');
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(hx, hy, headRadius, 0, Math.PI * 2);
      ctx.stroke();

      // 3D Latitudes (horizontal wireframe ellipses curving based on mouse Y)
      ctx.strokeStyle = primaryGlow.replace('0.6', '0.2').replace('0.5', '0.2');
      ctx.lineWidth = 0.8;
      [-0.5, 0, 0.5].forEach((offset) => {
        ctx.beginPath();
        const yOffset = offset * headRadius;
        const curvyHeight = headRadius * 0.3 * (-my); // curve amount based on looking up/down
        ctx.ellipse(hx, hy + yOffset, headRadius * Math.cos(offset * Math.PI / 3), Math.abs(curvyHeight), 0, 0, Math.PI * 2);
        ctx.stroke();
      });

      // 3D Longitudes (vertical wireframe ellipses curving based on mouse X)
      [-0.5, 0, 0.5].forEach((offset) => {
        ctx.beginPath();
        const xOffset = offset * headRadius;
        const curvyWidth = headRadius * 0.3 * (-mx); // curve amount based on looking left/right
        ctx.ellipse(hx + xOffset, hy, Math.abs(curvyWidth), headRadius * Math.cos(offset * Math.PI / 3), 0, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.restore();

      // ----------------------------------------------------
      // DRAW LAYER 5: 3D Tracking Glowing Iris (Cybernetic Eye)
      // ----------------------------------------------------
      ctx.save();
      const eyeRadius = 32;
      // Eye center shifts faster than head center for 3D parallax depth!
      const ex = cx + mx * 34;
      const ey = cy + my * 34;

      // Iris outer glow
      const irisGlow = ctx.createRadialGradient(ex, ey, 2, ex, ey, eyeRadius);
      irisGlow.addColorStop(0, '#ffffff');
      irisGlow.addColorStop(0.4, accentColor);
      irisGlow.addColorStop(0.8, irisColor);
      irisGlow.addColorStop(1, 'rgba(0,0,0,0)');
      
      ctx.fillStyle = irisGlow;
      ctx.beginPath();
      ctx.arc(ex, ey, eyeRadius, 0, Math.PI * 2);
      ctx.fill();

      // Cybernetic targeting crosshairs inside the eye
      ctx.strokeStyle = primaryGlow.replace('0.6', '0.8').replace('0.5', '0.8');
      ctx.lineWidth = 1;
      const crossSize = 14;
      
      // Horizontal crosshair
      ctx.beginPath();
      ctx.moveTo(ex - crossSize, ey);
      ctx.lineTo(ex + crossSize, ey);
      ctx.stroke();
      
      // Vertical crosshair
      ctx.beginPath();
      ctx.moveTo(ex, ey - crossSize);
      ctx.lineTo(ex, ey + crossSize);
      ctx.stroke();

      // Outer iris border
      ctx.beginPath();
      ctx.arc(ex, ey, eyeRadius - 4, 0, Math.PI * 2);
      ctx.stroke();

      // ----------------------------------------------------
      // DRAW LAYER 6: 3D Tracking Central Pupil & Spark
      // ----------------------------------------------------
      // Pupil shifts even faster for deep spatial perspective!
      const px = cx + mx * 44;
      const py = cy + my * 44;

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fill();

      // Glowing lens flare/reflection dot
      ctx.fillStyle = '#rgba(255, 255, 255, 0.85)';
      ctx.beginPath();
      ctx.arc(px - 3, py - 3, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [state]);

  return (
    <div className="flex flex-col items-center justify-center gap-10 select-none py-12 relative w-full max-w-lg mx-auto">
      {/* 3D Cyber Agent Stage */}
      <div className="relative w-80 h-80 flex items-center justify-center">
        
        {/* Soft background glow lamp */}
        <AnimatePresence mode="wait">
          <motion.div
            key={state}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`absolute w-72 h-72 rounded-full blur-3xl filter opacity-40 z-0 pointer-events-none transition-colors duration-700 ${
              state === 'idle' ? 'bg-violet-600/50' :
              state === 'listening' ? 'bg-emerald-500/60' :
              state === 'processing' ? 'bg-pink-500/60' :
              'bg-gradient-to-r from-violet-600 via-emerald-500 to-blue-500'
            }`}
          />
        </AnimatePresence>

        {/* Cyber-Eye Canvas */}
        <canvas
          ref={canvasRef}
          width={320}
          height={320}
          className="z-20 cursor-pointer drop-shadow-[0_0_20px_rgba(124,58,237,0.35)] hover:drop-shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300"
          onClick={() => {
            const cycle: OrbState[] = ['idle', 'listening', 'processing', 'speaking'];
            const nextIdx = (cycle.indexOf(state) + 1) % cycle.length;
            setState(cycle[nextIdx]);
          }}
        />
      </div>

      {/* Cyber-Controller Segments */}
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
