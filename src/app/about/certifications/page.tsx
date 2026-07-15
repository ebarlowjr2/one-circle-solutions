import type { Metadata } from "next";
import {
  certificationGroups,
  certificationStats,
} from "@/content/certifications";
import { ButtonLink, Container, PageHero } from "@/components/ui/primitives";
import { CtaSection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "The industry certifications held across the One Circle Solutions team — security leadership, operations, offensive security, cloud, and infrastructure.",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Team certifications"
        title="Credentials that stay sharp in production"
        description="Certifications don't run a SOC — people do. But they're a fair signal of the discipline behind the work. Here's how the team is credentialed across the areas we operate in every day."
      />

      <section className="border-b border-slate-200 bg-white">
        <Container className="py-12">
          <dl className="grid grid-cols-3 gap-6">
            {[
              [`${certificationStats.certifications}+`, "distinct certifications across the bench"],
              [String(certificationStats.disciplines), "disciplines, from audit to offensive security"],
              [`${certificationStats.issuers}`, "certifying bodies, including AWS, Microsoft & Oracle"],
            ].map(([value, label]) => (
              <div key={label}>
                <dd className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  {value}
                </dd>
                <dt className="mt-2 text-sm leading-snug text-slate-500">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="space-y-16">
            {certificationGroups.map((group) => (
              <div key={group.category}>
                <div className="max-w-3xl border-l-2 border-brand-500 pl-5">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    {group.category}
                  </h2>
                  <p className="mt-2 text-slate-600">{group.description}</p>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {group.certs.map((cert) => (
                    <div
                      key={cert.abbr}
                      className="rounded-xl border border-slate-200 p-6"
                    >
                      <p className="text-lg font-semibold tracking-tight text-brand-700">
                        {cert.abbr}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-snug text-slate-900">
                        {cert.name}
                      </p>
                      <p className="mt-1.5 text-xs text-slate-500">
                        {cert.issuer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-5 rounded-xl border border-slate-200 bg-slate-50 p-8">
            <p className="flex-1 text-sm leading-relaxed text-slate-600">
              Credentials are table stakes — how we operate matters more. Read
              how we handle access, data, and our own security posture.
            </p>
            <ButtonLink href="/trust" variant="outline">
              Trust &amp; compliance posture
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Put the bench to work on your environment"
        description="Book a consultation and we'll match the engagement to the practitioners best suited to your stack and obligations."
      />
    </>
  );
}
