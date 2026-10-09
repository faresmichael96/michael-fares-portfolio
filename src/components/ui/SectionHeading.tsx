import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)} {...props}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.08em] text-primary">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[42px] lg:leading-[1.2]">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-[17px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
