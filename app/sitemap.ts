import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { projects } from "@/data/projects";

const staticRoutes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/projects", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/team", priority: 0.6 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((r) => ({
      url: absoluteUrl(r.path),
      changeFrequency: "monthly" as const,
      priority: r.priority,
    })),
    ...projects.map((p) => ({
      url: absoluteUrl(`/projects/${p.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
