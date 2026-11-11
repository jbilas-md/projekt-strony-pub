import type { Metadata } from 'next';
import Link from 'next/link';

const description =
  'Regulamin świadczenia usług drogą elektroniczną oraz warunki korzystania z serwisu Novamedic w Szczecinie.';

export const metadata: Metadata = {
  title: 'Regulamin serwisu',
  description,
  alternates: {
    canonical: '/regulamin',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: '/regulamin',
    siteName: 'Novamedic Szczecin',
    title: 'Regulamin serwisu | Novamedic Szczecin',
    description,
  },
  twitter: {
    card: 'summary',
    title: 'Regulamin serwisu | Novamedic Szczecin',
    description,
  },
};

export default function TermsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-nova-dark antialiased">
      <main className="max-w-4xl mx-auto px-4 pt-36 pb-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-nova-dark">
            Regulamin <span className="text-nova-blue">Serwisu</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            Obowiązuje od: Styczeń {currentYear} r.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100/80 space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-nova-dark border-b border-slate-100 pb-2">
              § 1. Postanowienia ogólne
            </h2>
            <p>
              1. Niniejszy Regulamin określa zasady korzystania z serwisu internetowego <strong>Novamedic</strong>, dostępnego pod adresem internetowym serwisu, prowadzonego przez BIŁAS MEDICAL Sp. z o.o. z siedzibą przy ul. Słonecznej 7, 72-003 Wołczkowo.
            </p>
            <p>
              2. Korzystanie z serwisu oznacza akceptację niniejszego Regulaminu.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-nova-dark border-b border-slate-100 pb-2">
              § 2. Usługi świadczone drogą elektroniczną
            </h2>
            <p>Usługodawca świadczy za pośrednictwem serwisu następujące usługi elektroniczne:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Udostępnianie treści informacyjnych dotyczących oferty usług medycznych i podologicznych,</li>
              <li>Prezentację orientacyjnego cennika świadczeń medycznych,</li>
              <li>Możliwość zakupu usług lub pakietów zabiegowych i wnoszenia opłat online za pośrednictwem zintegrowanych bramek płatności.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-nova-dark border-b border-slate-100 pb-2">
              § 3. Zakup pakietów i płatności online
            </h2>
            <p>
              1. Ceny widoczne w serwisie są cenami brutto wyrażonymi w złotych polskich (PLN).
            </p>
            <p className="bg-slate-50 p-4 rounded-xl border-l-4 border-nova-blue font-medium text-slate-800">
              2. Informacje oraz ceny zamieszczone na stronie internetowej nie stanowią oferty handlowej w rozumieniu przepisów Kodeksu Cywilnego, lecz stanowią zaproszenie do zawarcia umowy (art. 71 K.C.). Ostateczny kosztorys zabiegu lub świadczenia medycznego ustalany jest podczas wstępnej konsultacji medycznej w gabinecie.
            </p>
            <p>
              3. Płatności za usługi lub pakiety zabiegowe realizowane są za pośrednictwem bezpiecznych operatorów płatności internetowych (np. Stripe / Przelewy24).
            </p>
            <p>
              4. Zakupione usługi lub pakiet usług medycznych realizowany jest w siedzibie gabinetu w Szczecinie po wcześniejszym telefonicznym lub osobistym ustaleniu terminu wizyty.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-nova-dark border-b border-slate-100 pb-2">
              § 4. Reklamacje i odstąpienie od umowy
            </h2>
            <p>
              1. Pacjent/Użytkownik ma prawo do złożenia reklamacji dotyczącej funkcjonowania serwisu lub zakupu usług drogą elektroniczną na adres e-mail: <a href="mailto:kontakt@novamedic.pl" className="text-nova-blue underline font-medium">kontakt@novamedic.pl</a>.
            </p>
            <p>
              2. Reklamacje rozpatrywane są w terminie 14 dni od daty ich otrzymania.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-nova-dark border-b border-slate-100 pb-2">
              § 5. Postanowienia końcowe
            </h2>
            <p>
              1. Usługodawca zastrzega sobie prawo do wprowadzania zmian w Regulaminie. Zmiany wchodzą w życie z dniem opublikowania nowego Regulaminu w serwisie.
            </p>
            <p>
              2. W sprawach nieuregulowanych niniejszym Regulaminem stosuje się przepisy prawa polskiego, w tym Kodeksu Cywilnego oraz Ustawy o prawach konsumenta.
            </p>
          </section>

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