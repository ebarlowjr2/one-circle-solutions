import Link from "next/link";
import { promo } from "@/content/promo";
import { site } from "@/content/site";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import { Icon } from "@/components/ui/icons";
import {
  ButtonLink,
  CheckItem,
  Container,
  SectionHeading,
} from "@/components/ui/primitives";
import { CtaSection } from "@/components/sections/cta";

export const metadata = pageMetadata({
  title: "Pathway to Protection — Managed EDR + SOC for Small Business",
  description:
    "One Circle Solutions' Pathway to Protection: all-inclusive managed endpoint defense (SentinelOne), monitoring, hardening, and patching for small business — $100 per system, limited-time launch offer.",
  path: `/${promo.slug}`,
  absoluteTitle: true,
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: promo.name,
  serviceType: "Managed endpoint defense (EDR) and security monitoring (SOC)",
  description:
    "All-inclusive managed cybersecurity for small business: SentinelOne endpoint defense, syslog and monitoring integration, virus and threat protection, OS hardening, patch management, and automated cyber services.",
  provider: { "@type": "Organization", name: site.name, url: site.url },
  areaServed: { "@type": "Country", name: "USA" },
  offers: {
    "@type": "Offer",
    price: String(promo.price),
    priceCurrency: "USD",
    description: `${promo.priceLabel} ${promo.priceUnit} — ${promo.windowLabel}. Includes setup, deployment, and a 30-day monitoring report.`,
    url: `${site.url}/${promo.slug}`,
  },
};

export default function PathwayToProtectionPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: promo.name, path: `/${promo.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-700 via-brand-blue to-brand-purple py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                {promo.eyebrow}
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                {promo.hero.headline}
              </h1>
              <p className="mt-3 text-lg font-medium text-white/90">
                {promo.tagline}
              </p>
              {promo.hero.intro.map((p) => (
                <p
                  key={p.slice(0, 32)}
                  className="mt-4 leading-relaxed text-white/85"
                >
                  {p}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/pathway-to-protection/start" variant="light">
                  Get protected
                </ButtonLink>
                <ButtonLink href="#whats-included" variant="outlineDark">
                  See what&apos;s included
                </ButtonLink>
              </div>
            </div>

            {/* Price card */}
            <div className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm">
              <p className="text-sm font-medium uppercase tracking-wide text-white/80">
                {promo.windowLabel}
              </p>
              <p className="mt-3 text-6xl font-semibold tracking-tight text-white">
                {promo.priceLabel}
              </p>
              <p className="mt-1 text-white/80">{promo.priceUnit}</p>
              <ul className="mt-6 space-y-2.5 text-left">
                {promo.launchOffer.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                    <span className="text-sm text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <ButtonLink href="/pathway-to-protection/start" variant="light" className="w-full">
                  Start today
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section id="whats-included" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What's included"
            title="All-inclusive protection, out of the box"
            description="Every system on the program gets the full stack — endpoint defense, monitoring, hardening, and patching — configured and running from day one."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {promo.includes.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col rounded-xl border border-slate-200 p-7"
              >
                <span className="inline-flex w-fit rounded-lg bg-gradient-to-br from-brand-500 to-brand-purple p-2.5">
                  <Icon name={feature.icon} className="h-5.5 w-5.5 text-white" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
                {feature.items.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                        />
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose + compliance */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Why Pathway to Protection"
                title="Low-cost, high-impact, compliance-ready"
              />
              <ul className="mt-8 space-y-4">
                {promo.whyChoose.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
            <div className="self-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Configuration aligned to
              </p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {promo.complianceBadges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                Pathway to Protection is a foundation, not the finish line. When
                you&apos;re ready to formalize an audit, our{" "}
                <Link href="/services/compliance" className="font-semibold text-brand-700 hover:text-brand-500">
                  compliance &amp; audit readiness
                </Link>{" "}
                team takes it from here — and small businesses can see our full
                approach on the{" "}
                <Link href={`/industries/${promo.relatedIndustry.slug}`} className="font-semibold text-brand-700 hover:text-brand-500">
                  {promo.relatedIndustry.label}
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Launch offer band */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-8 text-center sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              {promo.windowLabel}
            </p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {promo.launchOffer.price}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Includes setup, deployment, and a 30-day monitoring report.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/pathway-to-protection/start">Get on the Pathway</ButtonLink>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Pathway to Protection")}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-500 hover:bg-slate-50"
              >
                Email {site.email}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Get your business on the Pathway to Protection"
        description="Tell us how many systems you're protecting and we'll get you set up. Setup, deployment, and your first 30-day monitoring report are included."
        primaryHref="/pathway-to-protection/start"
        primaryLabel="Get on the Pathway"
      />
    </>
  );
}
