import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export default function Home() {
  const preferredServices = [
    { title: "Wazektomia", link: "/wazektomia" },
    { title: "Podochirurgia", link: "/podochirurgia" },
    { title: "Leczenie ran", link: "/leczenie-ran" },
  ];

  const allServices = [
    { title: "Chirurgia", desc: "Zabiegi w trybie ambulatoryjnym, usuwanie zmian skórnych, biopsje.", link: "/chirurgia", image: "/images/chirurgia.jpg" },
    { title: "Ortopedia", desc: "Diagnostyka USG, iniekcje dostawowe, leczenie urazów.", link: "/ortopedia", image: "/images/ortopedia.jpg" },
    { title: "Podologia", desc: "Specjalistyczna pielęgnacja stóp, usuwanie modzeli.", link: "/podologia", image: "/images/podologia.jpg" },
    { title: "Podochirurgia", desc: "Chirurgiczne leczenie wrastających paznokci.", link: "/podochirurgia", image: "/images/podochirurgia.jpg" },
    { title: "Laseroterapia", desc: "Zamykanie naczynek, usuwanie przebarwień.", link: "/laseroterapia", image: "/images/laseroterapia.jpg" },
    { title: "Medycyna Estetyczna", desc: "Wypełniacze, toksyna botulinowa i stymulatory.", link: "/medycyna-estetyczna", image: "/images/estetyczna.jpg" },
    { title: "Wazektomia", desc: "Bezpieczna i trwała metoda antykoncepcji (WBS).", link: "/wazektomia", image: "/images/wazektomia.jpg" },
    { title: "Leczenie ran", desc: "Opieka nad ranami trudnogojącymi się i stopą cukrzycową.", link: "/leczenie-ran", image: "/images/rany.jpg" },
  ];

  return (
    <main className="min-h-screen bg-white pt-20 overflow-x-hidden">
      {/* SEKCJA HERO */}
      <section className="relative pt-12 pb-16 lg:pt-32 lg:pb-24 bg-nova-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-nova-dark mb-6 leading-[1.1]">
            Twoje zdrowie, <br className="hidden sm:block" />
            <span className="text-nova-blue font-medium italic">nasza specjalność.</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto px-4">
            Kompleksowa opieka medyczna w sercu Warszawy. Od drobnych zabiegów chirurgicznych po zaawansowaną medycynę estetyczną.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
            <Link href="https://www.znanylekarz.pl" className="w-full sm:w-auto bg-nova-blue text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-nova-light transition-all shadow-lg text-center">
              Umów wizytę
            </Link>
            <div className="flex items-center gap-2 text-nova-dark font-semibold py-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Wolne terminy na ten tydzień
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA NAJCZĘŚCIEJ WYBIERANE (SZYBKIE LINKI) */}
      <section className="py-12 bg-white border-y border-nova-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <span className="text-nova-dark font-bold uppercase tracking-widest text-sm whitespace-nowrap bg-nova-accent/10 px-4 py-2 rounded-lg">
              Najczęściej wybierane:
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              {preferredServices.map((s) => (
                <Link key={s.title} href={s.link} className="px-5 py-2 rounded-full border border-nova-bg text-nova-dark font-medium hover:border-nova-blue hover:text-nova-blue transition-all bg-white shadow-sm">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA WSZYSTKICH USŁUG */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-nova-dark mb-4 uppercase tracking-tight">Nasze Specjalizacje</h2>
            <div className="h-1.5 w-20 bg-nova-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {allServices.map((s, i) => (
              <Link href={s.link} key={i} className="group relative h-72 sm:h-80 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  style={{ backgroundImage: `url(${s.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nova-dark via-nova-dark/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-nova-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {s.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEKCJA ZNANYLEKARZ (OPINIE) */}
      <section className="py-20 bg-nova-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nova-dark mb-4">Opinie o Novamedic</h2>
            <p className="text-slate-600">Autentyczne oceny z serwisu ZnanyLekarz</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-white">
             {/* Tu wstawiamy oficjalny widżet skryptowy */}
             <div id="znanylekarz-widget-container" className="min-h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <span className="text-nova-accent text-4xl tracking-tighter">★★★★★</span>
                  <p className="mt-4 text-nova-dark font-medium italic">"Pełen profesjonalizm i świetne podejście do pacjenta."</p>
                  <p className="text-sm text-gray-400 mt-2">— Opinia z portalu ZnanyLekarz</p>
                </div>
             </div>
          </div>
        </div>
      </section>
      
      {/* Skrypt ZnanyLekarz - dodajemy na końcu */}
      <Script 
        src="https://platform.docplanner.com/js/widget.js" 
        strategy="lazyOnload"
      />

      {/* STOPKA (ZGODNIE Z WCZEŚNIEJSZYM DESIGNEM) */}
      <footer className="pt-20 pb-10 bg-nova-dark text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12 text-center md:text-left">
      
      {/* Kolumna 1: Logo i opis */}
      <div className="flex flex-col items-center md:items-start">
        <Image src="/images/Logo.png" alt="Logo" width={200} height={60} className="brightness-0 invert mb-6" />
        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
          Nowoczesna klinika specjalistyczna. Twój komfort i zdrowie są dla nas najwyższym priorytetem.
        </p>
      </div>

      {/* Kolumna 2: Oferta */}
      <div>
        <h3 className="text-nova-light font-bold mb-6 text-sm uppercase tracking-widest">Nasza Oferta</h3>
        <ul className="space-y-3 text-sm text-gray-400">
          <li><Link href="/wazektomia" className="hover:text-white transition-colors">Wazektomia</Link></li>
          <li><Link href="/podochirurgia" className="hover:text-white transition-colors">Podochirurgia</Link></li>
          <li><Link href="/medycyna-estetyczna" className="hover:text-white transition-colors">Medycyna Estetyczna</Link></li>
          <li><Link href="/chirurgia" className="hover:text-white transition-colors">Chirurgia ambulatoryjna</Link></li>
        </ul>
      </div>

      {/* Kolumna 3: Szybkie linki */}
      <div>
        <h3 className="text-nova-light font-bold mb-6 text-sm uppercase tracking-widest">Nawigacja</h3>
        <ul className="space-y-3 text-sm text-gray-400">
          <li><Link href="/o-nas" className="hover:text-white transition-colors">O klinice</Link></li>
          <li><Link href="/cennik" className="hover:text-white transition-colors">Cennik usług</Link></li>
          <li><Link href="/faq" className="hover:text-white transition-colors">Częste pytania</Link></li>
          <li><Link href="/blog" className="hover:text-white transition-colors">Baza wiedzy</Link></li>
        </ul>
      </div>

      {/* Kolumna 4: Kontakt (z ikonami łezki/telefonu) */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-nova-light font-bold mb-6 text-sm uppercase tracking-widest">Kontakt</h3>
        <div className="space-y-4 text-sm text-gray-400">
          <div className="flex items-start gap-3 justify-center md:justify-start">
            <svg className="w-5 h-5 text-nova-accent flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
            <a href="https://maps.google.com" target="_blank" className="hover:text-white transition-colors">
              ul. Przykładowa 123<br/>00-001 Warszawa
            </a>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <svg className="w-5 h-5 text-nova-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.505 5.505l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
            <a href="tel:+48123456789" className="hover:text-white transition-colors">+48 123 456 789</a>
          </div>
        </div>
      </div>
    </div>
    
    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-white/5 pt-8">
      <p>© {new Date().getFullYear()} Novamedic. Wszelkie prawa zastrzeżone.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <Link href="/polityka-prywatnosci" className="hover:text-white">Polityka Prywatności</Link>
        <Link href="/regulamin" className="hover:text-white">Regulamin</Link>
      </div>
    </div>
  </div>
</footer>
    </main>
  );
}