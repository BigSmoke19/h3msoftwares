import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Rails from "@/components/Rails";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import {
  graph,
  organizationJsonLd,
  pageMetadata,
  websiteJsonLd,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const verification: Metadata["verification"] = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
    ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
    : undefined,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata({ description: site.description, path: "/" }),
  title: { default: site.defaultTitle, template: `%s | ${site.name}` },
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  formatDetection: { telephone: false, email: false, address: false },
  verification,
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="relative min-h-screen overflow-x-hidden bg-base text-white antialiased">
        <JsonLd data={graph(organizationJsonLd(), websiteJsonLd())} />
        <Rails />
        <NavBar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
