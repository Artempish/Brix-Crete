import Link from 'next/link';
import { PageHero, GalleryGrid, CtaBand, ReviewsSection } from '@/components/sections';
import { Section, Heading } from '@/components/ui';
import { BreadcrumbSchema } from '@/components/schema';
import { Info, Arrow } from '@/components/icons';
import { GALLERY } from '@/data/content';
import { PHOTOS } from '@/data/photos';
import { AREAS } from '@/data/areas';

export const metadata = {
  title: 'Our Work',
  description:
    'Concrete driveways, patios, walkways, steps, slabs and brick paver projects across Elmhurst and the western suburbs.',
  alternates: { canonical: '/gallery' },
};

const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Our work' }];
const hasPhotos = Object.keys(PHOTOS).length > 0;

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema items={CRUMBS} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Recent projects"
        title="Work from around the western suburbs"
        lede="Driveways, patios, walks, steps, slabs and paver work. Ask when we come out and we will give you addresses near you that you can go and look at in person."
      />

      <Section>
        {!hasPhotos && (
          <div className="card card--sunken card--flat" style={{ padding: '20px 22px', marginBottom: 38 }}>
            <p className="row small" style={{ '--gap': '11px', alignItems: 'flex-start', flexWrap: 'nowrap', margin: 0 }}>
              <span style={{ marginTop: 2, color: 'hsl(var(--clay))' }}><Info s={16} /></span>
              <span>
                <strong style={{ color: 'hsl(var(--ink))' }}>Photography pending. </strong>
                Rather than fill this page with stock images of somebody else&rsquo;s concrete,
                the slots below are waiting on real job photos. Ask us for references and
                addresses in the meantime — we are happy to give them.
              </span>
            </p>
          </div>
        )}

        <GalleryGrid items={GALLERY} />
      </Section>

      <Section dark inset tight>
        <Heading
          center
          eyebrow="Go look at one"
          title="Better than a photo: an address"
          lede="Photos can be lit, cropped and borrowed. A driveway two streets over cannot. When we come out to measure, ask for references in your town and we will give you three."
        />
        <div className="pill-list" style={{ justifyContent: 'center', marginTop: 34 }}>
          {AREAS.slice(0, 12).map((a) => (
            <Link key={a.slug} href={`/service-areas/${a.slug}`}>{a.city}</Link>
          ))}
        </div>
      </Section>

      <ReviewsSection tight />
      <CtaBand />
    </>
  );
}
