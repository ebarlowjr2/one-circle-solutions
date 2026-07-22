import { articles } from "@/content/articles";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import { Container, PageHero } from "@/components/ui/primitives";
import { ArticleGrid } from "@/components/sections/article-grid";
import { CtaSection } from "@/components/sections/cta";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Field notes and briefings from One Circle Solutions on managed detection and response, cloud security, and the decisions behind a strong security program.",
  path: "/resources/blog",
});

export default function BlogPage() {
  const items = articles.filter((a) => a.category === "Blog");
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Blog", path: "/resources/blog" },
        ])}
      />
      <PageHero
        eyebrow="Resources · Blog"
        title="Field notes from the operation"
        description="Short, opinionated briefings on the security decisions we see teams get wrong — and what we'd do instead."
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <ArticleGrid items={items} />
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
