// Brand mark.
//
// If a real logo file is registered at BUSINESS.logo.src it is used. Otherwise
// this falls back to a drawn mark: a square split on the diagonal —
// running-bond brick on one side, a jointed concrete slab on the other.

import { BUSINESS } from '@/data/business';

export function BrandMark({ s = 34 }) {
  const mark = BUSINESS.logo?.markOnly || BUSINESS.logo?.src;
  if (mark) {
    return (
      <img
        src={mark}
        alt=""
        height={s}
        style={{ height: s, width: 'auto', flex: 'none' }}
      />
    );
  }
  return <DrawnMark s={s} />;
}

function DrawnMark({ s = 34 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 40 40" aria-hidden="true" style={{ flex: 'none' }}>
      <defs>
        <clipPath id="bc-mark-clip"><rect width="40" height="40" rx="9" /></clipPath>
        <linearGradient id="bc-mark-con" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d9d4cc" />
          <stop offset="100%" stopColor="#aaa298" />
        </linearGradient>
        <linearGradient id="bc-mark-clay" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d1602f" />
          <stop offset="100%" stopColor="#9c3d1f" />
        </linearGradient>
      </defs>
      <g clipPath="url(#bc-mark-clip)">
        <rect width="40" height="40" fill="url(#bc-mark-con)" />
        {/* concrete: control joints */}
        <g stroke="#8f887e" strokeWidth="1.6">
          <line x1="0" y1="20" x2="40" y2="20" />
          <line x1="20" y1="0" x2="20" y2="40" />
        </g>
        {/* brick half */}
        <polygon points="0,40 40,0 40,40" fill="url(#bc-mark-clay)" />
        <g stroke="#7d2f16" strokeWidth="1.5" opacity=".85">
          <line x1="10" y1="30" x2="40" y2="30" />
          <line x1="20" y1="20" x2="40" y2="20" />
          <line x1="30" y1="10" x2="40" y2="10" />
          <line x1="25" y1="40" x2="25" y2="35" />
          <line x1="15" y1="40" x2="15" y2="35" />
          <line x1="35" y1="40" x2="35" y2="35" />
          <line x1="30" y1="30" x2="30" y2="25" />
          <line x1="20" y1="30" x2="20" y2="25" />
          <line x1="35" y1="20" x2="35" y2="15" />
        </g>
      </g>
      <rect x=".6" y=".6" width="38.8" height="38.8" rx="8.6" fill="none" stroke="#000" strokeOpacity=".16" strokeWidth="1.2" />
    </svg>
  );
}

export function BrandLockup({ s = 34, onDark = false }) {
  // A full logo file (wordmark included) replaces the whole lockup.
  if (BUSINESS.logo?.src) {
    return (
      <img
        src={BUSINESS.logo.src}
        alt={BUSINESS.name}
        width={BUSINESS.logo.w || undefined}
        height={BUSINESS.logo.h || undefined}
        style={{ height: s + 10, width: 'auto', display: 'block' }}
      />
    );
  }

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
      <BrandMark s={s} />
      <span style={{ display: 'grid', lineHeight: 1 }}>
        <span style={{ fontWeight: 800, fontSize: '1.08rem', letterSpacing: '-.03em', whiteSpace: 'nowrap' }}>
          Brix <span style={{ color: 'hsl(var(--clay))' }}>&amp;</span> Crete
        </span>
        <span
          style={{
            fontSize: '.64rem', letterSpacing: '.19em', textTransform: 'uppercase',
            fontWeight: 700, marginTop: 4, whiteSpace: 'nowrap',
            color: onDark ? 'hsl(32 8% 62%)' : 'hsl(var(--ink-3))',
          }}
        >
          Concrete &amp; Brick
        </span>
      </span>
    </span>
  );
}
