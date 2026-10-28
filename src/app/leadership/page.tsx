import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { leaders } from "@/data/leaders";

export const metadata: Metadata = {
  title: "Leadership — Founder, Chairman and Director messages",
  description:
    "Messages from GITM Gurugram's leadership: Mr. Surjeet Singh (Founder & Managing Trustee), Mr. Ravinder Tokas (Chairman) and Dr. Aruna Yadav (Director — Admissions & Outreach).",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The people accountable for your education."
        description="Our leadership team sets the academic and ethical standard the institute is measured against. These are their own words."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Leadership" }]}
        image="/images/campus-2.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container-x space-y-16 md:space-y-24">
          {leaders.map((leader, index) => (
            <Reveal key={leader.name}>
              <article className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
                <div className={`lg:sticky lg:top-28 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-ink-900 p-7 text-white">
                    <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-gold-500/20" />
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/40 font-serif text-xl text-gold-300">
                      {leader.initials}
                    </span>
                    <h2 className="mt-5 font-serif text-2xl leading-tight">{leader.name}</h2>
                    <p className="mt-1.5 text-[0.72rem] uppercase tracking-[0.14em] text-gold-400">{leader.role}</p>
                    <div className="mt-5 border-t border-white/10 pt-5">
                      <Icon name="quote" className="h-6 w-6 text-gold-500/60" />
                      <p className="mt-3 font-serif text-[0.95rem] leading-relaxed text-white/75">{leader.quote}</p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="eyebrow">Message</p>
                  <div className="mt-5 space-y-4 text-[0.98rem] leading-[1.8] text-ink-700/85">
                    {leader.message.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-7 flex items-center gap-4 border-t border-ink-900/10 pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900/5 font-serif text-xs text-ink-800">
                      {leader.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">{leader.name}</p>
                      <p className="text-[0.72rem] uppercase tracking-[0.1em] text-ink-600/80">{leader.role}, GITM Gurugram</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-ink-900/10 bg-parchment py-16">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            { icon: "shield", title: "Governed by a trust", body: "The institute is run by Baljeet Singh Education Society, with a managing trustee and a governing body that reviews academic and financial performance." },
            { icon: "users", title: "Faculty-led academics", body: "Each department is headed by a senior academic, supported by a faculty development programme and research cell." },
            { icon: "briefcase", title: "Industry interface", body: "The Centre for Corporate Relations reports directly to the Director, keeping placement outcomes visible at the top of the organisation." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-ink-900/10 bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900/5 text-ink-800">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif text-lg text-ink-900">{item.title}</h3>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-ink-700/85">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Questions for the leadership team?"
        body="Write to the Director's office or raise it with the admissions team — every enquiry is logged and answered."
        primaryLabel="Contact the institute"
        primaryHref="/contact"
        secondaryLabel="About GITM"
        secondaryHref="/about"
      />
    </>
  );
}
