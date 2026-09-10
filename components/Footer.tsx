import Link from "next/link";
import { Mail, Phone, Instagram } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06]">
      <div className="mx-auto max-w-content px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              A software development studio building web platforms,
              e-commerce, point-of-sale systems, and applied AI products.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                Site
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/60">
                <li><Link href="/about" className="focus-ring hover:text-white">About</Link></li>
                <li><Link href="/services" className="focus-ring hover:text-white">Services</Link></li>
                <li><Link href="/projects" className="focus-ring hover:text-white">Projects</Link></li>
                <li><Link href="/team" className="focus-ring hover:text-white">Team</Link></li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                Contact
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/60">
                <li>
                  <a
                    href="mailto:h3msoftwares@gmail.com"
                    className="focus-ring inline-flex items-center gap-2 hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5" /> h3msoftwares@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+96181076393"
                    className="focus-ring inline-flex items-center gap-2 hover:text-white"
                  >
                    <Phone className="h-3.5 w-3.5" /> +961 81 076 393
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/h3msoftwares"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-2 hover:text-white"
                  >
                    <Instagram className="h-3.5 w-3.5" /> @h3msoftwares
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} H3M Softwares. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
