import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/content/services";
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
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.tagline,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Service hero */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Eyebrow tone="dark">Service</Eyebrow>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                {service.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                {service.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/contact">Discuss this service</ButtonLink>
                <ButtonLink href="/services" variant="outlineDark">
                  All services
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-7 lg:self-start">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-lg bg-slate-950 p-2.5">
                  <Icon name={service.icon} className="h-6 w-6 text-brand-400" />
                </span>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                  What you get
                </h2>
              </div>
              <ul className="mt-5 space-y-3.5">
                {service.deliverables.map((item) => (
                  <CheckItem key={item} tone="dark">
                    {item}
                  </CheckItem>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Outcomes */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              eyebrow="Outcomes"
              title="What changes for your team"
            />
            <ul className="space-y-4">
              {service.outcomes.map((outcome) => (
                <CheckItem key={outcome}>{outcome}</CheckItem>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Inside the service"
            title="What's included"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {service.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-slate-200 bg-white p-7"
              >
                <h3 className="font-semibold text-slate-900">{cap.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Good fit */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              eyebrow="Is this you?"
              title="Signs this is the right starting point"
            />
            <ul className="space-y-4">
              {service.goodFit.map((signal) => (
                <CheckItem key={signal}>{signal}</CheckItem>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Related services */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
            Often paired with
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-500"
              >
                <p className="font-semibold text-slate-900">{s.shortName}</p>
                <p className="mt-1.5 line-clamp-2 text-sm text-slate-600">
                  {s.tagline}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title={`Talk to us about ${service.shortName}`}
        description="A 30-minute conversation, a look at your current coverage, and a written findings brief — no obligation either way."
      />
    </>
  );
}
