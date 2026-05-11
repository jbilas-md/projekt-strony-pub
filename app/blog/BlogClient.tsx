"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, CATEGORIES, AuthorsList } from "@/app/lib/blog-data";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
    const [activeCategory, setActiveCategory] = useState("Wszystkie");

    const filteredPosts = activeCategory === "Wszystkie"
        ? posts
        : posts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase().replace(" ", "-"));

    const getInitials = (name: string) => {
        if (!name) return "NM";
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* NAGŁÓWEK SEKCJI */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-4xl font-black tracking-tight text-nova-dark sm:text-5xl uppercase">
                        Baza Wiedzy <span className="text-nova-blue">Novamedic</span>
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600 font-medium">
                        Praktyczne porady i sprawdzone informacje o zdrowiu i urodzie.
                    </p>
                </div>

                {/* Filtry */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12 text-xs font-bold transition-all">
                    <button
                        onClick={() => setActiveCategory("Wszystkie")}
                        className={`px-4 py-1 rounded-full border transition-colors ${activeCategory === "Wszystkie" ? 'bg-nova-blue text-white border-nova-blue uppercase' : 'bg-white text-nova-dark border-gray-200 hover:border-nova-blue uppercase'}`}
                    >
                        Wszystkie
                    </button>
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.slug}
                            onClick={() => setActiveCategory(cat.name)}
                            className={`px-4 py-1 rounded-full border transition-colors ${activeCategory === cat.name ? 'bg-nova-blue text-white border-nova-blue uppercase' : 'bg-white text-nova-dark border-gray-200 hover:border-nova-blue uppercase'}`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* GRID ARTYKUŁÓW */}
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {filteredPosts.map((post) => {
                        // KLUCZOWY FIX: Wyszukiwanie autora dla każdego posta
                        const author = AuthorsList.find(a => a.id === post.authorId);

                        return (
                            <article key={post.id} className="flex flex-col h-full group">
                                {/* OBRAZEK */}
                                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2]">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>

                                {/* TREŚĆ */}
                                <div className="flex flex-col flex-grow">
                                    {/* META DANE */}
                                    <div className="mt-6 flex items-center gap-x-4 text-xs h-6">
                                        <time dateTime={post.date} className="text-gray-500 font-bold">
                                            {post.date}
                                        </time>
                                        <span className="relative z-10 rounded-full bg-nova-blue/10 px-3 py-1.5 font-bold text-nova-blue uppercase">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* TYTUŁ */}
                                    <div className="mt-4 min-h-[5.25rem]">
                                        <h3 className="text-xl font-black leading-tight text-nova-dark group-hover:text-nova-blue transition-colors line-clamp-3">
                                            <Link href={`/blog/${post.slug}`}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </Link>
                                        </h3>
                                    </div>

                                    {/* OPIS */}
                                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                                        {post.excerpt}
                                    </p>

                                    {/* AUTOR */}
                                    <div className="relative mt-auto pt-8 flex items-center gap-x-4">
                                        <div className="h-10 w-10 rounded-full bg-nova-blue/20 flex items-center justify-center overflow-hidden shrink-0">
                                            {author?.image ? (
                                                <img
                                                    src={author.image}
                                                    alt={author.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <span className="font-bold text-nova-blue text-xs">
                                                    {getInitials(author?.name || "NM")}
                                                </span>
                                            )}
                                        </div>

                                        <div className="text-sm leading-6">
                                            <p className="font-black text-nova-dark leading-none">
                                                {author?.name || "Autor Novamedic"}
                                            </p>
                                            <p className="text-gray-600 text-xs font-medium mt-1">
                                                {author?.role || "Specjalista"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}