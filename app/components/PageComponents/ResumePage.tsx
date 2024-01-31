"use client"
import React, { useLayoutEffect, useState } from "react"
import { Oswald } from "next/font/google"
import styles from "@/app/styles/resume.module.css"
import { gsap } from "gsap"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "react-feather"

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

interface ResumePageProps {
  resumeItems: Array<ResumeItem>
  //   experience: string
}
const ResumePage: React.FC<ResumePageProps> = ({ resumeItems }) => {
  const [resumeIndex, setResumeIndex] = useState<number | null>()
  const [isClient, setIsClient] = useState<boolean>(false)
  const router = useRouter()

  const handleResumeIndex = (index: number) => {
    if (index === resumeIndex) {
      setResumeIndex(null)
    } else {
      setResumeIndex(index)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.sectionLeft}>
          <p>Details:</p>
        </div>
        <div className={styles.sectionRight}>
          <div className={styles.summaryWrapper}>
            <h1 className={styles.summary}>
              Full Stack Engineer with experience developing performant web
              applications. Skilled in designing, implementing, and maintaining
              software systems using an assortment of programming languages and
              tools. A consummate team player with a knack for adapting to
              complex challenges.
            </h1>
            <ul className={styles.contactList}>
              <li className={styles.contact}>Linkedin</li>
              <li className={styles.contact}>Github</li>
              <li className={styles.contact}>Instagram</li>
              <li className={styles.contact}>Email</li>
              <li className={styles.contact}>
                <Link href="/">Website</Link>
              </li>
            </ul>
          </div>
          <div className={styles.detailsWrapper}>
            <div className={styles.detailRow}>
              <div className={styles.detailLeft}>
                <h2>Location:</h2>
              </div>
              <div className={styles.detailRight}>
                <h3>Brooklyn, New York</h3>
              </div>
            </div>
            <div className={styles.detailRow}>
              <div className={styles.detailLeft}>
                <h2>Education:</h2>
              </div>
              <div className={styles.detailRight}>
                <h3>Oberlin College</h3>
              </div>
            </div>
            <div className={styles.detailRow}>
              <div className={styles.detailLeft}>
                <h2>Toolkit:</h2>
              </div>
              <div className={`${styles.detailRight} ${styles.toolkit}`}>
                <h3 className={styles.tool}>JavaScript</h3>
                <h3 className={styles.tool}>React</h3>
                <h3 className={styles.tool}>Typescript</h3>
                <h3 className={styles.tool}>React Native</h3>
                <h3 className={styles.tool}>Python</h3>
                <h3 className={styles.tool}>HTML5</h3>
                <h3 className={styles.tool}>CSS3</h3>
                <h3 className={styles.tool}>Next.js</h3>
                <h3 className={styles.tool}>Django</h3>
                <h3 className={styles.tool}>Gatsby</h3>
                <h3 className={styles.tool}>AWS</h3>
                <h3 className={styles.tool}>Expo</h3>
                <h3 className={styles.tool}>Tailwind CSS</h3>
                <h3 className={styles.tool}>Wordpress</h3>
                <h3 className={styles.tool}>Shopify</h3>
                <h3 className={styles.tool}>MongoDB</h3>
                <h3 className={styles.tool}>PostgreSQL</h3>
                <h3 className={styles.tool}>SQLite</h3>
                <h3 className={styles.tool}>Firebase</h3>
                <h3 className={styles.tool}>Supabase</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionLeft}>
          <p>Experience:</p>
        </div>
        <div className={styles.sectionRight}>
          <div>
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
                <div key={index} className={styles.experienceRow}>
                  <div className={styles.experienceLeft}>
                    <h2>
                      {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}`}
                    </h2>
                  </div>
                  <button
                    onClick={() => handleResumeIndex(index)}
                    className={styles.experienceRight}
                  >
                    <h3 className={styles.experienceText}>
                      {resumeItem.resumeCompanyName}{" "}
                      <span
                        className={`${styles.experienceText} ${styles.experienceTextLight}`}
                      >
                        (
                        {`${startDate.toLocaleString("default", {
                          month: "long",
                        })} ${startDate.getFullYear()} - ${endDate.toLocaleString(
                          "default",
                          { month: "long" }
                        )} ${endDate.getFullYear()}`}
                        )
                      </span>
                    </h3>

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
                      <ul>
                        {resumeItem.resumeBullets?.map(
                          (bullet: string, index: number) => {
                            return (
                              <li
                                key={index}
                                className={`${styles.experienceText} ${styles.experienceTextLight}`}
                              >
                                {bullet}
                              </li>
                            )
                          }
                        )}
                      </ul>
                    </motion.div>
                  </button>
                  <ChevronRight
                    className={
                      resumeIndex === index
                        ? `${styles.chevron} ${styles.turn}`
                        : styles.chevron
                    }
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionLeft}>
          <p>References:</p>
        </div>
        <div className={styles.sectionRight}>
          <p>Available upon request</p>
        </div>
      </div>
    </div>
  )
}

export default ResumePage
