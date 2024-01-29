"use client"
import React, { useLayoutEffect, useState } from "react"
import { Oswald } from "next/font/google"
import styles from "@/app/styles/resume.module.css"
import { gsap } from "gsap"
import {
  Linkedin,
  Instagram,
  GitHub,
  Mail,
  Link2,
  MapPin,
  ChevronRight,
} from "react-feather"
import Image from "next/image"
import Headshot from "@/public/images/headshot-removebg-preview.png"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

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
  useLayoutEffect(() => {
    setIsClient(true)
    const tl = gsap.timeline()
    gsap.defaults({
      duration: 1.5,
    })
    tl.add("start")
    tl.fromTo(
      `.${styles.resumeInnerWrapper}`,
      { y: "100vh" },
      { y: "0", duration: 0.75, ease: "expo.out" },
      "start"
    )
  }, [])

  const handleGoHome = async () => {
    const tl = gsap.timeline()
    gsap.defaults({
      duration: 1.5,
    })
    tl.add("start")
    await tl.fromTo(
      `.${styles.resumeInnerWrapper}`,
      { y: "0" },
      { y: "100vh", duration: 0.75, ease: "expo.out" },
      "start"
    )
    if (isClient) {
      const origin = window?.location?.origin
      await router.push(origin)
    }
  }

  const handleResumeIndex = (index: number) => {
    if (index === resumeIndex) {
      setResumeIndex(null)
    } else {
      setResumeIndex(index)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.resumeInnerWrapper}>
        <div className={styles.resumeHeaderContainer}>
          <div className={styles.resumeHeaderInnerWrapper}>
            <div className={styles.headshotContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  alt="Nate Cohen Headshot"
                  src={Headshot}
                  width={400}
                  height={undefined}
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <h1 className={`${oswald.className} ${styles.name}`}>
                <strong>Nate Cohen</strong>
              </h1>
              <h3 className={`${oswald.className} ${styles.role}`}>
                Full Stack Engineer
              </h3>
              <div className={styles.socialIconsWrapper}>
                <a
                  href="https://www.linkedin.com/in/nathan-levi-cohen-ab1669140/"
                  target="_blank"
                >
                  <Linkedin color="#fff" />
                </a>
                <a href="https://github.com/ncohen415" target="_blank">
                  <GitHub color="#fff" />
                </a>
                <a
                  href="https://www.instagram.com/natelcohen/?hl=en"
                  target="_blank"
                >
                  <Instagram color="#fff" />
                </a>
                <a href={`mailto:nate.cohen415@gmail.com`}>
                  <Mail color="#fff" />
                </a>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleGoHome()}
                >
                  <Link2 color="#fff" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.resumeBodyContainer}>
          <div className={styles.resumeDetailsWrapper}>
            <div className={styles.resumeDetailsInnerWrapper}>
              <div className={styles.detailChunk}>
                <h1
                  className={`${oswald.className} ${styles.detailChunkHeading}`}
                >
                  Details
                </h1>
                <hr className={styles.divider} />
                <div>
                  <ul>
                    <li className={styles.detailListItem}>
                      <MapPin
                        size={16}
                        color="#000"
                        className={styles.detailIcon}
                      />
                      Brooklyn, NY
                    </li>
                    <li className={styles.detailListItem}>
                      <Mail
                        size={16}
                        color="#000"
                        className={styles.detailIcon}
                      />
                      nate.cohen415(@)gmail.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.detailChunk}>
                <h1
                  className={`${oswald.className} ${styles.detailChunkHeading}`}
                >
                  Education
                </h1>
                <hr className={styles.divider} />
                <div>
                  <ul>
                    <li className={styles.educationItem}>
                      <strong>• Bachelor of Arts</strong>
                      <p>Oberlin College, Oberlin, OH, 2013-2017 </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.detailChunk}>
                <h1
                  className={`${oswald.className} ${styles.detailChunkHeading}`}
                >
                  Toolkit
                </h1>
                <hr className={styles.divider} />
                <div className={styles.toolkitWrapper}>
                  <div className={styles.toolkitItem}>JavaScript</div>
                  <div className={styles.toolkitItem}>React</div>
                  <div className={styles.toolkitItem}>TypeScript</div>
                  <div className={styles.toolkitItem}>React Native</div>
                  <div className={styles.toolkitItem}>Python</div>
                  <div className={styles.toolkitItem}>HTML5</div>
                  <div className={styles.toolkitItem}>CSS3</div>
                  <div className={styles.toolkitItem}>Next.js</div>
                  <div className={styles.toolkitItem}>Django</div>
                  <div className={styles.toolkitItem}>Gatsby</div>
                  <div className={styles.toolkitItem}>AWS</div>
                  <div className={styles.toolkitItem}>Expo</div>
                  <div className={styles.toolkitItem}>Tailwind CSS</div>
                  <div className={styles.toolkitItem}>Wordpress</div>
                  <div className={styles.toolkitItem}>Shopify</div>
                  <div className={styles.toolkitItem}>MongoDB</div>
                  <div className={styles.toolkitItem}>PostgreSQL</div>
                  <div className={styles.toolkitItem}>SQLite</div>
                  <div className={styles.toolkitItem}>Firebase</div>
                  <div className={styles.toolkitItem}>Supabase</div>
                </div>
              </div>
              <hr className={`${styles.divider} mobile`} />
            </div>
          </div>
          <div className={styles.experienceWrapper}>
            <div className={styles.experienceInnerWrapper}>
              <div className={styles.experienceChunk}>
                <h1
                  className={`${oswald.className} ${styles.experienceChunkHeading}`}
                >
                  Summary
                </h1>
                <hr className={styles.divider} />
                <p>
                  Full Stack Engineer with experience in developing performant
                  web applications. Skilled in designing, implementing, and
                  maintaining software systems using an assortment of
                  programming languages and tools. A consummate team player with
                  a knack for adapting to complex challenges.
                </p>
              </div>
              <div className={styles.experienceChunk}>
                <h1
                  className={`${oswald.className} ${styles.experienceChunkHeading}`}
                >
                  Experience
                </h1>
                <hr className={styles.divider} />
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
                      <React.Fragment key={index}>
                        <div>
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
                                  {resumeItem?.resumeCompanyLogo?.url ? (
                                    <Image
                                      src={resumeItem.resumeCompanyLogo.url}
                                      height={100}
                                      width={50}
                                      alt=""
                                    />
                                  ) : (
                                    <div
                                      style={{
                                        height: "100px",
                                        width: "50px",
                                      }}
                                    />
                                  )}
                                </a>
                                <div className={styles.companyInfoWrapper}>
                                  <h1
                                    className={`${styles.companyName} ${oswald.className}`}
                                  >
                                    {resumeItem.resumeCompanyName}
                                  </h1>
                                  <h3 className={`${styles.companyRole}`}>
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
                                {resumeItem.resumeBullets
                                  ? resumeItem.resumeBullets.map(
                                      (bullet, index) => {
                                        return (
                                          <li
                                            key={index}
                                            style={{ marginBottom: "1.5rem" }}
                                          >
                                            • {bullet}
                                          </li>
                                        )
                                      }
                                    )
                                  : ""}
                              </ul>
                            </div>
                          </motion.div>
                        </div>
                        <hr className={styles.divider} />
                      </React.Fragment>
                    )
                  })}
                </div>
              </div>
              <div className={styles.experienceChunk}>
                <h1
                  className={`${oswald.className} ${styles.experienceChunkHeading}`}
                >
                  References
                </h1>
                <hr className={styles.divider} />
                <p>
                  Available upon request.{" "}
                  <a href={`mailto:nate.cohen415@gmail.com`}>
                    <strong>Email Me.</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePage
