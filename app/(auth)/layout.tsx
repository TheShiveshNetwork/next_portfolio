import '../globals.css';
import AuthProvider from "@/components/provider/AuthProvider"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
            <html lang="en">
                <body>
                    <main>
                        {children}
                    </main>
                </body>
            </html>
    )
}
