'use client';
import { useState } from 'react';
import { FAQItem } from '@/app/lib/faqs';

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggle = (index: number) => {
        setOpenIndexes(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="space-y-4 max-w-4xl mx-auto">
            {items.map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all">
                    <button
                        onClick={() => toggle(i)}
                        className="w-full flex justify-between items-center p-8 text-left hover:bg-white/10 transition-colors"
                    >
                        <span className="text-xl font-bold text-nova-light">{item.q}</span>
                        <span className={`text-3xl text-nova-blue transition-transform duration-300 ${openIndexes.includes(i) ? 'rotate-45' : ''}`}>
                            +
                        </span>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${openIndexes.includes(i) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="p-8 pt-0 text-gray-400 leading-relaxed text-lg border-t border-white/5">
                            {item.a}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}