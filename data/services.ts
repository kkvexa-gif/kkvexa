export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  whatWeBuild: string[];
  technologies: string[];
  deliverables: string[];
  iconName: "Bot" | "Globe" | "Smartphone" | "Rocket" | "Cpu" | "Network";
}

export const SERVICES: Service[] = [
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "AI Integration & Applications",
    shortDescription:
      "Embed autonomous intelligence, custom LLM pipelines, RAG systems, and predictive workflows directly into your operational software.",
    fullDescription:
      "We design and deploy practical AI architectures tailored to specific business contexts. From Retrieval-Augmented Generation (RAG) search engines to multimodal extraction pipelines and autonomous agentic workflows, our systems bridge frontier models with resilient production backends.",
    problemSolved:
      "Businesses struggle with high manual document processing overhead, slow data synthesis, generic chatbots that hallucinate, and fragmented legacy knowledge bases.",
    whatWeBuild: [
      "Custom RAG search systems with vector embeddings",
      "Document extraction, OCR, and automated synthesis pipelines",
      "Autonomous domain-specific agent workflows",
      "Fine-tuned model endpoints and intelligent routing",
      "Multimodal voice, vision, and semantic data processors",
    ],
    technologies: [
      "OpenAI API",
      "Anthropic Claude",
      "LangChain",
      "LlamaIndex",
      "Pinecone / Qdrant",
      "Python / FastAPI",
      "Hugging Face",
    ],
    deliverables: [
      "Production-ready inference endpoints",
      "Evaluation & guardrail benchmarks",
      "Vector indexing architecture",
      "API documentation & client SDKs",
    ],
    iconName: "Bot",
  },
  {
    id: "web-apps",
    slug: "web-apps",
    title: "Web Application Development",
    shortDescription:
      "High-performance, scalable web platforms and mission-critical portals engineered with modern React, Next.js, and clean architecture.",
    fullDescription:
      "We engineer enterprise-grade web applications with uncompromising focus on speed, accessibility, security, and responsive UI design. Every application is architected for high concurrency, clean modularity, and smooth user flows.",
    problemSolved:
      "Slow, legacy web software that frustrates users, fails accessibility benchmarks, causes high bounce rates, and becomes fragile under traffic spikes.",
    whatWeBuild: [
      "High-traffic customer web portals and marketplaces",
      "Complex interactive dashboards and data visualizations",
      "B2B management consoles and administrative backoffices",
      "Headless web platforms and dynamic marketing engines",
    ],
    technologies: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "GraphQL / REST",
    ],
    deliverables: [
      "Responsive, WCAG 2.2 AA compliant frontend",
      "Stateless & edge-optimized server components",
      "Automated CI/CD deployment pipelines",
      "Full source code & documentation",
    ],
    iconName: "Globe",
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    title: "Mobile Application Development",
    shortDescription:
      "Native and cross-platform mobile apps for iOS and Android delivering 60fps performance, offline resilience, and fluid interactions.",
    fullDescription:
      "We build robust mobile applications that feel intuitive, launch instantly, and handle intermittent connectivity seamlessly. Utilizing React Native and modern native bridges, we maximize cross-platform code reuse without sacrificing native platform fidelity.",
    problemSolved:
      "Inconsistent user experiences across devices, slow native builds, high maintenance costs of managing separate codebases, and poor offline handling.",
    whatWeBuild: [
      "Cross-platform iOS and Android consumer apps",
      "Field operations and on-site workforce tools",
      "On-demand booking, commerce, and scheduling applications",
      "Offline-first sync-enabled mobile client software",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Swift / Kotlin (Bridges)",
      "Tailwind / NativeWind",
      "SQLite / WatermelonDB",
    ],
    deliverables: [
      "Production builds ready for App Store & Google Play",
      "End-to-end device testing suite",
      "Push notification & deep-link configurations",
      "Comprehensive release documentation",
    ],
    iconName: "Smartphone",
  },
  {
    id: "saas-mvp",
    slug: "saas-mvp",
    title: "SaaS & MVP Engineering",
    shortDescription:
      "Turn product concepts into secure, scalable, market-ready SaaS applications in weeks with production-grade architecture.",
    fullDescription:
      "We partner with startup founders and corporate innovation teams to design, architect, and launch validated MVPs. We balance rapid delivery with clean architectural foundations so your product scales seamlessly as customer acquisition accelerates.",
    problemSolved:
      "Founders wasting months and capital on fragile prototypes that require complete rewrites before supporting real paying users.",
    whatWeBuild: [
      "Multi-tenant SaaS architectures with role-based access",
      "Subscription billing and automated payment gateways",
      "User authentication, onboarding, and organization tiers",
      "Real-time event logging, analytics, and telemetry",
    ],
    technologies: [
      "Next.js / TypeScript",
      "PostgreSQL / Prisma",
      "Stripe Billing",
      "Auth0 / Supabase Auth",
      "Tailwind CSS",
      "Docker / Cloud Infrastructure",
    ],
    deliverables: [
      "Launch-ready SaaS codebase",
      "Billing & subscription integration",
      "Telemetry & error tracking setup",
      "DevOps & staging environments",
    ],
    iconName: "Rocket",
  },
  {
    id: "automation",
    slug: "automation",
    title: "Business & Workflow Automation",
    shortDescription:
      "Eliminate repetitive manual operations by engineering automated event-driven workflows, data pipelines, and scheduled syncs.",
    fullDescription:
      "We audit repetitive operational bottlenecks and engineer robust background automation systems. From automated CRM reconciliations to invoice parsing and cross-platform notification dispatchers, our pipelines operate reliably 24/7.",
    problemSolved:
      "Human error in manual data entry, slow cross-department handoffs, high labor overhead on administrative tasks, and siloed data systems.",
    whatWeBuild: [
      "Event-driven webhook listeners and background workers",
      "Automated financial reconciliation and reporting pipelines",
      "Cross-system data synchronization engines",
      "Intelligent alert triage and escalation bots",
    ],
    technologies: [
      "Node.js / Python",
      "Redis / BullMQ",
      "Serverless Functions",
      "Webhook Architecture",
      "PostgreSQL",
      "Docker",
    ],
    deliverables: [
      "Fault-tolerant workflow execution engine",
      "Audit logs and monitoring dashboard",
      "Automated retry mechanisms & alerts",
      "Step-by-step operational playbooks",
    ],
    iconName: "Cpu",
  },
  {
    id: "api-integrations",
    slug: "api-integrations",
    title: "API & Systems Integration",
    shortDescription:
      "High-throughput RESTful and GraphQL APIs, third-party microservices, and secure middleware connectors for connected ecosystems.",
    fullDescription:
      "We architect resilient, secure API layers that connect internal databases, third-party SaaS tools, payment processors, and client applications. Every endpoint is engineered with rate limiting, comprehensive validation, and sub-100ms response targets.",
    problemSolved:
      "Incompatible legacy software, lack of standardized APIs, insecure third-party integrations, and unmonitored communication failures between tools.",
    whatWeBuild: [
      "Scalable RESTful & GraphQL backend microservices",
      "Custom third-party middleware (CRMs, ERPs, Payment Gateways)",
      "Secure OAuth2 authentication and API gateway routing",
      "High-performance caching and rate-limiting layers",
    ],
    technologies: [
      "TypeScript / Node.js",
      "FastAPI / Python",
      "GraphQL",
      "Redis Caching",
      "OpenAPI / Swagger",
      "PostgreSQL",
    ],
    deliverables: [
      "OpenAPI 3.0 documentation & schemas",
      "Automated integration & load test suites",
      "Rate-limiting and security audit report",
      "SDKs for web and mobile clients",
    ],
    iconName: "Network",
  },
];
