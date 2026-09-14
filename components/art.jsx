// ============================================================================
// Generated artwork.
//
// There is no job photography in this repo yet, so every service card, hero and
// gallery tile is drawn rather than photographed. These are deliberately
// illustrative — the site never implies it is showing work it cannot show, and
// never borrows a photograph of somebody else's concrete.
//
// Material realism comes from four things, applied consistently:
//   Grain()    fractal-noise texture, overlay-blended — real aggregate mottle
//   Rake()     directional light across the surface, warm key / cool shade
//   Vignette() corner falloff so the frame reads as a lit scene
//   brickRow() per-unit colour variation plus a lit top edge and shadowed base
//
// Drop a real photo in by setting `photo` on the data entry; the component
// falls back to artwork only when there isn't one.
// ============================================================================

const ID = (n) => `bc-${n}`;

/* Deterministic pseudo-random so every render is identical (no hydration drift). */
const rnd = (i, seed = 1) => {
  const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

/* ---------------------------------------------------------------- surfaces --- */

function Defs({ k, children }) {
  return (
    <defs>
      {/* concrete: warm grey, lit from upper left */}
      <linearGradient id={ID(`con-${k}`)} x1="0" y1="0" x2=".35" y2="1">
        <stop offset="0%" stopColor="#e3ded6" />
        <stop offset="48%" stopColor="#cac3b9" />
        <stop offset="100%" stopColor="#a9a298" />
      </linearGradient>
      <linearGradient id={ID(`con2-${k}`)} x1="0" y1="0" x2=".2" y2="1">
        <stop offset="0%" stopColor="#eae5de" />
        <stop offset="60%" stopColor="#d3ccc2" />
        <stop offset="100%" stopColor="#b5ada2" />
      </linearGradient>
      <linearGradient id={ID(`clay-${k}`)} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#c9552b" />
        <stop offset="100%" stopColor="#8e3618" />
      </linearGradient>
      <linearGradient id={ID(`air-${k}`)} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#57504a" />
        <stop offset="100%" stopColor="#332e2a" />
      </linearGradient>
      <linearGradient id={ID(`grass-${k}`)} x1="0" y1="0" x2=".3" y2="1">
        <stop offset="0%" stopColor="#66714c" />
        <stop offset="100%" stopColor="#3d4730" />
      </linearGradient>
      <linearGradient id={ID(`soil-${k}`)} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#584a3c" />
        <stop offset="100%" stopColor="#3b3128" />
      </linearGradient>

      {/* directional light across the surface */}
      <linearGradient id={ID(`rake-${k}`)} x1="0" y1="0" x2=".85" y2="1">
        <stop offset="0%" stopColor="#fff6e8" stopOpacity=".30" />
        <stop offset="45%" stopColor="#ffffff" stopOpacity=".04" />
        <stop offset="100%" stopColor="#17120e" stopOpacity=".34" />
      </linearGradient>

      {/* corner falloff */}
      <radialGradient id={ID(`vig-${k}`)} cx="42%" cy="34%" r="82%">
        <stop offset="55%" stopColor="#000000" stopOpacity="0" />
        <stop offset="100%" stopColor="#000000" stopOpacity=".38" />
      </radialGradient>

      {/* soft contact shadow */}
      <filter id={ID(`soft-${k}`)} x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="9" />
      </filter>
      <filter id={ID(`soft2-${k}`)} x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="3.5" />
      </filter>

      {/* aggregate grain — this is what stops concrete reading as flat fill */}
      <filter id={ID(`grain-${k}`)} x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.86" numOctaves="3" seed="7" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncA type="linear" slope=".62" intercept="-.06" />
        </feComponentTransfer>
      </filter>

      {/* coarser mottle for soil and stone */}
      <filter id={ID(`coarse-${k}`)} x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.22" numOctaves="4" seed="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncA type="linear" slope=".5" intercept="-.08" />
        </feComponentTransfer>
      </filter>

      {children}
    </defs>
  );
}

const Grain = ({ k, o = 0.5, coarse = false }) => (
  <rect
    width="800" height="500"
    filter={`url(#${ID(`${coarse ? 'coarse' : 'grain'}-${k}`)})`}
    opacity={o}
    style={{ mixBlendMode: 'overlay' }}
  />
);

const Rake = ({ k }) => <rect width="800" height="500" fill={`url(#${ID(`rake-${k}`)})`} />;
const Vignette = ({ k }) => <rect width="800" height="500" fill={`url(#${ID(`vig-${k}`)})`} />;

function Frame({ children, k, extraDefs }) {
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">
      <Defs k={k}>{extraDefs}</Defs>
      {children}
    </svg>
  );
}

/* --------------------------------------------------------------- masonry --- */

/**
 * A run of brick/paver units with per-unit colour variation, a lit top edge and
 * a shadowed base. `hue` picks the family: clay brick or concrete block.
 */
