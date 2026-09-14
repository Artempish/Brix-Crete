// ============================================================================
// Generated artwork.
//
// There is no job photography in this repo yet, so every service card and hero
// is drawn rather than photographed. These are deliberately graphic — a
// diagram of the thing rather than a fake photo of it — so the site never
// implies it is showing work it cannot show.
//
// Drop a real photo into a card by setting `photo` on the data entry; the
// component falls back to artwork only when there isn't one.
// ============================================================================

const ID = (n) => `bc-${n}`;

/* Shared defs: concrete gradients, clay gradients, aggregate speckle. */
function Defs({ k }) {
  return (
    <defs>
      <linearGradient id={ID(`con-${k}`)} x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stopColor="#d8d3cc" />
        <stop offset="55%" stopColor="#bdb7ae" />
        <stop offset="100%" stopColor="#a49d94" />
      </linearGradient>
      <linearGradient id={ID(`con2-${k}`)} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#e6e2dc" />
        <stop offset="100%" stopColor="#c6c0b7" />
      </linearGradient>
      <linearGradient id={ID(`clay-${k}`)} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#c9552b" />
        <stop offset="100%" stopColor="#9c3d1f" />
      </linearGradient>
      <linearGradient id={ID(`sky-${k}`)} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2a2724" />
        <stop offset="100%" stopColor="#171412" />
      </linearGradient>
      <linearGradient id={ID(`grass-${k}`)} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5d6b4a" />
        <stop offset="100%" stopColor="#414c33" />
      </linearGradient>
      <pattern id={ID(`agg-${k}`)} width="26" height="26" patternUnits="userSpaceOnUse">
        <circle cx="5" cy="7" r="1.1" fill="#ffffff" opacity=".22" />
        <circle cx="18" cy="4" r=".8" fill="#000000" opacity=".10" />
        <circle cx="22" cy="17" r="1.3" fill="#ffffff" opacity=".16" />
        <circle cx="9" cy="20" r=".9" fill="#000000" opacity=".09" />
        <circle cx="14" cy="12" r=".7" fill="#ffffff" opacity=".18" />
      </pattern>
      <pattern id={ID(`herring-${k}`)} width="48" height="48" patternUnits="userSpaceOnUse">
        <rect width="48" height="48" fill="#a8542f" />
        <g fill="#b96139" stroke="#7d3a1d" strokeWidth="1.4">
          <rect x="1" y="1" width="22" height="10" />
          <rect x="25" y="1" width="10" height="22" />
          <rect x="1" y="13" width="10" height="22" />
          <rect x="13" y="25" width="22" height="10" />
          <rect x="37" y="13" width="10" height="22" />
          <rect x="25" y="37" width="22" height="10" />
        </g>
      </pattern>
      <pattern id={ID(`bond-${k}`)} width="60" height="30" patternUnits="userSpaceOnUse">
        <rect width="60" height="30" fill="#9e4d2a" />
        <g fill="#b25c34" stroke="#76361a" strokeWidth="1.3">
          <rect x="1" y="1" width="28" height="13" />
          <rect x="31" y="1" width="28" height="13" />
          <rect x="-14" y="16" width="28" height="13" />
          <rect x="16" y="16" width="28" height="13" />
          <rect x="46" y="16" width="28" height="13" />
        </g>
      </pattern>
      <pattern id={ID(`ashlar-${k}`)} width="96" height="64" patternUnits="userSpaceOnUse">
        <rect width="96" height="64" fill="#c4bdb3" />
        <g fill="none" stroke="#8f887e" strokeWidth="1.6">
          <rect x="0" y="0" width="56" height="30" />
          <rect x="56" y="0" width="40" height="30" />
          <rect x="0" y="30" width="36" height="34" />
          <rect x="36" y="30" width="60" height="34" />
        </g>
      </pattern>
    </defs>
  );
}

function Frame({ children, k }) {
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">
      <Defs k={k} />
      {children}
    </svg>
  );
}

