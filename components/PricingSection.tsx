import { Package } from "@/app/lib/data";

export default function PricingSection({ items }: { items: Package[] }) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mt-12">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`flex flex-col p-8 rounded-3xl border transition-all ${item.isPromoted
                            ? 'border-blue-500 shadow-2xl scale-105 bg-white z-10 relative'
                            : 'border-gray-200 bg-gray-50'
                        }`}
                >
                    {item.isPromoted && (
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-1 rounded-full text-sm font-bold shadow-md">
                            NAJCZĘŚCIEJ WYBIERANY
                        </span>
                    )}

                    <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                    <div className="text-4xl font-black text-blue-600 mb-6">{item.price}</div>

                    {/* flex-1 sprawia, że ta lista "puchnie" i wypycha przycisk na dół */}
                    <ul className="space-y-4 mb-8 flex-1">
                        {item.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-700">
                                <span className="text-blue-500 font-bold">✓</span> {feature}
                            </li>
                        ))}
                    </ul>

                    {/* mt-auto sprawia, że przycisk zawsze jest na tej samej wysokości dna */}
                    <button className={`w-full py-4 rounded-xl font-bold transition ${item.isPromoted
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                            : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                        }`}>
                        Zarezerwuj termin
                    </button>
                </div>
            ))}
        </div>
    );
}