function brickRow({ y, h, w, offset, count, seed, family = 'clay', gap = 2.4 }) {
  const out = [];
  for (let c = 0; c < count; c++) {
    const i = c + seed * 31;
    const v = rnd(i, seed);
    const x = offset + c * (w + gap);
    let fill, top, base;
    if (family === 'clay') {
      const l = 40 + v * 16;            // 40–56% lightness
      const hu = 12 + rnd(i, seed + 5) * 10;
      fill = `hsl(${hu} ${52 + v * 12}% ${l}%)`;
      top = `hsl(${hu} 50% ${l + 11}%)`;
      base = `hsl(${hu} 45% ${l - 13}%)`;
    } else {
      const l = 68 + v * 12;
      fill = `hsl(34 ${6 + v * 5}% ${l}%)`;
      top = `hsl(34 8% ${l + 9}%)`;
      base = `hsl(34 7% ${l - 14}%)`;
    }
    out.push(
      <g key={`${seed}-${c}`}>
        <rect x={x} y={y} width={w} height={h} rx="1.5" fill={fill} />
        <rect x={x} y={y} width={w} height="1.8" fill={top} opacity=".9" />
        <rect x={x} y={y + h - 2.2} width={w} height="2.2" fill={base} opacity=".85" />
      </g>
    );
  }
  return out;
}

function BrickField({ x = 0, y = 0, w = 800, h = 500, unitW = 58, unitH = 26, family = 'clay' }) {
  const rows = Math.ceil(h / (unitH + 2.4)) + 1;
  const cols = Math.ceil(w / (unitW + 2.4)) + 2;
  return (
    <g clipPath={`url(#${ID('none')})`}>
      {Array.from({ length: rows }).map((_, r) =>
        brickRow({
          y: y + r * (unitH + 2.4),
          h: unitH,
          w: unitW,
          offset: x - (r % 2 ? (unitW + 2.4) / 2 : 0) - unitW,
          count: cols,
          seed: r + 1,
          family,
        })
      )}
    </g>
  );
}

/* ================================================================ scenes === */

/* --- Driveway: slab running up to the garage, saw-cut into bays --- */
export function ArtDriveway() {
  const k = 'dw';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill={`url(#${ID(`air-${k}`)})`} />

      {/* house */}
      <rect x="150" y="62" width="500" height="192" fill="#4e463e" />
      <polygon points="112,62 688,62 622,14 178,14" fill="#5d544a" />
      <rect x="150" y="62" width="500" height="192" fill="#000" opacity=".12" />
      {/* garage opening, recessed */}
      <rect x="266" y="104" width="268" height="150" rx="3" fill="#221e1a" />
      <rect x="278" y="116" width="244" height="138" fill="#39332d" />
      <g stroke="#221e1a" strokeWidth="3.2">
        {[146, 174, 202, 230].map((y) => <line key={y} x1="278" y1={y} x2="522" y2={y} />)}
      </g>
      <rect x="278" y="116" width="244" height="138" fill={`url(#${ID(`rake-${k}`)})`} opacity=".5" />
      {/* windows */}
      {[178, 560].map((x) => (
        <g key={x}>
          <rect x={x} y="110" width="64" height="56" rx="2" fill="#221e1a" />
          <rect x={x + 4} y="114" width="56" height="48" fill="#3a4a52" opacity=".55" />
        </g>
      ))}

      {/* lawn */}
      <rect y="250" width="800" height="250" fill={`url(#${ID(`grass-${k}`)})`} />

      {/* slab */}
      <polygon points="272,250 528,250 792,500 8,500" fill={`url(#${ID(`con2-${k}`)})`} />

      {/* saw-cut control joints, cut shadow + lit lower lip */}
      <g strokeLinecap="round">
        <g stroke="#8f887d" strokeWidth="3.4">
          <line x1="254" y1="268" x2="546" y2="268" />
          <line x1="226" y1="322" x2="574" y2="322" />
          <line x1="187" y1="396" x2="613" y2="396" />
          <line x1="141" y1="484" x2="659" y2="484" />
          <line x1="400" y1="250" x2="400" y2="500" />
        </g>
        <g stroke="#f4efe7" strokeWidth="1.5" opacity=".5">
          <line x1="254" y1="271" x2="546" y2="271" />
          <line x1="226" y1="325" x2="574" y2="325" />
          <line x1="187" y1="399" x2="613" y2="399" />
        </g>
      </g>

      {/* tooled edges */}
      <polyline points="272,250 8,500" fill="none" stroke="#f6f1ea" strokeWidth="4" opacity=".6" />
      <polyline points="528,250 792,500" fill="none" stroke="#f6f1ea" strokeWidth="4" opacity=".6" />

      {/* contact shadow where the slab meets the garage */}
      <rect x="266" y="248" width="268" height="12" fill="#2a251f" opacity=".5" filter={`url(#${ID(`soft2-${k}`)})`} />

      <Grain k={k} o={0.46} />
      <Rake k={k} />
      <Vignette k={k} />
    </Frame>
  );
}

