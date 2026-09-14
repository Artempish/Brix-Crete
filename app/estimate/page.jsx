import Link from 'next/link';
import { EstimateForm } from '@/components/estimate-form';
import { PageHero } from '@/components/sections';
import { Section, Heading, Checks, Accordion } from '@/components/ui';
import { BreadcrumbSchema } from '@/components/schema';
import { Phone, Mail, Clock, Check } from '@/components/icons';
import { BUSINESS, CITY_STATE } from '@/data/business';

export const metadata = {
  title: 'Get a Free Concrete Estimate',
  description:
    'Free on-site concrete and paving estimates across Elmhurst and the western suburbs. Fixed written pricing with slab thickness, base depth and reinforcement spelled out.',
  alternates: { canonical: '/estimate' },
};

const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Get an estimate' }];

const WHAT_YOU_GET = [
  'Someone on site inside two business days, not a price over the phone.',
  'Slab thickness, base depth, reinforcement and joint layout in writing.',
  'A fixed price — not a range that grows once the old slab comes out.',
  'An honest answer if the work can safely wait another season.',
  'No deposit taken until you have the written scope in hand.',
];

export default function EstimatePage() {
  return (
    <>
      <BreadcrumbSchema items={CRUMBS} />

      <PageHero
        crumbs={CRUMBS}
        eyebrow="Free · No obligation"
        title="Get a fixed price, in writing"
        lede="Answer four quick questions and we will come out and measure. Most estimates are back in your inbox within 48 hours of the visit."
        actions={false}
      />

      <Section>
        <div className="split split--trail" style={{ alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 110 }}>
            <Heading eyebrow="What you get" title="No sales visit. A measurement." />
            <div style={{ marginTop: 26 }}>
              <Checks items={WHAT_YOU_GET} />
            </div>

            <div className="card" style={{ marginTop: 32 }}>
              <p className="eyebrow eyebrow--plain" style={{ marginBottom: 14 }}>Rather just call?</p>
              <ul className="stack small" style={{ '--gap': '13px' }}>
                <li className="row" style={{ '--gap': '10px', flexWrap: 'nowrap' }}>
                  <Phone s={16} />
                  <a href={BUSINESS.phoneHref} style={{ fontWeight: 700, fontSize: '1.02rem' }}>{BUSINESS.phone}</a>
                </li>
                <li className="row" style={{ '--gap': '10px', flexWrap: 'nowrap' }}>
                  <Mail s={16} /><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                </li>
                <li className="row" style={{ '--gap': '10px', alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                  <span style={{ marginTop: 2 }}><Clock s={16} /></span>
                  <span>
                    {BUSINESS.hours.map((h) => (
                      <span key={h.days} style={{ display: 'block' }}>{h.days}: {h.time}</span>
                    ))}
                  </span>
                </li>
              </ul>
              <p className="tiny" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid hsl(var(--line))' }}>
                Based in {CITY_STATE}. {BUSINESS.licenseNote}
              </p>
            </div>
          </div>

          <EstimateForm />
        </div>
      </Section>

      <Section dark inset tight>
        <Heading
          center
          eyebrow="Before you book three bids"
          title="Bring the same questions to everybody"
          lede="Whoever you end up hiring, these four questions will tell you more than the price will."
        />
        <div style={{ maxWidth: 760, marginInline: 'auto', marginTop: 36 }}>
          <Accordion
            items={[
              { q: 'How thick is the slab, in inches?', a: 'Four inches is the common residential minimum. Five is what a driveway carrying vehicles should be. The difference in material cost is small; the difference in lifespan is not.' },
              { q: 'How deep is the base, and is it compacted in lifts?', a: 'Stone dumped in and raked flat is not a base. It has to go in in layers with a plate compactor run over each one. If the answer is vague, the base is where their price is coming from.' },
              { q: 'What reinforcement, and how is it held up?', a: 'Wire mesh lying on the ground does nothing — it needs to sit in the middle of the slab on chairs. Rebar on chairs is better. "We use fiber" is an answer for some slabs and not for a driveway.' },
              { q: 'When are the control joints cut, and how far apart?', a: 'Within 12 to 24 hours of the pour, at roughly 10 to 12 feet on a driveway. Cut too late or spaced too wide and the slab cracks wherever it likes, which is usually across the middle.' },
            ]}
            defaultOpen={0}
          />
        </div>
        <p className="small center" style={{ marginTop: 28, maxWidth: '62ch', marginInline: 'auto' }}>
          We would genuinely rather you hired a good competitor than a bad one. Concrete
          done badly is a problem for the whole trade.
        </p>
      </Section>
    </>
  );
}
