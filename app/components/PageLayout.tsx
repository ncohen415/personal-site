"use client"
import React from "react"
import Header from "@/app/components/Header"
import styles from "@/app/styles/pageLayout.module.css"

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.pageLayoutContainer}>
      <Header />
      {children}
    </div>
  )
}

export default PageLayout