/* --- Patio: broom-finished slab off the house, furniture casting shadow --- */
export function ArtPatio() {
  const k = 'pt';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill={`url(#${ID(`air-${k}`)})`} />
      <rect y="236" width="800" height="264" fill={`url(#${ID(`grass-${k}`)})`} />

      {/* house wall in brick */}
      <svg x="0" y="0" width="800" height="240" viewBox="0 0 800 240" preserveAspectRatio="none">
        <BrickField w={800} h={240} unitW={64} unitH={28} />
        <rect width="800" height="240" fill="#000" opacity=".3" />
      </svg>
      {/* door + window */}
      <rect x="524" y="96" width="126" height="140" rx="2" fill="#191512" />
      <rect x="530" y="102" width="114" height="128" fill="#3c4a50" opacity=".5" />
      <rect x="104" y="112" width="154" height="94" rx="2" fill="#191512" />
      <rect x="110" y="118" width="142" height="82" fill="#3c4a50" opacity=".45" />

      {/* slab */}
      <polygon points="118,236 698,236 794,468 30,468" fill={`url(#${ID(`con-${k}`)})`} />

      {/* broom finish — fine arcs following the screed direction */}
      <g stroke="#9c958a" strokeWidth="1.15" opacity=".45">
        {Array.from({ length: 20 }, (_, i) => 246 + i * 11).map((y, i) => (
          <line key={y} x1={116 - i * 4.4} y1={y} x2={700 + i * 4.9} y2={y} />
        ))}
      </g>

      {/* control joints */}
      <g stroke="#877f75" strokeWidth="3">
        <line x1="408" y1="236" x2="418" y2="468" />
        <line x1="92" y1="312" x2="726" y2="312" />
        <line x1="62" y1="388" x2="758" y2="388" />
      </g>

      {/* expansion joint against the foundation */}
      <rect x="118" y="234" width="580" height="6" fill="#6f675d" opacity=".8" />

      {/* table and chairs with a soft cast shadow */}
      <ellipse cx="312" cy="376" rx="104" ry="30" fill="#211c17" opacity=".4" filter={`url(#${ID(`soft-${k}`)})`} />
      <g>
        <rect x="300" y="336" width="13" height="44" fill="#2d2721" />
        <ellipse cx="306" cy="334" rx="82" ry="26" fill="#3a332b" />
        <ellipse cx="306" cy="330" rx="82" ry="26" fill="#4a4239" />
        <ellipse cx="306" cy="330" rx="62" ry="18" fill="#554c41" opacity=".6" />
      </g>
      {[[196, 306], [396, 306]].map(([x, y]) => (
        <g key={x}>
          <rect x={x} y={y} width="46" height="13" rx="6" fill="#3a332b" />
          <rect x={x + 3} y={y - 28} width="40" height="30" rx="5" fill="#332d26" />
        </g>
      ))}

      <Grain k={k} o={0.44} />
      <Rake k={k} />
      <Vignette k={k} />
    </Frame>
  );
}

/* --- Stamped: ashlar pattern, integral colour, accent release in the joints --- */
export function ArtStamped() {
  const k = 'st';
  // irregular ashlar coursing
  const stones = [];
  let id = 0;
  const rows = [
    [0, 74, [0, 188, 330, 500, 640, 800]],
    [74, 68, [-40, 120, 250, 430, 570, 720, 840]],
    [142, 80, [0, 160, 300, 470, 610, 800]],
    [222, 66, [-60, 90, 240, 400, 560, 700, 830]],
    [288, 78, [0, 180, 320, 480, 650, 800]],
    [366, 72, [-30, 130, 280, 450, 600, 760, 860]],
    [438, 76, [0, 170, 310, 490, 640, 800]],
  ];
  for (const [y, h, xs] of rows) {
    for (let i = 0; i < xs.length - 1; i++) {
      const v = rnd(id, 2);
      const l = 62 + v * 14;
      stones.push(
        <g key={id}>
          <rect x={xs[i] + 3} y={y + 3} width={xs[i + 1] - xs[i] - 6} height={h - 6} rx="3"
            fill={`hsl(${26 + v * 8} ${9 + v * 6}% ${l}%)`} />
          <rect x={xs[i] + 3} y={y + 3} width={xs[i + 1] - xs[i] - 6} height="2.4"
            fill={`hsl(30 10% ${l + 13}%)`} opacity=".85" />
          <rect x={xs[i] + 3} y={y + h - 5.4} width={xs[i + 1] - xs[i] - 6} height="2.4"
            fill={`hsl(22 12% ${l - 18}%)`} opacity=".7" />
        </g>
      );
      id++;
    }
  }
  return (
    <Frame k={k}>
      {/* the release colour sits in the joints */}
      <rect width="800" height="500" fill="#6b5b4c" />
      {stones}
      <Grain k={k} o={0.55} />
      <Rake k={k} />
      <Vignette k={k} />
    </Frame>
  );
}

