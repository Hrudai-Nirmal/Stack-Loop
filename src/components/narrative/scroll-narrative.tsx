"use client";

import { useEffect, useMemo, useRef } from "react";
import { ArrowRight, Bot, ChartNoAxesCombined, Workflow } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ContactForm } from "@/components/narrative/contact-form";
import { SectionShell } from "@/components/narrative/section-shell";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { heroCopy, problemSections, processSections } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const valueCards = [
  {
    title: "Connected Systems",
    detail: "Stop jumping between tools. Your workflows stay synced end-to-end.",
    icon: Workflow,
  },
  {
    title: "Operator Clarity",
    detail: "Real-time summaries and alerts that keep decisions fast and focused.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Human-in-the-Loop AI",
    detail: "AI handles repeatable effort while your team controls important judgment calls.",
    icon: Bot,
  },
];

export function ScrollNarrative() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const socialUrl = useMemo(
    () => process.env.NEXT_PUBLIC_SOCIAL_CTA_URL || "https://www.linkedin.com",
    []
  );

  useEffect(() => {
    if (!pageRef.current) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger);
    if (reducedMotion) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-animate='section']").forEach((el) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
        });
      });
    }, pageRef);

    return () => {
      context.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={pageRef} className="mx-auto w-full max-w-7xl px-4 py-6 md:px-8 md:py-8">
      <header className="mb-8 flex items-center justify-between border-2 border-border bg-card px-4 py-3 brutal-shadow">
        <div className="font-[family-name:var(--font-display)] text-xl tracking-tight">Stack and Loop</div>
        <div className="hidden items-center gap-5 text-sm font-medium md:flex">
          <a href="#how" className="hover:underline">How it works</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <a
          href={socialUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "rounded-none border-2 border-border bg-background px-4 text-[11px] uppercase tracking-[0.1em]"
          )}
        >
          DM
        </a>
      </header>

      <section
        data-animate="section"
        className="mb-12 grid gap-6 border-2 border-border bg-card p-6 brutal-shadow lg:grid-cols-[1.2fr_0.8fr] lg:p-10"
      >
        <div className="space-y-6">
          <Badge className="rounded-none border-2 border-border bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-secondary-foreground">
            {heroCopy.eyebrow}
          </Badge>
          <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-[1.03] md:text-6xl">
            {heroCopy.headline}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{heroCopy.subtext}</p>
          <div className="flex flex-wrap gap-2">
            {heroCopy.chips.map((chip) => (
              <Badge key={chip} variant="outline" className="rounded-none border-2 border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.1em]">
                {chip}
              </Badge>
            ))}
          </div>
        </div>
        <div className="border-2 border-border bg-background p-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Typical Weekly Waste
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between border border-border px-3 py-2"><span>Manual follow-ups</span><strong>9h</strong></div>
            <div className="flex items-center justify-between border border-border px-3 py-2"><span>Status updates</span><strong>6h</strong></div>
            <div className="flex items-center justify-between border border-border px-3 py-2"><span>CRM cleanup</span><strong>4h</strong></div>
          </div>
        </div>
      </section>

      <div className="space-y-10">
        {problemSections.map((section) => (
          <SectionShell key={section.id} id={section.id} eyebrow={section.eyebrow} title={section.title} content={section.content} className="rounded-none border-2" />
        ))}
      </div>

      <section data-animate="section" className="my-12 border-2 border-border bg-card p-6 brutal-shadow md:p-10">
        <div className="mb-6 space-y-3">
          <Badge className="rounded-none border-2 border-border bg-primary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-primary-foreground">
            What You Gain
          </Badge>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">Operational calm with better decision velocity.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {valueCards.map(({ detail, icon: Icon, title }) => (
            <Card key={title} className="rounded-none border-2 border-border bg-background">
              <CardHeader className="border-b-2 border-border">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Icon className="size-5" />
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 text-base leading-7 text-muted-foreground">{detail}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="how" className="space-y-6">
        {processSections.map((section) => (
          <SectionShell key={section.id} id={section.id} eyebrow={section.eyebrow} title={section.title} content={section.content} className="rounded-none border-2" />
        ))}
      </section>

      <section id="contact" data-animate="section" className="my-12 border-2 border-border bg-card p-6 brutal-shadow md:p-10">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <Badge className="rounded-none border-2 border-border bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-secondary-foreground">
              Contact
            </Badge>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">Let&apos;s remove one expensive bottleneck this month.</h2>
          </div>
          <a href={socialUrl} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-none border-2 border-border bg-background px-5 text-xs font-semibold uppercase tracking-[0.12em]")}>
            DM on Social
            <ArrowRight className="size-4" />
          </a>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}

