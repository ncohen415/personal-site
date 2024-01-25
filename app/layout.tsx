import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/app/components/Header"
import PageLayout from "@/app/components/PageLayout"
import { getBackgroundImages } from "@/app/actions"
import styles from "@/app/styles/pageLayout.module.css"
import { useRouter } from "next/navigation"

//styles for classnames
import homepageStyles from "@/app/styles/home.module.css"
import workStyles from "@/app/styles/work.module.css"
import aboutStyles from "@/app/styles/about.module.css"
import resumeStyles from "@/app/styles/resume.module.css"
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
        <Header
          homepageContainer={`.${homepageStyles.container}`}
          workContainer={`.${workStyles.container}`}
          resumeContainer={`.${resumeStyles.container}`}
          aboutContainer={`.${aboutStyles.innerWrapper}`}
        />

        <div className={styles.mainWrapper}>{children}</div>
        {/* <PageLayout>{children}</PageLayout> */}
      </body>
    </html>
  )
}
