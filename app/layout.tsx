import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LearnTube - Transform YouTube Videos Into Structured Learning Courses',
  description: 'Paste any YouTube link. Get instant course outlines, smart summaries, and study notes in 30 seconds.',
  keywords: 'YouTube, learning, AI, education, courses, structured learning, video analysis',
  authors: [{ name: 'LearnTube Team' }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%233b82f6'/><stop offset='100%' style='stop-color:%23f59e0b'/></linearGradient></defs><rect width='32' height='32' rx='6' fill='url(%23grad)'/><text x='16' y='20' font-family='Arial,sans-serif' font-size='14' font-weight='bold' fill='white' text-anchor='middle'>LT</text></svg>",
  },
  openGraph: {
    title: 'LearnTube - Transform YouTube Videos Into Structured Learning Courses',
    description: 'Paste any YouTube link. Get instant course outlines, smart summaries, and study notes in 30 seconds.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LearnTube - Transform YouTube Videos Into Structured Learning Courses',
    description: 'Paste any YouTube link. Get instant course outlines, smart summaries, and study notes in 30 seconds.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