/* --- Driveway: a slab running up to the garage, saw-cut into bays --- */
export function ArtDriveway() {
  const k = 'dw';
  return (
    <Frame k={k}>
      {/* sky */}
      <linearGradient id={ID(`air-${k}`)} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4a443d" />
        <stop offset="100%" stopColor="#332e29" />
      </linearGradient>
      <rect width="800" height="500" fill={`url(#${ID(`air-${k}`)})`} />

      {/* house + garage, sitting across the top third */}
      <rect x="150" y="70" width="500" height="180" fill="#524a42" />
      <polygon points="120,70 680,70 620,20 180,20" fill="#635a50" />
      {/* garage opening */}
      <rect x="268" y="112" width="264" height="138" rx="3" fill="#2b2622" />
      <rect x="280" y="124" width="240" height="126" fill="#3b3630" />
      <g stroke="#2b2622" strokeWidth="3">
        {[150, 176, 202, 228].map((y) => <line key={y} x1="280" y1={y} x2="520" y2={y} />)}
      </g>
      {/* windows */}
      <rect x="180" y="118" width="62" height="54" fill="#2b2622" />
      <rect x="558" y="118" width="62" height="54" fill="#2b2622" />

      {/* lawn */}
      <rect y="250" width="800" height="250" fill={`url(#${ID(`grass-${k}`)})`} />

      {/* the driveway itself — wide trapezoid filling the lower half */}
      <polygon points="272,250 528,250 790,500 10,500" fill={`url(#${ID(`con2-${k}`)})`} />
      <polygon points="272,250 528,250 790,500 10,500" fill={`url(#${ID(`agg-${k}`)})`} />

      {/* saw-cut control joints */}
      <g stroke="#9a938a" strokeWidth="3" strokeLinecap="round">
        <line x1="255" y1="268" x2="545" y2="268" />
        <line x1="228" y1="320" x2="572" y2="320" />
        <line x1="190" y1="392" x2="610" y2="392" />
        <line x1="145" y1="478" x2="655" y2="478" />
        <line x1="400" y1="250" x2="400" y2="500" />
      </g>

      {/* bright tooled edges */}
      <polyline points="272,250 10,500" fill="none" stroke="#f2ede6" strokeWidth="4" opacity=".65" />
      <polyline points="528,250 790,500" fill="none" stroke="#f2ede6" strokeWidth="4" opacity=".65" />

      {/* apron shadow under the garage lip */}
      <rect x="272" y="250" width="256" height="7" fill="#7d766c" opacity=".7" />
    </Frame>
  );
}

/* --- Patio: a broom-finished rectangle off the house, with furniture --- */
export function ArtPatio() {
  const k = 'pt';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill={`url(#${ID(`sky-${k}`)})`} />
      <rect y="250" width="800" height="250" fill={`url(#${ID(`grass-${k}`)})`} />
      {/* house wall */}
      <rect x="0" y="80" width="800" height="175" fill="#2e2a26" />
      <rect x="0" y="80" width="800" height="175" fill={`url(#${ID(`bond-${k}`)})`} opacity=".22" />
      <rect x="520" y="120" width="120" height="135" fill="#14110f" />
      <rect x="96" y="132" width="150" height="92" fill="#14110f" />
      {/* slab */}
      <polygon points="120,255 700,255 800,470 40,470" fill={`url(#${ID(`con2-${k}`)})`} />
      <polygon points="120,255 700,255 800,470 40,470" fill={`url(#${ID(`agg-${k}`)})`} />
      {/* broom texture */}
      <g stroke="#a7a096" strokeWidth="1.1" opacity=".55">
        {Array.from({ length: 22 }, (_, i) => 262 + i * 9.6).map((y, i) => (
          <line key={y} x1={118 - i * 3.6} y1={y} x2={702 + i * 4.6} y2={y} />
        ))}
      </g>
      {/* joints */}
      <g stroke="#8a837a" strokeWidth="2.6">
        <line x1="410" y1="255" x2="420" y2="470" />
        <line x1="96" y1="330" x2="724" y2="330" />
        <line x1="70" y1="400" x2="762" y2="400" />
      </g>
      {/* table + chairs, drawn simply */}
      <g fill="#241f1b" opacity=".85">
        <ellipse cx="300" cy="352" rx="76" ry="26" />
        <rect x="294" y="352" width="12" height="44" />
        <ellipse cx="300" cy="398" rx="34" ry="11" />
        <rect x="186" y="318" width="42" height="12" rx="5" />
        <rect x="380" y="318" width="42" height="12" rx="5" />
      </g>
    </Frame>
  );
}

