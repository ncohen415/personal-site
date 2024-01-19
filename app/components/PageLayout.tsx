"use client"
import React, { useEffect, useState } from "react"
import Header from "@/app/components/Header"
import styles from "@/app/styles/pageLayout.module.css"

interface Image {
  image: Object
  imageColor: string
  imageType: string
}

interface PageLayoutProps {
  images: Array<Image>
  children: React.ReactNode
}
const PageLayout: React.FC<PageLayoutProps> = ({ images, children }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const [changeImage, setChangeImage] = useState(false)
  const switchImages = () => {
    images?.map((bgImage) => {
      if (imageIndex === images?.length - 1) {
        setImageIndex(0)
      } else {
        setImageIndex(imageIndex + 1)
      }
      setChangeImage(!changeImage)
    })
  }

  useEffect(() => {
    setTimeout(() => {
      switchImages()
    }, 5000)
  }, [changeImage])

  return (
    <main
      style={{
        backgroundImage: `url(${images && images[imageIndex]?.image.url})`,
        backgroundSize: `cover`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        transition: "background-image 1s ease-in-out",
        backgroundAttachment: "fixed",
      }}
    >
      <div style={{ minHeight: "100vh" }}>
        <Header />
        <div>{children}</div>
      </div>
    </main>
  )
}

export default PageLayout
