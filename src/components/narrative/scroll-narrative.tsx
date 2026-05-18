"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

const narrationLines = [
  "You are not behind.",
  "You are just doing the work of a script.",
  "Every manual click is a failure of logic.",
  "Every copy-paste is a wasted hour.",
  "This isn't work. It is overhead.",
  "Stack the tools. Loop the logic.",
  "Stack and Loop.",
];

export function ScrollNarrative() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const narrationRef = useRef<HTMLDivElement | null>(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const hasShownHeader = useRef(false);
  const [headerVisible, setHeaderVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
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
        const lines = lineRefs.current.filter(Boolean) as HTMLParagraphElement[];
        gsap.set(lines, { opacity: 0, y: 24 });

        const introTimeline = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: narrationRef.current,
            start: "top top",
            end: `+=${narrationLines.length * 760}`,
            scrub: 1,
            pin: true,
            onLeave: () => {
              if (!hasShownHeader.current) {
                hasShownHeader.current = true;
                setHeaderVisible(true);
              }
            },
          },
        });

        lines.forEach((line, index) => {
          const at = index * 1.15;
          introTimeline
            .to(line, { opacity: 1, y: 0, duration: 0.52 }, at)
            .to(line, { opacity: 0, y: -24, duration: 0.52 }, at + 0.78);
        });

        ScrollTrigger.create({
          trigger: narrationRef.current,
          start: "top top",
          end: `+=${narrationLines.length * 760}`,
          onUpdate: (self) => {
            if (self.progress < 0.02) {
              gsap.set(lines, { opacity: 0, y: 24 });
            }
          },
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
      {headerVisible ? (
        <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-border bg-card">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8">
            <div className="font-[family-name:var(--font-display)] text-xl tracking-tight">
              Stack&Loop
            </div>
            <div className="flex items-center gap-6 text-sm font-medium">
              <a href="#how" className="hover:underline">
                What we do
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </div>
          </div>
        </header>
      ) : null}

      <section
        ref={narrationRef}
        className="relative -mx-4 flex min-h-screen items-center justify-center overflow-hidden px-4 md:-mx-8 md:px-8"
      >
        <div className="relative h-56 w-full max-w-5xl">
          {narrationLines.map((line, index) => (
            <p
              key={line}
              ref={(el) => {
                lineRefs.current[index] = el;
              }}
              className="pointer-events-none absolute inset-0 flex items-center justify-center text-center font-[family-name:var(--font-display)] text-5xl leading-tight md:text-8xl"
            >
              {line}
            </p>
          ))}
        </div>
      </section>

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
