import React from "react"
import Link from "next/link"
import styles from "@/app/styles/project.module.css"

interface Work {
  projectTitle?: string
  projectDescription?: string
  projectProductionLin?: string
  projectHomepageLink?: string
  projectType?: string
  projectShortDescription?: string
  projectLogo?: Record<string, string>
  projectBackgroundImage?: Record<string, string>
}

interface ProjectProps {
  work: Work
  includeInfo: boolean
  includeLink: boolean
}

const Project: React.FC<ProjectProps> = ({
  work,
  includeInfo,
  includeLink,
}) => {
  return (
    <div className={styles.projectContainer}>
      {includeLink ? (
        <Link href={`/work/${work.projectTitle}`}>
          <div
            className={styles.projectTop}
            style={{
              backgroundImage: `url(${work.projectBackgroundImage?.url})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }}
          />
        </Link>
      ) : (
        <div
          className={`${styles.projectTop} ${includeInfo ? "" : styles.noInfo}`}
          style={{
            backgroundImage: `url(${work.projectBackgroundImage?.url})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        />
      )}
      {includeInfo ? (
        <div className={styles.projectBottom}>
          <div className={styles.projectTitle}>{work.projectTitle}</div>
          <div
            style={{
              flex: "0 1 75%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {work.projectShortDescription}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Project
