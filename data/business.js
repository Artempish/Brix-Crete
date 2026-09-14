// ============================================================================
// Single source of truth for everything about the business.
// Change it here and it updates the header, footer, schema, sitemap and every
// call-to-action on the site.
//
// ⚠️  Values marked REPLACE are placeholders — see README before launch.
// ============================================================================

export const BUSINESS = {
  name: 'Brix & Crete',
  legalName: 'Brix & Crete', // REPLACE if the LLC name differs
  tagline: 'Concrete and brick paving, built for Chicago winters.',
  domain: 'brixcrete.com',
  url: 'https://brixcrete.com',

  // --- contact -------------------------------------------------------------
  phone: '(630) 000-0000',            // REPLACE
  phoneHref: 'tel:+16300000000',      // REPLACE
  email: 'info@brixcrete.com',        // REPLACE
  address: {
    street: '',                       // REPLACE (or leave blank for a service-area business)
    city: 'Elmhurst',
    region: 'IL',
    regionName: 'Illinois',
    postal: '60126',                  // REPLACE
    country: 'US',
  },
  geo: { lat: 41.8994, lng: -87.9403 }, // Elmhurst, IL — REPLACE with the real pin

  hours: [
    { days: 'Monday – Friday', time: '7:00 AM – 6:00 PM', d: ['Mo', 'Tu', 'We', 'Th', 'Fr'], o: '07:00', c: '18:00' },
    { days: 'Saturday', time: '8:00 AM – 3:00 PM', d: ['Sa'], o: '08:00', c: '15:00' },
    { days: 'Sunday', time: 'Closed', d: ['Su'], o: null, c: null },
  ],

  // --- proof ---------------------------------------------------------------
  // Only put numbers here you can evidence. Anything left empty is hidden.
  founded: '',                        // REPLACE e.g. '2009'
  rating: null,                       // REPLACE e.g. { value: 4.9, count: 87 }
  licenseNote: 'Licensed & insured — certificate available on request.',

  socials: [
    // REPLACE with real profile URLs, or delete the row to hide the icon
    { label: 'Facebook', href: '', icon: 'facebook' },
    { label: 'Instagram', href: '', icon: 'instagram' },
    { label: 'Google', href: '', icon: 'google' },
  ],

  // Where quote-form submissions should go once a backend is wired up.
  formEndpoint: '', // REPLACE — e.g. a Formspree / Resend / Vercel route URL
};

export const CITY_STATE = `${BUSINESS.address.city}, ${BUSINESS.address.region}`;

export const HOURS_SUMMARY = 'Mon–Fri 7–6 · Sat 8–3';

export const PROMISES = [
  {
    title: 'One crew, start to finish',
    body: 'Demo, grading, forming, pouring, finishing — all in-house. No subcontractor handoffs, no schedule drift, no finger-pointing when something needs fixing.',
    icon: 'crew',
  },
  {
    title: 'Built for freeze–thaw',
    body: 'Chicagoland concrete fails at the base, not the surface. We over-compact the sub-base, use air-entrained mix and cut control joints on the right spacing so the slab cracks where we tell it to.',
    icon: 'frost',
  },
  {
    title: 'A fixed price, in writing',
    body: 'Your estimate lists thickness, base depth, reinforcement, joint layout and finish before anyone picks up a shovel. What we quote is what you pay.',
    icon: 'doc',
  },
  {
    title: 'We leave it cleaner than we found it',
    body: 'Lawn protected, forms pulled, spoils hauled, driveway swept. You get a written cure schedule telling you exactly when to walk and drive on it.',
    icon: 'broom',
  },
];
