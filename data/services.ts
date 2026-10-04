import {
  Globe2,
  ShoppingBag,
  MonitorSmartphone,
  BrainCircuit,
  ShieldCheck,
  Radar,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  /** Anchor id on /services, e.g. /services#web-platforms */
  slug: string;
  icon: LucideIcon;
  title: string;
  /** Short version for the homepage; services without one aren't featured there. */
  teaser?: string;
  description: string;
  includes: string[];
  /** Slugs of projects in data/projects.ts that demonstrate this service. */
  projects: string[];
};

export const services: Service[] = [
  {
    slug: "web-platforms",
    icon: Globe2,
    title: "Web platforms",
    teaser:
      "Full-stack products on Next.js, Express, and PostgreSQL — from architecture through to a tested, deployed build.",
    description:
      "Full-stack products built on Next.js, Express, and PostgreSQL — server-prefetched data, typed APIs, and a design system that isn't a wrapped-up component kit.",
    includes: [
      "Architecture and data modeling",
      "Server-rendered Next.js frontends",
      "Prisma / PostgreSQL backends",
      "CI pipelines and automated tests",
    ],
    projects: ["alis-store", "h3m-pos"],
  },
  {
    slug: "bilingual-e-commerce",
    icon: ShoppingBag,
    title: "Bilingual e-commerce",
    teaser:
      "Storefronts built EN/AR first with real right-to-left layouts, cash-on-delivery flows, and admin-run merchandising.",
    description:
      "Storefronts and admin panels for retailers with a bilingual customer base — real right-to-left layout, cash-on-delivery checkout, and merchandising the owner controls without a deploy.",
    includes: [
      "EN/AR design systems with true RTL",
      "Cash-on-delivery checkout flows",
      "Role-scoped admin panels (RBAC)",
      "Search tuned for how customers actually type",
    ],
    projects: ["alis-store"],
  },
  {
    slug: "point-of-sale-desktop",
    icon: MonitorSmartphone,
    title: "Point of sale & desktop software",
    teaser:
      "Offline-first checkout and back-office software that packages into a single installer for a shop with no IT staff.",
    description:
      "Offline-first checkout, inventory, and back-office systems packaged into a single installer, so a shop with no IT staff can run it on one ordinary PC.",
    includes: [
      "Electron packaging of a web-stack app",
      "Multi-currency, multi-warehouse inventory",
      "Concurrency-safe checkout under load",
      "Machine-bound, signed licensing",
    ],
    projects: ["h3m-pos"],
  },
  {
    slug: "applied-ai-llm",
    icon: BrainCircuit,
    title: "Applied AI & LLM systems",
    teaser:
      "RAG pipelines and tool-calling agents built for accuracy, with hallucination rates measured, not assumed.",
    description:
      "RAG pipelines and tool-calling agents built for measured accuracy — not a demo that happens to work once.",
    includes: [
      "Retrieval-augmented generation pipelines",
      "Autonomous, tool-calling agents",
      "Document and knowledge-base assistants",
      "Accuracy and hallucination-rate evaluation",
    ],
    projects: [],
  },
  {
    slug: "security-access-control",
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
    projects: ["alis-store", "h3m-pos"],
  },
  {
    slug: "penetration-testing",
    icon: Radar,
    title: "Penetration testing & security audits",
    description:
      "Real-world attack simulation against your apps and infrastructure — finding what a script kiddie or a serious attacker would find, before they do.",
    includes: [
      "Web, mobile & API penetration testing",
      "Infrastructure and network vulnerability scans",
      "OWASP Top 10 / CVE-based assessments",
      "Remediation reports with severity ratings",
    ],
    projects: [],
  },
];

/** Options for the contact form's service picker. */
export const serviceOptions = [
  ...services.map((s) => s.title),
  "Something else",
] as const;

/** Technologies used across our shipped projects and team work. */
export const technologies = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "Python",
  "FastAPI",
  "Prisma",
  "PostgreSQL",
  "Redis",
  "Electron",
  "Docker",
  "LangChain",
  "RAG pipelines",
  "AI agents",
];
