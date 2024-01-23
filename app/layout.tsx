import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/app/components/Header"
import PageLayout from "@/app/components/PageLayout"
import { getBackgroundImages } from "@/app/actions"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Nate Cohen",
  description: "I want to bring your ideas to life",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await getBackgroundImages()
  const images = data.data.allImages
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-black`}>
        <PageLayout images={images}>{children}</PageLayout>
      </body>
    </html>
  )
}

{
  /* <script src="https://unpkg.com/split-type"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>

<script>
let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('[animate] .char', {
  y: '100%',
  opacity: 1,
  duration: 0.1,
  ease: 'power3.out',
  stagger: 0.1,
  
})
</script> */
}
