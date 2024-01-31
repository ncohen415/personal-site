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
  const heightRef = useRef<HTMLDivElement>(null)

  // useLayoutEffect(() => {
  //   setIsClient(true)

  //   let containerClass
  //   let location = pathname

  //   if (location === "/") {
  //     containerClass = homepageContainer
  //   }
  //   if (location === "/work") {
  //     containerClass = workContainer
  //   }
  //   if (location === "/about") {
  //     containerClass = aboutContainer
  //   }
  //   if (location === "/resume") {
  //     containerClass = resumeContainer
  //   }

  //   if (pathname === "/") {
  //     const tl = gsap.timeline()
  //     tl.add("start")
  //     tl.fromTo(
  //       `.${styles.container}`,
  //       { yPercent: -100 },
  //       { yPercent: 0, duration: 1.5, ease: "expo.out" },
  //       "start"
  //     )
  //     tl.fromTo(`.${styles.menu}`, { opacity: 0 }, { opacity: 1 }, 3)
  //   }
  //   if (pathname !== ("/" || "/resume")) {
  //     const tl = gsap.timeline()
  //     tl.add("start")
  //     tl.fromTo(
  //       `.${styles.container}`,
  //       { yPercent: -100 },
  //       { yPercent: 0, duration: 0 },
  //       "start"
  //     ).fromTo(
  //       `.${styles.menu}`,
  //       { opacity: 0, duration: 0 },
  //       { opacity: 1 },
  //       0
  //     )
  //   }
  //   if (
  //     pathname !== "/resume" &&
  //     heightRef.current !== null &&
  //     heightRef.current.clientHeight < 100 &&
  //     containerClass !== undefined
  //   ) {
  //     const tl = gsap.timeline()
  //     tl.fromTo(
  //       containerClass,
  //       { paddingTop: "2rem" },
  //       { paddingTop: "100px", duration: 0.65, ease: "expo.out" },
  //       "start"
  //     )
  //   }

  //   if (pathname === "/resume" && resumeContainer) {
  //     const tl = gsap.timeline()
  //     tl.add("start")
  //     tl.fromTo(
  //       `.${styles.container}`,
  //       { yPercent: 0 },
  //       { yPercent: -100, duration: 0.65, ease: "expo.out" },
  //       "start"
  //     )
  //     tl.fromTo(
  //       `.${styles.fullContainer}`,
  //       { height: 100 },
  //       { height: 0, duration: 0.65, ease: "expo.out" },
  //       "start"
  //     )
  //     tl.fromTo(`.${styles.menu}`, { opacity: 0 }, { opacity: 1 }, 3)
  //   }
  // }, [pathname])

  const enterHover = (className1: string, className2: string) => {
    gsap.to(`.${className1}`, {
      y: "-100%",
      duration: 0.5,
    })
    gsap.to(`.${className2}`, {
      y: "-100%",
      duration: 0.5,
    })
  }

  const exitHover = (className1: string, className2: string) => {
    gsap.to(`.${className1}`, {
      y: 0,
      duration: 0.5,
    })
    gsap.to(`.${className2}`, {
      y: 0,
      duration: 0.5,
    })
  }

  const handleNavigate = async (destination: string) => {
    setToggleMenu(false)
    const tl = gsap.timeline()
    tl.add("start")

    let containerClass
    let location = pathname

    if (location === "/") {
      containerClass = homepageContainer
    }
    if (location === "/work") {
      containerClass = workContainer
    }
    if (location === "/about") {
      containerClass = aboutContainer
    }
    if (location === "/resume") {
      containerClass = resumeContainer
    }

    if (containerClass !== undefined && location !== destination) {
      await tl.fromTo(
        containerClass,
        { y: "0", ease: "expo.out" },
        { y: "100vh", duration: 0.5 },
        "start"
      )
      await router.push(destination)
    }
  }

  return (
    <div ref={heightRef} className={styles.fullContainer}>
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
