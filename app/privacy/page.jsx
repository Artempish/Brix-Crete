import { PageHero } from '@/components/sections';
import { Section } from '@/components/ui';
import { BUSINESS, CITY_STATE } from '@/data/business';

export const metadata = {
  title: 'Privacy Policy',
  description: `How ${BUSINESS.name} collects, uses and protects the information you send through this website.`,
  alternates: { canonical: '/privacy' },
};

const UPDATED = 'February 2026';

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy' }]}
        eyebrow={`Last updated ${UPDATED}`}
        title="Privacy policy"
        lede="Short version: we use your details to quote your job and to talk to you about it. We do not sell them, rent them, or add you to anything."
        actions={false}
      />

      <Section>
        <article className="stack measure" style={{ '--gap': '28px', marginInline: 'auto' }}>
          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">What we collect</h2>
            <p className="body">
              When you submit the estimate form or email us, we receive the information you
              choose to give us: your name, phone number, email address, the town and (if
              you provide it) street address of the property, and whatever you tell us about
              the project.
            </p>
            <p className="body">
              Our web host records standard server logs — IP address, browser type, pages
              requested and timestamps — which are used to keep the site running and secure.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">What we use it for</h2>
            <p className="body">
              To prepare your estimate, to contact you about it, to carry out work you hire
              us to do, and to keep records of jobs we have completed. That is the entire
              list.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">What we do not do</h2>
            <p className="body">
              We do not sell or rent your information. We do not share it with lead brokers
              or marketing companies. We do not add you to a mailing list because you asked
              for a quote.
            </p>
            <p className="body">
              We share information only with people who need it to do the job — for example
              a village permit office, a supplier delivering to your address, or our
              insurer if there is a claim — and where the law requires it.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">Cookies and analytics</h2>
            <p className="body">
              This site does not set advertising or tracking cookies. If analytics are added
              later, this page will be updated to say what is collected and why before that
              happens.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">How long we keep it</h2>
            <p className="body">
              Enquiries that do not become jobs are kept for a reasonable period and then
              deleted. Records relating to work we performed are kept for as long as our
              warranty, insurance and tax obligations require.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">Your choices</h2>
            <p className="body">
              Ask us and we will tell you what we hold about you, correct it, or delete it —
              except where we are required to keep it. Email{' '}
              <a href={`mailto:${BUSINESS.email}`} style={{ color: 'hsl(var(--clay))', fontWeight: 700 }}>{BUSINESS.email}</a>{' '}
              or call <a href={BUSINESS.phoneHref} style={{ color: 'hsl(var(--clay))', fontWeight: 700 }}>{BUSINESS.phone}</a>.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">Text messages</h2>
            <p className="body">
              If you give us a mobile number, we may text you about scheduling — a crew
              arrival time, a weather delay, a permit update. Reply STOP at any time and we
              will stop texting you. We do not send marketing texts.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">Children</h2>
            <p className="body">
              This site is intended for adults arranging construction work and is not
              directed at children under 13.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">Contact</h2>
            <p className="body">
              {BUSINESS.legalName}, {CITY_STATE}.{' '}
              <a href={`mailto:${BUSINESS.email}`} style={{ color: 'hsl(var(--clay))', fontWeight: 700 }}>{BUSINESS.email}</a> ·{' '}
              <a href={BUSINESS.phoneHref} style={{ color: 'hsl(var(--clay))', fontWeight: 700 }}>{BUSINESS.phone}</a>
            </p>
          </section>
        </article>
      </Section>
    </>
  );
}
