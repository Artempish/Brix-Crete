import './globals.css';
import { Header, CallBar } from '@/components/header';
import { Footer } from '@/components/footer';
import { SiteSchema } from '@/components/schema';
import { BUSINESS } from '@/data/business';

export const metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: `${BUSINESS.name} — Concrete & Brick Paving Contractor in ${BUSINESS.address.city}, ${BUSINESS.address.region}`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    'Concrete driveways, patios, walkways, steps and brick paving across Elmhurst and the western suburbs. One in-house crew, fixed written pricing, built for Chicago freeze–thaw.',
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name }],
  keywords: [
    'concrete contractor Elmhurst', 'concrete driveway Chicago', 'brick pavers DuPage County',
    'stamped concrete western suburbs', 'concrete patio Elmhurst IL', 'driveway replacement Chicagoland',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: BUSINESS.name,
    locale: 'en_US',
    url: BUSINESS.url,
    title: `${BUSINESS.name} — Concrete & Brick Paving in ${BUSINESS.address.city}, ${BUSINESS.address.region}`,
    description:
      'Driveways, patios, walkways, steps and brick paving across the western suburbs. One crew from demo to final finish.',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
  formatDetection: { telephone: true, address: true },
};

export const viewport = {
  themeColor: '#1b1816',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CallBar />
        <SiteSchema />
      </body>
    </html>
  );
}
