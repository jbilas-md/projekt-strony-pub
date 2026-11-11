// app/lib/sanity.queries.ts
import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { ArbitraryTypedObject, PortableTextBlock } from '@portabletext/types';
import { apiVersion, dataset, projectId } from '@/sanity/env';
import type { Review } from './reviews';

export interface SanityImageSource {
  asset?: {
    _ref?: string;
    _type?: string;
  };
}

export type PortableTextValue = Array<PortableTextBlock | ArbitraryTypedObject>;

export interface BlogAuthor {
  name?: string | null;
  role?: string | null;
  image?: SanityImageSource | null;
}

export interface BlogPostSummary {
  title: string;
  slug: string;
  publishedAt?: string | null;
  excerpt?: string | null;
  mainImage?: SanityImageSource | null;
  author?: BlogAuthor | null;
  categories?: string[] | null;
}

export interface BlogPost extends BlogPostSummary {
  body: PortableTextValue;
}

export interface PricingVariant {
  variantName?: string;
  price?: string;
}

export interface PricingItem {
  name: string;
  price?: string;
  description?: string;
  variants?: PricingVariant[];
}

export interface PricingCategory {
  categoryName: string;
  items: PricingItem[];
}

export interface TreatmentPackage {
  _id: string;
  name?: string;
  description?: string;
  price?: number | string;
  currency?: string;
  priceText?: string;
  features?: string[];
  isPromoted?: boolean;
  tags?: string[];
}

export interface FAQCategory {
  slug: string;
  name: string;
}

export interface FAQItem {
  _id: string;
  question: string;
  answer: PortableTextValue;
  plainAnswer: string;
  categorySlug?: string | null;
}

export interface FeaturedProcedure {
  _id: string;
  title: string;
  slug: string;
  imageUrl?: string | null;
}

export interface ProcedureSummary {
  _id: string;
  title: string;
  teaser?: string | null;
  content?: PortableTextValue | null;
  slug?: { current?: string } | null;
}

export interface ProcedureDetails extends ProcedureSummary {
  category?: string | null;
  imageUrl?: string | null;
  pricingCategoryName?: string | null;
  pricingItem?: PricingItem | null;
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// --- BLOG ---
export async function getPosts() {
  return client.fetch<BlogPostSummary[]>(`*[_type == "post"] | order(publishedAt desc) {
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
  return client.fetch<BlogPost | null>(
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
  return client.fetch<PricingCategory[]>(
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
  const tagLiteral = JSON.stringify(tag);
  const query: string = `*[_type == "treatmentPackage" && (${tagLiteral} in tags) && (active == true || !defined(active))] | order(order asc) {
    _id,
    name,
    description,
    price,
    currency,
    priceText,
    features,
    isPromoted,
    tags
  }`;

  return client.fetch<TreatmentPackage[]>(query);
}

// --- FAQ ---
export async function getFaqCategories() {
  return client.fetch<FAQCategory[]>(`*[_type == "faqCategory"] {
    "slug": slug.current,
    name
  }`);
}

export async function getFaqItems() {
  return client.fetch<FAQItem[]>(`*[_type == "faqItem"] | order(order asc, _createdAt desc) {
    "_id": _id,
    question,
    answer,
    "plainAnswer": pt::text(answer),
    "categorySlug": category->slug.current
  }`);
}

export async function getFeaturedProcedures() {
  return client.fetch<FeaturedProcedure[]>(
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
  return client.fetch<Review[]>(
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

export async function getProcedureBySlug(slug: string) {
  return client.fetch<ProcedureDetails | null>(
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
  return client.fetch<string[]>(`*[_type == "procedure" && defined(slug.current)][].slug.current`);
}

export async function getProceduresByCategory(categoryName: string) {
  return client.fetch<ProcedureSummary[]>(
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