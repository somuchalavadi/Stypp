import './globals.css';
import { organizationSchema, websiteSchema, faqSchema } from '@/lib/schemas';

export const metadata = {
  metadataBase: new URL('https://www.stypp.in'),
  title: 'Stypp — Digital & Marketing Agency | Web Development, Ads & SEO',
  description:
    'Stypp is a Bengaluru-based digital and marketing agency building websites and growing brands through digital marketing, Google Ads, Meta Ads, social media, influencer marketing and SEO, AEO & GEO.',
  keywords: [
    'Stypp',
    'Stypp Creative Studio',
    'Digital Marketing Agency Bengaluru',
    'Website Development Bengaluru',
    'Google Ads Agency Bengaluru',
    'Meta Ads Agency Bengaluru',
    'Social Media Marketing Bengaluru',
    'Influencer Marketing Bengaluru',
    'SEO Agency Bengaluru',
    'AEO',
    'GEO',
    'Creative Production',
  ],
  authors: [{ name: 'Stypp' }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://www.stypp.in/',
  },
  verification: {
    google: 'uOPPbAP-OHSE6WZN1Vk-C3NOWolDbo7H5bB-vwL3gds',
  },
  openGraph: {
    type: 'website',
    siteName: 'Stypp',
    title: 'Stypp — Digital & Marketing Agency | Web Development, Ads & SEO',
    description:
      'Stypp is a Bengaluru-based digital and marketing agency building websites and growing brands through digital marketing, Google Ads, Meta Ads, social media, influencer marketing and SEO, AEO & GEO.',
    url: 'https://www.stypp.in/',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.stypp.in/Sp.png',
        width: 1200,
        height: 630,
        alt: 'Stypp — Digital & Marketing Agency in Bengaluru',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stypp — Digital & Marketing Agency | Web Development, Ads & SEO',
    description:
      'Stypp is a Bengaluru-based digital and marketing agency building websites and growing brands through digital marketing, Google Ads, Meta Ads, social media, influencer marketing and SEO, AEO & GEO.',
    images: ['https://www.stypp.in/Sp.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bengaluru',
    ICBM: '12.9716, 77.5946',
    'geo.position': '12.9716;77.5946',
    'theme-color': '#080808',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
