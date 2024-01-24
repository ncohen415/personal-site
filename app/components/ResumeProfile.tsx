"use client"
import React, { useLayoutEffect } from "react"
import { Oswald } from "next/font/google"
import styles from "@/app/styles/resumeProfile.module.css"
import { gsap } from "gsap"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})
const ResumeProfile = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    gsap.defaults({
      duration: 1.5,
    })
    tl.add("start")
    tl.fromTo(
      `.${styles.profileContainer}`,
      { y: "-100vh" },
      { y: "0", duration: 0.75, ease: "expo.out" },
      "start"
    )
  }, [])

  return (
    <div className={styles.profileContainer}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div className={styles.image} />
        <h1 className={`${styles.name} ${oswald.className}`}>Nate Cohen</h1>
        <h3 className={styles.role}>Full Stack Engineer</h3>
        <a
          href={`mailto:nate.cohen415@gmail.com`}
          className={`${styles.button}`}
          style={{ marginTop: "1rem" }}
        >
          Contact
        </a>
      </div>
      <hr style={{ width: "100%", margin: "2rem 0 2rem 0" }} />
      <h1 className={styles.toolkit}>Toolkit</h1>
      <h3 className={styles.tool}>React/Typescript</h3>
      <h3 className={styles.tool}>React Native</h3>
      <h3 className={styles.tool}>Django</h3>
      <h3 className={styles.tool}>NextJS</h3>
      <h3 className={styles.tool}>Gatsby</h3>
      <h3 className={styles.tool}>Wordpress</h3>
      <h3 className={styles.tool}>Shopify</h3>
    </div>
  )
}

export default ResumeProfile
