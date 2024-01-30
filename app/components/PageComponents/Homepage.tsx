"use client"
import React, { useEffect, useState, useLayoutEffect, useRef } from "react"
import styles from "@/app/styles/home.module.css"
import { Oswald, Montserrat } from "next/font/google"
import { Linkedin, Instagram, ArrowDown } from "react-feather"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import Headshot from "@/public/images/headshot-removebg-preview.png"
import { usePathname } from "next/navigation"

gsap.registerPlugin(TextPlugin)

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function Homepage() {
  const homepageContainerRef = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    const tl = gsap.timeline()
    gsap.defaults({
      duration: 1.5,
    })
    tl.add("start")
    tl.fromTo(
      `.${styles.headingText}`,
      { yPercent: 100 },
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

    // tl.fromTo(
    //   `.${styles.container}`,
    //   { y: "100vh" },
    //   { y: "0", ease: "expo.out" },
    //   "start"
    // )
    // tl.fromTo(
    //   `.${styles.roleChar}`,
    //   { y: "100vh" },
    //   { y: "0", ease: "expo.out", stagger: 0.05 },
    //   "start"
    // )
    // tl.fromTo(
    //   `.${styles.nameChar}`,
    //   { y: "100vh" },
    //   { y: "0", duration: 1.5, ease: "expo.out", stagger: 0.05 },
    //   "start"
    // )
    // tl.fromTo(
    //   `.${styles.image}`,
    //   { x: "100vw" },
    //   { x: "0", delay: 1.5 },
    //   "start"
    // )
    // tl.fromTo(
    //   `.${styles.blurbPiece}`,
    //   { y: "50vh" },
    //   {
    //     y: "0",
    //     duration: 1.5,
    //     delay: 1,
    //     ease: "expo.out",
    //     stagger: 0.05,
    //   },
    //   "start"
    // )
  }, [pathname])

  const enterAnimation = () => {
    const tl = gsap.timeline()
    tl.fromTo(
      `.${styles.underline}`,
      {
        width: "0%",
        left: "0%",
      },
      {
        width: "100%",
        duration: 0.45,
        ease: "expo.out",
      }
    )
  }
  const exitAnimation = () => {
    const tl = gsap.timeline()
    tl.fromTo(
      `.${styles.underline}`,
      {
        width: "100%",
        left: "0%",
      },
      {
        width: "0%",
        left: "0%",
        duration: 0.45,
        immediateRender: false,
        ease: "expo.out",
      }
    )
  }

  return (
    <div className={styles.container} ref={homepageContainerRef}>
      {/* <div className={styles.innerWrapperTop}> */}
      <div style={{ marginTop: "3rem" }}>
        <div className={styles.headingTextContainer}>
          <h1 className={`${montserrat.className} ${styles.headingText}`}>
            NATE COHEN
          </h1>
        </div>
        <div className={styles.headingTextContainer}>
          <h1 className={`${montserrat.className} ${styles.headingText}`}>
            SOFTWARE ENGINEER
          </h1>
        </div>
        <div className={styles.subtextContainer}>
          <p className={`${styles.headingSubtext}`}>
            I'm a self-taught Full Stack Engineer based in Brooklyn, NY. I love
            art, creating, and bringing interesting ideas to life.
          </p>
        </div>
        <button className={styles.button}>Let's Connect</button>
      </div>
      {/* <div className={styles.roleWrapper}>
          <h1 className={`${oswald.className} ${styles.topRole}`}>
            NATE COHEN
          </h1>
          <br />
          <h1 className={`${oswald.className} ${styles.topRole}`}>
            SOFTWARE ENGINEER
          </h1>
        </div> */}
      {/* <div
          style={{
            display: "flex",
            flex: "0 1 35%",
            justifyContent: "flex-end",
          }}
        >
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              alt=""
              src={Headshot}
              width={400}
              height={undefined}
            />
          </div>
        </div> */}
      {/* </div> */}
      {/* <div className={styles.wrapperBottom}>
        <div className={styles.innerWrapperBottom}>
          <div className={styles.blurbWrapper}>
            <h3 className={styles.blurb}>
              <span className={styles.blurbPiece}>
                {`I'M A SELF-TAUGHT FULL STACK ENGINEER BASED IN BROOKLYN.`}
              </span>
              <br />
              <span className={styles.blurbPiece}>
                {`I LOVE ART, CREATING, AND MINIMALIST DESIGN.`}
              </span>
              <br />

              <span
                onMouseEnter={() => enterAnimation()}
                onMouseLeave={() => exitAnimation()}
                style={{ color: "red" }}
                className={styles.blurbPiece}
              >
                <a
                  href={`mailto:nate.cohen415@gmail.com`}
                >{`I WANT TO HELP BRING YOUR IDEAS TO LIFE.`}</a>
                <span className={styles.underline} />
              </span>
            </h3>
          </div>

          <div className={styles.nameWrapper}>
            <h1 className={`${oswald.className} ${styles.name}`}>
              <span className={styles.nameChar}>N</span>
              <span className={styles.nameChar}>A</span>
              <span className={styles.nameChar}>T</span>
              <span className={styles.nameChar}>E</span>
            </h1>
            <br />
            <h1
              style={{ marginRight: "-.5vw" }}
              className={`${oswald.className} ${styles.name}`}
            >
              <span className={styles.nameChar}>C</span>
              <span className={styles.nameChar}>O</span>
              <span className={styles.nameChar}>H</span>
              <span className={styles.nameChar}>E</span>
              <span className={styles.nameChar}>N</span>
            </h1>
          </div>
        </div>
      </div> */}
    </div>
  )
}
