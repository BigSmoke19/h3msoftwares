import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-1.5 font-bold tracking-tight focus-ring ${className}`}
      aria-label="H3M Softwares — home"
    >
      <span className="text-brand transition-transform duration-300 group-hover:-translate-x-0.5">
        &lt;
      </span>
      <span className="text-white">
        H<span className="text-brand">3</span>M
      </span>
      <span className="text-brand transition-transform duration-300 group-hover:translate-x-0.5">
        &gt;
      </span>
    </Link>
  );
}
