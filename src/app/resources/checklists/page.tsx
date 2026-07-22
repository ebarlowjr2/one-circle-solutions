import { articles } from "@/content/articles";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import { Container, PageHero } from "@/components/ui/primitives";
import { ArticleGrid } from "@/components/sections/article-grid";
import { CtaSection } from "@/components/sections/cta";

export const metadata = pageMetadata({
  title: "Security Checklists",
  description:
    "Actionable cybersecurity checklists from One Circle Solutions — evaluating an MSSP, meeting cyber-insurance requirements, and getting audit-ready without overbuying.",
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
          { name: "Checklists", path: "/resources/checklists" },
        ])}
      />
      <PageHero
        eyebrow="Resources · Checklists"
        title="Checklists you can act on today"
        description="The questions to ask, the boxes to check, and the order to do it in — distilled from work we do with clients every week."
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <ArticleGrid items={items} />
        </Container>
      </section>
      <CtaSection
        title="Prefer we run the checklist with you?"
        description="Book a consultation and we'll assess your current state against the same criteria — and leave you with a written findings brief."
      />
    </>
  );
}
