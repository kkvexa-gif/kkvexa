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
    description: "Frontier LLM orchestration, vector databases, and agent pipelines.",
    items: [
      { name: "OpenAI & Anthropic", description: "State-of-the-art LLMs & multimodal inference", badge: "LLM" },
      { name: "LangChain & LlamaIndex", description: "RAG architectures and contextual agent flows", badge: "Orchestration" },
      { name: "Qdrant / Pinecone", description: "High-density vector indexing & hybrid search", badge: "Vector DB" },
      { name: "Python & FastAPI", description: "High-throughput asynchronous ML service backends", badge: "Backend" },
    ],
  },
  {
    category: "Frontend & Web Architecture",
    description: "Accessible, sub-second web platforms with modern React and Next.js.",
    items: [
      { name: "Next.js 15 (App Router)", description: "React Server Components and static edge generation", badge: "Framework" },
      { name: "TypeScript", description: "Strict type safety across full application stacks", badge: "Language" },
      { name: "Tailwind CSS", description: "Utility-first design token architecture", badge: "Styling" },
      { name: "React 19", description: "Concurrent rendering and action hooks", badge: "UI Core" },
    ],
  },
  {
    category: "Mobile & Cross-Platform",
    description: "60fps native performance for iOS and Android with unified logic.",
    items: [
      { name: "React Native & Expo", description: "High-performance cross-platform application runtime", badge: "Mobile" },
      { name: "SQLite / WatermelonDB", description: "Offline-first resilient local data persistence", badge: "Storage" },
      { name: "Native Bridges", description: "Direct hardware APIs, biometrics, and sensors", badge: "Native" },
    ],
  },
  {
    category: "Cloud, Data & DevOps",
    description: "Stateless architectures, scalable databases, and automated CI/CD.",
    items: [
      { name: "Vercel & AWS", description: "Serverless deployments and global edge CDN", badge: "Cloud" },
      { name: "PostgreSQL & Prisma", description: "Relational data modeling with strict ACID guarantees", badge: "Database" },
      { name: "Redis & BullMQ", description: "Distributed caching and robust background worker queues", badge: "Queues" },
      { name: "Docker", description: "Reproducible container environments and pipelines", badge: "DevOps" },
    ],
  },
];
