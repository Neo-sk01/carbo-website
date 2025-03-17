import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carbo Software | AI Automation Solutions',
  description: 'Carbo Software specializes in AI-powered automation solutions that help businesses streamline operations, reduce costs, and improve efficiency.',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/images/carbo logo.svg',
        type: 'image/svg+xml',
        sizes: '48x48', // Increased by 20% from standard 40x40
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
        url: '/images/carbo logo.svg',
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
