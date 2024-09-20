import '../globals.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import DotRing from '@/components/DotRing/DotRing'
import dynamic from 'next/dynamic'
import { montserrat } from '@/constants'
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';

const Topbar = dynamic(() => import('@/components/shared/Topbar'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>TheShiveshNetwork | Shitworks</title>
      </Head>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" enableSystem>
          <Topbar />

          <DotRing />

          <main>
            {children}
          </main>

          {/* Generate Vercel Analytics */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
