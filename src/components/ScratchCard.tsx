'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

interface ScratchCardProps {
  onScratched: () => void;
  threshold?: number; // % of area scratched to trigger reveal (0-100)
}

export default function ScratchCard({ onScratched, threshold = 40 }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill with scratch layer
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the "scratch here" text overlay
    ctx.fillStyle = '#7C3AED';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('🎁 SCRATCH TO REVEAL OFFER', canvas.width / 2, canvas.height / 2 - 8);
    ctx.fillStyle = '#a78bfa';
    ctx.font = '9px monospace';
    ctx.fillText('For First 10 Users Only', canvas.width / 2, canvas.height / 2 + 10);

    // Diagonal scratch lines for texture
    ctx.strokeStyle = 'rgba(124,58,237,0.3)';
    ctx.lineWidth = 1;
    for (let i = -canvas.height; i < canvas.width + canvas.height; i += 18) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + canvas.height, canvas.height);
      ctx.stroke();
    }
  }, []);

  const getPos = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if ('touches' in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const scratch = useCallback((x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';

    // Check % revealed
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] < 128) transparent++;
    }
    const total = canvas.width * canvas.height;
    const pct = Math.round((transparent / total) * 100);
    setPercentage(pct);

    if (pct >= threshold && !hasTriggered.current) {
      hasTriggered.current = true;
      setRevealed(true);
      onScratched();
      // Fade out canvas
      canvas.style.transition = 'opacity 0.5s';
      canvas.style.opacity = '0';
    }
  }, [threshold, onScratched]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsScratching(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { x, y } = getPos(e, canvas);
    scratch(x, y);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isScratching) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { x, y } = getPos(e, canvas);
    scratch(x, y);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsScratching(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { x, y } = getPos(e, canvas);
    scratch(x, y);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (!isScratching) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { x, y } = getPos(e, canvas);
    scratch(x, y);
  };

  return (
    <div className="relative w-full select-none">
      {/* Revealed layer (below canvas) */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7C3AED]/20 to-emerald-500/10 border border-[#7C3AED]/30 flex flex-col items-center justify-center gap-1">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">🎉 Special Offer Unlocked</span>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500 text-sm line-through font-mono">₹400</span>
          <span className="text-emerald-400 text-2xl font-black">₹360</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-wider">10% OFF — First 10 Users</span>
      </div>

      {/* Scratch canvas layer */}
      <canvas
        ref={canvasRef}
        width={340}
        height={80}
        className="relative z-10 w-full h-20 rounded-2xl cursor-crosshair touch-none"
        style={{ cursor: revealed ? 'default' : 'crosshair' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => setIsScratching(false)}
        onMouseLeave={() => setIsScratching(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsScratching(false)}
      />

      {/* Progress hint */}
      {!revealed && percentage > 0 && percentage < threshold && (
        <div className="absolute bottom-1 right-2 z-20 text-[9px] font-mono text-zinc-600">
          {percentage}% scratched
        </div>
      )}
    </div>
  );
}
