import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Keep Vercel preview deployments out of the index.
  if (process.env.VERCEL_ENV === "preview") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: site.url,
  };
}
