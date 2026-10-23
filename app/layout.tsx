import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Header } from "@/components/header/Header"
import { Footer } from "@/components/footer/Footer"

import "./style/main.scss"

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Alphabe",
  description:
    "Full-service provider for casino and sportsbook infrastructure.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
