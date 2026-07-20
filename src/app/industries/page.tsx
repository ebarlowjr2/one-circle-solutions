import Link from "next/link";
import { industries } from "@/content/industries";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import { Icon } from "@/components/ui/icons";
import { Container, PageHero } from "@/components/ui/primitives";
import { CtaSection } from "@/components/sections/cta";

export const metadata = pageMetadata({
  title: "Industries We Serve",
  description:
    "Managed security services tailored to healthcare, financial services, manufacturing, nonprofits, and government contractors — matched to each industry's risks and compliance obligations.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      <PageHero
        eyebrow="Industries"
        title="Security that speaks your industry's language"
        description="Every industry carries its own attackers, regulators, and constraints. We tailor the same core operation — detection, response, vulnerability management, and compliance support — to the risks that actually apply to you."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex flex-col rounded-xl border border-slate-200 p-7 transition-colors hover:border-brand-500"
              >
                <h2 className="text-lg font-semibold text-slate-900">
                  {industry.name}
                </h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                  {industry.description.split(". ")[0]}.
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  How we help
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-sm text-slate-600">
            Don&apos;t see your industry? The operating model adapts —{" "}
            <Link href="/contact" className="font-semibold text-brand-700 hover:text-brand-500">
              tell us about your environment
            </Link>{" "}
            or browse{" "}
            <Link href="/services" className="font-semibold text-brand-700 hover:text-brand-500">
              all services
            </Link>
            .
          </p>
        </Container>
      </section>

      <CtaSection
        title="Tell us what you're up against"
        description="A 30-minute conversation about your industry's obligations, your current coverage, and the smallest engagement that moves your risk."
      />
    </>
  );
}
