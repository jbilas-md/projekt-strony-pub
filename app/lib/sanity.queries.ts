// sanity.queries.ts

import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-05-12',
  useCdn: false,
})

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getPosts() {
  return await client.fetch(`*[_type == "post"]{
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    "mainImage": mainImage.asset->url,
    "author": author->{name, role, "image": image.asset->url}
  }`)
}

export async function getPostBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      "mainImage": mainImage.asset->url,
      "author": author->{name, role, "image": image.asset->url},
      body,
      "category": "Aktualności" // Możesz to później zamienić na pole w Sanity
    }`,
    { slug }
  );
}