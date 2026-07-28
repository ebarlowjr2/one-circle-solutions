import Link from "next/link";
import type { LongGuide } from "@/content/guides";
import { getService } from "@/content/services";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icons";
import { GuideToc } from "@/components/sections/guide-toc";

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export function LongFormGuide({ guide }: { guide: LongGuide }) {
  const related = guide.relatedServices
    .map((s) => getService(s))
    .filter((s) => s !== undefined);

  return (
    <>
      {/* Header */}
      <header className="border-b border-slate-200 bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>
              {guide.category} · {guide.readTime}
            </Eyebrow>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl">
              {guide.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {guide.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`/downloads/${guide.pdf}`}
                download
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-brand-400"
              >
                <Icon name="arrow-right" className="h-4 w-4 rotate-90" />
                Download the PDF
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-500 hover:bg-slate-50"
              >
                Talk to a compliance advisor
              </Link>
            </div>
            <p className="mt-5 text-sm text-slate-500">
              Updated{" "}
              <time dateTime={guide.dateModified}>
                {dateFormat.format(new Date(guide.dateModified))}
              </time>{" "}
              · One Circle Solutions
            </p>
          </div>
        </Container>
      </header>

      {/* Body: sticky ToC + content */}
      <div className="bg-white py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
            <aside className="lg:pt-2">
              <GuideToc
                sections={guide.sections.map((s) => ({
                  id: s.id,
                  heading: s.heading,
                }))}
              />
            </aside>

            <div className="min-w-0 max-w-3xl">
              {guide.lead.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="mt-0 mb-4 text-lg leading-relaxed text-slate-600"
                >
                  {p}
                </p>
              ))}

              {guide.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 pt-10"
                >
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
                            className="mt-1 h-4 w-4 shrink-0 rounded border-2 border-slate-300"
                            aria-hidden="true"
                          />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              {/* Download + related */}
              <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-7">
                <h2 className="text-base font-semibold text-slate-900">
                  Take this with you
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Download the full checklist as a PDF to share with your team
                  or work through offline.
                </p>
                <a
                  href={`/downloads/${guide.pdf}`}
                  download
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-brand-400"
                >
                  <Icon name="arrow-right" className="h-4 w-4 rotate-90" />
                  Download the PDF
                </a>

                {related.length > 0 ? (
                  <div className="mt-7 border-t border-slate-200 pt-6">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Related services
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {related.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="font-semibold text-brand-700 hover:text-brand-500"
                          >
                            {service.name}
                          </Link>
                          <span className="text-sm text-slate-600">
                            {" "}
                            — {service.tagline}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm text-slate-600">
                      {guide.relatedIndustry ? (
                        <>
                          Working in a regulated sector? See our approach for{" "}
                          <Link
                            href={`/industries/${guide.relatedIndustry.slug}`}
                            className="font-semibold text-brand-700 hover:text-brand-500"
                          >
                            {guide.relatedIndustry.label}
                          </Link>
                          , or read our{" "}
                        </>
                      ) : (
                        <>Read our </>
                      )}
                      <Link
                        href="/trust"
                        className="font-semibold text-brand-700 hover:text-brand-500"
                      >
                        Trust &amp; Compliance
                      </Link>{" "}
                      posture.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
