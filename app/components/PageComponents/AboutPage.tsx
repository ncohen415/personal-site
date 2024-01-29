"use client"
import React, { useLayoutEffect } from "react"
import styles from "@/app/styles/about.module.css"
import Image from "next/image"
import Waves from "@/public/images/waves.jpeg"
import { gsap } from "gsap"
import Headshot from "@/public/images/headshot.png"
import { Oswald } from "next/font/google"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})

const AboutPage = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    gsap.defaults({
      duration: 1.5,
    })
    tl.add("start")
    tl.fromTo(
      `.${styles.heading}`,
      { yPercent: -100 },
      { yPercent: 0, duration: 0.75, ease: "expo.out" },
      "start"
    )
      .fromTo(
        `.${styles.imageSide}`,
        { x: "-100vw" },
        { x: "0", duration: 0.75, ease: "expo.out" },
        "start"
      )
      .fromTo(
        `.${styles.copySide}`,
        { x: "100vw" },
        { x: "0", duration: 0.75, ease: "expo.out" },
        "start"
      )
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={`${styles.headingText} ${oswald.className}`}>
          <span>NATE</span>
          <span>COHEN</span>
        </h1>
      </div>
      <div className={styles.imageCopyWrapper}>
        <div className={styles.imageSide}>
          <div className={styles.headshotWrapper}>
            <Image
              className={styles.image}
              src={Headshot}
              width={1096}
              height={1369}
              alt="Nate Cohen Headshot"
            />
          </div>
        </div>
        <div className={styles.copySide}>
          <div className={styles.copyInnerWrapper}>
            <h3 className={styles.boldCopy}>
              <strong className={oswald.className}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </strong>
            </h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
