"use client"
import React, { useLayoutEffect } from "react"
import styles from "@/app/styles/work.module.css"
import { Archivo_Black, Archivo, Oswald } from "next/font/google"
import { gsap } from "gsap"
import WorkAccordion from "@/app/components/WorkAccordion"

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})

interface Work {
  projectTitle: string
  projectDescription: string
  projectProductionLink: string
  projectHomepageLink: string
  projectType: string
  projectLogo: Record<string, string>
}

interface WorkPageProps {
  prodWork: Array<Work>
  conceptWork: Array<Work>
}

const WorkPage: React.FC<WorkPageProps> = ({ prodWork, conceptWork }) => {
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    gsap.defaults({
      duration: 1.5,
    })
    tl.add("start")
    tl.fromTo(
      `.${styles.projectsWrapper}:nth-child(1)`,
      { x: "-50vw" },
      { x: "0", duration: 0.75, ease: "expo.out" },
      "start"
    ).fromTo(
      `.${styles.projectsWrapper}:nth-child(2)`,
      { x: "50vw" },
      { x: "0", duration: 0.75, ease: "expo.out" },
      "start"
    )
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.projectsWrapper}>
        <h1 style={{ fontWeight: "500" }} className={oswald.className}>
          Work
        </h1>
        <h3 className={archivo.className}>
          {`Projects I've worked on that are in production.`}
        </h3>
        <hr style={{ marginTop: "1.25rem" }} />
        <WorkAccordion work={prodWork} />
      </div>
      <div className={styles.projectsWrapper}>
        <h1 className={oswald.className}>Concepts</h1>
        <h3
          className={archivo.className}
        >{`Concepts that I'm fleshing out.`}</h3>
      </div>
    </div>
  )
}
export default WorkPage