/* --- Walkway: narrow run with tight joints, running to the door --- */
export function ArtWalkway() {
  const k = 'wk';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill={`url(#${ID(`air-${k}`)})`} />
      <rect y="196" width="800" height="304" fill={`url(#${ID(`grass-${k}`)})`} />

      <rect x="236" y="26" width="328" height="172" fill="#4e463e" />
      <polygon points="206,26 594,26 552,0 248,0" fill="#5d544a" />
      <rect x="366" y="88" width="68" height="110" rx="2" fill="#1b1714" />
      <rect x="371" y="93" width="58" height="100" fill="#3c4a50" opacity=".45" />
      {/* stoop */}
      <rect x="342" y="186" width="116" height="16" fill="#c2bbb1" />
      <rect x="342" y="186" width="116" height="3" fill="#efe9e1" opacity=".7" />

      {/* walk */}
      <polygon points="356,202 444,202 568,500 232,500" fill={`url(#${ID(`con-${k}`)})`} />
      {/* tight joint spacing — 4 to 5 ft on a narrow run */}
      <g stroke="#867e74" strokeWidth="3">
        <line x1="349" y1="226" x2="451" y2="226" />
        <line x1="338" y1="264" x2="462" y2="264" />
        <line x1="324" y1="312" x2="476" y2="312" />
        <line x1="308" y1="368" x2="492" y2="368" />
        <line x1="290" y1="430" x2="510" y2="430" />
      </g>
      <g stroke="#f3eee6" strokeWidth="1.3" opacity=".45">
        <line x1="349" y1="229" x2="451" y2="229" />
        <line x1="338" y1="267" x2="462" y2="267" />
        <line x1="324" y1="315" x2="476" y2="315" />
      </g>
      <polyline points="356,202 232,500" fill="none" stroke="#f6f1ea" strokeWidth="3.6" opacity=".6" />
      <polyline points="444,202 568,500" fill="none" stroke="#f6f1ea" strokeWidth="3.6" opacity=".6" />

      <Grain k={k} o={0.44} />
      <Rake k={k} />
      <Vignette k={k} />
    </Frame>
  );
}

/* --- Steps: three-riser stoop in section, footing below frost line --- */
export function ArtSteps() {
  const k = 'sp';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill={`url(#${ID(`air-${k}`)})`} />
      {/* brick house wall */}
      <svg x="0" y="0" width="800" height="240" viewBox="0 0 800 240" preserveAspectRatio="none">
        <BrickField w={800} h={240} unitW={62} unitH={27} />
        <rect width="800" height="240" fill="#000" opacity=".34" />
      </svg>
      <rect x="330" y="46" width="142" height="194" rx="2" fill="#1b1714" />
      <rect x="336" y="52" width="130" height="182" fill="#3c4a50" opacity=".4" />

      {/* ground line + soil */}
      <rect y="298" width="800" height="202" fill={`url(#${ID(`soil-${k}`)})`} />
      <rect y="298" width="800" height="202" filter={`url(#${ID(`coarse-${k}`)})`} opacity=".5" style={{ mixBlendMode: 'overlay' }} />

      {/* footing */}
      <rect x="244" y="356" width="312" height="134" rx="2" fill="#9d968c" />
      <rect x="244" y="356" width="312" height="3" fill="#d6d0c7" opacity=".7" />
      <text x="400" y="438" textAnchor="middle" fontFamily="ui-monospace, monospace"
        fontSize="20" fill="#4a443c" letterSpacing="2.5" fontWeight="600">42&quot; FOOTING</text>

      {/* dowels tying footing into the steps */}
      <g stroke="#c9552b" strokeWidth="5" strokeLinecap="round">
        <line x1="300" y1="372" x2="300" y2="300" />
        <line x1="400" y1="372" x2="400" y2="286" />
        <line x1="500" y1="372" x2="500" y2="300" />
      </g>

      {/* the flight */}
      {[[244, 298, 312, 58], [280, 246, 240, 52], [316, 196, 168, 50]].map(([x, y, w, h], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx="2" fill={`url(#${ID(`con-${k}`)})`} />
          <rect x={x} y={y} width={w} height="3.4" fill="#f4efe7" opacity=".65" />
          <rect x={x} y={y + h - 3} width={w} height="3" fill="#6f675d" opacity=".5" />
        </g>
      ))}

      <Grain k={k} o={0.4} />
      <Rake k={k} />
      <Vignette k={k} />
    </Frame>
  );
}

