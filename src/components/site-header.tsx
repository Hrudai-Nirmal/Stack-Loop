import Link from "next/link";
import { CircleUserRound } from "lucide-react";

import { cn } from "@/lib/utils";

type HeaderTab = "services" | "pricing" | "about";

type SiteHeaderProps = {
  activeTab?: HeaderTab;
  homeAnchors?: boolean;
};

export function SiteHeader({ activeTab, homeAnchors = false }: SiteHeaderProps) {
  const contactHref = homeAnchors ? "#contact" : "/#contact";

  const tabClass = (tab: HeaderTab) =>
    cn(
      "border-2 border-border px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1",
      activeTab === tab ? "bg-[#B03052] text-[#FFEDD8]" : "bg-[#EABE6C] text-foreground"
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-border bg-[#B6AE9FCC] backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-stretch justify-between gap-3 px-4 md:px-8">
        <div className="flex items-center gap-3">
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
        <div className="flex items-center gap-3 text-sm font-medium sm:text-[0.95rem]">
          <Link href="/services" className={tabClass("services")}>
            Services
          </Link>
          <Link href="/pricing" className={tabClass("pricing")}>
            Pricing
          </Link>
          <Link href="/" className={tabClass("about")}>
            About
          </Link>
          <Link href={contactHref} className="border-2 border-border bg-[#EABE6C] px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1">
            Contact
          </Link>
        </div>
        <Link
          href={contactHref}
          className="inline-flex items-center self-stretch border-2 border-border bg-[#7FBF7F] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#123015] brutal-shadow transition-transform duration-200 hover:-translate-y-1"
        >
          Start Automating
        </Link>
      </div>
    </header>
  );
}
