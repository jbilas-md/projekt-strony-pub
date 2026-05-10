// app/(site)/blog/[slug]/page.tsx
import { BLOG_POSTS } from "@/app/lib/blog-data";
import { constructMetadata } from "@/app/lib/seo";
import { notFound } from "next/navigation";
import Image from "next/image"; // Import komponentu obrazu
import Link from "next/link";
import FloatingBackButton from "@/components/blog/FloatingBackButton";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find(p => p.slug === slug);
    if (!post) return {};
    return constructMetadata({
        title: post.title,
        description: post.excerpt,
        slug: `blog/${slug}`,
        image: post.image
    });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) notFound();

    return (
        <article className="pt-32 pb-20 max-w-4xl mx-auto px-4">
            {/* 1. POWRÓT 
            <Link href="/blog" className="text-nova-blue font-bold text-sm uppercase mb-8 inline-block hover:underline">
                ← Powrót
            </Link>*/}
            <FloatingBackButton />
            {/* 2. OBRAZEK GŁÓWNY */}
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-10 shadow-xl">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* 3. NAGŁÓWEK */}
            <div className="mb-10">
                <span className="bg-nova-blue/10 text-nova-blue px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-black my-6 leading-tight text-nova-dark">
                    {post.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-400 font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>Jarosław Biłas</span>
                </div>
            </div>

            {/* 4. TREŚĆ ARTYKUŁU (Z FORMATOWANIEM PROSE) */}
            <div
                className="prose prose-lg max-w-none 
                    prose-headings:text-nova-dark
                    prose-headings:font-black
                    prose-headings:text-slate-900
                    prose-headings:mb-4
                    prose-headings:mt-10
                    prose-p:text-gray-700
                    prose-p:leading-relaxed 
                    prose-p:text-justify
                    prose-p:mb-6
                    prose-li:text-gray-700
                    prose-strong:text-nova-dark
                    prose-strong:text-slate-900
                    prose-img:rounded-3xl"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}