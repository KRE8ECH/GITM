import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { departments, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — campus address, department numbers and enquiries",
  description:
    "Contact GITM Gurugram: 5 KM Milestone, Kheda Khurampur, Farrukhnagar, Haily Mandi Road, Gurugram 122506. Admissions +91 95551 00100, plus a Delhi office in Munirka.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.campus.mapQuery)}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a person, not a form."
        description="Reach the right department directly — admissions, hostel, transport, accounts or placements. Our team answers calls Monday to Saturday, 9:00 AM to 5:00 PM."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image="/images/campus-view.jpg"
      />

      {/* Primary contacts */}
      <section className="border-b border-ink-900/10 bg-parchment py-12">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {[site.campus, site.delhi].map((location) => (
            <div key={location.label} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-gold-700">
                <Icon name="pin" className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-serif text-lg text-ink-900">{location.label} address</h2>
                <address className="mt-2 space-y-0.5 text-[0.86rem] not-italic leading-relaxed text-ink-700/88">
                  {location.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </address>
                <div className="mt-3 flex flex-col gap-1.5 text-[0.84rem]">
                  <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 font-medium text-ink-900 hover:text-gold-700">
                    <Icon name="phone" className="h-4 w-4 text-gold-600" />
                    {location.phone}
                  </a>
                  <a href={`mailto:${location.email}`} className="inline-flex items-center gap-2 text-ink-700/90 hover:text-gold-700">
                    <Icon name="mail" className="h-4 w-4 text-gold-600" />
                    {location.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + departments */}
      <section className="py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow">Send an enquiry</p>
            <h2 className="mt-3 font-serif text-[clamp(1.7rem,3vw,2.3rem)] text-ink-900">
              Tell us what you need and we will route it correctly.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700/88">
              Admissions questions are answered the same or next working day. For anything urgent, call the helpline —
              it is faster than a form.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow">Departments</p>
            <h2 className="mt-3 font-serif text-[clamp(1.7rem,3vw,2.3rem)] text-ink-900">
              Direct lines
            </h2>
            <div className="mt-5 divide-y divide-ink-900/10 border-y border-ink-900/10">
              {departments.map((department) => (
                <div key={department.name} className="flex flex-wrap items-baseline justify-between gap-2 py-3.5">
                  <p className="text-[0.86rem] font-medium text-ink-900">{department.name}</p>
                  <div className="flex flex-col items-end text-right text-[0.8rem]">
                    <a href={`tel:${department.phone.replace(/\s/g, "")}`} className="text-ink-700/90 hover:text-gold-700">
                      {department.phone}
                    </a>
                    <a href={`mailto:${department.email}`} className="text-ink-600/80 hover:text-gold-700">
                      {department.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-ink-900 p-6 text-white">
              <h3 className="font-serif text-lg">Prefer WhatsApp?</h3>
              <p className="mt-2 text-[0.84rem] leading-relaxed text-white/60">
                Message the admissions team directly. We reply during office hours.
              </p>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-4 w-full justify-center">
                <Icon name="whatsapp" className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-4 rounded-2xl border border-ink-900/10 bg-white p-6">
              <h3 className="font-serif text-lg text-ink-900">Admissions 2026–27</h3>
              <p className="mt-2 text-[0.84rem] leading-relaxed text-ink-700/85">
                Applications are open across all programmes. The online form takes about ten minutes.
              </p>
              <a
                href={site.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ink mt-4 w-full justify-center"
              >
                Start application
                <Icon name="arrowUpRight" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-ink-900/10">
        <div className="container-x py-14">
          <Reveal className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow">Getting here</p>
              <h2 className="mt-3 font-serif text-[clamp(1.6rem,2.8vw,2.2rem)] text-ink-900">
                Farrukhnagar, Gurugram
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-700/88">
                The campus is on Haily Mandi Road, 5 km from Farrukhnagar, roughly 30–40 minutes from Gurugram city and
                about an hour from IGI Airport depending on traffic. Institute transport covers major routes.
              </p>
              <div className="mt-5 space-y-2 text-[0.84rem] text-ink-700/90">
                {[
                  ["Gurugram city", "≈ 30–40 minutes"],
                  ["IGI Airport", "≈ 60 minutes"],
                  ["Delhi (Munirka office)", "≈ 75 minutes"],
                  ["Patauda / Haily Mandi", "≈ 10 minutes"],
                ].map(([place, time]) => (
                  <div key={place} className="flex items-center justify-between border-b border-ink-900/10 pb-1.5">
                    <span>{place}</span>
                    <span className="font-medium text-ink-900">{time}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.campus.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline mt-5"
              >
                Open in Google Maps
                <Icon name="arrowUpRight" className="h-4 w-4" />
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-ink-900/10">
              <iframe
                title="GITM Gurugram location map"
                src={mapSrc}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
