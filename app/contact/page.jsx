import Link from 'next/link';
import { PageHero } from '@/components/sections';
import { Section, Heading } from '@/components/ui';
import { EstimateForm } from '@/components/estimate-form';
import { BreadcrumbSchema } from '@/components/schema';
import { Phone, Mail, Pin, Clock } from '@/components/icons';
import { BUSINESS, CITY_STATE } from '@/data/business';
import { AREAS, ALSO_SERVED } from '@/data/areas';

export const metadata = {
  title: 'Contact Us',
  description:
    'Call, email or send us your project details. Brix & Crete — concrete and brick paving in Elmhurst, IL and the western suburbs.',
  alternates: { canonical: '/contact' },
};

const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Contact' }];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={CRUMBS} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Get in touch"
        title="Talk to the people who will be on your job"
        lede="No call centre, no lead broker. The number below rings the office, and the person who answers it can tell you when we could be on your street."
        actions={false}
      />

      <Section>
        <div className="split split--trail" style={{ alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 110 }}>
            <div className="card card--pad-lg">
              <h2 className="h3">Direct</h2>
              <ul className="stack" style={{ '--gap': '18px', marginTop: 22 }}>
                <li className="row" style={{ '--gap': '13px', alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                  <span className="menu__icon"><Phone s={17} /></span>
                  <span>
                    <span className="tiny" style={{ display: 'block' }}>Phone</span>
                    <a href={BUSINESS.phoneHref} style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-.02em' }}>
                      {BUSINESS.phone}
                    </a>
                  </span>
                </li>
                <li className="row" style={{ '--gap': '13px', alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                  <span className="menu__icon"><Mail s={17} /></span>
                  <span>
                    <span className="tiny" style={{ display: 'block' }}>Email</span>
                    <a href={`mailto:${BUSINESS.email}`} style={{ fontWeight: 700 }}>{BUSINESS.email}</a>
                  </span>
                </li>
                <li className="row" style={{ '--gap': '13px', alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                  <span className="menu__icon"><Pin s={17} /></span>
                  <span>
                    <span className="tiny" style={{ display: 'block' }}>Based in</span>
                    <span style={{ fontWeight: 700 }}>{CITY_STATE}</span>
                    <span className="small" style={{ display: 'block', marginTop: 3 }}>
                      Serving DuPage County &amp; western Cook
                    </span>
                  </span>
                </li>
                <li className="row" style={{ '--gap': '13px', alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                  <span className="menu__icon"><Clock s={17} /></span>
                  <span>
                    <span className="tiny" style={{ display: 'block' }}>Hours</span>
                    {BUSINESS.hours.map((h) => (
                      <span key={h.days} className="small" style={{ display: 'block' }}>
                        <strong style={{ color: 'hsl(var(--ink))' }}>{h.days}</strong> — {h.time}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
              <p className="tiny" style={{ marginTop: 22, paddingTop: 16, borderTop: '1px solid hsl(var(--line))' }}>
                {BUSINESS.licenseNote}
              </p>
            </div>

            <div className="card" style={{ marginTop: 20 }}>
              <h2 className="h4">Towns we cover</h2>
              <div className="pill-list" style={{ marginTop: 14 }}>
                {AREAS.slice(0, 10).map((a) => (
                  <Link key={a.slug} href={`/service-areas/${a.slug}`}>{a.city}</Link>
                ))}
              </div>
              <p className="tiny" style={{ marginTop: 14 }}>
                Plus {ALSO_SERVED.length}+ more —{' '}
                <Link href="/service-areas" style={{ color: 'hsl(var(--clay))', fontWeight: 700 }}>full list</Link>.
              </p>
            </div>
          </div>

          <div>
            <Heading eyebrow="Or send the details" title="Tell us about the project" />
            <div style={{ marginTop: 28 }}>
              <EstimateForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
