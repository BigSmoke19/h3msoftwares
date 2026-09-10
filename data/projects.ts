export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  date: string;
  role: string;
  stack: string[];
  features: string[];
  featured: boolean;
  summary: string;
  overview: string;
  highlights: string[];
  techGroups: { label: string; items: string }[];
  notes: string[];
  scale?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "alis-store",
    name: "Ali's Store",
    subtitle:
      "Bilingual (EN/AR) e-commerce platform with a permission-scoped admin panel",
    date: "2026",
    role: "Full-stack — architecture, API, frontend, design system, tests",
    stack: ["Next.js", "React", "Express", "Prisma", "PostgreSQL", "React Query", "Redux Toolkit"],
    features: [
      "Bilingual storefront (EN/AR)",
      "Cash-on-delivery checkout",
      "Discounts & coupons",
      "Owner-run merchandising",
      "Guest order tracking",
      "Sales & traffic analytics",
    ],
    featured: true,
    summary:
      "An English/Arabic online store for a clothing retailer: shoppers browse in either language, pay cash on delivery, and track orders without an account, while the owner runs the home page, discounts, and staff permissions from an admin panel.",
    overview:
      "Ali's Store is designed around how a small shop actually sells: no card gateway, a bilingual customer base, and one or two people running everything. Every page is EN/AR with the whole layout mirroring for Arabic, and the storefront — hero, featured rows, banners, story page, reviews — is composed and reordered from the admin with no deploy.",
    highlights: [
      "Bilingual + RTL throughout — a single translation helper and a design system built on CSS logical properties, so Arabic mirrors with no duplicate styles.",
      "RBAC admin panel — view/manage permission per area (orders, products, customers, discounts, roles), custom roles, per-user revokes, and a delegation ceiling so staff can't escalate their own access.",
      "Security-first auth — JWT access tokens with rotating refresh tokens and reuse detection, step-up re-auth for sensitive actions, Argon2, account lockout, email verification, and uniform rejections to resist account enumeration.",
      "Checkout built for cash-on-delivery — email-OTP verification, coupons and catalog discounts resolved live, per-governorate delivery fees, guest order tracking by signed token, and an advisory lock that serialises a shopper's concurrent checkouts.",
      "Owner-controlled home page — featured collections, full-width image banners, and best-seller/new/on-sale smart rows, each slotted into a single ordering system by the admin.",
      "Lenient catalogue search — punctuation- and plural-insensitive with a small apparel synonym map, backed by a Postgres trigram index.",
      "Anti-abuse — admin blacklist, automatic order-velocity flagging, and customer account blocking with a clear reason shown at sign-in.",
      "Analytics — first-party sales, inventory, and customer aggregation plus GA4 traffic and funnel tracking.",
    ],
    techGroups: [
      {
        label: "Frontend",
        items:
          "Next.js (App Router), React, React Query (server prefetch + hydration), Redux Toolkit, hand-built vanilla-CSS design system, ImageKit",
      },
      {
        label: "Backend",
        items: "Node, Express, Prisma, PostgreSQL, Zod, strict CSP",
      },
      {
        label: "Quality",
        items:
          "Vitest integration tests against a real Postgres, Testing-Library component tests, CI pipeline, k6 load test, Playwright E2E sweep",
      },
    ],
    notes: [
      "The design system is vanilla CSS on purpose — a small token set and component classes, no UI framework, single light theme, fully RTL.",
      "The data layer prefetches on the server and hydrates React Query on the client, so the first paint is real content and in-app navigation is instant.",
      "Integration tests run against a live database, truncated between tests, not mocks, so schema and query behaviour are genuinely covered.",
    ],
  },
  {
    slug: "h3m-pos",
    name: "H3M POS",
    subtitle:
      "Retail point-of-sale & back-office platform — checkout, inventory, purchasing, ledgers, shifts, and analytics",
    date: "2026",
    role: "Full-stack + desktop packaging — architecture, backend, frontend, Electron shell, licensing",
    stack: [
      "Next.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Electron",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
    ],
    features: [
      "POS checkout page",
      "Inventory & warehouses",
      "Purchasing & suppliers",
      "Sales analytics",
      "Supplier & customer ledgers",
      "Cash-drawer shifts",
    ],
    featured: true,
    summary:
      "A point-of-sale and back-office system for retail shops: a fast checkout page, inventory and purchasing, supplier and customer ledgers, cash-drawer shifts, and sales analytics — running fully offline on a single PC or online across several terminals.",
    overview:
      "Small and mid-size retailers need a real POS — multi-currency, multi-warehouse, tax-aware, with supplier and customer ledgers — but they don't have IT staff, a server room, or a reliable internet connection. H3M POS is designed so a shop owner can run the installer on one ordinary Windows PC and be selling in minutes, fully offline, while the same codebase still deploys as a normal containerised web app for multi-terminal shops.",
    highlights: [
      "One-file desktop install — an Electron shell boots a bundled PostgreSQL 16 cluster, runs migrations, seeds a fresh store on first launch, spawns the compiled API, and serves the UI, all invisible to the user.",
      "Offline-first, cloud-optional — everything works with no network; Google Drive backup is a bolt-on with a scheduled pg_dump, DPAPI-encrypted OAuth token, and graceful degradation when offline.",
      "Money done properly — every monetary row stores its own currency and the exchange rate applied at the time, with all arithmetic going through integer-cent half-up rounding, never bare floats.",
      "Concurrency-safe checkout — idempotency-key replay protection plus row locks inside a transaction, so two registers can't oversell the same item or double-charge a retried request.",
      "Bilingual, full RTL — English/Arabic across roughly 1,960 translation keys per language, with right-to-left as a first-class layout mode.",
      "Signed, machine-bound licensing — Ed25519-signed license files bound to a hardware fingerprint, a roll-back-resistant expiry clock, and a code-integrity manifest.",
    ],
    techGroups: [
      {
        label: "Backend",
        items:
          "Node 20, Express 4, TypeScript (strict), Prisma 5, PostgreSQL 16, Zod, JWT, bcryptjs, express-rate-limit",
      },
      {
        label: "Frontend",
        items:
          "Next.js 14 (App Router), React 18, Redux Toolkit, TanStack Query 5, react-hook-form + Zod, next-intl (EN/AR, RTL), Recharts, jsbarcode",
      },
      {
        label: "Desktop",
        items:
          "Electron 30, electron-builder (NSIS, per-user), bundled PostgreSQL 16, DPAPI via safeStorage",
      },
      {
        label: "Testing & crypto",
        items:
          "Vitest for backend unit + HTTP integration and frontend components, Node crypto Ed25519, SHA-256 integrity manifest",
      },
    ],
    notes: [
      "Making PostgreSQL invisible — detecting first run vs. upgrade, running initdb once, migrating on every launch, and seeding exactly once on a provably-empty database, all from an Electron main process.",
      "Correctness under concurrent registers — idempotent checkout and stock decrement required row-level locking and a replay cache; a fuzz test firing 30 concurrent checkouts surfaced two race conditions later fixed at the query level.",
      "A licensing scheme built to survive the shipped, obfuscated bundle, with no single readable pass/fail boolean.",
    ],
    scale: [
      { label: "App source", value: "~46,000 LOC" },
      { label: "Data model", value: "~50 Prisma models, 27 migrations" },
      { label: "UI", value: "38 App Router screens, ~1,960 keys × 2 languages" },
      { label: "Access control", value: "32 discrete permissions" },
      { label: "Automated tests", value: "~160 test files" },
    ],
  },
];
