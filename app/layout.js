import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';

export const metadata = {
  icons: { icon: '/favicon.svg' },
  metadataBase: new URL(site.url),
  title: { default: 'Siranay Freight Management | Dispatch & Carrier Support', template: '%s | Siranay Freight Management' },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: 'Siranay Freight Management | Dispatch & Carrier Support',
    description: site.description,
    url: site.url,
    images: [{ url: '/images/hero-full-reference.webp', width: 1800, height: 438, alt: 'Siranay Freight Management truck on a mountain highway' }]
  },
  twitter: { card: 'summary_large_image', title: site.name, description: site.description, images: ['/images/hero-full-reference.webp'] }
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  areaServed: ['United States', 'Canada'],
  description: site.description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </body>
    </html>
  );
}
