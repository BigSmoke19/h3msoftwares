import Link from "next/link";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/lib/site";

const siteLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06]">
      <div className="mx-auto max-w-content px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              H3M Softwares is a software development company building web
              platforms, e-commerce, point-of-sale systems, and applied AI
              products.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <nav aria-label="Footer">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                Site
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/60">
                {siteLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="focus-ring hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                Contact
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/60">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="focus-ring inline-flex items-center gap-2 break-all hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" /> {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phone.e164}`}
                    className="focus-ring inline-flex items-center gap-2 hover:text-white"
                  >
                    <Phone className="h-3.5 w-3.5" /> {site.phone.display}
                  </a>
                </li>
                <li>
                  <a
                    href={site.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-2 hover:text-white"
                  >
                    <Instagram className="h-3.5 w-3.5" /> {site.instagram.handle}
                  </a>
                </li>
                <li className="inline-flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" /> Based in {site.country.name}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
