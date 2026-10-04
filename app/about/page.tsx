import Link from "next/link";
import { PageHeader, GlassPanel } from "@/components/UI";
import { Layers, ShieldCheck, Gauge, Languages } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/data/services";
import { site } from "@/lib/site";
import { graph, pageMetadata, webPageJsonLd } from "@/lib/seo";

const description =
  "About H3M Softwares, a software development company based in Lebanon: who we are, what we build, who we build for, and how we work.";

export const metadata = pageMetadata({
  title: "About Us",
  description,
  path: "/about",
});

const facts: { term: string; detail: React.ReactNode }[] = [
  { term: "Company", detail: "H3M Softwares — software development company" },
  { term: "Based in", detail: "Lebanon, with team members in Lebanon and France" },
  {
    term: "Services",
    detail: services.map((s) => s.title).join(", "),
  },
  {
    term: "Builds for",
    detail: "Retailers, small teams, and founders who need production software",
  },
  { term: "Working languages", detail: "English and Arabic" },
  {
    term: "Contact",
    detail: (
      <>
        <a href={`mailto:${site.email}`} className="focus-ring text-brand-bright hover:text-white">
          {site.email}
        </a>{" "}
        ·{" "}
        <a href={`tel:${site.phone.e164}`} className="focus-ring text-brand-bright hover:text-white">
          {site.phone.display}
        </a>
      </>
    ),
  },
];

const faqs = [
  {
    q: "What does H3M Softwares do?",
    a: "H3M Softwares is a software development company. We build full-stack web platforms, bilingual English/Arabic e-commerce, offline point-of-sale and desktop software, and applied AI/LLM systems such as RAG pipelines and AI agents. We also design authentication and access-control systems and run penetration tests and security audits.",
  },
  {
    q: "Where is H3M Softwares based?",
    a: "H3M Softwares is based in Lebanon. Our team works from Lebanon and France.",
  },
  {
    q: "Do you build bilingual English/Arabic software?",
    a: "Yes. Our e-commerce and point-of-sale projects are bilingual English/Arabic, with right-to-left layout designed in from the start rather than added later.",
  },
  {
    q: "Can your software work without an internet connection?",
    a: "Yes. H3M POS, our point-of-sale system, installs on a single Windows PC with a bundled database and runs fully offline; the same codebase can also be deployed as a web app.",
  },
  {
    q: "What technologies does H3M Softwares use?",
    a: "Mainly TypeScript, Next.js, React, Node.js, Express, Prisma, and PostgreSQL, with Electron for desktop software and Python, FastAPI, and LangChain for AI systems.",
  },
  {
    q: "How do I start a project with H3M Softwares?",
    a: `Send a message through the contact form, email ${site.email}, or call ${site.phone.display}. Describe the business and the problem the software needs to solve, and we'll follow up with what it would take to build.`,
  },
];

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
      <JsonLd
        data={graph(
          webPageJsonLd({
            path: "/about",
            name: "About Us | H3M Softwares",
            description,
            type: "AboutPage",
            crumbs: [{ name: "About", path: "/about" }],
          }),
          {
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        )}
      />

      <PageHeader
        kicker="about"
        title="A small studio that stays on the project."
        description="H3M Softwares is a software development company based in Lebanon. We design, build, and ship software for businesses that need it to work offline, in two languages, or under real transaction load — not just in a demo."
      />

      <section className="mx-auto max-w-content px-6 pb-20">
        <GlassPanel className="p-7 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            H3M Softwares at a glance
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/60">
            {site.description}
          </p>
          <dl className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.term}>
                <dt className="text-xs text-white/40">{f.term}</dt>
                <dd className="mt-1 text-sm text-white/80">{f.detail}</dd>
              </div>
            ))}
          </dl>
        </GlassPanel>
      </section>

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

      <section className="mx-auto max-w-content px-6 pb-20">
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

      <section className="mx-auto max-w-content px-6 pb-24 md:pb-32">
        <h2 className="text-2xl font-semibold tracking-tight">
          Frequently asked questions
        </h2>
        <div className="mt-8 flex flex-col gap-4">
          {faqs.map((f) => (
            <GlassPanel key={f.q} className="p-6">
              <h3 className="text-base font-semibold text-white">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{f.a}</p>
            </GlassPanel>
          ))}
        </div>
        <p className="mt-8 text-sm text-white/50">
          See our{" "}
          <Link href="/services" className="focus-ring text-brand-bright hover:text-white">
            software development services
          </Link>
          , read the{" "}
          <Link href="/projects" className="focus-ring text-brand-bright hover:text-white">
            project case studies
          </Link>
          , or{" "}
          <Link href="/contact" className="focus-ring text-brand-bright hover:text-white">
            get in touch
          </Link>
          .
        </p>
      </section>
    </>
  );
}
