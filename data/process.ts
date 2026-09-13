export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyActivities: string[];
  deliverables: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understanding business goals & constraints",
    description:
      "We begin with technical discovery and architecture scoping to align on your business objectives, target audience, legacy dependencies, and security boundaries.",
    keyActivities: [
      "Technical stakeholder interviews",
      "Architecture & API audit",
      "Constraint analysis & milestone definition",
      "Data privacy and compliance scoping",
    ],
    deliverables: ["Technical Scope Document", "Architecture Blueprint", "Project Timeline & Milestones"],
  },
  {
    step: "02",
    title: "Plan",
    subtitle: "Data modeling & technical specifications",
    description:
      "We architect the data contracts, choose the optimal technology stack, specify system boundaries, and produce clear technical blueprints before writing production code.",
    keyActivities: [
      "Database schema & API contract design",
      "Cloud & serverless infrastructure planning",
      "Third-party integration mapping",
      "Risk mitigation & rollback planning",
    ],
    deliverables: ["System Architecture RFC", "OpenAPI Specifications", "Sprint Roadmap"],
  },
  {
    step: "03",
    title: "Design",
    subtitle: "UX wireframing & design system tokens",
    description:
      "We design intuitive, accessible user interfaces grounded in rigorous UX principles, interactive prototypes, and modular design systems tailored to your brand identity.",
    keyActivities: [
      "High-fidelity responsive UI mockups",
      "Interactive component prototyping",
      "WCAG 2.2 AA accessibility audit",
      "Design token library creation",
    ],
    deliverables: ["Figma Design System", "Interactive Prototype", "Component Design Tokens"],
  },
  {
    step: "04",
    title: "Build",
    subtitle: "Clean code & rapid engineering iterations",
    description:
      "We engineer the solution in transparent bi-weekly sprints using modern TypeScript, server components, automated CI/CD pipelines, and rigorous unit testing.",
    keyActivities: [
      "Modular full-stack engineering",
      "Continuous integration & preview environments",
      "Automated unit & integration test coverage",
      "Weekly milestone demos & async progress logs",
    ],
    deliverables: ["Clean, Documented Source Code", "Preview Staging Deployments", "Sprint Review Reports"],
  },
  {
    step: "05",
    title: "Test",
    subtitle: "Security, load testing & accessibility QA",
    description:
      "Before production cutover, we subject the build to rigorous end-to-end testing, responsive cross-device validation, load testing, and security vulnerability scans.",
    keyActivities: [
      "Cross-browser & multi-device viewport testing",
      "Performance & Core Web Vitals optimization",
      "End-to-end user journey validation",
      "Security headers & input sanitization audit",
    ],
    deliverables: ["QA Audit Report", "Lighthouse 95+ Audit", "Security & Vulnerability Sign-off"],
  },
  {
    step: "06",
    title: "Launch",
    subtitle: "Zero-downtime deployment & telemetry",
    description:
      "We orchestrate smooth production deployment to modern cloud infrastructure (Vercel / AWS), configure automated telemetry and error monitoring, and provide handoff training.",
    keyActivities: [
      "DNS configuration & SSL certificate provisioning",
      "Error monitoring & telemetry dashboard setup",
      "Codebase repository transfer & documentation handoff",
      "Post-launch monitoring & support window",
    ],
    deliverables: ["Live Production Application", "Complete Documentation & Runbooks", "Repository Ownership Transfer"],
  },
];
