"use client"
import React, { useState, useEffect } from "react"
import { Modak, Whisper, Archivo_Black, Archivo } from "next/font/google"
import styles from "@/app/styles/homePageHero.module.css"

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })

const HomePageHero = () => {
  return (
    <>
      <h1 className={`${styles.imNate} ${archivoBlack.className}`}>
        I'm Nate, a self-taught full stack engineer.
      </h1>
      <h1 className={`${styles.iWant}`}>
        I want to help bring your ideas to life.
      </h1>
    </>
  )
}

export default HomePageHero
