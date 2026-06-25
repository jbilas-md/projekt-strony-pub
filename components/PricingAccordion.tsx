'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface PricingItem {
  name: string;
  price: string;
  description?: string;
}

interface PricingCategory {
  categoryName: string;
  items: PricingItem[];
}

export default function PricingAccordion({ categories }: { categories: PricingCategory[] }) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

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
                isOpen ? 'max-h-[2000px]' : 'max-h-0'
              }`}
            >
              <div className="divide-y divide-gray-100 px-4 md:px-6 pb-6">
                {cat.items?.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="min-w-0">
                      <span className="text-sm md:text-base font-semibold text-slate-700 block">
                        {item.name}
                      </span>
                      {item.description && (
                        <span className="text-xs text-slate-400 font-medium leading-relaxed">
                          {item.description}
                        </span>
                      )}
                    </div>
                    <span className="text-base md:text-lg font-black text-nova-blue shrink-0 font-mono">
                      {item.price} zł
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
