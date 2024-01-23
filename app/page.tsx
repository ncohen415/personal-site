"use client"
import React, { useEffect, useState } from "react"
import styles from "@/app/styles/home.module.css"
import {
  Modak,
  Whisper,
  Archivo_Black,
  Archivo,
  Oswald,
} from "next/font/google"
import { Linkedin, Instagram, ArrowDown } from "react-feather"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { TidalLogo } from "@phosphor-icons/react"
import { stagger } from "framer-motion"
import JennaRuben from "@/public/images/jenna-ruben.png"

gsap.registerPlugin(TextPlugin)

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})

export default function Page() {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.add("start")

    tl.fromTo(
      `.${styles.container}`,
      { y: "100%" },
      { y: "0", duration: 1.5, ease: "power3.out" },
      "start"
    )
    tl.fromTo(
      `.${styles.roleChar}`,
      { y: "100%" },
      { y: "0", duration: 1.5, ease: "power3.inOut", stagger: 0.05 },
      "start"
    )
    tl.fromTo(
      `.${styles.nameChar}`,
      { y: "100%" },
      { y: "0", duration: 1.5, ease: "power3.inOut", stagger: 0.05 },
      "start"
    )
    tl.fromTo(
      `.${styles.image}`,
      { x: "150%" },
      { x: "0", delay: 1.5 },
      "start"
    )
    tl.fromTo(
      `.${styles.blurbPiece}`,
      { y: "1000%" },
      {
        y: "0",
        duration: 1.5,
        delay: 1,
        ease: "power3.inOut",
        stagger: 0.05,
      },
      "start"
    )
  }, [])

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
        ease: "power3.out",
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
        ease: "power3.out",
      }
    )
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerWrapperTop}>
        <div className={styles.roleWrapper}>
          <h1 className={`${oswald.className} ${styles.topRole}`}>
            <span className={styles.roleChar}>S</span>
            <span className={styles.roleChar}>O</span>
            <span className={styles.roleChar}>F</span>
            <span className={styles.roleChar}>T</span>
            <span className={styles.roleChar}>W</span>
            <span className={styles.roleChar}>A</span>
            <span className={styles.roleChar}>R</span>
            <span className={styles.roleChar}>E</span>
          </h1>
          <br />
          <h1 className={`${oswald.className} ${styles.topRole}`}>
            <span className={styles.roleChar}>E</span>
            <span className={styles.roleChar}>N</span>
            <span className={styles.roleChar}>G</span>
            <span className={styles.roleChar}>I</span>
            <span className={styles.roleChar}>N</span>
            <span className={styles.roleChar}>E</span>
            <span className={styles.roleChar}>E</span>
            <span className={styles.roleChar}>R</span>
          </h1>
        </div>
        <div
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
              src={JennaRuben}
              width={400}
              height={undefined}
            />
          </div>
        </div>
      </div>
      <div className={styles.wrapperBottom}>
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
      </div>
    </div>
  )
}
