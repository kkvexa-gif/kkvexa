export interface TechCategory {
  category: string;
  description: string;
  items: {
    name: string;
    description: string;
    badge: string;
  }[];
}

export const TECH_STACK: TechCategory[] = [
  {
    category: "AI & Machine Learning",
    description: "LLM integration, vector databases, and automated workflows.",
    items: [
      { name: "OpenAI & Anthropic", description: "State-of-the-art LLMs & multimodal models", badge: "LLM" },
      { name: "LangChain & LlamaIndex", description: "RAG architectures and contextual agent flows", badge: "Orchestration" },
      { name: "Qdrant / Pinecone", description: "Vector search indexing and document embeddings", badge: "Vector DB" },
      { name: "Python & FastAPI", description: "Fast, asynchronous backends and ML service APIs", badge: "Backend" },
    ],
  },
  {
    category: "Frontend & Web Architecture",
    description: "Fast, accessible web applications with modern React and Next.js.",
    items: [
      { name: "Next.js (App Router)", description: "Server components, fast routing, and edge deployment", badge: "Framework" },
      { name: "TypeScript", description: "Type safety across full application stacks", badge: "Language" },
      { name: "Tailwind CSS", description: "Utility-first design token styling", badge: "Styling" },
      { name: "React 19", description: "Modern rendering and component architectures", badge: "UI Core" },
    ],
  },
  {
    category: "Mobile & Cross-Platform",
    description: "Smooth cross-platform apps for iOS and Android with unified logic.",
    items: [
      { name: "React Native & Expo", description: "Cross-platform mobile application runtime", badge: "Mobile" },
      { name: "SQLite / WatermelonDB", description: "Offline-first local data persistence", badge: "Storage" },
      { name: "Native Bridges", description: "Direct hardware APIs, biometrics, and sensors", badge: "Native" },
    ],
  },
  {
    category: "Cloud, Data & DevOps",
    description: "Reliable hosting, scalable databases, and automated CI/CD.",
    items: [
      { name: "Vercel & AWS", description: "Cloud hosting and global CDN delivery", badge: "Cloud" },
      { name: "PostgreSQL & Prisma", description: "Relational data modeling with structured migrations", badge: "Database" },
      { name: "Redis & BullMQ", description: "In-memory caching and background worker queues", badge: "Queues" },
      { name: "Docker", description: "Reproducible container environments and pipelines", badge: "DevOps" },
    ],
  },
];
