"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; heading: string };

// Sticky "On this page" navigation with active-section highlighting.
// Anchors work without JS; the IntersectionObserver only adds the highlight
// and the mobile collapse is progressive enhancement.
export function GuideToc({ sections }: { sections: TocItem[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="On this page" className="lg:sticky lg:top-24">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
          On this page
        </p>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="text-xs font-semibold text-brand-700 lg:hidden"
        >
          {open ? "Hide" : "Show"}
        </button>
      </div>
      <ul
        className={`mt-3 space-y-0.5 border-l border-slate-200 ${
          open ? "block" : "hidden"
        } lg:block`}
      >
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              aria-current={active === s.id ? "true" : undefined}
              className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                active === s.id
                  ? "border-brand-500 font-medium text-brand-700"
                  : "border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              {s.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
