export type NarrativeSection = {
  id: string;
  eyebrow: string;
  title: string;
  content: string[];
};

export const heroCopy = {
  eyebrow: "Automation for Overloaded Operators",
  headline: "You are not behind. You are buried in work a machine should do.",
  subtext:
    "Stack and Loop helps founder-led teams automate repetitive workflows so you can focus on decisions, delivery quality, and growth.",
  chips: [
    "Lead routing",
    "Follow-ups",
    "Client onboarding",
    "Weekly reporting",
    "Ops handoffs",
  ],
};

export const problemSections: NarrativeSection[] = [
  {
    id: "pain",
    eyebrow: "The Cost of Manual Ops",
    title: "Every repeated click quietly taxes your team.",
    content: [
      "Leads slip because handoffs happen in chats and spreadsheets.",
      "Team members repeat status updates across tools that do not talk to each other.",
      "Owner time gets consumed by avoidable coordination work every day.",
    ],
  },
  {
    id: "relief",
    eyebrow: "What Changes",
    title: "We turn fragile routines into dependable AI-assisted workflows.",
    content: [
      "Important events trigger the right action instantly.",
      "Your data stays synced across CRM, forms, email, and internal tools.",
      "Humans stay in control while automation handles predictable throughput.",
    ],
  },
];

export const processSections: NarrativeSection[] = [
  {
    id: "discover",
    eyebrow: "Step 1",
    title: "Workflow Discovery",
    content: [
      "We map your existing operation and identify the highest-friction loops.",
    ],
  },
  {
    id: "design",
    eyebrow: "Step 2",
    title: "System Design",
    content: [
      "We define trigger logic, decision points, and fallback behavior for real-world reliability.",
    ],
  },
  {
    id: "deploy",
    eyebrow: "Step 3",
    title: "Build + Iterate",
    content: [
      "We deploy in phases, monitor outcomes, and refine until your team trusts the system.",
    ],
  },
];

