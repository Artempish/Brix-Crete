import Link from 'next/link';
import { BrandLockup } from './brand';
import { Phone, Mail, Pin, Clock, Icon } from './icons';
import { BUSINESS, CITY_STATE } from '@/data/business';
import { SERVICES } from '@/data/services';
import { AREAS, ALSO_SERVED } from '@/data/areas';

export function Footer() {
  const year = new Date().getFullYear();
  const socials = BUSINESS.socials.filter((s) => s.href);

  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__grid">
          <div>
            <div style={{ color: 'hsl(var(--ink-invert))' }}><BrandLockup onDark /></div>
            <p className="small" style={{ color: 'hsl(32 8% 70%)', marginTop: 18, maxWidth: '40ch' }}>
              Concrete and brick paving across {CITY_STATE} and the western suburbs. One
              in-house crew from demolition through final finish — no subcontractors.
            </p>

            <ul className="stack small" style={{ '--gap': '11px', marginTop: 22, color: 'hsl(32 8% 74%)' }}>
              <li className="row" style={{ '--gap': '10px', flexWrap: 'nowrap' }}>
                <Phone s={16} /><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
              </li>
              <li className="row" style={{ '--gap': '10px', flexWrap: 'nowrap' }}>
                <Mail s={16} /><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
              </li>
              <li className="row" style={{ '--gap': '10px', flexWrap: 'nowrap' }}>
                <Pin s={16} /><span>{CITY_STATE} · serving DuPage &amp; western Cook</span>
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

            {socials.length > 0 && (
              <div className="row" style={{ '--gap': '12px', marginTop: 20 }}>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer noopener">
                    <Icon name={s.icon} s={20} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 className="ftr__h">Concrete</h2>
            <ul className="ftr__list">
              {SERVICES.filter((s) => s.category === 'Concrete').map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="ftr__h">Pavers &amp; more</h2>
            <ul className="ftr__list">
              {SERVICES.filter((s) => s.category !== 'Concrete').map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="ftr__h">Company</h2>
            <ul className="ftr__list">
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/process">How we build</Link></li>
              <li><Link href="/gallery">Our work</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/service-areas">Service areas</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/estimate">Get an estimate</Link></li>
            </ul>
          </div>
        </div>

        <div style={{ paddingBottom: 34 }}>
          <h2 className="ftr__h">Where we work</h2>
          <div className="ftr__areas">
            {AREAS.map((a) => (
              <Link key={a.slug} href={`/service-areas/${a.slug}`}>{a.city}</Link>
            ))}
          </div>
          <p className="tiny" style={{ color: 'hsl(32 8% 52%)', marginTop: 14, maxWidth: '90ch' }}>
            Also serving {ALSO_SERVED.join(', ')} and the surrounding communities.
          </p>
        </div>

        <div className="ftr__bottom">
          <p>© {year} {BUSINESS.legalName}. {BUSINESS.licenseNote}</p>
          <div className="row" style={{ '--gap': '18px' }}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
