"use client"
import React, { useState, useEffect, useRef } from "react"
import styles from "@/app/styles/imagesLeft.module.css"
import Image from "next/image"
import useWindowDimensions from "@/app/hooks/useWindowDimensions"

interface ImagesLeftProps {
  bgImages: Array<Object>
  portraitImages: Array<Object>
  startIndex: number
}

const ImagesLeft: React.FC<ImagesLeftProps> = ({
  bgImages,
  portraitImages,
  startIndex,
}) => {
  const [imageIndex, setImageIndex] = useState(startIndex)
  const [pImageIndex, setPImageIndex] = useState(0)
  const [changeImage, setChangeImage] = useState(true)
  const [pChangeImage, setPChangeImage] = useState(true)
  const [pOpacity, setPOpacity] = useState(1)
  const [loading, setLoading] = useState(1)
  const wd = useWindowDimensions()

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
      <div style={{ display: "flex" }}>
        <div
          className={styles.image}
          style={{
            flex: "0 1 50%",
            backgroundImage: `url(${image[0][imageIndex].image.url})`,
          }}
        />
        <div
          className={styles.image}
          style={{
            flex: "0 1 50%",

            backgroundImage: `url(${image[0][imageIndex]?.image.url})`,
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <div
          className={styles.image}
          style={{
            flex: "0 1 100%",
            borderRadius: "15px",
            padding: "2rem",
            margin: "3px",
            position: "relative",
            backgroundAttachment: "fixed",
            backgroundPosition: "bottom left",
            backgroundSize: "auto",
            backgroundImage: `url(${image[0][imageIndex]?.image.url})`,
            WebkitBackgroundSize: "1086px 724px",
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
              src={image[1][imageIndex]?.image.url}
              width={
                image[1][imageIndex]?.image.width *
                (wd?.width > 920 ? 1.5 : 1.3)
              }
              height={
                image[1][imageIndex]?.image.height *
                (wd?.width > 920 ? 1.5 : 1.3)
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImagesLeft
