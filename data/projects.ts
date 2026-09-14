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
    title: "VexaParse — AI Document Intelligence",
    category: "AI Applications",
    tagline: "AI document parsing and semantic search prototype for structured data extraction.",
    badgeType: "Concept Showcase",
    problem:
      "Teams often spend hours manually reviewing PDFs, forms, and reports to pull out specific data points and tables, leading to slow turnaround times and transcription errors.",
    context:
      "Engineered as an internal prototype to explore how modern vision models, optical parsing, and vector search can automate manual document processing workflows.",
    solution:
      "A document processing pipeline combining text extraction, vector embeddings with Qdrant, and LLM-assisted parsing to convert unstructured documents into structured JSON and searchable archives.",
    keyFeatures: [
      "Visual document parsing with coordinate-anchored data extraction",
      "Semantic vector search across multi-page document chunks",
      "Confidence scoring with manual review flags for uncertain fields",
      "Structured schema validation using Pydantic and JSON schemas",
      "Clean document preview and extraction verification UI",
    ],
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "Tailwind CSS", "Qdrant", "OpenAI / Claude APIs", "Docker"],
    architectureSummary:
      "FastAPI backend handling document chunking and vector indexing, paired with a Next.js frontend for real-time document preview and split-pane verification.",
    metricsOrOutcome:
      "Demonstrates automated tabular extraction and semantic search across complex PDF documents with structured JSON output.",
    featured: true,
    visualMockup: {
      accentColor: "#06B6D4",
      metrics: [
        { label: "Input Format", value: "PDF & Tables" },
        { label: "Search Engine", value: "Qdrant RAG" },
        { label: "Data Output", value: "Validated JSON" },
      ],
      techBadges: ["FastAPI", "Next.js", "Qdrant", "Tailwind"],
    },
  },
  {
    id: "pulseflow-saas",
    slug: "pulseflow-telemetry-saas-platform",
    title: "PulseFlow — Cloud Telemetry & Operations Hub",
    category: "SaaS & MVP",
    tagline: "Modern SaaS dashboard template with real-time telemetry, role-based access, and Stripe integration.",
    badgeType: "Internal Architecture Demo",
    problem:
      "Growing product teams often need clear visibility into their servers and app metrics without configuring bloated, complex enterprise monitoring suites.",
    context:
      "Built as an architectural demo showcasing rapid SaaS development with Next.js, real-time WebSocket updates, multi-tenant data isolation, and Stripe billing.",
    solution:
      "A responsive SaaS platform providing lightweight metric collectors, live status dashboards, team permissions, and alert dispatchers.",
    keyFeatures: [
      "Multi-tenant workspace management with role-based permissions (RBAC)",
      "Live metric updates streaming via WebSockets and Server-Sent Events",
      "Configurable threshold alerts with Slack and email webhook notifications",
      "Turnkey Stripe subscription billing with tiered plans",
      "Accessible, high-contrast dark mode dashboard design",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "Stripe API", "Chart.js"],
    architectureSummary:
      "Next.js App Router frontend with React Server Components, backed by Redis for live metric streaming and PostgreSQL for persistent tenant data.",
    metricsOrOutcome:
      "Demonstrates reliable live metric streaming, fast dashboard rendering, and complete subscription workflows.",
    featured: true,
    visualMockup: {
      accentColor: "#2563EB",
      metrics: [
        { label: "Architecture", value: "Multi-Tenant" },
        { label: "Live Updates", value: "WebSockets" },
        { label: "Billing Engine", value: "Stripe Ready" },
      ],
      techBadges: ["Next.js 15", "PostgreSQL", "Redis", "Stripe"],
    },
  },
  {
    id: "autoloop-enterprise",
    slug: "autoloop-workflow-automation-engine",
    title: "AutoLoop — Event-Driven Integration Engine",
    category: "Automation",
    tagline: "Workflow automation prototype connecting webhooks, third-party APIs, and internal tools.",
    badgeType: "Engineered Prototype",
    problem:
      "Businesses frequently waste time on repetitive data synchronization between CRMs, order management systems, invoicing tools, and email notifications.",
    context:
      "Built as a modular workflow automation prototype demonstrating asynchronous event processing, payload transformations, and reliable task retries.",
    solution:
      "An automated workflow engine that listens for webhooks, transforms data payloads, and triggers actions across multiple connected services with built-in retry handling.",
    keyFeatures: [
      "Secure webhook ingestion with signature verification and replay protection",
      "Visual data mapping and JSON payload transformation",
      "Automated retry queues with exponential backoff for failed network calls",
      "Searchable execution logs and run history",
      "Dynamic workflow reloading without service restarts",
    ],
    technologies: ["TypeScript", "Node.js", "BullMQ", "Redis", "PostgreSQL", "Tailwind CSS", "Docker"],
    architectureSummary:
      "Node.js and BullMQ worker queues backed by Redis for task scheduling, paired with a Next.js management interface for workflow configuration.",
    metricsOrOutcome:
      "Demonstrates reliable event queuing, automated error retries, and clean third-party API orchestration.",
    featured: true,
    visualMockup: {
      accentColor: "#38BDF8",
      metrics: [
        { label: "Queue Engine", value: "BullMQ & Redis" },
        { label: "Payloads", value: "Schema Mapping" },
        { label: "Error Handling", value: "Auto Retries" },
      ],
      techBadges: ["BullMQ", "Redis", "TypeScript", "Node.js"],
    },
  },
  {
    id: "orbit-mobile",
    slug: "orbit-field-services-mobile-suite",
    title: "Orbit — Offline-First Field Service App",
    category: "Mobile",
    tagline: "Cross-platform mobile app designed for reliable data collection in low-connectivity areas.",
    badgeType: "Concept Showcase",
    problem:
      "Field technicians often work in remote areas with spotty or no internet connection, causing standard web tools to lose input and delay reports.",
    context:
      "Built as a mobile prototype exploring local-first data architecture and automatic synchronization on iOS and Android.",
    solution:
      "A cross-platform React Native app using local SQLite storage to capture notes, photos, and signatures offline, syncing automatically once reconnected.",
    keyFeatures: [
      "Offline-first local database storage with automatic background syncing",
      "On-device image optimization before upload",
      "Digital signature capture and PDF report generation",
      "Biometric login with secure device keychain storage",
      "Clean, high-contrast mobile interface designed for outdoor use",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "SQLite", "Tailwind / NativeWind", "Node.js"],
    architectureSummary:
      "React Native with local SQLite change logs that automatically sync to backend APIs upon network reconnection.",
    metricsOrOutcome:
      "Preserves local user input during network drops and automatically syncs data when connectivity is restored.",
    featured: false,
    visualMockup: {
      accentColor: "#60A5FA",
      metrics: [
        { label: "Storage", value: "Local SQLite" },
        { label: "Sync Mode", value: "Background Sync" },
        { label: "Platform", value: "iOS & Android" },
      ],
      techBadges: ["React Native", "Expo", "SQLite", "TypeScript"],
    },
  },
  {
    id: "lumina-web",
    slug: "lumina-interactive-commerce-platform",
    title: "Lumina — Modern Digital Commerce",
    category: "Web Apps",
    tagline: "Fast, accessible web storefront with instant filtering and clean checkout flows.",
    badgeType: "Concept Showcase",
    problem:
      "Traditional monolithic eCommerce stores often suffer from heavy JavaScript bundles, slow load times on mobile devices, and clunky navigation.",
    context:
      "Engineered as a modern headless eCommerce storefront prototype focusing on Core Web Vitals, speed, and clean accessibility.",
    solution:
      "A headless storefront delivering instant product filtering, server-rendered catalog pages, smooth keyboard navigation, and Stripe checkout.",
    keyFeatures: [
      "Optimized responsive images with blur placeholders and zero layout shift",
      "Instant client-side catalog filtering and search",
      "Full keyboard-accessible product modals and navigation",
      "Fast page load times with Next.js static and server rendering",
      "Multi-currency display with dynamic cart calculations",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GraphQL", "Stripe Elements"],
    architectureSummary:
      "Next.js App Router with Incremental Static Regeneration (ISR) for fast catalog browsing and secure checkout integration.",
    metricsOrOutcome:
      "Delivers smooth page transitions, fast loading on mobile connections, and accessible checkout UX.",
    featured: false,
    visualMockup: {
      accentColor: "#06B6D4",
      metrics: [
        { label: "Rendering", value: "Next.js ISR" },
        { label: "Performance", value: "Fast Web Vitals" },
        { label: "Checkout", value: "Stripe Ready" },
      ],
      techBadges: ["Next.js", "React", "TypeScript", "Tailwind"],
    },
  },
];
