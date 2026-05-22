"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Currency = "USD" | "INR";

const USD_TO_INR = 84;

const packageData = [
  {
    tier: "Tier 1",
    label: "The Discovery / Audit Offer",
    title: "The Automation Blueprint",
    subtitle:
      "A complete technical evaluation to find your biggest time-wasters and map out your custom AI roadmap.",
    whoItsFor:
      "Best for teams who know they are wasting time, but need clear direction before spending on implementation.",
    includes: [
      "Workflow and software-stack audit",
      "60-minute strategy workshop",
      "Custom roadmap showing where automation will save the most hours",
    ],
    pricingUSD: { min: 500, max: 950 },
    status: "active",
  },
  {
    tier: "Tier 2",
    label: "Core Implementation",
    title: "The Core Automation Build",
    subtitle:
      "Hands-on deployment of a custom AI automation pipeline to eliminate manual data entry and reclaim your team's hours.",
    whoItsFor:
      "Best for businesses dealing with one major operational bottleneck that slows growth every week.",
    includes: [
      "Focused Blueprint for one core workflow",
      "End-to-end build, QA, and launch",
      "Loom handoff walkthrough + basic SOP for team usage",
    ],
    pricingUSD: { min: 1500, max: 3500 },
    status: "active",
  },
  {
    tier: "Tier 3",
    label: "The Retainer / Maintenance Offer",
    title: "Continuous Care & Optimization",
    subtitle:
      "Daily error monitoring, prompt fine-tuning, and dedicated technical maintenance to ensure your AI workflows run flawlessly.",
    whoItsFor: "Reserved for growth-stage teams after initial deployments are live and stable.",
    includes: ["Ongoing monitoring", "Priority fixes", "Continuous optimization"],
    pricingUSD: null,
    status: "placeholder",
  },
] as const;

const painPoints = [
  "Leads are delayed because someone still copies data between tools manually.",
  "Your team spends high-value hours on repetitive admin tasks every day.",
  "Customer requests pile up because inbox and task routing are still manual.",
];

const howItWorks = [
  {
    title: "1. Discovery Audit",
    detail: "We review your current process and identify the fastest high-impact wins.",
  },
  {
    title: "2. Blueprint Approval",
    detail: "You get a clear plan of what will be automated, how it works, and expected time savings.",
  },
  {
    title: "3. Build & Testing",
    detail: "We implement and test your workflow in your own accounts with minimal disruption.",
  },
  {
    title: "4. Handoff & Team Enablement",
    detail: "You receive Loom walkthroughs and practical SOP notes so your team can run confidently.",
  },
];

const faqs = [
  {
    q: "Do we need to replace our existing software?",
    a: "No. We build on top of the tools you already use and connect them more intelligently.",
  },
  {
    q: "Who owns the automation accounts and API billing?",
    a: "You do. Your business keeps full ownership and pays providers directly for control and transparency.",
  },
  {
    q: "Do we need technical staff to maintain this?",
    a: "Not for day-to-day usage. We deliver clear operating instructions and can support ongoing optimization.",
  },
];

const toolingCompact = [
  "Make.com (primary build canvas)",
  "Zapier (fallback for niche integrations)",
  "n8n (privacy-first self-hosted option)",
  "OpenAI / Anthropic / Google AI Studio (prompt and schema validation)",
  "Dify + Gumloop (RAG, document-heavy AI flows)",
  "Airtable + Clay (data ops and enrichment)",
  "Loom + Notion + Miro/Whimsical (handoff, docs, process visibility)",
];

function formatAmount(amountUsd: number, currency: Currency) {
  if (currency === "USD") {
    return `$${amountUsd.toLocaleString("en-US")}`;
  }
  return `₹${(amountUsd * USD_TO_INR).toLocaleString("en-IN")}`;
}

