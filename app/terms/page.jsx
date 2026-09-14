import { PageHero } from '@/components/sections';
import { Section } from '@/components/ui';
import { BUSINESS, CITY_STATE } from '@/data/business';

export const metadata = {
  title: 'Terms of Use',
  description: `Terms governing use of the ${BUSINESS.name} website.`,
  alternates: { canonical: '/terms' },
};

const UPDATED = 'February 2026';

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Terms' }]}
        eyebrow={`Last updated ${UPDATED}`}
        title="Terms of use"
        lede="These terms cover this website. The contract for any work we perform is the signed proposal and service agreement, not this page."
        actions={false}
      />

      <Section>
        <article className="stack measure" style={{ '--gap': '28px', marginInline: 'auto' }}>
          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">About this site</h2>
            <p className="body">
              This website is operated by {BUSINESS.legalName} of {CITY_STATE}. By using it
              you agree to these terms.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">Information here is general</h2>
            <p className="body">
              Specifications, timelines, construction details and cost ranges on this site
              describe how we typically build and what projects typically cost. They are not
              a quote and they are not engineering advice for your property. Every site is
              different, and what your job needs is determined on site.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">Estimates and pricing</h2>
            <p className="body">
              No price on this website is an offer. A binding price exists only in a written
              proposal issued for your specific project, and that proposal governs its own
              validity period, scope, exclusions and payment terms.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">Warranty</h2>
            <p className="body">
              Any workmanship warranty is set out in the written agreement for your project.
              Descriptions of our warranty on this site are summaries for convenience; where
              they differ from your signed agreement, the agreement controls.
            </p>
            <p className="body">
              Shrinkage cracking within control joints is normal behaviour in cured concrete
              and is not treated as a defect. Damage caused by de-icing salts, by others
              working on the surface, or by changes to drainage after completion is not
              covered.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">Content and trademarks</h2>
            <p className="body">
              The text, artwork, layout and code of this site belong to {BUSINESS.legalName}.
              You may view, print and share pages for your own purposes in evaluating or
              arranging construction work. Do not republish the content commercially without
              permission.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">Links to other sites</h2>
            <p className="body">
              We sometimes link to village permit pages, manufacturers and industry
              references. We do not control those sites and are not responsible for their
              content.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">Limitation of liability</h2>
            <p className="body">
              This site is provided as-is. To the fullest extent permitted by law,
              {' '}{BUSINESS.legalName} is not liable for loss arising from reliance on general
              information published here, as distinct from a written proposal or agreement
              issued to you.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">Governing law</h2>
            <p className="body">
              These terms are governed by the laws of the State of {BUSINESS.address.regionName},
              without regard to conflict of laws principles.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">Changes</h2>
            <p className="body">
              We may update these terms. The date at the top of this page shows when they
              last changed.
            </p>
          </section>

          <section className="stack" style={{ '--gap': '12px' }}>
            <h2 className="h3">Contact</h2>
            <p className="body">
              <a href={`mailto:${BUSINESS.email}`} style={{ color: 'hsl(var(--clay))', fontWeight: 700 }}>{BUSINESS.email}</a> ·{' '}
              <a href={BUSINESS.phoneHref} style={{ color: 'hsl(var(--clay))', fontWeight: 700 }}>{BUSINESS.phone}</a>
            </p>
          </section>
        </article>
      </Section>
    </>
  );
}
