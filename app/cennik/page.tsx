// app/cennik/page.tsx
import Link from 'next/link';
import { getPricing } from '@/app/lib/sanity.queries'; 

interface PricingItem {
  name: string;
  price: string;
}

interface PricingCategory {
  categoryName: string;
  items: PricingItem[];
}

export const metadata = {
  title: "Cennik Zabiegów i Konsultacji - Novamedic Szczecin",
  description: "Aktualny i przejrzysty cennik usług medycznych w centrum Novamedic Szczecin. Chirurgia, wazektomia, podologia, medycyna estetyczna. Sprawdź ceny i umów wizytę.",
};

// Zapytanie GROQ pobierające posortowany cennik
const PRICING_QUERY = `*[_type == "pricingCategory"] | order(order asc) {
  categoryName,
  items[] {
    name,
    price
  }
}`;

export default async function PricingPage() {
  const pricingCategories: PricingCategory[] = await getPricing();

  return (
    <div className="min-h-screen bg-nova-bg/20 font-sans text-nova-dark antialiased">
      {/* Struktura JSON-LD Schema dla Google (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Novamedic Szczecin",
            "image": "https://novamedic.szczecin.pl/images/logo.png",
            "priceRange": "$$$",
            "url": "https://novamedic.szczecin.pl/cennik",
            "provider": {
              "@type": "MedicalOrganization",
              "name": "Novamedic"
            }
          })
        }}
      />

      <main className="max-w-4xl mx-auto px-4 pt-36 pb-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Cennik świadczeń <span className="text-nova-blue">medycznych</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-medium">
            Przedstawione ceny mają charakter orientacyjny i określają koszt procedury ambulatoryjnej. Pełny kosztorys ustalany jest podczas wstępnej konsultacji chirurgicznej.
          </p>
        </div>

        {/* Dynamiczne renderowanie pobranych danych */}
        <div className="space-y-12">
          {pricingCategories && pricingCategories.length > 0 ? (
            pricingCategories.map((cat, i) => (
              <section key={i} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100/60">
                <h2 className="text-xl md:text-2xl font-black mb-6 text-nova-dark border-b border-gray-50 pb-3 tracking-tight uppercase">
                  {cat.categoryName}
                </h2>
                <div className="divide-y divide-gray-50">
                  {cat.items?.map((item, j) => (
                    <div key={j} className="flex justify-between items-center py-4 gap-4 transition-colors hover:bg-nova-bg/10 px-2 rounded-xl">
                      <span className="text-sm md:text-base font-semibold text-slate-700 leading-snug">
                        {item.name}
                      </span>
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

        {/* CTA do rejestracji */}
        <div className="mt-16 bg-nova-dark text-white rounded-[2.5rem] p-8 md:p-12 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">Potrzebujesz specjalistycznego zabiegu?</h3>
          <p className="text-gray-300 text-sm md:text-base max-w-lg mx-auto mb-8 font-medium">
            Zarezerwuj dogodny termin konsultacji kwalifikacyjnej bezpośrednio przez system ZnanyLekarz lub telefonicznie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://www.znanylekarz.pl/jaroslaw-bilas/chirurg-lekarze-wykonujacy-zabiegi-medycyna-estetyczna/szczecin" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-nova-blue text-white px-8 py-4 rounded-full font-black text-sm shadow-md hover:scale-105 transition-all text-center">
              Rezerwacja online
            </a>
            <Link href="/kontakt" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/10 text-white px-8 py-4 rounded-full font-black text-sm transition-all text-center">
              Kontakt z rejestracją
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}