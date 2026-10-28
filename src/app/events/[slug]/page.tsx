import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { EventCard } from "@/components/EventsExplorer";
import { events } from "@/data/events";

type Params = { slug: string };

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) return { title: "Update not found" };
  return {
    title: event.title,
    description: event.excerpt,
    alternates: { canonical: `/events/${event.slug}` },
    openGraph: { title: event.title, description: event.excerpt, images: [event.image], type: "article" },
  };
}

export default async function EventPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) notFound();

  const related = events.filter((item) => item.slug !== event.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${event.category} · ${new Date(event.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`}
        title={event.title}
        description={event.excerpt}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Events", href: "/events" }, { label: event.category }]}
        image={event.image}
      />

      <article className="py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_0.8fr]">
          <div>
            <Reveal>
              <div className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={event.image} alt="" className="aspect-[16/9] w-full object-cover" />
              </div>
              <div className="mt-8 space-y-4 text-[1rem] leading-[1.85] text-ink-700/85">
                {event.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-ink-900/10 pt-6">
                <span className="rounded-full bg-ink-900/5 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-ink-700">
                  {event.category}
                </span>
                <span className="flex items-center gap-2 text-[0.8rem] text-ink-600/85">
                  <Icon name="calendar" className="h-4 w-4 text-gold-600" />
                  {new Date(event.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </span>
                <Link href="/events" className="link-underline ml-auto text-[0.8rem]">
                  All updates
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl bg-ink-900 p-6 text-white">
              <h2 className="font-serif text-lg">Interested in GITM?</h2>
              <p className="mt-2 text-[0.84rem] leading-relaxed text-white/60">
                Admissions for the 2026–27 session are open across all eight programmes.
              </p>
              <Link href="/admissions" className="btn btn-gold mt-4 w-full justify-center">
                Apply now
                <Icon name="arrowUpRight" className="h-4 w-4" />
              </Link>
              <Link href="/placements" className="btn btn-outline-invert mt-2.5 w-full justify-center">
                See placements
              </Link>
            </div>
            <div className="rounded-2xl border border-ink-900/10 bg-parchment p-6">
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold-700">Media enquiries</h2>
              <p className="mt-2 text-[0.84rem] leading-relaxed text-ink-700/88">
                For press, photographs or interviews, write to{" "}
                <a href="mailto:info@gitmgurgaon.com" className="font-medium text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4">
                  info@gitmgurgaon.com
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </article>

      <section className="border-t border-ink-900/10 bg-parchment py-16">
        <div className="container-x">
          <h2 className="font-serif text-2xl text-ink-900">More updates</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <EventCard key={item.slug} event={item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
