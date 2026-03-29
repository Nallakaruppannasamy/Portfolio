import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark light',
}

export const metadata: Metadata = {
  title: 'Nallakaruppannasamy R | Full Stack Developer & ECE Student',
  description: 'Portfolio of Nallakaruppannasamy R, an ECE student at Sathyabama University specializing in MERN stack development, IoT, and UI/UX design.',
  keywords: ['Nallakaruppannasamy R', 'MERN Stack', 'Full Stack Developer', 'Sathyabama University', 'Electronics and Communication Engineering', 'Portfolio'],
  authors: [{ name: 'Nallakaruppannasamy R' }],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}