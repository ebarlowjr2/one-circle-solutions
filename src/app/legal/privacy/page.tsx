import { site } from "@/content/site";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import { Container, PageHero } from "@/components/ui/primitives";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How One Circle Solutions collects, uses, and protects information on this website — contact form data, analytics, cookies, and third-party services.",
  path: "/legal/privacy",
});

const sections = [
  {
    heading: "Information we collect",
    body: [
      "Contact form: when you submit our contact form, we collect the name, work email, company, service interest, and message you provide. We use this information only to respond to your inquiry and to conduct any engagement discussions that follow.",
      "Downloads: files in our resources section can be downloaded without providing any personal information.",
      "Server logs: like most websites, our hosting infrastructure records standard technical information (such as IP address, browser type, and pages requested) to operate the service and investigate abuse.",
    ],
  },
  {
    heading: "Analytics",
    body: [
      "We use privacy-focused, aggregate web analytics (Vercel Web Analytics and Speed Insights) to understand page performance and traffic patterns. These tools do not use advertising cookies and do not build cross-site profiles of visitors.",
      "If we add additional analytics tools in the future (such as Google Analytics), we will update this policy before doing so.",
    ],
  },
  {
    heading: "Cookies and tracking",
    body: [
      "This website does not use advertising or cross-site tracking cookies. Any cookies present are limited to what our hosting and analytics infrastructure strictly requires to function.",
    ],
  },
  {
    heading: "Third-party services",
    body: [
      "This website is hosted on Vercel. Contact form submissions and site traffic pass through their infrastructure, subject to their security and privacy commitments.",
      "We do not sell, rent, or trade your personal information. We share it only with service providers needed to operate this website and respond to you, or where required by law.",
    ],
  },
  {
    heading: "Data handling and retention",
    body: [
      "We keep contact inquiries for as long as needed to respond and maintain a record of business correspondence. You may request that we delete your inquiry data at any time.",
      "We apply the same security discipline to our own systems that we recommend to clients, including access control, encryption in transit, and least-privilege administration.",
    ],
  },
  {
    heading: "Your choices and contact",
    body: [
      `To ask what information we hold about you, request a correction, or request deletion, email us at ${site.email}. We will respond within a reasonable timeframe.`,
      "If we make material changes to this policy, we will update the date below and post the revised version on this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/legal/privacy" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How ${site.legalName} handles information collected through this website. Last updated July 19, 2026.`}
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
