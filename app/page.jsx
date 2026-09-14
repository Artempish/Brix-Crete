import Link from 'next/link';
import { Section, Heading, Reveal, SpecTable, Checks } from '@/components/ui';
import {
  TrustStrip, ServicesGrid, WhyUs, ProcessSteps, GalleryGrid,
  AreasSection, ReviewsSection, FaqSection, CtaBand,
} from '@/components/sections';
import { ArtDriveway } from '@/components/art';
import { Arrow, Phone, Check, Star, Shield, Clock } from '@/components/icons';
import { FaqSchema } from '@/components/schema';
import { BUSINESS, CITY_STATE, HOURS_SUMMARY } from '@/data/business';
import { FEATURED_SERVICES, SERVICES } from '@/data/services';
import { FAQS, GALLERY } from '@/data/content';

export const metadata = {
  title: `Concrete & Brick Paving Contractor in ${CITY_STATE}`,
  description:
    'Concrete driveways, patios, walkways, steps and brick pavers across Elmhurst, Oak Brook, Hinsdale, Chicago and the western suburbs. One in-house crew, fixed written pricing.',
  alternates: { canonical: '/' },
};

/* The numbers that make the difference, shown as a spec card over the hero art. */
const HERO_SPEC = [
  ['Slab', '5 in'],
  ['Base', '6 in'],
  ['Steel', '#4 grid'],
  ['Mix', '4,000 psi'],
];

export default function HomePage() {
  return (
    <>
      <FaqSchema items={FAQS.slice(0, 8)} />

      {/* ------------------------------------------------------------ hero --- */}
      <section className="slab hero">
        <span className="joints" aria-hidden />
        <span className="aggregate" aria-hidden />
        <div className="wrap hero__grid" style={{ position: 'relative' }}>
          <div>
            <p className="eyebrow">Elmhurst, IL · Western suburbs</p>
            <h1 className="display" style={{ marginTop: 18, maxWidth: '13ch' }}>
              Concrete that survives a Chicago winter.
            </h1>
            <p className="lede measure" style={{ marginTop: 22, fontSize: 'clamp(1.1rem, 1.7vw, 1.3rem)' }}>
              Driveways, patios, walkways, steps and brick paving across the western
              suburbs — on a base that is actually compacted, with steel that actually
              sits in the middle of the slab, jointed so the cracks land where we put them.
            </p>

            <div className="row" style={{ '--gap': '12px', marginTop: 30 }}>
              <Link href="/estimate" className="btn btn--lg">Get a free estimate <Arrow s={17} /></Link>
              <a href={BUSINESS.phoneHref} className="btn btn--on-dark btn--lg">
                <Phone s={17} /> {BUSINESS.phone}
              </a>
            </div>

            <div className="hero__proof">
              <span className="badge"><Shield s={15} /> Licensed &amp; insured</span>
              <span className="badge"><Check s={15} /> No subcontractors</span>
              <span className="badge"><Clock s={15} /> On site within 2 business days</span>
            </div>
          </div>

          <Reveal delay={90}>
            <div style={{ position: 'relative', paddingBottom: 'clamp(0px, 3vw, 34px)' }}>
              <div className="hero__art">
                <ArtDriveway />
              </div>

              {/* spec slip — the thing nobody else puts on a homepage */}
              <div className="spec-slip">
                <p className="eyebrow eyebrow--plain" style={{ marginBottom: 12 }}>
                  Our residential driveway spec
                </p>
                <div className="grid grid-2" style={{ '--gap': '10px 14px' }}>
                  {HERO_SPEC.map(([k, v]) => (
                    <div key={k}>
                      <div className="tiny" style={{ marginBottom: 1 }}>{k}</div>
                      <div className="num" style={{ fontSize: '1.02rem', fontWeight: 700, whiteSpace: 'nowrap' }}>{v}</div>
                    </div>
                  ))}
                </div>
                <p className="tiny spec-slip__div" style={{ marginTop: 13, paddingTop: 11 }}>
                  On your written estimate, every time. Ask the other bidder for theirs.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustStrip />

      {/* -------------------------------------------------------- services --- */}
      <ServicesGrid items={FEATURED_SERVICES} all />

      {/* ------------------------------------------- the cheap bid problem --- */}
      <Section dark inset>
        <div className="split split--lead" style={{ alignItems: 'start' }}>
          <div>
            <Heading
              eyebrow="Comparing bids"
              title="Why one quote is $6,000 and the next one is $11,000"
              lede="It is almost never greed, and it is almost never the concrete. It is three numbers that most estimates never write down — and they are the three that decide whether you are buying ten years or thirty."
            />
            <div className="stack" style={{ '--gap': '14px', marginTop: 30 }}>
              <Checks
                items={[
                  'Ask every bidder for slab thickness in inches.',
                  'Ask for base depth and whether it is compacted in lifts.',
                  'Ask what reinforcement is used and how it is held up.',
                  'Get all three in writing before you compare prices.',
                ]}
              />
            </div>
            <p className="small" style={{ marginTop: 24 }}>
              If a contractor will not put those on paper, you have learned something
              useful for free.
            </p>
          </div>

          <Reveal>
            <div className="card card--pad-lg">
              <SpecTable
                caption="A residential driveway, the same square footage, two different builds."
                theirLabel="The cheap bid"
                ourLabel="What we pour"
                rows={[
                  ['Slab thickness', '4 in', '5 in'],
                  ['Sub-base', 'Existing soil', '6 in compacted CA-6'],
                  ['Reinforcement', 'Mesh laid on grade', '#4 rebar grid on chairs'],
                  ['Concrete', '3,000 psi', '4,000 psi, air-entrained'],
                  ['Control joints', 'Cut late, wide spacing', 'Within 24 hrs, 10–12 ft'],
                  ['Expected service life', '8–15 years', '30+ years'],
                ]}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <WhyUs />
      <ProcessSteps limit={5} />

      {/* --------------------------------------------------------- gallery --- */}
      <Section tight>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
          <Heading eyebrow="Recent work" title="Jobs from around the suburbs" />
          <Link href="/gallery" className="btn btn--ghost">See the gallery <Arrow s={16} /></Link>
        </div>
        <GalleryGrid items={GALLERY.slice(0, 6)} />
      </Section>

      <AreasSection />
      <ReviewsSection tight />
      <FaqSection items={FAQS.slice(0, 7)} />
      <CtaBand />
    </>
  );
}
