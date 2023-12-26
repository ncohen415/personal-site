import React, { useState } from "react"
import styles from "@/app/styles/header.module.css"
import { Modak, Archivo_Black, Archivo } from "next/font/google"
import Link from "next/link"
import { Menu } from "react-feather"
import { ChevronDown } from "react-feather"
import { motion } from "framer-motion"

const modak = Modak({ subsets: ["latin"], weight: ["400"] })
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })

const Header = () => {
  const [toggleHeader, setToggleHeader] = useState(true)

  //   <motion.div
  //   animate={product ? "open" : "closed"}
  //   variants={{
  //     open: { opacity: 1, height: "fit-content", width: "100%" },
  //     closed: { opacity: 0, height: "0px", width: "100%" },
  //   }}
  //   transition={{ duration: 0.75 }}
  // style={{ minHeight: "500px" }}
  // >

  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <div className={styles.brandContainer}>
          <Link href={"/"}>
            <h1 className={`${styles.brand} ${modak.className}`}>Nate</h1>
          </Link>
        </div>
        <div className={styles.menuContainer}>
          <motion.div
            className={styles.desktopNav}
            initial={"closed"}
            animate={toggleHeader ? "open" : "closed"}
            variants={{
              open: { opacity: 1, x: 0 },
              closed: { opacity: 0, x: "200%" },
            }}
            transition={{ duration: 0.75 }}
            style={{ zIndex: 0 }}
          >
            <ul className={styles.menu}>
              <li className={`${styles.menuItem} ${archivoBlack.className}`}>
                <Link href={"/about"}>ABOUT ME</Link>
              </li>
              <li className={`${styles.menuItem} ${archivoBlack.className}`}>
                <Link href={"/photography"}>PHOTOGRAPHY</Link>
              </li>
              <li className={`${styles.menuItem} ${archivoBlack.className}`}>
                <a href="mailto:nate.cohen415@gmail.com">CONTACT</a>
              </li>
            </ul>
          </motion.div>
          <div className={styles.menuButtonContainer}>
            <button
              onClick={() => setToggleHeader(!toggleHeader)}
              className={styles.menuButton}
            >
              <Menu />
            </button>
          </div>
        </div>
      </nav>
      <motion.div
        className={styles.mobileNav}
        initial={"closed"}
        animate={toggleHeader ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: "-100%" },
        }}
        transition={{ duration: 0.5 }}
        style={{ zIndex: 0 }}
      >
        <ul className={styles.menu}>
          <li className={`${styles.menuItem} ${archivoBlack.className}`}>
            <Link href={"/about"}>ABOUT ME</Link>
          </li>
          <li className={`${styles.menuItem} ${archivoBlack.className}`}>
            <Link href={"/photography"}>PHOTOGRAPHY</Link>
          </li>
          <li className={`${styles.menuItem} ${archivoBlack.className}`}>
            <a href="mailto:nate.cohen415@gmail.com">CONTACT</a>
          </li>
        </ul>
      </motion.div>
      <div className={styles.subNavContainer}>
        <ul className={`${archivoBlack.className} ${styles.subNavList}`}>
          <li style={{ flex: "0 1 50%" }}>
            <div className={styles.subNavListItemTitle}>
              CREDENTIAL{" "}
              <ChevronDown size={13} style={{ marginLeft: ".5rem" }} />
            </div>
            <ul style={{ display: "flex" }}>
              <li
                className={`${archivo.className} ${styles.subNavListItemText}`}
              >
                SOFTWARE ENGINEER - PHOTOGRAPHER
              </li>
            </ul>
          </li>
          <ul
            style={{
              display: "flex",
              flex: "0 1 50%",
              justifyContent: "flex-end",
            }}
          >
            <li style={{ marginRight: "1rem" }} className={styles.established}>
              <div className={styles.subNavListItemTitle}>
                Career Established{" "}
                <ChevronDown size={13} style={{ marginLeft: ".5rem" }} />
              </div>
              <ul>
                <li
                  className={`${archivo.className} ${styles.subNavListItemText}`}
                >
                  MAR, 2020
                </li>
              </ul>
            </li>
            <li>
              <div className={styles.subNavListItemTitle}>
                Instagram{" "}
                <ChevronDown size={13} style={{ marginLeft: ".5rem" }} />
              </div>
              <ul>
                <li
                  className={`${archivo.className} ${styles.subNavListItemText}`}
                >
                  <a
                    href="https://www.instagram.com/natelcohen/?hl=en"
                    target="_blank"
                  >
                    @NATELCOHEN
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default Header
