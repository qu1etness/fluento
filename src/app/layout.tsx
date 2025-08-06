'use client'
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/templates/header";
import { ThemeProvider } from '@/components/theme-provider';
import { NavigationMenu } from '@/templates/navigation-menu';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const poppins = Poppins({
  variable: "--font-poppins",
    weight: ["400", "500", "600"]
});

// export const metadata: Metadata = {
//     title: "Main page next.js",
//     description: '...',
// }

const queryClient = new QueryClient()


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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className={'w-full min-h-screen flex'}>
          <Header />
          <main className={'flex-1 h-full w-full px-12 py-10'}>
            <NavigationMenu />
            {children}
          </main>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
    </body>
    </html>
  );
}
