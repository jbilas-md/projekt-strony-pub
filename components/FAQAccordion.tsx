'use client';

import { useState } from 'react';
import { FAQItem } from '@/app/lib/faq-data';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggle = (index: number) => {
        setOpenIndexes(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="space-y-4 max-w-3xl mx-auto">
            {items.map((item, i) => {
                const isOpen = openIndexes.includes(i);
                return (
                    <div 
                        key={i} 
                        className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <button
                            onClick={() => toggle(i)}
                            className="w-full flex justify-between items-center p-5 md:p-6 text-left text-nova-dark hover:text-nova-blue transition-colors gap-4"
                            aria-expanded={isOpen}
                        >
                            <span className="text-base md:text-lg font-black leading-snug">
                                {item.question}
                            </span>
                            <ChevronDown 
                                size={18} 
                                className={`text-nova-blue shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                            />
                        </button>
                        
                        <div 
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                isOpen ? 'max-h-[500px] border-t border-gray-50 bg-gray-50/30' : 'max-h-0'
                            }`}
                        >
                            <p className="p-5 md:p-6 text-gray-600 leading-relaxed text-sm md:text-base font-medium">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}