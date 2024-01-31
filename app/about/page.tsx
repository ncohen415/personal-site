import React from "react"
import AboutPage from "@/app/components/PageComponents/AboutPage"
import PageHeading from "../components/PageHeading"
import Image from "next/image"
import PageBody from "@/app/components/PageBody"
import styles from "@/app/styles/about.module.css"
import { Montserrat } from "next/font/google"
import AboutFrame from "../components/AboutFrame"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const services = [
  {
    title: "Front End Development",
    description: `I build visually appealing and intuitive user interfaces using
the latest front-end technologies and frameworks. Whether it's
creating responsive designs or implementing interactive
features, I focus on delivering a seamless user experience.`,
  },
  {
    title: "Back End Development",
    description: `Implement server-side logic to support the functionality of your applications and business. From handling user authentication to managing data processing, I ensure the back-end of your system is robust, scalable, and secure.`,
  },
  {
    title: "API Development",
    description: `Design, build, and maintain APIs to facilitate smooth communication between different components of your system. I focus on creating efficient APIs that enhance the scalability and flexibility of your applications.`,
  },
  {
    title: "Database Design and Management",
    description: `Develop scalable database solutions tailored to your data storage and retrieval needs. I work with various database technologies to ensure efficient handling of data, from designing database schemas to query optimization.`,
  },
]

const About = () => {
  return (
    <div className={styles.container}>
      <PageHeading
        line1={`PASSION FOR`}
        line2={`CREATIVITY`}
        subtext={`Learn more about my journey, services, and interests.`}
        connectButton={false}
      />
      <PageBody>
        <div style={{ paddingBottom: "6rem" }}>
          <div className={styles.portrait} />
        </div>
        <div className={styles.section}>
          <div className={styles.sectionSidesWrapper}>
            <div className={styles.sectionLeft}>{`I)`}</div>
            <div className={styles.sectionRight}>
              <div>
                <h2 className={styles.valueProp}>
                  {`I took a non-traditional path to get here.`}
                </h2>
                <br />
                <p style={{ fontSize: "18px" }}>
                  {`In 2019 I took the LSAT and began a path towards law school.
                  At the time I was a freelance photographer supporting myself
                  during that process. I made a career pivot towards engineering
                  as a result of the events of 2020. What drew me to this field
                  was the idea that I could learn something technical while
                  remaining creative.`}
                  <br />
                  <br />
                  {`I immersed myself in a self-guided curriculum, mastering
                  vanilla JavaScript, HTML, CSS, and Wordpress development
                  through a slew of online resources. By May 2020, I had already
                  taken on some freelance projects, applying my new skills in
                  practical scenarios.`}
                  <br />
                  <br />
                  {`Eager to continue to grow as an engineer and expand my
                  toolkit, I continued my self-taught education by learning
                  React and familiarizing myself with Gatsby. By July 2021, I
                  earned a front end focused engineering role, but within 3
                  months familiarized myself with Python and Django and moved
                  into the full stack.`}
                  <strong>
                    {`From that point I knew I'd found my calling.`}
                  </strong>
                  <br />
                  <br />
                  {`I'm continuing to add to my toolkit now by learning Next.js
                  and Typescript. In fact this whole website is built with both
                  of those technologies along with DatoCMS.`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionSidesWrapper}>
            <div className={styles.sectionLeft}>{`II)`}</div>
            <div className={styles.sectionRight}>
              <div>
                <h2 className={styles.valueProp}>
                  {`As a Full Stack Engineer, I provide a comprehensive set of
                  services to help you bring your digital ideas to life. My
                  expertise spans both front end and back end development,
                  enabling me to offer end-to-end solutions tailored to your
                  specifications.`}
                </h2>
                <br />
                <p style={{ fontSize: "18px", fontWeight: "700" }}>
                  {`Take a look at some of the ways I can help you below:`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeading}>
            <div>
              <h1
                className={`${styles.sectionHeadingText} ${montserrat.className}`}
              >
                {`SERVICES`}
              </h1>
            </div>
            <a
              href={`mailto:nate.cohen415@gmail.com`}
              className={styles.button}
            >{`Let's Connect`}</a>
          </div>
          <hr
            style={{ width: "100%", marginTop: "60px", marginBottom: "60px" }}
          />
          {services?.map((service, index) => {
            return (
              <React.Fragment key={index}>
                <div className={styles.serviceRow}>
                  <div>
                    <p className={styles.serviceNumber}>{index + 1}.</p>
                  </div>
                  <div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                  </div>
                  <div>
                    <p className={styles.serviceDescription}>
                      {service.description}
                    </p>
                  </div>
                </div>
                <hr
                  style={{
                    width: "100%",
                    marginTop: "60px",
                    marginBottom: "60px",
                  }}
                />
              </React.Fragment>
            )
          })}
        </div>
        <div className={styles.section}>
          <div className={styles.sectionSidesWrapper}>
            <div className={styles.sectionLeft}>{`III)`}</div>
            <div className={styles.sectionRight}>
              <div>
                <h2 className={styles.valueProp}>
                  {`When I'm not coding you can catch me out and about shooting
                  film, playing pool, weightlifting, or owning n00bz in Warzone.`}
                </h2>
                <br />
                {/* <div className={styles.valuePropDetail}>
                <div className={styles.valueLeft}>
                  <h3></h3>
                  <p></p>
                </div>
                <div className={styles.valueRight}></div>
              </div> */}
              </div>
            </div>
          </div>
          <div className={styles.sectionSidesWrapper}>
            <AboutFrame />
            <AboutFrame />
            <AboutFrame />
            <AboutFrame />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionSidesWrapper}>
            <div className={styles.sectionLeft}>{`IV)`}</div>
            <div className={styles.sectionRight}>
              <div>
                <h2 className={styles.valueProp}>
                  {`Do you have an idea that you're excited about?`}
                  <br />
                  <br />
                  {`Let's make it a reality.`}
                </h2>
                <a
                  href={`mailto:nate.cohen415@gmail.com`}
                  className={styles.button}
                >{`Let's Connect`}</a>
              </div>
            </div>
          </div>
        </div>
      </PageBody>
    </div>
  )
}

export default About
