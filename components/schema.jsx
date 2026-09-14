import { BUSINESS } from '@/data/business';
import { SERVICES } from '@/data/services';
import { AREAS, ALSO_SERVED } from '@/data/areas';

const U = BUSINESS.url;

function Ld({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

export function localBusinessNode() {
  const node = {
    '@type': ['GeneralContractor', 'LocalBusiness'],
    '@id': `${U}/#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: U,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    description: BUSINESS.tagline,
    image: `${U}/og.png`,
    logo: `${U}/icon.svg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      ...(BUSINESS.address.street ? { streetAddress: BUSINESS.address.street } : {}),
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postal,
      addressCountry: BUSINESS.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
    areaServed: [
      ...AREAS.map((a) => ({ '@type': 'City', name: `${a.city}, ${BUSINESS.address.region}` })),
      ...ALSO_SERVED.map((c) => ({ '@type': 'City', name: `${c}, ${BUSINESS.address.region}` })),
    ],
    openingHoursSpecification: BUSINESS.hours
      .filter((h) => h.o)
      .map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.d,
        opens: h.o,
        closes: h.c,
      })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Concrete and brick paving services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, url: `${U}/services/${s.slug}` },
      })),
    },
  };

  if (BUSINESS.founded) node.foundingDate = BUSINESS.founded;
  // Only emit a rating when there is a real, evidenced one. Inventing
  // aggregateRating is both a Google policy violation and an FTC problem.
  if (BUSINESS.rating?.value && BUSINESS.rating?.count) {
    node.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
    };
  }
  const profiles = BUSINESS.socials.filter((s) => s.href).map((s) => s.href);
  if (profiles.length) node.sameAs = profiles;

  return node;
}

export function SiteSchema() {
  return (
    <Ld
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          localBusinessNode(),
          {
            '@type': 'WebSite',
            '@id': `${U}/#website`,
            url: U,
            name: BUSINESS.name,
            publisher: { '@id': `${U}/#business` },
            inLanguage: 'en-US',
          },
        ],
      }}
    />
  );
}

export function ServiceSchema({ service, area }) {
  const name = area ? `${service.name} in ${area.city}, ${BUSINESS.address.region}` : service.name;
  return (
    <Ld
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        serviceType: service.name,
        description: service.metaDesc,
        provider: { '@id': `${U}/#business` },
        areaServed: area
          ? { '@type': 'City', name: `${area.city}, ${BUSINESS.address.region}` }
          : AREAS.map((a) => ({ '@type': 'City', name: `${a.city}, ${BUSINESS.address.region}` })),
        url: `${U}/services/${service.slug}`,
      }}
    />
  );
}

export function FaqSchema({ items }) {
  if (!items?.length) return null;
  return (
    <Ld
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({ items }) {
  return (
    <Ld
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.label,
          ...(c.href ? { item: `${U}${c.href}` } : {}),
        })),
      }}
    />
  );
}
