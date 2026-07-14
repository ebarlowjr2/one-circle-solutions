import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/icons";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

const buttonStyles = {
  primary:
    "bg-brand-500 text-slate-950 hover:bg-brand-400 focus-visible:outline-brand-500",
  dark: "bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-slate-900",
  outline:
    "border border-slate-300 text-slate-800 hover:border-slate-500 hover:bg-slate-50 focus-visible:outline-slate-500",
  outlineDark:
    "border border-slate-600 text-slate-100 hover:border-slate-300 hover:bg-white/5 focus-visible:outline-slate-300",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonStyles;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.18em] ${
        tone === "dark" ? "text-brand-400" : "text-brand-700"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            tone === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function CheckItem({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <li className="flex items-start gap-3">
      <Icon
        name="check"
        className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
      />
      <span
        className={tone === "dark" ? "text-slate-300" : "text-slate-600"}
      >
        {children}
      </span>
    </li>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-slate-950 py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            {description}
          </p>
          {children}
        </div>
      </Container>
    </section>
  );
}
