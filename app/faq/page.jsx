import Link from 'next/link';
import { PageHero, CtaBand } from '@/components/sections';
import { Section, Heading, Accordion } from '@/components/ui';
import { BreadcrumbSchema, FaqSchema } from '@/components/schema';
import { Arrow, Phone } from '@/components/icons';
import { FAQS } from '@/data/content';
import { SERVICES } from '@/data/services';
import { BUSINESS } from '@/data/business';

export const metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Concrete costs, cure times, cracking, salt damage, permits, warranties and comparing bids — straight answers from a Chicagoland concrete contractor.',
  alternates: { canonical: '/faq' },
};

const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'FAQ' }];

// Every service FAQ, gathered under its service heading.
const BY_SERVICE = SERVICES.filter((s) => s.faqs?.length);

export default function FaqPage() {
  const all = [...FAQS, ...BY_SERVICE.flatMap((s) => s.faqs)];

  return (
    <>
      <BreadcrumbSchema items={CRUMBS} />
      <FaqSchema items={all} />

      <PageHero
        crumbs={CRUMBS}
        eyebrow="Questions"
        title="Straight answers, including the unhelpful ones"
        lede="Some of these will talk you out of spending money with us. We would rather you knew now."
      />

      <Section>
        <div className="split split--trail" style={{ alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 110 }}>
            <Heading eyebrow="General" title="Cost, timing and how concrete behaves" />
            <div className="card" style={{ marginTop: 28 }}>
              <p className="h4">Still stuck?</p>
              <p className="small" style={{ marginTop: 8 }}>
                Call and describe what you are looking at. We answer this kind of question
                all day and there is no charge for it.
              </p>
              <a href={BUSINESS.phoneHref} className="btn btn--block" style={{ marginTop: 16 }}>
                <Phone s={16} /> {BUSINESS.phone}
              </a>
            </div>
          </div>
          <Accordion items={FAQS} defaultOpen={0} />
        </div>
      </Section>

      <Section dark inset>
        <Heading
          eyebrow="By service"
          title="Questions about specific work"
          lede="The same questions that appear on each service page, gathered in one place."
        />
        <div className="grid grid-2" style={{ '--gap': '40px', marginTop: 46 }}>
          {BY_SERVICE.map((s) => (
            <div key={s.slug}>
              <h3 className="h3" style={{ marginBottom: 6 }}>
                <Link href={`/services/${s.slug}`} style={{ textDecoration: 'none' }}>{s.name}</Link>
              </h3>
              <Accordion items={s.faqs} />
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
