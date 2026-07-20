import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/content/articles";
import { getService } from "@/content/services";
import {
  articleSchema,
  breadcrumbSchema,
  JsonLd,
  pageMetadata,
} from "@/lib/seo";
import { site } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { CtaSection } from "@/components/sections/cta";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/resources/${article.slug}`,
  });
}

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const path = `/resources/${article.slug}`;
  const related = article.relatedServices
    .map((s) => getService(s))
    .filter((s) => s !== undefined);

  return (
    <>
      <JsonLd data={articleSchema({ ...article, path })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: article.title, path },
        ])}
      />

      <article>
        <header className="border-b border-slate-200 bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Eyebrow>
                {article.category} · {article.readTime}
              </Eyebrow>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-slate-900 sm:text-4xl">
                {article.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {article.description}
              </p>
              <p className="mt-5 text-sm text-slate-500">
                By {site.name} · Published{" "}
                <time dateTime={article.datePublished}>
                  {dateFormat.format(new Date(article.datePublished))}
                </time>
                {article.dateModified !== article.datePublished ? (
                  <>
                    {" "}
                    · Updated{" "}
                    <time dateTime={article.dateModified}>
                      {dateFormat.format(new Date(article.dateModified))}
                    </time>
                  </>
                ) : null}
              </p>
            </div>
          </Container>
        </header>

        <div className="bg-white py-14 sm:py-16">
          <Container>
            <div className="mx-auto max-w-3xl">
              {article.sections.map((section, i) => (
                <section key={i} className={i > 0 ? "mt-10" : ""}>
                  {section.heading ? (
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      {section.heading}
                    </h2>
                  ) : null}
                  {section.paragraphs?.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="mt-4 leading-relaxed text-slate-600"
                    >
                      {p}
                    </p>
                  ))}
                  {section.list ? (
                    <ul className="mt-4 space-y-3">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                            aria-hidden="true"
                          />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              {related.length > 0 ? (
                <aside className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-7">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Related services
                  </h2>
                  <ul className="mt-4 space-y-3">
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
                  <p className="mt-5 text-sm text-slate-600">
                    <Link
                      href="/resources"
                      className="font-semibold text-brand-700 hover:text-brand-500"
                    >
                      ← All resources
                    </Link>
                  </p>
                </aside>
              ) : null}
            </div>
          </Container>
        </div>
      </article>

      <CtaSection
        title="Want a practitioner's take on your situation?"
        description="Book a no-obligation consultation. We'll review your coverage and obligations, and you'll leave with a written findings brief either way."
      />
    </>
  );
}
