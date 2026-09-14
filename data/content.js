// ============================================================================
// Site-wide content: process, FAQs, gallery slots, reviews.
// ============================================================================

export const PROCESS = [
  {
    t: 'You call, we come look',
    d: 'Not a phone quote off a square-foot number. We walk the site, measure it, check where water goes, and put a probe in the ground to see what is under the existing slab. Fifteen minutes on site tells us more than fifteen minutes on the phone.',
    meta: 'Usually within 2 business days',
  },
  {
    t: 'A written scope, not a number on a card',
    d: 'Your estimate lists thickness, base depth, reinforcement, joint layout, finish, drainage and what we are hauling away. If two bids are thousands apart, this document is where the difference lives — and you can hold ours against theirs line by line.',
    meta: 'In your inbox within 48 hours',
  },
  {
    t: 'Permits and locates before we touch anything',
    d: 'We pull the village permit, file for utility locates, and give you a start date only after both are back. Nobody digs on our jobs with unmarked utilities in the ground.',
    meta: 'Typically 1–2 weeks',
  },
  {
    t: 'Demo, base, forms',
    d: 'The old slab comes out, spoils get hauled, and the base goes in and gets compacted in lifts. Forms are set and the pitch is checked with a level before anybody calls for concrete. This is the part that decides how long it lasts.',
    meta: 'Day 1–2',
  },
  {
    t: 'Pour, finish, joint',
    d: 'Placed, screeded, floated, and finished the way you picked. Edges tooled, control joints cut inside the first 24 hours on the spacing the slab needs, and cure compound applied before we leave the site.',
    meta: 'Day 2–3',
  },
  {
    t: 'Cleanup and a cure schedule',
    d: 'Forms pulled, site swept, lawn repaired where the equipment ran. You get a written schedule that tells you when you can walk on it, when you can drive on it, and what not to put on it this winter.',
    meta: 'Same week',
  },
  {
    t: 'We answer the phone afterwards',
    d: 'Workmanship is warranted in writing. If something is not right in year two, you call the same number you called in year one and we come back out.',
    meta: 'Ongoing',
  },
];

export const FAQS = [
  {
    q: 'How much does a concrete driveway cost?',
    a: 'In this market, a straightforward residential tear-out and replacement generally runs somewhere between $10 and $16 per square foot, depending on access, how much demolition there is, base depth, reinforcement and finish. A typical two-car driveway lands in the $7,000 to $14,000 range. We will not quote you a real number off a phone call — we measure first, and the estimate is fixed once it is written.',
  },
  {
    q: 'Why is one bid thousands less than another for the same driveway?',
    a: 'Almost always thickness, base and reinforcement. A four-inch slab poured on existing soil with no steel is genuinely cheaper to build than a five-inch slab on six inches of compacted stone with a rebar grid — and it is a different product with a different lifespan. Ask every bidder to write down slab thickness, base depth and reinforcement. The cheap bid usually stops being cheap when you compare those three lines.',
  },
  {
    q: 'When is the season? Can you pour in winter?',
    a: 'Our main season in Chicagoland runs from roughly April through November. We can pour in cold weather using heated mix, blankets and accelerators, but it costs more and the weather window is unpredictable. If your project is not urgent, booking in late winter for an early spring pour gets you the best schedule and the best pricing.',
  },
  {
    q: 'How long before I can drive on new concrete?',
    a: 'Seven days for a passenger vehicle, and 28 days before anything heavy like a loaded truck or an RV. You can walk on it after 24 hours. Concrete keeps gaining strength for a month, and most of the damage we see on new slabs happens in that first week.',
  },
  {
    q: 'Will my new concrete crack?',
    a: 'It will develop shrinkage cracks — all concrete does as it cures. The question is whether they land inside the control joints where you will never notice them, or across the middle of a bay where you will. Correct joint spacing and a properly compacted base are what decide that, and they are both entirely within the contractor\'s control.',
  },
  {
    q: 'Can I use salt on it?',
    a: 'Not in the first winter, and we would rather you did not after that. De-icing salt drives freeze–thaw cycles right at the surface and is the single most common cause of the scaled, pitted look on driveways under ten years old. Sand gives you traction without doing that. If you must de-ice, avoid anything containing magnesium or ammonium.',
  },
  {
    q: 'Do you handle permits?',
    a: 'Yes. Driveway replacement, widening, and anything touching the public apron or sidewalk requires a permit in most villages we work in. We pull it, schedule the inspection and meet the inspector. It is part of the job, not an extra line item you discover later.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — general liability and workers\' compensation. We will send the certificate directly from our carrier before work starts, and we will name your property manager or HOA as additional insured on commercial work if they need it.',
  },
  {
    q: 'Do you use subcontractors?',
    a: 'No. Demolition, grading, forming, pouring and finishing are all done by our own crew. That is why our schedule holds, and it is why there is nobody to point at if something needs correcting.',
  },
  {
    q: 'What kind of warranty do you give?',
    a: 'A written workmanship warranty covering installation defects — settlement from inadequate base, joint failure, finish defects. Shrinkage cracking within control joints is normal behaviour in concrete and is not a defect, and no honest contractor warrants against it. We will walk you through exactly what is and is not covered before you sign.',
  },
  {
    q: 'How far out are you booked?',
    a: 'It moves with the season. Spring and early summer are the busiest. Call and ask — we will tell you our real next opening rather than pencilling you in and moving you twice.',
  },
  {
    q: 'Do you take on small jobs?',
    a: 'Yes, particularly close to Elmhurst. A set of front steps, one settled walk section, a pad for an AC unit or a generator — if we are already working nearby that week, it is usually easy to fit in.',
  },
];

