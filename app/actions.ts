"use server"
import { unstable_noStore, unstable_cache } from "next/cache"

export async function getBackgroundImages() {
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
            allImages(filter: {imageType: {eq: "background"}}) {
              image {
                url
              }
              imageColor
              imageType
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

export async function getPortraitImages() {
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
            allImages(filter: {imageType: {eq: "no_bg_portrait"}}) {
              image {
                url
              }
              imageColor
              imageType
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
