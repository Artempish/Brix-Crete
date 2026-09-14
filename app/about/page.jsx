import Link from 'next/link';
import { PageHero, CtaBand, WhyUs, ReviewsSection } from '@/components/sections';
import { Section, Heading, Reveal, Checks } from '@/components/ui';
import { BreadcrumbSchema } from '@/components/schema';
import { ArtSlab } from '@/components/art';
import { Arrow, Check, Info } from '@/components/icons';
import { BUSINESS, CITY_STATE } from '@/data/business';
import { AREAS } from '@/data/areas';

export const metadata = {
  title: 'About Us',
  description:
    'Brix & Crete is a concrete and brick paving contractor based in Elmhurst, IL. One in-house crew, no subcontractors, built for Chicagoland freeze–thaw.',
  alternates: { canonical: '/about' },
};

const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'About' }];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={CRUMBS} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow={`Based in ${CITY_STATE}`}
        title="We do our own work"
        lede="Demolition, grading, forming, pouring, finishing. Same crew, same trucks, start to finish — which is the whole reason our schedule holds and there is nobody to point at when something needs correcting."
      />

      <Section>
        <div className="split split--lead" style={{ alignItems: 'start' }}>
          <div className="stack" style={{ '--gap': '20px' }}>
            <p className="lede">
              Most of the concrete problems in the western suburbs are not caused by bad
              concrete. They are caused by a base nobody compacted, reinforcement lying on
              the dirt doing nothing, and joints cut two days late.
            </p>
            <p className="body">
              Those are not accidents. They are what happens when a job gets handed to
              whichever sub is available that week, on a price that only works if
              somebody skips a step. The base is the easiest place to skip a step,
              because it is the one part of the job the customer never sees.
            </p>
            <p className="body">
              We built the company around not doing that. One crew, our own equipment,
              and a written scope that says in inches what you are getting — so the part
              you cannot see is the part we put in writing.
            </p>
            <p className="body">
              We work a deliberately tight radius around {BUSINESS.address.city}. Partly
              because Chicagoland soil and freeze–thaw is a specific problem we have spent
              a long time learning, and partly because being twenty minutes away means we
              can come back out for a warranty call without it being a whole day.
            </p>
          </div>

          <Reveal>
            <div style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid hsl(var(--line))', boxShadow: 'var(--shadow-3)' }}>
              <div style={{ aspectRatio: '4 / 3' }}><ArtSlab /></div>
            </div>
            <p className="tiny" style={{ marginTop: 14, textAlign: 'center' }}>
              A slab in section: compacted base, vapour barrier, reinforcement held up on chairs.
            </p>
          </Reveal>
        </div>
      </Section>

      <WhyUs />

      <Section>
        <div className="split split--trail" style={{ alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 110 }}>
            <Heading
              eyebrow="How we work"
              title="Things we will not do"
              lede="A short list, and the reason we lose some bids."
            />
          </div>
          <div className="grid" style={{ '--gap': '16px' }}>
            {[
              ['We will not pour over your old driveway.', 'An overlay inherits every crack and soft spot underneath it and usually creates a drainage problem at the garage. It is cheaper today and it is not a driveway.'],
              ['We will not skip the base to hit a number.', 'If a budget only works by cutting the base, we will tell you the honest price and let you decide, rather than build something that fails in five winters with our name on it.'],
              ['We will not invent a reason to replace something.', 'A settled but intact slab can usually be lifted for a fraction of replacement. A hairline crack inside a joint is normal. We will say so even when saying so costs us the job.'],
              ['We will not put fake reviews on this website.', 'Ask us for references when we come out and we will give you addresses in your town you can go and look at yourself.'],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 70}>
                <div className="card">
                  <h3 className="h4">{t}</h3>
                  <p className="small" style={{ marginTop: 8 }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section dark inset tight>
        <Heading
          center
          eyebrow="Coverage"
          title={`Twenty-five minutes from ${BUSINESS.address.city}`}
          lede="Close enough to show up for a small job, and close enough to come back if something needs putting right."
        />
        <div className="pill-list" style={{ justifyContent: 'center', marginTop: 34 }}>
          {AREAS.map((a) => <Link key={a.slug} href={`/service-areas/${a.slug}`}>{a.city}</Link>)}
        </div>
      </Section>

      <ReviewsSection tight />
      <CtaBand />
    </>
  );
}
