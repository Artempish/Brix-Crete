// ============================================================================
// Photo manifest.
//
// This site ships with drawn artwork instead of photography, because there was
// no job photography available when it was built. The moment real photos land
// in /public/photos, list them here and they replace the artwork everywhere —
// no component changes needed.
//
//   1. Put the file in public/photos/  (e.g. public/photos/driveway-lombard.jpg)
//   2. Add an entry below with a real, descriptive alt string
//   3. Reference the key from data/services.js (`photo`) or data/content.js
//
// Alt text is not optional. It is what a screen reader announces and what
// Google reads. Describe the work in the photo, not the company.
// ============================================================================

export const PHOTOS = {
  // 'driveway-lombard': {
  //   src: '/photos/driveway-lombard.jpg',
  //   alt: 'Replaced two-car concrete driveway with saw-cut control joints, Lombard IL',
  //   w: 1600,
  //   h: 1200,
  // },
};

export function photo(key) {
  return (key && PHOTOS[key]) || null;
}
