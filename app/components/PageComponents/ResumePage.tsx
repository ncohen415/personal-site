"use client"
import React, { useLayoutEffect, useRef } from "react"
import { Oswald } from "next/font/google"
import styles from "@/app/styles/resume.module.css"
import { gsap } from "gsap"
import { Linkedin, Instagram, GitHub, Mail, Link2, MapPin } from "react-feather"
import Image from "next/image"
import Headshot from "@/public/images/headshot-removebg-preview.png"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})

interface ResumeItem {
  resumeCompanyName: string
  resumeCompanyRole: string
  resumeStartDate: string
  resumeEndDate: string
  resumeBullets: Array<string>
  resumeCompanyHomepage: string
  resumeCompanyLogo: Record<string, string>
}

interface ResumePageProps {
  resumeItems: Array<ResumeItem>
  //   experience: string
}
const ResumePage: React.FC<ResumePageProps> = ({ resumeItems }) => {
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
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          height: "inherit",
          flexDirection: "column",
        }}
      >
        <div className={styles.resumeHeaderContainer}>
          <div
            style={{
              display: "flex",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: "0 1 30%",
                backgroundColor: "black",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 0px 8px 2px",
              }}
            >
              <div className={styles.image} style={{ overflow: "hidden" }}>
                <Image alt="" src={Headshot} width={400} height={undefined} />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "0 1 70%",
                backgroundColor: "black",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingLeft: "3rem",
                zIndex: "1",
                boxShadow: "0px 0px 8px 2px",
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
                <Link2 color="#fff" style={{ margin: "0 .5rem 0 .5rem" }} />
              </div>
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
                  Details
                </h1>
                <hr style={{ marginTop: "1rem", marginBottom: "1rem" }} />
                <div>
                  <ul>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: ".5rem",
                      }}
                    >
                      <MapPin
                        size={16}
                        color="#000"
                        style={{ margin: "0 .5rem 0 0" }}
                      />
                      Brooklyn, NY
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: ".5rem",
                      }}
                    >
                      <Mail
                        size={16}
                        color="#000"
                        style={{ margin: "0 .5rem 0 0" }}
                      />
                      nate.cohen415(@)gmail.com
                    </li>
                  </ul>
                </div>
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
                  Education
                </h1>
                <hr style={{ marginTop: "1rem", marginBottom: "1rem" }} />
                <div>
                  <ul>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: ".5rem",
                        flexDirection: "column",
                      }}
                    >
                      <strong>• Bachelor of Arts</strong>
                      <p style={{ marginLeft: ".65rem" }}>
                        Oberlin College, Oberlin, OH, 2013-2017{" "}
                      </p>
                    </li>
                  </ul>
                </div>
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
                  Toolkit
                </h1>
                <hr style={{ marginTop: "1rem", marginBottom: "1rem" }} />
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: "0 1 50%" }}>JavaScript</div>
                  <div style={{ flex: "0 1 50%" }}>React</div>
                  <div style={{ flex: "0 1 50%" }}>TypeScript</div>
                  <div style={{ flex: "0 1 50%" }}>React Native</div>
                  <div style={{ flex: "0 1 50%" }}>Python</div>
                  <div style={{ flex: "0 1 50%" }}>HTML5</div>
                  <div style={{ flex: "0 1 50%" }}>CSS3</div>
                  <div style={{ flex: "0 1 50%" }}>Next.js</div>
                  <div style={{ flex: "0 1 50%" }}>Django</div>
                  <div style={{ flex: "0 1 50%" }}>Gatsby</div>
                  <div style={{ flex: "0 1 50%" }}>AWS</div>
                  <div style={{ flex: "0 1 50%" }}>Expo</div>
                  <div style={{ flex: "0 1 50%" }}>Tailwind CSS</div>
                  <div style={{ flex: "0 1 50%" }}>Wordpress</div>
                  <div style={{ flex: "0 1 50%" }}>Shopify</div>
                  <div style={{ flex: "0 1 50%" }}>MongoDB</div>
                  <div style={{ flex: "0 1 50%" }}>PostgreSQL</div>
                  <div style={{ flex: "0 1 50%" }}>SQLite</div>
                </div>
              </div>
            </div>
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
                  prism marxism pitchfork, solarpunk chillwave plaid
                  lumbersexual yes plz authentic distillery meh.
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
    </div>
  )
}

export default ResumePage
