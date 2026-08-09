// components/PricingAccordion.tsx

'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Interfejs dla pojedynczego wariantu
interface PricingVariant {
  variantName: string;
  price: string;
}

// Interfejs dla pozycji cennika
interface PricingItem {
  name: string;
  price?: string;
  description?: string;
  variants?: PricingVariant[];
}

interface PricingCategory {
  categoryName: string;
  items: PricingItem[];
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function PricingAccordion({ categories }: { categories: PricingCategory[] }) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  useEffect(() => {
    const openCategoryByHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      const targetIndex = categories.findIndex((category) => slugify(category.categoryName) === hash);
      if (targetIndex >= 0) {
        setOpenIndexes([targetIndex]);
        window.requestAnimationFrame(() => {
          const element = document.getElementById(hash);
          element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    };

    openCategoryByHash();
    window.addEventListener('hashchange', openCategoryByHash);

    return () => window.removeEventListener('hashchange', openCategoryByHash);
  }, [categories]);

  const toggleCategory = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-6">
      {categories.map((cat, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <section
            key={index}
            id={slugify(cat.categoryName)}
            className="bg-white rounded-3xl shadow-sm border border-gray-100/80 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggleCategory(index)}
              className="w-full flex items-center justify-between px-6 py-5 md:px-8 md:py-6 text-left text-nova-dark hover:bg-nova-blue/5 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-lg md:text-xl font-black uppercase tracking-tight">
                {cat.categoryName}
              </span>
              <ChevronDown
                size={20}
                className={`text-nova-blue transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-[3000px]' : 'max-h-0'
              }`}
            >
              <div className="divide-y divide-gray-100 px-4 md:px-6 pb-6">
                {cat.items?.map((item, itemIndex) => {
                  const hasVariants = item.variants && item.variants.length > 0;

                  return (
                    <div
                      key={itemIndex}
                      className="py-5 first:pt-0 last:pb-0 space-y-3"
                    >
                      {/* Główny wiersz: Nazwa zabiegu + Cena (jeśli brak wariantów) */}
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div className="min-w-0">
                          <span className="text-sm md:text-base font-semibold text-slate-700 block">
                            {item.name}
                          </span>
                          {item.description && (
                            <span className="text-xs text-slate-400 font-medium leading-relaxed block mt-0.5">
                              {item.description}
                            </span>
                          )}
                        </div>

                        {/* Wyświetlamy cenę po prawej stronie TYLKO, gdy nie ma wariantów */}
                        {!hasVariants && item.price && (
                          <span className="text-base md:text-lg font-black text-nova-blue shrink-0 font-mono">
                            {item.price} zł
                          </span>
                        )}
                      </div>

                      {/* Sekcja wariantów (wyświetla się, gdy dodano warianty w Sanity) */}
                      {hasVariants && (
                        <div className="bg-slate-50/80 rounded-2xl p-3 md:p-4 border border-slate-100 space-y-2 mt-2">
                          {item.variants?.map((variant, vIndex) => (
                            <div
                              key={vIndex}
                              className="flex items-center justify-between text-xs md:text-sm pt-2 first:pt-0 border-t border-slate-200/50 first:border-0"
                            >
                              <span className="text-slate-600 font-medium">
                                {variant.variantName}
                              </span>
                              <span className="ftext-base md:text-lg font-black text-nova-blue shrink-0 font-mono">
                                {variant.price} zł
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}