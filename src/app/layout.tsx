import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { SITE_INFO } from "@/configs/site";

export const metadata: Metadata = {
  title: `${SITE_INFO.site_name}`,
  description: `${SITE_INFO.meta_desc}`,
  keywords: `${SITE_INFO.keywords.join(", ")}`,
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased min-h-screen`} suppressHydrationWarning>
        <ThemeProvider enableSystem defaultTheme="system" attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
