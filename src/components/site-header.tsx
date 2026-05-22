import Link from "next/link";
import { CircleUserRound } from "lucide-react";

import { cn } from "@/lib/utils";

type HeaderTab = "services" | "pricing" | "about";

type SiteHeaderProps = {
  activeTab?: HeaderTab;
  homeAnchors?: boolean;
};

export function SiteHeader({ activeTab, homeAnchors = false }: SiteHeaderProps) {
  const workHref = homeAnchors ? "#work" : "/#work";
  const contactHref = homeAnchors ? "#contact" : "/#contact";

  const tabClass = (tab: HeaderTab) =>
    cn(
      "border-2 border-border px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1",
      activeTab === tab ? "bg-[#B03052] text-[#FFEDD8]" : "bg-[#EABE6C] text-foreground"
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-border bg-[#B6AE9FCC] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:flex-nowrap md:px-8">
        <Link
          href="/"
          className="border-2 border-border bg-[#EABE6C] px-3 py-1 font-[family-name:var(--font-display)] text-xl tracking-tight brutal-shadow sm:text-2xl"
        >
          Stack&Loop
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-medium sm:text-[0.95rem]">
          <Link href={workHref} className="border-2 border-border bg-[#EABE6C] px-2 py-1 brutal-shadow transition-transform duration-200 hover:-translate-y-1">
            Work
          </Link>
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
          <div className="flex size-10 items-center justify-center rounded-[999px] border-2 border-border bg-[#EABE6C] brutal-shadow">
            <CircleUserRound className="size-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