/* --- Stamped: ashlar pattern with a clay border --- */
export function ArtStamped() {
  const k = 'st';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill="#8f887e" />
      <rect width="800" height="500" fill={`url(#${ID(`ashlar-${k}`)})`} />
      <rect width="800" height="500" fill={`url(#${ID(`agg-${k}`)})`} opacity=".7" />
      {/* clay soldier border */}
      <rect x="0" y="0" width="800" height="54" fill={`url(#${ID(`bond-${k}`)})`} />
      <rect x="0" y="446" width="800" height="54" fill={`url(#${ID(`bond-${k}`)})`} />
      {/* light rake so it doesn't read flat */}
      <rect width="800" height="500" fill="url(#none)" />
      <linearGradient id={ID(`rake-${k}`)} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity=".16" />
        <stop offset="60%" stopColor="#000000" stopOpacity=".12" />
      </linearGradient>
      <rect width="800" height="500" fill={`url(#${ID(`rake-${k}`)})`} />
    </Frame>
  );
}

/* --- Walkway: a narrow run with tight joints, curving to the door --- */
export function ArtWalkway() {
  const k = 'wk';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill={`url(#${ID(`sky-${k}`)})`} />
      <rect y="210" width="800" height="290" fill={`url(#${ID(`grass-${k}`)})`} />
      <rect x="250" y="40" width="300" height="180" fill="#2e2a26" />
      <rect x="368" y="110" width="64" height="110" fill="#15120f" />
      <polygon points="360,220 440,220 560,500 240,500" fill={`url(#${ID(`con-${k}`)})`} />
      <polygon points="360,220 440,220 560,500 240,500" fill={`url(#${ID(`agg-${k}`)})`} />
      <g stroke="#8b847a" strokeWidth="2.6">
        <line x1="352" y1="240" x2="448" y2="240" />
        <line x1="336" y1="292" x2="464" y2="292" />
        <line x1="314" y1="356" x2="486" y2="356" />
        <line x1="288" y1="428" x2="512" y2="428" />
      </g>
      <polyline points="360,220 240,500" fill="none" stroke="#efeae3" strokeWidth="3" opacity=".5" />
      <polyline points="440,220 560,500" fill="none" stroke="#efeae3" strokeWidth="3" opacity=".5" />
    </Frame>
  );
}

/* --- Steps: a three-riser stoop, drawn in section so the footing shows --- */
export function ArtSteps() {
  const k = 'sp';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill={`url(#${ID(`sky-${k}`)})`} />
      <rect x="0" y="0" width="800" height="230" fill="#2d2925" />
      <rect x="0" y="0" width="800" height="230" fill={`url(#${ID(`bond-${k}`)})`} opacity=".25" />
      <rect x="330" y="60" width="140" height="170" fill="#14110f" />
      {/* soil */}
      <rect y="300" width="800" height="200" fill="#4a3f34" />
      <rect y="300" width="800" height="200" fill={`url(#${ID(`agg-${k}`)})`} opacity=".5" />
      {/* footing below frost line */}
      <rect x="250" y="360" width="300" height="130" fill="#9a938a" />
      <text x="400" y="440" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="19" fill="#3c362f" letterSpacing="2">42&quot; FOOTING</text>
      {/* steps */}
      <g fill={`url(#${ID(`con-${k}`)})`}>
        <rect x="250" y="300" width="300" height="60" />
        <rect x="285" y="252" width="230" height="48" />
        <rect x="320" y="204" width="160" height="48" />
      </g>
      <g fill={`url(#${ID(`agg-${k}`)})`}>
        <rect x="250" y="300" width="300" height="60" />
        <rect x="285" y="252" width="230" height="48" />
        <rect x="320" y="204" width="160" height="48" />
      </g>
      <g stroke="#efeae3" strokeWidth="3" opacity=".5" fill="none">
        <line x1="250" y1="300" x2="550" y2="300" />
        <line x1="285" y1="252" x2="515" y2="252" />
        <line x1="320" y1="204" x2="480" y2="204" />
      </g>
      {/* rebar dowels */}
      <g stroke="#c9552b" strokeWidth="4" opacity=".85">
        <line x1="300" y1="370" x2="300" y2="300" />
        <line x1="400" y1="370" x2="400" y2="300" />
        <line x1="500" y1="370" x2="500" y2="300" />
      </g>
    </Frame>
  );
}

