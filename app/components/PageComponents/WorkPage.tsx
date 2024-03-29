"use client"
import React, { useLayoutEffect } from "react"
import styles from "@/app/styles/work.module.css"
import { Archivo_Black, Archivo, Oswald, Montserrat } from "next/font/google"
import { gsap } from "gsap"
import WorkAccordion from "@/app/components/WorkAccordion"
import PageHeading from "../PageHeading"

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <PageHeading
        line1={`SELECTED WORK`}
        subtext={`Check out some of the projects I've been working on.`}
        connectButton={false}
      />
    </div>
  )
}
export default WorkPage
