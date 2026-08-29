import { Analytics } from '@vercel/analytics/next'
import { Cormorant_Garamond, Great_Vibes, Montserrat } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant' })
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400', variable: '--font-script' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucas & Ariadna | Nosso casamento',
  description: 'Convite de casamento de Lucas e Ariadna — 19 de dezembro de 2026, às 17 horas.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${cormorant.variable} ${greatVibes.variable} ${montserrat.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
