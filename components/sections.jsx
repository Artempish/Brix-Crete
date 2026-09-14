import Link from 'next/link';
import { Section, Heading, Reveal, Accordion, Stars, Checks, ArrowLink } from './ui';
import { Art } from './art';
import { Icon, Arrow, Phone, Check, Star } from './icons';
import { photo } from '@/data/photos';
import { BUSINESS, PROMISES, HOURS_SUMMARY } from '@/data/business';
import { SERVICES, FEATURED_SERVICES } from '@/data/services';
import { AREAS, ALSO_SERVED } from '@/data/areas';
import { PROCESS, FAQS, GALLERY, REVIEWS, TRUST } from '@/data/content';

/* ---------------------------------------------------------------- media --- */
/** A photo if one is registered, otherwise the drawn artwork for that service. */
export function Media({ art, photoKey, ratio }) {
  const p = photo(photoKey);
  return (
    <div className="svc__art" style={ratio ? { aspectRatio: ratio } : undefined}>
      {p
        ? <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" />
        : <Art name={art} />}
    </div>
  );
}

/* ------------------------------------------------------------ trust strip --- */
export function TrustStrip() {
  return (
    <section className="bay-sm" style={{ background: 'hsl(var(--surface))', borderBlock: '1px solid hsl(var(--line))' }}>
      <div className="wrap grid grid-4" style={{ '--gap': '28px' }}>
        {TRUST.map((t, i) => (
          <Reveal key={t.t} delay={i * 60}>
            <div className="row" style={{ '--gap': '12px', alignItems: 'flex-start', flexWrap: 'nowrap' }}>
              <span className="menu__icon" style={{ marginTop: 2 }}><Check s={17} /></span>
              <span>
                <strong className="h4" style={{ display: 'block' }}>{t.t}</strong>
                <span className="small" style={{ display: 'block', marginTop: 4 }}>{t.d}</span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- services --- */
export function ServiceCard({ s }) {
  return (
    <Link href={`/services/${s.slug}`} className="svc">
      <Media art={s.art} photoKey={s.photo} />
      <span className="svc__tag">{s.category}</span>
      <div className="svc__body">
        <h3 className="h3">{s.name}</h3>
        <p className="small">{s.summary}</p>
        <span className="link-arrow">Details &amp; pricing factors <Arrow s={15} /></span>
      </div>
    </Link>
  );
}

export function ServicesGrid({ items = FEATURED_SERVICES, eyebrow, title, lede, all }) {
  return (
    <Section>
      <Heading
        eyebrow={eyebrow || 'What we build'}
        title={title || 'Flatwork, done to a spec you can read'}
        lede={lede || 'Every one of these pages tells you the slab thickness, the base depth and the reinforcement we use — so you can hold our estimate against anybody else’s, line by line.'}
      />
      <div className="grid grid-3" style={{ '--gap': '22px', marginTop: 44 }}>
        {items.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 70}><ServiceCard s={s} /></Reveal>
        ))}
      </div>
      {all && (
        <div className="row center" style={{ justifyContent: 'center', marginTop: 40 }}>
          <Link href="/services" className="btn btn--ghost btn--lg">
            All {SERVICES.length} services <Arrow s={16} />
          </Link>
        </div>
      )}
    </Section>
  );
}

/* --------------------------------------------------------------- promises --- */
export function WhyUs() {
  return (
    <Section dark inset>
      <div className="split split--lead">
        <div>
          <Heading
            eyebrow="Why us"
            title="Most concrete fails for the same four reasons"
            lede="None of them are the concrete. They are the base, the reinforcement, the joints and the crew — and all four are decisions a contractor makes before the truck ever shows up."
          />
          <div className="row" style={{ '--gap': '12px', marginTop: 32 }}>
            <Link href="/process" className="btn">How we build <Arrow s={16} /></Link>
            <Link href="/estimate" className="btn btn--on-dark">Get an estimate</Link>
          </div>
        </div>
        <div className="grid" style={{ '--gap': '16px' }}>
          {PROMISES.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="card" style={{ padding: 22 }}>
                <div className="row" style={{ '--gap': '12px', alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                  <span className="menu__icon" style={{ marginTop: 2 }}><Icon name={p.icon} s={17} /></span>
                  <span>
                    <strong className="h4" style={{ display: 'block' }}>{p.title}</strong>
                    <span className="small" style={{ display: 'block', marginTop: 5 }}>{p.body}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- process --- */
export function ProcessSteps({ limit }) {
  const items = limit ? PROCESS.slice(0, limit) : PROCESS;
  return (
    <Section>
      <div className="split split--lead" style={{ alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 110 }}>
          <Heading
            eyebrow="The process"
            title="What actually happens, in order"
            lede="No mystery, no vanishing act between the estimate and the pour. Here is the whole job from the first phone call to the warranty."
          />
          <div className="row" style={{ '--gap': '12px', marginTop: 30 }}>
            <Link href="/estimate" className="btn">Start with an estimate <Arrow s={16} /></Link>
          </div>
        </div>
        <ol className="steps">
          {items.map((p) => (
            <li className="step" key={p.t}>
              <span className="step__n" aria-hidden />
              <div>
                <h3 className="h3">{p.t}</h3>
                <p className="body" style={{ marginTop: 8 }}>{p.d}</p>
                {p.meta && (
                  <p className="tiny" style={{ marginTop: 12, fontFamily: 'var(--mono)', letterSpacing: '.02em' }}>
                    {p.meta}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- gallery --- */
export function GalleryGrid({ items = GALLERY }) {
  return (
    <div className="gal">
      {items.map((g) => {
        const p = photo(g.photo);
        return (
          <figure className="gal__item" key={g.t}>
            <div style={{ aspectRatio: g.ratio || '4 / 3' }}>
              {p
                ? <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : g.art
                  ? <Art name={g.art} />
                  : <div className="photo-slot" style={{ height: '100%' }}><span>Photo pending</span></div>}
            </div>
            <figcaption className="gal__cap">
              <strong>{g.t}</strong>
              <span>{g.where}</span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

/* ---------------------------------------------------------------- reviews --- */
export function ReviewsSection({ tight }) {
  // Nothing invented. If REVIEWS is empty the section tells the truth instead.
  if (!REVIEWS.length) {
    return (
      <Section tight={tight}>
        <div className="card card--pad-lg center" style={{ maxWidth: 760, marginInline: 'auto' }}>
          <Stars n={5} s={20} />
          <h2 className="h2" style={{ marginTop: 16 }}>Ask us for references</h2>
          <p className="lede" style={{ marginTop: 14 }}>
            We would rather send you to three people whose driveways we poured last season than
            put invented quotes on a website. Ask when we come out to measure, and we will give
            you addresses in your town you can go and look at.
          </p>
          <div className="row" style={{ justifyContent: 'center', '--gap': '12px', marginTop: 28 }}>
            <a href={BUSINESS.phoneHref} className="btn btn--dark"><Phone s={17} /> {BUSINESS.phone}</a>
            <Link href="/estimate" className="btn btn--ghost">Get an estimate</Link>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section tight={tight}>
      <Heading center eyebrow="Reviews" title="What our customers say" />
      <div className="grid grid-3" style={{ '--gap': '22px', marginTop: 44 }}>
        {REVIEWS.map((r, i) => (
          <Reveal key={i} delay={(i % 3) * 70}>
            <article className="card review">
              <Stars n={r.stars || 5} />
              <p className="review__q">“{r.quote}”</p>
              <div className="review__by">
                <span className="avatar" aria-hidden>{(r.name || '?').slice(0, 1)}</span>
                <span>
                  <strong style={{ display: 'block', fontSize: '.92rem' }}>{r.name}</strong>
                  <span className="tiny">{r.where}{r.job ? ` · ${r.job}` : ''}</span>
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------- FAQ --- */
export function FaqSection({ items = FAQS.slice(0, 7), title, lede, eyebrow }) {
  return (
    <Section>
      <div className="split split--trail" style={{ alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 110 }}>
          <Heading
            eyebrow={eyebrow || 'Questions'}
            title={title || 'The things people actually ask'}
            lede={lede || 'Straight answers, including the ones that talk you out of spending money with us.'}
          />
          <div className="row" style={{ '--gap': '12px', marginTop: 28 }}>
            <Link href="/faq" className="btn btn--ghost">All questions <Arrow s={16} /></Link>
          </div>
        </div>
        <Accordion items={items} defaultOpen={0} />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ areas --- */
export function AreasSection() {
  return (
    <Section tight>
      <Heading
        center
        eyebrow="Where we work"
        title="DuPage County and western Cook"
        lede={`Based in ${BUSINESS.address.city}. If you are inside roughly a 25-minute drive, we are probably on your street most weeks.`}
      />
      <div className="pill-list" style={{ justifyContent: 'center', marginTop: 36 }}>
        {AREAS.map((a) => (
          <Link key={a.slug} href={`/service-areas/${a.slug}`}>{a.city}</Link>
        ))}
      </div>
      <p className="small center" style={{ marginTop: 22, maxWidth: '78ch', marginInline: 'auto' }}>
        Also serving {ALSO_SERVED.slice(0, 10).join(', ')} and more —{' '}
        <Link href="/service-areas" style={{ color: 'hsl(var(--clay))', fontWeight: 700 }}>see the full list</Link>.
      </p>
    </Section>
  );
}

/* -------------------------------------------------------------------- CTA --- */
export function CtaBand({ title, lede, note }) {
  return (
    <Section dark inset tight>
      <span className="aggregate" aria-hidden />
      <div className="center" style={{ maxWidth: 720, marginInline: 'auto', position: 'relative' }}>
        <h2 className="h1">{title || 'Tell us what is cracked, sunken or missing'}</h2>
        <p className="lede" style={{ marginTop: 16 }}>
          {lede || 'We come out, measure it, and put a fixed written price in front of you. If the honest answer is that it can wait another two years, we will tell you that instead.'}
        </p>
        <div className="row" style={{ justifyContent: 'center', '--gap': '12px', marginTop: 30 }}>
          <Link href="/estimate" className="btn btn--lg">Get a free estimate <Arrow s={17} /></Link>
          <a href={BUSINESS.phoneHref} className="btn btn--on-dark btn--lg"><Phone s={17} /> {BUSINESS.phone}</a>
        </div>
        <p className="tiny" style={{ marginTop: 20 }}>{note || `${HOURS_SUMMARY} · ${BUSINESS.licenseNote}`}</p>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- page hero --- */
export function PageHero({ crumbs, eyebrow, title, lede, children, actions = true }) {
  return (
    <section className="slab phero">
      <span className="joints" aria-hidden />
      <div className="wrap" style={{ position: 'relative' }}>
        {crumbs && (
          <nav className="crumbs" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={c.href || c.label} style={{ display: 'inline-flex', gap: 7 }}>
                {i > 0 && <span aria-hidden>/</span>}
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span style={{ color: 'hsl(var(--ink-2))' }}>{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="eyebrow" style={{ marginBottom: 16 }}>{eyebrow}</p>}
        <h1 className="h1" style={{ maxWidth: '19ch' }}>{title}</h1>
        {lede && <p className="lede measure" style={{ marginTop: 18 }}>{lede}</p>}
        {children}
        {actions && (
          <div className="row" style={{ '--gap': '12px', marginTop: 30 }}>
            <Link href="/estimate" className="btn btn--lg">Get a free estimate <Arrow s={17} /></Link>
            <a href={BUSINESS.phoneHref} className="btn btn--on-dark btn--lg"><Phone s={17} /> {BUSINESS.phone}</a>
          </div>
        )}
      </div>
    </section>
  );
}
