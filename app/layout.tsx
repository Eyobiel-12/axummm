import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Axum — Ethiopian Fine Dining',
  description:
    'Axum is an upscale Ethiopian restaurant celebrating the flavors and heritage of the ancient Aksumite kingdom. Explore our menu, our story, and reserve your table.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1712',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${manrope.variable} bg-background`}
    >
      <body suppressHydrationWarning className="font-sans antialiased">
        <SiteHeader />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'Axum',
              description: 'Ethiopian fine dining rooted in the heritage of the ancient Aksumite kingdom.',
              servesCuisine: 'Ethiopian',
              priceRange: '$$$',
              telephone: '+31 20 663 3963',
              acceptsReservations: true,
              menu: '/menu',
              image: '/images/hero.png',
              url: 'https://aksumrestaurant.nl',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Blasiusstraat 62',
                postalCode: '1091 CV',
                addressLocality: 'Amsterdam',
                addressCountry: 'NL',
              },
              openingHours: 'Thursday 17:00-23:30',
            }),
          }}
        />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
