import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { GlassPanel, Chip } from "@/components/UI";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — H3M Softwares`,
    description: project.summary,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
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

        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
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

      <section className="mx-auto max-w-content px-6 pb-24 md:pb-32">
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
    </>
  );
}
