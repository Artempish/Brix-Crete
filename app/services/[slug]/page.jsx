import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, ServiceCard, CtaBand, Media } from '@/components/sections';
import { Section, Heading, Reveal, SpecTable, Checks, Accordion } from '@/components/ui';
import { ServiceSchema, FaqSchema, BreadcrumbSchema } from '@/components/schema';
import { Arrow, Check, Phone, Clock, Info } from '@/components/icons';
import { SERVICES, getService } from '@/data/services';
import { AREAS } from '@/data/areas';
import { BUSINESS } from '@/data/business';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDesc,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDesc, url: `/services/${s.slug}` },
  };
}

export default function ServicePage({ params }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: s.name },
  ];
  const related = (s.related || []).map(getService).filter(Boolean);

  return (
    <>
      <ServiceSchema service={s} />
      <FaqSchema items={s.faqs} />
      <BreadcrumbSchema items={crumbs} />

      <PageHero crumbs={crumbs} eyebrow={s.category} title={s.h1} lede={s.tagline} />

      {/* ---------------------------------------------------------- intro --- */}
      <Section>
        <div className="split split--lead" style={{ alignItems: 'start' }}>
          <div className="stack" style={{ '--gap': '20px' }}>
            {s.intro.map((p, i) => (
              <p key={i} className={i === 0 ? 'lede' : 'body'}>{p}</p>
            ))}
            {s.timeline && (
              <div className="card card--sunken card--flat" style={{ padding: '18px 20px', marginTop: 6 }}>
                <p className="row small" style={{ '--gap': '10px', alignItems: 'flex-start', flexWrap: 'nowrap', margin: 0 }}>
                  <span style={{ marginTop: 2, color: 'hsl(var(--clay))' }}><Clock s={16} /></span>
                  <span><strong style={{ color: 'hsl(var(--ink))' }}>Typical timeline. </strong>{s.timeline}</span>
                </p>
              </div>
            )}
          </div>

          <Reveal>
            <div style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid hsl(var(--line))', boxShadow: 'var(--shadow-3)' }}>
              <Media art={s.art} photoKey={s.photo} ratio="4 / 3" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------- includes --- */}
      <Section dark inset>
        <Heading
          eyebrow="What the job includes"
          title="Everything on this list is in the price"
          lede="Not an upgrade menu. This is the build."
        />
        <div className="grid grid-2" style={{ '--gap': '18px', marginTop: 42 }}>
          {s.includes.map((it, i) => (
            <Reveal key={it.t} delay={(i % 2) * 70}>
              <div className="card" style={{ padding: 22, height: '100%' }}>
                <div className="row" style={{ '--gap': '12px', alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                  <span className="menu__icon" style={{ marginTop: 2 }}><Check s={16} /></span>
                  <span>
                    <strong className="h4" style={{ display: 'block' }}>{it.t}</strong>
                    <span className="small" style={{ display: 'block', marginTop: 5 }}>{it.d}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ----------------------------------------------------------- spec --- */}
      {s.specs && (
        <Section>
          <div className="split split--trail" style={{ alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: 110 }}>
              <Heading
                eyebrow="The spec"
                title="Hold this against any other bid"
                lede="These are the lines that separate a price from a product. Ask whoever else you are talking to for the same numbers in writing."
              />
              <div className="row" style={{ '--gap': '12px', marginTop: 28 }}>
                <Link href="/estimate" className="btn">Get this quoted <Arrow s={16} /></Link>
                <a href={BUSINESS.phoneHref} className="btn btn--ghost"><Phone s={16} /> Call</a>
              </div>
            </div>
            <div className="card card--pad-lg">
              <SpecTable rows={s.specs} />
            </div>
          </div>
        </Section>
      )}

      {/* ------------------------------------------------------- patterns --- */}
      {s.patterns && (
        <Section tight>
          <Heading center eyebrow="Options" title="Patterns we run" lede="All approved off a sample board poured for your job, never off a brochure photo." />
          <div className="pill-list" style={{ justifyContent: 'center', marginTop: 32 }}>
            {s.patterns.map((p) => <span key={p}>{p}</span>)}
          </div>
        </Section>
      )}

      {/* ------------------------------------------------------ aftercare --- */}
      {s.aftercare && (
        <Section tight>
          <div className="card card--pad-lg" style={{ maxWidth: 860, marginInline: 'auto' }}>
            <p className="eyebrow" style={{ marginBottom: 14 }}>After we leave</p>
            <h2 className="h3" style={{ marginBottom: 20 }}>What you need to do — and not do</h2>
            <Checks items={s.aftercare} />
            <p className="form-note" style={{ marginTop: 22 }}>
              <Info s={15} />
              <span>You get this on paper too. We leave a written cure schedule on every job so nobody has to remember it.</span>
            </p>
          </div>
        </Section>
      )}

      {/* ------------------------------------------------------------ faq --- */}
      {s.faqs?.length > 0 && (
        <Section>
          <div className="split split--trail" style={{ alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: 110 }}>
              <Heading eyebrow="Questions" title={`${s.name.replace(/s$/, '')} questions we get asked`} />
              <p className="small" style={{ marginTop: 20 }}>
                Something not covered here? Call and ask — we would rather answer it now than
                on site.
              </p>
            </div>
            <Accordion items={s.faqs} defaultOpen={0} />
          </div>
        </Section>
      )}

      {/* -------------------------------------------------------- related --- */}
      {related.length > 0 && (
        <Section tight>
          <Heading eyebrow="Related" title="Often done at the same time" lede="Same crew, same mobilisation, one price — it is nearly always cheaper together than in two visits." />
          <div className="grid grid-3" style={{ '--gap': '22px', marginTop: 38 }}>
            {related.map((r, i) => <Reveal key={r.slug} delay={i * 70}><ServiceCard s={r} /></Reveal>)}
          </div>
        </Section>
      )}

      {/* ---------------------------------------------------------- areas --- */}
      <Section tight>
        <Heading center eyebrow="Where" title={`${s.name} across the western suburbs`} />
        <div className="pill-list" style={{ justifyContent: 'center', marginTop: 30 }}>
          {AREAS.map((a) => (
            <Link key={a.slug} href={`/service-areas/${a.slug}`}>{a.city}</Link>
          ))}
        </div>
      </Section>

      <CtaBand title={`Get ${s.name.toLowerCase()} quoted`} />
    </>
  );
}
