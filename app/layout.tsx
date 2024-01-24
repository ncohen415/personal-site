import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/app/components/Header"
import PageLayout from "@/app/components/PageLayout"
import { getBackgroundImages } from "@/app/actions"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Nate Cohen",
  description: "I want to bring your ideas to life",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-white`}>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  )
}
