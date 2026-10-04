import type { Metadata } from "next";
import { absoluteUrl, sameAs, site } from "./site";
import { team } from "@/data/team";

type PageMeta = {
  /** Page title without the brand suffix (the layout template adds it). */
  title?: string;
  description: string;
  /** Path starting with "/", e.g. "/services". */
  path: string;
  ogType?: "website" | "article" | "profile";
};

export function pageMetadata({
  title,
  description,
  path,
  ogType = "website",
}: PageMeta): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : site.defaultTitle;
  const images = [
    { ...site.ogImage, alt: `${site.name} — ${site.tagline}` },
  ];
  return {
    title: title ? title : { absolute: site.defaultTitle },
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: ogType,
      siteName: site.name,
      locale: "en_US",
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images.map((i) => i.url),
    },
  };
}

/* ---------- JSON-LD ---------- */

export const ids = {
  organization: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  person: (slug: string) => `${site.url}/team#${slug}`,
};

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": ids.organization,
    name: site.name,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(site.logo),
      width: 1254,
      height: 1254,
    },
    image: absoluteUrl(site.ogImage.url),
    description: site.description,
    email: site.email,
    telephone: site.phone.e164,
    address: {
      "@type": "PostalAddress",
      addressCountry: site.country.code,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      telephone: site.phone.e164,
      availableLanguage: [...site.workingLanguages],
    },
    founder: team
      .filter((m) => m.role.includes("Co-Founder"))
      .map((m) => ({ "@type": "Person", "@id": ids.person(m.slug), name: m.name })),
    knowsAbout: [
      "Custom software development",
      "Web application development",
      "E-commerce development",
      "Point-of-sale software",
      "Desktop application development",
      "Retrieval-augmented generation",
      "AI agents",
      "Penetration testing",
      "Application security",
    ],
    sameAs,
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    name: site.name,
    url: absoluteUrl("/"),
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": ids.organization },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function webPageJsonLd({
  path,
  name,
  description,
  type = "WebPage",
  crumbs,
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ProfilePage";
  crumbs?: Crumb[];
}) {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.organization },
    ...(crumbs ? { breadcrumb: breadcrumbJsonLd(crumbs) } : {}),
  };
}

/** Wraps one or more nodes into a single JSON-LD document. */
export const graph = (...nodes: object[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});
