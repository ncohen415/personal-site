import React from "react"
import { getWork } from "../actions"
import PageHeading from "../components/PageHeading"
import PageBody from "../components/PageBody"
import styles from "@/app/styles/work.module.css"

import Project from "@/app/components/Project"

interface Work {
  projectTitle: string
  projectDescription: string
  projectProductionLink: string
  projectHomepageLink: string
  projectType: string
  projectShortDescription: string
  projectLogo: Record<string, string>
  projectBackgroundImage: Record<string, string>
}

const Work = async () => {
  const data = await getWork()
  const prodWork = data.data.allWorkItems.filter(
    (item: Work) => item.projectType === "work"
  )
  const conceptWork = data.data.allWorkItems.filter(
    (item: Work) => item.projectType === "concept"
  )

  return (
    <div className={styles.container}>
      <PageHeading
        line1={`SELECTED WORK`}
        subtext={`Take a look at what I've been working on lately. Keep scrolling to see some concepts.`}
        connectButton={false}
      />
      <PageBody>
        <div className={styles.section}>
          <div className={styles.sectionHeading}>
            <h1 className={styles.sectionHeadingText}>{`PRODUCTION WORK`}</h1>
          </div>
        </div>
        <hr style={{ marginBottom: "3rem", marginTop: "3rem" }} />
        <div style={{ marginBottom: "6rem" }}>
          {prodWork.map((work: Work, index: number) => {
            return (
              <Project
                key={index}
                work={work}
                includeInfo={true}
                includeLink={true}
              />
            )
          })}
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeading}>
            <h1 className={styles.sectionHeadingText}>{`CONCEPT WORK`}</h1>
          </div>
        </div>
        <hr style={{ marginBottom: "3rem", marginTop: "3rem" }} />
        <div style={{ marginBottom: "6rem" }}>
          {conceptWork.map((work: object, index: number) => {
            return (
              <Project
                key={index}
                work={work}
                includeInfo={true}
                includeLink={true}
              />
            )
          })}
        </div>
      </PageBody>
    </div>
  )
}
export default Work
