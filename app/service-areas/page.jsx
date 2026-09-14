import Link from 'next/link';
import { PageHero, CtaBand } from '@/components/sections';
import { Section, Heading, Reveal } from '@/components/ui';
import { BreadcrumbSchema } from '@/components/schema';
import { Arrow, Pin } from '@/components/icons';
import { AREAS, ALSO_SERVED } from '@/data/areas';
import { BUSINESS, CITY_STATE } from '@/data/business';

export const metadata = {
  title: 'Service Areas — DuPage County & Western Cook',
  description:
    'Brix & Crete serves Elmhurst, Oak Brook, Hinsdale, Chicago, Naperville, Downers Grove, La Grange and the surrounding western suburbs.',
  alternates: { canonical: '/service-areas' },
};

const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Service areas' }];

export default function AreasPage() {
  return (
    <>
      <BreadcrumbSchema items={CRUMBS} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Coverage"
        title="DuPage County and western Cook"
        lede={`We are based in ${CITY_STATE} and we work a tight radius on purpose. A short drive means we can show up for a small job, get back out for a warranty call, and keep the same crew on your street all week.`}
      />

      <Section>
        <Heading
          eyebrow="Towns"
          title="Where we work most"
          lede="Each of these has its own page, because the concrete problems are genuinely different from town to town — soil, tree cover, housing era and what the village will let you do."
        />
        <div className="grid grid-3" style={{ '--gap': '20px', marginTop: 44 }}>
          {AREAS.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 60}>
              <Link href={`/service-areas/${a.slug}`} className="card card--hover" style={{ display: 'block', height: '100%' }}>
                <div className="row" style={{ '--gap': '10px', flexWrap: 'nowrap', alignItems: 'flex-start' }}>
                  <span className="menu__icon" style={{ marginTop: 2 }}><Pin s={16} /></span>
                  <span>
                    <strong className="h3" style={{ display: 'block' }}>
                      {a.city}{a.home && <span className="badge badge--solid" style={{ marginLeft: 9, fontSize: '.66rem', padding: '3px 9px' }}>Home base</span>}
                    </strong>
                    <span className="tiny" style={{ display: 'block', marginTop: 3 }}>{a.county}</span>
                  </span>
                </div>
                <p className="small" style={{ marginTop: 14 }}>{a.blurb}</p>
                <span className="link-arrow" style={{ marginTop: 16 }}>
                  {a.city} concrete <Arrow s={15} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section dark inset tight>
        <Heading center eyebrow="Also served" title="And the towns in between" lede="No dedicated page, same crew, same spec. If you are within about a 25-minute drive of Elmhurst, call and ask." />
        <div className="pill-list" style={{ justifyContent: 'center', marginTop: 34 }}>
          {ALSO_SERVED.map((c) => <span key={c}>{c}</span>)}
        </div>
      </Section>

      <CtaBand
        title="Not sure if you are in range?"
        lede="Call and tell us the cross streets. If we cannot get to you we will say so straight away rather than book a visit and cancel it."
      />
    </>
  );
}
