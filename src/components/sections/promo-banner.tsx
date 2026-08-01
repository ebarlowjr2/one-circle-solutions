"use client";

import Link from "next/link";
import { useState } from "react";
import { promo } from "@/content/promo";

// Homepage launch-offer banner. Hidden entirely when the promo is inactive;
// dismissible for the current session.
export function PromoBanner() {
  const [open, setOpen] = useState(true);
  if (!promo.active || !open) return null;

  return (
    <div className="relative bg-gradient-to-r from-brand-700 via-brand-blue to-brand-purple text-white">
      <Link
        href={`/${promo.slug}`}
        className="group mx-auto flex max-w-6xl items-center justify-center gap-x-3 gap-y-1 px-10 py-2.5 text-center text-sm sm:px-6"
      >
        <span className="hidden shrink-0 rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide sm:inline">
          {promo.banner.kicker}
        </span>
        <span className="font-medium">
          {promo.banner.text} —{" "}
          <span className="font-semibold">{promo.banner.highlight}</span>
        </span>
        <span className="hidden items-center gap-1 font-semibold underline-offset-4 group-hover:underline md:inline-flex">
          {promo.banner.cta}
          <span aria-hidden="true">→</span>
        </span>
      </Link>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Dismiss promotion banner"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
    </div>
  );
}
