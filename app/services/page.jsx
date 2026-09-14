import Link from 'next/link';
import { PageHero, ServiceCard, CtaBand, FaqSection } from '@/components/sections';
import { Section, Heading, Reveal } from '@/components/ui';
import { BreadcrumbSchema } from '@/components/schema';
import { Arrow } from '@/components/icons';
import { SERVICES, SERVICE_CATEGORIES } from '@/data/services';
import { FAQS } from '@/data/content';

export const metadata = {
  title: 'Concrete & Brick Paver Services',
  description:
    'Driveways, patios, stamped concrete, walkways, steps, ramps, slabs, retaining walls and brick pavers across Elmhurst and the western suburbs.',
  alternates: { canonical: '/services' },
};

const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services' }];

const BLURBS = {
  'Concrete': 'Poured flatwork and structural slabs. Every page below tells you the thickness, the base depth and the reinforcement we build to.',
  'Brick Pavers': 'Interlocking paver work — deeper bases, restrained edges, and the ability to lift and reset a section instead of patching it.',
  'Repair': 'Honest triage. Plenty of what we get called to look at does not need replacing, and we will say so.',
  'Commercial': 'Lots, drive lanes, ADA work and loading areas, phased so you stay open.',
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={CRUMBS} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="What we build"
        title="Every service, with the spec written down"
        lede="Concrete and brick paving for homes and businesses across DuPage County and western Cook. Pick a service and you will find the slab thickness, base depth, reinforcement and joint spacing we build to — the numbers that decide how long it lasts."
      />

      {SERVICE_CATEGORIES.map((cat, ci) => {
        const items = SERVICES.filter((s) => s.category === cat);
        if (!items.length) return null;
        return (
          <Section key={cat} tight={ci > 0}>
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', gap: 20 }}>
              <Heading eyebrow={cat} title={cat === 'Concrete' ? 'Poured concrete' : cat} lede={BLURBS[cat]} as="h2" />
            </div>
            <div className="grid grid-3" style={{ '--gap': '22px', marginTop: 40 }}>
              {items.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 70}><ServiceCard s={s} /></Reveal>
              ))}
            </div>
          </Section>
        );
      })}

      <FaqSection items={FAQS.slice(0, 6)} eyebrow="Before you choose" title="Questions worth asking first" />
      <CtaBand
        title="Not sure which one you need?"
        lede="Describe the problem and we will tell you what it is. Half the time the answer costs less than people expect, and occasionally it is “leave it for now”."
      />
    </>
  );
}
