"use server"
import { unstable_noStore, unstable_cache } from "next/cache"

export async function getWeightlifting() {
  try {
    const data = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.DATO_GRAPHQL_API_KEY}`,
      },
      body: JSON.stringify({
        query: `
        {
          allWeightliftingVidows {
            weightliftingVideo {
              video {
                mp4Url
              }
            }
          }
        }
          
          `,
      }),
    })
    return data.json()
  } catch (error) {
    console.log(error)
  }
}
export async function getImages() {
  try {
    const data = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.DATO_GRAPHQL_API_KEY}`,
      },
      body: JSON.stringify({
        query: `
          {
            allPhotographyImages {
              image {
                url
              }
            }
          }
          
          `,
      }),
    })
    return data.json()
  } catch (error) {
    console.log(error)
  }
}
export async function getWork() {
  try {
    const data = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.DATO_GRAPHQL_API_KEY}`,
      },
      body: JSON.stringify({
        query: `{
          allWorkItems {
            projectTitle
            projectDescription
            projectProductionLink
            projectHomepageLink
            projectType
            projectShortDescription
            projectLogo {
              url
            }
            projectBackgroundImage {
              url
            }
          }
        }
              
          `,
      }),
    })
    return data.json()
  } catch (error) {
    console.log(error)
  }
}
export async function getProject(projectTitle: string) {
  try {
    const data = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.DATO_GRAPHQL_API_KEY}`,
      },
      body: JSON.stringify({
        query: `{
          allWorkItems(filter: {projectTitle: {eq: ${projectTitle}}}) {
            projectDescription
            projectHomepageLink
            projectProductionLink
            projectTitle
            projectServices
            projectShortDescription
            projectBackgroundImage {
              url
            }
          }
        }   
          `,
      }),
    })
    return data.json()
  } catch (error) {
    console.log(error)
  }
}
export async function getResumeItems() {
  try {
    const data = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.DATO_GRAPHQL_API_KEY}`,
      },
      body: JSON.stringify({
        query: `{
          allResumeItems {
            resumeCompanyName
            resumeCompanyRole
            resumeStartDate
            resumeEndDate
            resumeBullets
            resumeCompanyHomepage
            resumeItemOrder
            resumeCompanyLogo {
              url
            }
          }
        }    
          `,
      }),
    })
    return data.json()
  } catch (error) {
    console.log(error)
  }
}
