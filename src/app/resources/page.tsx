import type { Metadata } from "next";
import { resources } from "@/content/resources";
import { Container, PageHero } from "@/components/ui/primitives";
import { CtaSection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical guides, checklists, and briefings on managed security, compliance readiness, and security operations — written by practitioners.",
};

const typeStyles: Record<string, string> = {
  Guide: "bg-brand-50 text-brand-700",
  Checklist: "bg-sky-50 text-sky-700",
  Briefing: "bg-amber-50 text-amber-700",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Practitioner writing, not content marketing"
        description="Guides, checklists, and briefings drawn from real engagements — the questions we get asked most, answered the way we'd answer a client."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((item) => (
              <article
                key={item.slug}
                className="flex flex-col rounded-xl border border-slate-200 p-7 transition-colors hover:border-brand-500"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${typeStyles[item.type]}`}
                  >
                    {item.type}
                  </span>
                  <span className="text-xs text-slate-400">{item.readTime}</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold leading-snug text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <p className="mt-5 text-sm font-semibold text-slate-400">
                  Coming soon
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Have a question the library doesn't answer?"
        description="Ask us directly. If it's a good question, we'll probably write the guide — and answer you personally in the meantime."
      />
    </>
  );
}
