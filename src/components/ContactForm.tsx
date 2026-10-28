"use client";

import { useState } from "react";
import Icon from "./Icon";
import { programmes } from "@/data/programmes";

const enquiryTypes = ["Admission enquiry", "Campus visit", "Hostel & transport", "Placements & recruitment", "Other"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 700);
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-gold-500/40 bg-white p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-ink-950">
          <Icon name="check" className="h-6 w-6" strokeWidth={2.2} />
        </span>
        <h3 className="mt-5 font-serif text-2xl text-ink-900">Thank you — we have your enquiry.</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-700/88">
          Our admissions team responds within one working day. For anything urgent, call{" "}
          <a href="tel:+919555100100" className="font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4">
            +91 95551 00100
          </a>{" "}
          or message us on WhatsApp.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-6">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-lift sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Your name" />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="+91" />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@example.com" />
        </Field>
        <Field label="I am enquiring about" htmlFor="type">
          <select id="type" name="type" className={inputClass} defaultValue={enquiryTypes[0]}>
            {enquiryTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>
        <Field label="Programme of interest" htmlFor="programme" className="sm:col-span-2">
          <select id="programme" name="programme" className={inputClass} defaultValue="">
            <option value="">Select a programme (optional)</option>
            {programmes.map((programme) => (
              <option key={programme.slug} value={programme.shortName}>
                {programme.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Message" htmlFor="message" className="sm:col-span-2">
          <textarea id="message" name="message" rows={4} className={inputClass} placeholder="Tell us what you'd like to know" />
        </Field>
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[0.72rem] leading-relaxed text-ink-600/80">
          We use your details only to respond to this enquiry. No spam, no third-party sharing.
        </p>
        <button type="submit" disabled={status === "submitting"} className="btn btn-ink px-6 disabled:opacity-70">
          {status === "submitting" ? "Sending…" : "Send enquiry"}
          <Icon name="arrow" className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-ink-900/15 bg-cream/60 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-600/85 transition-colors focus:border-gold-500 focus:bg-white focus:outline-none";

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-ink-700/85">
        {label}
      </label>
      {children}
    </div>
  );
}
