"use client"
import React, { useState, useEffect } from "react"
import styles from "@/app/styles/header.module.css"
import { Archivo_Black, Archivo } from "next/font/google"
import Link from "next/link"
import { Menu } from "react-feather"
import { X } from "react-feather"
import { motion } from "framer-motion"
import { Cross } from "hamburger-react"

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className={styles.container}>
      <div
        onClick={() => setToggleMenu(!toggleMenu)}
        className={styles.menuButtonContainer}
      >
        <p style={{ padding: "0 16px 0 16px" }}>Menu</p>
        <Cross
          direction="left"
          size={20}
          toggled={toggleMenu}
          toggle={setToggleMenu}
        />
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
            <h1 className={archivoBlack.className}>Nate Cohen</h1>
          </Link>
          <h3 className={archivo.className}>Software Engineer</h3>
          <ul>
            <li className={`${styles.menuItem} ${archivoBlack.className}`}>
              <Link onClick={() => setToggleMenu(false)} href={"/work"}>
                Work
              </Link>
            </li>
            <li className={`${styles.menuItem} ${archivoBlack.className}`}>
              <Link onClick={() => setToggleMenu(false)} href={"/about"}>
                About
              </Link>
            </li>
            <li className={`${styles.menuItem} ${archivoBlack.className}`}>
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
