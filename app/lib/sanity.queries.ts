import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-05-12',
  useCdn: false,
});

const builder = createImageUrlBuilder(client);
// Ta funkcja jest kluczowa - ona zamienia obiekt Sanity na link .jpg
export function urlFor(source: any) { 
    return builder.image(source); 
}

export async function getPosts() {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage,
    "author": author->{name, role, image},
    "categories": categories[]
  }`);
}

export async function getPostBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      mainImage,
      "author": author->{name, role, image},
      body,
      "categories": categories[]
    }`,
    { slug }
  );
}