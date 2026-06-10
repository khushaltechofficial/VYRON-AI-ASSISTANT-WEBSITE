'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function GlitchText({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*<>[]{}';

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const totalFrames = 24; 
    const interval = 20; 
    
    const scramble = setInterval(() => {
      frame++;
      
      const scrambled = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          
          const progress = index / text.length;
          if (frame / totalFrames > progress + 0.15) {
            return char;
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
        
      setDisplayText(scrambled);
      
      if (frame >= totalFrames + 8) {
        clearInterval(scramble);
        setDisplayText(text);
      }
    }, interval);

    return () => clearInterval(scramble);
  }, [text, isInView]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}
