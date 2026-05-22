"use client";

import Link from "next/link";
import { useState } from "react";
import { CircleUserRound } from "lucide-react";

import { ContactForm } from "@/components/narrative/contact-form";
import { cn } from "@/lib/utils";

type HeaderTab = "services" | "pricing" | "about";

type SiteHeaderProps = {
  activeTab?: HeaderTab;
  homeAnchors?: boolean;
};

export function SiteHeader({ activeTab, homeAnchors = false }: SiteHeaderProps) {
  const contactHref = homeAnchors ? "#contact" : "/#contact";
  const [isContactOpen, setIsContactOpen] = useState(false);

  const tabClass = (tab: HeaderTab) =>
    cn(
      "border-2 border-border px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1",
      activeTab === tab ? "bg-[#B03052] text-[#FFEDD8]" : "bg-[#EABE6C] text-foreground"
    );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-border bg-[#B6AE9FCC] backdrop-blur-md">
        <div className="flex h-16 w-full items-stretch pl-4 pr-0 md:pl-8">
        <div className="ml-3 flex items-center gap-3 md:ml-5">
          <div className="flex size-10 items-center justify-center rounded-[999px] border-2 border-border bg-[#EABE6C] brutal-shadow">
            <CircleUserRound className="size-5" />
          </div>
          <Link
            href="/"
            className="border-2 border-border bg-[#EABE6C] px-3 py-1 font-[family-name:var(--font-display)] text-xl tracking-tight brutal-shadow sm:text-2xl"
          >
            Stack&Loop
          </Link>
        </div>
        <div className="ml-auto mr-4 flex items-center gap-3 text-sm font-medium sm:text-[0.95rem] md:mr-8">
          <Link href="/services" className={tabClass("services")}>
            Services
          </Link>
          <Link href="/pricing" className={tabClass("pricing")}>
            Pricing
          </Link>
          <Link href="/" className={tabClass("about")}>
            About
          </Link>
          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className="border-2 border-border bg-[#EABE6C] px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1"
          >
            Contact
          </button>
        </div>
        <Link
          href={contactHref}
          className="inline-flex items-center self-stretch border-2 border-border bg-[#7FBF7F] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#123015] transition-colors duration-200 hover:bg-[#9BD59B] hover:text-[#0F2F0F]"
        >
          Start Automating
        </Link>
        </div>
      </header>
      {isContactOpen ? (
        <div className="fixed inset-0 z-[80] bg-black/45">
          <div className="absolute left-1/2 top-1/2 w-[min(96vw,56rem)] -translate-x-1/2 -translate-y-1/2">
            <div className="relative max-h-[88vh] overflow-auto rounded-xl border-2 border-border bg-background p-6 brutal-shadow md:p-8">
              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                aria-label="Close contact dialog"
                className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-md border-2 border-border bg-[#EABE6C] text-lg font-black leading-none brutal-shadow"
              >
                X
              </button>
              <ContactForm />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
