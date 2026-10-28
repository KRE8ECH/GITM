# GITM Gurugram — website rebuild

A ground-up rebuild of [gitmgurgaon.com](https://gitmgurgaon.com/) for **Global Institute of Technology &
Management, Gurugram** (GITM Farrukhnagar).

Built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4** and self-hosted variable fonts
(Fraunces + Inter). No page builder, no jQuery, no plugin stack — every page is statically rendered at build time.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (35 static routes)
npm start        # serve the production build
```

Node 20+ required.

---

## What is in here

| Route | Purpose |
| --- | --- |
| `/` | Home — hero carousel, accreditations, institute story, leadership quotes, 8 programmes, placements, campus life, testimonials, notices, latest updates, visit info |
| `/about` | Story, vision & mission, milestones timeline, statutory committees |
| `/leadership` | Full messages from the Founder, Chairman and Director |
| `/programmes` | All 8 programmes, grouped by level |
| `/programmes/[slug]` | 8 programme pages — overview, curriculum, careers, facilities, eligibility |
| `/admissions` | Process, eligibility table, documents, fees, scholarships, international students, FAQs |
| `/placements` | Placement approach, recruiter wall (44 companies), sectors, latest drives |
| `/campus-life` | Gallery, facilities, student life, centres, hostel/transport/health detail |
| `/events` | Filterable newsroom |
| `/events/[slug]` | 12 individual update pages |
| `/contact` | Campus + Delhi office, department direct lines, enquiry form, map, travel times |
| `not-found` | Branded 404 with route recovery |

All content lives in `src/data/` (`site.ts`, `programmes.ts`, `events.ts`, `recruiters.ts`, `leaders.ts`,
`campus.ts`) — editing a data file updates every page that references it. Nothing is hard-coded into components
except layout copy.

### Key components

- `Header` — sticky, scroll-aware, keyboard-accessible mega menu, full mobile drawer
- `Hero` — crossfading carousel with progress indicators, pauses on hover, respects reduced motion
- `Reveal` — single IntersectionObserver-based scroll reveal (no animation library)
- `RecruiterMarquee` — CSS-only infinite marquee, pauses on hover, seamless loop
- `Accordion` — FAQ with proper `aria-expanded` / `aria-controls`
- `EventsExplorer` — client-side category filter
- `ContactForm` — validated, labelled, success state (see note below)
- `FloatingAction` — WhatsApp + call shortcuts that appear after scroll

---

## Problems with the old site, and what changed

**Performance**
- The old site is WordPress with a page builder: render-blocking CSS/JS, carousel plugins and duplicated image
  sets. The rebuild ships ~103 kB of shared JS and static HTML, with fonts self-hosted and images served from
  `next/image`-ready local assets.
- The old home page loaded the same hero images twice (the carousel loops were duplicated in the DOM) and re-ran
  the same 44-logo recruiter list three times. Now rendered once, as a single CSS marquee.
- Added `prefers-reduced-motion` support; the old animations ran regardless.

**Content & structure**
- Old links were inconsistent (`/b-tech-cse/`, `/m-tech-cse/`, `/mba/`, `/artificial-intelligence-and-data-science-in-b-tech/`).
  Everything now lives under `/programmes/<slug>` with the `programmes` data file as the single source of truth.
- Two of the old programme cards were literally the same programme (`M.Tech CSE` appeared twice under two
  different descriptions). Fixed — eight distinct programmes, each with a real curriculum and career section.
- Added pages the old site buried or lacked: a real admissions walkthrough, a placements page with sectors, an
  about page with the timeline, statutory committees, and individual event pages.

**SEO**
- Keyword-stuffed titles ("Best Engineering College In Delhi NCR | Top Private College") replaced with
  page-specific titles and descriptions via the Metadata API.
- Added `CollegeOrUniversity` and `Course` JSON-LD, `FAQPage` schema on admissions, canonical URLs, Open Graph and
  Twitter cards, `sitemap.xml` and `robots.txt`.
- Every page has exactly one `h1` and a semantic heading hierarchy.
- Alt text is descriptive ("The main academic building at GITM Gurugram, with its dome…") instead of a repeated
  "GITM Gurgaon" on every image.

**Accessibility**
- Visible "Skip to main content" link, real `<nav>`/`<main>`/`<footer>` landmarks, labelled form fields,
  `aria-expanded` on every disclosure, `aria-current` on the active nav item, and full keyboard operation of menus.
- Body copy was retuned to pass WCAG AA on both the light and dark surfaces (the old theme used low-contrast grey
  on white and white-on-photo).
- Reduced-motion, focus-visible rings, and no autoplaying carousel that cannot be paused.

**Mobile**
- A proper full-height drawer with expandable sections instead of a collapsed bootstrap menu; tap targets ≥ 44 px.
- Sticky header collapses to a single row; the utility bar hides on small screens instead of overflowing.

**Trust & conversion**
- Every phone number and email from the old contact page is preserved and routed to the right department, with a
  direct line list rather than one catch-all form.
- WhatsApp and phone CTAs appear in the header, footer, and as a floating action after scroll.
- Fees are not invented — the page explains that notified fees are published by the State/University and offers a
  fee sheet on request. Same for intake numbers.
- Added the Delhi office, travel times and an embedded map.

---

## Before going live

1. **Connect the enquiry form.** `src/components/ContactForm.tsx` currently simulates success client-side.
   Point `handleSubmit` at your CRM endpoint, Formspree, or a Next.js route handler. Do not ship a form that only
   *looks* like it sends.
2. **Replace placeholder dates in `src/data/events.ts`** with the real publication dates from the old site.
3. **Photos.** The images in `public/images/` are low-resolution copies sourced from the existing public site and
   third-party listings. Swap them for the original high-resolution photographs from the college's media library
   — this is the single biggest visual upgrade still available.
4. **Confirm fee/scholarship wording** with the admissions office before publishing.
5. Add real social profile URLs in `sameAs` (`src/app/layout.tsx`) — currently only LinkedIn is referenced.
6. Optional: enable `output: "export"` in `next.config.ts` if you need to host on static-only infrastructure.

## Deployment

Zero-config on Vercel (`vercel`), or any Node host with `npm run build && npm start`. For static hosting, set
`output: "export"` and deploy the `out/` directory.
