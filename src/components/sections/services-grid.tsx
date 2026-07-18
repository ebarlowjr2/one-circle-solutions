import Link from "next/link";
import { services } from "@/content/services";
import { Icon } from "@/components/ui/icons";
import { Container, SectionHeading } from "@/components/ui/primitives";

export function ServicesGrid({
  heading = "Six services, one operation",
  description = "Each service stands on its own. Together they feed a single operational view of your risk — with one team and one escalation path.",
  eyebrow = "Services",
  background = "slate",
}: {
  heading?: string;
  description?: string;
  eyebrow?: string;
  background?: "white" | "slate";
}) {
  return (
    <section
      className={`py-20 sm:py-24 ${background === "slate" ? "bg-slate-50" : "bg-white"}`}
    >
      <Container>
        <SectionHeading eyebrow={eyebrow} title={heading} description={description} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-7 transition-all hover:border-brand-500 hover:shadow-md"
            >
              <span className="inline-flex w-fit rounded-lg bg-gradient-to-br from-brand-500 to-brand-purple p-2.5">
                <Icon name={service.icon} className="h-5.5 w-5.5 text-white" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-slate-900">
                {service.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {service.tagline}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                Learn more
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
