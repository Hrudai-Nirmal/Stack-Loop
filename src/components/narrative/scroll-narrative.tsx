"use client";

import { useEffect, useMemo, useRef } from "react";
import { ArrowRight, Bot, ChartNoAxesCombined, CircleUserRound, Workflow } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ContactForm } from "@/components/narrative/contact-form";
import { SectionShell } from "@/components/narrative/section-shell";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { heroCopy, problemSections } from "@/lib/site-content";
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

const narrationLevels = [
  {
    heading: (
      <>
        You are <span className="[text-shadow:3px_3px_0_#B03052]">NOT</span> behind
      </>
    ),
    subheading: "-you are just performing a script's labor.",
  },
  {
    heading: (
      <>
        Manual <span className="[text-shadow:3px_3px_0_#B03052]">repetition</span>{" "}
        isn&apos;t work.
      </>
    ),
    subheading: "it's a logic failure and pure overhead.",
  },
  {
    heading: (
      <>
        Stack the <span className="[text-shadow:3px_3px_0_#B03052]">tools</span>. Loop the{" "}
        <span className="[text-shadow:3px_3px_0_#B03052]">logic</span>.
      </>
    ),
  },
  {
    heading: (
      <>
        <span className="[text-shadow:3px_3px_0_#B03052]">Stack</span> and{" "}
        <span className="[text-shadow:3px_3px_0_#B03052]">Loop</span>.
      </>
    ),
  },
];

function InfinityOo() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 54"
      className="oo-infinity mx-[1px] inline-block h-[0.85em] w-[1.45em] align-[-0.06em]"
    >
      <defs>
        <marker
          id="infinity-arrowhead"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill="currentColor" />
        </marker>
      </defs>
      <path
        d="M6 27C6 16.5 14.5 8 25 8C35.5 8 44 17 60 27C76 37 84.5 46 95 46C105.5 46 114 37.5 114 27C114 16.5 105.5 8 95 8C84.5 8 76 17 60 27C44 37 35.5 46 25 46C14.5 46 6 37.5 6 27"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd="url(#infinity-arrowhead)"
      />
    </svg>
  );
}

