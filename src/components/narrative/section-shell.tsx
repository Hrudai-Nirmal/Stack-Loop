import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  content: string[];
  className?: string;
  badgeClassName?: string;
  children?: React.ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  content,
  className,
  badgeClassName,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      data-animate="section"
      className={cn(
        "relative mx-auto w-full max-w-6xl border-2 border-border bg-card brutal-shadow",
        "px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14",
        className
      )}
    >
      <div className="space-y-5">
        <Badge
          variant="secondary"
          className={cn(
            "rounded-none border-2 border-border px-3 py-1 text-[11px] uppercase tracking-[0.14em]",
            badgeClassName
          )}
        >
          {eyebrow}
        </Badge>
        <h2
          data-animate="headline"
          className="font-[family-name:var(--font-display)] text-3xl leading-tight md:text-4xl"
        >
          {title}
        </h2>
        <div className="space-y-3">
          {content.map((paragraph) => (
            <p
              key={paragraph}
              data-animate="paragraph"
              className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}
