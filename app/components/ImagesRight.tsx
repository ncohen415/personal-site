"use client"
import React, { useState, useEffect } from "react"
import styles from "@/app/styles/imagesRight.module.css"
import { Red_Hat_Text, Archivo_Black, Archivo } from "next/font/google"

interface ImagesRightProps {
  aboutText: string
  startIndex: number
  images: Array<Object>
}

const redHatText = Red_Hat_Text({ subsets: ["latin"], weight: ["400", "700"] })
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })

const ImagesRight: React.FC<ImagesRightProps> = ({
  images,
  aboutText,
  startIndex,
}) => {
  const [imageIndex, setImageIndex] = useState(startIndex)
  const [changeImage, setChangeImage] = useState(true)
  const [loading, setLoading] = useState(false)

  const switchImage = () => {
    setLoading(true)
    if (imageIndex === images.length - 1) {
      setImageIndex(0)
      setChangeImage(!changeImage)
    } else {
      setImageIndex(imageIndex + 1)
      setChangeImage(!changeImage)
    }
    setLoading(false)
  }

  useEffect(() => {
    setTimeout(() => {
      switchImage()
    }, 5000)
  }, [changeImage])

  return (
    <div className={styles.right}>
      <h3 className={`${styles.aboutHeading} ${archivoBlack.className}`}>
        About
      </h3>
      <p className={`${styles.aboutText} ${archivo.className}`}>{aboutText}</p>
      <div className={styles.buttonWrapper}>
        {/* <button className={`${styles.button} ${redHatText.className}`}>
          See More
        </button> */}
      </div>
      <div style={{ display: "flex" }}>
        <div
          className={styles.image}
          style={{
            flex: "0 1 60%",
            backgroundImage: `url(${
              !loading && images[imageIndex]?.image.url
            })`,
          }}
        />
        <div
          className={styles.image}
          style={{
            flex: "0 1 40%",
            backgroundImage: `url(${
              !loading && images[imageIndex]?.image.url
            })`,
          }}
        />
      </div>
    </div>
  )
}

export default ImagesRight
