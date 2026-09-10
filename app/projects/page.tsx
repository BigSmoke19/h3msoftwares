import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader, GlassPanel, Chip } from "@/components/UI";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        kicker="projects"
        title="Work we've shipped."
        description="A closer look at two production systems we built end to end — the constraints, the architecture, and what was actually hard about them."
      />

      <section className="mx-auto max-w-content px-6 pb-24 md:pb-32">
        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group focus-ring block">
              <GlassPanel className="p-7 transition-colors group-hover:bg-white/[0.035] md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-xl">
                    <p className="text-xs text-white/40">{p.date} · {p.role}</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                      {p.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {p.subtitle}
                    </p>
                  </div>
                  <span className="focus-ring inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-brand-bright group-hover:text-white">
                    View project <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </GlassPanel>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
