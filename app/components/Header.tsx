"use_client"
import React from "react"
import styles from "@/app/styles/header.module.css"
import { Modak, Archivo_Black } from "next/font/google"
import Link from "next/link"
import { Menu } from "react-feather"

const modak = Modak({ subsets: ["latin"], weight: ["400"] })
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const Header = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.brandContainer}>
        <Link href={"/"}>
          <h1 className={`${styles.brand} ${modak.className}`}>Nate</h1>
        </Link>
      </div>
      <div className={styles.menuContainer}>
        <div>
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
        </div>
        <div className={styles.menuButtonContainer}>
          <button className={styles.menuButton}>
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
