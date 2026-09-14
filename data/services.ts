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
      "Build and integrate custom AI solutions, RAG search systems, and automated workflows directly into your applications.",
    fullDescription:
      "We build practical AI systems tailored to your specific business needs. From smart document search and summarization to conversational assistants and automated data pipelines, we connect modern AI models with dependable software backends.",
    problemSolved:
      "Teams spend hours on repetitive manual data entry, searching through fragmented documents, or struggling with off-the-shelf AI tools that don't fit their workflows.",
    whatWeBuild: [
      "Custom search and retrieval (RAG) systems over internal documents",
      "Document parsing, text extraction, and data structuring pipelines",
      "Smart workflow assistants and domain-specific agents",
      "Custom API endpoints connecting OpenAI, Claude, or open-source models",
      "Multimodal audio, visual, and text processing workflows",
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
      "Tested and documented API endpoints",
      "Data indexing and search architecture",
      "Prompt engineering & evaluation setup",
      "Integration guides & client documentation",
    ],
    iconName: "Bot",
  },
  {
    id: "web-apps",
    slug: "web-apps",
    title: "Web Application Development",
    shortDescription:
      "Fast, responsive web applications and dashboards built with React, Next.js, TypeScript, and clean architecture.",
    fullDescription:
      "We build modern web applications focused on performance, accessibility, and smooth user experiences. Every project is engineered with clean, modular code that is easy for your team to maintain and scale.",
    problemSolved:
      "Slow, outdated web interfaces that frustrate users, perform poorly on mobile devices, and become difficult to update as the product grows.",
    whatWeBuild: [
      "Modern client-facing web applications and customer portals",
      "Interactive analytics dashboards and admin panels",
      "B2B internal tools and management platforms",
      "Marketing websites with headless content management",
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
      "Responsive, accessible frontend codebase",
      "Optimized server and API routes",
      "Automated deployment pipeline (CI/CD)",
      "Complete source code & documentation",
    ],
    iconName: "Globe",
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    title: "Mobile Application Development",
    shortDescription:
      "Cross-platform mobile apps for iOS and Android built with React Native for fast performance and intuitive UX.",
    fullDescription:
      "We build cross-platform mobile apps that feel fast, launch smoothly, and handle offline situations gracefully. By sharing code across iOS and Android with React Native, we help you get to market faster without sacrificing quality.",
    problemSolved:
      "Managing separate iOS and Android codebases is costly and slow, while poorly built mobile apps crash, lag, or fail when internet connection drops.",
    whatWeBuild: [
      "Cross-platform iOS and Android mobile apps",
      "Field tools and workforce management apps",
      "Booking, scheduling, and on-demand customer apps",
      "Offline-capable apps with background data sync",
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
      "Production-ready iOS and Android builds",
      "Device testing across screen sizes",
      "Push notifications and deep-linking setup",
      "Store submission guidance and documentation",
    ],
    iconName: "Smartphone",
  },
  {
    id: "saas-mvp",
    slug: "saas-mvp",
    title: "SaaS & MVP Engineering",
    shortDescription:
      "Turn your product concept into a launch-ready SaaS MVP with user auth, billing, and clean database architecture.",
    fullDescription:
      "We help founders and product teams build and launch validated MVPs quickly. We focus on getting core features into the hands of real users while laying a clean architectural foundation so you don't have to rewrite everything later.",
    problemSolved:
      "Founders spending too much time and budget building overly complicated prototypes before testing their core product with real paying users.",
    whatWeBuild: [
      "Multi-tenant SaaS platforms with team and user roles",
      "Stripe subscription billing and checkout flows",
      "User authentication, onboarding, and profile management",
      "Activity logs, email notifications, and admin dashboards",
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
      "Launch-ready SaaS application codebase",
      "Stripe billing & subscription integration",
      "Authentication & database setup",
      "Staging and production deployment configuration",
    ],
    iconName: "Rocket",
  },
  {
    id: "automation",
    slug: "automation",
    title: "Business & Workflow Automation",
    shortDescription:
      "Automate repetitive business tasks, sync data across tools, and build reliable background workflows.",
    fullDescription:
      "We help eliminate manual data entry and repetitive operations by building automated workflows. From synchronizing CRM data to processing invoices and sending alerts, our systems run reliably in the background.",
    problemSolved:
      "Time lost copying data across different tools, human errors in manual tasks, and delays in communicating updates between teams.",
    whatWeBuild: [
      "Webhook listeners and automated data sync between tools",
      "Document and invoice processing pipelines",
      "Custom alerts and notification bots (Slack, email, SMS)",
      "Scheduled data imports and reporting jobs",
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
      "Configured workflow scripts and worker queues",
      "Error handling and automated retry mechanisms",
      "Execution logs and status dashboard",
      "Clear documentation and runbooks",
    ],
    iconName: "Cpu",
  },
  {
    id: "api-integrations",
    slug: "api-integrations",
    title: "API & Systems Integration",
    shortDescription:
      "Clean REST and GraphQL APIs, third-party integrations, and backend services to connect your tools and data.",
    fullDescription:
      "We build reliable API layers that connect your databases, third-party services (CRMs, payment gateways, ERPs), and client applications with clean validation, authentication, and comprehensive documentation.",
    problemSolved:
      "Siloed data across disconnected software tools, unmaintained legacy APIs, and integration failures that disrupt daily operations.",
    whatWeBuild: [
      "Custom RESTful and GraphQL backend APIs",
      "Third-party integrations (CRMs, payment processors, webhooks)",
      "OAuth2 authentication and role-based access control",
      "API caching and rate limiting for stability",
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
      "Interactive API documentation (Swagger/OpenAPI)",
      "Automated test suites for endpoints",
      "Security and input validation rules",
      "Client integration examples and SDKs",
    ],
    iconName: "Network",
  },
];
