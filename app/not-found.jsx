import Link from 'next/link';
import { Section } from '@/components/ui';
import { Arrow, Phone } from '@/components/icons';
import { BUSINESS } from '@/data/business';
import { FEATURED_SERVICES } from '@/data/services';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <Section>
      <div className="center" style={{ maxWidth: 680, marginInline: 'auto', paddingBlock: 40 }}>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>404</p>
        <h1 className="h1" style={{ marginTop: 16 }}>That page is not here</h1>
        <p className="lede" style={{ marginTop: 16 }}>
          It may have moved, or the link may be wrong. Here is where most people are headed.
        </p>
        <div className="pill-list" style={{ justifyContent: 'center', marginTop: 32 }}>
          {FEATURED_SERVICES.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>
          ))}
        </div>
        <div className="row" style={{ justifyContent: 'center', '--gap': '12px', marginTop: 32 }}>
          <Link href="/" className="btn btn--lg">Back to the homepage <Arrow s={16} /></Link>
          <a href={BUSINESS.phoneHref} className="btn btn--ghost btn--lg"><Phone s={17} /> {BUSINESS.phone}</a>
        </div>
      </div>
    </Section>
  );
}
