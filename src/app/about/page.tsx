import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import {
  ButtonLink,
  CheckItem,
  Container,
  PageHero,
  SectionHeading,
} from "@/components/ui/primitives";
import { CtaSection } from "@/components/sections/cta";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "One Circle Solutions is a managed security services provider built by operators — senior analysts and engineers who run security as a craft, not a call center.",
  path: "/about",
});

const values = [
  {
    title: "Operate in the open",
    description:
      "Clients see our dashboards, our investigation notes, and our misses. Trust built on opacity isn't trust.",
  },
  {
    title: "Small blast radius, always",
    description:
      "We design our own access the way we'd want a vendor in our environment to: least privilege, audited, and revocable in minutes.",
  },
  {
    title: "Say the uncomfortable thing",
    description:
      "If a control isn't worth the money or a finding is worse than it looks, we say so — to engineers and to boards.",
  },
  {
    title: "Leave clients stronger",
    description:
      "Everything we build in your environment — detections, runbooks, documentation — is yours. Good security shouldn't require a hostage.",
  },
];

const whoWeServe = [
  "Mid-market companies whose IT teams carry security 'on the side'",
  "Regulated businesses in healthcare, finance, and government supply chains",
  "SaaS companies facing SOC 2, ISO 27001, or customer security reviews",
  "Organizations rebuilding trust and controls after an incident",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About us"
        title="Built by operators who got tired of watching MSSPs disappoint"
        description="One Circle Solutions was founded by security practitioners who spent years on the other side of the table — buying managed services that forwarded alerts instead of resolving them. We built the firm we always wanted to hire: senior analysts, transparent operations, and no lock-in."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              eyebrow="Our story"
              title="One circle: a single, closed loop of accountability"
              description="The name is the operating philosophy. Detection, response, remediation, and reporting shouldn't be scattered across vendors and handoffs — they belong in one loop, owned end to end by a team that knows your environment. When something fires at 2 a.m., the person who triages it, the playbook that contains it, and the report that explains it all come from the same circle."
            />
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Who we serve
              </h3>
              <ul className="mt-6 space-y-4">
                {whoWeServe.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-brand-700 via-brand-blue to-brand-purple py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="The principles we're willing to lose deals over"
            tone="dark"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/20 bg-white/20 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="bg-white/10 p-8 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/85">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="The team"
                title="Senior practitioners, deliberately small"
                description="We hire experienced analysts and engineers, keep client loads low, and assign a named lead to every engagement. You'll know the people watching your environment by name — and they'll know your environment better than a rotating queue ever could."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/about/leadership" variant="dark">
                  Meet the leadership
                </ButtonLink>
                <ButtonLink href="/about/certifications" variant="outline">
                  Team certifications
                </ButtonLink>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 self-start">
              {[
                ["100%", "engagements with a named lead"],
                ["Senior-only", "analyst bench, no tier-1 queue"],
                ["Low ratio", "clients per analyst, by design"],
                ["Zero", "lock-in — your tools, your data"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-200 p-6"
                >
                  <p className="text-2xl font-semibold tracking-tight text-slate-900">
                    {value}
                  </p>
                  <p className="mt-1.5 text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Meet the team behind the circle"
        description="Book a consultation and talk directly with the practitioners who would run your engagement — not a sales layer."
      />
    </>
  );
}
