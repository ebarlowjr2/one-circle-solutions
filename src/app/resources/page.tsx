import Link from "next/link";
import { resourceCategories } from "@/content/resources";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import { Container, PageHero } from "@/components/ui/primitives";
import { CtaSection } from "@/components/sections/cta";
import { Icon } from "@/components/ui/icons";

export const metadata = pageMetadata({
  title: "Cybersecurity Resources",
  description:
    "Free security scripts and tools, practical guides, checklists, and our blog — practitioner writing and tooling on managed security, compliance readiness, and security operations.",
  path: "/resources",
});

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
        description="Everything we publish for the security community in one place — free scripts and tools, step-by-step guides, actionable checklists, and our blog. Pick a shelf to start browsing."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {resourceCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/resources/${category.slug}`}
                className="group flex flex-col rounded-xl border border-slate-200 p-8 transition-colors hover:border-brand-500"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-lg bg-gradient-to-br from-brand-500 to-brand-purple p-3">
                    <Icon name={category.icon} className="h-6 w-6 text-white" />
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {category.count} {category.countNoun}
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-semibold text-slate-900">
                  {category.label}
                </h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                  {category.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Browse {category.label}
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
