'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check if the device is a mobile device to tweak parameters
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ultra-smooth Apple easeOutExpo curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset scroll and update Lenis size on pathname changes
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      // Short delay to let the DOM update before recalculating heights
      const timer = setTimeout(() => {
        if (lenisRef.current) {
          lenisRef.current.resize();
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return <>{children}</>;
}
