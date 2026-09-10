import Link from "next/link";
import { ArrowRight, Globe2, ShoppingBag, MonitorSmartphone, BrainCircuit } from "lucide-react";
import { GlassPanel, Chip } from "@/components/UI";
import { projects } from "@/data/projects";
import { team } from "@/data/team";

const services = [
  {
    icon: Globe2,
    title: "Web platforms",
    description:
      "Full-stack products on Next.js, Express, and PostgreSQL — from architecture through to a tested, deployed build.",
  },
  {
    icon: ShoppingBag,
    title: "Bilingual e-commerce",
    description:
      "Storefronts built EN/AR first with real right-to-left layouts, cash-on-delivery flows, and admin-run merchandising.",
  },
  {
    icon: MonitorSmartphone,
    title: "Point of sale & desktop",
    description:
      "Offline-first checkout and back-office software that packages into a single installer for a shop with no IT staff.",
  },
  {
    icon: BrainCircuit,
    title: "Applied AI & LLM systems",
    description:
      "RAG pipelines and tool-calling agents built for accuracy, with hallucination rates measured, not assumed.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(4,14,39,0.72) 0%, rgba(4,14,39,0.86) 55%, #040E27 100%)",
          }}
        />
        <div className="noise-overlay" />
        <div className="relative z-10 mx-auto flex max-w-content flex-col items-start px-6 pb-20 pt-24 md:pb-28 md:pt-36">
          <p className="text-sm text-white/50">
            <span className="bracket">&lt;</span> H3M Softwares{" "}
            <span className="bracket">/&gt;</span>
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
            Software your
            <br />
            business can <span className="shine">actually run on.</span>
          </h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
            A development studio. We build web platforms, bilingual
            storefronts, offline point-of-sale systems, and applied AI
            products — and we stay on the project from architecture to the
            till.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-base transition-colors hover:bg-white/90"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/5"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* Quick facts strip */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-6 px-6 py-10 md:grid-cols-3">
          {[
            { label: "Languages shipped", value: "EN / AR, RTL-native" },
            { label: "Deployment modes", value: "Web, desktop, offline" },
            { label: "Focus", value: "Full-stack + applied AI" },
          ].map((f) => (
            <div key={f.label}>
              <p className="text-sm font-semibold text-white">{f.value}</p>
              <p className="mt-1 text-xs text-white/45">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services teaser */}
      <section className="mx-auto max-w-content px-6 py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-md text-3xl font-semibold tracking-tight md:text-4xl">
            What we build
          </h2>
          <Link
            href="/services"
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-brand-bright hover:text-white"
          >
            All services <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <GlassPanel key={s.title} className="p-6">
              <s.icon className="h-5 w-5 text-brand-bright" />
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {s.description}
              </p>
            </GlassPanel>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-content px-6 py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-md text-3xl font-semibold tracking-tight md:text-4xl">
            Recent work
          </h2>
          <Link
            href="/projects"
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-brand-bright hover:text-white"
          >
            All projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group focus-ring block">
              <GlassPanel className="h-full p-7 transition-colors group-hover:bg-white/[0.035]">
                <p className="text-xs text-white/40">{p.date}</p>
                <h3 className="mt-2 text-xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {p.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.slice(0, 4).map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </GlassPanel>
            </Link>
          ))}
        </div>
      </section>

      {/* Team teaser */}
      <section className="mx-auto max-w-content px-6 py-20 md:py-28">
        <GlassPanel className="flex flex-col items-start gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {team[0].name}
            </h2>
            <p className="mt-2 text-sm text-white/55">{team[0].role}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
              {team[0].summary}
            </p>
          </div>
          <Link
            href="/team"
            className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium hover:bg-white/5"
          >
            Meet the team <ArrowRight className="h-4 w-4" />
          </Link>
        </GlassPanel>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-content px-6 pb-24 md:pb-32">
        <GlassPanel className="relative overflow-hidden px-8 py-16 text-center md:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(600px circle at 50% 0%, rgba(57,114,253,0.25), transparent 70%)",
            }}
          />
          <h2 className="relative text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Have a system that needs building?
          </h2>
          <p className="relative mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/60">
            Tell us what the business needs to do, and we'll tell you what it
            takes to ship it — web, desktop, or offline.
          </p>
          <Link
            href="/contact"
            className="focus-ring relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-base hover:bg-white/90"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </GlassPanel>
      </section>
    </>
  );
}