/* --- Ramp: sloped run with landing, handrail, 1:12 called out --- */
export function ArtRamp() {
  const k = 'rp';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill={`url(#${ID(`air-${k}`)})`} />
      <rect y="318" width="800" height="182" fill={`url(#${ID(`grass-${k}`)})`} />

      <rect x="508" y="42" width="292" height="286" fill="#4e463e" />
      <rect x="592" y="112" width="96" height="152" rx="2" fill="#1b1714" />
      <rect x="597" y="117" width="86" height="142" fill="#3c4a50" opacity=".45" />

      {/* cast shadow under the ramp */}
      <polygon points="516,316 70,400 70,418 516,334" fill="#1c1813" opacity=".45" filter={`url(#${ID(`soft-${k}`)})`} />

      {/* landing */}
      <polygon points="508,268 772,268 772,312 508,312" fill={`url(#${ID(`con-${k}`)})`} />
      <rect x="508" y="266" width="264" height="3.4" fill="#f4efe7" opacity=".6" />
      {/* run */}
      <polygon points="508,268 508,312 68,394 68,350" fill={`url(#${ID(`con2-${k}`)})`} />
      {/* transverse broom, across the direction of travel */}
      <g stroke="#8e877c" strokeWidth="1.5" opacity=".5">
        {Array.from({ length: 17 }).map((_, i) => {
          const t = i / 16;
          const x = 508 - t * 440;
          const y1 = 268 + t * 82;
          return <line key={i} x1={x} y1={y1} x2={x} y2={y1 + 44} />;
        })}
      </g>
      {/* bottom landing */}
      <polygon points="28,350 68,350 68,394 28,394" fill={`url(#${ID(`con-${k}`)})`} />
      {/* curb / edge protection */}
      <polygon points="508,260 68,342 68,352 508,270" fill={`url(#${ID(`clay-${k}`)})`} />

      {/* handrail */}
      <g stroke="#ddd7ce" strokeWidth="5.5" strokeLinecap="round" fill="none">
        <line x1="78" y1="296" x2="508" y2="214" />
        <line x1="110" y1="356" x2="110" y2="292" />
        <line x1="252" y1="329" x2="252" y2="265" />
        <line x1="394" y1="302" x2="394" y2="238" />
        <line x1="508" y1="280" x2="508" y2="216" />
      </g>

      <text x="286" y="462" textAnchor="middle" fontFamily="ui-monospace, monospace"
        fontSize="26" fill="#e4ded5" letterSpacing="5" fontWeight="600" opacity=".92">1 : 12</text>

      <Grain k={k} o={0.38} />
      <Rake k={k} />
      <Vignette k={k} />
    </Frame>
  );
}

/* --- Slab: a section cut. Base, barrier, steel, concrete, joint. --- */
export function ArtSlab() {
  const k = 'sl';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill="#1e1b18" />

      {/* sub-grade */}
      <rect y="386" width="800" height="114" fill={`url(#${ID(`soil-${k}`)})`} />
      {/* compacted stone base */}
      <rect y="298" width="800" height="88" fill="#726859" />
      <g>
        {Array.from({ length: 62 }).map((_, i) => {
          const v = rnd(i, 4);
          return (
            <circle key={i}
              cx={(i * 41 + v * 22) % 800}
              cy={308 + ((i * 57) % 68)}
              r={3.5 + v * 5}
              fill={`hsl(36 ${8 + v * 8}% ${44 + v * 22}%)`} />
          );
        })}
      </g>
      {/* vapour barrier */}
      <rect y="290" width="800" height="9" fill="#3d7f9c" opacity=".9" />
      <rect y="290" width="800" height="3" fill="#8fc7dd" opacity=".7" />

      {/* slab */}
      <rect y="176" width="800" height="114" fill={`url(#${ID(`con-${k}`)})`} />
      <rect y="176" width="800" height="4" fill="#f6f1ea" opacity=".6" />

      {/* rebar in the middle third, on chairs */}
      <g stroke="#8d8579" strokeWidth="3.4" fill="none">
        {Array.from({ length: 6 }).map((_, i) => (
          <path key={i} d={`M${70 + i * 132} 290 v-48 m-15 48 h30`} />
        ))}
      </g>
      <rect y="234" width="800" height="8" fill="#b6552b" />
      <rect y="234" width="800" height="2.6" fill="#e0794c" opacity=".85" />
      <g>
        {Array.from({ length: 11 }).map((_, i) => (
          <g key={i}>
            <circle cx={40 + i * 74} cy="238" r="10" fill="#b6552b" />
            <circle cx={38 + i * 74} cy="236" r="4" fill="#dd8355" opacity=".8" />
          </g>
        ))}
      </g>

      {/* saw-cut control joint */}
      <rect x="396" y="176" width="8" height="42" fill="#1e1b18" />
      <rect x="392" y="176" width="4" height="42" fill="#7d766b" opacity=".6" />

      <g fontFamily="ui-monospace, monospace" fontSize="17" fill="#ded8cf" letterSpacing="1.6">
        <text x="24" y="146">4,000 PSI · AIR-ENTRAINED</text>
        <text x="24" y="468" fill="#948b7e">COMPACTED CA-6 · 10-MIL POLY · #4 REBAR ON CHAIRS</text>
      </g>
      <line x1="24" y1="156" x2="24" y2="174" stroke="#ded8cf" strokeWidth="1.5" opacity=".55" />

      <Grain k={k} o={0.34} />
      <Vignette k={k} />
    </Frame>
  );
}

