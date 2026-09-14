// ============================================================================
// Service areas. Each entry generates /service-areas/<slug>.
// The `angle` copy is what keeps these pages from reading as the same page with
// the town name swapped — write it per town or delete the town.
// ============================================================================

export const AREAS = [
  {
    slug: 'elmhurst-il',
    city: 'Elmhurst',
    county: 'DuPage County',
    home: true,
    blurb: 'Our home village. Most weeks you will find one of our crews inside the city limits.',
    angle:
      'Elmhurst has two concrete problems at once. North of the tracks there is a lot of original post-war flatwork still in the ground, poured thin and without a base, now at the end of its life. And across the newer teardown streets there are five-year-old driveways already scaling, because they were poured fast on a builder schedule and salted their first winter.',
    known: ['Downtown Elmhurst', 'Crescent Park', 'Elmhurst College area', 'Van Buren corridor', 'Berens Park'],
    permit: 'Elmhurst requires a permit for driveway replacement, widening, and any work in the public right-of-way. We pull it and meet the inspector.',
  },
  {
    slug: 'oak-brook-il',
    city: 'Oak Brook',
    county: 'DuPage County',
    blurb: 'Large-lot residential and commercial campuses, where the finish detail gets scrutinised.',
    angle:
      'Oak Brook jobs tend to be long runs — circular drives, extended approach walks, and courtyard patios — where any wave in the surface or drift in the joint spacing is visible from fifty feet away. It is also a village with real design review, so we quote the finish and colour as specifically as the concrete.',
    known: ['Oak Brook Center area', 'Ginger Creek', 'Fullersburg', 'York Woods', 'Oak Brook Club'],
    permit: 'Oak Brook enforces setback and impervious-surface limits strictly. We check lot coverage before quoting any expansion.',
  },
  {
    slug: 'hinsdale-il',
    city: 'Hinsdale',
    county: 'DuPage County',
    blurb: 'Historic housing stock where new work has to look like it belongs.',
    angle:
      'In Hinsdale the constraint is usually aesthetic. A modern broom-finish walk in front of a 1920s house looks wrong, and the historic district will tell you so. Most of our Hinsdale work is clay paver or a stamped and tinted finish chosen to read older than it is, with borders that pick up the existing brick.',
    known: ['Historic District', 'Robbins Park', 'Woodlands', 'Golfview Hills', 'The Lane'],
    permit: 'Work in the historic district can trigger additional review. Build the review window into your timeline — we will flag it during the estimate.',
  },
  {
    slug: 'chicago-il',
    city: 'Chicago',
    county: 'Cook County',
    blurb: 'City lots, gangways, alley aprons and garage slabs on the west and northwest sides.',
    angle:
      'City work is its own trade. The lots are narrow, the access is through a gangway or off an alley, and half the job is getting material in and spoils out without a driveway to stage on. We wheelbarrow and buggy where a truck cannot reach, and we know the Chicago permit process for aprons and garage slabs.',
    known: ['Portage Park', 'Jefferson Park', 'Dunning', 'Galewood', 'Norwood Park', 'Belmont Cragin'],
    permit: 'Chicago requires a public way permit for apron and sidewalk work, and a permit for most garage slabs. Lead times are longer than the suburbs.',
  },
  {
    slug: 'naperville-il',
    city: 'Naperville',
    county: 'DuPage County',
    blurb: 'Large subdivisions where the original builder concrete is now aging out together.',
    angle:
      'Naperville subdivisions were built in waves, which means whole streets hit the end of their driveway life in the same two or three years. If your neighbours are replacing, the odds are yours is on the same clock. We are happy to quote several houses on a street in one visit — it is cheaper for everyone when the trucks only come once.',
    known: ['Downtown Naperville', 'Cress Creek', 'Ashbury', 'White Eagle', 'Hobson West'],
    permit: 'Naperville requires a permit for driveway replacement and any right-of-way work, with a survey on file for widenings.',
  },
  {
    slug: 'downers-grove-il',
    city: 'Downers Grove',
    county: 'DuPage County',
    blurb: 'Mature trees, mature root systems, and a lot of lifted flatwork.',
    angle:
      'Downers Grove has beautiful old parkway trees, and those trees are why so many walks and driveway edges in the village are heaved. Cutting the roots is not always the answer — sometimes the right call is a slab redesign that spans or routes around the root zone. We look at the tree before we quote the concrete.',
    known: ['Downtown Downers Grove', 'Denburn Woods', 'Hillcrest', 'Lacey', 'Prince Pond'],
    permit: 'Downers Grove requires a permit for driveway and right-of-way work; parkway tree protection rules apply near mature trees.',
  },
  {
    slug: 'la-grange-il',
    city: 'La Grange',
    county: 'Cook County',
    blurb: 'Tight village lots and a lot of original clay brick to match.',
    angle:
      'La Grange lots are narrow enough that the driveway, the service walk and the gangway are effectively one continuous piece of flatwork, and replacing one without planning the others is how you end up with three different finishes and two trip hazards. We tend to quote the whole side of the house here even when you only asked about the driveway.',
    known: ['Historic District', 'Gold Coast', 'Gilbert Park', 'Gossell Park'],
    permit: 'La Grange requires permits for driveway and sidewalk work and enforces its sidewalk replacement standard closely.',
  },
  {
    slug: 'lombard-il',
    city: 'Lombard',
    county: 'DuPage County',
    blurb: 'Post-war ranches with original driveways well past their service life.',
    angle:
      'A lot of Lombard driveways are still the ones poured when the house was built, at three and a half inches on bare soil. They have done sixty years, which is more than they were built for. When we tear one out you can usually see exactly why it lasted — or why it did not — in the first shovel of what is underneath.',
    known: ['Downtown Lombard', 'Lilacia Park area', 'Yorktown area', 'Terrace View'],
    permit: 'Lombard requires a permit for driveway replacement and any work in the public right-of-way.',
  },
  {
    slug: 'villa-park-il',
    city: 'Villa Park',
    county: 'DuPage County',
    blurb: 'Next door to us, and a village we are in most weeks.',
    angle:
      'Villa Park sits right on our doorstep, which means small jobs are viable here that would not pencil out an hour away — a single settled walk section, a set of front steps, a pad for a new AC unit. If it is a half-day of work, we can usually fit it into a week we are already working in the village.',
    known: ['Ardmore', 'Villa Avenue corridor', 'Jackson Middle School area', 'Sugar Creek'],
    permit: 'Villa Park requires a permit for driveway and right-of-way work.',
  },
  {
    slug: 'berwyn-il',
    city: 'Berwyn',
    county: 'Cook County',
    blurb: 'Bungalow belt — gangways, alley garages and original brick everywhere.',
    angle:
      'Berwyn is bungalows, and bungalows mean gangways, a long service walk down the side of the house, and a garage off the alley. The gangway is usually the worst concrete on the property because it never drains properly and it never gets replaced. It is also the cheapest thing on this list to fix.',
    known: ['Depot District', 'Historic Bungalow District', 'South Berwyn', 'Proksa Park'],
    permit: 'Berwyn requires permits for driveway, apron and sidewalk work.',
  },
  {
    slug: 'brookfield-il',
    city: 'Brookfield',
    county: 'Cook County',
    blurb: 'Older village stock with a lot of original public walk still in place.',
    angle:
      'Brookfield has a large amount of original public sidewalk that the village is working through, and homeowners here regularly get a letter about flagged squares. That work has a defined spec and an inspection, which is straightforward if you have done it before and a headache if you have not.',
    known: ['Hollywood', 'Grossdale', 'Congress Park', 'Brookfield Zoo area'],
    permit: 'Brookfield requires a right-of-way permit for public sidewalk and apron replacement.',
  },
  {
    slug: 'cicero-il',
    city: 'Cicero',
    county: 'Cook County',
    blurb: 'Dense lots, alley access, and a lot of small-footprint flatwork.',
    angle:
      'Cicero work is mostly compact: a gangway, a back stoop, a garage slab off the alley, a small rear pad. Access is the constraint rather than the concrete, so we scope the route in and out before anything else and price around what can physically reach the back of the lot.',
    known: ['Hawthorne', 'Morton Park', 'Boulevard Manor', 'Clyde'],
    permit: 'Cicero requires permits for driveway, apron and public walk work.',
  },
  {
    slug: 'oak-park-il',
    city: 'Oak Park',
    county: 'Cook County',
    blurb: 'Architectural housing stock and a village with opinions about materials.',
    angle:
      'Oak Park cares what the flatwork looks like, and reasonably so given the housing stock. Plain grey broom finish in front of a Prairie-style house is a missed opportunity and sometimes a review problem. Most of what we do here is clay paver, exposed aggregate, or a tinted finish selected against the existing masonry.',
    known: ['Frank Lloyd Wright District', 'Ridgeland Historic District', 'Hemingway District', 'The Avenue'],
    permit: 'Oak Park requires permits for driveway and right-of-way work, with additional review in the historic districts.',
  },
  {
    slug: 'wheaton-il',
    city: 'Wheaton',
    county: 'DuPage County',
    blurb: 'Mixed housing eras and some genuinely difficult grades.',
    angle:
      'Wheaton has real topography by Chicagoland standards, and that changes flatwork. A driveway with meaningful fall needs its drainage solved deliberately, not left to the pitch of the ground, or you end up moving every storm into the garage. We shoot grades here before quoting more often than anywhere else we work.',
    known: ['Downtown Wheaton', 'Arrowhead', 'Briarcliffe', 'Danada', 'Wheaton College area'],
    permit: 'Wheaton requires a permit for driveway replacement and right-of-way work, with grading review on sloped lots.',
  },
  {
    slug: 'glen-ellyn-il',
    city: 'Glen Ellyn',
    county: 'DuPage County',
    blurb: 'Hilly lots, heavy tree cover and a lot of stone and brick to match.',
    angle:
      'Between the grade and the tree cover, Glen Ellyn is a village where drainage and root movement cause most of the flatwork failures we get called about. It is also a place where a lot of houses have existing stone or brick that new concrete has to sit next to, so material selection gets more attention here than the pour does.',
    known: ['Downtown Glen Ellyn', 'Lake Ellyn', 'Stacy Corners', 'Arboretum area'],
    permit: 'Glen Ellyn requires permits for driveway and right-of-way work, plus tree protection near parkway trees.',
  },
  {
    slug: 'lisle-il',
    city: 'Lisle',
    county: 'DuPage County',
    blurb: 'Subdivision housing on a similar replacement clock to Naperville.',
    angle:
      'Lisle subdivisions were built in blocks, and their driveways are aging in blocks too. The upside is scheduling: if we are already pouring on your street, adding your driveway to the same week saves you the mobilisation cost and saves us a trip.',
    known: ['Green Trails', 'Four Lakes', 'Beau Bien', 'Downtown Lisle'],
    permit: 'Lisle requires a permit for driveway replacement and right-of-way work.',
  },
  {
    slug: 'westmont-il',
    city: 'Westmont',
    county: 'DuPage County',
    blurb: 'Mid-century stock with a lot of narrow original driveways.',
    angle:
      'A great many Westmont driveways were poured single-width for a single car, and the most common request we get here is not replacement but widening. That is a different job: the new section has to be tied to the old one properly or the joint between them opens up within two winters.',
    known: ['Downtown Westmont', 'Ty Warner Park area', 'Oakwood', 'Westmont Centre'],
    permit: 'Westmont requires a permit for driveway replacement or widening, with impervious-coverage limits on smaller lots.',
  },
  {
    slug: 'clarendon-hills-il',
    city: 'Clarendon Hills',
    county: 'DuPage County',
    blurb: 'Small village, high expectations, a lot of teardown-and-rebuild activity.',
    angle:
      'Clarendon Hills has seen a lot of rebuilding, which means new houses with builder-grade flatwork sitting next to original 1950s work. We get called for both — finishing out a new build properly, and replacing a sixty-year-old driveway that the new house next door made look worse than it is.',
    known: ['Downtown Clarendon Hills', 'Prospect Park', 'Walker School area'],
    permit: 'Clarendon Hills requires permits for driveway and right-of-way work.',
  },
];

export const AREA_MAP = Object.fromEntries(AREAS.map((a) => [a.slug, a]));

export const HOME_AREA = AREAS.find((a) => a.home) || AREAS[0];

export function getArea(slug) {
  return AREA_MAP[slug] || null;
}

// Extra towns we serve but do not have a dedicated page for — shown as plain
// text so the coverage is honest without inventing thin pages.
export const ALSO_SERVED = [
  'Addison', 'Bensenville', 'Berkeley', 'Bloomingdale', 'Burr Ridge', 'Carol Stream',
  'Darien', 'Elmwood Park', 'Forest Park', 'Hillside', 'Itasca', 'Melrose Park',
  'North Riverside', 'Northlake', 'Riverside', 'River Forest', 'Warrenville',
  'Western Springs', 'Wood Dale', 'Woodridge',
];
