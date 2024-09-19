import '../globals.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import DotRing from '@/components/DotRing/DotRing'
import dynamic from 'next/dynamic'
import { montserrat } from '@/constants'
import { Analytics } from '@vercel/analytics/react';

const Topbar = dynamic(() => import('@/components/shared/Topbar'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Shivesh Network, Shitworks',
  description: 'Shivesh Tiwari Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>TheShiveshNetwork</title>
      </Head>
      <body className={montserrat.className}>
        <Topbar />

        <DotRing />

        <main>
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  )
}
