import Link from 'next/link';
import { PageHero, ProcessSteps, CtaBand, FaqSection } from '@/components/sections';
import { Section, Heading, Reveal, SpecTable, Checks } from '@/components/ui';
import { BreadcrumbSchema } from '@/components/schema';
import { Arrow, Info } from '@/components/icons';
import { FAQS } from '@/data/content';

export const metadata = {
  title: 'How We Build',
  description:
    'The full process, in order: site visit, written scope, permits and locates, demolition, base, forms, pour, finish, joints, cure schedule and warranty.',
  alternates: { canonical: '/process' },
};

const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'How we build' }];

const LAYERS = [
  ['Sub-grade', 'Stripped of topsoil, organics and fill until we reach soil that will actually bear. Soft spots get dug out and replaced, not bridged over.'],
  ['Compacted base', 'CA-6 crushed stone placed in lifts of a few inches, with a plate compactor run over every lift. This is the layer that decides whether the slab moves.'],
  ['Vapour barrier', 'Under heated and interior slabs — 10-mil poly, lapped and taped, so ground moisture does not migrate up through the floor.'],
  ['Reinforcement', 'Rebar or mesh tied into a grid and held on chairs so it sits in the middle third of the slab, where it can do something in tension.'],
  ['Concrete', '4,000 psi air-entrained mix. The entrained air gives freezing water somewhere to expand into instead of spalling the surface off.'],
  ['Finish & joints', 'Screeded, floated and finished, edges tooled, then saw-cut within 12 to 24 hours on a spacing matched to the slab so shrinkage cracks land in the cuts.'],
  ['Cure', 'Cure compound applied before we leave, and a written schedule handed over telling you exactly when to walk and drive on it.'],
];

export default function ProcessPage() {
  return (
    <>
      <BreadcrumbSchema items={CRUMBS} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="The process"
        title="Everything that happens, in the order it happens"
        lede="From the first phone call to the warranty. If a contractor cannot walk you through this, they are not the one pouring your slab."
      />

      <ProcessSteps />

      <Section dark inset>
        <div className="split split--lead" style={{ alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 110 }}>
            <Heading
              eyebrow="What is under there"
              title="A slab is seven layers, and you only ever see one"
              lede="Which is exactly why it is the easiest place in this trade to save money at your expense. Here is every layer, top to bottom."
            />
            <div className="row" style={{ '--gap': '12px', marginTop: 28 }}>
              <Link href="/estimate" className="btn">Get it quoted <Arrow s={16} /></Link>
            </div>
          </div>
          <ol className="steps">
            {LAYERS.map(([t, d], i) => (
              <li className="step" key={t}>
                <span className="step__n" aria-hidden />
                <div>
                  <h3 className="h3">{t}</h3>
                  <p className="body" style={{ marginTop: 8 }}>{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <Heading
          center
          eyebrow="Weather"
          title="When we will and will not pour"
          lede="Concrete is a chemical reaction on a schedule. Pouring it in the wrong conditions is how you get a surface that fails in year two."
        />
        <div className="card card--pad-lg" style={{ maxWidth: 940, marginInline: 'auto', marginTop: 40 }}>
          <SpecTable
            theirLabel="Conditions"
            ourLabel="What we do"
            rows={[
              ['Below 40°F and falling', 'Pour with heated mix, accelerator and insulating blankets — or reschedule. Never a plain pour into freezing ground.'],
              ['Rain within 4 hours', 'We do not pour. Rain on fresh concrete ruins the surface permanently and no amount of finishing recovers it.'],
              ['Above 90°F, windy, low humidity', 'Early morning start, evaporation retarder, and wet curing. Hot dry wind is what causes plastic shrinkage cracking.'],
              ['Frozen or saturated sub-grade', 'We stop and fix the base. Pouring on frozen ground means the slab drops when it thaws.'],
              ['Late season, hard freeze forecast', 'We will tell you honestly that waiting for spring is the better job, even though it means we do not get paid this month.'],
            ]}
          />
        </div>
        <p className="form-note" style={{ maxWidth: 940, marginInline: 'auto', marginTop: 20 }}>
          <Info s={15} />
          <span>If we move your date for weather, it is because the pour would have been compromised. We would rather have an awkward phone call than a callback in two years.</span>
        </p>
      </Section>

      <FaqSection items={FAQS.slice(2, 9)} eyebrow="Process questions" title="What people ask about the build" />
      <CtaBand />
    </>
  );
}
