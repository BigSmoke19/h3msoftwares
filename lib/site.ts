// Single source of truth for company identity, used by metadata, JSON-LD,
// sitemap, robots, and the manifest. Only verified facts belong here.

const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");

export const site = {
  name: "H3M Softwares",
  shortName: "H3M",
  url: envUrl || "https://h3msoftwares.com",
  defaultTitle: "H3M Softwares | Software Development Company in Lebanon",
  tagline: "Software development company",
  description:
    "H3M Softwares is a software development company based in Lebanon. We build full-stack web platforms, bilingual English/Arabic e-commerce, offline point-of-sale and desktop software, and applied AI/LLM systems, and we run penetration tests and security audits.",
  logo: "/logo.jpg",
  ogImage: { url: "/og-image.png", width: 1200, height: 630 },
  themeColor: "#040E27",
  email: "h3msoftwares@gmail.com",
  phone: { display: "+961 81 076 393", e164: "+96181076393" },
  instagram: {
    handle: "@h3msoftwares",
    url: "https://www.instagram.com/h3msoftwares",
  },
  country: { name: "Lebanon", code: "LB" },
  workingLanguages: ["English", "Arabic"],
} as const;

/** Official profiles of the company itself (not of team members). */
export const sameAs: string[] = [site.instagram.url];

// The root is written without a trailing slash ("https://h3msoftwares.com"),
// matching how Next.js serialises canonical/og:url, so every signal agrees.
export const absoluteUrl = (path = "/") =>
  path === "/" ? site.url : `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
