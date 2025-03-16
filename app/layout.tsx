import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carbo Software | AI Automation Solutions',
  description: 'Carbo Software specializes in AI-powered automation solutions that help businesses streamline operations, reduce costs, and improve efficiency.',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/images/7EC73928-7875-4306-A35E-328C263A269F.png',
        type: 'image/png',
        sizes: '48x48', // Increased by 20% from standard 40x40
      },
      {
        url: '/images/7EC73928-7875-4306-A35E-328C263A269F.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/images/7EC73928-7875-4306-A35E-328C263A269F.png',
        type: 'image/png',
        sizes: '16x16',
      }
    ],
    apple: [
      {
        url: '/images/7EC73928-7875-4306-A35E-328C263A269F.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        url: '/images/7EC73928-7875-4306-A35E-328C263A269F.png',
        sizes: '152x152',
        type: 'image/png',
      }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/7EC73928-7875-4306-A35E-328C263A269F.png',
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
