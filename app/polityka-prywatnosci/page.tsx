// app/polityka-prywatnosci/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

const description =
  'Zasady przetwarzania danych osobowych oraz wykorzystywania pamięci przeglądarki w gabinecie Novamedic w Szczecinie.';

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  description,
  alternates: {
    canonical: '/polityka-prywatnosci',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: '/polityka-prywatnosci',
    siteName: 'Novamedic Szczecin',
    title: 'Polityka prywatności | Novamedic Szczecin',
    description,
  },
  twitter: {
    card: 'summary',
    title: 'Polityka prywatności | Novamedic Szczecin',
    description,
  },
};

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-nova-dark antialiased">
      <main className="max-w-4xl mx-auto px-4 pt-36 pb-24">
        
        {/* NAGŁÓWEK DOKUMENTU */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-nova-dark">
            Polityka <span className="text-nova-blue">Prywatności</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            Ostatnia aktualizacja: Styczeń {currentYear} r.
          </p>
        </div>

        {/* KONTENER Z TREŚCIĄ DOKUMENTU */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100/80 space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
          
          {/* SEKCJA 1 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-nova-dark border-b border-slate-100 pb-2">
              1. Administrator Danych Osobowych
            </h2>
            <p>
              Administratorem Twoich danych osobowych jest <strong>BIŁAS MEDICAL Sp. z o.o.</strong> z siedzibą przy ul. Słonecznej 7, 72-003 Wołczkowo (NIP: 8513324344, REGON: 540675524), reprezentowany przez Jarosława Biłasa.
            </p>
            <p>
              W sprawach związanych z ochroną danych osobowych możesz skontaktować się z nami pod adresem e-mail: <a href="mailto:kontakt@novamedic.pl" className="text-nova-blue underline font-medium">kontakt@novamedic.pl</a> lub telefonicznie pod numerem: <a href="tel:+48662858626" className="text-nova-blue underline font-medium">+48 662 858 626</a>.
            </p>
          </section>

          {/* SEKCJA 2 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-nova-dark border-b border-slate-100 pb-2">
              2. Cel i podstawy przetwarzania danych
            </h2>
            <p>Twoje dane osobowe przetwarzane są w celu:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Udostępnienia rejestracji i realizacji świadczeń medycznych oraz zabiegów podologicznych,</li>
              <li>Obsługi zapytań przesyłanych przez formularz kontaktowy lub drogą telefoniczną,</li>
              <li>Realizacji płatności online za wybrane pakiety zabiegowe za pośrednictwem zewnętrznych operatorów płatności.</li>
            </ul>
          </section>

          {/* SEKCJA 3 - INFORMACJA O COOKIES / LOCALSTORAGE */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-nova-dark border-b border-slate-100 pb-2">
              3. Przechowywanie danych w przeglądarce (localStorage)
            </h2>
            <p>
              Nasza strona internetowa nie wykorzystuje śledzących ścieżek reklamowych ani profilujących plików cookies. 
            </p>
            <p>
              Do zapamiętywania Twoich osobistych preferencji dotyczących dostępności (np. włączenie trybu wysokiego kontrastu, powiększenie czcionki czy podkreślenie linków) wykorzystujemy lokalną pamięć przeglądarki (<strong>localStorage</strong>). Dane te pozostają wyłącznie na Twoim urządzeniu i nie są przesyłane na nasze serwery.
            </p>
          </section>

          {/* SEKCJA 4 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-nova-dark border-b border-slate-100 pb-2">
              4. Prawa Użytkownika
            </h2>
            <p>Posiadasz prawo do:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dostępu do treści swoich danych oraz ich sprostowania,</li>
              <li>Usunięcia danych lub ograniczenia ich przetwarzania,</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania danych,</li>
              <li>Wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</li>
            </ul>
          </section>

          {/* PRZYCISK POWROTU */}
          <div className="pt-6 text-center border-t border-slate-100">
            <Link 
              href="/"
              className="inline-block bg-nova-blue text-white font-bold py-3 px-8 rounded-2xl hover:bg-nova-dark transition-colors"
            >
              Wróć do strony głównej
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}