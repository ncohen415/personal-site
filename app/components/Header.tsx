"use client"
import React, { useState, useLayoutEffect, useRef } from "react"
import styles from "@/app/styles/header.module.css"
import { Oswald } from "next/font/google"
import Link from "next/link"
import { Menu } from "react-feather"
import { X } from "react-feather"
import { motion } from "framer-motion"
import { Cross } from "hamburger-react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { useRouter } from "next/navigation"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
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
  const router = useRouter()

  useLayoutEffect(() => {
    setIsClient(true)
    if (window.location.pathname === "/") {
      const tl = gsap.timeline()
      tl.add("start")
      tl.fromTo(
        `.${styles.container}`,
        { yPercent: -100 },
        { yPercent: 0, duration: 1.5, ease: "power3.out" },
        "start"
      )
      tl.fromTo(`.${styles.menu}`, { opacity: 0 }, { opacity: 1 }, 3)
    }
  }, [])

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
    let location = window.location.pathname

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

    if (containerClass !== undefined && location !== destination)
      await tl.fromTo(
        containerClass,
        { y: "0", ease: "power3.out" },
        { y: "100vh", duration: 0.5 },
        "start"
      )
    console.log(location !== destination)
    if (location !== destination) {
      await router.replace(destination)
    }
  }

  return (
    <div>
      <div className={`${styles.container}`}>
        <ul className={styles.navContainer}>
          <div className={styles.brandContainer}>
            <Link
              className={styles.animationContainer}
              style={{ height: "45px" }}
              href="/"
            >
              <div
                onMouseEnter={() =>
                  enterHover(styles.nateInitial, styles.nateHover)
                }
                onMouseLeave={() =>
                  exitHover(styles.nateInitial, styles.nateHover)
                }
                className={`${styles.animationItemsWrapper} ${oswald.className}`}
              >
                <div className={styles.nateInitial}>Nate Cohen</div>
                <div className={styles.nateHover}>Nate Cohen</div>
              </div>
            </Link>
          </div>

          <div className={styles.basedContainer}>
            <a className={styles.animationContainer}>
              <div
                onMouseEnter={() =>
                  enterHover(styles.basedInitial, styles.basedHover)
                }
                onMouseLeave={() =>
                  exitHover(styles.basedInitial, styles.basedHover)
                }
                className={`${styles.animationItemsWrapper} ${oswald.className}`}
              >
                <div className={styles.basedInitial}>Based in Brooklyn, NY</div>
                <div className={styles.basedHover}>Based in Brooklyn, NY</div>
              </div>
            </a>
          </div>

          <div className={styles.contactContainer}>
            <a
              className={styles.animationContainer}
              href={`mailto:nate.cohen415@gmail.com`}
            >
              <div
                onMouseEnter={() =>
                  enterHover(styles.contactInitial, styles.contactHover)
                }
                onMouseLeave={() =>
                  exitHover(styles.contactInitial, styles.contactHover)
                }
                className={`${styles.animationItemsWrapper} ${oswald.className}`}
              >
                <div className={styles.contactHover}>Contact</div>
                <div className={styles.contactInitial}>Contact</div>
              </div>
            </a>
          </div>
          <div
            onClick={() => setToggleMenu(!toggleMenu)}
            className={styles.menuButtonContainer}
          >
            <a
              className={styles.animationContainer}
              style={{
                height: "25px",
              }}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <div
                onMouseEnter={() => enterHover(styles.menu, styles.menu)}
                onMouseLeave={() => exitHover(styles.menu, styles.menu)}
                className={`${styles.animationItemsWrapper}`}
              >
                <div className={styles.menu}>Menu</div>
                <div className={styles.menu}>Menu</div>
              </div>
            </a>
          </div>
        </ul>
      </div>
      <motion.div
        className={styles.menuContainer}
        animate={toggleMenu ? "open" : "closed"}
        initial={"closed"}
        variants={{
          open: {
            opacity: 1,
            height: "100vh",
            width: `${
              isClient &&
              typeof window !== undefined &&
              window?.innerWidth < 802
                ? "100%"
                : "400px"
            }`,
            x: "0",
          },
          closed: {
            opacity: 0,
            height: "100vh",
            width: `${
              isClient &&
              typeof window !== undefined &&
              window?.innerWidth < 802
                ? "100%"
                : "400px"
            }`,
            x: "-100%",
          },
        }}
        transition={{ duration: 0.4 }}
      >
        <X
          className={styles.icon}
          size={35}
          strokeWidth={1}
          color="#fff"
          onClick={() => setToggleMenu(false)}
        />

        <div className={styles.title}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => handleNavigate("/")}
          >
            <h1 style={{ fontWeight: "700" }} className={oswald.className}>
              Nate Cohen
            </h1>
          </div>
          <h3>Software Engineer</h3>
          <ul>
            <li
              style={{ fontWeight: "700" }}
              className={`${styles.menuItem} ${oswald.className}`}
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleNavigate("/work")}
              >
                Work
              </div>
            </li>
            <li
              style={{ fontWeight: "700" }}
              className={`${styles.menuItem} ${oswald.className}`}
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleNavigate("/about")}
              >
                About
              </div>
            </li>
            <li
              style={{ fontWeight: "700" }}
              className={`${styles.menuItem} ${oswald.className}`}
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleNavigate("/resume")}
              >
                Resume
              </div>
            </li>
          </ul>
        </div>
        <div>
          <a href={`mailto:nate.cohen415@gmail.com`} className={styles.button}>
            Contact
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
