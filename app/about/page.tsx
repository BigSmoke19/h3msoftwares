import { PageHeader, GlassPanel } from "@/components/UI";
import { Layers, ShieldCheck, Gauge, Languages } from "lucide-react";

const principles = [
  {
    icon: Layers,
    title: "One codebase, every deployment",
    description:
      "The same product logic runs as a web app, a bundled desktop installer, or an offline till — we design the architecture once and let the shop's constraints decide how it ships.",
  },
  {
    icon: ShieldCheck,
    title: "Security is a default, not a feature",
    description:
      "Rotating refresh tokens, row-level locking, signed licenses, uniform error responses — the parts that don't show up in a demo are the parts we spend the most time on.",
  },
  {
    icon: Gauge,
    title: "Correctness under real load",
    description:
      "We fuzz-test concurrent checkouts, integration-test against a live database instead of mocks, and measure things like hallucination rate instead of assuming a model works.",
  },
  {
    icon: Languages,
    title: "Bilingual from the first commit",
    description:
      "English and Arabic, with true right-to-left layout, aren't a translation pass bolted on at the end — they're part of the design system from day one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="about"
        title="A small studio that stays on the project."
        description="H3M Softwares is a development studio. We design, build, and ship software for businesses that need it to work offline, in two languages, or under real transaction load — not just in a demo."
      />

      <section className="mx-auto max-w-content px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              How we work
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Most of what we build starts from a constraint the client
              already lives with: a shop with no reliable internet, a
              customer base that reads Arabic before English, a checkout that
              can't use a card gateway. We treat that constraint as the
              starting point for the architecture, not an edge case to patch
              in later.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              That means we own a project end to end — schema design, API,
              frontend, the packaging that gets it onto a shop's PC, and the
              tests that prove it holds up under concurrent use. It's also
              why our project write-ups talk about what was hard: race
              conditions we found with a fuzz test, a licensing scheme
              designed to survive its own obfuscated bundle, a search index
              tolerant of how people actually type.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Who we build for
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Independent retailers, small teams, and founders who need a
              production system rather than a template — a storefront that
              the owner can restyle without a deploy, a till that keeps
              selling when the internet drops, or an AI system whose accuracy
              is actually measured. We're a small team, so every engagement
              gets direct access to whoever is writing the code.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-24 md:pb-32">
        <h2 className="text-2xl font-semibold tracking-tight">
          Principles we build by
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {principles.map((p) => (
            <GlassPanel key={p.title} className="p-6">
              <p.icon className="h-5 w-5 text-brand-bright" />
              <h3 className="mt-4 text-base font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {p.description}
              </p>
            </GlassPanel>
          ))}
        </div>
      </section>
    </>
  );
}