export default function ServicesPage() {
  const [currency, setCurrency] = useState<Currency>("INR");

  const pricingLabel = useMemo(() => {
    if (currency === "USD") return "All ranges in USD.";
    return `All ranges in INR (converted at fixed rate: 1 USD = ${USD_TO_INR} INR).`;
  }, [currency]);

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
              href="#packages"
              className="border-2 border-border bg-[#EABE6C] px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1"
            >
              Packages
            </a>
            <a
              href="#pricing"
              className="border-2 border-border bg-[#EABE6C] px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="border-2 border-border bg-[#EABE6C] px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1"
            >
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-10 md:px-8 md:pt-14">
        <div className="rounded-lg border-2 border-border bg-card p-7 brutal-shadow md:p-10">
          <Badge className="rounded-md border-2 border-border bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-secondary-foreground">
            Services
          </Badge>
          <h1 className="mt-4 max-w-5xl font-[family-name:var(--font-display)] text-4xl leading-tight md:text-6xl">
            Reclaim your team&apos;s time by automating the repetitive work slowing your business down.
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">
            We help small and medium businesses remove manual busywork, reduce errors, and build workflows
            that run smoothly every day.
          </p>
          <div className="mt-7">
            <Link
              href="/#contact"
              className="inline-flex h-11 items-center rounded-md border-2 border-border bg-primary px-5 text-sm font-semibold uppercase tracking-[0.1em] text-primary-foreground brutal-shadow transition-transform duration-200 hover:-translate-y-1"
            >
              Book Free Audit
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 md:px-8">
        <div className="rounded-lg border-2 border-border bg-card p-6 brutal-shadow md:p-8">
          <Badge className="rounded-md border-2 border-border bg-primary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-primary-foreground">
            Common Bottlenecks
          </Badge>
          <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground">
            {painPoints.map((point) => (
              <li key={point}>- {point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="packages" className="mx-auto w-full max-w-7xl px-4 pb-10 md:px-8">
        <div className="mb-5">
          <Badge className="rounded-md border-2 border-border bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-secondary-foreground">
            Packages
          </Badge>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {packageData.map((pkg) => (
            <Card key={pkg.tier} className="rounded-lg border-2 border-border bg-card brutal-shadow">
              <CardHeader className="border-b-2 border-border">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {pkg.tier}
                  </span>
                  <span
                    className={`rounded-md border-2 border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                      pkg.status === "active"
                        ? "bg-[#EABE6C] text-[#3D0301]"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {pkg.status === "active" ? "Active" : "Coming Soon"}
                  </span>
                </div>
                <CardTitle className="font-[family-name:var(--font-display)] text-3xl leading-tight">
                  {pkg.title}
                </CardTitle>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  {pkg.label}
                </p>
              </CardHeader>
              <CardContent className="pt-5">
                <p className="text-base leading-8 text-muted-foreground">{pkg.subtitle}</p>
                <p className="mt-4 text-sm leading-7 text-foreground/85">{pkg.whoItsFor}</p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
                  {pkg.includes.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto w-full max-w-7xl px-4 pb-10 md:px-8">
        <div className="rounded-lg border-2 border-border bg-card p-6 brutal-shadow md:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <Badge className="rounded-md border-2 border-border bg-primary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-primary-foreground">
              Pricing
            </Badge>
            <div className="inline-flex rounded-md border-2 border-border bg-background p-1">
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
                  currency === "USD" ? "bg-[#EABE6C] text-[#3D0301]" : "text-muted-foreground"
                }`}
              >
                USD
              </button>
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
                  currency === "INR" ? "bg-[#EABE6C] text-[#3D0301]" : "text-muted-foreground"
                }`}
              >
                INR
              </button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {packageData
              .filter((pkg) => pkg.pricingUSD)
              .map((pkg) => (
                <div key={pkg.tier} className="rounded-lg border-2 border-border bg-background p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {pkg.tier}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl leading-tight">
                    {pkg.title}
                  </h3>
                  <p className="mt-3 text-2xl font-semibold text-foreground">
                    {formatAmount(pkg.pricingUSD!.min, currency)} -{" "}
                    {formatAmount(pkg.pricingUSD!.max, currency)}
                  </p>
                </div>
              ))}
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.12em] text-muted-foreground">{pricingLabel}</p>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            Final pricing depends on workflow complexity and integrations. You own all software accounts and
            billing directly.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 md:px-8">
        <div className="rounded-lg border-2 border-border bg-card p-6 brutal-shadow md:p-8">
          <Badge className="rounded-md border-2 border-border bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-secondary-foreground">
            How It Works
          </Badge>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {howItWorks.map((step) => (
              <div key={step.title} className="rounded-lg border-2 border-border bg-background p-4">
                <h3 className="font-[family-name:var(--font-display)] text-2xl leading-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto w-full max-w-7xl px-4 pb-10 md:px-8">
        <div className="rounded-lg border-2 border-border bg-card p-6 brutal-shadow md:p-8">
          <Badge className="rounded-md border-2 border-border bg-primary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-primary-foreground">
            FAQs
          </Badge>
          <div className="mt-4 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-lg border-2 border-border bg-background p-4">
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tooling" className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-8">
        <div className="rounded-lg border-2 border-border bg-card p-6 brutal-shadow md:p-8">
          <Badge className="rounded-md border-2 border-border bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-secondary-foreground">
            How We Deliver
          </Badge>
          <p className="mt-3 max-w-4xl text-base leading-8 text-muted-foreground">
            We keep tooling simple and choose the best-fit stack for your business setup.
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-foreground/90">
            {toolingCompact.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
