"use client"
import React, { useLayoutEffect } from "react"
import styles from "@/app/styles/about.module.css"
import Image from "next/image"
import Waves from "@/public/images/waves.jpeg"
import { gsap } from "gsap"

const AboutPage = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    gsap.defaults({
      duration: 1.5,
    })
    tl.add("start")
    tl.fromTo(
      `.${styles.photo}`,
      { y: "-100vh" },
      { y: "0", duration: 0.75, ease: "expo.out" },
      "start"
    ).fromTo(
      `.${styles.text}:nth-child(2)`,
      { y: "100vh" },
      { y: "0", duration: 0.75, ease: "expo.out" },
      "start"
    )
  }, [])
  return (
    <div className={styles.innerWrapper}>
      <div className={styles.photo}>
        <Image src={Waves} width={1089} height={722} alt="" />
      </div>
      <div className={styles.text}>
        <p>
          I&apos;m baby pork belly put a bird on it kombucha listicle you
          probably haven&apos;t heard of them retro. Gluten-free whatever
          actually, bushwick ennui everyday carry pok pok mumblecore forage
          brunch. Lyft bitters hexagon leggings marfa pop-up. Selfies 90&apos;s
          mukbang pinterest cardigan copper mug praxis seitan.
        </p>
        <br />
        <p>
          Bodega boys keffiyeh readymade, man braid biodiesel meh chambray
          mlkshk mukbang bitters listicle cliche JOMO gentrify. VHS meggings
          actually edison bulb mukbang butcher artisan vexillologist drinking
          vinegar ramps mlkshk echo park. Palo santo post-ironic fit banh mi
          succulents. Typewriter skateboard bespoke, selvage portland neutral
          milk hotel hashtag meh yuccie ennui neutra vibecession kinfolk.
        </p>
        <br />
        <p>
          Bodega boys keffiyeh readymade, man braid biodiesel meh chambray
          mlkshk mukbang bitters listicle cliche JOMO gentrify. VHS meggings
          actually edison bulb mukbang butcher artisan vexillologist drinking
          vinegar ramps mlkshk echo park. Palo santo post-ironic fit banh mi
          succulents. Typewriter skateboard bespoke, selvage portland neutral
          milk hotel hashtag meh yuccie ennui neutra vibecession kinfolk.
        </p>
        <br />
      </div>
    </div>
  )
}

export default AboutPage
