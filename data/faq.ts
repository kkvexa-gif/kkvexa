export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Process & Delivery" | "AI & Technology" | "Commercials";
}

export const FAQS: FAQItem[] = [
  {
    id: "services-scope",
    question: "What types of projects does KKVEXA specialize in?",
    answer:
      "KKVEXA is an AI & Software Studio specializing in full-stack web applications, cross-platform mobile apps, custom AI/LLM integrations, SaaS MVP development, and event-driven business automation. We work with startup founders, growing businesses, and engineering teams that need high-caliber technical execution.",
    category: "General",
  },
  {
    id: "ai-readiness",
    question: "How do you evaluate if AI is appropriate for our business problem?",
    answer:
      "We take a pragmatic, engineering-first approach to AI. We only recommend LLMs or machine learning when they provide a measurable return on investment over deterministic software. During technical discovery, we analyze your data availability, accuracy requirements, latency thresholds, and cost constraints to design the simplest, most resilient architecture.",
    category: "AI & Technology",
  },
  {
    id: "engagement-models",
    question: "What engagement models do you support?",
    answer:
      "We primarily operate on fixed-scope milestone sprints for defined MVPs/projects, as well as dedicated monthly engineering retainers for ongoing product development. Every engagement includes clear deliverables, weekly async sprint demos, transparent milestones, and complete codebase ownership.",
    category: "Commercials",
  },
  {
    id: "timeline-mvp",
    question: "How long does it typically take to build an MVP or custom application?",
    answer:
      "A focused, production-grade MVP typically takes 4 to 8 weeks from discovery to deployment. Larger enterprise web platforms or complex multi-tenant SaaS products range between 8 to 14 weeks. We prioritize modular releases so you can test core value with real users as early as possible.",
    category: "Process & Delivery",
  },
  {
    id: "code-ownership",
    question: "Who owns the code and intellectual property upon project completion?",
    answer:
      "You own 100% of the intellectual property, code repositories, architectural designs, and deployment configurations created during our engagement. We transfer full Git repository access and documentation upon milestone completion.",
    category: "Commercials",
  },
  {
    id: "international-collaboration",
    question: "Do you work with international clients across different timezones?",
    answer:
      "Yes. KKVEXA collaborates with clients worldwide. We structure our communication around clear asynchronous documentation, recorded Loom updates, shared Git staging previews, and scheduled live syncs aligned with your timezone.",
    category: "Process & Delivery",
  },
  {
    id: "post-launch-support",
    question: "What happens after the product is launched?",
    answer:
      "Every project includes a post-launch warranty and stabilization window to monitor live telemetry, resolve any edge-case anomalies, and ensure smooth operations. We also offer ongoing maintenance retainers and feature expansion partnerships.",
    category: "Process & Delivery",
  },
];