/* --- Retaining wall: block coursing, drainage column exposed --- */
export function ArtWall() {
  const k = 'wl';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill={`url(#${ID(`air-${k}`)})`} />
      {/* retained soil */}
      <rect x="430" y="104" width="370" height="396" fill={`url(#${ID(`soil-${k}`)})`} />
      {/* drainage stone column */}
      <rect x="430" y="104" width="88" height="396" fill="#6c6357" />
      <g>
        {Array.from({ length: 52 }).map((_, i) => {
          const v = rnd(i, 6);
          return (
            <circle key={i}
              cx={438 + ((i * 29 + v * 18) % 74)}
              cy={116 + ((i * 47) % 374)}
              r={4 + v * 5}
              fill={`hsl(34 ${7 + v * 7}% ${46 + v * 24}%)`} />
          );
        })}
      </g>
      {/* filter fabric */}
      <line x1="518" y1="104" x2="518" y2="500" stroke="#d6cfc5" strokeWidth="3" strokeDasharray="11 8" opacity=".8" />
      {/* drain tile, daylighted */}
      <circle cx="466" cy="452" r="22" fill="#241f1b" stroke="#a49c90" strokeWidth="4.5" />
      <circle cx="466" cy="452" r="10" fill="#151210" />

      {/* wall */}
      <g>
        {Array.from({ length: 8 }).map((_, r) =>
          brickRow({
            y: 118 + r * 47,
            h: 43,
            w: 88,
            offset: 152 - (r % 2 ? 46 : 0),
            count: 5,
            seed: r + 2,
            family: 'block',
            gap: 3,
          })
        )}
        {/* cap course */}
        <rect x="144" y="86" width="300" height="30" rx="2.5" fill="#d6d0c6" />
        <rect x="144" y="86" width="300" height="3.4" fill="#f5f1ea" opacity=".85" />
        <rect x="144" y="112" width="300" height="4" fill="#8b8377" opacity=".7" />
      </g>
      {/* shadow the wall throws on the lawn */}
      <rect x="140" y="464" width="310" height="20" fill="#191510" opacity=".45" filter={`url(#${ID(`soft-${k}`)})`} />
      <rect y="470" width="440" height="30" fill={`url(#${ID(`grass-${k}`)})`} />

      <Grain k={k} o={0.4} />
      <Rake k={k} />
      <Vignette k={k} />
    </Frame>
  );
}

/* --- Paver driveway: 45° herringbone field, soldier border --- */
export function ArtPaverDrive() {
  const k = 'pd';
  const units = [];
  let i = 0;
  // interlocking herringbone: alternating horizontal/vertical pairs on a grid
  for (let row = -1; row < 12; row++) {
    for (let col = -1; col < 12; col++) {
      const x = col * 72 + (row % 2 ? 36 : 0);
      const y = row * 36;
      const v = rnd(i, 8);
      const l = 38 + v * 15;
      const hu = 11 + rnd(i, 3) * 11;
      const fill = `hsl(${hu} ${50 + v * 14}% ${l}%)`;
      const top = `hsl(${hu} 48% ${l + 12}%)`;
      const base = `hsl(${hu} 44% ${l - 14}%)`;
      units.push(
        <g key={`h${i}`}>
          <rect x={x + 1.6} y={y + 1.6} width={66} height={30} rx="1.6" fill={fill} />
          <rect x={x + 1.6} y={y + 1.6} width={66} height="2" fill={top} opacity=".9" />
          <rect x={x + 1.6} y={y + 27.6} width={66} height="2.4" fill={base} opacity=".8" />
        </g>
      );
      i++;
      const v2 = rnd(i, 9);
      const l2 = 38 + v2 * 15;
      const hu2 = 11 + rnd(i, 4) * 11;
      units.push(
        <g key={`v${i}`}>
          <rect x={x + 37.6} y={y - 32.4} width={30} height={66} rx="1.6" fill={`hsl(${hu2} ${50 + v2 * 14}% ${l2}%)`} />
          <rect x={x + 37.6} y={y - 32.4} width={30} height="2" fill={`hsl(${hu2} 48% ${l2 + 12}%)`} opacity=".9" />
          <rect x={x + 37.6} y={y + 31.2} width={30} height="2.4" fill={`hsl(${hu2} 44% ${l2 - 14}%)`} opacity=".8" />
        </g>
      );
      i++;
    }
  }
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill="#6d3118" />
      <g transform="rotate(-12 400 250)">{units}</g>
      {/* soldier border top and bottom */}
      <rect y="0" width="800" height="48" fill="#5f2b14" />
      <g>{brickRow({ y: 4, h: 40, w: 24, offset: -10, count: 34, seed: 11, gap: 2.6 })}</g>
      <rect y="452" width="800" height="48" fill="#5f2b14" />
      <g>{brickRow({ y: 456, h: 40, w: 24, offset: -10, count: 34, seed: 12, gap: 2.6 })}</g>

      <Grain k={k} o={0.42} />
      <Rake k={k} />
      <Vignette k={k} />
    </Frame>
  );
}

