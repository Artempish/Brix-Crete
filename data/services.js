// ============================================================================
// Services. Each entry generates a full page at /services/<slug>, its nav
// entry, its card on the services hub, and its Service schema.
// ============================================================================

export const SERVICES = [
  // ---------------------------------------------------------------- driveways
  {
    slug: 'concrete-driveways',
    name: 'Concrete Driveways',
    short: 'Driveways',
    category: 'Concrete',
    art: 'driveway',
    featured: true,
    summary: 'A driveway is the single largest slab on most properties, and the one most likely to fail early. Ours are poured on a compacted stone base, reinforced, and jointed to control cracking.',
    metaTitle: 'Concrete Driveway Installation in Elmhurst & Chicagoland',
    metaDesc:
      'New concrete driveways and driveway replacement across Elmhurst, Oak Brook, Hinsdale and the western suburbs. 5" slab, 6" compacted base, rebar, fixed written pricing.',
    h1: 'Concrete driveways that survive the salt truck',
    tagline: 'Tear-out, base, rebar, pour and finish — one crew, one price.',
    intro: [
      'Most driveways in the western suburbs do not fail because of the concrete. They fail because someone poured four inches of mix onto whatever soil was already there, skipped the reinforcement, and let the slab find its own cracks the first winter.',
      'We build them the other way around. The base gets the attention, the slab gets the thickness it needs to carry a vehicle, and the joints get cut on a spacing that decides where the cracks go before the concrete ever decides for itself.',
    ],
    includes: [
      { t: 'Full demolition and haul-off', d: 'Old slab broken out, spoils loaded and removed. We protect the lawn and the apron before anything gets swung.' },
      { t: '6" of compacted CA-6 base', d: 'Placed in lifts and plate-compacted, not just dumped and raked. This is the part nobody sees and the part that decides whether the driveway lasts.' },
      { t: '5" slab, air-entrained mix', d: 'Thicker than the residential minimum, with entrained air so freeze–thaw cycles have somewhere to go instead of spalling the surface.' },
      { t: 'Rebar or mesh on chairs', d: 'Reinforcement held up in the middle of the slab where it does something — not laid on the ground and poured over.' },
      { t: 'Control joints on real spacing', d: 'Cut at roughly 10 to 12 feet and squared to the slab so the inevitable shrinkage cracks land inside a joint.' },
      { t: 'Graded to drain away from the house', d: 'Pitch set at the forms and checked before the pour. Water goes to the street, not to your foundation.' },
      { t: 'Apron and public walk coordination', d: 'Where the village owns the apron, we pull the permit and meet the municipal spec so the inspection passes the first time.' },
    ],
    specs: [
      ['Slab thickness', '4" typical', '5" standard, 6" for RV or truck parking'],
      ['Sub-base', 'Often none', '6" CA-6 compacted in lifts'],
      ['Reinforcement', 'Mesh on grade', '#4 rebar grid or mesh on chairs'],
      ['Concrete', '3,000 PSI', '4,000 PSI, 6% air-entrained'],
      ['Joints', 'Cut late or not at all', 'Saw-cut within 12–24 hrs, 10–12 ft spacing'],
      ['Curing', 'Left to dry', 'Cure compound applied, written schedule left with you'],
    ],
    timeline: 'Most single and two-car driveways are demo-to-pour in two to three working days, weather permitting.',
    aftercare: [
      'Stay off on foot for 24 hours, and keep vehicles off for 7 days.',
      'No de-icing salt the first winter. Sand for traction instead — new concrete has not finished curing and salt will scale the surface.',
      'Seal at the end of the first full season, then every two to three years.',
    ],
    faqs: [
      {
        q: 'How long does a concrete driveway last around here?',
        a: 'Built on a proper compacted base with reinforcement and correct joint spacing, 30 years or more is normal in this climate. Built without them, it is common to see edge cracking and surface scaling inside five winters. Almost all of the difference is in the base and the joints, not the concrete itself.',
      },
      {
        q: 'Can you pour over my existing driveway?',
        a: 'We do not recommend it and we generally will not do it. An overlay inherits every crack and every soft spot underneath it, and raising the surface two inches usually creates a drainage or garage-threshold problem. Tear-out is a day of work and it is the difference between a repair and a driveway.',
      },
      {
        q: 'Do I need a permit?',
        a: 'For a straight replacement in the same footprint, usually not. For a new driveway, a widened one, or any work touching the public apron, most western-suburb villages require a permit and an inspection. We pull it and handle the inspection as part of the job.',
      },
      {
        q: 'When can I park on it?',
        a: 'Seven days for a passenger vehicle. Concrete reaches most of its strength in the first week but keeps gaining for a month — we leave you a written schedule so there is no guessing.',
      },
    ],
    related: ['concrete-patios', 'brick-paver-driveways', 'concrete-repair-replacement'],
  },

  // ------------------------------------------------------------------ patios
  {
    slug: 'concrete-patios',
    name: 'Concrete Patios',
    short: 'Patios',
    category: 'Concrete',
    art: 'patio',
    featured: true,
    summary: 'Broom finish, exposed aggregate or a stamped pattern — poured flat, pitched to drain, and jointed so the finish stays clean.',
    metaTitle: 'Concrete Patio Installation in Elmhurst, IL | Brix & Crete',
    metaDesc:
      'New concrete patios in Elmhurst and the western suburbs. Broom, exposed aggregate and stamped finishes, poured on a compacted base with proper drainage.',
    h1: 'A patio you can actually use for thirty years',
    tagline: 'Flat where it should be flat, pitched where it needs to drain.',
    intro: [
      'A patio is the piece of concrete people stand on, look at, and put furniture on, so the finish matters more than it does anywhere else on the property. It also sits right against the house, which means drainage is not optional.',
      'We set the forms to a deliberate pitch away from the foundation, screed and float it flat enough that a table does not rock, and put the joints where the layout wants them rather than wherever the saw happens to land.',
    ],
    includes: [
      { t: 'Layout staked on site with you', d: 'We chalk the footprint before we dig so you can stand in it, check the furniture fit, and move a line if you want to.' },
      { t: '4" slab on 4–6" compacted base', d: 'Compacted stone under the whole footprint, with extra depth wherever we hit soft or filled soil.' },
      { t: 'Wire or fiber reinforcement', d: 'Mesh on chairs or fiber-reinforced mix depending on the span and the finish you pick.' },
      { t: 'Your choice of finish', d: 'Broom, exposed aggregate, salt finish, or a stamped pattern and color you approve off a physical sample.' },
      { t: 'Pitched away from the house', d: 'A minimum quarter-inch per foot of fall, verified with a level before the pour, so snowmelt goes to the yard.' },
      { t: 'Clean joints and edges', d: 'Joints laid out to the shape of the patio, edges tooled, and any step or transition formed rather than patched in later.' },
    ],
    specs: [
      ['Slab thickness', '3.5–4"', '4" standard, 5" under hot tubs and outdoor kitchens'],
      ['Sub-base', 'Sometimes skipped', '4–6" CA-6 compacted'],
      ['Reinforcement', 'None', 'Mesh on chairs or fiber-reinforced mix'],
      ['Drainage', 'Level pour', 'Minimum 1/4" per foot away from the structure'],
      ['Finish options', 'Broom only', 'Broom, exposed aggregate, salt, stamped and colored'],
      ['Joints', 'Wherever', 'Laid out to the slab geometry before cutting'],
    ],
    timeline: 'A typical 300 to 500 square foot patio runs two to three days on site. Stamped and colored work adds a day for release and wash-off.',
    aftercare: [
      'Keep foot traffic off for 24 to 48 hours; furniture off for a week.',
      'Do not power-wash or acid-wash new concrete in its first season.',
      'Stamped and colored patios should be resealed every two to three years to hold the color.',
    ],
    faqs: [
      {
        q: 'Concrete patio or brick pavers?',
        a: 'Concrete is one continuous surface — cleaner lines, less maintenance, and typically less money per square foot. Pavers flex with the ground instead of cracking, can be lifted and reset individually, and give you more pattern and color options. If the space is large and simple, concrete usually wins. If it is shaped, terraced, or you want a specific look, pavers usually do.',
      },
      {
        q: 'Will it crack?',
        a: 'Every slab develops shrinkage cracks. The job of the contractor is to decide where. Correct joint spacing means those cracks form inside the saw cuts where you will never notice them. Cracking that crosses the middle of a bay is a base or jointing failure, not bad luck.',
      },
      {
        q: 'Can you pour a patio right up against the house?',
        a: 'Yes, with an expansion joint at the foundation so the slab can move independently, and with the pitch set away from the wall. We also check that the finished height stays below your siding and any weep holes or vents.',
      },
    ],
    related: ['stamped-concrete', 'brick-paver-patios', 'concrete-walkways'],
  },

  // -------------------------------------------------------------- stamped
  {
    slug: 'stamped-concrete',
    name: 'Stamped Concrete',
    short: 'Stamped Concrete',
    category: 'Concrete',
    art: 'stamped',
    featured: true,
    summary: 'Stone, slate, plank and cobble patterns pressed into a real integral-colored pour — approved off a physical sample before we mix.',
    metaTitle: 'Stamped & Decorative Concrete Contractor | Elmhurst, IL',
    metaDesc:
      'Stamped concrete patios, driveways and walkways in the western suburbs. Integral color, hand-detailed joints, sealed and warrantied workmanship.',
    h1: 'Stamped concrete, detailed by hand',
    tagline: 'The pattern is the easy part. The color, the release and the touch-up are what make it look real.',
    intro: [
      'Stamped concrete goes wrong in predictable ways: color that reads flat because it was broadcast on instead of mixed in, grout lines that disappear where the mat overlapped, and a sheen from too much sealer that makes the whole thing look plastic.',
      'We colour the mix itself, stamp on a schedule tight enough that the last mat presses as deep as the first, and hand-detail the joints and edges afterwards. You approve the pattern and the colour off a physical sample poured for your job — not a photo.',
    ],
    includes: [
      { t: 'Physical colour sample first', d: 'We pour and stamp a sample board in your chosen pattern and colour, and nothing gets ordered until you have looked at it in daylight on site.' },
      { t: 'Integral colour, not a broadcast', d: 'Pigment mixed through the concrete so a chip or a scratch does not expose grey underneath.' },
      { t: 'Accent release for depth', d: 'A secondary release colour worked into the texture, then washed back so the pattern reads like stone instead of a rubber mat.' },
      { t: 'Hand-detailed joints and edges', d: 'Grout lines chased, overlaps cleaned up, and perimeter edges touched by hand after the mats come off.' },
      { t: 'Two coats of sealer', d: 'Applied after full wash-off and cure, at a rate that protects the surface without turning it glossy or slippery.' },
    ],
    patterns: [
      'Ashlar slate', 'Random stone', 'European fan', 'Running bond brick',
      'Wood plank', 'Seamless texture', 'Cobblestone', 'Large format tile',
    ],
    specs: [
      ['Colour method', 'Broadcast hardener', 'Integral colour + accent release'],
      ['Detailing', 'Whatever the mat left', 'Joints chased and edges hand-tooled'],
      ['Sealer', 'One heavy coat', 'Two thin coats, anti-skid additive on request'],
      ['Sample', 'Photo from a brochure', 'Sample board poured for your job'],
      ['Base + slab', 'Same as plain', '4" slab on 4–6" compacted CA-6'],
    ],
    timeline: 'Three to four days on site. Stamping happens in a narrow window during the pour day, so we schedule around weather more carefully than on a plain slab.',
    aftercare: [
      'Wait 48 hours before walking on it, a week before furniture.',
      'Reseal every two to three years — this is what keeps the colour from fading.',
      'Use sand, never salt, for traction in winter.',
    ],
    faqs: [
      {
        q: 'Is stamped concrete slippery?',
        a: 'Sealed stamped concrete can be, especially on a pool deck or a sloped walk. We add a fine anti-skid aggregate to the final sealer coat wherever the surface gets wet. Ask for it and it costs nothing extra.',
      },
      {
        q: 'How much more does stamping cost than a broom finish?',
        a: 'Generally in the range of 50 to 100 percent more per square foot, depending on the pattern and whether you want a border in a second pattern or colour. The material difference is small; the labour difference is not.',
      },
      {
        q: 'Does the colour fade?',
        a: 'Integral colour does not wash out, but UV and traffic will dull the surface if the sealer is allowed to wear off. On a resealing schedule, a stamped patio looks close to new a decade later.',
      },
    ],
    related: ['concrete-patios', 'concrete-driveways', 'concrete-walkways'],
  },

  // ------------------------------------------------------------- walkways
  {
    slug: 'concrete-walkways',
    name: 'Walkways & Sidewalks',
    short: 'Walkways & Sidewalks',
    category: 'Concrete',
    art: 'walkway',
    featured: true,
    summary: 'Front walks, service walks and public sidewalk replacement — poured to village spec where the village owns it.',
    metaTitle: 'Concrete Walkways & Sidewalk Replacement | Elmhurst, IL',
    metaDesc:
      'Front walks, garden paths and public sidewalk replacement in Elmhurst and the western suburbs. Permit handling and municipal spec compliance included.',
    h1: 'Walks that stay level and stay legal',
    tagline: 'Front walk, service walk or the public square the village makes you replace.',
    intro: [
      'A walkway is a small pour with an outsized number of ways to go wrong. It is narrow, so it heaves easily. It usually runs alongside the house, so drainage matters. And if it is the public sidewalk, the village has a written spec and an inspector.',
      'We handle all three cases the same way: dig deeper than the slab needs, compact properly, and set the pitch before anything gets poured.',
    ],
    includes: [
      { t: 'Removal of the failed sections', d: 'Broken, heaved or trip-hazard squares saw-cut out cleanly at the joints rather than chipped back.' },
      { t: '4" slab on compacted base', d: 'Narrow slabs heave first, so the base under a walk gets the same treatment as a driveway.' },
      { t: 'Joints every 4 to 5 feet', d: 'Tighter spacing than a driveway because the slab is narrow — this is what keeps walks from cracking diagonally.' },
      { t: 'Correct pitch and no ponding', d: 'Cross-slope set away from the house and checked with a level, so meltwater does not sit and refreeze.' },
      { t: 'ADA-compliant public work', d: 'Where we are replacing a village sidewalk, cross-slope, running slope and detectable-warning requirements are met to spec.' },
      { t: 'Permit and inspection', d: 'Pulled and scheduled by us on any public-right-of-way work.' },
    ],
    specs: [
      ['Thickness', '3.5"', '4" residential, 5" at driveway crossings'],
      ['Base', 'Sand or nothing', '4" compacted CA-6'],
      ['Joint spacing', '6 ft+', '4–5 ft, matched to the walk width'],
      ['Cross-slope', 'Flat', '1/4" per foot away from the structure'],
      ['Public walk', 'Varies', 'Poured to the village specification, inspected'],
    ],
    timeline: 'Most residential walks are a one to two day job. Public sidewalk replacement depends on the village inspection schedule.',
    aftercare: [
      'Keep off for 24 hours; barricades stay up until we pull them.',
      'No salt the first winter.',
      'Tell us if a section ever lifts — an early heave is a base issue we would want to see.',
    ],
    faqs: [
      {
        q: 'The village sent me a letter about my sidewalk. Can you deal with it?',
        a: 'Yes. Send us the letter or the marked squares. We quote the flagged sections, pull the permit, pour to the village spec and meet the inspector. Most western-suburb programs also have a cost-share — we will tell you if yours does.',
      },
      {
        q: 'Can you match my existing walk?',
        a: 'Colour-matching new concrete to old is imperfect by nature — the new pour will be lighter for a year or two before it weathers in. We can match the finish, the joint pattern and the width exactly, which is what actually reads.',
      },
    ],
    related: ['concrete-steps', 'brick-walkways', 'concrete-repair-replacement'],
  },

  // ---------------------------------------------------------------- steps
  {
    slug: 'concrete-steps',
    name: 'Steps & Stoops',
    short: 'Steps & Stoops',
    category: 'Concrete',
    art: 'steps',
    summary: 'Poured-in-place stoops and stairs with consistent riser heights, a proper footing below the frost line, and a landing that drains.',
    metaTitle: 'Concrete Steps & Front Stoop Installation | Elmhurst, IL',
    metaDesc:
      'New concrete steps, stoops and stairs in Elmhurst and Chicagoland. Frost-depth footings, code-consistent risers, and railing anchors set during the pour.',
    h1: 'Steps set on a footing, not on fill',
    tagline: 'Even risers, a landing that drains, and railing anchors set in the pour.',
    intro: [
      'Settled, tipping front steps are almost always the same story: someone poured them on backfill instead of a footing. The soil against a foundation was disturbed during construction and never stops settling, so anything resting on it goes with it.',
      'We dig to frost depth, pour a footing, and tie the steps to it. That is the whole difference, and it is the reason our steps are still where we left them.',
    ],
    includes: [
      { t: 'Footing below the frost line', d: 'Dug to 42 inches, which is what Illinois frost depth demands, and poured before the steps go on top.' },
      { t: 'Consistent riser heights', d: 'Total rise measured and divided evenly. Uneven risers are the most common cause of a fall on residential stairs, and they fail inspection.' },
      { t: 'A landing that sheds water', d: 'Top landing pitched slightly away from the door so rain and snowmelt do not pool at the threshold.' },
      { t: 'Railing anchors set wet', d: 'Sleeves or anchors placed during the pour instead of drilled in later, which is what cracks a step nose.' },
      { t: 'Finish to match your walk', d: 'Broom, stamped or exposed aggregate, with tooled or bullnosed edges.' },
    ],
    specs: [
      ['Footing', 'None — poured on fill', '42" to frost depth, poured and tied'],
      ['Riser height', 'Whatever the fill allowed', 'Even across the flight, code-compliant'],
      ['Tread depth', 'Varies', 'Consistent, with a pitch that drains'],
      ['Railing', 'Drilled in afterward', 'Anchors set during the pour'],
      ['Reinforcement', 'None', 'Rebar tied through footing into the steps'],
    ],
    timeline: 'Two to three days including the footing pour and cure.',
    aftercare: [
      'Keep off for 48 hours; the footing and the steps cure together.',
      'Sand, not salt, for the first winter — step noses scale first.',
    ],
    faqs: [
      {
        q: 'My steps have separated from the house. Can they be lifted instead of replaced?',
        a: 'Sometimes. If the steps themselves are sound and the problem is settlement, mudjacking or foam lifting can bring them back and costs considerably less. If the concrete is cracked through or the risers are already uneven, lifting only buys time. We will tell you honestly which one you have.',
      },
      {
        q: 'Do you install railings?',
        a: 'We set the anchors and coordinate with your railing fabricator, and we can bring one in as part of the job. Setting the anchors during the pour matters more than who makes the rail.',
      },
    ],
    related: ['concrete-walkways', 'concrete-ramps', 'concrete-repair-replacement'],
  },

  // ---------------------------------------------------------------- ramps
  {
    slug: 'concrete-ramps',
    name: 'Concrete Ramps',
    short: 'ADA Ramps',
    category: 'Concrete',
    art: 'ramp',
    summary: 'Code-compliant access ramps for homes and commercial entrances — correct slope, landings, edge protection and a non-slip finish.',
    metaTitle: 'ADA Concrete Ramp Installation | Elmhurst & Chicagoland',
    metaDesc:
      'Accessible concrete ramps for residential and commercial entrances in the western suburbs. 1:12 slope, compliant landings, non-slip broom finish.',
    h1: 'Access ramps built to the slope that actually passes',
    tagline: 'Residential and commercial. Measured, drawn, poured and inspected.',
    intro: [
      'A ramp is the one piece of flatwork where the numbers are not a matter of opinion. Slope, landing size, cross-slope, edge protection and handrail height are all written down, and an inspector will check them.',
      'We measure the total rise first, lay the run out on paper, and show you where it lands before we dig — because a ramp that needs a switchback is a different project than one that does not, and you should know that on day one.',
    ],
    includes: [
      { t: 'Rise measured and run drawn', d: 'A 1:12 slope means twelve inches of ramp for every inch of rise. We show you the footprint before anything is committed.' },
      { t: 'Compliant landings', d: 'Five-foot level landings at the top, the bottom, and at any direction change, so a wheelchair can rest and turn.' },
      { t: 'Cross-slope held under 2%', d: 'The requirement people forget. Too much cross-slope pulls a chair sideways and fails inspection.' },
      { t: 'Edge protection', d: 'Curbs or raised edges along the open sides to stop a wheel running off.' },
      { t: 'Non-slip finish', d: 'A transverse broom finish across the direction of travel, or anti-skid additive if the ramp is being sealed.' },
      { t: 'Handrail anchors', d: 'Set during the pour at the correct height, both sides where the rise requires it.' },
    ],
    specs: [
      ['Running slope', 'Eyeballed', 'Maximum 1:12 (8.33%)'],
      ['Cross-slope', 'Ignored', 'Maximum 2%'],
      ['Landings', 'Skipped', "5'×5' at top, bottom and every turn"],
      ['Edge protection', 'None', 'Curb or raised edge on open sides'],
      ['Surface', 'Smooth trowel', 'Transverse broom, non-slip'],
      ['Handrails', 'Added later', 'Anchors set in the pour at code height'],
    ],
    timeline: 'Three to four days for a typical residential entrance ramp, longer where a switchback or retaining is required.',
    aftercare: [
      'Keep off for 48 hours.',
      'Sand for traction in winter — salt will scale the surface a chair rides on.',
    ],
    faqs: [
      {
        q: 'How long does the ramp have to be?',
        a: 'Twelve inches of ramp for every inch you need to climb, plus landings. A 30-inch rise is a 30-foot run before landings. If that does not fit the property, the answer is a switchback with an intermediate landing, and we will draw it for you.',
      },
      {
        q: 'Is a permit required?',
        a: 'For commercial work, always. For residential, most villages require one for a permanent poured ramp. We handle the permit and meet the inspector.',
      },
    ],
    related: ['concrete-steps', 'concrete-walkways', 'commercial-concrete'],
  },

  // -------------------------------------------------- garage slabs / foundations
  {
    slug: 'garage-slabs-foundations',
    name: 'Garage Slabs & Foundations',
    short: 'Slabs & Foundations',
    category: 'Concrete',
    art: 'slab',
    summary: 'Garage floors, shed and addition slabs, footings and frost walls — the structural flatwork everything else sits on.',
    metaTitle: 'Garage Slabs, Footings & Foundations | Elmhurst, IL',
    metaDesc:
      'Garage floor slabs, shed and addition pads, footings and frost walls across Chicagoland. Vapour barrier, rebar, frost-depth footings, inspected.',
    h1: 'The slab everything else depends on',
    tagline: 'Garage floors, addition pads, footings and frost walls.',
    intro: [
      'Structural flatwork is unforgiving because it is buried. If the footing is shallow, the vapour barrier is missing or the slab is under-reinforced, nobody finds out until the building above it starts telling you.',
      'We pour these to the drawing and to code, and we photograph the base, the barrier and the steel before the concrete covers them so you have a record of what is underneath.',
    ],
    includes: [
      { t: 'Excavation to bearing soil', d: 'Dug past topsoil and fill to soil that will actually carry the load, with the depth documented.' },
      { t: 'Footings below frost depth', d: '42 inches minimum in Illinois, stepped where the grade changes.' },
      { t: 'Vapour barrier under heated slabs', d: '10-mil poly lapped and taped so ground moisture does not come up through the floor.' },
      { t: 'Engineered reinforcement', d: 'Rebar sized and spaced to the plan, tied and chaired, with the grid photographed before the pour.' },
      { t: 'Thickened edges and pier pockets', d: 'Where the slab carries a wall, a post or a lift, the edge is thickened and the pocket formed during the pour.' },
      { t: 'Floor drains and pitch', d: 'Garage floors pitched to the door or to a drain so meltwater leaves instead of freezing on the floor.' },
    ],
    specs: [
      ['Footing depth', 'Shallow', '42" minimum, below frost line'],
      ['Slab thickness', '4"', '4" minimum, 6" where vehicles or a lift bear'],
      ['Vapour barrier', 'Omitted', '10-mil poly, lapped and taped'],
      ['Reinforcement', 'Mesh on grade', 'Rebar grid per plan, tied and chaired'],
      ['Concrete', '3,000 PSI', '4,000 PSI air-entrained'],
      ['Documentation', 'None', 'Base, barrier and steel photographed pre-pour'],
    ],
    timeline: 'Four to seven days depending on excavation, footing cure and inspection scheduling.',
    aftercare: [
      'Keep vehicles off a new garage slab for 7 days, and off a lift pad for 28.',
      'Do not seal a garage floor until it has fully cured — usually 28 days.',
    ],
    faqs: [
      {
        q: 'Do you work from an architect or engineer drawing?',
        a: 'Yes, and for anything structural we prefer to. Send us the plan set and we will price it to the drawing. Where there is no drawing and the work is structural, we will tell you that you need one before we quote.',
      },
      {
        q: 'Can you pour a slab for a detached garage or shed?',
        a: 'Yes — pads for detached garages, sheds, generators, hot tubs and AC condensers are routine. Anything that will carry a structure gets a thickened edge or a footing, not just a flat pad.',
      },
    ],
    related: ['concrete-driveways', 'commercial-concrete', 'retaining-walls'],
  },

  // -------------------------------------------------------- retaining walls
  {
    slug: 'retaining-walls',
    name: 'Retaining Walls',
    short: 'Retaining Walls',
    category: 'Concrete',
    art: 'wall',
    summary: 'Segmental block and poured walls with the drainage, geogrid and base that keep a wall from leaning out three years later.',
    metaTitle: 'Retaining Wall Installation | Elmhurst & Western Suburbs',
    metaDesc:
      'Segmental block and poured concrete retaining walls in Chicagoland. Drainage stone, filter fabric, geogrid reinforcement and compacted base.',
    h1: 'Retaining walls that stay where you put them',
    tagline: 'The drainage behind the wall is the wall.',
    intro: [
      'A leaning retaining wall is almost never a block problem. It is water. Soil that cannot drain turns into hydrostatic pressure, and hydrostatic pressure pushes walls over.',
      'So most of what you pay us for on a wall is invisible: a compacted leveling pad, a column of clean drainage stone behind the block, filter fabric so that stone does not silt up, a drain tile with somewhere to go, and geogrid tying the wall back into the hill on anything with real height.',
    ],
    includes: [
      { t: 'Compacted, buried leveling pad', d: 'The first course sits below finished grade on compacted stone. Get the base course wrong and every course above it is wrong.' },
      { t: '12" of clean drainage stone', d: 'A full column behind the wall, not a shovelful at the bottom.' },
      { t: 'Filter fabric', d: 'Separating the drainage stone from the backfill so silt does not clog it within a season.' },
      { t: 'Drain tile with an outlet', d: 'Perforated pipe at the base, daylighted somewhere water can actually leave.' },
      { t: 'Geogrid on taller walls', d: 'Layers of grid extending back into the retained soil, turning the hill and the wall into one mass.' },
      { t: 'Caps set and adhered', d: 'Cap course glued down so the top of the wall does not walk off over the winters.' },
    ],
    specs: [
      ['Base', 'Set on soil', 'Compacted stone pad, first course buried'],
      ['Drainage stone', 'Backfilled with spoils', '12" column of clean angular stone'],
      ['Fabric', 'None', 'Filter fabric between stone and soil'],
      ['Drain tile', 'None', 'Perforated pipe, daylighted outlet'],
      ['Geogrid', 'None', "Layered per manufacturer spec above 4'"],
      ['Engineering', 'Not consulted', "Stamped design required above 4' in most villages"],
    ],
    timeline: 'Three to six days depending on length, height and how much excavation the site needs.',
    aftercare: [
      'Keep the drain outlet clear of mulch and landscape fabric.',
      'Tell us if you ever see the top course shifting — early movement is fixable.',
    ],
    faqs: [
      {
        q: 'How tall can a wall be without an engineer?',
        a: 'In most western-suburb villages, four feet measured from the bottom of the base course. Above that you generally need a stamped engineered design and a permit. We will tell you which side of that line your project falls on before you commit to a height.',
      },
      {
        q: 'Block or poured concrete?',
        a: 'Segmental block is faster, cheaper, more forgiving of ground movement and has more finish options. Poured walls make sense when you need a thin profile, a very long straight run, or you are tying into a foundation. For most residential grade changes, block is the right answer.',
      },
    ],
    related: ['garage-slabs-foundations', 'brick-paver-patios', 'concrete-patios'],
  },

  // -------------------------------------------------- brick paver driveways
  {
    slug: 'brick-paver-driveways',
    name: 'Brick Paver Driveways',
    short: 'Paver Driveways',
    category: 'Brick Pavers',
    art: 'paverDrive',
    featured: true,
    summary: 'Interlocking paver driveways on a 10-inch compacted base, with edge restraint and polymeric sand — built to carry vehicles, not just look good.',
    metaTitle: 'Brick Paver Driveway Installation | Elmhurst, IL',
    metaDesc:
      'Brick paver driveways in Elmhurst and the western suburbs. 10" compacted base, concrete edge restraint, polymeric sand, individually resettable.',
    h1: 'Paver driveways built to carry a vehicle',
    tagline: 'Vehicle-rated pavers, a driveway-depth base, and an edge that holds.',
    intro: [
      'Pavers on a patio base will rut under a car within two winters. A paver driveway is a different build: a deeper base, a heavier paver, a stronger edge restraint and a herringbone pattern that actually interlocks under load.',
      'Done that way, it outperforms concrete in one specific and valuable respect — it flexes with ground movement instead of cracking, and any section can be lifted and reset without a saw or a patch.',
    ],
    includes: [
      { t: '10–12" of compacted base', d: 'Driveway depth, placed in lifts and compacted each time, not the four inches a patio gets.' },
      { t: 'Vehicle-rated pavers', d: '80mm pavers, not the 60mm units sold for walkways.' },
      { t: 'Herringbone at the wear areas', d: 'A 45 or 90 degree herringbone through the driving lanes because that pattern resists shifting under turning tyres.' },
      { t: 'Concrete edge restraint', d: 'A poured haunch along the open edges. Plastic edging is what lets driveway pavers spread and separate.' },
      { t: 'Polymeric sand, properly set', d: 'Swept, vibrated in and activated — so joints stay full and weeds stay out.' },
      { t: 'Screeded bedding layer', d: 'A consistent one-inch bedding course screeded flat, never used to correct a bad base.' },
    ],
    specs: [
      ['Base depth', '4–6"', '10–12" compacted CA-6 in lifts'],
      ['Paver thickness', '60mm', '80mm vehicle-rated'],
      ['Edge restraint', 'Plastic spike edging', 'Poured concrete haunch'],
      ['Pattern', 'Running bond', 'Herringbone in the driving lanes'],
      ['Joint sand', 'Regular sand', 'Polymeric, vibrated and activated'],
      ['Repairability', 'Saw and patch', 'Lift and reset individual pavers'],
    ],
    timeline: 'Four to seven days. Paver work is more labour per square foot than concrete and the base takes longer.',
    aftercare: [
      'Wait 24 hours after polymeric sand is activated before driving on it.',
      'Sweep and rinse; do not power-wash the joints out.',
      'Sealing is optional — it deepens colour and helps with oil stains, and should be redone every three to five years.',
    ],
    faqs: [
      {
        q: 'Are paver driveways more expensive than concrete?',
        a: 'Yes, typically 30 to 60 percent more installed, because the base is deeper and the labour is much higher. What you get back is repairability: a stained, cracked or settled area is lifted and reset rather than saw-cut and patched, and a patch never matches.',
      },
      {
        q: 'Will weeds grow between them?',
        a: 'Not through a correctly installed joint. Weeds in a paver driveway grow from seed landing in the joint from above, which is why full, activated polymeric sand matters. Loose or washed-out joints are the actual problem.',
      },
    ],
    related: ['concrete-driveways', 'brick-paver-patios', 'brick-walkways'],
  },

  // ---------------------------------------------------- brick paver patios
  {
    slug: 'brick-paver-patios',
    name: 'Brick Paver Patios',
    short: 'Paver Patios',
    category: 'Brick Pavers',
    art: 'paverPatio',
    featured: true,
    summary: 'Paver patios, seat walls, fire pits and steps — laid on a compacted base with a screeded bedding course and locked-in joints.',
    metaTitle: 'Brick Paver Patio Contractors | Elmhurst & Chicagoland',
    metaDesc:
      'Brick paver patios, seat walls and fire pits in the western suburbs. Compacted base, edge restraint, polymeric sand, individually resettable pavers.',
    h1: 'Paver patios, laid flat and locked in',
    tagline: 'Pattern, border, seat wall and fire pit — designed on site, built as one.',
    intro: [
      'A paver patio gives you things a slab cannot: a border in a second colour, a curve that does not need a saw, a seat wall that ties into the same material, and the ability to lift a section in ten years to run a gas line without scarring the whole surface.',
      'What it demands in exchange is base work. Pavers do not span anything — every one of them is only as flat as what is underneath it. So the base gets compacted in lifts, the bedding course gets screeded rather than raked, and the edges get restrained properly.',
    ],
    includes: [
      { t: 'Layout mocked up on site', d: 'Footprint chalked and a dry-laid sample of the pattern and border so you can see the scale before we commit.' },
      { t: '6–8" compacted base', d: 'Patio-depth base, plate-compacted in lifts, with extra depth over soft spots.' },
      { t: 'Screeded bedding course', d: 'One inch of coarse sand screeded flat — never used to hide an uneven base.' },
      { t: 'Border and field pattern', d: 'A soldier or sailor course border framing the field pattern, cut tight on the curves.' },
      { t: 'Restrained edges', d: 'Edge restraint spiked into the compacted base along every open edge.' },
      { t: 'Seat walls, steps and fire pits', d: 'Built in the same material run, so it reads as one project instead of three.' },
      { t: 'Polymeric sand, vibrated in', d: 'Swept, compacted with a plate on a protective pad, topped up and activated.' },
    ],
    specs: [
      ['Base depth', '4"', '6–8" compacted CA-6 in lifts'],
      ['Bedding', 'Raked sand', '1" coarse sand, screeded to rails'],
      ['Edge', 'Soil', 'Spiked edge restraint or concrete haunch'],
      ['Joints', 'Play sand', 'Polymeric, vibrated and activated'],
      ['Drainage', 'Flat', 'Pitched away from the house'],
      ['Repair', 'Full rebuild', 'Lift and reset individual units'],
    ],
    timeline: 'Three to six days for a typical patio; add time for seat walls, steps or a fire pit.',
    aftercare: [
      'Let the polymeric sand cure 24 hours before heavy use.',
      'Top up joint sand every few years in high-traffic lanes.',
      'Do not use a de-icer containing magnesium chloride on pavers.',
    ],
    faqs: [
      {
        q: 'Do pavers sink over time?',
        a: 'Properly based pavers settle uniformly a small amount in the first season and then stop. Localised sinking means either the base was not compacted in lifts or water is getting underneath. Both are fixable by lifting that area and rebuilding the base, which is exactly the advantage pavers have over a slab.',
      },
      {
        q: 'Can you build a fire pit or seat wall at the same time?',
        a: 'Yes, and it is cheaper and looks better done together — same material delivery, same crew, same base work, and the coursing lines up with the patio instead of being fitted to it afterwards.',
      },
    ],
    related: ['concrete-patios', 'retaining-walls', 'brick-walkways'],
  },

  // -------------------------------------------------------- brick walkways
  {
    slug: 'brick-walkways',
    name: 'Brick Walkways',
    short: 'Paver Walkways',
    category: 'Brick Pavers',
    art: 'paverWalk',
    summary: 'Front walks and garden paths in brick or paver, with tight cuts on the curves and joints that stay full.',
    metaTitle: 'Brick Paver Walkways & Garden Paths | Elmhurst, IL',
    metaDesc:
      'Brick and paver walkways in Elmhurst and Chicagoland. Compacted base, restrained edges, polymeric joints, curves cut tight.',
    h1: 'Brick walks, cut tight and laid flat',
    tagline: 'A front walk is the first thing anyone touches. It should be level.',
    intro: [
      'Narrow paver runs are the easiest thing in this trade to do badly. There is not enough width for the pattern to hide a wandering line, every curve needs cuts, and the edges have nothing holding them but the restraint you installed.',
      'We snap the lines, cut on a wet saw so the edges are clean rather than chipped, and restrain both sides of the run so the walk does not spread at the middle where people actually step.',
    ],
    includes: [
      { t: '6" compacted base', d: 'Narrow runs heave first, so the base gets full depth even though the traffic is light.' },
      { t: 'Both edges restrained', d: 'Restraint on both sides along the entire run — the single most common omission on paver walks.' },
      { t: 'Wet-saw cuts on curves', d: 'Clean cuts on radius work rather than split or chipped pavers.' },
      { t: 'Border course', d: 'A soldier course framing the field so the walk reads as a deliberate line.' },
      { t: 'Polymeric joints', d: 'Swept, vibrated and activated so joints do not wash out in the first storm.' },
      { t: 'Landings and step transitions', d: 'Where the walk meets steps or a stoop, the transition is built rather than butted up.' },
    ],
    specs: [
      ['Base depth', '3–4"', '6" compacted CA-6'],
      ['Edge restraint', 'One side or none', 'Both sides, full length'],
      ['Cuts', 'Split with a hammer', 'Wet-saw, clean edge'],
      ['Joints', 'Regular sand', 'Polymeric, vibrated and activated'],
      ['Border', 'None', 'Soldier course perimeter'],
    ],
    timeline: 'Two to four days for a typical front walk.',
    aftercare: [
      'Avoid heavy traffic for 24 hours after joint sand is activated.',
      'Rinse rather than power-wash.',
    ],
    faqs: [
      {
        q: 'Can you match the brick on my house?',
        a: 'Close, usually. Clay paving brick and house brick are different products, but there is enough range in the paver catalogues to land in the same colour family. We bring physical samples out and hold them against the house rather than working from a screen.',
      },
    ],
    related: ['concrete-walkways', 'brick-paver-patios', 'concrete-steps'],
  },

  // ------------------------------------------------------------ repair
  {
    slug: 'concrete-repair-replacement',
    name: 'Repair & Replacement',
    short: 'Repair & Replacement',
    category: 'Repair',
    art: 'repair',
    summary: 'Honest triage: what can be lifted or resurfaced, what has to come out, and what you can safely leave alone for now.',
    metaTitle: 'Concrete Repair, Lifting & Replacement | Elmhurst, IL',
    metaDesc:
      'Concrete repair and replacement in Chicagoland — slab lifting, section replacement, trip hazards and spalling. Straight answers about what is worth fixing.',
    h1: 'What is worth repairing, and what is not',
    tagline: 'Some of this is a two-hour fix. Some of it is a tear-out. We will tell you which.',
    intro: [
      'A lot of concrete we get called out to look at does not need replacing. A settled but intact slab can be lifted. A hairline crack in the middle of a driveway bay is cosmetic. A spalled surface on a two-year-old pour is usually a salt problem, not a structural one.',
      'And some of it genuinely does need to come out. A slab cracked into multiple moving pieces, a walk with a two-inch trip hazard, steps pulling away from the house — those are past patching.',
      'We would rather tell you the cheap answer and keep the relationship than sell you a tear-out you did not need.',
    ],
    includes: [
      { t: 'Slab lifting', d: 'Settled but intact slabs raised back to grade with polyurethane foam or mudjacking — hours of work instead of days, at a fraction of replacement cost.' },
      { t: 'Section replacement', d: 'Failed bays saw-cut at the joints and re-poured, so we replace the four feet that failed instead of the forty that did not.' },
      { t: 'Trip hazard removal', d: 'Lifted sidewalk edges ground or cut down to eliminate the hazard, where the village allows it.' },
      { t: 'Crack routing and sealing', d: 'Working cracks routed out and filled with a flexible sealant so water stops getting under the slab and freezing.' },
      { t: 'Spall and surface repair', d: 'Scaled surfaces assessed honestly — resurfacing works on some slabs and fails on others, and we will say which yours is.' },
      { t: 'Full tear-out and replacement', d: 'When the slab is genuinely done, it comes out and gets rebuilt properly, with the base fixed rather than reused.' },
    ],
    specs: [
      ['Settled but intact slab', 'Replace', 'Lift — usually a fraction of the cost'],
      ['One failed bay', 'Replace the whole run', 'Saw-cut at joints, replace the bay'],
      ['Hairline shrinkage crack', 'Alarm and upsell', 'Usually cosmetic — monitor it'],
      ['Working crack', 'Skim coat over it', 'Route and seal so water stays out'],
      ['Surface scaling', 'Always resurface', 'Assessed — resurfacing fails on a weak slab'],
      ['Multiple moving pieces', 'Patch', 'Tear out and rebuild the base'],
    ],
    timeline: 'Lifting is often a single visit. Section replacement is one to two days. Full replacement follows the new-install timeline for that surface.',
    aftercare: [
      'Lifted slabs can be walked on immediately and driven on within hours.',
      'Sealed cracks should be checked each spring.',
    ],
    faqs: [
      {
        q: 'Is my cracked driveway an emergency?',
        a: 'Almost never. What matters is whether the crack is moving and whether water is getting under the slab. A tight crack inside a bay is normal shrinkage. A crack where the two sides are at different heights means the base is moving underneath, and that one is worth looking at before winter.',
      },
      {
        q: 'Can you just resurface it?',
        a: 'Sometimes. An overlay bonds to sound concrete and fails on weak concrete, so the honest answer depends on what is under the surface. If the slab below is scaled all the way through or has lost its aggregate bond, an overlay will delaminate within two winters and you will have paid twice.',
      },
      {
        q: 'Do you charge for an assessment?',
        a: 'No. We will come look, tell you what we see, and if the answer is "leave it alone for now", that is a free answer and we will still be here when it does need doing.',
      },
    ],
    related: ['concrete-driveways', 'concrete-walkways', 'concrete-steps'],
  },

  // -------------------------------------------------------- commercial
  {
    slug: 'commercial-concrete',
    name: 'Commercial Concrete',
    short: 'Commercial',
    category: 'Commercial',
    art: 'commercial',
    summary: 'Parking lots, drive lanes, ADA work, loading areas, sidewalks and pads — scheduled around your operating hours.',
    metaTitle: 'Commercial Concrete Contractor | Elmhurst & Chicagoland',
    metaDesc:
      'Commercial concrete in the western suburbs: parking lots, drive lanes, ADA compliance, loading docks, sidewalks and pads. Phased, off-hours scheduling.',
    h1: 'Commercial flatwork that does not close you down',
    tagline: 'Phased, off-hours, and back open in the morning.',
    intro: [
      'On a commercial site the concrete is rarely the hard part. The hard part is doing it without shutting down the tenant, blocking the dumpster enclosure, or stranding the accessible parking stalls for a week.',
      'So we plan commercial work in phases, pour at night or over a weekend where it makes sense, and hand you a schedule that says exactly which part of your lot is unavailable on which day.',
    ],
    includes: [
      { t: 'Phased scheduling', d: 'Work broken into sections so a portion of the lot or entrance stays open throughout.' },
      { t: 'Heavy-duty sections', d: 'Thickened, more heavily reinforced concrete in dumpster pads, loading areas and truck drive lanes.' },
      { t: 'ADA compliance', d: 'Accessible stalls, access aisles, curb ramps and detectable warnings brought to current standard.' },
      { t: 'Curb, gutter and drainage', d: 'Curb replacement and grading corrections so the lot actually sheds water to the inlets.' },
      { t: 'Night and weekend pours', d: 'Where daytime work is not viable, we pour off-hours and open in the morning.' },
      { t: 'Property manager reporting', d: 'Daily photos and a written phase schedule you can forward to tenants without rewriting it.' },
    ],
    specs: [
      ['Standard lot paving', '4–5"', '6" on 8" compacted base'],
      ['Dumpster and truck pads', '6"', '8" with a heavy rebar grid'],
      ['Concrete', '3,500 PSI', '4,000–4,500 PSI air-entrained'],
      ['ADA', 'Grandfathered', 'Brought to current standard where scope allows'],
      ['Scheduling', 'Business hours', 'Phased, with night and weekend options'],
      ['Reporting', 'None', 'Daily photo log and phase schedule'],
    ],
    timeline: 'Scoped per site. We will give you a phase-by-phase calendar with the estimate.',
    aftercare: [
      'Barricades stay up for the full cure window on drive lanes.',
      'Seven days before vehicle traffic, longer for loaded trucks.',
    ],
    faqs: [
      {
        q: 'Can you work nights and weekends?',
        a: 'Yes. Retail and medical sites are routinely poured off-hours. It costs more in labour and it is almost always cheaper than the lost business from a daytime closure.',
      },
      {
        q: 'Do you carry the insurance our property manager will ask for?',
        a: 'Yes. Send us the certificate requirements with the RFP and we will have our carrier issue it with the correct additional insureds before we mobilise.',
      },
    ],
    related: ['garage-slabs-foundations', 'concrete-ramps', 'concrete-repair-replacement'],
  },
];

export const SERVICE_MAP = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));

export const SERVICE_CATEGORIES = ['Concrete', 'Brick Pavers', 'Repair', 'Commercial'];

export const FEATURED_SERVICES = SERVICES.filter((s) => s.featured);

export function getService(slug) {
  return SERVICE_MAP[slug] || null;
}
