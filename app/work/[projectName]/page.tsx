import React from "react"
import PageHeading from "@/app/components/PageHeading"
import PageBody from "@/app/components/PageBody"
import { getProject } from "@/app/actions"
import Project from "@/app/components/Project"
import styles from "@/app/styles/projectPage.module.css"
import { ChevronDown } from "react-feather"

const ProjectPage = async ({ params }: { params: { projectName: string } }) => {
  const data = await getProject(params?.projectName)
  const project = data.data.allWorkItems[0]
  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <PageHeading
          line1={`${project.projectTitle.toUpperCase()}`}
          connectButton={false}
        />
      </div>
      <PageBody>
        <div className={styles.shortDescriptionWrapper}>
          <h2 className={styles.shortDescription}>
            {project.projectShortDescription}
          </h2>
          <h2 className={styles.discover}>
            {`Discover`}
            <ChevronDown size={20} />
          </h2>
        </div>
        <Project work={project} includeInfo={false} includeLink={false} />
        <div>
          <div className={styles.sectionSidesWrapper}>
            <div className={styles.sectionLeft}>{`I)`}</div>
            <div className={styles.sectionRight}>
              <div>
                <h2 className={styles.longDescription}>
                  {project.projectDescription}
                </h2>
                <hr className={styles.divider} />
                <div className={styles.linksWrapper}>
                  <a href={project.projectProductionLink} target="_blank">
                    {`See it live`}
                  </a>
                  <a href={project.projectHomepageLink} target="_blank">
                    {`Visit the homepage`}
                  </a>
                </div>
                <hr className={styles.divider} />
                <div className={styles.servicesWrapper}>
                  <p className={styles.servicesLeft}>{`Services:`}</p>
                  <div className={styles.servicesRight}>
                    <p>
                      {project.projectServices.map(
                        (service: string, index: number) => {
                          if (index === project.projectServices.length - 1) {
                            return <>{service} </>
                          } else {
                            return (
                              <>
                                {service}
                                {", "}
                              </>
                            )
                          }
                        }
                      )}
                    </p>
                  </div>
                </div>
                <hr className={styles.divider} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionSidesWrapper}>
            <div className={styles.sectionLeft}>{`II)`}</div>
            <div className={styles.sectionRight}>
              <div>
                <h2 className={styles.longDescription}>
                  {`Do you have an idea that you're excited about?`}
                  <br />
                  <br />
                  {`Let's make it a reality.`}
                </h2>
                <a
                  href={`mailto:nate.cohen415@gmail.com`}
                  className={styles.button}
                >{`Let's Connect`}</a>
              </div>
            </div>
          </div>
        </div>
      </PageBody>
    </div>
  )
}

export default ProjectPage
