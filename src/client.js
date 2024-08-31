// sanity.js
import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: '8zz6o5yq',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function fetch(query) {
  const data = await client.fetch(query)
  return data
}