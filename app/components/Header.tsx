"use client"
import React, { useState, useLayoutEffect, useRef } from "react"
import styles from "@/app/styles/header.module.css"
import { Oswald, Montserrat } from "next/font/google"
import Link from "next/link"
import { Menu } from "react-feather"
import { X } from "react-feather"
import { motion } from "framer-motion"
import { Cross } from "hamburger-react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

interface HeaderProps {
  homepageContainer?: string
  resumeContainer?: string
  aboutContainer?: string
  workContainer?: string
}

const Header: React.FC<HeaderProps> = ({
  homepageContainer,
  aboutContainer,
  workContainer,
  resumeContainer,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [toggleHeaderVisible, setToggleHeaderVisible] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div
      className={`${styles.fullContainer} ${
        pathname === "/resume" ? styles.hide : ""
      }`}
    >
      <div className={`${styles.container}`}>
        <ul className={styles.nav}>
          <div className={`${styles.navSide} ${styles.left}`}>
            <div className={`${styles.navItemWrapper} ${styles.left}`}>
              <Link href="/">
                <p className={styles.brand}>Nate.</p>
              </Link>
            </div>
            <div className={`${styles.navItemWrapper} ${styles.left}`}>
              <a href={`mailto:nate.cohen415@gmail.com`}>
                <p className={styles.navItemText}>Open to work</p>
              </a>
            </div>
          </div>
          <div className={`${styles.navSide} ${styles.right}`}>
            <div className={`${styles.navItemWrapper} ${styles.right}`}>
              <p className={styles.navItemText}>
                <Link href="/work">
                  Work<span>, </span>
                </Link>
              </p>
              <p className={styles.navItemText}>
                <Link href="/about">
                  About<span>, </span>
                </Link>
              </p>
              <p className={styles.navItemText}>
                <Link href="/resume">Resume</Link>
              </p>
            </div>
            <div className={`${styles.navItemWrapper} ${styles.right}`}>
              <a
                href={`mailto:nate.cohen415@gmail.com`}
                className={styles.navItemText}
              >
                Contact
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Header
