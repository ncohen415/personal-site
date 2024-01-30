import React from "react"
import AboutPage from "@/app/components/PageComponents/AboutPage"
import PageHeading from "../components/PageHeading"
import Image from "next/image"
import Mirror from "@/public/images/mirror.jpeg"
import styles from "@/app/styles/about.module.css"
const About = () => {
  return (
    <div>
      <PageHeading
        line1={`A PASSION FOR`}
        line2={`CREATING`}
        subtext={`Learn more about my journey, services, and interests.`}
        connectButton={false}
      />
      <div className={styles.portrait}></div>
    </div>
  )
}

export default About
