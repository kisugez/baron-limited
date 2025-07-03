import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Baron Capital Limited - Stay in Control of Timely Payments",
  description: "Access flexible and accessible loan options with low interest rates and lightning-fast approvals.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Favicon placeholder - add your favicon file to public/ and update the href below */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-poppins antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
