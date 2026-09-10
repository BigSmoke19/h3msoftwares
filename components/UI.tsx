export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70">
      {children}
    </span>
  );
}

export function GlassPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`liquid-glass rounded-2xl ${className}`}>{children}</div>
  );
}

export function PageHeader({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-content px-6 pb-16 pt-20 md:pt-28">
      <p className="text-sm text-brand-bright">
        <span className="bracket">&lt;</span> {kicker}{" "}
        <span className="bracket">/&gt;</span>
      </p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
          {description}
        </p>
      )}
    </div>
  );
}
