// app/cennik/page.tsx
import { getPricing } from '@/app/lib/sanity.queries';
import PricingAccordion from '@/components/PricingAccordion';

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
            <PricingAccordion categories={pricingCategories} />
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