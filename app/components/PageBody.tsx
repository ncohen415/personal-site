"use client"
import React, { useLayoutEffect } from "react"
import gsap from "gsap"

interface PageBodyProps {
  children?: React.ReactNode
}

const PageBody: React.FC<PageBodyProps> = ({ children }) => {
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    tl.add("start")
    tl.fromTo(
      ".pageBodyContainer",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1.5, delay: 1.75 }
    )
  }, [])
  return <div className="pageBodyContainer">{children}</div>
}

export default PageBody