export function ScrollNarrative() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const narrationRef = useRef<HTMLDivElement | null>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
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
      if (narrationRef.current) {
        const lines = lineRefs.current.filter(Boolean) as HTMLDivElement[];
        gsap.set(lines, { opacity: 0, y: 24 });
        if (lines[0]) {
          gsap.set(lines[0], { opacity: 1, y: 0 });
        }

        const introTimeline = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: narrationRef.current,
            start: "top top",
            end: `+=${narrationLevels.length * 1000}`,
            scrub: 1,
            pin: true,
          },
        });

        lines.forEach((line, index) => {
          const at = index * 1.35;
          introTimeline.fromTo(
            line,
            { opacity: index === 0 ? 1 : 0, y: index === 0 ? 0 : 24 },
            { opacity: 1, y: 0, duration: 0.6, immediateRender: false },
            at
          );
          introTimeline
            .to(line, { opacity: 0, y: -24, duration: 0.6 }, at + 0.92);
        });
      }

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
    <div ref={pageRef} className="mx-auto w-full max-w-7xl px-4 pb-8 md:px-8 md:pb-10">
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-border bg-[#B6AE9FCC] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:flex-nowrap md:px-8">
          <div className="border-2 border-border bg-[#EABE6C] px-3 py-1 font-[family-name:var(--font-display)] text-xl tracking-tight brutal-shadow sm:text-2xl">
            Stack&L
            <InfinityOo />
            p
          </div>
          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-medium sm:text-[0.95rem]">
            <a href="#work" className="border-2 border-border bg-[#EABE6C] px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1">
              Work
            </a>
            <a href="#services" className="border-2 border-border bg-[#EABE6C] px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1">
              Services
            </a>
            <a href="#about" className="border-2 border-border bg-[#EABE6C] px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1">
              About
            </a>
            <a href="#contact" className="border-2 border-border bg-[#EABE6C] px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1">
              Contact
            </a>
            <div className="flex size-10 items-center justify-center rounded-[999px] border-2 border-border bg-[#EABE6C] brutal-shadow">
              <CircleUserRound className="size-5" />
            </div>
          </div>
        </div>
      </header>

      <section
        ref={narrationRef}
        className="relative -mx-4 flex min-h-screen items-center justify-center overflow-hidden px-4 md:-mx-8 md:px-8"
      >
        <div className="relative h-72 w-full max-w-5xl">
          {narrationLevels.map((level, index) => (
            <div
              key={`narrative-${index}`}
              ref={(el) => {
                lineRefs.current[index] = el;
              }}
              className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 text-center"
            >
              <p className="font-[family-name:var(--font-display)] text-5xl leading-tight [text-shadow:3px_3px_0_#EABE6C] md:text-8xl">
                {level.heading}
              </p>
              {level.subheading ? (
                <p className="max-w-4xl text-xl font-medium leading-tight text-muted-foreground md:text-3xl">
                  {level.subheading}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section
        id="work"
        data-animate="section"
        className="mb-12 grid grid-cols-1 gap-6 border-2 border-border bg-card p-6 brutal-shadow lg:grid-cols-[1.2fr_0.8fr] lg:p-10"
      >
        <div className="order-1 w-full min-w-0 space-y-6">
          <h3 className="mb-2 font-[family-name:var(--font-display)] text-[2.05rem] leading-tight">
            Let&apos;s walk you through
          </h3>
          <p className="mb-4 text-base leading-7 text-muted-foreground">
            We start with your current process, identify high-friction loops, and then automate the
            repeatable work in deliberate phases.
          </p>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Walkthrough
          </p>
          <div className="space-y-3">
            <details className="group w-full border border-border bg-card px-3 py-2 brutal-shadow">
              <summary className="cursor-pointer list-none text-base font-semibold">
                01. Workflow Audit
              </summary>
              <p className="pt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                We map current tools, handoffs, and repeated operator actions to reveal exactly where
                time is being consumed.
              </p>
            </details>
            <details className="group w-full border border-border bg-card px-3 py-2 brutal-shadow">
              <summary className="cursor-pointer list-none text-base font-semibold">
                02. Automation Blueprint
              </summary>
              <p className="pt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                We define triggers, decision paths, fallback behavior, and alert points before writing
                any automation logic.
              </p>
            </details>
            <details className="group w-full border border-border bg-card px-3 py-2 brutal-shadow">
              <summary className="cursor-pointer list-none text-base font-semibold">
                03. Build Sprint
              </summary>
              <p className="pt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                We implement the highest-impact flows first and validate every stage with real operating
                conditions.
              </p>
            </details>
            <details className="group w-full border border-border bg-card px-3 py-2 brutal-shadow">
              <summary className="cursor-pointer list-none text-base font-semibold">
                04. Supervised Rollout
              </summary>
              <p className="pt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                New automations launch with guardrails, manual overrides, and monitoring so your team
                trusts the system from day one.
              </p>
            </details>
            <details className="group w-full border border-border bg-card px-3 py-2 brutal-shadow">
              <summary className="cursor-pointer list-none text-base font-semibold">
                05. Weekly Optimization
              </summary>
              <p className="pt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                We refine based on actual throughput, exception volume, and business outcomes to keep
                performance compounding.
              </p>
            </details>
          </div>
        </div>
        <div className="order-2 w-full min-w-0 space-y-6 border-2 border-border bg-background p-5">
          <Badge className="max-w-full whitespace-normal rounded-none border-2 border-border bg-secondary px-3 py-1 text-[11px] leading-tight uppercase tracking-[0.14em] text-secondary-foreground sm:whitespace-nowrap">
            {heroCopy.eyebrow}
          </Badge>
          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[1.03] md:text-5xl">
            {heroCopy.headline}
          </h1>
          <p className="max-w-2xl text-xl leading-9 text-muted-foreground">{heroCopy.subtext}</p>
          <div className="flex flex-wrap gap-2">
            {heroCopy.chips.map((chip) => (
              <Badge key={chip} variant="outline" className="rounded-none border-2 border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.1em]">
                {chip}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <div className="space-y-10">
        {problemSections.map((section) => (
          <SectionShell
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            title={section.title}
            content={section.content}
            className="rounded-none border-2"
            badgeClassName={
              section.id === "pain"
                ? "!bg-[#E14434] !text-[#3D0301]"
                : section.id === "relief"
                  ? "!bg-[#7FBF7F] !text-[#123015]"
                  : ""
            }
          />
        ))}
      </div>

      <section id="services" data-animate="section" className="my-12 border-2 border-border bg-card p-6 brutal-shadow md:p-10">
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
