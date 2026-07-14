import { engagementModel } from "@/content/home";
import { Container, SectionHeading } from "@/components/ui/primitives";

export function EngagementModel({
  background = "white",
}: {
  background?: "white" | "slate";
}) {
  return (
    <section
      className={`py-20 sm:py-24 ${background === "slate" ? "bg-slate-50" : "bg-white"}`}
    >
      <Container>
        <SectionHeading
          eyebrow="Engagement model"
          title={engagementModel.heading}
          description={engagementModel.description}
        />
        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {engagementModel.steps.map((step) => (
            <li key={step.step} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-brand-400">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    {step.duration}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
