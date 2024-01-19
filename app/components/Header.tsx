import React, { useState } from "react"
import styles from "@/app/styles/header.module.css"
import { Archivo_Black, Archivo } from "next/font/google"
import Link from "next/link"
import { Menu } from "react-feather"
import { ChevronDown } from "react-feather"
import { motion } from "framer-motion"
import { Cross } from "hamburger-react"

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] })
const archivo = Archivo({ subsets: ["latin"], weight: ["400"] })

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.menuButtonContainer}>
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
          open: { opacity: 1, height: "100vh", width: "400px", x: "0" },
          closed: { opacity: 0, height: "100vh", width: "400px", x: "-100%" },
        }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.title}>
          <h1 className={archivoBlack.className}>Nate Cohen</h1>
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
          <button className={styles.button}>Contact</button>
        </div>
      </motion.div>
    </div>
  )
}

export default Header

{
  /* <div className={styles.menuContainer}>
<ul className={styles.menu}>
  <li className={`${styles.menuItem} ${archivo.className}`}>
    <Link href={"/work"}>Work</Link>
  </li>
  <li className={`${styles.menuItem} ${archivo.className}`}>
    <Link href={"/about"}>About</Link>
  </li>
  <li className={`${styles.menuItem} ${archivo.className}`}>
    <Link href={"/resume"}>Resume</Link>
  </li>
  <li className={`${styles.menuItem} ${archivo.className}`}>
    <a href={`mailto:nate.cohen415@gmail.com`}>Contact</a>
  </li>
</ul>
</div> */
}
