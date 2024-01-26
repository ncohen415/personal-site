"use client"
import React, { useLayoutEffect, useRef } from "react"
import { Oswald } from "next/font/google"
import styles from "@/app/styles/resume.module.css"
import { gsap } from "gsap"
import { Linkedin, Instagram, GitHub, Mail, Link2, MapPin } from "react-feather"
import Image from "next/image"
import Headshot from "@/public/images/headshot-removebg-preview.png"

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
}

interface ResumePageProps {
  resumeItems: Array<ResumeItem>
  //   experience: string
}
const ResumePage: React.FC<ResumePageProps> = ({ resumeItems }) => {
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    gsap.defaults({
      duration: 1.5,
    })
    tl.add("start")
    // tl.fromTo(
    //   `.${styles.profileContainer}`,
    //   { y: "-100vh" },
    //   { y: "0", duration: 0.75, ease: "expo.out" },
    //   "start"
    // )
  }, [])
  const widthRef = useRef<HTMLDivElement>(null)
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
                <Linkedin color="#fff" />
                <GitHub color="#fff" />
                <Instagram color="#fff" />
                <Mail color="#fff" />
                <Link2 color="#fff" />
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className={styles.experienceChunk}>
                <h1
                  className={`${oswald.className} ${styles.experienceChunkHeading}`}
                >
                  Experience
                </h1>
                <hr className={styles.divider} />
              </div>
              <div className={styles.experienceChunk}>
                <h1
                  className={`${oswald.className} ${styles.experienceChunkHeading}`}
                >
                  References
                </h1>
                <hr className={styles.divider} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePage
