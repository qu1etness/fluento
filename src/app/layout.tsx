import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/templates/header";
import { ThemeProvider } from '@/components/theme-provider';
import { Search } from 'lucide-react';
import { NavigationMenu } from '@/templates/navigation-menu';

const poppins = Poppins({
  variable: "--font-poppins",
    weight: ["400", "500", "600"]
});


export const metadata: Metadata = {
    title: "Main page next.js",
    description: '...',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={`${poppins.variable} antialiased font-poppins`}
    >
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className={'w-full min-h-screen flex'}>
        <Header />
        <main className={'flex-1 h-full w-full px-12 pt-10 pb-4'}>
          <NavigationMenu/>
          {children}
        </main>
      </div>
    </ThemeProvider>
    </body>
    </html>
  );
}