/* --- Ramp: a sloped run with landings, annotated 1:12 --- */
export function ArtRamp() {
  const k = 'rp';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill={`url(#${ID(`sky-${k}`)})`} />
      <rect y="330" width="800" height="170" fill={`url(#${ID(`grass-${k}`)})`} />
      <rect x="520" y="60" width="280" height="270" fill="#2d2925" />
      <rect x="600" y="130" width="90" height="140" fill="#14110f" />
      {/* landing + ramp */}
      <polygon points="520,270 760,270 760,310 520,310" fill={`url(#${ID(`con-${k}`)})`} />
      <polygon points="520,270 520,310 80,392 80,352" fill={`url(#${ID(`con2-${k}`)})`} />
      <polygon points="40,392 80,392 80,352 40,352" fill={`url(#${ID(`con-${k}`)})`} />
      <rect x="40" y="392" width="720" height="14" fill="#7d766c" />
      {/* curb / edge protection */}
      <polygon points="520,262 80,344 80,352 520,270" fill={`url(#${ID(`clay-${k}`)})`} />
      {/* handrail */}
      <g stroke="#d9d4cc" strokeWidth="5" strokeLinecap="round" fill="none">
        <line x1="90" y1="300" x2="520" y2="218" />
        <line x1="120" y1="360" x2="120" y2="296" />
        <line x1="260" y1="333" x2="260" y2="269" />
        <line x1="400" y1="307" x2="400" y2="243" />
        <line x1="520" y1="284" x2="520" y2="220" />
      </g>
      <text x="300" y="450" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="24" fill="#cfc9c1" letterSpacing="4">1 : 12</text>
    </Frame>
  );
}

/* --- Slab: a section cut showing base, poly, rebar, concrete --- */
export function ArtSlab() {
  const k = 'sl';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill="#211e1b" />
      {/* soil */}
      <rect y="380" width="800" height="120" fill="#453a30" />
      {/* compacted base */}
      <rect y="300" width="800" height="80" fill="#6f665b" />
      <g fill="#8a8073" opacity=".8">
        {Array.from({ length: 46 }).map((_, i) => (
          <circle key={i} cx={(i * 37) % 800} cy={310 + ((i * 53) % 60)} r={4 + ((i * 7) % 5)} />
        ))}
      </g>
      {/* vapour barrier */}
      <rect y="292" width="800" height="9" fill="#2f6f8f" opacity=".85" />
      {/* slab */}
      <rect y="180" width="800" height="112" fill={`url(#${ID(`con-${k}`)})`} />
      <rect y="180" width="800" height="112" fill={`url(#${ID(`agg-${k}`)})`} />
      {/* rebar grid mid-slab */}
      <g stroke="#c9552b" strokeWidth="7" opacity=".9">
        <line x1="0" y1="238" x2="800" y2="238" />
      </g>
      <g fill="#c9552b" opacity=".9">
        {Array.from({ length: 11 }).map((_, i) => <circle key={i} cx={40 + i * 74} cy="238" r="9" />)}
      </g>
      {/* chairs */}
      <g stroke="#8a837a" strokeWidth="3" fill="none">
        {Array.from({ length: 6 }).map((_, i) => (
          <path key={i} d={`M${72 + i * 132} 292 v-45 m-14 45 h28`} />
        ))}
      </g>
      {/* control joint */}
      <rect x="396" y="180" width="8" height="40" fill="#211e1b" />
      {/* labels */}
      <g fontFamily="ui-monospace, monospace" fontSize="17" fill="#cfc9c1" letterSpacing="1.5">
        <text x="24" y="150">4,000 PSI · AIR-ENTRAINED</text>
        <text x="24" y="470" fill="#8d8479">COMPACTED CA-6 · 10-MIL POLY · #4 REBAR</text>
      </g>
      <g stroke="#cfc9c1" strokeWidth="1.5" opacity=".5">
        <line x1="24" y1="160" x2="24" y2="176" />
      </g>
    </Frame>
  );
}

