import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Brighten Finance - Business & Car Loans Made Simple',
    template: '%s | Brighten Finance'
  },
  description: 'Get approved for business loans and car loans with competitive rates. Fast application process, expert support, and flexible terms to help you achieve your financial goals.',
  keywords: ['business loans', 'car loans', 'automotive financing', 'commercial loans', 'business funding', 'vehicle financing'],
  authors: [{ name: 'Brighten Finance' }],
  creator: 'Brighten Finance',
  publisher: 'Brighten Finance',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://brightenfinance.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Brighten Finance - Business & Car Loans Made Simple',
    description: 'Get approved for business loans and car loans with competitive rates. Fast application process, expert support, and flexible terms.',
    url: 'https://brightenfinance.com',
    siteName: 'Brighten Finance',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brighten Finance - Your Financial Partner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brighten Finance - Business & Car Loans Made Simple',
    description: 'Get approved for business loans and car loans with competitive rates. Fast application process, expert support, and flexible terms.',
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
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '/'
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: `https://brightenfinance.com${path}`,
    },
    twitter: {
      title,
      description,
    },
  }
}