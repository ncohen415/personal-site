"use client"
import React, { useLayoutEffect, useState } from "react"
import { gsap } from "gsap/gsap-core"
import Header from "@/app/components/Header"
import styles from "@/app/styles/pageLayout.module.css"
import { AnimationProvider } from "@/app/context/AnimationContext"

interface PageLayoutProps {
  children?: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <main style={{ backgroundColor: "white" }}>
      <Header />
      <div className={styles.mainWrapper}>{children}</div>
    </main>
  )
}

export default PageLayout
