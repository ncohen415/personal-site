"use client"
import React, { useEffect, useState, useCallback } from "react"
import Header from "@/app/components/Header"
import styles from "@/app/styles/pageLayout.module.css"

interface Image {
  image: any
  imageColor: string
  imageType: string
}

interface PageLayoutProps {
  images?: Array<Image>
  children?: React.ReactNode
}
const PageLayout: React.FC<PageLayoutProps> = ({ images, children }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const [changeImage, setChangeImage] = useState(false)

  const switchImages = useCallback(() => {
    images?.map((bgImage) => {
      if (imageIndex === images?.length - 1) {
        setImageIndex(0)
      } else {
        setImageIndex(imageIndex + 1)
      }
      setChangeImage(!changeImage)
    })
  }, [changeImage, imageIndex, images])

  useEffect(() => {
    setTimeout(() => {
      switchImages()
    }, 5000)
  }, [switchImages])

  return (
    <main style={{ backgroundColor: "white" }}>
      <div style={{ minHeight: "100vh", overflow: "scroll" }}>
        <Header />
        <div className={styles.mainWrapper}>{children}</div>
      </div>
    </main>
  )
}

export default PageLayout
