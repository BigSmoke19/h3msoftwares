import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-content flex-col items-start px-6 py-32">
      <p className="text-sm text-brand-bright">
        <span className="bracket">&lt;</span> 404{" "}
        <span className="bracket">/&gt;</span>
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        This page doesn't exist.
      </h1>
      <p className="mt-4 text-sm text-white/55">
        Check the address, or head back to the homepage.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-base hover:bg-white/90"
      >
        Back home
      </Link>
    </section>
  );
}