/* --- Retaining wall: block coursing with the drainage column exposed --- */
export function ArtWall() {
  const k = 'wl';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill={`url(#${ID(`sky-${k}`)})`} />
      {/* retained soil behind */}
      <polygon points="430,120 800,120 800,500 430,500" fill="#453a30" />
      {/* drainage stone column */}
      <rect x="430" y="120" width="86" height="380" fill="#6f665b" />
      <g fill="#8a8073">
        {Array.from({ length: 42 }).map((_, i) => (
          <circle key={i} cx={440 + ((i * 31) % 70)} cy={132 + ((i * 47) % 360)} r={5 + ((i * 5) % 4)} />
        ))}
      </g>
      {/* filter fabric line */}
      <line x1="516" y1="120" x2="516" y2="500" stroke="#c9c2b8" strokeWidth="3" strokeDasharray="10 7" opacity=".75" />
      {/* drain tile */}
      <circle cx="466" cy="452" r="21" fill="#2b2724" stroke="#9a938a" strokeWidth="4" />
      {/* block wall */}
      <g>
        {Array.from({ length: 8 }).map((_, r) => (
          <g key={r}>
            {Array.from({ length: 6 }).map((_, c) => (
              <rect
                key={c}
                x={160 + c * 92 + (r % 2 ? -46 : 0)}
                y={124 + r * 47}
                width="88"
                height="43"
                rx="3"
                fill={r % 2 ? '#b7b0a6' : '#c3bcb2'}
                stroke="#8d8579"
                strokeWidth="2"
              />
            ))}
          </g>
        ))}
        <rect x="152" y="96" width="290" height="28" rx="3" fill="#d4cec5" stroke="#8d8579" strokeWidth="2" />
      </g>
      {/* grass in front */}
      <rect y="470" width="440" height="30" fill={`url(#${ID(`grass-${k}`)})`} />
    </Frame>
  );
}

/* --- Paver driveway: herringbone field with a soldier border --- */
export function ArtPaverDrive() {
  const k = 'pd';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill="#7d3a1d" />
      <rect x="0" y="0" width="800" height="500" fill={`url(#${ID(`herring-${k}`)})`} />
      <rect x="0" y="0" width="800" height="46" fill={`url(#${ID(`bond-${k}`)})`} />
      <rect x="0" y="454" width="800" height="46" fill={`url(#${ID(`bond-${k}`)})`} />
      <linearGradient id={ID(`sh-${k}`)} x1="0" y1="0" x2=".7" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity=".18" />
        <stop offset="100%" stopColor="#000000" stopOpacity=".22" />
      </linearGradient>
      <rect width="800" height="500" fill={`url(#${ID(`sh-${k}`)})`} />
    </Frame>
  );
}

/* --- Paver patio: running bond field, border, and a curved seat wall --- */
export function ArtPaverPatio() {
  const k = 'pp';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill="#4a4a42" />
      <rect y="150" width="800" height="350" fill={`url(#${ID(`bond-${k}`)})`} />
      {/* border course */}
      <rect y="150" width="800" height="34" fill="#8c4526" />
      <g stroke="#6d3419" strokeWidth="2">
        {Array.from({ length: 24 }).map((_, i) => <line key={i} x1={i * 34} y1="150" x2={i * 34} y2="184" />)}
      </g>
      {/* seat wall */}
      <g>
        {Array.from({ length: 3 }).map((_, r) => (
          <g key={r}>
            {Array.from({ length: 9 }).map((_, c) => (
              <rect key={c} x={40 + c * 84 + (r % 2 ? -42 : 0)} y={64 + r * 30} width="80" height="27" rx="2"
                fill={r % 2 ? '#b4ada2' : '#c1bab0'} stroke="#8b8377" strokeWidth="2" />
            ))}
          </g>
        ))}
        <rect x="24" y="40" width="760" height="24" rx="2" fill="#d2ccc3" stroke="#8b8377" strokeWidth="2" />
      </g>
      {/* fire pit glow */}
      <ellipse cx="400" cy="380" rx="96" ry="34" fill="#2a1a12" />
      <ellipse cx="400" cy="374" rx="62" ry="20" fill="#c9552b" opacity=".85" />
      <ellipse cx="400" cy="372" rx="34" ry="11" fill="#f0a05a" opacity=".9" />
    </Frame>
  );
}

