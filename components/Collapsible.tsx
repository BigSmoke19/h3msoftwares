"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

const COLLAPSED_HEIGHT = 420;
const FADE = "linear-gradient(to bottom, black 70%, transparent)";

export function Collapsible({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setOverflows(el.scrollHeight > COLLAPSED_HEIGHT + 40);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const clamped = overflows && !open;

  return (
    <div>
      <div
        ref={ref}
        className="overflow-hidden"
        style={
          clamped
            ? {
                maxHeight: COLLAPSED_HEIGHT,
                maskImage: FADE,
                WebkitMaskImage: FADE,
              }
            : undefined
        }
      >
        {children}
      </div>
      {overflows && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="focus-ring mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
        >
          {open ? "Show less" : "Show more"}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
}
