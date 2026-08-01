import Link from "next/link";
import { articles } from "@/content/articles";
import { cmmcChecklist } from "@/content/guides";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import { Container, PageHero } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icons";
import { ArticleGrid } from "@/components/sections/article-grid";
import { CtaSection } from "@/components/sections/cta";
import { DownloadsSection } from "@/components/sections/downloads";
import { downloads } from "@/content/downloads";

export const metadata = pageMetadata({
  title: "Security Checklists & Templates",
  description:
    "Actionable cybersecurity checklists and templates from One Circle Solutions — evaluate risk, plan incident response, and get audit-ready without overbuying.",
  path: "/resources/checklists",
});

export default function ChecklistsPage() {
  const items = articles.filter((a) => a.category === "Checklist");
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Checklists & Templates", path: "/resources/checklists" },
        ])}
      />
      <PageHero
        eyebrow="Resources · Checklists & Templates"
        title="Checklists and templates you can act on today"
        description="The questions to ask, the boxes to check, and ready-to-use templates — distilled from work we do with clients every week."
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          {/* Featured long-form checklist */}
          <Link
            href={`/resources/${cmmcChecklist.slug}`}
            className="group mb-10 flex flex-col gap-6 rounded-xl border border-slate-200 bg-gradient-to-br from-brand-50 to-white p-8 transition-colors hover:border-brand-500 sm:flex-row sm:items-center"
          >
            <span className="inline-flex w-fit rounded-lg bg-gradient-to-br from-brand-500 to-brand-purple p-3">
              <Icon name="shield" className="h-6 w-6 text-white" />
            </span>
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                Featured · full guide + PDF
              </span>
              <h2 className="mt-1 text-xl font-semibold text-slate-900">
                {cmmcChecklist.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {cmmcChecklist.description}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-brand-700">
              Open the checklist
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>

          <ArticleGrid items={items} />
        </Container>
      </section>
      <DownloadsSection
        showHeading={false}
        items={downloads.filter((download) => download.category === "Template")}
      />
      <CtaSection
        title="Prefer we run the checklist with you?"
        description="Book a consultation and we'll assess your current state against the same criteria — and leave you with a written findings brief."
      />
    </>
  );
}
