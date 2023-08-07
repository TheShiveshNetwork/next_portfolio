import '../globals.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import DotRing from '@/components/DotRing/DotRing'
import dynamic from 'next/dynamic'

const Topbar = dynamic(() => import('@/components/shared/Topbar'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Shivesh Network',
  description: 'Shivesh Full Stack Developer Portfolio',
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
      <body className={inter.className}>
        <Topbar />

        <DotRing />

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
