import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader, GlassPanel, Chip } from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/site";
import { graph, ids, pageMetadata, webPageJsonLd } from "@/lib/seo";

const description =
  "Software development services from H3M Softwares: full-stack web platforms, bilingual EN/AR e-commerce, offline point-of-sale and desktop software, applied AI/LLM systems, access control, and penetration testing.";

export const metadata = pageMetadata({
  title: "Software Development Services",
  description,
  path: "/services",
});

const projectName = (slug: string) =>
  projects.find((p) => p.slug === slug)?.name;

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageJsonLd({
            path: "/services",
            name: "Software Development Services | H3M Softwares",
            description,
            crumbs: [{ name: "Services", path: "/services" }],
          }),
          {
            "@type": "ItemList",
            name: "H3M Softwares services",
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                "@id": absoluteUrl(`/services#${s.slug}`),
                name: s.title,
                description: s.description,
                serviceType: s.title,
                url: absoluteUrl(`/services#${s.slug}`),
                provider: { "@id": ids.organization },
              },
            })),
          },
        )}
      />

      <PageHeader
        kicker="services"
        title="Built end to end, not handed off in pieces."
        description="H3M Softwares designs, builds, and ships custom software. Each service below is a full slice of work we've already delivered — not a menu of buzzwords."
      />

      <section className="mx-auto max-w-content px-6 pb-24 md:pb-32">
        <div className="flex flex-col gap-6">
          {services.map((s) => (
            <article key={s.slug} id={s.slug} className="scroll-mt-24">
              <GlassPanel className="grid gap-8 p-7 md:grid-cols-[1fr_1.1fr] md:p-10">
                <div>
                  <s.icon className="h-6 w-6 text-brand-bright" />
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {s.description}
                  </p>
                  {s.projects.length > 0 && (
                    <p className="mt-4 text-sm text-white/45">
                      See it in practice:{" "}
                      {s.projects.map((slug, i) => (
                        <span key={slug}>
                          {i > 0 && ", "}
                          <Link
                            href={`/projects/${slug}`}
                            className="focus-ring text-brand-bright hover:text-white"
                          >
                            {projectName(slug)}
                          </Link>
                        </span>
                      ))}
                    </p>
                  )}
                </div>
                <ul className="flex flex-wrap content-start gap-2.5 md:justify-end">
                  {s.includes.map((i) => (
                    <li key={i}>
                      <Chip>{i}</Chip>
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-base hover:bg-white/90"
          >
            Discuss a project <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/projects"
            className="focus-ring text-sm font-medium text-brand-bright hover:text-white"
          >
            Browse our case studies
          </Link>
        </div>
      </section>
    </>
  );
}
