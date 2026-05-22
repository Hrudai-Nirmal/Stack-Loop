import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tiers = [
  {
    tier: "Tier 1",
    label: "The Discovery / Audit Offer",
    title: "The Automation Blueprint",
    subtitle:
      "A complete technical evaluation to find your biggest time-wasters and map out your custom AI roadmap.",
    status: "Active",
  },
  {
    tier: "Tier 2",
    label: "Core Implementation",
    title: "The Core Automation Build",
    subtitle:
      "Hands-on deployment of a custom AI automation pipeline to eliminate manual data entry and reclaim your team's hours.",
    status: "Active",
  },
  {
    tier: "Tier 3",
    label: "The Retainer / Maintenance Offer",
    title: "Continuous Care & Optimization",
    subtitle:
      "Daily error monitoring, prompt fine-tuning, and dedicated technical maintenance to ensure your AI workflows run flawlessly.",
    status: "Placeholder",
  },
];

const toolGroups = [
  {
    title: "The Core Execution Engine (Building the Workflows)",
    body: "These are the exact tools used to build, route, and manage client automations.",
    items: [
      "Make.com: Primary canvas for cost-effective multi-step logic and heavy payload handling.",
      "Zapier: Fallback when a client already runs Zapier or needs niche native integrations.",
      "n8n.io: Fair-code option for clients requiring private hosting and stronger data control.",
    ],
  },
  {
    title: "The AI & Prompting Layer (The Brains)",
    body: "Direct model access and prompt testing before production deployment.",
    items: [
      "OpenAI Platform & Anthropic Console: Prompt/system testing, rate limit validation, and schema design.",
      "Dify.ai: Internal chatbots, multi-agent orchestration, and rapid RAG with client docs.",
      "Gumloop: Document-heavy processing and web research/data extraction flows.",
    ],
  },
  {
    title: "Data Infrastructure & Enrichment",
    body: "Storage, list handling, and contextual enrichment for downstream systems.",
    items: [
      "Airtable: Lightweight relational layer between intake, processing, and CRM handoff.",
      "Clay.com: Premium enrichment workflows for profile, company, and lead intelligence.",
    ],
  },
  {
    title: "Consultancy Operations (Client Management)",
    body: "Professional delivery systems for clarity, trust, and long-term maintainability.",
    items: [
      "Loom: Fast walkthrough videos that replace long support threads.",
      "Notion: Client delivery hubs with SOPs, architecture links, and ops playbooks.",
      "Miro / Whimsical: Visual process mapping before build kickoff and scope lock-in.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b-2 border-border bg-[#B6AE9FCC] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:flex-nowrap md:px-8">
          <Link
            href="/"
            className="border-2 border-border bg-[#EABE6C] px-3 py-1 font-[family-name:var(--font-display)] text-xl tracking-tight brutal-shadow sm:text-2xl"
          >
            Stack&Loop
          </Link>
          <nav className="flex items-center gap-3 text-sm font-medium sm:text-[0.95rem]">
            <a
              href="#tiers"
              className="border-2 border-border bg-[#EABE6C] px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1"
            >
              Tiers
            </a>
            <a
              href="#tooling"
              className="border-2 border-border bg-[#EABE6C] px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1"
            >
              Tooling
            </a>
            <Link
              href="/#contact"
              className="border-2 border-border bg-[#EABE6C] px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 pt-10 md:px-8 md:pt-14">
        <div className="rounded-lg border-2 border-border bg-card p-7 brutal-shadow md:p-10">
          <Badge className="rounded-md border-2 border-border bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-secondary-foreground">
            Services
          </Badge>
          <h1 className="mt-4 max-w-5xl font-[family-name:var(--font-display)] text-4xl leading-tight md:text-6xl">
            Automation systems for SMB operators and individuals who need their time back.
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">
            We design and deploy practical AI workflows that remove repetitive work, reduce manual errors,
            and give teams operational clarity.
          </p>
        </div>
      </section>

      <section id="tiers" className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-8">
        <div className="mb-5">
          <Badge className="rounded-md border-2 border-border bg-primary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-primary-foreground">
            Offer Tiers
          </Badge>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.tier}
              className="rounded-lg border-2 border-border bg-card brutal-shadow"
            >
              <CardHeader className="border-b-2 border-border">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {tier.tier}
                  </span>
                  <span
                    className={`rounded-md border-2 border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                      tier.status === "Active"
                        ? "bg-[#EABE6C] text-[#3D0301]"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {tier.status}
                  </span>
                </div>
                <CardTitle className="font-[family-name:var(--font-display)] text-3xl leading-tight">
                  {tier.title}
                </CardTitle>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  {tier.label}
                </p>
              </CardHeader>
              <CardContent className="pt-5">
                <p className="text-base leading-8 text-muted-foreground">{tier.subtitle}</p>
                {tier.tier === "Tier 3" ? (
                  <p className="mt-5 rounded-md border-2 border-dashed border-border bg-background px-3 py-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Placeholder: retainers open after Tier 1 + Tier 2 rollout baseline.
                  </p>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="tooling" className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-8">
        <div className="mb-5">
          <Badge className="rounded-md border-2 border-border bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-secondary-foreground">
            Tool Stack
          </Badge>
        </div>
        <div className="space-y-5">
          {toolGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-lg border-2 border-border bg-card p-6 brutal-shadow md:p-8"
            >
              <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight md:text-4xl">
                {group.title}
              </h2>
              <p className="mt-3 max-w-4xl text-base leading-8 text-muted-foreground">{group.body}</p>
              <ul className="mt-4 space-y-2 text-base leading-7 text-foreground/90">
                {group.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
