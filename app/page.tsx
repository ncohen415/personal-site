import React, { useEffect, useState } from "react"
import styles from "@/app/styles/home.module.css"
import { Modak, Whisper, Archivo_Black, Archivo } from "next/font/google"
import { Linkedin, Instagram } from "react-feather"
import Link from "next/link"

const modak = Modak({ subsets: ["latin"], weight: ["400"] })
const whisper = Whisper({ subsets: ["latin"], weight: ["400"] })
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })

export default async function Page() {
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
            {`I'm baby kinfolk deep v coloring book tofu tumeric seitan.
            Gluten-free activated charcoal kickstarter craft beer godard small
            batch. Hammock health goth marfa, cliche godard helvetica neutra
            succulents. Jianbing wayfarers DSA, gastropub intelligentsia
            taxidermy venmo. Cornhole farm-to-table post-ironic, palo santo
            freegan green juice succulents literally mixtape synth polaroid
            yuccie affogato. VHS typewriter vice forage gochujang.`}
          </p>
          <Link href="/about">{`Learn More`}</Link>
        </div>
        <div className={styles.social}>
          <a
            href="https://www.linkedin.com/in/nathan-levi-cohen-ab1669140/"
            target="_blank"
          >
            <Linkedin
              className={styles.icon}
              size={35}
              strokeWidth={1}
              color="#fff"
              style={{ margin: ".5rem" }}
            />
          </a>
          <a
            href="https://www.instagram.com/natelcohen/?hl=en/"
            target="_blank"
          >
            <Instagram
              className={styles.icon}
              size={35}
              strokeWidth={1}
              color="#fff"
              style={{ margin: ".5rem" }}
            />
          </a>
          <a
            href={`mailto:nate.cohen415@gmail.com`}
            className={`${styles.button} ${archivo.className}`}
            style={{ margin: ".5rem" }}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
