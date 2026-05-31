// app/lib/sanity.queries.ts
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

// --- BLOG ---
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

// --- CENNIK ---
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
    { next: { revalidate: 3600 } }
  );
}

// --- FAQ ---
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

// --- ZABIEGI (NOWOŚĆ) ---
export async function getFeaturedProcedures() {
  return await client.fetch(
    `*[_type == "procedure" && isFeatured == true] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      "imageUrl": image.asset->url
    }`,
    {},
    { next: { revalidate: 0 } }
  );
}

export async function getProcedureBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "procedure" && slug.current == $slug][0] {
      _id,
      title,
      teaser,
      content,
      "imageUrl": image.asset->url
    }`,
    { slug },
    { next: { revalidate: 0 } }
  );
}

export async function getAllProcedureSlugs() {
  return await client.fetch(`*[_type == "procedure" && defined(slug.current)][].slug.current`);
}