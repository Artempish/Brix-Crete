import Link from 'next/link';
import { PageHero, ReviewsSection, CtaBand } from '@/components/sections';
import { Section, Heading, Checks } from '@/components/ui';
import { BreadcrumbSchema } from '@/components/schema';
import { Arrow, Phone, Info } from '@/components/icons';
import { REVIEWS } from '@/data/content';
import { BUSINESS } from '@/data/business';

export const metadata = {
  title: 'Reviews & References',
  description:
    'References from real Brix & Crete customers across Elmhurst and the western suburbs — including addresses you can go and look at yourself.',
  alternates: { canonical: '/reviews' },
  robots: REVIEWS.length ? undefined : { index: false, follow: true },
};

const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Reviews' }];

export default function ReviewsPage() {
  return (
    <>
      <BreadcrumbSchema items={CRUMBS} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="References"
        title="We would rather give you an address than a quote"
        lede="Anybody can write a five-star review into a website. Nobody can fake a driveway two streets over that has been through four winters."
      />

      <Section>
        <div className="card card--pad-lg" style={{ maxWidth: 820, marginInline: 'auto' }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>How to check us out properly</p>
          <h2 className="h2">Four things worth doing before you hire anyone</h2>
          <div style={{ marginTop: 26 }}>
            <Checks
              items={[
                'Ask for three addresses in your town, and go and look at them. Look at the joints, the edges and whether the surface has scaled.',
                'Ask how old each one is. Anything can look good at six months; the question is how it looks at year five.',
                'Ask for the certificate of insurance to come directly from the carrier, not as a PDF forwarded by the contractor.',
                'Ask all three bidders for slab thickness, base depth and reinforcement in writing, then compare those before you compare prices.',
              ]}
            />
          </div>
          <p className="form-note" style={{ marginTop: 26 }}>
            <Info s={15} />
            <span>
              We will hand you references on the estimate visit without being asked. If a
              contractor gets cagey about this, that is the answer.
            </span>
          </p>
          <div className="row" style={{ '--gap': '12px', marginTop: 28 }}>
            <a href={BUSINESS.phoneHref} className="btn btn--lg"><Phone s={17} /> {BUSINESS.phone}</a>
            <Link href="/estimate" className="btn btn--ghost btn--lg">Book an estimate <Arrow s={16} /></Link>
          </div>
        </div>
      </Section>

      {REVIEWS.length > 0 && <ReviewsSection />}
      <CtaBand />
    </>
  );
}
