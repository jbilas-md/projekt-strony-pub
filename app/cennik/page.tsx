// app/cennik/page.tsx
import Link from 'next/link';

// Początkowa struktura danych pobrana i usystematyzowana z profilu ZnanyLekarz lek. J. Biłasa
const pricingCategories = [
  {
    categoryName: "Chirurgia Ogólna i Ambulatoryjna",
    items: [
      { name: "Konsultacja chirurgiczna", price: "250 zł" },
      { name: "Zabieg chirurgiczny w znieczuleniu miejscowym (prosty)", price: "od 350 zł" },
      { name: "Usuwanie zmian skórnych (znamiona, włókniaki)", price: "od 450 zł" },
      { name: "Wycięcie zmian tkanki podskórnej (kaszak, tłuszczak)", price: "od 600 zł" },
      { name: "Usunięcie torbieli pilonidalnej (metoda klasyczna)", price: "od 4 500 zł" },
      { name: "Usuwanie szwów i kontrola rany pooperacyjnej", price: "100 zł - 300 zł" },
      { name: "Wszycie Esperalu / Wszywka alkoholowa", price: "od 1 000 zł" },
    ]
  },
  {
    categoryName: "Laseroterapia Medyczna",
    items: [
      { name: "Laserowe leczenie zatoki włosowej / torbieli pilonidalnej (SiLaC)", price: "od 5 000 zł" },
      { name: "Laserowe usuwanie włókniaków i zmian naskórkowych", price: "od 400 zł" },
      { name: "Laserowe usuwanie blizn / resurfacing tkankowy", price: "od 400 zł" },
    ]
  },
  {
    categoryName: "Podochirurgia i Podologia Medyczna",
    items: [
      { name: "Usuwanie wrastających paznokci / Klinowe wycięcie macierzy", price: "400 zł" },
      { name: "Usunięcie płytki paznokciowej", price: "400 zł" },
      { name: "Usunięcie retronychii", price: "400 zł" },
      { name: "Usunięcie zmian płytki paznokcia", price: "500 zł" },
      { name: "Usunięcie egzostozy podpaznokciowej (zmiany kostnej)", price: "1 000 zł" },
      { name: "Plastyka opuszka palca", price: "1 500 zł" },
    ]
  },
  {
    categoryName: "Wazektomia",
    items: [
      { name: "Wazektomia WBS (metoda bez skalpela - pakiet całkowity)", price: "2 500 zł" },
    ]
  },
  {
    categoryName: "Medycyna Estetyczna i Operacyjna",
    items: [
      { name: "Konsultacja z zakresu medycyny estetycznej", price: "200 zł" },
      { name: "Botox (toksyna botulinowa) - pełna strefa", price: "600 zł - 1 200 zł" },
      { name: "Botoks - uśmiech dziąsłowy (gummy smile)", price: "400 zł" },
      { name: "Osocze bogatopłytkowe (PRP)", price: "800 zł" },
      { name: "Lipoliza iniekcyjna (redukcja tkanki tłuszczowej)", price: "od 400 zł" },
      { name: "Mezoterapia igłowa głęboka", price: "od 400 zł" },
      { name: "Nici liftingujące i stymulujące", price: "od 500 zł" },
      { name: "Peeling enzymatyczny / głęboki kwas TCA", price: "od 300 zł" },
      { name: "Powiększanie i modelowanie ust", price: "od 600 zł" },
      { name: "Chirurgiczna korekcja powiek (Blefaroplastyka)", price: "4 500 zł" },
      { name: "Sterydoterapia bliznowców i keloidów (iniekcja dostkankowa)", price: "350 zł" },
    ]
  },
  {
    categoryName: "Specjalistyczne Leczenie Ran",
    items: [
      { name: "Leczenie ran - miejscowa terapia podciśnieniowa (NPWT)", price: "od 250 zł" },
    ]
  }
];

export const metadata = {
  title: "Cennik Zabiegów i Konsultacji - Novamedic Szczecin",
  description: "Aktualny i przejrzysty cennik usług medycznych w centrum Novamedic Szczecin. Chirurgia, wazektomia, podologia, medycyna estetyczna. Sprawdź ceny i umów wizytę.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-nova-bg/20 font-sans text-nova-dark antialiased">
      {/* Struktura strukturalna JSON-LD dla wyszukiwarki Google (SEO) */}
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

        {/* LISTA KATEGORII CENNIKOWYCH */}
        <div className="space-y-12">
          {pricingCategories.map((cat, i) => (
            <section key={i} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100/60">
              <h2 className="text-xl md:text-2xl font-black mb-6 text-nova-dark border-b border-gray-50 pb-3 tracking-tight uppercase">
                {cat.categoryName}
              </h2>
              <div className="divide-y divide-gray-50">
                {cat.items.map((item, j) => (
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
          ))}
        </div>

        {/* STOPKA REJESTRACJI */}
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