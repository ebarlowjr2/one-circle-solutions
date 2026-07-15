import type { Metadata } from "next";
import Image from "next/image";
import { leadership } from "@/content/team";
import { ButtonLink, Container, PageHero } from "@/components/ui/primitives";
import { CtaSection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "The practitioners who lead One Circle Solutions — senior operators who stay hands-on with client engagements.",
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Led by operators, not account managers"
        description="Everyone who leads One Circle Solutions still works engagements. The people setting strategy are the same people reviewing detections, sitting in tabletop exercises, and answering when something breaks."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2">
            {leadership.map((leader) => (
              <article
                key={leader.title}
                className="flex flex-col rounded-xl border border-slate-200 p-8"
              >
                <div className="flex items-center gap-5">
                  {leader.photo ? (
                    <Image
                      src={leader.photo}
                      alt={leader.name}
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-purple text-xl font-semibold text-white"
                    >
                      {initials(leader.name)}
                    </span>
                  )}
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {leader.name}
                    </h2>
                    <p className="mt-0.5 text-sm font-medium text-brand-700">
                      {leader.title}
                    </p>
                  </div>
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600">
                  {leader.bio}
                </p>
                {leader.credentials.length > 0 ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {leader.credentials.map((cred) => (
                      <li
                        key={cred}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        {cred}
                      </li>
                    ))}
                  </ul>
                ) : null}
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
