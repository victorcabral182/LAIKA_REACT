import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LAIKA NO ESPAÇO - S.L.D.S.E.M.A.N",
  description: "Official website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`${inter.className}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
