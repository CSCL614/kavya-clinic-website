"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname  = usePathname();
  // Store lenis instance so we can pause during transitions and reset on route change
  const lenisRef  = useRef<import("lenis").default | null>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    let lenis: import("lenis").default;

    async function init() {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({
        duration:    1.1,
        easing:      (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      }

      rafRef.current = requestAnimationFrame(raf);
    }

    init();

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  /* ── Scroll-to-top & reset Lenis on route change ─── */
  useEffect(() => {
    // Immediately scroll native to top (before Lenis picks it up)
    window.scrollTo({ top: 0, behavior: "instant" });
    // Also tell Lenis to reset its scroll position tracking
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return <>{children}</>;
}
