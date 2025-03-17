import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carbo Software | AI Automation Solutions',
  description: 'Carbo Software specializes in AI-powered automation solutions that help businesses streamline operations, reduce costs, and improve efficiency.',
  generator: 'Next.js',
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: [
      {
        url: '/favicon/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/images/carbo logo.svg',
        type: 'image/svg+xml',
        sizes: '48x48',
      },
      {
        url: '/images/carbo logo.svg',
        type: 'image/svg+xml',
        sizes: '32x32',
      },
      {
        url: '/images/carbo logo.svg',
        type: 'image/svg+xml',
        sizes: '16x16',
      }
    ],
    shortcut: { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    apple: [
      {
        url: '/images/carbo logo.svg',
        type: 'image/svg+xml',
        sizes: '180x180',
      },
      {
        url: '/images/carbo logo.svg',
        type: 'image/svg+xml',
        sizes: '152x152',
      }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/favicon.svg',
      }
    ]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
