import { site } from "@/content/site";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import { Container, PageHero } from "@/components/ui/primitives";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "Terms of use for the One Circle Solutions website, including use of free downloadable tools and site content.",
  path: "/legal/terms",
});

const sections = [
  {
    heading: "About this site",
    body: [
      `This website is operated by ${site.legalName} ("One Circle Solutions," "we," "us"). It provides information about our services and free resources for the security community. By using the site you agree to these terms.`,
    ],
  },
  {
    heading: "Informational content",
    body: [
      "Content on this site is provided for general information. It is not legal, compliance, or security advice for your specific situation, and reading it does not create a client relationship. Engagements with One Circle Solutions are governed by separate written agreements.",
    ],
  },
  {
    heading: "Free tools and downloads",
    body: [
      "Downloadable scripts and templates are provided free of charge under the license stated in each file (typically MIT for scripts and CC BY 4.0 for templates).",
      "They are provided as-is, without warranty of any kind. Security tooling changes system configuration: review every script, test in a non-production environment first, and use report-only modes before applying changes. You are responsible for how these tools are used in your environment.",
    ],
  },
  {
    heading: "Acceptable use",
    body: [
      "You may not use this site to attempt unauthorized access to our systems or anyone else's, to interfere with the site's operation, or to misrepresent your identity in communications with us.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "The One Circle Solutions name, logo, and site content are our property except where a more permissive license is stated. You may link to any page on this site.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the maximum extent permitted by law, One Circle Solutions is not liable for damages arising from use of this website or its free resources. Nothing in these terms limits liability that cannot be limited by law.",
    ],
  },
  {
    heading: "Changes and contact",
    body: [
      `We may update these terms from time to time; the current version will always be posted on this page. Questions? Email ${site.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/legal/terms" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description={`Plain-language terms for using the ${site.name} website and free resources. Last updated July 19, 2026.`}
      />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            {sections.map((section) => (
              <section key={section.heading} className="mt-10 first:mt-0">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                  {section.heading}
                </h2>
                {section.body.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-3 leading-relaxed text-slate-600">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
