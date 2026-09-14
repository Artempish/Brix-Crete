# Brix & Crete

Marketing site for **Brix & Crete** — a concrete and brick paving contractor in
Elmhurst, IL serving DuPage County and western Cook.

Next.js 14 (App Router), no CSS framework. The entire design system lives in
`app/globals.css`. 49 statically pre-rendered pages, ~97 kB first-load JS.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

---

## ⚠️ Replace before launch

The site is complete and deployable, but these placeholders will embarrass you
if they ship. Everything in this table lives in **`data/business.js`** unless
noted.

| # | What | Where | Currently |
|---|------|-------|-----------|
| 1 | **Phone number** | `BUSINESS.phone` + `BUSINESS.phoneHref` | `(630) 000-0000` |
| 2 | **Email** | `BUSINESS.email` | `info@brixcrete.com` (unverified) |
| 3 | **Street address & ZIP** | `BUSINESS.address` | blank street, guessed ZIP |
| 4 | **Map pin** | `BUSINESS.geo` | generic Elmhurst coordinates |
| 5 | **Business hours** | `BUSINESS.hours` | assumed Mon–Fri 7–6, Sat 8–3 |
| 6 | **Year founded** | `BUSINESS.founded` | empty (hidden until set) |
| 7 | **Google rating** | `BUSINESS.rating` | `null` (hidden until set) |
| 8 | **Social profile URLs** | `BUSINESS.socials` | empty (icons hidden until set) |
| 9 | **Form endpoint** | `BUSINESS.formEndpoint` | empty — see *Estimate form* below |
| 10 | **Job photography** | `public/photos/` + `data/photos.js` | none — artwork shown instead |
| 11 | **Reviews** | `data/content.js` → `REVIEWS` | empty by design — see below |
| 12 | **Legal pages** | `app/privacy`, `app/terms` | drafted, needs a lawyer's read |

Anything left at its placeholder **fails safe**: empty socials hide the icons,
a null rating omits the `aggregateRating` from schema, an empty `REVIEWS` array
swaps the testimonial grid for an honest "ask us for references" panel, and the
reviews page sets `noindex` until it has real content.

### Why reviews and stats are empty

Invented testimonials, made-up star ratings and fabricated project counts are
dishonest, and for a contractor making quality claims they are also an FTC
endorsement-rules problem — and a fake `aggregateRating` in schema violates
Google's structured-data policy and can get rich results pulled sitewide.

Fill `REVIEWS` with real, attributable reviews and they appear automatically on
the homepage, the gallery, the about page and the reviews page.

### Estimate form

`components/estimate-form.jsx` is a four-step qualifier (project → scope →
property → contact) with a honeypot field.

With **no** `formEndpoint` set, submitting opens the visitor's mail client with
everything pre-filled and addressed to `BUSINESS.email`. That works today, but
it is a worse experience and it loses people on mobile.

Set `formEndpoint` to a URL that accepts `POST` with a JSON body and returns
2xx. A Vercel route handler, Formspree, or a Resend-backed endpoint all work.
The body contains every field plus a preformatted `summary` string.

### Photos

```bash
# 1. drop image files into public/photos/
# 2. register them all in one go
node scripts/register-photos.mjs
# 3. rewrite the generated alt text (search data/photos.js for "TODO describe")
# 4. reference the keys from data/services.js (photo:) or data/content.js (GALLERY[].photo)
```

The script is safe to re-run — it preserves alt text you have already written.
Until a key is registered, the component renders the drawn artwork for that
service, so the site never shows stock images of someone else's concrete.
Conventions in `public/photos/README.md`.

### Logo

Drop the file in `public/brand/` and point `BUSINESS.logo.src` at it. It then
replaces the drawn brand mark in the header, mobile menu, footer and schema
automatically. See `public/brand/README.md` — prefer the original vector file
over a copy scraped from the old site.

---

## Content lives in `data/`

| File | Drives |
|------|--------|
| `business.js` | NAP, hours, socials, promises — used by header, footer, schema, every CTA |
| `services.js` | 13 services → `/services/<slug>`, nav dropdown, cards, `Service` schema |
| `areas.js` | 18 towns → `/service-areas/<slug>`, plus `ALSO_SERVED` for the footer |
| `content.js` | Process steps, FAQs, gallery slots, reviews, trust points |
| `photos.js` | Photo manifest (see above) |

Add a service or a town by adding an object to the array — the page, the sitemap
entry, the nav item, the footer link and the schema all follow automatically.

**Write the `angle` copy per town.** The city pages differ on housing stock,
soil, tree cover and village permit rules on purpose. A town page that is just
the same page with the name swapped is what Google treats as doorway content.
If you cannot write something true and specific about a town, add it to
`ALSO_SERVED` instead — it still gets coverage without a thin page.

## Routes

| Route | Source |
|-------|--------|
| `/` | `app/page.jsx` |
| `/services`, `/services/[slug]` | 13 service pages |
| `/service-areas`, `/service-areas/[slug]` | 18 town pages |
| `/estimate` | the four-step form — the primary conversion target |
| `/contact`, `/about`, `/process`, `/gallery`, `/reviews`, `/faq` | |
| `/privacy`, `/terms` | |
| `/sitemap.xml`, `/robots.txt` | generated in `app/sitemap.js`, `app/robots.js` |

Legacy URLs from the old WordPress site (`/concrete-contractor-chicago-il`,
`/brick-paver-patios-elmhurst-il`, and so on) are 301'd in `vercel.json`. **Add
any other live URLs from the old site there before you cut the domain over**, or
you will drop the rankings those pages already hold.

## Design system

Tokens and components are all in `app/globals.css`, prefixed by role rather than
utility. Palette: warm graphite (`--graphite`), poured-concrete grays, and a
fired-clay accent (`--clay`) that ties the "Brix" half of the name to the brick
paving work.

Three motifs recur: saw-cut control joints (`.joints`), aggregate speckle
(`.aggregate`), and running-bond brick (`.brick-rule`). Dark sections use
`.slab`, which re-scopes the theme tokens so children invert automatically
rather than needing their own dark variants.

Artwork is drawn, not photographed — `components/art.jsx` has one SVG scene per
service. They are deliberately diagrammatic so the site never implies it is
showing work it cannot show.

## Deploy

Vercel, Next.js preset, no configuration needed beyond `vercel.json`.

Once the real domain is attached, update `BUSINESS.url` in `data/business.js` —
it is the single source for canonical URLs, the sitemap, and every absolute URL
in the schema.
