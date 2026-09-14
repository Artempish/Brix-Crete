'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { BrandLockup } from './brand';
import { Phone, Chevron, Arrow, Icon } from './icons';
import { BUSINESS, HOURS_SUMMARY } from '@/data/business';
import { SERVICES } from '@/data/services';
import { AREAS } from '@/data/areas';

const SERVICE_ICONS = {
  'concrete-driveways': 'truck',
  'concrete-patios': 'grid',
  'stamped-concrete': 'layers',
  'concrete-walkways': 'ruler',
  'concrete-steps': 'steps',
  'concrete-ramps': 'ruler',
  'garage-slabs-foundations': 'layers',
  'retaining-walls': 'building',
  'brick-paver-driveways': 'grid',
  'brick-paver-patios': 'grid',
  'brick-walkways': 'ruler',
  'concrete-repair-replacement': 'wrench',
  'commercial-concrete': 'building',
};

export function Header() {
  const path = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(null);      // 'services' | 'areas' | null
  const [sheet, setSheet] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything on navigation.
  useEffect(() => { setSheet(false); setOpen(null); }, [path]);

  // Lock the page behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = sheet ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sheet]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(null); setSheet(false); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const hoverOpen = (k) => { clearTimeout(closeTimer.current); setOpen(k); };
  const hoverClose = () => { closeTimer.current = setTimeout(() => setOpen(null), 140); };

  const isCurrent = (href) =>
    href === '/' ? path === '/' : path === href || path.startsWith(href + '/');

  return (
    <>
      <div className="strip">
        <div className="wrap strip__inner">
          <span><span className="strip__dot" aria-hidden /> Booking now for the current pour season</span>
          <span aria-hidden style={{ opacity: .3 }}>·</span>
          <span>Free on-site estimates across {BUSINESS.address.city} &amp; the western suburbs</span>
          <span aria-hidden style={{ opacity: .3 }}>·</span>
          <span><b>{HOURS_SUMMARY}</b></span>
        </div>
      </div>

      <header className="hdr" data-stuck={stuck}>
        <div className="wrap hdr__bar">
          <Link href="/" aria-label={`${BUSINESS.name} — home`}>
            <BrandLockup />
          </Link>

          <nav className="hdr__nav" aria-label="Main">
            <div
              className="menu"
              data-open={open === 'services' || undefined}
              onMouseEnter={() => hoverOpen('services')}
              onMouseLeave={hoverClose}
            >
              <Link
                href="/services"
                className="hdr__link"
                aria-current={isCurrent('/services') ? 'page' : undefined}
                aria-expanded={open === 'services'}
                onFocus={() => hoverOpen('services')}
              >
                Services <Chevron s={13} />
              </Link>
              <div className="menu__panel" onMouseEnter={() => hoverOpen('services')} onMouseLeave={hoverClose}>
                <div className="menu__grid">
                  {SERVICES.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="menu__item">
                      <span className="menu__icon"><Icon name={SERVICE_ICONS[s.slug] || 'layers'} s={17} /></span>
                      <span>
                        <strong>{s.name}</strong>
                        <span>{s.category}</span>
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="menu__foot">
                  <span className="small">Not sure which one you need? We will tell you on site.</span>
                  <Link href="/services" className="link-arrow">All services <Arrow s={15} /></Link>
                </div>
              </div>
            </div>

            <div
              className="menu"
              data-open={open === 'areas' || undefined}
              onMouseEnter={() => hoverOpen('areas')}
              onMouseLeave={hoverClose}
            >
              <Link
                href="/service-areas"
                className="hdr__link"
                aria-current={isCurrent('/service-areas') ? 'page' : undefined}
                aria-expanded={open === 'areas'}
                onFocus={() => hoverOpen('areas')}
              >
                Service Areas <Chevron s={13} />
              </Link>
              <div className="menu__panel" onMouseEnter={() => hoverOpen('areas')} onMouseLeave={hoverClose}>
                <div className="menu__grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
                  {AREAS.map((a) => (
                    <Link key={a.slug} href={`/service-areas/${a.slug}`} className="menu__item">
                      <span>
                        <strong>{a.city}</strong>
                        <span>{a.county}</span>
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="menu__foot">
                  <span className="small">Plus {20}+ more towns across DuPage &amp; western Cook.</span>
                  <Link href="/service-areas" className="link-arrow">Full coverage <Arrow s={15} /></Link>
                </div>
              </div>
            </div>

            <Link href="/gallery" className="hdr__link" aria-current={isCurrent('/gallery') ? 'page' : undefined}>Work</Link>
            <Link href="/process" className="hdr__link" aria-current={isCurrent('/process') ? 'page' : undefined}>How We Build</Link>
            <Link href="/about" className="hdr__link" aria-current={isCurrent('/about') ? 'page' : undefined}>About</Link>
            <Link href="/faq" className="hdr__link" aria-current={isCurrent('/faq') ? 'page' : undefined}>FAQ</Link>
          </nav>

          <div className="hdr__actions">
            <a href={BUSINESS.phoneHref} className="btn btn--ghost btn--desktop">
              <Phone s={16} /> {BUSINESS.phone}
            </a>
            <Link href="/estimate" className="btn btn--desktop">Get an estimate</Link>
            <button
              className="burger"
              aria-expanded={sheet}
              aria-label={sheet ? 'Close menu' : 'Open menu'}
              onClick={() => setSheet((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {sheet && (
        <div className="sheet" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="row" style={{ justifyContent: 'space-between', marginBottom: 14 }}>
            <BrandLockup />
            <button className="burger" aria-expanded="true" aria-label="Close menu" onClick={() => setSheet(false)}>
              <span /><span /><span />
            </button>
          </div>

          <Link href="/" className="sheet__link">Home <Arrow s={16} /></Link>

          <details open>
            <summary className="sheet__link" style={{ cursor: 'pointer', listStyle: 'none' }}>
              Services <Chevron s={16} />
            </summary>
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="sheet__sub">{s.name}</Link>
            ))}
          </details>

          <details>
            <summary className="sheet__link" style={{ cursor: 'pointer', listStyle: 'none' }}>
              Service Areas <Chevron s={16} />
            </summary>
            {AREAS.map((a) => (
              <Link key={a.slug} href={`/service-areas/${a.slug}`} className="sheet__sub">{a.city}, IL</Link>
            ))}
          </details>

          <Link href="/gallery" className="sheet__link">Work <Arrow s={16} /></Link>
          <Link href="/process" className="sheet__link">How We Build <Arrow s={16} /></Link>
          <Link href="/about" className="sheet__link">About <Arrow s={16} /></Link>
          <Link href="/faq" className="sheet__link">FAQ <Arrow s={16} /></Link>
          <Link href="/contact" className="sheet__link">Contact <Arrow s={16} /></Link>

          <div className="stack" style={{ '--gap': '10px', marginTop: 26 }}>
            <Link href="/estimate" className="btn btn--lg btn--block">Get a free estimate</Link>
            <a href={BUSINESS.phoneHref} className="btn btn--ghost btn--lg btn--block">
              <Phone s={17} /> {BUSINESS.phone}
            </a>
            <p className="tiny center" style={{ marginTop: 6 }}>{HOURS_SUMMARY}</p>
          </div>
        </div>
      )}
    </>
  );
}

export function CallBar() {
  return (
    <div className="callbar">
      <a href={BUSINESS.phoneHref} className="btn btn--dark"><Phone s={17} /> Call</a>
      <Link href="/estimate" className="btn">Free estimate</Link>
    </div>
  );
}
