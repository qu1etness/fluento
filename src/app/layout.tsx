import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/ui/theme-provider";
import Header from "@/templates/header";

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
            className={`${poppins.variable} antialiased`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >

           <div className={'w-full min-h-[100vh] flex'}>
                <Header/>
                <main className={'flex-1 w-full h-full'}>
                    {children}
                </main>
           </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
