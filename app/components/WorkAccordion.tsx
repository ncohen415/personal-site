"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import styles from "@/app/styles/accordion.module.css"
import { ChevronRight } from "react-feather"
import { Archivo, Archivo_Black, Oswald } from "next/font/google"
import Image from "next/image"

const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})
interface WorkItem {
  projectTitle: string
  projectDescription: string
  projectProductionLink: string
  projectHomepageLink: string
  projectType: string
  projectLogo: Record<string, string>
}

interface WorkAccordionProps {
  work: Array<WorkItem>
}

const WorkAccordion: React.FC<WorkAccordionProps> = ({ work }) => {
  const [workIndex, setWorkIndex] = useState<number | null>(null)
  const handleWorkIndex = (index: number) => {
    if (index === workIndex) {
      setWorkIndex(null)
    } else {
      setWorkIndex(index)
    }
  }
  return (
    <div>
      {work?.map((workItem, index) => {
        return (
          <React.Fragment key={index}>
            <div className={styles.container}>
              {/* accordion heading */}
              <h2>
                <button
                  onClick={() => handleWorkIndex(index)}
                  type="button"
                  className={styles.heading}
                >
                  <span className={`${styles.title}`}>
                    {workItem.projectTitle}
                  </span>
                  <ChevronRight
                    className={
                      workIndex === index
                        ? `${styles.icon} ${styles.selected}`
                        : styles.icon
                    }
                    size={20}
                  />
                </button>
              </h2>
              {/* accordion body */}
              <motion.div
                animate={index === workIndex ? "open" : "closed"}
                style={{ overflow: "hidden" }}
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
                <a href={workItem.projectProductionLink} target="_blank">
                  <Image
                    src={workItem.projectLogo.url}
                    width={150}
                    height={100}
                    alt=""
                  />
                </a>
                <div className={styles.descriptionWrapper}>
                  <p>{workItem.projectDescription}</p>
                </div>
                <div className={styles.linksWrapper}>
                  <strong>
                    <a
                      className={oswald.className}
                      href={workItem.projectHomepageLink}
                      target="_blank"
                    >
                      Homepage
                    </a>
                  </strong>
                  <strong>
                    <a
                      className={oswald.className}
                      href={workItem.projectProductionLink}
                      target="_blank"
                    >
                      Production
                    </a>
                  </strong>
                </div>
              </motion.div>
            </div>
            <hr style={{ marginTop: index === workIndex ? "1.25rem" : "" }} />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default WorkAccordion
