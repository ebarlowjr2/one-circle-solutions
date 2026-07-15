import type { Metadata } from "next";
import { leadership } from "@/content/team";
import { Icon } from "@/components/ui/icons";
import {
  ButtonLink,
  CheckItem,
  Container,
  PageHero,
} from "@/components/ui/primitives";
import { CtaSection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "How One Circle Solutions is led — the desks that own strategy, operations, engineering, compliance, and delivery, and what each is accountable for.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Led by operators, not account managers"
        description="Everyone who leads One Circle Solutions still works engagements. The people setting strategy are the same people reviewing detections, sitting in tabletop exercises, and answering when something breaks. Here's how the firm is led — you'll meet your named leads in person during onboarding."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {leadership.map((desk) => (
              <article
                key={desk.role}
                className="flex flex-col rounded-xl border border-slate-200 p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-purple">
                      <Icon name={desk.icon} className="h-7 w-7 text-white" />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900">
                        {desk.role}
                      </h2>
                      <p className="mt-0.5 text-sm font-medium text-brand-700">
                        {desk.focus}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-600">
                  {desk.mandate}
                </p>

                <div className="mt-6 flex-1">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                    Accountable for
                  </h3>
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

          <div className="mt-14 flex flex-wrap items-center gap-5 rounded-xl border border-slate-200 bg-slate-50 p-8">
            <p className="flex-1 text-sm leading-relaxed text-slate-600">
              Leadership is the smallest part of the team. The analysts and
              engineers on your engagement carry the certifications to match —
              see the full picture of how the bench is credentialed.
            </p>
            <ButtonLink href="/about/certifications" variant="outline">
              View team certifications
            </ButtonLink>
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
