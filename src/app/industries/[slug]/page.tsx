import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustry, industries } from "@/content/industries";
import { getService } from "@/content/services";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import { Icon } from "@/components/ui/icons";
import {
  ButtonLink,
  CheckItem,
  Container,
  Eyebrow,
  SectionHeading,
} from "@/components/ui/primitives";
import { CtaSection } from "@/components/sections/cta";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata({
    title: `${industry.name} Cybersecurity Services`,
    description: `${industry.description.split(". ")[0]}. Managed security, monitoring, and compliance support from One Circle Solutions.`,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ])}
      />

      {/* Industry hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50 to-white py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Industries · {industry.name}</Eyebrow>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl">
              {industry.headline}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {industry.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Book a security consultation</ButtonLink>
              <ButtonLink href="/services" variant="outline">
                Explore services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Risks + compliance */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="The risk picture"
                title="What we see targeting this industry"
              />
              <ul className="mt-8 space-y-4">
                {industry.risks.map((risk) => (
                  <CheckItem key={risk}>{risk}</CheckItem>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                eyebrow="Compliance & audits"
                title="Obligations we help you meet"
              />
              <ul className="mt-8 space-y-4">
                {industry.complianceConcerns.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
              <p className="mt-8 text-sm text-slate-600">
                See how our operations map to frameworks on the{" "}
                <Link href="/trust" className="font-semibold text-brand-700 hover:text-brand-500">
                  Trust &amp; Compliance
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Relevant services */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Where to start"
            title={`How One Circle Solutions helps ${industry.name.toLowerCase()} teams`}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {industry.services.map(({ slug: serviceSlug, reason }) => {
              const service = getService(serviceSlug);
              if (!service) return null;
              return (
                <Link
                  key={serviceSlug}
                  href={`/services/${serviceSlug}`}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-7 transition-colors hover:border-brand-500"
                >
                  <span className="inline-flex w-fit rounded-lg bg-gradient-to-br from-brand-500 to-brand-purple p-2.5">
                    <Icon name={service.icon} className="h-5 w-5 text-white" />
                  </span>
                  <h3 className="mt-4 font-semibold text-slate-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {reason}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Learn more
                    <Icon
                      name="arrow-right"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Outcomes */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              eyebrow="Outcomes"
              title="What changes when we take the watch"
            />
            <ul className="space-y-4 self-center">
              {industry.outcomes.map((outcome) => (
                <CheckItem key={outcome}>{outcome}</CheckItem>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaSection
        title={`Talk to us about securing your ${industry.name.toLowerCase()} organization`}
        description="A 30-minute conversation, a look at your current coverage and obligations, and a written findings brief — no obligation either way."
      />
    </>
  );
}
