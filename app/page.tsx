import styles from "@/app/styles/home.module.css"
import { Oswald } from "next/font/google"
import PageHeading from "./components/PageHeading"
import Homepage from "@/app/components/PageComponents/Homepage"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700"],
})

export default function Page() {
  return (
    <div className={styles.container}>
      <PageHeading
        line1={`NATE COHEN`}
        line2={`SOFTWARE ENGINEER`}
        subtext={`I'm a self-taught Full Stack Engineer based in Brooklyn, New York. I love
  art, creating, and bringing interesting ideas to life.`}
        connectButton={true}
      />
    </div>
  )
}
