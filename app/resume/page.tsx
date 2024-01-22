import React from "react"
import styles from "@/app/styles/resume.module.css"
import { getResumeItems } from "../actions"
import ResumeAccordion from "@/app/components/ResumeAccordion"
import ResumeProfile from "@/app/components/ResumeProfile"
import { Archivo, Archivo_Black } from "next/font/google"

const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })

const Resume = async () => {
  const data = await getResumeItems()
  const resumeItems = data.data.allResumeItems
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <ResumeProfile />
      </div>
      <div className={styles.experience}>
        <h1
          className={archivoBlack.className}
          style={{ fontSize: "24px", marginBottom: "1rem" }}
        >
          Summary
        </h1>
        <p>
          I'm baby schlitz marxism fam jianbing stumptown. Blue bottle pok pok
          stumptown small batch portland sriracha. Air plant humblebrag selvage
          meggings pitchfork cliche kogi prism typewriter neutra. Tattooed yr
          actually roof party chambray. Messenger bag wolf shaman neutra raw
          denim synth yes plz big mood occupy four loko hashtag shabby chic.
          Kickstarter direct trade helvetica, cupping vape bicycle rights
          knausgaard kale chips bruh next level. Pok pok selvage photo booth
          bodega boys prism.
        </p>
        <hr style={{ width: "100%", margin: "1rem 0 1rem 0" }} />
        <h1 className={archivoBlack.className} style={{ fontSize: "24px" }}>
          Experience
        </h1>
        <ResumeAccordion resumeItems={resumeItems} />
      </div>
    </div>
  )
}
export default Resume
