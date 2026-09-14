# Logo files

Drop the real Brix & Crete logo here, then point `BUSINESS.logo` in
`data/business.js` at it:

```js
logo: {
  src: '/brand/logo.svg',      // full logo, wordmark included
  w: 180, h: 44,               // intrinsic size, prevents layout shift
  markOnly: '/brand/mark.svg', // optional icon-only version
},
```

With `src` set, the logo replaces the drawn brand mark in the header, the mobile
menu and the footer automatically. Leave `src: null` and the built-in mark is
used instead — the site works either way.

## What to supply

| File | Use | Notes |
|------|-----|-------|
| `logo.svg` | header + footer | **SVG strongly preferred** — stays sharp at any size, usually under 10 kB |
| `logo-light.svg` | optional | If the logo is dark and unreadable on the dark footer, supply a light version and swap it in the footer |
| `mark.svg` | optional | Square/icon-only version, used where the full lockup is too wide |
| `favicon` | browser tab | Replace `app/icon.svg` |

If only a raster logo exists, supply a **PNG with a transparent background** at
roughly 3× the display size (so ~540×132 for a 180×44 slot). A JPEG logo will
have a white box around it — do not use one.

## Note on the old site's logo

The logo on brixcrete.com is a *rendered* copy at whatever size that site used.
If the original vector file exists (`.svg`, `.ai`, `.eps`, or the source the
designer delivered), use that instead — it will be sharper, smaller and
recolourable. Only fall back to scraping the rendered PNG if the original is
genuinely gone.
