import '../globals.css'
import './globals.css'
import type { Metadata } from 'next'
import DotRing from '@/components/DotRing/DotRing'
import dynamic from 'next/dynamic'
import { montserrat } from '@/constants'
import { Analytics } from '@vercel/analytics/react';

const Topbar = dynamic(() => import('@/components/shared/Topbar'), { ssr: false })

export const metadata: Metadata = {
  title: "Shitworks | TheShiveshNetwork Full Stack Developer Portfolio",
  description: "The Shivesh Network is Shivesh Tiwari, Full Stack Developer Portfoilo Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className={montserrat.className}>
        <Topbar />

        <DotRing />

        <main>
          {children}
        </main>

        {/* Generate Vercel Analytics */}
        <Analytics />
      </main>
      </>
  )
}
