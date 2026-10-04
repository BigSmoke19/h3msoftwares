import { Mail, Phone, Instagram } from "lucide-react";
import { PageHeader, GlassPanel } from "@/components/UI";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { graph, pageMetadata, webPageJsonLd } from "@/lib/seo";

const description =
  "Contact H3M Softwares to discuss a software project. Use the contact form, email h3msoftwares@gmail.com, or call +961 81 076 393.";

export const metadata = pageMetadata({
  title: "Contact Us",
  description,
  path: "/contact",
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone.display,
    href: `tel:${site.phone.e164}`,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: site.instagram.handle,
    href: site.instagram.url,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageJsonLd({
            path: "/contact",
            name: "Contact Us | H3M Softwares",
            description,
            type: "ContactPage",
            crumbs: [{ name: "Contact", path: "/contact" }],
          }),
        )}
      />

      <PageHeader
        kicker="contact"
        title="Let's talk about what you're building."
        description="Use the form, email, or call and describe the problem — the platform, the language mix, whether it needs to work offline. We'll follow up with what it would take to build."
      />

      <section className="mx-auto max-w-content px-6 pb-24 md:pb-32">
        <GlassPanel className="mb-6 p-6 md:p-10">
          <ContactForm />
        </GlassPanel>

        <div className="grid gap-6 md:grid-cols-2">
          {channels.map((c) => {
            const content = (
              <GlassPanel className="flex h-full items-center gap-4 p-6 transition-colors hover:bg-white/[0.035]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <c.icon className="h-5 w-5 text-brand-bright" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-white/40">{c.label}</p>
                  <p className="mt-0.5 break-all text-base font-medium text-white">
                    {c.value}
                  </p>
                </div>
              </GlassPanel>
            );

            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="focus-ring block"
              >
                {content}
              </a>
            ) : (
              <div key={c.label}>{content}</div>
            );
          })}
        </div>

        <GlassPanel className="mt-6 p-7 md:p-10">
          <h2 className="text-lg font-semibold">What to include</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
            A short note on the business, the problem the software needs to
            solve, and any hard constraints — offline use, a bilingual
            customer base, an existing system it needs to fit into — is
            enough to start a real conversation. We'll reply from{" "}
            <a
              href="mailto:h3msoftwares@gmail.com"
              className="focus-ring text-brand-bright hover:text-white"
            >
              h3msoftwares@gmail.com
            </a>
            .
          </p>
        </GlassPanel>
      </section>
    </>
  );
}
