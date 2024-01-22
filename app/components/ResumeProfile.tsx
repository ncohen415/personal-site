"use client"
import React from "react"
import { Archivo_Black, Archivo } from "next/font/google"
import styles from "@/app/styles/resumeProfile.module.css"

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })
const ResumeProfile = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "5000px",
          backgroundColor: "red",
        }}
      />
      <h1
        className={archivoBlack.className}
        style={{ fontSize: "30px", marginTop: "2rem" }}
      >
        Nate Cohen
      </h1>
      <h3
        className={archivo.className}
        style={{ fontSize: "18px", marginTop: ".5rem" }}
      >
        Full Stack Engineer
      </h3>
      <a
        href={`mailto:nate.cohen415@gmail.com`}
        className={`${styles.button} ${archivo.className}`}
        style={{ marginTop: "1rem" }}
      >
        Contact
      </a>
      <hr style={{ width: "100%", margin: "2rem 0 2rem 0" }} />
      <h1 className={archivoBlack.className} style={{ fontSize: "30px" }}>
        Toolkit
      </h1>
      <h3
        className={archivo.className}
        style={{ fontSize: "18px", marginTop: ".5rem" }}
      >
        React/Typescript
      </h3>
      <h3
        className={archivo.className}
        style={{ fontSize: "18px", marginTop: ".5rem" }}
      >
        React Native
      </h3>
      <h3
        className={archivo.className}
        style={{ fontSize: "18px", marginTop: ".5rem" }}
      >
        Django
      </h3>
      <h3
        className={archivo.className}
        style={{ fontSize: "18px", marginTop: ".5rem" }}
      >
        NextJS
      </h3>
      <h3
        className={archivo.className}
        style={{ fontSize: "18px", marginTop: ".5rem" }}
      >
        Gatsby
      </h3>
      <h3
        className={archivo.className}
        style={{ fontSize: "18px", marginTop: ".5rem" }}
      >
        Wordpress
      </h3>
      <h3
        className={archivo.className}
        style={{ fontSize: "18px", marginTop: ".5rem" }}
      >
        Shopify
      </h3>
    </div>
  )
}

export default ResumeProfile
