import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { GlassPanel, Chip } from "@/components/UI";
import { JsonLd } from "@/components/JsonLd";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/site";
import { graph, ids, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.name} — Case Study`,
    description: project.summary,
    path: `/projects/${project.slug}`,
    ogType: "article",
  });
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const path = `/projects/${project.slug}`;
  const relatedServices = services.filter((s) =>
    s.projects.includes(project.slug),
  );

  return (
    <>
      <JsonLd
        data={graph(
          webPageJsonLd({
            path,
            name: `${project.name} — Case Study | H3M Softwares`,
            description: project.summary,
            crumbs: [
              { name: "Projects", path: "/projects" },
              { name: project.name, path },
            ],
          }),
          {
            "@type": "CreativeWork",
            "@id": `${absoluteUrl(path)}#project`,
            name: project.name,
            headline: project.subtitle,
            description: project.overview,
            abstract: project.summary,
            url: absoluteUrl(path),
            dateCreated: project.date,
            creator: { "@id": ids.organization },
            keywords: project.stack.join(", "),
            mainEntityOfPage: { "@id": `${absoluteUrl(path)}#webpage` },
          },
        )}
      />
      <section className="mx-auto max-w-content px-6 pb-16 pt-20 md:pt-28">
        <Link
          href="/projects"
          className="focus-ring inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All projects
        </Link>

        <p className="mt-8 text-xs text-white/40">{project.date} · {project.role}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          {project.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
          {project.subtitle}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <li key={t}>
              <Chip>{t}</Chip>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-content px-6 pb-16">
        <GlassPanel className="p-7 md:p-10">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {project.overview}
          </p>
        </GlassPanel>
      </section>

      <section className="mx-auto max-w-content px-6 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight">Highlights</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {project.highlights.map((h) => (
            <div key={h} className="flex gap-3 rounded-xl border border-white/[0.06] p-5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-bright" />
              <p className="text-sm leading-relaxed text-white/60">{h}</p>
            </div>
          ))}
        </div>
      </section>

      {project.scale && (
        <section className="mx-auto max-w-content px-6 pb-16">
          <h2 className="text-2xl font-semibold tracking-tight">Scale</h2>
          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-5">
            {project.scale.map((s) => (
              <div key={s.label}>
                <p className="text-sm font-semibold text-white">{s.value}</p>
                <p className="mt-1 text-xs text-white/45">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-content px-6 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight">Tech stack</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {project.techGroups.map((g) => (
            <div key={g.label}>
              <p className="text-sm font-semibold text-white">{g.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {g.items}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          What was hard
        </h2>
        <div className="mt-8 flex flex-col gap-4">
          {project.notes.map((n) => (
            <GlassPanel key={n} className="p-6">
              <p className="text-sm leading-relaxed text-white/60">{n}</p>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-24 md:pb-32">
        <GlassPanel className="flex flex-col gap-6 p-7 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h2 className="text-xl font-semibold">Need something similar?</h2>
            {relatedServices.length > 0 && (
              <p className="mt-2 text-sm text-white/55">
                Related services:{" "}
                {relatedServices.map((s, i) => (
                  <span key={s.slug}>
                    {i > 0 && ", "}
                    <Link
                      href={`/services#${s.slug}`}
                      className="focus-ring text-brand-bright hover:text-white"
                    >
                      {s.title}
                    </Link>
                  </span>
                ))}
              </p>
            )}
          </div>
          <Link
            href="/contact"
            className="focus-ring inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-semibold text-base hover:bg-white/90 md:self-auto"
          >
            Start a project
          </Link>
        </GlassPanel>
      </section>
    </>
  );
}
