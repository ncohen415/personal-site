import React from "react"
import styles from "@/app/styles/work.module.css"
import { Archivo_Black, Archivo } from "next/font/google"
import { motion } from "framer-motion"
import { getWork } from "../actions"
import WorkAccordion from "@/app/components/WorkAccordion"

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })

const Work = async () => {
  const data = await getWork()
  const prodWork = data.data.allWorkItems.filter(
    (item: any) => item.projectType === "work"
  )
  const conceptWork = data.data.allWorkItems.filter(
    (item: any) => item.projectType === "concept"
  )

  const work = data.data.allWorkItems
  return (
    <div className={styles.container}>
      <div className={styles.projectsWrapper}>
        <h1 className={archivoBlack.className}>Work</h1>
        <h3 className={archivo.className}>
          Projects I've worked on that are in production.
        </h3>
        <hr style={{ marginTop: "1.25rem" }} />
        <WorkAccordion work={prodWork} />
      </div>
      <div className={styles.projectsWrapper}>
        <h1 className={archivoBlack.className}>Concepts</h1>
        <h3 className={archivo.className}>Concepts that I'm fleshing out.</h3>
      </div>
    </div>
  )
}
export default Work
