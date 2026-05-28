"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { ChevronDown } from 'lucide-react';

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
                
                {/* NAGŁÓWEK */}
                <div className="mx-auto max-w-2xl text-center mb-12">
                    <h2 className="text-4xl font-black tracking-tight text-nova-dark sm:text-5xl uppercase">
                        Baza Wiedzy <span className="text-nova-blue">Novamedic</span>
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600 font-medium">
                        Praktyczne porady i sprawdzone informacje o zdrowiu i urodzie.
                    </p>
                </div>

                {/* NOWY STYLIZOWANY SELECT BOX (Zastąpił przyciski) */}
                <div className="flex justify-center mb-16 relative z-30">
                    <div className="relative w-full max-w-xs">
                        <select
                            value={activeCategory === "Wszystkie" ? "" : activeCategory}
                            onChange={(e) => {
                                setActiveCategory(e.target.value || "Wszystkie");
                            }}
                            className="w-full appearance-none bg-white border border-gray-200 hover:border-nova-blue px-5 py-3.5 pr-10 rounded-xl text-nova-dark font-black tracking-wider uppercase focus:outline-none focus:border-nova-blue focus:ring-2 focus:ring-nova-blue/10 shadow-sm transition-all cursor-pointer text-xs md:text-sm"
                        >
                            <option value="" className="text-gray-400 font-bold">Wszystkie kategorie</option>
                            {CATEGORIES.map((cat) => (
                                <option key={cat} value={cat} className="text-nova-dark font-bold normal-case">
                                    {cat}
                                </option>
                            ))}
                        </select>
                        
                        {/* Własna strzałka z lucide-react */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-nova-blue">
                            <ChevronDown size={16} className="stroke-[3]" />
                        </div>
                    </div>
                </div>

                {/* NAPRAWIONA SIATKA - z dodanym justify-items-center zgodnie z Twoim komentarzem */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-items-center">
                    {filteredPosts.map((post) => (
                        <BlogCard key={post.slug?.current || post.slug} post={post} />
                    ))}
                </div>

                {/* Brak wyników */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-12 text-gray-400 font-bold">
                        Brak artykułów w wybranej kategorii.
                    </div>
                )}
            </div>
        </main>
    );
}