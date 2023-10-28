import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_DATASET,
    apiVersion: "2023-10-21",
    useCdn: false,
    token: process.env.NEXT_PUBLIC_TOKEN,
    ignoreBrowserTokenWarning: true
  })
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);