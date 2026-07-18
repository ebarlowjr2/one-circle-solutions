import type { Metadata } from "next";
import Link from "next/link";
import {
  culture,
  leadership,
  leadershipOverview,
  operatingPractices,
  teamOverview,
} from "@/content/team";
import { certificationGroups, certificationStats } from "@/content/certifications";
import { Icon } from "@/components/ui/icons";
import {
  ButtonLink,
  CheckItem,
  Container,
  PageHero,
  SectionHeading,
} from "@/components/ui/primitives";
import { CtaSection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Leadership & Team",
  description:
    "How One Circle Solutions is led and how the team operates — experienced leadership, a structured operating model, and a certified bench accountable for outcomes.",
};

const certIssuers = [
  ...new Set(certificationGroups.flatMap((g) => g.certs.map((c) => c.issuer))),
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership & Team"
        title="Led by operators, not account managers"
        description="Experienced leadership, structured operations, and a team accountable for outcomes. Everyone who leads One Circle Solutions still works engagements — you'll meet your named leads in person during onboarding."
      />

      {/* Leadership + team overview */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading eyebrow="Leadership overview" title="Engaged in the work, not above it" />
              {leadershipOverview.map((p) => (
                <p key={p.slice(0, 32)} className="mt-5 leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </div>
            <div>
              <SectionHeading eyebrow="Team overview" title="A certified bench with production scars" />
              {teamOverview.map((p) => (
                <p key={p.slice(0, 32)} className="mt-5 leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership desks */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How the firm is led"
            title="Six desks, each accountable for something specific"
            description="We publish accountabilities rather than headshots. Each desk below owns a defined slice of the operation — and each is held by a practitioner you'll know by name once we work together."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {leadership.map((desk) => (
              <article
                key={desk.role}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-purple">
                    <Icon name={desk.icon} className="h-7 w-7 text-white" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {desk.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-brand-700">
                      {desk.focus}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-600">
                  {desk.mandate}
                </p>

                <div className="mt-6 flex-1">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                    Accountable for
                  </h4>
                  <ul className="mt-3 space-y-2.5 text-sm">
                    {desk.owns.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </ul>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                  {desk.credentials.map((cred) => (
                    <li
                      key={cred}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {cred}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications & expertise */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              eyebrow="Certifications & expertise"
              title={`${certificationStats.certifications}+ certifications across ${certificationStats.disciplines} disciplines`}
              description="The bench holds credentials from the industry's certifying bodies — from audit and incident response to offensive security and cloud platforms."
            />
            <div className="self-center">
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {certIssuers.map((issuer) => (
                  <li
                    key={issuer}
                    className="text-sm font-semibold tracking-wide text-slate-400"
                  >
                    {issuer}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="/about/certifications"
                variant="outline"
                className="mt-8"
              >
                View all team certifications
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* How the team operates */}
      <section className="bg-gradient-to-br from-brand-700 via-brand-blue to-brand-purple py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How the team operates"
            title="Structured service management, aligned to ITIL"
            description="Consistency is a control. The team runs every environment through the same disciplines, so quality never depends on which analyst picks up the ticket."
            tone="dark"
          />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/20 bg-white/20 sm:grid-cols-2 lg:grid-cols-5">
            {operatingPractices.map((practice, i) => (
              <li key={practice} className="bg-white/10 p-7 backdrop-blur-sm">
                <span className="text-2xl font-semibold text-white/80">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-white/90">
                  {practice}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Culture */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              eyebrow="Culture"
              title="Execution, accountability, continuous improvement"
              description={culture.intro}
            />
            <ul className="space-y-4 self-center">
              {culture.points.map((point) => (
                <CheckItem key={point}>{point}</CheckItem>
              ))}
            </ul>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-5 rounded-xl border border-slate-200 bg-slate-50 p-8">
            <p className="flex-1 text-sm leading-relaxed text-slate-600">
              Want the specifics behind the operating model? Read how we handle
              access, data, and our own security posture on the{" "}
              <Link href="/trust" className="font-semibold text-brand-700 hover:text-brand-500">
                Trust &amp; Compliance
              </Link>{" "}
              page.
            </p>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Talk directly with the people who'd run your engagement"
        description="No sales layer, no handoffs. Book a consultation and meet the practitioners behind the circle."
      />
    </>
  );
}
