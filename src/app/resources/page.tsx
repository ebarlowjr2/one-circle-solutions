import Link from "next/link";
import { articles } from "@/content/articles";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import { Container, PageHero, SectionHeading } from "@/components/ui/primitives";
import { CtaSection } from "@/components/sections/cta";
import { DownloadsSection } from "@/components/sections/downloads";
import { Icon } from "@/components/ui/icons";

export const metadata = pageMetadata({
  title: "Cybersecurity Resources",
  description:
    "Free security scripts, hardening baselines, and templates — plus practical guides on managed security, compliance readiness, and security operations, written by practitioners.",
  path: "/resources",
});

const typeStyles: Record<string, string> = {
  Guide: "bg-brand-50 text-brand-700",
  Checklist: "bg-sky-50 text-sky-700",
  Briefing: "bg-amber-50 text-amber-700",
};

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ])}
      />
      <PageHero
        eyebrow="Resources"
        title="Tools and writing from the bench"
        description="Free hardening scripts and templates you can use today, plus guides and briefings drawn from real engagements — the questions we get asked most, answered the way we'd answer a client."
      />

      <DownloadsSection />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Library"
            title="Guides, checklists, and briefings"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((item) => (
              <Link
                key={item.slug}
                href={`/resources/${item.slug}`}
                className="group flex flex-col rounded-xl border border-slate-200 p-7 transition-colors hover:border-brand-500"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${typeStyles[item.category]}`}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400">{item.readTime}</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold leading-snug text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Read article
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
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
