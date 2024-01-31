"use client"
import React, { useState, useEffect } from "react"
import styles from "@/app/styles/aboutFrame.module.css"
import Image from "next/image"

interface PhotographyImage {
  image: {
    url: string
  }
}

interface Clip {
  url: string
}

interface AboutFrameProps {
  type: string
  photos?: Array<PhotographyImage>
  clips?: Array<Clip>
  weightlifting?: string
}

const AboutFrame: React.FC<AboutFrameProps> = ({
  type,
  photos,
  weightlifting,
}) => {
  const [imageIndex, setImageIndex] = useState(0)
  const [imgSrc, setImgSrc] = useState("")
  const [changeImage, setChangeImage] = useState(false)
  const [imageOpacity, setImageOpacity] = useState(1)

  const switchImage = async () => {
    if (imageIndex !== (photos && photos.length - 1)) {
      setImageIndex(imageIndex + 1)
    } else {
      setImageIndex(0)
    }
    setChangeImage(!changeImage)
  }

  useEffect(() => {
    if (type === "photo" && photos !== undefined) {
      setTimeout(() => {
        switchImage()
      }, 3000)
    }
  }, [changeImage])

  return (
    <div className={styles.container}>
      {type === "photo" && (
        <div className={styles.innerWrapper}>
          <Image
            src={`${photos && photos[imageIndex]?.image?.url}`}
            alt=""
            height={500}
            width={500}
            className={styles.content}
          />
        </div>
      )}
      {type === "weightlifting" && (
        <div className={styles.innerWrapper}>
          <video
            className={styles.content}
            src={weightlifting}
            width="100%"
            height="auto"
            autoPlay
            muted
            loop
          >
            <source type="video/mp4" />
          </video>
        </div>
      )}
      {type === "warzone" && (
        <div className={styles.innerWrapper}>
          <iframe
            className={styles.content}
            width="495"
            height="880"
            src="https://www.youtube.com/embed/-gJ2ifUAzpE?autoplay=1&mute=1&controls=0&loop=1&playlist=-gJ2ifUAzpE"
            // allow="accelerometer; autoplay; mute; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      )}
    </div>
  )
}

export default AboutFrame
