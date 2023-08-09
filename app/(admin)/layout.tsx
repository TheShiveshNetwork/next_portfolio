import '../globals.css'
import AuthProvider from "@/components/provider/AuthProvider"
import { getServerSession } from "next-auth"
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/admin/Sidebar'

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
                <body className='w-full bg-slate-50'>
                    <div className="flex-1 w-full flex flex-col space-y-5 lg:space-y-0 lg:flex-row sm:rounded-2xl sm:px-5">
                        <Sidebar />

                        <main className='w-full'>
                            {children}
                        </main>
                    </div>
                </body>
            </html>
        </AuthProvider>
    )
}
