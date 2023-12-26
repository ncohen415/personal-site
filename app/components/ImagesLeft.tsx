"use client"
import React, { useState, useEffect, useRef } from "react"
import styles from "@/app/styles/imagesLeft.module.css"
import Image from "next/image"

interface BgImageInfo {
  url: string
  width: any
  height: any
}
interface PImageInfo {
  url: string
  width: number
  height: number
}

interface BgImage {
  image: BgImageInfo
  imageColor: string
  imageType: string
}

interface PImage {
  image: PImageInfo
  imageColor: string
  imageType: string
}

interface ImagesLeftProps {
  bgImages: Array<BgImage>
  portraitImages: Array<PImage>
  startIndex: number
}

const ImagesLeft: React.FC<ImagesLeftProps> = ({
  bgImages,
  portraitImages,
  startIndex,
}) => {
  const [imageIndex, setImageIndex] = useState(startIndex)
  const [changeImage, setChangeImage] = useState(true)
  const [pOpacity, setPOpacity] = useState(1)
  const [image, setImage] = useState([bgImages, portraitImages])

  const switchImages = () => {
    image.map((imageArray) => {
      imageArray.map((image) => {
        if (imageIndex === imageArray.length - 1) {
          setImageIndex(0)
          setChangeImage(!changeImage)
        } else {
          setImageIndex(imageIndex + 1)
          setChangeImage(!changeImage)
        }
        setPOpacity(1)
      })
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setPOpacity(0)
    }, 3000)
    setTimeout(() => {
      switchImages()
    }, 4000)
  }, [changeImage])

  return (
    <div className={styles.left}>
      <div style={{ display: "flex", flex: "0 1 50%" }}>
        <div
          className={styles.image}
          style={{
            flex: "0 1 50%",
            backgroundImage: `url(${image && image[0][imageIndex]?.image.url})`,
            marginRight: "1.5px",
          }}
        />
        <div
          className={styles.image}
          style={{
            flex: "0 1 50%",
            backgroundImage: `url(${image && image[0][imageIndex]?.image.url})`,
            marginLeft: "1.5px",
          }}
        />
      </div>
      <div style={{ display: "flex", flex: "0 1 50%" }}>
        <div
          className={styles.image}
          style={{
            flex: "0 1 100%",
            marginTop: "3px",
            position: "relative",
            backgroundAttachment: "fixed",
            backgroundPosition: "left center",
            backgroundSize: "auto 100%",
            backgroundImage: `url(${image && image[0][imageIndex]?.image.url})`,
          }}
        >
          <div
            style={{
              opacity: pOpacity,
              transition: "opacity 1s ease-in",
              zIndex: 1,
            }}
          >
            <Image
              className={styles.frontImage}
              src={
                image && image?.length ? image[1][imageIndex]?.image.url : ""
              }
              width={image && image[1][imageIndex]?.image.width * 1.3}
              height={image && image[1][imageIndex]?.image.height * 1.3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImagesLeft
