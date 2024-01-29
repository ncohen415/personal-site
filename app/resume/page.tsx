import React from "react"
import styles from "@/app/styles/resume.module.css"
import { getResumeItems } from "../actions"
import ResumeAccordion from "@/app/components/ResumeAccordion"
import ResumeProfile from "@/app/components/ResumeProfile"
import { Archivo, Archivo_Black, Oswald } from "next/font/google"
import ResumePage from "@/app/components/PageComponents/ResumePage"
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})
interface ResumeItem {
  resumeCompanyName: string
  resumeCompanyRole: string
  resumeStartDate: string
  resumeEndDate: string
  resumeBullets: Array<string>
  resumeCompanyHomepage: string
  resumeCompanyLogo: Record<string, string>
  resumeItemOrder: number
}
const Resume = async () => {
  const data = await getResumeItems()
  const resumeItems = data.data.allResumeItems.sort(
    (a: ResumeItem, b: ResumeItem) => a.resumeItemOrder - b.resumeItemOrder
  )
  return <ResumePage resumeItems={resumeItems} />
}
export default Resume
