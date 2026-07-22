import { articles } from "@/content/articles";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import { Container, PageHero } from "@/components/ui/primitives";
import { ArticleGrid } from "@/components/sections/article-grid";
import { CtaSection } from "@/components/sections/cta";

export const metadata = pageMetadata({
  title: "Security Guides",
  description:
    "Step-by-step cybersecurity guides from One Circle Solutions — SOC 2 readiness, running a tabletop exercise, and other practitioner walkthroughs drawn from real engagements.",
  path: "/resources/guides",
});

export default function GuidesPage() {
  const items = articles.filter((a) => a.category === "Guide");
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Guides", path: "/resources/guides" },
        ])}
      />
      <PageHero
        eyebrow="Resources · Guides"
        title="Practitioner guides, start to finish"
        description="Walkthroughs written the way we'd explain them to a client — practical sequencing, honest tradeoffs, and the steps teams most often skip."
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <ArticleGrid items={items} />
        </Container>
      </section>
      <CtaSection
        title="Want a guide applied to your environment?"
        description="Book a consultation and we'll turn the theory into a plan scoped to your stack, obligations, and timeline."
      />
    </>
  );
}
