"use client";

import { useEffect, useRef } from "react";

/** Thin bar along the bottom edge of the header that fills as the page scrolls. */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const progress = max > 0 ? Math.min(1, el.scrollTop / max) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 -bottom-px h-0.5"
    >
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-brand to-brand-bright"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
