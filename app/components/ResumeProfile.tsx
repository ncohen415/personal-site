"use client"
import React, { useLayoutEffect, useRef } from "react"
import { Oswald } from "next/font/google"
import styles from "@/app/styles/resumeProfile.module.css"
import { gsap } from "gsap"
import { Linkedin, Instagram, GitHub, Mail } from "react-feather"
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})
const ResumeProfile = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    gsap.defaults({
      duration: 1.5,
    })
    tl.add("start")
    // tl.fromTo(
    //   `.${styles.profileContainer}`,
    //   { y: "-100vh" },
    //   { y: "0", duration: 0.75, ease: "expo.out" },
    //   "start"
    // )
  }, [])
  const widthRef = useRef<HTMLDivElement>(null)
  return (
    <div
      style={{
        display: "flex",
        height: "inherit",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: "0 1 25%",
          backgroundColor: "red",
          height: "100%",
          minHeight: "225px",
        }}
      >
        <div
          style={{ display: "flex", height: "100%", backgroundColor: "yellow" }}
        >
          <div
            style={{
              display: "flex",
              flex: "0 1 30%",
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={styles.image} />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "0 1 70%",
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <h1
              style={{
                fontSize: "45px",
                color: "white",
                fontWeight: "700",
              }}
              className={oswald.className}
            >
              Nate Cohen
            </h1>
            <h3
              style={{
                fontSize: "25px",
                color: "white",
              }}
              className={oswald.className}
            >
              Full Stack Engineer
            </h3>
            <div
              style={{
                display: "flex",
                marginTop: "1rem",
              }}
            >
              <Linkedin color="#fff" style={{ margin: "0 .5rem 0 .5rem" }} />
              <GitHub color="#fff" style={{ margin: "0 .5rem 0 .5rem" }} />
              <Instagram color="#fff" style={{ margin: "0 .5rem 0 .5rem" }} />
              <Mail color="#fff" style={{ margin: "0 .5rem 0 .5rem" }} />
            </div>
            name/role/icons w links to linkedin github and instagram
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: " 0 1 75%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: "0 1 30%",
            justifyContent: "center",
            backgroundColor: "rgba(255, 0, 0, .3)",
            alignItems: "center",
          }}
        >
          education/toolkit
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "0 1 70%",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "100%",
              overflow: "scroll",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1rem 3rem 1rem 3rem",
              }}
            >
              <h1
                style={{
                  fontSize: "45px",
                  color: "black",
                  fontWeight: "700",
                }}
                className={oswald.className}
              >
                Summary
              </h1>
              <hr style={{ marginTop: "1rem", marginBottom: "1rem" }} />
              <p>
                Man bun cupping iceland, godard mustache fam venmo Brooklyn
                umami vibecession flannel echo park taxidermy vegan shaman.
                Fanny pack dreamcatcher iceland vaporware salvia. Cloud bread
                prism marxism pitchfork, solarpunk chillwave plaid lumbersexual
                yes plz authentic distillery meh.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1rem 3rem 1rem 3rem",
              }}
            >
              <h1
                style={{
                  fontSize: "45px",
                  color: "black",
                  fontWeight: "700",
                }}
                className={oswald.className}
              >
                Experience
              </h1>
              <hr style={{ marginTop: "1rem", marginBottom: "1rem" }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1rem 3rem 1rem 3rem",
              }}
            >
              <h1
                style={{
                  fontSize: "45px",
                  color: "black",
                  fontWeight: "700",
                }}
                className={oswald.className}
              >
                References
              </h1>
              <hr style={{ marginTop: "1rem", marginBottom: "1rem" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeProfile
