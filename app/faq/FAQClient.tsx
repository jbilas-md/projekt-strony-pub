// app/faq/FAQClient.tsx
"use client";

import { useState } from "react";
import { FAQItem, FAQCategory } from "@/app/lib/faq-data";
import { ChevronDown } from "lucide-react";

export default function FAQClient({ items, categories }: { items: FAQItem[], categories: FAQCategory[] }) {
    const [activeCategory, setActiveCategory] = useState("wszystkie");
    const [openId, setOpenId] = useState<string | null>(null);

    const filteredItems = activeCategory === "wszystkie"
        ? items
        : items.filter(item => item.categorySlug === activeCategory);

    const toggleFaq = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
            {/* Nagłówek */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-black tracking-tight text-nova-dark sm:text-5xl uppercase">
                    Często Zadawane <span className="text-nova-blue">Pytania</span>
                </h1>
                <p className="mt-4 text-lg leading-8 text-gray-600 font-medium">
                    Znajdź szybkie odpowiedzi na pytania dotyczące procedur medycznych i organizacji wizyt.
                </p>
            </div>

            {/* Nowy, Mobilny Układ Filtrowania */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 text-xs font-bold bg-gray-50/50 p-4 rounded-2xl border border-gray-100 sm:border-none sm:bg-transparent sm:p-0">

                {/* Separator / Tekst pomocniczy */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-left">
                    <span className="text-gray-500 uppercase tracking-wider text-[11px] font-black shrink-0 sm:mt-0 mt-2">
                        Wybierz interesującą kategorię:
                    </span>
                    
                    {/* Stylizowany Select Box */}
                    <div className="relative w-full sm:w-72">
                        <select
                            value={activeCategory === "wszystkie" ? "" : activeCategory}
                            onChange={(e) => {
                                setActiveCategory(e.target.value || "wszystkie");
                                setOpenId(null);
                            }}
                            className="w-full appearance-none bg-white border border-gray-200 hover:border-nova-blue px-4 py-3 pr-10 rounded-xl text-nova-dark font-black tracking-wider uppercase focus:outline-none focus:border-nova-blue focus:ring-2 focus:ring-nova-blue/10 shadow-sm transition-all cursor-pointer"
                        >
                            <option value="" className="text-gray-400 font-bold">Wszystkie</option>
                            {categories.map((cat) => (
                                <option key={cat.slug} value={cat.slug} className="text-nova-dark font-bold normal-case">
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                        {/* Własna strzałka zamiast domyślnej systemowej */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-nova-blue">
                            <ChevronDown size={16} className="stroke-[3]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Lista Pytań - Akordeon */}
            <div className="space-y-4">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => {
                        const isOpen = openId === item.id;
                        return (
                            <div 
                                key={item.id} 
                                className="border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleFaq(item.id)}
                                    className="w-full flex items-center justify-between p-6 text-left font-black text-nova-dark hover:text-nova-blue transition-colors gap-4"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-base md:text-lg leading-snug">{item.question}</span>
                                    <ChevronDown 
                                        size={20} 
                                        className={`text-nova-blue shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                                    />
                                </button>
                                
                                <div 
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        isOpen ? "max-h-[500px] border-t border-gray-100 bg-white" : "max-h-0"
                                    }`}
                                >
                                    <div className="p-6 text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center text-gray-500 py-8 font-medium">Brak pytań w tej kategorii.</p>
                )}
            </div>
        </div>
    );
}