/* --- Paver walkway: a narrow run, bordered both sides --- */
export function ArtPaverWalk() {
  const k = 'pw';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill={`url(#${ID(`grass-${k}`)})`} />
      <polygon points="340,60 460,60 620,500 180,500" fill={`url(#${ID(`herring-${k}`)})`} />
      <polygon points="340,60 356,60 216,500 180,500" fill="#8c4526" />
      <polygon points="444,60 460,60 620,500 584,500" fill="#8c4526" />
      <linearGradient id={ID(`sh2-${k}`)} x1="0" y1="0" x2=".6" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity=".14" />
        <stop offset="100%" stopColor="#000000" stopOpacity=".24" />
      </linearGradient>
      <polygon points="340,60 460,60 620,500 180,500" fill={`url(#${ID(`sh2-${k}`)})`} />
    </Frame>
  );
}

/* --- Repair: a cracked slab, one bay saw-cut out --- */
export function ArtRepair() {
  const k = 'rr';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill="#211e1b" />
      <rect width="800" height="500" fill={`url(#${ID(`con-${k}`)})`} />
      <rect width="800" height="500" fill={`url(#${ID(`agg-${k}`)})`} />
      {/* joints */}
      <g stroke="#8a837a" strokeWidth="3">
        <line x1="0" y1="170" x2="800" y2="170" />
        <line x1="0" y1="340" x2="800" y2="340" />
        <line x1="266" y1="0" x2="266" y2="500" />
        <line x1="533" y1="0" x2="533" y2="500" />
      </g>
      {/* the removed bay */}
      <rect x="266" y="170" width="267" height="170" fill="#4a3f34" />
      <g fill="#6f665b">
        {Array.from({ length: 26 }).map((_, i) => (
          <circle key={i} cx={278 + ((i * 41) % 244)} cy={182 + ((i * 59) % 146)} r={5 + ((i * 3) % 4)} />
        ))}
      </g>
      <rect x="266" y="170" width="267" height="170" fill="none" stroke="#c9552b" strokeWidth="5" strokeDasharray="14 9" />
      {/* the crack we are not replacing */}
      <path d="M0 60 L120 78 L210 52 L266 84" fill="none" stroke="#6f665b" strokeWidth="4" strokeLinecap="round" />
      <path d="M533 420 L620 398 L710 432 L800 410" fill="none" stroke="#6f665b" strokeWidth="4" strokeLinecap="round" />
    </Frame>
  );
}

/* --- Commercial: a striped lot with an accessible stall --- */
export function ArtCommercial() {
  const k = 'cm';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill="#3e3a35" />
      <rect y="120" width="800" height="380" fill={`url(#${ID(`con-${k}`)})`} />
      <rect y="120" width="800" height="380" fill={`url(#${ID(`agg-${k}`)})`} />
      {/* building */}
      <rect y="0" width="800" height="120" fill="#262320" />
      <g fill="#14110f">
        {Array.from({ length: 7 }).map((_, i) => <rect key={i} x={40 + i * 108} y="30" width="76" height="62" />)}
      </g>
      {/* curb */}
      <rect y="120" width="800" height="16" fill="#8e877c" />
      {/* stalls */}
      <g stroke="#f2ede5" strokeWidth="6" opacity=".9">
        {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={60 + i * 96} y1="200" x2={60 + i * 96} y2="380" />)}
        <line x1="20" y1="200" x2="780" y2="200" />
      </g>
      {/* accessible stall */}
      <rect x="156" y="200" width="96" height="180" fill="#2f6f8f" opacity=".55" />
      <g fill="#f2ede5">
        <circle cx="204" cy="262" r="10" />
        <path d="M197 280 h16 l8 26 h-10 l-6-18 h-8 z" />
        <circle cx="204" cy="312" r="18" fill="none" stroke="#f2ede5" strokeWidth="5" />
      </g>
      {/* hatched access aisle */}
      <g stroke="#f2ede5" strokeWidth="4" opacity=".75">
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={i} x1={256} y1={210 + i * 26} x2={340} y2={190 + i * 26} />
        ))}
      </g>
    </Frame>
  );
}

const ART = {
  driveway: ArtDriveway,
  patio: ArtPatio,
  stamped: ArtStamped,
  walkway: ArtWalkway,
  steps: ArtSteps,
  ramp: ArtRamp,
  slab: ArtSlab,
  wall: ArtWall,
  paverDrive: ArtPaverDrive,
  paverPatio: ArtPaverPatio,
  paverWalk: ArtPaverWalk,
  repair: ArtRepair,
  commercial: ArtCommercial,
};

export function Art({ name }) {
  const C = ART[name] || ArtDriveway;
  return <C />;
}
