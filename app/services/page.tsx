import { PageHeader, GlassPanel, Chip } from "@/components/UI";
import {
  Globe2,
  ShoppingBag,
  MonitorSmartphone,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Web platforms",
    description:
      "Full-stack products built on Next.js, Express, and PostgreSQL — server-prefetched data, typed APIs, and a design system that isn't a wrapped-up component kit.",
    includes: [
      "Architecture and data modeling",
      "Server-rendered Next.js frontends",
      "Prisma / PostgreSQL backends",
      "CI pipelines and automated tests",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Bilingual e-commerce",
    description:
      "Storefronts and admin panels for retailers with a bilingual customer base — real right-to-left layout, cash-on-delivery checkout, and merchandising the owner controls without a deploy.",
    includes: [
      "EN/AR design systems with true RTL",
      "Cash-on-delivery checkout flows",
      "Role-scoped admin panels (RBAC)",
      "Search tuned for how customers actually type",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Point of sale & desktop software",
    description:
      "Offline-first checkout, inventory, and back-office systems packaged into a single installer, so a shop with no IT staff can run it on one ordinary PC.",
    includes: [
      "Electron packaging of a web-stack app",
      "Multi-currency, multi-warehouse inventory",
      "Concurrency-safe checkout under load",
      "Machine-bound, signed licensing",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Applied AI & LLM systems",
    description:
      "RAG pipelines and tool-calling agents built for measured accuracy — not a demo that happens to work once.",
    includes: [
      "Retrieval-augmented generation pipelines",
      "Autonomous, tool-calling agents",
      "Document and knowledge-base assistants",
      "Accuracy and hallucination-rate evaluation",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & access control",
    description:
      "Authentication and permission systems designed to fail safely — rotating tokens, granular roles, and audit trails on every privileged action.",
    includes: [
      "JWT + rotating refresh tokens with reuse detection",
      "Fine-grained, per-area permission systems",
      "Audit logs with a JSON diff per change",
      "Rate limiting and account-abuse protection",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="services"
        title="Built end to end, not handed off in pieces."
        description="Each of these is a full slice of a real project — the kind of work we've already shipped, not a menu of buzzwords."
      />

      <section className="mx-auto max-w-content px-6 pb-24 md:pb-32">
        <div className="flex flex-col gap-6">
          {services.map((s) => (
            <GlassPanel
              key={s.title}
              className="grid gap-8 p-7 md:grid-cols-[1fr_1.1fr] md:p-10"
            >
              <div>
                <s.icon className="h-6 w-6 text-brand-bright" />
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {s.description}
                </p>
              </div>
              <div className="flex flex-wrap content-start gap-2.5 md:justify-end">
                {s.includes.map((i) => (
                  <Chip key={i}>{i}</Chip>
                ))}
              </div>
            </GlassPanel>
          ))}
        </div>
      </section>
    </>
  );
}
