// app/blog/page.tsx
import { getPosts } from "@/app/lib/sanity.queries";
import BlogClient from "./BlogClient";

export const revalidate = 0; // Zapewnia świeże dane przy każdym wejściu

export default async function BlogPage() {
  const posts = await getPosts();

  return <BlogClient initialPosts={posts} />;
}