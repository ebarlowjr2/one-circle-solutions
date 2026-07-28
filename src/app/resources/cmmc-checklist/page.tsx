import { cmmcChecklist } from "@/content/guides";
import {
  articleSchema,
  breadcrumbSchema,
  JsonLd,
  pageMetadata,
} from "@/lib/seo";
import { LongFormGuide } from "@/components/sections/long-form-guide";
import { CtaSection } from "@/components/sections/cta";

const guide = cmmcChecklist;
const path = `/resources/${guide.slug}`;

export const metadata = pageMetadata({
  title: guide.metaTitle,
  description: guide.description,
  path,
  absoluteTitle: true,
});

export default function CmmcChecklistPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          title: guide.title,
          description: guide.description,
          path,
          datePublished: guide.datePublished,
          dateModified: guide.dateModified,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Checklists", path: "/resources/checklists" },
          { name: "CMMC Compliance Checklist", path },
        ])}
      />
      <LongFormGuide guide={guide} />
      <CtaSection
        title="Get from checklist to CMMC-ready"
        description="We run scoped NIST SP 800-171 gap assessments, build the remediation roadmap, and stand up the monitoring the framework assumes you have. Book a consultation to start."
      />
    </>
  );
}
