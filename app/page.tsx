import Image from "next/image"
import styles from "@/app/styles/home.module.css"
import { Modak, Whisper, Archivo_Black, Archivo } from "next/font/google"
import { getBackgroundImages, getPortraitImages } from "@/app/actions"
import React, { useEffect } from "react"
import ImagesLeft from "./components/ImagesLeft"
import ImagesRight from "./components/ImagesRight"
import { ChevronDown } from "react-feather"

const modak = Modak({ subsets: ["latin"], weight: ["400"] })
const whisper = Whisper({ subsets: ["latin"], weight: ["400"] })
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })

export default async function Home() {
  // QUERIES
  const backgroundImages = await getBackgroundImages()
  const portraitImages = await getPortraitImages()
  const date = new Date("Mar 1, 2020")

  return (
    <React.Fragment>
      <div
        style={{ height: "2rem", padding: "0 2rem 0 2rem", marginTop: "2rem" }}
      >
        <ul
          className={archivoBlack.className}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "",
          }}
        >
          <li style={{ flex: "0 1 40%", fontWeight: "bold" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              CREDENTIAL{" "}
              <ChevronDown size={13} style={{ marginLeft: ".5rem" }} />
            </div>
            <ul style={{ display: "flex" }}>
              <li style={{ fontSize: "12px" }} className={archivo.className}>
                SOFTWARE ENGINEER - PHOTOGRAPHER
              </li>
            </ul>
          </li>
          <li style={{ flex: "0 1 25%", fontWeight: "bold" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              STARTED <ChevronDown size={13} style={{ marginLeft: ".5rem" }} />
            </div>
            <ul>
              <li style={{ fontSize: "12px" }} className={archivo.className}>
                MAR, 2020
              </li>
            </ul>
          </li>
          <li style={{ flex: "0 1 35%", fontWeight: "bold" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              Instagram{" "}
              <ChevronDown size={13} style={{ marginLeft: ".5rem" }} />
            </div>
            <ul>
              <li style={{ fontSize: "12px" }} className={archivo.className}>
                @NATELCOHEN
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.headingContainer}>
        <div className={styles.nameWrapper}>
          <h1 className={`${modak.className} ${styles.heading}`}>
            YOOOOOOOOOOOOoOOO
          </h1>
        </div>
      </div>

      <div className={styles.palletContainer}>
        <div className={`${styles.pallet} bg-tintedBlack`} />
        <div className={`${styles.pallet} bg-paleBlack`} />
        <div className={`${styles.pallet} bg-shadedGray`} />
        <div className={`${styles.pallet} bg-tintedGray`} />
        <div className={`${styles.pallet} bg-paleGray`} />
      </div>
      <div className={styles.hero}>
        <ImagesLeft
          startIndex={0}
          bgImages={backgroundImages.data.allImages}
          portraitImages={portraitImages.data.allImages}
        />
        <ImagesRight
          startIndex={1}
          aboutText={`Vegan gluten-free meh, 8-bit ugh mixtape man braid yr +1 aesthetic
        letterpress. Try-hard edison bulb four dollar toast sriracha polaroid
        vape, authentic fam snackwave skateboard umami distillery next level.
        Small batch pitchfork fam meh, thundercats paleo jean shorts bicycle
        rights irony occupy try-hard flexitarian. Mlkshk cupping tilde chia
        truffaut vinyl bespoke cornhole ugh hammock locavore. Gorpcore lyft
        iceland, deep v asymmetrical vexillologist artisan fingerstache neutra
        tousled coloring book gochujang. Cornhole locavore ramps normcore,
        marxism tacos plaid you probably haven't heard of them tote bag viral
        lo-fi fanny pack.`}
          images={backgroundImages.data.allImages}
        />
      </div>
    </React.Fragment>
  )
}
