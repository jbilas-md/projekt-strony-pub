// app/(site)/blog/BlogClient.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { BlogPost, CATEGORIES } from "@/app/lib/blog-data";

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
    const [activeCategory, setActiveCategory] = useState("Wszystkie");

    const filteredPosts = activeCategory === "Wszystkie"
        ? posts
        : posts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase().replace(" ", "-"));

    return (
        <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                {/* Filtry */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <button
                        onClick={() => setActiveCategory("Wszystkie")}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === "Wszystkie" ? 'bg-nova-blue text-white' : 'bg-white text-nova-dark'}`}
                    >
                        Wszystkie
                    </button>
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.slug}
                            onClick={() => setActiveCategory(cat.name)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat.name ? 'bg-nova-blue text-white' : 'bg-white text-nova-dark'}`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Grid wpisów */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-3xl p-6 shadow-sm">
                            <h2 className="text-xl font-black mb-4">{post.title}</h2>
                            <p className="text-gray-600 mb-6">{post.excerpt}</p>
                            <Link href={`/blog/${post.slug}`} className="text-nova-blue font-bold">Czytaj więcej →</Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}