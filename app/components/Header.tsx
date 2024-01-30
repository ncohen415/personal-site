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

  useLayoutEffect(() => {
    setIsClient(true)

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

    if (pathname === "/") {
      const tl = gsap.timeline()
      tl.add("start")
      tl.fromTo(
        `.${styles.container}`,
        { yPercent: -100 },
        { yPercent: 0, duration: 1.5, ease: "expo.out" },
        "start"
      )
      tl.fromTo(`.${styles.menu}`, { opacity: 0 }, { opacity: 1 }, 3)
    }
    if (pathname !== ("/" || "/resume")) {
      const tl = gsap.timeline()
      tl.add("start")
      tl.fromTo(
        `.${styles.container}`,
        { yPercent: -100 },
        { yPercent: 0, duration: 0 },
        "start"
      ).fromTo(
        `.${styles.menu}`,
        { opacity: 0, duration: 0 },
        { opacity: 1 },
        0
      )
    }
    if (
      pathname !== "/resume" &&
      heightRef.current !== null &&
      heightRef.current.clientHeight < 100 &&
      containerClass !== undefined
    ) {
      const tl = gsap.timeline()
      tl.fromTo(
        containerClass,
        { paddingTop: "2rem" },
        { paddingTop: "100px", duration: 0.65, ease: "expo.out" },
        "start"
      )
    }

    if (pathname === "/resume" && resumeContainer) {
      const tl = gsap.timeline()
      tl.add("start")
      tl.fromTo(
        `.${styles.container}`,
        { yPercent: 0 },
        { yPercent: -100, duration: 0.65, ease: "expo.out" },
        "start"
      )
      tl.fromTo(
        `.${styles.fullContainer}`,
        { height: 100 },
        { height: 0, duration: 0.65, ease: "expo.out" },
        "start"
      )
      tl.fromTo(`.${styles.menu}`, { opacity: 0 }, { opacity: 1 }, 3)
    }
  }, [pathname])

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
        <ul
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flex: "0 1 50%" }}>
            <div
              style={{
                display: "flex",
                flex: "0 1 30%",
                justifyContent: "flex-start",
              }}
            >
              <Link href="/">
                <p style={{ fontSize: "22px", fontWeight: "700" }}>Nate.</p>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flex: "0 1 30%",
                justifyContent: "flex-start",
              }}
            >
              <a href={`mailto:nate.cohen415@gmail.com`}>
                <p
                  style={{
                    fontSize: "18px",
                  }}
                >
                  Open to work
                </p>
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flex: "0 1 50%",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: "0 1 30%",
                justifyContent: "flex-end",
              }}
            >
              <p style={{ fontSize: "18px" }}>
                <Link href="/work">
                  Work<span>, </span>
                </Link>
                <Link href="/about">
                  About<span>, </span>
                </Link>
                <Link href="/resume">Resume</Link>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flex: "0 1 30%",
                justifyContent: "flex-end",
              }}
            >
              <p style={{ fontSize: "18px" }}>Contact</p>
            </div>
          </div>
          {/* <div className={styles.brandContainer}>
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
                className={`${styles.animationItemsWrapper} ${montserrat.className}`}
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
                className={`${styles.animationItemsWrapper} ${montserrat.className}`}
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
                className={`${styles.animationItemsWrapper} ${montserrat.className}`}
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
          </div> */}
        </ul>
      </div>
      {/* <motion.div
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
            <h1 style={{ fontWeight: "700" }} className={montserrat.className}>
              Nate Cohen
            </h1>
          </div>
          <h3>Software Engineer</h3>
          <ul>
            <li
              style={{ fontWeight: "700" }}
              className={`${styles.menuItem} ${montserrat.className}`}
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
              className={`${styles.menuItem} ${montserrat.className}`}
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
              className={`${styles.menuItem} ${montserrat.className}`}
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
      </motion.div> */}
    </div>
  )
}

export default Header
