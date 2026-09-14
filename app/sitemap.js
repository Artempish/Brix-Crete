import { BUSINESS } from '@/data/business';
import { SERVICES } from '@/data/services';
import { AREAS } from '@/data/areas';
import { REVIEWS } from '@/data/content';

const U = BUSINESS.url;

export default function sitemap() {
  const now = new Date();

  const statics = [
    ['', 1.0, 'weekly'],
    ['/services', 0.9, 'monthly'],
    ['/service-areas', 0.8, 'monthly'],
    ['/estimate', 0.9, 'monthly'],
    ['/contact', 0.8, 'monthly'],
    ['/process', 0.7, 'monthly'],
    ['/about', 0.6, 'monthly'],
    ['/gallery', 0.6, 'monthly'],
    ['/faq', 0.6, 'monthly'],
    ['/privacy', 0.2, 'yearly'],
    ['/terms', 0.2, 'yearly'],
  ];

  // The reviews page is noindex until there are real reviews on it, so it is
  // kept out of the sitemap too.
  if (REVIEWS.length) statics.push(['/reviews', 0.5, 'monthly']);

  return [
    ...statics.map(([p, priority, changeFrequency]) => ({
      url: `${U}${p}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...SERVICES.map((s) => ({
      url: `${U}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...AREAS.map((a) => ({
      url: `${U}/service-areas/${a.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: a.home ? 0.8 : 0.7,
    })),
  ];
}
