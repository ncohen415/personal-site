// "use client"
// import React, { useEffect, useState } from "react"
import styles from "@/app/styles/home.module.css"
import {
  Modak,
  Whisper,
  Archivo_Black,
  Archivo,
  Oswald,
} from "next/font/google"
import { Linkedin, Instagram, ArrowDown } from "react-feather"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import Headshot from "@/public/images/headshot-removebg-preview.png"
import Homepage from "@/app/components/PageComponents/Homepage"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})

export default function Page() {
  return <Homepage />
}
