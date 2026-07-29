import Link from "next/link";
import { jobs } from "@/content/careers";
import { site } from "@/content/site";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import { Container, PageHero } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icons";
import { CtaSection } from "@/components/sections/cta";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Open roles at One Circle Solutions — a remote-first managed security services provider. See current openings and how to apply.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />
      <PageHero
        eyebrow="Careers"
        title="Work with a team that runs security in the open"
        description="We're a remote-first managed security services provider that hires experienced people, keeps teams small, and takes ownership of outcomes. When we have a role open, you'll find it here."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
            Open positions
          </h2>
          <div className="mt-6 space-y-4">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className="group flex flex-col gap-4 rounded-xl border border-slate-200 p-7 transition-colors hover:border-brand-500 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {job.title}
                  </h3>
                  <p className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                    <span>{job.employmentLabel}</span>
                    <span>{job.locationLabel}</span>
                    <span>{job.compensationLabel}</span>
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-brand-700">
                  View role
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-sm text-slate-600">
            Don&apos;t see a fit but think you&apos;d strengthen the team?
            Introduce yourself at{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-brand-700 hover:text-brand-500"
            >
              {site.email}
            </a>
            .
          </p>
        </Container>
      </section>

      <CtaSection
        title="Not looking, but need security help?"
        description="If you landed here as a prospective client rather than a candidate, we'd still like to talk. Book a no-obligation consultation."
      />
    </>
  );
}
