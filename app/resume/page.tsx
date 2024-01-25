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
const Resume = async () => {
  const data = await getResumeItems()
  const resumeItems = data.data.allResumeItems
  return <ResumePage resumeItems={resumeItems} />
}
export default Resume
