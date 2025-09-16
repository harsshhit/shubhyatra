import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'ShubhYatra - Spiritual Tourism & Pilgrimage Tours',
    template: '%s | ShubhYatra - Spiritual Tourism'
  },
  description: 'Embark on your spiritual journey with ShubhYatra. Discover holy places, pilgrimage tours to Kedarnath, Ram Mandir, Varanasi, and more. Affordable, safe, and comfortable spiritual tours.',
  keywords: [
    'spiritual tourism',
    'pilgrimage tours',
    'holy places',
    'Kedarnath tour',
    'Ram Mandir tour',
    'Varanasi tour',
    'religious tours',
    'spiritual travel',
    'pilgrimage packages',
    'ShubhYatra'
  ],
  authors: [{ name: 'ShubhYatra Team' }],
  creator: 'ShubhYatra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shubhyatra.com',
    title: 'ShubhYatra - Spiritual Tourism & Pilgrimage Tours',
    description: 'Embark on your spiritual journey with ShubhYatra. Discover holy places and pilgrimage tours with comfort, safety, and affordability.',
    siteName: 'ShubhYatra',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ShubhYatra - Spiritual Tourism',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShubhYatra - Spiritual Tourism & Pilgrimage Tours',
    description: 'Embark on your spiritual journey with ShubhYatra. Discover holy places and pilgrimage tours.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}