import '../globals.css';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <main>
                {children}
            </main>
        </main>
    )
}
