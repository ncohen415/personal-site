"use client"
import React, { useState, useLayoutEffect } from "react"
import { Archivo, Archivo_Black } from "next/font/google"
import styles from "@/app/styles/resumeAccordion.module.css"
import { ChevronRight } from "react-feather"
import { motion } from "framer-motion"
import Image from "next/image"
import gsap from "gsap"

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })

interface ResumeItem {
  resumeCompanyName: string
  resumeCompanyRole: string
  resumeStartDate: string
  resumeEndDate: string
  resumeBullets: Array<string>
  resumeCompanyHomepage: string
  resumeCompanyLogo: Record<string, string>
}

interface ResumeAccordionProps {
  resumeItems: Array<ResumeItem>
  experience: string
}

const ResumeAccordion: React.FC<ResumeAccordionProps> = ({
  resumeItems,
  experience,
}) => {
  const [resumeIndex, setResumeIndex] = useState<number | null>()

  useLayoutEffect(() => {
    const tl = gsap.timeline()
    gsap.defaults({
      duration: 1.5,
    })
    tl.add("start")
    tl.fromTo(
      experience,
      { y: "100vh" },
      { y: "0", duration: 0.75, ease: "expo.out" },
      "start"
    )
  }, [])

  const handleResumeIndex = (index: number) => {
    if (index === resumeIndex) {
      setResumeIndex(null)
    } else {
      setResumeIndex(index)
    }
  }

  return (
    <div className={styles.container}>
      {resumeItems?.map((resumeItem, index) => {
        let startDateNumbers = resumeItem.resumeStartDate.split("-")
        let startDate = new Date()
        startDate.setFullYear(parseInt(startDateNumbers[0]))
        startDate.setMonth(parseInt(startDateNumbers[1]) - 1)

        let endDateNumbers = resumeItem.resumeEndDate.split("-")
        let endDate = new Date()
        endDate.setFullYear(parseInt(endDateNumbers[0]))
        endDate.setMonth(parseInt(endDateNumbers[1]) - 1)
        return (
          <React.Fragment key={index}>
            <div className={styles.container}>
              {/* accordion heading */}
              <h2>
                <button
                  onClick={() => handleResumeIndex(index)}
                  type="button"
                  className={styles.heading}
                >
                  <div className={styles.headingLeft}>
                    <a
                      className={styles.homepageLink}
                      href={resumeItem.resumeCompanyHomepage}
                      target="_blank"
                    >
                      {/* <Image
                        src={resumeItem.resumeCompanyLogo.url}
                        height={100}
                        width={50}
                        alt=""
                      /> */}
                    </a>
                    <div className={styles.companyInfoWrapper}>
                      <h1
                        className={`${styles.companyName} ${archivoBlack.className}`}
                      >
                        {resumeItem.resumeCompanyName}
                      </h1>
                      <h3
                        className={`${styles.companyRole} ${archivo.className}`}
                      >
                        {resumeItem.resumeCompanyRole}
                      </h3>
                    </div>
                  </div>
                  <div className={styles.headingRight}>
                    <div className={styles.datesWrapper}>
                      <span className={styles.dates}>
                        {`
                        ${startDate.toLocaleString("default", {
                          month: "long",
                        })} ${startDate.getFullYear()} - ${endDate.toLocaleString(
                          "default",
                          { month: "long" }
                        )} ${endDate.getFullYear()}`}
                      </span>
                    </div>
                    <ChevronRight
                      className={
                        resumeIndex === index
                          ? `${styles.icon} ${styles.selected}`
                          : styles.icon
                      }
                      size={20}
                    />
                  </div>
                </button>
              </h2>
              {/* accordion body */}
              <motion.div
                animate={index === resumeIndex ? "open" : "closed"}
                className={styles.accordionBody}
                initial="closed"
                variants={{
                  open: {
                    opacity: 1,
                    height: "fit-content",
                  },
                  closed: {
                    opacity: 0,
                    height: 0,
                  },
                }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <ul>
                    {resumeItem.resumeBullets.map((bullet, index) => {
                      return (
                        <li key={index} style={{ marginBottom: "1.5rem" }}>
                          • {bullet}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </motion.div>
            </div>
            <hr style={{ marginTop: index === resumeIndex ? "1.25rem" : "" }} />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default ResumeAccordion
