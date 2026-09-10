export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  location: string;
  email: string;
  summary: string;
  about: string;
  experience: { title: string; period: string; description: string }[];
  projects: { name: string; description: string }[];
  education: { degree: string; period: string; school: string }[];
  skills: string[];
  languages: { name: string; level: string }[];
};

export const team: TeamMember[] = [
  {
    slug: "mohammad-safieddine",
    name: "Mohammad Safieddine",
    role: "Co-Founder & CEO · Full-Stack Developer · Applied AI/LLM Engineer",
    location: "Beirut, Lebanon",
    email: "mohammadsafieddine789@gmail.com",
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
];
