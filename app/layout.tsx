import { Funnel_Sans } from "next/font/google";

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const funnelSans = Funnel_Sans({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: "King’s Almirah | Iron Safe",
  description: "From fruit to fuel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${funnelSans.variable} font-sans antialiased text-white`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}
