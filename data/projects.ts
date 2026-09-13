export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "AI Applications" | "Web Apps" | "SaaS & MVP" | "Mobile" | "Automation";
  tagline: string;
  badgeType: "Concept Showcase" | "Internal Architecture Demo" | "Engineered Prototype";
  problem: string;
  context: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  architectureSummary: string;
  metricsOrOutcome: string;
  featured: boolean;
  visualMockup: {
    accentColor: string;
    metrics: { label: string; value: string }[];
    techBadges: string[];
  };
}

export const PROJECTS: Project[] = [
  {
    id: "vexaparse-ai",
    slug: "vexaparse-ai-document-intelligence",
    title: "VexaParse — Multimodal AI Document Intelligence",
    category: "AI Applications",
    tagline: "High-throughput financial document extraction and semantic RAG search platform.",
    badgeType: "Concept Showcase",
    problem:
      "Financial and legal teams spend hundreds of hours manually reviewing complex multi-page PDF statements, contracts, and filings to extract unstructured tabular data, leading to high operational latency and transposition errors.",
    context:
      "Engineered as a reference architecture for enterprise clients requiring on-premise or sovereign cloud document understanding without sending sensitive financial telemetry to unvetted third-party endpoints.",
    solution:
      "A distributed pipeline combining vision-language models for layout-aware OCR, vector embedding indexing with Qdrant, and fine-tuned LLM extraction to convert unstructured documents into validated JSON schemas and natural language search queries in real time.",
    keyFeatures: [
      "Layout-aware multimodal document parsing with coordinate-anchored bounding boxes",
      "Hybrid dense-sparse vector search over 100k+ document chunks",
      "Automated confidence scoring and human-in-the-loop exception routing",
      "Strict schema enforcement with Pydantic and JSON schema validation",
      "End-to-end encrypted document storage with audit logging",
    ],
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "Tailwind CSS", "Qdrant", "OpenAI / Claude APIs", "Docker"],
    architectureSummary:
      "FastAPI worker cluster orchestrating Celery task queues for asynchronous document chunking and vector indexing, with a Next.js 15 frontend providing real-time document preview and split-pane verification.",
    metricsOrOutcome:
      "Achieves sub-3-second end-to-end extraction per 10-page document with >98.5% field accuracy on standard financial benchmark datasets.",
    featured: true,
    visualMockup: {
      accentColor: "#06B6D4",
      metrics: [
        { label: "Target Latency", value: "< 2.8s" },
        { label: "Extraction Accuracy", value: "98.5%" },
        { label: "Indexing Throughput", value: "1,200 pgs/min" },
      ],
      techBadges: ["FastAPI", "Next.js", "Qdrant", "Tailwind"],
    },
  },
  {
    id: "pulseflow-saas",
    slug: "pulseflow-telemetry-saas-platform",
    title: "PulseFlow — Cloud Telemetry & Operations Hub",
    category: "SaaS & MVP",
    tagline: "Multi-tenant real-time server telemetry and incident response platform.",
    badgeType: "Internal Architecture Demo",
    problem:
      "Distributed engineering teams often struggle with fragmented monitoring tools that lack cohesive incident triage workflows and require complex multi-tool subscriptions for startups.",
    context:
      "Built by KKVEXA to showcase rapid full-stack SaaS architecture featuring multi-tenancy, real-time WebSocket metrics, and turnkey Stripe billing integration.",
    solution:
      "A complete SaaS platform providing lightweight agent collectors, high-frequency time-series data aggregation, customizable live dashboards, and rule-based Slack/webhook alert dispatches.",
    keyFeatures: [
      "Multi-tenant organization management with fine-grained RBAC permissions",
      "Live metric streaming via WebSockets and Server-Sent Events (SSE)",
      "Automated threshold alert engine with rate-limited notification cascades",
      "Integrated Stripe billing with tiered usage-based metering",
      "Dark-mode first responsive UI with accessible high-density data tables",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "Stripe API", "Chart.js"],
    architectureSummary:
      "Next.js App Router frontend with React Server Components for instantaneous initial page loads, backed by Redis for ephemeral time-series buffering and PostgreSQL for tenant persistence.",
    metricsOrOutcome:
      "Engineered to sustain 50,000 ingest events/sec per cluster node with under 40ms dashboard render latency.",
    featured: true,
    visualMockup: {
      accentColor: "#2563EB",
      metrics: [
        { label: "Event Ingest", value: "50k/sec" },
        { label: "Render Latency", value: "< 40ms" },
        { label: "Multi-tenancy", value: "Isolated RBAC" },
      ],
      techBadges: ["Next.js 15", "PostgreSQL", "Redis", "Stripe"],
    },
  },
  {
    id: "autoloop-enterprise",
    slug: "autoloop-workflow-automation-engine",
    title: "AutoLoop — Event-Driven Integration Engine",
    category: "Automation",
    tagline: "Resilient background worker engine connecting CRMs, ERPs, and communications.",
    badgeType: "Engineered Prototype",
    problem:
      "Growing mid-market enterprises lose hundreds of hours reconciling customer order statuses, inventory updates, and invoice generation across disparate legacy ERP and CRM systems.",
    context:
      "Designed as a scalable enterprise integration template demonstrating fault-tolerant asynchronous event piping and automated dead-letter queue retry mechanics.",
    solution:
      "An automated workflow dispatcher supporting visual conditional branches, idempotent webhook handling, payload transformation, and cryptographic signature verification across 20+ standard APIs.",
    keyFeatures: [
      "Idempotent webhook ingestion with cryptographic replay protection",
      "Visual JSON schema mapper and transformation pipeline",
      "Exponential backoff retry queues with dead-letter triage console",
      "Comprehensive execution audit trail with 90-day searchable logs",
      "Zero-downtime hot reloading of workflow definitions",
    ],
    technologies: ["TypeScript", "Node.js", "BullMQ", "Redis", "PostgreSQL", "Tailwind CSS", "Docker"],
    architectureSummary:
      "Microservices architecture using BullMQ on Redis for worker task queuing, decoupled from the Next.js administration console via OpenAPI-compliant REST contracts.",
    metricsOrOutcome:
      "Demonstrates 99.99% message delivery reliability with zero duplicate executions during simulated network partition stress tests.",
    featured: true,
    visualMockup: {
      accentColor: "#38BDF8",
      metrics: [
        { label: "Queue Uptime", value: "99.99%" },
        { label: "Throughput", value: "10k tasks/min" },
        { label: "Retry Policy", value: "Auto Backoff" },
      ],
      techBadges: ["BullMQ", "Redis", "TypeScript", "Node.js"],
    },
  },
  {
    id: "orbit-mobile",
    slug: "orbit-field-services-mobile-suite",
    title: "Orbit — Offline-First Field Service Suite",
    category: "Mobile",
    tagline: "Cross-platform mobile application engineered for field engineers in low-connectivity environments.",
    badgeType: "Concept Showcase",
    problem:
      "Technicians in remote industrial locations frequently lose network connectivity, causing mobile web tools to drop data, fail uploads, and delay critical inspection reports.",
    context:
      "Engineered to prove offline-first sync synchronization techniques on iOS and Android with conflict-free replicated data structures.",
    solution:
      "A cross-platform React Native application utilizing local SQLite storage, background delta synchronization, biometric access, and on-device image compression before cloud upload.",
    keyFeatures: [
      "Offline-first local database caching with automated background sync",
      "Client-side image compression and batch multipart upload manager",
      "Digital signature capture and automated PDF report generation",
      "Biometric authentication with secure hardware keychain storage",
      "60fps gesture-driven interface designed for high-glare outdoor usage",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "SQLite", "Tailwind / NativeWind", "Node.js"],
    architectureSummary:
      "Client-side SQLite engine tracking mutations in local change-log tables, syncing with an idempotent backend endpoint upon network recovery.",
    metricsOrOutcome:
      "Guarantees 100% data preservation during offline sessions with automated synchronization completing within 1.5s of reconnection.",
    featured: false,
    visualMockup: {
      accentColor: "#60A5FA",
      metrics: [
        { label: "Sync Speed", value: "1.5s auto" },
        { label: "Offline Mode", value: "100% local" },
        { label: "FPS Target", value: "60 fps" },
      ],
      techBadges: ["React Native", "Expo", "SQLite", "TypeScript"],
    },
  },
  {
    id: "lumina-web",
    slug: "lumina-interactive-commerce-platform",
    title: "Lumina — High-Conversion Digital Commerce",
    category: "Web Apps",
    tagline: "Sub-second page transitions, accessible architecture, and headless checkout.",
    badgeType: "Concept Showcase",
    problem:
      "Traditional monolithic eCommerce platforms suffer from bloated JavaScript payloads, slow mobile render times, and poor Core Web Vitals, suppressing conversion rates.",
    context:
      "Demonstration of modern headless web engineering combining Next.js Server Components, edge caching, and WCAG 2.2 AA accessibility standards.",
    solution:
      "A headless web application delivering lightning-fast product filtering, instant client routing, accessible keyboard navigation, and seamless checkout integrations.",
    keyFeatures: [
      "Zero-layout-shift image optimization with Next/Image and blur placeholders",
      "Edge-cached dynamic catalog search with instant debounced filtering",
      "Full keyboard navigable product galleries and checkout modals",
      "100/100 Core Web Vitals compliance on mobile and desktop",
      "Localized multi-currency display with dynamic tax estimation",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GraphQL", "Stripe Elements"],
    architectureSummary:
      "Server-rendered static catalog pages with incremental static regeneration (ISR) and localized edge middleware routing.",
    metricsOrOutcome:
      "Achieved 99+ Lighthouse performance score with sub-800ms Largest Contentful Paint (LCP) on 4G mobile emulation.",
    featured: false,
    visualMockup: {
      accentColor: "#06B6D4",
      metrics: [
        { label: "LCP", value: "780ms" },
        { label: "Lighthouse", value: "99/100" },
        { label: "Layout Shift", value: "0.00 CLS" },
      ],
      techBadges: ["Next.js", "React", "TypeScript", "Tailwind"],
    },
  },
];
