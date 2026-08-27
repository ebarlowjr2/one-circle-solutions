import Link from "next/link";
import { mssp } from "@/content/mssp";
import { site } from "@/content/site";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import {
  Container,
  PageHero,
  SectionHeading,
} from "@/components/ui/primitives";
import { ServicesGrid } from "@/components/sections/services-grid";
import { EngagementModel } from "@/components/sections/engagement";
import { CtaSection } from "@/components/sections/cta";

export const metadata = pageMetadata({
  title: mssp.metaTitle,
  description: mssp.metaDescription,
  path: `/${mssp.slug}`,
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Managed Security Services",
  serviceType: "Managed Security Services Provider (MSSP)",
  description: mssp.metaDescription,
  provider: { "@id": `${site.url}/#organization` },
  areaServed: { "@type": "Country", name: "United States" },
  url: `${site.url}/${mssp.slug}`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: mssp.faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ManagedSecurityServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Managed Security Services", path: `/${mssp.slug}` },
        ])}
      />

      <PageHero
        eyebrow="Managed Security Services"
        title={mssp.heroTitle}
        description={mssp.heroLede}
      />

      {/* Intro */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            {mssp.intro.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="mt-5 text-lg leading-relaxed text-slate-600 first:mt-0"
              >
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* What an MSSP does */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="What we do" title={mssp.whatWeDo.heading} />
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            {mssp.whatWeDo.intro}
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mssp.whatWeDo.items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-7"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services (hub-and-spoke) */}
      <ServicesGrid
        background="white"
        eyebrow="Inside a managed security program"
        heading="The services that make up the operation"
        description="Every service below can start on its own — but each feeds the same operational picture of your risk. Together they are your managed security program."
      />

      {/* Comparison */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How it compares"
            title={mssp.comparison.heading}
            description={mssp.comparison.intro}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {mssp.comparison.options.map((opt) => (
              <div
                key={opt.title}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-7"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {opt.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                  {opt.body}
                </p>
                <p className="mt-5 border-t border-slate-100 pt-4 text-sm font-semibold text-brand-700">
                  {opt.verdict}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How an engagement runs */}
      <EngagementModel background="white" />

      {/* Service levels */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="What you can expect"
              title={mssp.serviceLevels.heading}
            />
            {mssp.serviceLevels.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-5 leading-relaxed text-slate-600">
                {p}
              </p>
            ))}
            <p className="mt-6 text-sm text-slate-600">
              See how we handle access and data on the{" "}
              <Link href="/trust" className="font-semibold text-brand-700 hover:text-brand-500">
                Trust &amp; Compliance
              </Link>{" "}
              page, or explore who we serve by{" "}
              <Link href="/industries" className="font-semibold text-brand-700 hover:text-brand-500">
                industry and stage
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions about managed security services"
            />
            <dl className="mt-10 divide-y divide-slate-200 border-t border-slate-200">
              {mssp.faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="text-lg font-semibold text-slate-900">{f.q}</dt>
                  <dd className="mt-2.5 leading-relaxed text-slate-600">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Ready to run security as one operation?"
        description="Start with a no-obligation consultation. We'll review your current coverage, obligations, and exposure — and you'll leave with a written findings brief whether or not we work together."
      />
    </>
  );
}
