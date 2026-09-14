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
      "We begin with technical discovery to understand your business objectives, target users, existing tools, and architectural constraints.",
    keyActivities: [
      "Technical stakeholder interviews",
      "Existing tools & API audit",
      "Scope definition & milestone planning",
      "Security and privacy requirements",
    ],
    deliverables: ["Technical Scope Document", "Architecture Blueprint", "Project Timeline & Milestones"],
  },
  {
    step: "02",
    title: "Plan",
    subtitle: "Data modeling & technical specifications",
    description:
      "We design the data schemas, choose the optimal technology stack, define system boundaries, and produce clear technical specs before writing code.",
    keyActivities: [
      "Database schema & API design",
      "Cloud & hosting architecture planning",
      "Third-party integration mapping",
      "Development roadmap & sprint planning",
    ],
    deliverables: ["System Architecture RFC", "OpenAPI Specifications", "Sprint Roadmap"],
  },
  {
    step: "03",
    title: "Design",
    subtitle: "UI/UX wireframing & interactive prototypes",
    description:
      "We design clean, intuitive user interfaces grounded in UX principles, creating interactive prototypes and modular design systems tailored to your brand.",
    keyActivities: [
      "Responsive UI mockups and user flows",
      "Interactive component prototyping",
      "Accessibility & readability review",
      "Design token & style library setup",
    ],
    deliverables: ["Figma Design System", "Interactive Prototype", "Component Design Tokens"],
  },
  {
    step: "04",
    title: "Build",
    subtitle: "Clean code & rapid sprint iterations",
    description:
      "We build the solution in transparent bi-weekly sprints using modern TypeScript, automated CI/CD pipelines, and thorough unit testing.",
    keyActivities: [
      "Modular full-stack engineering",
      "Continuous integration & preview staging environments",
      "Unit & integration test coverage",
      "Weekly milestone demos & async progress updates",
    ],
    deliverables: ["Clean, Documented Source Code", "Preview Staging Deployments", "Sprint Progress Reports"],
  },
  {
    step: "05",
    title: "Test",
    subtitle: "Testing, performance & security checks",
    description:
      "Before production launch, we test across devices and browsers, check performance and page speed, and verify security configurations.",
    keyActivities: [
      "Cross-browser & mobile viewport testing",
      "Performance & Core Web Vitals checks",
      "End-to-end user journey validation",
      "Security headers & input validation audit",
    ],
    deliverables: ["QA Test Summary", "Performance Audit", "Security & Launch Sign-off"],
  },
  {
    step: "06",
    title: "Launch",
    subtitle: "Smooth deployment, monitoring & handoff",
    description:
      "We deploy your application to modern cloud hosting (such as Vercel or AWS), configure error tracking and monitoring, and provide full handoff documentation.",
    keyActivities: [
      "Domain DNS configuration & SSL setup",
      "Error monitoring & logging setup",
      "Git repository transfer & documentation handoff",
      "Post-launch monitoring & support window",
    ],
    deliverables: ["Live Production Application", "Complete Documentation & Runbooks", "Repository Ownership Transfer"],
  },
];
