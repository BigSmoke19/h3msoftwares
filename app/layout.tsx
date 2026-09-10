import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Rails from "@/components/Rails";

export const metadata: Metadata = {
  title: "H3M Softwares — Software development studio",
  description:
    "H3M Softwares builds full-stack web platforms, bilingual e-commerce, offline point-of-sale systems, and applied AI/LLM products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-base text-white antialiased">
        <Rails />
        <NavBar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
