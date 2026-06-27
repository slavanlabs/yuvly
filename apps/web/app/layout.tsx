import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils";
import { Metadata } from "next";
import { Toaster } from "@workspace/ui/components/sonner";
import { Analytics } from "@vercel/analytics/next"

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Yuvly",
  description: "Your AI Travel Buddy",
  keywords: ["AI", "Travel", "AI Agent"],
  icons: {
    icon: "/yuvly.svg"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <Toaster />
        <Analytics />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
