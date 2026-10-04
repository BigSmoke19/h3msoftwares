import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/services", label: "Software development services" },
  { href: "/projects", label: "Projects & case studies" },
  { href: "/about", label: "About H3M Softwares" },
  { href: "/contact", label: "Contact us" },
];

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-content flex-col items-start px-6 py-32">
      <p className="text-sm text-brand-bright">
        <span className="bracket" aria-hidden>&lt;</span> 404{" "}
        <span className="bracket" aria-hidden>/&gt;</span>
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        This page doesn't exist.
      </h1>
      <p className="mt-4 text-sm text-white/55">
        Check the address, or try one of these pages instead.
      </p>
      <ul className="mt-6 flex flex-col gap-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="focus-ring text-brand-bright hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-base hover:bg-white/90"
      >
        Back home
      </Link>
    </section>
  );
}
