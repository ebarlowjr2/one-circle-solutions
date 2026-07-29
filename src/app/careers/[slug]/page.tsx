import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { applyMailto, getJob, jobs } from "@/content/careers";
import {
  breadcrumbSchema,
  JsonLd,
  jobPostingSchema,
  pageMetadata,
} from "@/lib/seo";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { CtaSection } from "@/components/sections/cta";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return pageMetadata({
    title: `${job.title} (${job.workplace}, ${job.employmentLabel.split(" · ")[0]})`,
    description: job.summary,
    path: `/careers/${job.slug}`,
    absoluteTitle: true,
  });
}

// Plain-text description for JobPosting structured data.
function schemaDescription(summary: string, sections: { heading: string; items?: string[]; paragraphs?: string[] }[]) {
  const parts = [summary];
  for (const s of sections) {
    parts.push(s.heading);
    if (s.paragraphs) parts.push(...s.paragraphs);
    if (s.items) parts.push(...s.items.map((i) => `- ${i}`));
  }
  return parts.join("\n");
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  const path = `/careers/${job.slug}`;
  const mailto = applyMailto(job);

  const facts = [
    ["Employment", job.employmentLabel],
    ["Location", job.locationLabel],
    ["Compensation", job.compensationLabel],
    ["Reports to", job.reportsTo],
    ["Classification", job.flsa],
  ];

  return (
    <>
      <JsonLd
        data={jobPostingSchema({
          title: job.title,
          description: schemaDescription(job.summary, job.sections),
          path,
          datePosted: job.datePosted,
          employmentType: job.employmentType,
          salary: job.salary,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
          { name: job.title, path },
        ])}
      />

      {/* Header */}
      <header className="border-b border-slate-200 bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Careers · Open role</Eyebrow>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl">
              {job.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {job.summary}
            </p>
            <div className="mt-8">
              <a
                href={mailto}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-brand-400"
              >
                Apply for this role
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* Body */}
      <div className="bg-white py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
            {/* Facts sidebar */}
            <aside className="lg:pt-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-24">
                <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  At a glance
                </h2>
                <dl className="mt-4 space-y-3">
                  {facts.map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-xs text-slate-500">{k}</dt>
                      <dd className="text-sm font-medium text-slate-900">{v}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={mailto}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-brand-400"
                >
                  Apply for this role
                </a>
              </div>
            </aside>

            {/* Sections */}
            <div className="min-w-0 max-w-3xl">
              {job.sections.map((section) => (
                <section key={section.heading} className="pt-8 first:pt-0">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    {section.heading}
                  </h2>
                  {section.intro ? (
                    <p className="mt-3 leading-relaxed text-slate-600">
                      {section.intro}
                    </p>
                  ) : null}
                  {section.paragraphs?.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="mt-4 leading-relaxed text-slate-600"
                    >
                      {p}
                    </p>
                  ))}
                  {section.items ? (
                    <ul className="mt-4 space-y-2.5">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                            aria-hidden="true"
                          />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-7">
                <h2 className="text-base font-semibold text-slate-900">
                  How to apply
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Email your résumé with a short note about why you&apos;re a
                  fit. We read every application and reply to candidates we&apos;d
                  like to talk with.
                </p>
                <a
                  href={mailto}
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-brand-400"
                >
                  Apply for this role
                </a>
                <p className="mt-4 text-xs text-slate-500">
                  One Circle Solutions is an equal-opportunity employer. All
                  qualified applicants will receive consideration without regard
                  to race, color, religion, sex, sexual orientation, gender
                  identity, national origin, disability, or veteran status.
                </p>
              </div>

              <p className="mt-8 text-sm text-slate-600">
                <Link
                  href="/careers"
                  className="font-semibold text-brand-700 hover:text-brand-500"
                >
                  ← All open positions
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </div>

      <CtaSection
        title="Curious what we do all day?"
        description="Get a feel for how we operate — explore our services, or read the field notes and guides our team publishes."
      />
    </>
  );
}