/* --- Paver patio: running bond field, seat wall, fire pit --- */
export function ArtPaverPatio() {
  const k = 'pp';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill="#4a4139" />
      {/* field */}
      <g>
        {Array.from({ length: 10 }).map((_, r) =>
          brickRow({
            y: 168 + r * 36,
            h: 32,
            w: 76,
            offset: -40 - (r % 2 ? 38 : 0),
            count: 13,
            seed: r + 20,
            gap: 3,
          })
        )}
      </g>
      {/* soldier border against the seat wall */}
      <rect y="150" width="800" height="26" fill="#6d3118" />
      <g>{brickRow({ y: 152, h: 22, w: 26, offset: -8, count: 32, seed: 30, gap: 2.4 })}</g>

      {/* seat wall */}
      <g>
        {Array.from({ length: 3 }).map((_, r) =>
          brickRow({
            y: 62 + r * 30,
            h: 27,
            w: 82,
            offset: 24 - (r % 2 ? 41 : 0),
            count: 11,
            seed: r + 40,
            family: 'block',
            gap: 3,
          })
        )}
        <rect x="16" y="36" width="768" height="26" rx="2.5" fill="#cec8be" />
        <rect x="16" y="36" width="768" height="3.4" fill="#f4f0e9" opacity=".85" />
        <rect x="16" y="58" width="768" height="4" fill="#877f73" opacity=".65" />
      </g>
      {/* shadow the wall casts onto the patio */}
      <rect x="16" y="150" width="768" height="22" fill="#1a1510" opacity=".4" filter={`url(#${ID(`soft-${k}`)})`} />

      {/* fire pit */}
      <ellipse cx="400" cy="392" rx="128" ry="46" fill="#1d1712" opacity=".5" filter={`url(#${ID(`soft-${k}`)})`} />
      <ellipse cx="400" cy="380" rx="104" ry="37" fill="#4c443b" />
      <ellipse cx="400" cy="374" rx="104" ry="37" fill="#6a6157" />
      <ellipse cx="400" cy="372" rx="78" ry="26" fill="#241a13" />
      <ellipse cx="400" cy="372" rx="58" ry="18" fill="#b8481f" />
      <ellipse cx="400" cy="370" rx="36" ry="11" fill="#e8873f" />
      <ellipse cx="400" cy="369" rx="18" ry="6" fill="#f8cf8e" opacity=".92" />
      {/* firelight spilling onto the pavers */}
      <ellipse cx="400" cy="382" rx="196" ry="74" fill="#e8873f" opacity=".13" filter={`url(#${ID(`soft-${k}`)})`} />

      <Grain k={k} o={0.4} />
      <Rake k={k} />
      <Vignette k={k} />
    </Frame>
  );
}

/* --- Paver walkway: narrow run, bordered both sides --- */
export function ArtPaverWalk() {
  const k = 'pw';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill={`url(#${ID(`grass-${k}`)})`} />
      <defs>
        <clipPath id={ID(`walkclip-${k}`)}>
          <polygon points="338,52 462,52 628,500 172,500" />
        </clipPath>
      </defs>
      {/* shadow along the walk edge */}
      <polygon points="338,52 462,52 628,500 172,500" fill="#16120d" opacity=".4" filter={`url(#${ID(`soft-${k}`)})`} />
      <g clipPath={`url(#${ID(`walkclip-${k}`)})`}>
        <rect width="800" height="500" fill="#6d3118" />
        {Array.from({ length: 15 }).map((_, r) =>
          brickRow({
            y: r * 34,
            h: 30,
            w: 62,
            offset: 140 - (r % 2 ? 31 : 0),
            count: 9,
            seed: r + 50,
            gap: 2.8,
          })
        )}
      </g>
      {/* soldier course borders, both sides, full length */}
      <polygon points="338,52 358,52 216,500 172,500" fill="#7d3a1d" />
      <polygon points="442,52 462,52 628,500 584,500" fill="#7d3a1d" />
      <polyline points="338,52 172,500" fill="none" stroke="#a75a33" strokeWidth="2.4" opacity=".7" />
      <polyline points="462,52 628,500" fill="none" stroke="#a75a33" strokeWidth="2.4" opacity=".7" />

      <Grain k={k} o={0.42} />
      <Rake k={k} />
      <Vignette k={k} />
    </Frame>
  );
}

