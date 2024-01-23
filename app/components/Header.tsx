"use client"
import React, { useState, useEffect } from "react"
import styles from "@/app/styles/header.module.css"
import {
  Archivo_Black,
  Archivo,
  Yeseva_One,
  Italiana,
  Antic_Didone,
  DM_Serif_Display,
  Oswald,
} from "next/font/google"
import Link from "next/link"
import { Menu } from "react-feather"
import { X } from "react-feather"
import { motion } from "framer-motion"
import { Cross } from "hamburger-react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

gsap.registerPlugin(TextPlugin)

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })
const yeseva_one = Yeseva_One({ subsets: ["latin"], weight: ["400"] })
const italiana = Italiana({ subsets: ["latin"], weight: ["400"] })
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const tl = gsap.timeline()
    tl.fromTo(
      `.${styles.container}`,
      { y: "-100%" },
      { y: "0", duration: 2, delay: 0.5, ease: "power3.inOut" }
    )
    tl.fromTo(
      `.${styles.menu}`,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 0.15, ease: "power3.inOut" }
    )
  }, [])

  const enterHover = (className1: string, className2: string) => {
    gsap.to(`.${className1}`, {
      y: "-100%",
    })
    gsap.to(`.${className2}`, {
      y: "-100%",
    })
  }

  const exitHover = (className1: string, className2: string) => {
    gsap.to(`.${className1}`, {
      y: 0,
    })
    gsap.to(`.${className2}`, {
      y: 0,
    })
  }

  return (
    <div>
      <div className={`${styles.container}`}>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", flex: "0 1 25%" }}>
            <Link
              className={styles.animationContainer}
              style={{
                overflow: "hidden",
                position: "relative",
                height: "45px",
              }}
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

          <div style={{ display: "flex", flex: "0 1 25%" }}>
            <a
              className={styles.animationContainer}
              style={{
                overflow: "hidden",
                position: "relative",
              }}
            >
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

          <div style={{ display: "flex", flex: "0 1 25%" }}>
            <a
              className={styles.animationContainer}
              style={{
                overflow: "hidden",
                position: "relative",
              }}
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
                overflow: "hidden",
                position: "relative",
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
          <Link onClick={() => setToggleMenu(false)} href={"/"}>
            <h1 style={{ fontWeight: "700" }} className={oswald.className}>
              Nate Cohen
            </h1>
          </Link>
          <h3>Software Engineer</h3>
          <ul>
            <li
              style={{ fontWeight: "700" }}
              className={`${styles.menuItem} ${oswald.className}`}
            >
              <Link onClick={() => setToggleMenu(false)} href={"/work"}>
                Work
              </Link>
            </li>
            <li
              style={{ fontWeight: "700" }}
              className={`${styles.menuItem} ${oswald.className}`}
            >
              <Link onClick={() => setToggleMenu(false)} href={"/about"}>
                About
              </Link>
            </li>
            <li
              style={{ fontWeight: "700" }}
              className={`${styles.menuItem} ${oswald.className}`}
            >
              <Link onClick={() => setToggleMenu(false)} href={"/resume"}>
                Resume
              </Link>
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
