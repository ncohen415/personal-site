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
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

gsap.registerPlugin(TextPlugin)
const modak = Modak({ subsets: ["latin"], weight: ["400"] })
const whisper = Whisper({ subsets: ["latin"], weight: ["400"] })
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})

export default function Page() {
  useEffect(() => {
    const tl = gsap.timeline()
  }, [])
  return (
    <div
      style={{
        height: "inherit",
        display: "flex",
        flexDirection: "column",
        padding: "0 2rem 2rem 2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "0 1 60%",
        }}
      >
        <h1
          style={{
            fontSize: "150px",
            fontWeight: "700",
            letterSpacing: "5px",
            lineHeight: "130px",
          }}
          className={oswald.className}
        >
          SOFTWARE <br /> ENGINEER
        </h1>
        <div
          style={{
            width: "500px",
            height: "200px",
            backgroundColor: "red",
            marginTop: "2rem",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "0 1 40%",
        }}
      >
        <div style={{ display: "flex", flex: "0 1 100%" }}>
          <div
            style={{
              display: "flex",
              flex: "0 1 20%",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <ArrowDown size={200} />
          </div>
          <div
            style={{
              display: "flex",
              flex: "0 1 40%",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <h3 style={{ fontSize: "30px", fontWeight: "700" }}>
              I want to help bring <br /> your ideas to life.
            </h3>
          </div>

          <div
            style={{
              display: "flex",
              flex: "0 1 40%",
              justifyContent: "flex-end",
            }}
          >
            <h1
              style={{
                fontSize: "150px",
                fontWeight: "700",
                letterSpacing: "5px",
                lineHeight: "130px",
                textAlign: "right",
              }}
              className={oswald.className}
            >
              NATE <br /> COHEN
            </h1>
          </div>
        </div>
      </div>
    </div>
    // <div className={styles.container}>
    //   <div className={styles.innerWrapper}>
    //     <div className={styles.title}>
    //       <div>
    //         <h1 className={`${archivoBlack.className} ${styles.name}`}>
    //           Nate Cohen
    //         </h1>
    //         <h3 className={`${archivo.className} ${styles.role}`}>
    //           Software Engineer
    //         </h3>
    //       </div>
    //     </div>
    //     <div className={styles.about}>
    //       <p>
    //         {`I'm baby kinfolk deep v coloring book tofu tumeric seitan.
    //         Gluten-free activated charcoal kickstarter craft beer godard small
    //         batch. Hammock health goth marfa, cliche godard helvetica neutra
    //         succulents. Jianbing wayfarers DSA, gastropub intelligentsia
    //         taxidermy venmo. Cornhole farm-to-table post-ironic, palo santo
    //         freegan green juice succulents literally mixtape synth polaroid
    //         yuccie affogato. VHS typewriter vice forage gochujang.`}
    //       </p>
    //       <Link href="/about">{`Learn More`}</Link>
    //     </div>
    //     <div className={styles.social}>
    //       <a
    //         href="https://www.linkedin.com/in/nathan-levi-cohen-ab1669140/"
    //         target="_blank"
    //       >
    //         <Linkedin
    //           className={styles.icon}
    //           size={35}
    //           strokeWidth={1}
    //           color="#fff"
    //         />
    //       </a>
    //       <a
    //         href="https://www.instagram.com/natelcohen/?hl=en/"
    //         target="_blank"
    //       >
    //         <Instagram
    //           className={styles.icon}
    //           size={35}
    //           strokeWidth={1}
    //           color="#fff"
    //         />
    //       </a>
    //       <a
    //         href={`mailto:nate.cohen415@gmail.com`}
    //         className={`${styles.button} ${archivo.className}`}
    //         style={{ margin: ".5rem" }}
    //       >
    //         Contact
    //       </a>
    //     </div>
    //   </div>
    // </div>
  )
}
