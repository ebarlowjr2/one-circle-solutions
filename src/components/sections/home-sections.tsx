import Link from "next/link";
import {
  buyerPaths,
  differentiators,
  ecosystem,
  operatingModel,
  outcomes,
  stats,
  trustHighlights,
} from "@/content/home";
import { Icon } from "@/components/ui/icons";
import {
  ButtonLink,
  Container,
  SectionHeading,
} from "@/components/ui/primitives";

export function StatsRow() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <Container className="py-12">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {stat.value}
              </dd>
              <dt className="mt-2 text-sm leading-snug text-slate-500">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export function EcosystemStrip() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <Container className="py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Operating daily across the platforms you already own
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {ecosystem.map((name) => (
            <li
              key={name}
              className="text-sm font-semibold tracking-wide text-slate-400"
            >
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function Outcomes() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Outcomes"
          title="What changes when we take the watch"
          description="Security tooling doesn't reduce risk on its own. An operation does. Here's what clients actually get."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-7"
            >
              <span className="inline-flex rounded-lg bg-brand-50 p-2.5">
                <Icon name={item.icon} className="h-6 w-6 text-brand-700" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
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
  );
}

export function OperatingModel() {
  return (
    <section className="bg-slate-950 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How we operate"
          title={operatingModel.heading}
          description={operatingModel.description}
          tone="dark"
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 sm:grid-cols-2">
          {operatingModel.pillars.map((pillar, i) => (
            <div key={pillar.title} className="bg-slate-950 p-8">
              <span className="text-sm font-semibold text-brand-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Differentiators() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Why One Circle"
            title="Built to be the MSSP we wished we could hire"
            description="Most managed security disappointments come from the same places: junior eyes, black-box operations, and lock-in. We designed around all three."
          />
          <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.title} className="border-l-2 border-brand-500 pl-5">
                <dt className="text-base font-semibold text-slate-900">
                  {item.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

export function BuyerPaths() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Where are you today?"
          title="Start from the problem, not the product sheet"
          description="Most teams come to us in one of four situations. Pick yours and we'll show you the pragmatic first step."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {buyerPaths.map((path) => (
            <Link
              key={path.title}
              href={path.href}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-7 transition-colors hover:border-brand-500"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  &ldquo;{path.title}&rdquo;
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {path.description}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                {path.linkLabel}
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
  );
}

export function TrustSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Trust, earned in the details"
              title="We hold ourselves to the standard we help you meet"
              description="An MSSP holds privileged access to your environment. That should make you demanding. Here's how we operate — and you can read the full picture on our Trust page."
            />
            <ButtonLink href="/trust" variant="outline" className="mt-8">
              Read our trust & compliance posture
            </ButtonLink>
          </div>
          <ul className="space-y-6">
            {trustHighlights.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-xl border border-slate-200 p-6"
              >
                <Icon
                  name="shield"
                  className="mt-0.5 h-6 w-6 shrink-0 text-brand-700"
                />
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
