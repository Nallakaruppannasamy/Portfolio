import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import SplashCursor from '@/components/ui/SplashCursor'

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
  icons: '/icons/portfolio.png',
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
        
        <SplashCursor 
          SPLAT_RADIUS={0.2} 
          DENSITY_DISSIPATION={4.5}
          CURL={4.5} 
          RAINBOW_MODE={true} 
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}