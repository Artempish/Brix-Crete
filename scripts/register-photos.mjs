#!/usr/bin/env node
/**
 * Scan public/photos/ and rewrite data/photos.js so every image is registered.
 *
 *   node scripts/register-photos.mjs
 *
 * Filenames become keys and a first-draft alt string:
 *   driveway-lombard.jpg        -> "driveway lombard"
 *   patio-hinsdale-2.jpg        -> "patio hinsdale"
 *   driveway-lombard-before.jpg -> "... (before)"
 *
 * Existing alt text is PRESERVED — the script never overwrites a line you have
 * already written. Go back and rewrite the generated alt strings properly:
 * describe the work in the photo, not the company. That text is what a screen
 * reader announces and what Google reads.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, extname, basename } from 'node:path';

const DIR = 'public/photos';
const OUT = 'data/photos.js';
const EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

if (!existsSync(DIR)) {
  console.error(`No ${DIR} directory. Create it and add images first.`);
  process.exit(1);
}

const files = readdirSync(DIR)
  .filter((f) => EXT.has(extname(f).toLowerCase()))
  .sort();

if (!files.length) {
  console.log(`No images in ${DIR}/ yet. Drop them in and run this again.`);
  process.exit(0);
}

// Keep any alt text already written, so re-running is safe.
const prev = existsSync(OUT) ? readFileSync(OUT, 'utf8') : '';
const keepAlt = new Map();
for (const m of prev.matchAll(/'([^']+)':\s*\{[^}]*?alt:\s*'((?:[^'\\]|\\.)*)'/gs)) {
  keepAlt.set(m[1], m[2]);
}

const draftAlt = (key) => {
  let s = key.replace(/-/g, ' ').replace(/\s+\d+$/, '');
  let suffix = '';
  if (/\bbefore$/.test(s)) { s = s.replace(/\s*before$/, ''); suffix = ' (before)'; }
  if (/\bafter$/.test(s))  { s = s.replace(/\s*after$/, '');  suffix = ' (after)'; }
  return `TODO describe this photo — ${s}${suffix}`;
};

const entries = files.map((f) => {
  const key = basename(f, extname(f));
  const alt = keepAlt.get(key) ?? draftAlt(key);
  return `  '${key}': {\n    src: '/photos/${f}',\n    alt: '${alt.replace(/'/g, "\\'")}',\n  },`;
});

const header = readFileSync(OUT, 'utf8').split('export const PHOTOS')[0];

writeFileSync(OUT, `${header}export const PHOTOS = {\n${entries.join('\n')}\n};

export function photo(key) {
  return (key && PHOTOS[key]) || null;
}
`);

const todo = entries.filter((e) => e.includes('TODO describe')).length;
console.log(`Registered ${files.length} photo(s) in ${OUT}.`);
if (todo) {
  console.log(`\n⚠  ${todo} still need real alt text — search ${OUT} for "TODO describe".`);
}
console.log(`\nNext: reference the keys from data/services.js (photo:) or`);
console.log(`data/content.js (GALLERY[].photo) to place them on specific pages.`);
