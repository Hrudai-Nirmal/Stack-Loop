"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  ArrowRight,
  Bot,
  ChartNoAxesCombined,
  MessagesSquare,
  Workflow,
} from "lucide-react";
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
    detail:
      "Replace manual copy-paste with reliable automations across the tools you already run.",
    icon: Workflow,
  },
  {
    title: "Operator Clarity",
    detail:
      "Get clean summaries and alerts so your team acts fast instead of chasing context.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Human-in-the-Loop AI",
    detail:
      "Use AI where it helps speed and consistency while keeping final decisions human-owned.",
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
    if (!pageRef.current) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    if (reducedMotion) {
      gsap.set(
        pageRef.current.querySelectorAll(
          "[data-animate='section'], [data-animate='headline'], [data-animate='paragraph'], [data-animate='card']"
        ),
        {
          opacity: 1,
          y: 0,
          clearProps: "all",
        }
      );
      return;
    }

    const context = gsap.context(() => {
      gsap.from("[data-animate='section']", {
        y: 44,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top 80%",
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='headline']").forEach((el) => {
        gsap.from(el, {
          xPercent: -8,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='paragraph']").forEach((el) => {
        gsap.from(el, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='card']").forEach((el, index) => {
        gsap.from(el, {
          y: 24,
          rotate: index % 2 === 0 ? -1.4 : 1.4,
          opacity: 0,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, pageRef);

    return () => {
      context.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={pageRef} className="flex flex-col gap-24 px-4 py-10 md:px-8 md:py-14">
      <section
        data-animate="section"
        className="mx-auto w-full max-w-6xl border-4 border-border bg-background px-6 py-10 brutal-shadow md:px-10 md:py-14"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-7">
            <Badge className="rounded-none border-2 border-border bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-secondary-foreground">
              {heroCopy.eyebrow}
            </Badge>
            <h1
              data-animate="headline"
              className="font-[family-name:var(--font-display)] text-4xl leading-[1.04] md:text-6xl"
            >
              {heroCopy.headline}
            </h1>
            <p
              data-animate="paragraph"
              className="max-w-2xl text-lg leading-9 text-muted-foreground"
            >
              {heroCopy.subtext}
            </p>
            <div className="flex flex-wrap gap-3">
              {heroCopy.chips.map((chip) => (
                <Badge
                  key={chip}
                  variant="outline"
                  className="rounded-none border-2 border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.1em]"
                >
                  {chip}
                </Badge>
              ))}
            </div>
          </div>
          <Card
            data-animate="card"
            className="rounded-none border-4 border-border bg-accent text-accent-foreground"
          >
            <CardHeader className="border-b-4 border-border">
              <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-display)] text-2xl">
                <MessagesSquare className="size-6" />
                Stack and Loop Promise
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-5 text-base leading-8">
              <p>Automation that respects your team&apos;s real workload.</p>
              <p>Practical AI systems shipped in focused iterations.</p>
              <p>No bloated transformations. Just measurable operational relief.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {problemSections.map((section) => (
        <SectionShell
          key={section.id}
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.title}
          content={section.content}
          className="rounded-none"
        />
      ))}

      <section
        data-animate="section"
        className="mx-auto flex w-full max-w-6xl flex-col gap-6 border-4 border-border bg-background p-6 brutal-shadow md:p-10"
      >
        <div className="space-y-4">
          <Badge className="rounded-none border-2 border-border bg-primary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-primary-foreground">
            What You Gain
          </Badge>
          <h2
            data-animate="headline"
            className="font-[family-name:var(--font-display)] text-3xl leading-tight md:text-4xl"
          >
            Operational calm with better decision velocity.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {valueCards.map(({ detail, icon: Icon, title }) => (
            <Card
              key={title}
              data-animate="card"
              className="rounded-none border-4 border-border bg-card"
            >
              <CardHeader className="border-b-4 border-border">
                <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-display)] text-2xl">
                  <Icon className="size-6" />
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-5 text-base leading-8 text-muted-foreground">
                {detail}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-6">
        {processSections.map((section) => (
          <SectionShell
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            title={section.title}
            content={section.content}
            className="rounded-none"
          />
        ))}
      </section>

      <section
        data-animate="section"
        className="mx-auto w-full max-w-6xl space-y-6 border-4 border-border bg-card px-6 py-8 brutal-shadow md:px-10 md:py-12"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-4">
            <Badge className="rounded-none border-2 border-border bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-secondary-foreground">
              Contact
            </Badge>
            <h2
              data-animate="headline"
              className="font-[family-name:var(--font-display)] text-3xl md:text-4xl"
            >
              Let&apos;s remove one expensive bottleneck this month.
            </h2>
            <p data-animate="paragraph" className="max-w-2xl text-base leading-8 text-muted-foreground">
              Share your workflow pain point and current stack. You get a clear
              automation path, practical scope, and execution timeline.
            </p>
          </div>
          <a
            href={socialUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 rounded-none border-2 border-border bg-background px-5 text-xs font-semibold uppercase tracking-[0.12em]"
            )}
          >
            DM on Social
            <ArrowRight className="size-4" />
          </a>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
