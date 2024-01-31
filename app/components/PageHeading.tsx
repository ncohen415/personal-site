"use client"
import React, { useLayoutEffect } from "react"
import styles from "@/app/styles/pageHeading.module.css"
import { Montserrat } from "next/font/google"
import gsap from "gsap"
import { usePathname } from "next/navigation"

interface PageHeadingProps {
  line1: string
  line2?: string
  subtext?: string
  connectButton: boolean
}
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const PageHeading: React.FC<PageHeadingProps> = ({
  line1,
  line2,
  subtext,
  connectButton,
}) => {
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    gsap.defaults({
      duration: 1.5,
    })
    tl.add("start")
    tl.fromTo(
      `.${styles.headingText}`,
      { yPercent: 125 },
      {
        yPercent: 0,
        ease: "expo.inOut",
        duration: 1.75,
        stagger: 0.07,
      },
      "start"
    )
      .fromTo(
        `.${styles.headingSubtext}`,
        { opacity: 0 },
        { opacity: 1, ease: "expo.inOut", duration: 1.5, delay: 1 },
        "start"
      )
      .fromTo(
        `.${styles.button}`,
        { opacity: 0 },
        { opacity: 1, ease: "expo.inOut", duration: 1.5, delay: 1.5 },
        "start"
      )
  }, [])
  return (
    <div className={styles.container}>
      <div style={{ marginTop: "3rem" }}>
        <div
          style={{ marginBottom: line2 ? "" : "3rem" }}
          className={styles.headingTextContainer}
        >
          <h1 className={`${montserrat.className} ${styles.headingText}`}>
            {line1}
          </h1>
        </div>
        {line2 ? (
          <div className={styles.headingTextContainer}>
            <h1 className={`${montserrat.className} ${styles.headingText}`}>
              {line2}
            </h1>
          </div>
        ) : (
          ""
        )}
        <div className={styles.subtextContainer}>
          <p className={`${styles.headingSubtext}`}>{subtext ? subtext : ""}</p>
        </div>
        {connectButton && (
          <button className={styles.button}>{`Let's Connect`}</button>
        )}
      </div>
    </div>
  )
}

export default PageHeading
