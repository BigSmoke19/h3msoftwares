import { Mail } from "lucide-react";
import { PageHeader, GlassPanel, Chip } from "@/components/UI";
import { team } from "@/data/team";

export default function TeamPage() {
  return (
    <>
      <PageHeader
        kicker="team"
        title="The people building it."
        description="H3M Softwares is small on purpose — every project gets direct access to the engineer actually writing the code."
      />

      <section className="mx-auto max-w-content px-6 pb-24 md:pb-32">
        {team.map((m) => (
          <GlassPanel key={m.slug} className="p-7 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {m.name}
                </h2>
                <p className="mt-1.5 text-sm text-brand-bright">{m.role}</p>
                {m.location && (
                  <p className="mt-1 text-xs text-white/40">{m.location}</p>
                )}
                {m.links && m.links.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-3">
                    {m.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring text-xs text-white/50 hover:text-white"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {m.email && (
                <a
                  href={`mailto:${m.email}`}
                  className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/5"
                >
                  <Mail className="h-4 w-4" /> {m.email}
                </a>
              )}
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60">
              {m.about}
            </p>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-white/45">
                  Experience
                </h3>
                <div className="mt-4 flex flex-col gap-4">
                  {m.experience.map((e) => (
                    <div key={e.title}>
                      <p className="text-sm font-medium text-white">{e.title}</p>
                      {e.period && (
                        <p className="text-xs text-white/40">{e.period}</p>
                      )}
                      <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                        {e.description}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="mt-8 text-sm font-semibold text-white/45">
                  Education
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {m.education.map((e) => (
                    <div key={e.degree}>
                      <p className="text-sm font-medium text-white">{e.degree}</p>
                      {(e.school || e.period) && (
                        <p className="text-xs text-white/45">
                          {e.school}
                          {e.school && e.period ? " · " : ""}
                          {e.period}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {m.projects.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-white/45">
                    Selected projects
                  </h3>
                  <div className="mt-4 flex flex-col gap-4">
                    {m.projects.map((p) => (
                      <div key={p.name}>
                        <p className="text-sm font-medium text-white">{p.name}</p>
                        <p className="mt-1 text-sm leading-relaxed text-white/55">
                          {p.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <h3 className="mt-10 text-sm font-semibold text-white/45">
              Skills
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {m.skills.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>

            {m.languages.length > 0 && (
              <>
                <h3 className="mt-8 text-sm font-semibold text-white/45">
                  Languages
                </h3>
                <div className="mt-4 flex flex-wrap gap-4">
                  {m.languages.map((l) => (
                    <p key={l.name} className="text-sm text-white/60">
                      <span className="text-white">{l.name}</span> — {l.level}
                    </p>
                  ))}
                </div>
              </>
            )}

            {m.certifications && m.certifications.length > 0 && (
              <>
                <h3 className="mt-8 text-sm font-semibold text-white/45">
                  Certifications
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.certifications.map((c) => (
                    <Chip key={c}>{c}</Chip>
                  ))}
                </div>
              </>
            )}
          </GlassPanel>
        ))}
      </section>
    </>
  );
}
