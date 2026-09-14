import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, ServiceCard, CtaBand, TrustStrip } from '@/components/sections';
import { Section, Heading, Reveal, Checks, Accordion } from '@/components/ui';
import { BreadcrumbSchema, FaqSchema } from '@/components/schema';
import { Arrow, Phone, Pin, Info, Check } from '@/components/icons';
import { AREAS, getArea } from '@/data/areas';
import { SERVICES, FEATURED_SERVICES } from '@/data/services';
import { PROCESS } from '@/data/content';
import { BUSINESS } from '@/data/business';

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const a = getArea(params.slug);
  if (!a) return {};
  const title = `Concrete Contractor in ${a.city}, IL`;
  const description = `Concrete driveways, patios, walkways, steps and brick pavers in ${a.city}, ${a.county}. Free on-site estimates, fixed written pricing, one in-house crew.`;
  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${a.slug}` },
    openGraph: { title, description, url: `/service-areas/${a.slug}` },
  };
}

export default function AreaPage({ params }) {
  const a = getArea(params.slug);
  if (!a) notFound();

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service areas', href: '/service-areas' },
    { label: a.city },
  ];

  const faqs = [
    {
      q: `Do you charge extra to come out to ${a.city}?`,
      a: `No. ${a.city} is inside our normal working radius from ${BUSINESS.address.city}, and estimates are free with no travel fee and no obligation.`,
    },
    {
      q: `Do you handle ${a.city} permits?`,
      a: a.permit,
    },
    {
      q: `How soon could you start in ${a.city}?`,
      a: 'It depends on the season — spring and early summer book out furthest. Call and we will tell you our real next opening rather than pencilling you in and moving you twice.',
    },
    {
      q: `Will you take on a small job in ${a.city}?`,
      a: `Yes, particularly if we are already working nearby that week. A set of steps, one settled walk section or a small pad is usually easy to slot in — ask and we will tell you honestly whether it is worth a separate mobilisation.`,
    },
  ];

  const others = AREAS.filter((x) => x.slug !== a.slug).slice(0, 12);

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FaqSchema items={faqs} />

      <PageHero
        crumbs={crumbs}
        eyebrow={a.county}
        title={`Concrete & brick paving in ${a.city}, IL`}
        lede={a.blurb}
      />

      <TrustStrip />

      {/* ---------------------------------------------------- local angle --- */}
      <Section>
        <div className="split split--lead" style={{ alignItems: 'start' }}>
          <div>
            <Heading eyebrow={`${a.city} specifics`} title={`What concrete in ${a.city} is actually up against`} />
            <p className="lede" style={{ marginTop: 22 }}>{a.angle}</p>

            <div className="card card--sunken card--flat" style={{ padding: '20px 22px', marginTop: 28 }}>
              <p className="row small" style={{ '--gap': '11px', alignItems: 'flex-start', flexWrap: 'nowrap', margin: 0 }}>
                <span style={{ marginTop: 2, color: 'hsl(var(--clay))' }}><Info s={16} /></span>
                <span>
                  <strong style={{ color: 'hsl(var(--ink))', display: 'block', marginBottom: 4 }}>Permits in {a.city}</strong>
                  {a.permit}
                </span>
              </p>
            </div>

            <div className="row" style={{ '--gap': '12px', marginTop: 28 }}>
              <Link href="/estimate" className="btn">Get a {a.city} estimate <Arrow s={16} /></Link>
              <a href={BUSINESS.phoneHref} className="btn btn--ghost"><Phone s={16} /> {BUSINESS.phone}</a>
            </div>
          </div>

          <Reveal>
            <div className="card card--pad-lg">
              <p className="eyebrow" style={{ marginBottom: 16 }}>Neighbourhoods &amp; landmarks</p>
              <h2 className="h3" style={{ marginBottom: 18 }}>Parts of {a.city} we work in</h2>
              <ul className="stack" style={{ '--gap': '0' }}>
                {a.known.map((n) => (
                  <li key={n} className="row" style={{ '--gap': '11px', flexWrap: 'nowrap', padding: '13px 0', borderBottom: '1px solid hsl(var(--line))' }}>
                    <Pin s={16} /><span style={{ fontWeight: 600 }}>{n}</span>
                  </li>
                ))}
              </ul>
              <p className="tiny" style={{ marginTop: 18 }}>
                Everywhere else in {a.city} too — this is not a list of limits.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------- services --- */}
      <Section dark inset>
        <Heading
          eyebrow="Services"
          title={`What we build in ${a.city}`}
          lede="Same spec everywhere we work: compacted base, reinforcement held up off the ground, joints cut on the right spacing, and a fixed written price."
        />
        <div className="grid grid-3" style={{ '--gap': '22px', marginTop: 42 }}>
          {FEATURED_SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 70}><ServiceCard s={s} /></Reveal>
          ))}
        </div>
        <div className="row" style={{ justifyContent: 'center', marginTop: 40 }}>
          <Link href="/services" className="btn btn--on-dark btn--lg">All {SERVICES.length} services <Arrow s={16} /></Link>
        </div>
      </Section>

      {/* -------------------------------------------------------- process --- */}
      <Section tight>
        <div className="split split--lead" style={{ alignItems: 'start' }}>
          <div>
            <Heading eyebrow="How it goes" title={`Booking a job in ${a.city}`} />
            <p className="body" style={{ marginTop: 20 }}>
              Same process everywhere, no surprises. The full breakdown is on the{' '}
              <Link href="/process" style={{ color: 'hsl(var(--clay))', fontWeight: 700 }}>how we build</Link> page.
            </p>
          </div>
          <ol className="steps">
            {PROCESS.slice(0, 4).map((p) => (
              <li className="step" key={p.t}>
                <span className="step__n" aria-hidden />
                <div>
                  <h3 className="h4">{p.t}</h3>
                  <p className="small" style={{ marginTop: 6 }}>{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ------------------------------------------------------------ faq --- */}
      <Section>
        <div className="split split--trail" style={{ alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 110 }}>
            <Heading eyebrow="Questions" title={`Working in ${a.city}`} />
          </div>
          <Accordion items={faqs} defaultOpen={0} />
        </div>
      </Section>

      {/* -------------------------------------------------------- nearby --- */}
      <Section tight>
        <Heading center eyebrow="Nearby" title="Other towns we cover" />
        <div className="pill-list" style={{ justifyContent: 'center', marginTop: 30 }}>
          {others.map((o) => (
            <Link key={o.slug} href={`/service-areas/${o.slug}`}>{o.city}</Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title={`Get a free estimate in ${a.city}`}
        lede="We come out, measure it, and put a fixed written price in front of you — including the slab thickness, base depth and reinforcement."
      />
    </>
  );
}
