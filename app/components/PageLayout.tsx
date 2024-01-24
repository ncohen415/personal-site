"use client"
import React, { useLayoutEffect, useState } from "react"
import { gsap } from "gsap/gsap-core"
import Header from "@/app/components/Header"
import styles from "@/app/styles/pageLayout.module.css"

interface PageLayoutProps {
  children?: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [timeline, setTimeline] = useState({})

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
      })
      setTimeline(tl)
    })
    return () => context.revert()
  }, [])

  return (
    <main style={{ backgroundColor: "white" }}>
      <Header timeline={timeline} />
      <div className={styles.mainWrapper}>{children}</div>
    </main>
  )
}

export default PageLayout
