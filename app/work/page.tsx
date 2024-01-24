import React from "react"
import styles from "@/app/styles/work.module.css"
import { Archivo_Black, Archivo, Oswald } from "next/font/google"
import { motion } from "framer-motion"
import { getWork } from "../actions"
import WorkAccordion from "@/app/components/WorkAccordion"
import Header from "@/app/components/Header"
import WorkPage from "@/app/components/PageComponents/WorkPage"

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})

const Work = async () => {
  const data = await getWork()
  const prodWork = data.data.allWorkItems.filter(
    (item: any) => item.projectType === "work"
  )
  const conceptWork = data.data.allWorkItems.filter(
    (item: any) => item.projectType === "concept"
  )

  const work = data.data.allWorkItems
  return <WorkPage prodWork={prodWork} conceptWork={conceptWork} />
}
export default Work
