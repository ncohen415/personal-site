import React, { useEffect, useState } from "react"
import styles from "@/app/styles/home.module.css"
import { Modak, Whisper, Archivo_Black, Archivo } from "next/font/google"
import PageLayout from "@/app/components/PageLayout"
import HomePageHero from "@/app/components/HomePageHero"
import { Linkedin, Instagram } from "react-feather"

const modak = Modak({ subsets: ["latin"], weight: ["400"] })
const whisper = Whisper({ subsets: ["latin"], weight: ["400"] })
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })

export default async function Page() {
  // QUERIES
  // const backgroundImages = await getBackgroundImages()
  // const portraitImages = await getPortraitImages()
  return (
    <div className={styles.container}>
      <div className={styles.innerWrapper}>
        <div className={styles.title}>
          <div>
            <h1
              className={archivoBlack.className}
              style={{ fontSize: "2.5rem" }}
            >
              Nate Cohen
            </h1>
            <h3 style={{ fontSize: "1.15rem" }} className={archivo.className}>
              Software Engineer
            </h3>
          </div>
        </div>
        <div className={styles.about}>
          <p>
            I'm baby kinfolk deep v coloring book tofu tumeric seitan.
            Gluten-free activated charcoal kickstarter craft beer godard small
            batch. Hammock health goth marfa, cliche godard helvetica neutra
            succulents. Jianbing wayfarers DSA, gastropub intelligentsia
            taxidermy venmo. Cornhole farm-to-table post-ironic, palo santo
            freegan green juice succulents literally mixtape synth polaroid
            yuccie affogato. VHS typewriter vice forage gochujang.
          </p>
        </div>
        <div className={styles.social}>
          <Linkedin
            className={styles.icon}
            size={35}
            strokeWidth={1}
            color="#fff"
            style={{ margin: ".5rem" }}
          />
          <Instagram
            className={styles.icon}
            size={35}
            strokeWidth={1}
            color="#fff"
            style={{ margin: ".5rem" }}
          />

          <button
            className={`${styles.button} ${archivo.className}`}
            style={{ margin: ".5rem" }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}
