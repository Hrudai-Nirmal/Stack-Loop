"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";

type Currency = "USD" | "INR";

const USD_TO_INR = 84;

const pricingPackages = [
  {
    tier: "Tier 1",
    title: "The Automation Blueprint",
    rangeUSD: { min: 500, max: 950 },
    detail: "Discovery and roadmap package for identifying your fastest automation wins.",
  },
  {
    tier: "Tier 2",
    title: "The Core Automation Build",
    rangeUSD: { min: 1500, max: 3500 },
    detail: "One focused workflow built and deployed end-to-end with handoff support.",
  },
  {
    tier: "Tier 3",
    title: "Continuous Care & Optimization",
    rangeUSD: null,
    detail: "Placeholder for maintenance and retainer support after initial build phases.",
  },
] as const;

function formatAmount(amountUsd: number, currency: Currency) {
  if (currency === "USD") return `$${amountUsd.toLocaleString("en-US")}`;
  return `₹${(amountUsd * USD_TO_INR).toLocaleString("en-IN")}`;
}

export default function PricingPage() {
  const [currency, setCurrency] = useState<Currency>("INR");

  const conversionNote = useMemo(() => {
    if (currency === "USD") return "All prices shown in USD.";
    return `All prices shown in INR using fixed conversion: 1 USD = ${USD_TO_INR} INR.`;
  }, [currency]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader activeTab="pricing" />

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-28 md:px-8 md:pt-30">
        <div className="rounded-lg border-2 border-border bg-card p-7 brutal-shadow md:p-10">
          <Badge className="rounded-md border-2 border-border bg-primary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-primary-foreground">
            Pricing
          </Badge>
          <h1 className="mt-4 max-w-5xl font-[family-name:var(--font-display)] text-4xl leading-tight md:text-6xl">
            Clear pricing for practical automation outcomes.
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">
            Choose the package that matches your current bottleneck. We keep pricing transparent and scoped
            to real business impact.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
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
        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPackages.map((pkg) => (
            <div key={pkg.tier} className="rounded-lg border-2 border-border bg-card p-6 brutal-shadow">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {pkg.tier}
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl leading-tight">
                {pkg.title}
              </h2>
              {pkg.rangeUSD ? (
                <p className="mt-4 text-3xl font-semibold">
                  {formatAmount(pkg.rangeUSD.min, currency)} - {formatAmount(pkg.rangeUSD.max, currency)}
                </p>
              ) : (
                <p className="mt-4 rounded-md border-2 border-dashed border-border bg-background px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Coming Soon
                </p>
              )}
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{pkg.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.12em] text-muted-foreground">{conversionNote}</p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-8">
        <div className="rounded-lg border-2 border-border bg-card p-6 brutal-shadow md:p-8">
          <Badge className="rounded-md border-2 border-border bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-secondary-foreground">
            Pricing Policy
          </Badge>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
            <li>- Final quote depends on workflow complexity and integration count.</li>
            <li>- You own all software accounts and pay API/tool subscriptions directly.</li>
            <li>- This keeps your operations secure, portable, and under your business control.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
