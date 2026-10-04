export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  location?: string;
  email?: string;
  links?: { label: string; href: string }[];
  summary: string;
  about: string;
  experience: { title: string; period: string; description: string }[];
  projects: { name: string; description: string }[];
  education: { degree: string; period: string; school: string }[];
  skills: string[];
  languages: { name: string; level: string }[];
  certifications?: string[];
};

export const team: TeamMember[] = [
  {
    slug: "mohammad-safieddine",
    name: "Mohammad Safieddine",
    role: "Co-Founder & CEO · Full-Stack Developer · Applied AI/LLM Engineer",
    location: "Beirut, Lebanon",
    email: "mohammadsafieddine789@gmail.com",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mohammad-safieddine-153635248/",
      },
      { label: "GitHub", href: "https://github.com/BigSmoke19" },
      { label: "Portfolio", href: "https://mohammadsafieddine.vercel.app/" },
    ],
    summary:
      "Builds production-grade apps with Next.js, FastAPI, and PostgreSQL, and applied LLM systems including RAG pipelines and autonomous agents. Three years of freelance experience delivering custom web applications end-to-end, and currently a Master's student and researcher in AI at the Lebanese University.",
    about:
      "Full-stack developer and AI/LLM engineer with three years of freelance experience across Next.js, FastAPI, and PostgreSQL, plus applied LLM systems such as RAG pipelines and autonomous agents. Currently a Master's student and researcher in AI at the Lebanese University, with a track record of owning projects end-to-end for independent clients.",
    experience: [
      {
        title: "Freelance Web Developer",
        period: "Jul 2021 — Present · 3 years",
        description:
          "Delivered custom web applications end-to-end for independent clients, cutting manual process time by roughly 30% through automation.",
      },
    ],
    projects: [
      {
        name: "Document Assistant API",
        description:
          "Production RAG platform (FastAPI, ChromaDB, Groq/Llama 3.3) for querying uploaded documents, live on HuggingFace Spaces and Vercel.",
      },
      {
        name: "Smoke Dash",
        description:
          "RBAC admin platform (Next.js, Fastify, PostgreSQL, Prisma) with full audit trails on every data change.",
      },
      {
        name: "Agentic RAG — Football Intelligence",
        description:
          "Autonomous tool-calling agent paired with a RAG pipeline, reaching 87% answer accuracy and a 93% lower hallucination rate.",
      },
    ],
    education: [
      {
        degree: "M.S. in Computer Science (in progress)",
        period: "",
        school: "Lebanese University — researcher in AI",
      },
      {
        degree: "B.S. in Computer Science",
        period: "2021 — 2024",
        school: "Lebanese University, Faculty of Science 5",
      },
    ],
    skills: [
      "JavaScript/TypeScript",
      "Python",
      "React.js/Next.js",
      "Node.js/FastAPI",
      "PostgreSQL/MySQL",
      "RAG",
      "AI Agents",
      "LangChain",
      "Docker",
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Arabic", level: "Native" },
    ],
  },
  {
    slug: "hussein-kteish",
    name: "Hussein Kteish",
    role: "Co-Founder · Cybersecurity Specialist & Software Developer",
    location: "Beirut, Lebanon",
    email: "hussein.kteish2001@gmail.com",
    summary:
      "Software developer and cybersecurity pentester across web, mobile, and backend, with a security-first approach pentesting what he builds and fixing the findings.",
    about:
      "Hussein is a software developer and  pentester with a strong academic background and hands-on experience across software development and security. He holds a Bachelor's and Master's degree in Computer Science from the Lebanese University, along with a Master 2 in Cybersecurity. He works across the full stack building web and mobile applications, designing backend systems, and applying AI to solve real-world problems while bringing a security-first mindset to everything he builds by applying pentesting and fixing findings.",
    experience: [
      {
        title: "Software Developer & Penetration Tester",
        period: "",
        description:
          "Builds full-stack web and mobile applications and backend systems. Penetration-tests web and mobile apps reporting and remediating the findings rather than handing off a list.",
      },
    ],
    projects: [],
    education: [
      {
        degree: "Master 2 in Cybersecurity",
        period: "",
        school: "Lebanese University",
      },
      {
        degree: "Master's in Computer Science",
        period: "",
        school: "Lebanese University",
      },
      {
        degree: "Bachelor's in Computer Science",
        period: "",
        school: "Lebanese University",
      },
    ],
    skills: [
      "Penetration testing",
      "Application security",
      "Full-stack web",
      "Mobile development",
      "Backend systems",
      "Applied AI",
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Arabic", level: "Native" },
    ],
  },
  {
    slug: "mohammad-khalife",
    name: "Mohammad Khalife",
    role: "Co-Founder · Computer Scientist & Software Developer",
    location: "France",
    email: "mhmd-khalife@hotmail.com",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mohammad-khalife-19b272a5/",
      },
      { label: "GitHub", href: "https://github.com/Mhmdkh77" },
    ],
    summary:
      "Computer Science and IoT graduate working across distributed C++ algorithms and modular-robot simulation, full-stack web development, IoT integration, automation, and applied machine learning.",
    about:
      "Mohammad is a Computer Science and Internet-of-Things graduate with experience in distributed algorithms, C++ simulation, modular robotics, IoT integration, backend development, automation, machine learning, and software systems. He has designed decentralized algorithms for large groups of simulated modules, built RESTful applications and connected-device integrations, developed web applications with Next.js and React, implemented backend services with Node.js and Express, and worked on NLP, computer-vision, reinforcement-learning, forecasting, and large-language-model projects.",
    experience: [
      {
        title: "Research Intern — FEMTO-ST Institute",
        period: "Mar 2026 — Aug 2026 · France",
        description:
          "Distributed C++ algorithms for self-reconfigurable 3D modular robots (3D catoms) in the VisibleSim simulator. Thesis on decentralized exploration and growth in an initially unknown 3D environment — a search-and-coil algorithm with tip growth, lateral exploration, branching, collision avoidance, obstacle detection, and object wrapping, all over neighbor-to-neighbor message passing. Distributing growth across four roots cut elapsed simulation time by roughly 8x versus a single root.",
      },
      {
        title: "Automation & ERP Developer — Freelance",
        period: "",
        description:
          "Custom Odoo modules and automation scripts, inventory and operational data synced to a Shopify storefront, automated data-entry and reporting workflows, and Excel VBA for revenue and inventory analysis.",
      },
      {
        title: "Backend & Web Developer",
        period: "",
        description:
          "Backend and full-stack applications with PHP/Laravel and JavaScript/Next.js/Node/Express — 30+ API endpoints for a carpooling platform, Laravel Sanctum authentication, relational schema design, Prisma, PostgreSQL/MySQL, Redis caching, and integration of external route-calculation APIs.",
      },
      {
        title: "IoT & Connected Devices",
        period: "",
        description:
          "A native Dart library polling real-time telemetry from Solarman IoT loggers over raw local-network sockets, plus an Android app for local grid monitoring with live inverter and energy-monitoring alarms.",
      },
    ],
    projects: [
      {
        name: "Leader Election & Shape Recognition for Modular Robots",
        description:
          "Distributed leader-election across 14,764 independently simulated modules, decentralized coordinate propagation for relative (x, y) positions, and global template matching from purely local communication. C++ / distributed systems.",
      },
      {
        name: "Modular-Robotics Research & Simulation",
        description:
          "Algorithms run independently by simulated modules in VisibleSim — rank gradients, scent-based exchange, recruitment, traffic control, routing, branch tracking, collision detection, and geometric tests for exploration, branching, and object wrapping. C++ / distributed algorithms.",
      },
      {
        name: "Carpooling Platform",
        description:
          "30+ REST endpoints with Laravel Sanctum authentication, relational database design, and integration of external route-calculation and multi-passenger path-sequencing APIs.",
      },
      {
        name: "Publication — IEEE MENACOMM 2026",
        description:
          "Co-author of “Fine-Tuning and Agentic Workflows for Lebanese Arabizi Understanding and Generation” — open-source LLMs, dialectal Arabic, fine-tuning, and agentic workflows.",
      },
    ],
    education: [
      {
        degree: "Master in Internet of Things",
        period: "2026",
        school: "Université Marie et Louis Pasteur, France",
      },
      {
        degree: "Master 1 in Computer Science",
        period: "2024 — 2025",
        school: "Lebanese University, Beirut",
      },
      {
        degree: "Bachelor in Computer Science",
        period: "2021 — 2024",
        school: "Lebanese University, Beirut",
      },
    ],
    skills: [
      "C++",
      "Python",
      "PHP",
      "Dart",
      "JavaScript",
      "SQL",
      "Distributed algorithms",
      "VisibleSim",
      "Next.js / React",
      "Node.js / Express",
      "Laravel",
      "Prisma",
      "PostgreSQL / MySQL",
      "Redis",
      "Docker",
      "PyTorch",
      "Hugging Face",
      "XGBoost / LightGBM",
      "NLP",
      "Computer vision",
      "Reinforcement learning",
      "Time-series forecasting",
      "Odoo / Shopify",
      "Android / Flutter",
      "AWS",
    ],
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Professional working proficiency · IELTS 6.5" },
    ],
    certifications: [
      "AWS Certified Cloud Practitioner (2024)",
      "CS50 Python — Harvard (2023)",
    ],
  },
  {
    slug: "mohammad-khalil",
    name: "Mohammad Khalil",
    role: "Software Engineer · Full-Stack & AI Systems",
    location: "Toulouse, France",
    email: "mhmdkhalil293@gmail.com",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mohammad-khalil-a3a457230",
      },
    ],
    summary:
      "MIAGE Master's student at Université Toulouse Capitole working across full-stack development, backend architecture, and applied AI, with a focus on reliable, scalable software systems.",
    about:
      "Mohammad is a Master's student in MIAGE (Information Systems) at Université Toulouse Capitole, after a Bachelor's and Master 1 in Computer Science at the Lebanese University. He works across the full stack — TypeScript, Node.js/Express, FastAPI, PostgreSQL, Prisma, and Redis on the backend, React/Next.js and Flutter on the front — and is building depth in machine learning and intelligent systems. He cares about understanding how systems work internally, not just how to use the tools, and aims to connect solid software engineering with the mathematical foundations behind AI.",
    experience: [
      {
        title: "Full-Stack Developer — POS & Business Management System",
        period: "",
        description:
          "Works on a full-stack point-of-sale platform built with TypeScript, Express, Prisma, PostgreSQL, Redis, JWT/Argon2 authentication, Electron, and Next.js with Redux, TanStack, and React Hook Form — covering backend architecture, database transactions, frontend state management, and automated testing.",
      },
    ],
    projects: [
      {
        name: "AI-Powered Invoice & Receipt Processing",
        description:
          "Exploring OCR plus AI information extraction to turn invoices and receipts into structured data that feeds a POS database and analytics, cutting manual data entry.",
      },
      {
        name: "AI Tic-Tac-Toe",
        description:
          "Unbeatable game AI using minimax over the full game tree — adversarial search and state-space exploration.",
      },
      {
        name: "E-Commerce Platform (in development)",
        description:
          "Full-stack store for a local clothing business — products, accounts, cart, orders, inventory, payments, and an admin dashboard on Next.js, Node.js/FastAPI, PostgreSQL, and Redis.",
      },
    ],
    education: [
      {
        degree: "Master MIAGE — Information Systems",
        period: "2025 — Present",
        school: "Université Toulouse Capitole, France",
      },
      {
        degree: "Master 1 in Computer Science",
        period: "2024 — 2025",
        school: "Lebanese University",
      },
      {
        degree: "B.S. in Computer Science",
        period: "2021 — 2024",
        school: "Lebanese University",
      },
    ],
    skills: [
      "Python",
      "Java",
      "C++",
      "JavaScript / TypeScript",
      "C#",
      "Dart",
      "SQL",
      "React / Next.js",
      "Redux",
      "Node.js / Express",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "MongoDB",
      "Flutter",
      "Docker",
      "Playwright / Vitest",
      "Scikit-learn",
      "PyTorch",
      "NumPy / Pandas",
    ],
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Upper-intermediate" },
      { name: "French", level: "Improving toward professional fluency" },
    ],
  },
];
