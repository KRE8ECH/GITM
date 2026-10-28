import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EventsExplorer from "@/components/EventsExplorer";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events & News — placements, internships and achievements",
  description:
    "The latest from GITM Gurugram: campus placement drives, internship selections, student achievements and industry programmes.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="What is actually happening at GITM."
        description="Placement drives, internship selections, student achievements and industry programmes — published as they happen, not collated once a year."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Events" }]}
        image="/images/classroom-2.jpg"
      />

      <section className="py-16 md:py-20">
        <div className="container-x">
          <Reveal className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Latest updates</p>
              <h2 className="mt-3 font-serif text-[clamp(1.7rem,3vw,2.3rem)] text-ink-900">
                {events.length} updates from the campus
              </h2>
            </div>
            <p className="max-w-sm text-[0.82rem] leading-relaxed text-ink-600/85">
              Filter by category to follow placements, internships, industry programmes or student achievements.
            </p>
          </Reveal>

          <EventsExplorer />
        </div>
      </section>

      <CTASection
        title="Want to be in the next update?"
        body="Applications for the 2026–27 session are open. Or, if you are a recruiter, get your drive on the campus calendar."
        primaryLabel="Apply now"
        primaryHref="/admissions"
        secondaryLabel="Contact the CCR"
        secondaryHref="/contact"
      />
    </>
  );
}
