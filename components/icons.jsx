// Icon set. 24×24 grid, 1.75 stroke, currentColor. Sized via the `s` prop.

const base = (s = 20) => ({
  width: s, height: s, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round',
  strokeLinejoin: 'round', 'aria-hidden': true,
});

export const Arrow = ({ s = 16 }) => (
  <svg {...base(s)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowUpRight = ({ s = 16 }) => (
  <svg {...base(s)}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Check = ({ s = 18 }) => (
  <svg {...base(s)}><path d="m4 12.5 5 5L20 6.5" /></svg>
);
export const Phone = ({ s = 18 }) => (
  <svg {...base(s)}>
    <path d="M6.5 3h3l1.5 4-2 1.5a13 13 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3Z" />
  </svg>
);
export const Mail = ({ s = 18 }) => (
  <svg {...base(s)}><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><path d="m3 7 9 6 9-6" /></svg>
);
export const Pin = ({ s = 18 }) => (
  <svg {...base(s)}><path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></svg>
);
export const Clock = ({ s = 18 }) => (
  <svg {...base(s)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5.4l3.4 2" /></svg>
);
export const Star = ({ s = 16, filled = true }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden
    fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="m12 3.2 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.7l6.1-.9Z" />
  </svg>
);
export const Shield = ({ s = 18 }) => (
  <svg {...base(s)}><path d="M12 3 5 6v5.5c0 4.4 3 8.2 7 9.5 4-1.3 7-5.1 7-9.5V6Z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const Doc = ({ s = 18 }) => (
  <svg {...base(s)}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></svg>
);
export const Crew = ({ s = 18 }) => (
  <svg {...base(s)}><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16.5 5.6a3.2 3.2 0 0 1 0 5.9M17 14.4A6 6 0 0 1 21 20" /></svg>
);
export const Frost = ({ s = 18 }) => (
  <svg {...base(s)}><path d="M12 2.5v19M3.8 7.2l16.4 9.6M20.2 7.2 3.8 16.8" /><path d="M12 6.4 9.8 4.6M12 6.4l2.2-1.8M12 17.6l-2.2 1.8M12 17.6l2.2 1.8" /></svg>
);
export const Broom = ({ s = 18 }) => (
  <svg {...base(s)}><path d="M15 4 9.5 9.5" /><path d="M13.5 8 16 10.5" /><path d="M8.5 10.5 5 14l5 5 3.5-3.5Z" /><path d="M5 14 3 21l7-2" /></svg>
);
export const Ruler = ({ s = 18 }) => (
  <svg {...base(s)}>
    <rect x="2.5" y="8.5" width="19" height="7" rx="1.5" transform="rotate(-8 12 12)" />
    <path d="M7 9.6v2.2M11 9v2.2M15 8.4v2.2M19 7.8V10" />
  </svg>
);
export const Truck = ({ s = 18 }) => (
  <svg {...base(s)}><path d="M2.5 6.5h11v9h-11z" /><path d="M13.5 10h4l3 3v2.5h-7Z" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></svg>
);
export const Layers = ({ s = 18 }) => (
  <svg {...base(s)}><path d="m12 3 8.5 4.5L12 12 3.5 7.5Z" /><path d="m3.5 12 8.5 4.5L20.5 12" /><path d="m3.5 16.5 8.5 4.5 8.5-4.5" /></svg>
);
export const Grid = ({ s = 18 }) => (
  <svg {...base(s)}><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" /></svg>
);
export const Wrench = ({ s = 18 }) => (
  <svg {...base(s)}><path d="M15.5 3.5a5 5 0 0 0-5.9 6.4L3 16.5 7.5 21l6.6-6.6a5 5 0 0 0 6.4-5.9L17 12l-3-.5-.5-3Z" /></svg>
);
export const Building = ({ s = 18 }) => (
  <svg {...base(s)}><path d="M4 21V5.5L13 3v18" /><path d="M13 9h6.5v12" /><path d="M7.5 8h2M7.5 12h2M7.5 16h2M16 13h1M16 17h1" /></svg>
);
export const Steps = ({ s = 18 }) => (
  <svg {...base(s)}><path d="M3 20h4v-4h5v-4h5V8h4" /><path d="M3 20V8" opacity=".35" /></svg>
);
export const Lock = ({ s = 18 }) => (
  <svg {...base(s)}><rect x="4.5" y="10.5" width="15" height="10" rx="2.5" /><path d="M8.5 10.5V7.8a3.5 3.5 0 1 1 7 0v2.7" /></svg>
);
export const Info = ({ s = 16 }) => (
  <svg {...base(s)}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
);
export const Chevron = ({ s = 16 }) => (
  <svg {...base(s)}><path d="m6 9 6 6 6-6" /></svg>
);
export const Facebook = ({ s = 18 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M14 8.5V7c0-.7.3-1 1-1h1.5V3H14c-2.2 0-3.5 1.4-3.5 3.7v1.8H8V12h2.5v9H14v-9h2.3l.4-3.5Z" />
  </svg>
);
export const Instagram = ({ s = 18 }) => (
  <svg {...base(s)}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="3.8" /><circle cx="17" cy="7" r=".9" fill="currentColor" /></svg>
);
export const Google = ({ s = 18 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M21.6 12.2c0-.7-.06-1.4-.18-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3Z" opacity=".95" />
    <path d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 .96-3.4.96-2.6 0-4.8-1.7-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z" opacity=".75" />
    <path d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3.1a10 10 0 0 0 0 9l3.3-2.6Z" opacity=".55" />
    <path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.5l3.3 2.6C7.2 7.6 9.4 5.9 12 5.9Z" />
  </svg>
);

export const ICONS = {
  crew: Crew, frost: Frost, doc: Doc, broom: Broom, shield: Shield,
  ruler: Ruler, truck: Truck, layers: Layers, grid: Grid, wrench: Wrench,
  building: Building, steps: Steps, phone: Phone, clock: Clock, pin: Pin,
  mail: Mail, lock: Lock, facebook: Facebook, instagram: Instagram, google: Google,
};

export function Icon({ name, s = 18 }) {
  const C = ICONS[name];
  return C ? <C s={s} /> : null;
}
