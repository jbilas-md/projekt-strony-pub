// app/lib/sanity.queries.ts
import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

interface SanityImageSource {
  asset?: {
    _ref?: string;
    _type?: string;
  };
}

interface PricingVariant {
  variantName?: string;
  price?: string;
}

interface PricingItem {
  name?: string;
  price?: string;
  variants?: PricingVariant[];
}

interface TreatmentPackage {
  _id: string;
  name?: string;
  slug?: string;
  description?: string;
  price?: string;
  currency?: string;
  priceText?: string;
  features?: string[];
  isPromoted?: boolean;
  tags?: string[];
  paymentProductId?: string;
  paymentPriceId?: string;
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-05-12',
  useCdn: false,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
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
        description,
        variants[] {
          variantName,
          price
        }
      }
    }`,
    {},
    { next: { revalidate: 3600 } }
  );
}

export async function getTreatmentPackagesByTag(tag: string): Promise<TreatmentPackage[]> {
  const query = `*[_type == "treatmentPackage" && ($tag in tags) && (active == true || !defined(active))] | order(order asc) {
    _id,
    name,
    slug,
    description,
    price,
    currency,
    priceText,
    features,
    isPromoted,
    tags,
    paymentProductId,
    paymentPriceId
  }` as const;

  return await (client.fetch(query, { tag }) as Promise<TreatmentPackage[]>);
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

export async function getReviews(limit: number = 3) {
  return await client.fetch(
    `*[_type == "review" && isVisible == true] | order(date desc)[0...$limit] {
      "id": _id,
      author,
      rating,
      source,
      comment,
      date
    }`,
    { limit },
    { next: { revalidate: 0 } }
  );
}

// app/lib/sanity.queries.ts

export async function getProcedureBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "procedure" && slug.current == $slug][0] {
      _id,
      title,
      category,
      teaser,
      content,
      "imageUrl": image.asset->url,
      "pricingCategoryName": pricingCategoryRef->categoryName,
      "pricingItem": coalesce(
        pricingCategoryRef->items[name == ^.specificPricingName][0]{
          name,
          price,
          variants[] {
            variantName,
            price
          }
        },
        pricingCategoryRef->items[name == ^.title][0]{
          name,
          price,
          variants[] {
            variantName,
            price
          }
        }
      )
    }`,
    { slug },
    { next: { revalidate: 0 } }
  );
}

export async function getAllProcedureSlugs() {
  return await client.fetch(`*[_type == "procedure" && defined(slug.current)][].slug.current`);
}

export async function getProceduresByCategory(categoryName: string) {
  return await client.fetch(
    `*[_type == "procedure" && category == $categoryName] | order(title asc) {
      _id,
      title,
      teaser,
      content,
      slug
    }`,
    { categoryName },
    { next: { revalidate: 0 } } // Odświeżanie na żywo w trybie deweloperskim
  );
}