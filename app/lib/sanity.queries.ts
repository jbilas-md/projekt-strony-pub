import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-05-12',
  useCdn: false,
});

const builder = createImageUrlBuilder(client);

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
export async function getPricing() {
  return await client.fetch(
    `*[_type == "pricingCategory"] | order(order asc) {
      categoryName,
      items[] {
        name,
        price,
        description
      }
    }`,
    {},
    { next: { revalidate: 3600 } } // Cache na 1 godzinę (ISR)
  );
}
export async function getFaqCategories() {
  return await client.fetch(`*[_type == "faqCategory"] {
    "slug": slug.current,
    name
  }`);
}

export async function getFaqItems() {
  return await client.fetch(`*[_type == "faqItem"] | order(order asc, _createdAt desc) {
    "_id": _id,
    question,
    answer,
    "plainAnswer": pt::text(answer),
    "categorySlug": category->slug.current
  }`);
}