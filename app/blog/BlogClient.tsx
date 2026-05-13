"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";

interface BlogClientProps {
    initialPosts: any[];
}

const CATEGORIES = [
    "Aktualności", "Chirurgia", "Ortopedia", "Wazektomia", 
    "Podologia", "Podochirurgia", "Laseroterapia", 
    "Medycyna estetyczna", "Leczenie ran"
];

export default function BlogClient({ initialPosts }: BlogClientProps) {
    const [activeCategory, setActiveCategory] = useState("Wszystkie");

    // Mapujemy posty, dodając automatyczny tag "Aktualności" dla 3 najnowszych
    const processedPosts = initialPosts.map((post, index) => {
        const autoTags = [...(post.categories || [])];
        // Jeśli post jest w pierwszej trójce, dodaj "Aktualności", jeśli jeszcze ich nie ma
        if (index < 3 && !autoTags.includes("Aktualności")) {
            autoTags.unshift("Aktualności");
        }
        // Jeśli post jest starszy (index >= 3), usuń "Aktualności" z wyświetlania
        else if (index >= 3) {
            const tagIndex = autoTags.indexOf("Aktualności");
            if (tagIndex > -1) autoTags.splice(tagIndex, 1);
        }
        return { ...post, displayCategories: autoTags };
    });

    const filteredPosts = activeCategory === "Wszystkie"
        ? processedPosts
        : processedPosts.filter((post) => 
            post.displayCategories?.includes(activeCategory)
          );

    return (
        <main className="pt-32 pb-20 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-4xl font-black tracking-tight text-nova-dark sm:text-5xl uppercase">
                        Baza Wiedzy <span className="text-nova-blue">Novamedic</span>
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600 font-medium">
                        Praktyczne porady i sprawdzone informacje o zdrowiu i urodzie.
                    </p>
                </div>

                <div className="relative z-20 flex flex-wrap items-center justify-center gap-3 mb-12 text-xs font-bold">
                    <button
                        onClick={() => setActiveCategory("Wszystkie")}
                        className={`px-4 py-1 rounded-full border transition-all uppercase ${activeCategory === "Wszystkie" ? 'bg-nova-blue text-white border-nova-blue' : 'bg-white text-nova-dark border-gray-200 hover:border-nova-blue'}`}
                    >
                        Wszystkie
                    </button>
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-1 rounded-full border transition-all uppercase ${activeCategory === cat ? 'bg-nova-blue text-white border-nova-blue' : 'bg-white text-nova-dark border-gray-200 hover:border-nova-blue'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* NAPRAWIONA SIATKA - justify-items-center zapobiega rozciąganiu */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {filteredPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </main>
    );
}