/* --- Repair: a cracked slab with one bay saw-cut out --- */
export function ArtRepair() {
  const k = 'rr';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill={`url(#${ID(`con-${k}`)})`} />
      {/* joints */}
      <g stroke="#8a8277" strokeWidth="3.4">
        <line x1="0" y1="170" x2="800" y2="170" />
        <line x1="0" y1="340" x2="800" y2="340" />
        <line x1="266" y1="0" x2="266" y2="500" />
        <line x1="533" y1="0" x2="533" y2="500" />
      </g>
      {/* the failed bay, removed down to base */}
      <rect x="266" y="170" width="267" height="170" fill={`url(#${ID(`soil-${k}`)})`} />
      <g>
        {Array.from({ length: 34 }).map((_, i) => {
          const v = rnd(i, 12);
          return (
            <circle key={i}
              cx={276 + ((i * 37 + v * 14) % 248)}
              cy={180 + ((i * 53) % 152)}
              r={4 + v * 5}
              fill={`hsl(34 ${8 + v * 7}% ${42 + v * 22}%)`} />
          );
        })}
      </g>
      {/* cut edge shadow */}
      <rect x="266" y="170" width="267" height="170" fill="none" stroke="#1d1813" strokeWidth="7" opacity=".35" />
      <rect x="266" y="170" width="267" height="170" fill="none" stroke="#c9552b" strokeWidth="4" strokeDasharray="15 10" />

      {/* the cracks we are NOT replacing — cosmetic, inside their bays */}
      <g fill="none" stroke="#9a9288" strokeWidth="3.4" strokeLinecap="round">
        <path d="M0 62 L118 80 L208 54 L266 86" />
        <path d="M533 424 L622 400 L712 434 L800 412" />
      </g>
      <g fill="none" stroke="#f0ebe3" strokeWidth="1.2" opacity=".5">
        <path d="M0 65 L118 83 L208 57 L266 89" />
        <path d="M533 427 L622 403 L712 437 L800 415" />
      </g>

      <Grain k={k} o={0.5} />
      <Rake k={k} />
      <Vignette k={k} />
    </Frame>
  );
}

/* --- Commercial: striped lot with an accessible stall and access aisle --- */
export function ArtCommercial() {
  const k = 'cm';
  return (
    <Frame k={k}>
      <rect width="800" height="500" fill="#38342f" />
      <rect y="120" width="800" height="380" fill={`url(#${ID(`con-${k}`)})`} />

      {/* building */}
      <rect y="0" width="800" height="122" fill="#282420" />
      <g>
        {Array.from({ length: 7 }).map((_, i) => (
          <g key={i}>
            <rect x={38 + i * 108} y="28" width="78" height="64" rx="2" fill="#15120f" />
            <rect x={42 + i * 108} y="32" width="70" height="56" fill="#3e4e56" opacity=".5" />
          </g>
        ))}
      </g>
      {/* curb + its shadow on the lot */}
      <rect y="120" width="800" height="18" fill="#948c80" />
      <rect y="120" width="800" height="3.4" fill="#ddd6cc" opacity=".7" />
      <rect y="138" width="800" height="14" fill="#1d1813" opacity=".32" filter={`url(#${ID(`soft2-${k}`)})`} />

      {/* stall striping */}
      <g stroke="#f4efe6" strokeWidth="6" opacity=".92">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1={58 + i * 96} y1="204" x2={58 + i * 96} y2="384" />
        ))}
        <line x1="18" y1="204" x2="782" y2="204" />
      </g>

      {/* accessible stall */}
      <rect x="154" y="204" width="96" height="180" fill="#2f6f8f" opacity=".5" />
      <g fill="#f4efe6">
        <circle cx="202" cy="266" r="10.5" />
        <path d="M195 284 h16 l8 27 h-10.5 l-6-18.5 h-7.5 z" />
        <circle cx="202" cy="316" r="19" fill="none" stroke="#f4efe6" strokeWidth="5.5" />
      </g>
      {/* hatched access aisle */}
      <g stroke="#f4efe6" strokeWidth="4.5" opacity=".8">
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={i} x1="254" y1={212 + i * 26} x2="342" y2={190 + i * 26} />
        ))}
      </g>

      <Grain k={k} o={0.4} />
      <Rake k={k} />
      <Vignette k={k} />
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