// Project gallery. `photo` stays null until real job photography is supplied;
// the card renders a styled placeholder rather than a stock image of someone
// else's work.
// `art` is the drawn scene shown until a real photo is registered, so the
// gallery reads as finished rather than as a wall of empty slots. Set `photo`
// to a key from data/photos.js and the photograph takes over.
export const GALLERY = [
  { t: 'Stamped ashlar patio', where: 'Elmhurst, IL', tag: 'Stamped', ratio: '4 / 5', art: 'stamped', photo: null },
  { t: 'Driveway replacement, two-car', where: 'Lombard, IL', tag: 'Driveway', ratio: '4 / 3', art: 'driveway', photo: null },
  { t: 'Paver patio with seat wall', where: 'Hinsdale, IL', tag: 'Pavers', ratio: '1 / 1', art: 'paverPatio', photo: null },
  { t: 'Front walk and stoop', where: 'Villa Park, IL', tag: 'Walkway', ratio: '4 / 3', art: 'walkway', photo: null },
  { t: 'Concrete patio, broom finish', where: 'Oak Brook, IL', tag: 'Patio', ratio: '4 / 5', art: 'patio', photo: null },
  { t: 'Garage slab and apron', where: 'Berwyn, IL', tag: 'Slab', ratio: '4 / 3', art: 'slab', photo: null },
  { t: 'Segmental retaining wall', where: 'Glen Ellyn, IL', tag: 'Wall', ratio: '1 / 1', art: 'wall', photo: null },
  { t: 'Accessible entrance ramp', where: 'Downers Grove, IL', tag: 'Ramp', ratio: '4 / 3', art: 'ramp', photo: null },
  { t: 'Herringbone paver driveway', where: 'La Grange, IL', tag: 'Pavers', ratio: '4 / 5', art: 'paverDrive', photo: null },
];

// ⚠️ Reviews are deliberately empty. Publishing invented testimonials on a
// contractor site is both dishonest and an FTC endorsement-rules problem.
// Fill this with real, attributable reviews (Google, Angi, a signed permission
// email) and the reviews section appears automatically everywhere.
export const REVIEWS = [];

export const TRUST = [
  { t: 'Licensed & insured', d: 'General liability and workers\' compensation. Certificate sent from our carrier before we start.' },
  { t: 'Written workmanship warranty', d: 'In plain language, with what is and is not covered spelled out before you sign.' },
  { t: 'Fixed written pricing', d: 'Thickness, base, steel, joints and finish on the estimate. What we quote is what you pay.' },
  { t: 'Permits and locates handled', d: 'We pull the village permit and file for utility locates as part of the job.' },
];
