import Image from "next/image"
import styles from "@/app/styles/home.module.css"
import { Modak, Whisper, Archivo_Black, Archivo } from "next/font/google"
import { getBackgroundImages, getPortraitImages } from "@/app/actions"
import React, { useEffect } from "react"
import ImagesLeft from "@/app/components/ImagesLeft"
import ImagesRight from "@/app/components/ImagesRight"
import { ChevronDown } from "react-feather"
import PageLayout from "@/app/components/PageLayout"

const modak = Modak({ subsets: ["latin"], weight: ["400"] })
const whisper = Whisper({ subsets: ["latin"], weight: ["400"] })
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })

export default async function Page() {
  // QUERIES
  const backgroundImages = await getBackgroundImages()
  const portraitImages = await getPortraitImages()
  const date = new Date("Mar 1, 2020")

  return (
    <PageLayout>
      {/* <div className={styles.headingContainer}>
        <div className={styles.nameWrapper}>
          <h1 className={`${modak.className} ${styles.heading}`}>
            YOOOOOOOOOOOOoOOO
          </h1>
        </div>
      </div> */}

      <div className={styles.palletContainer}>
        <div className={`${styles.pallet} bg-tintedBlack`} />
        <div className={`${styles.pallet} bg-paleBlack`} />
        <div className={`${styles.pallet} bg-shadedGray`} />
        <div className={`${styles.pallet} bg-tintedGray`} />
        <div className={`${styles.pallet} bg-paleGray`} />
      </div>
      <div className={styles.hero} style={{ height: "100%" }}>
        <ImagesLeft
          startIndex={0}
          bgImages={backgroundImages.data.allImages}
          portraitImages={portraitImages.data.allImages}
        />
        <ImagesRight
          startIndex={1}
          aboutText={`I'm baby kickstarter blog solarpunk art party, letterpress keytar literally. Blog DSA echo park forage, health goth godard lomo pork belly af salvia dreamcatcher hexagon seitan master cleanse. Lumbersexual iPhone stumptown unicorn tilde. Celiac flannel kogi marxism, green juice tousled bicycle rights pug banjo tilde bespoke. Helvetica try-hard air plant irony next level cred yuccie beard pok pok kogi iceland truffaut aesthetic master cleanse fixie.`}
          images={backgroundImages.data.allImages}
        />
      </div>
    </PageLayout>
  )
}
