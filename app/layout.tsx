import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import config from "@/configs/config";

export const metadata: Metadata = {
    title: "Shitworks",
    description: "The Shivesh Network",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <Head>
                <title>{config.portfolio_name} | Shitworks</title>
            </Head>
            <body>
                <ThemeProvider attribute="class" enableSystem={false}>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
