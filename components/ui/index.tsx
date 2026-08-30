import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

// ─── Container ────────────────────────────────────────────────────────────────

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function Container({ className, size = "default", children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        size === "default" && "max-w-7xl",
        size === "narrow" && "max-w-3xl",
        size === "wide" && "max-w-screen-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// ─── SectionHeading ───────────────────────────────────────────────────────────

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 md:mb-14", centered && "text-center", className)}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Badge ────────────────────────────────────────────────────────────────────

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "green" | "red" | "yellow" | "gray";
}

export function Badge({ variant = "blue", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variant === "blue"   && "bg-blue-100 text-blue-700",
        variant === "green"  && "bg-green-100 text-green-700",
        variant === "red"    && "bg-red-100 text-red-700",
        variant === "yellow" && "bg-yellow-100 text-yellow-700",
        variant === "gray"   && "bg-gray-100 text-gray-700",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
