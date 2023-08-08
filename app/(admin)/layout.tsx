import '../globals.css'
import AuthProvider from "@/components/provider/AuthProvider"
import { getServerSession } from "next-auth"
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import Topbar from '@/components/admin/Topbar'
import Sidebar from '@/components/admin/Sidebar'
import Bottombar from '@/components/admin/Bottombar'

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession(authOptions);
    if (!session?.user) redirect("/sign-in")

    return (
        <AuthProvider>
            <html lang="en">
                <body className='h-full bg-slate-50'>
                    <Topbar />

                    <Sidebar />
                    <main>
                        {children}
                    </main>

                    <Bottombar />
                </body>
            </html>
        </AuthProvider>
    )
}
