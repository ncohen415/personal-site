import React from "react"
import PageLayout from "../components/PageLayout"
import styles from "@/app/styles/about.module.css"
import Image from "next/image"
import Waves from "@/public/images/waves.jpeg"

const About = () => {
  return (
    <PageLayout>
      <div className={styles.innerWrapper}>
        <div className={styles.photo}>
          <Image src={Waves} width={1089} height={722} alt="" />
        </div>
        <div className={styles.text}>
          <p>
            I&apos;m baby pork belly put a bird on it kombucha listicle you
            probably haven&apos;t heard of them retro. Gluten-free whatever
            actually, bushwick ennui everyday carry pok pok mumblecore forage
            brunch. Lyft bitters hexagon leggings marfa pop-up. Selfies
            90&apos;s mukbang pinterest cardigan copper mug praxis seitan.
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
            Humblebrag church-key actually crucifix mukbang, trust fund
            intelligentsia beard tote bag sriracha shoreditch blue bottle
            activated charcoal. Tbh narwhal flannel godard. Gluten-free food
            truck adaptogen single-origin coffee, lumbersexual try-hard yes plz
            lo-fi tbh irony blog. Semiotics tumeric asymmetrical tbh edison bulb
            vibecession lomo fam, shabby chic leggings actually fingerstache
            selvage lyft. Shoreditch poke tumblr, celiac vaporware cloud bread
            schlitz +1 cray four loko same sus plaid.
          </p>
          <br />
          <p>
            Humblebrag church-key actually crucifix mukbang, trust fund
            intelligentsia beard tote bag sriracha shoreditch blue bottle
            activated charcoal. Tbh narwhal flannel godard. Gluten-free food
            truck adaptogen single-origin coffee, lumbersexual try-hard yes plz
            lo-fi tbh irony blog. Semiotics tumeric asymmetrical tbh edison bulb
            vibecession lomo fam, shabby chic leggings actually fingerstache
            selvage lyft. Shoreditch poke tumblr, celiac vaporware cloud bread
            schlitz +1 cray four loko same sus plaid.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default About
