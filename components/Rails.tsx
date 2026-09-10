export default function Rails() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden md:block" aria-hidden>
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-[calc(50%+37rem)] bg-white/[0.06]" />
      <div className="absolute inset-y-0 left-1/2 w-px translate-x-[calc(-50%+37rem)] bg-white/[0.06]" />
    </div>
  );
}
