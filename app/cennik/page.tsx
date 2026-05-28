// app/cennik/page.tsx
import Link from 'next/link';
import { getPricing } from '@/app/lib/sanity.queries';

interface PricingItem {
  name: string;
  price: string;
  description?: string;
}

interface PricingCategory {
  categoryName: string;
  items: PricingItem[];
}

export const metadata = {
  title: "Cennik Zabiegów i Konsultacji - Novamedic Szczecin",
  description: "Aktualny cennik usług medycznych w gabinecie Novamedic Szczecin. Sprawdź ceny i umów wizytę.",
};

export default async function PricingPage() {
  // Wywołanie funkcji zapytań ze Sanity CMS
  const pricingCategories: PricingCategory[] = await getPricing();

  return (
    /* ZMIANA: Jasne, czyste tło bg-slate-50 zamiast półprzezroczystego bg-nova-bg */
    <div className="min-h-screen bg-slate-50 font-sans text-nova-dark antialiased">
      <main className="max-w-4xl mx-auto px-4 pt-36 pb-24">
        
        {/* NAGŁÓWEK */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-nova-dark">
            Cennik świadczeń <span className="text-nova-blue">medycznych</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-medium">
            Przedstawione ceny mają charakter orientacyjny. Pełny kosztorys ustalany jest podczas wstępnej konsultacji chirurgicznej.
          </p>
        </div>

        {/* LISTA KATEGORII CENNIKA */}
        <div className="space-y-12">
          {pricingCategories && pricingCategories.length > 0 ? (
            pricingCategories.map((cat, i) => (
              <section key={i} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100/80">
                <h2 className="text-xl md:text-2xl font-black mb-6 text-nova-dark border-b border-gray-100 pb-3 tracking-tight uppercase">
                  {cat.categoryName}
                </h2>
                
                <div className="divide-y divide-gray-50">
                  {cat.items?.map((item, j) => (
  <div key={j} className="flex justify-between items-center py-4 gap-4 transition-all hover:bg-nova-blue/5 px-3 rounded-xl">
    {/* Lewa strona: Nazwa + ewentualny opis */}
    <div className="flex flex-col gap-1 min-w-0">
      <span className="text-sm md:text-base font-semibold text-slate-700 leading-snug">
        {item.name}
      </span>
      {item.description && (
        <span className="text-xs text-slate-400 font-medium normal-case leading-normal">
          {item.description}
        </span>
      )}
    </div>

    {/* Prawa strona: Cena */}
    <span className="text-base md:text-lg font-black text-nova-blue shrink-0 font-mono">
      {item.price}
    </span>
  </div>
))}
                </div>
              </section>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-3xl border border-gray-100 text-slate-400 font-medium">
              Brak danych w cenniku. Uzupełnij panel Sanity CMS.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}