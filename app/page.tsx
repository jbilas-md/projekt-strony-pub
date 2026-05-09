// NOWA STRONA GŁÓWNA

import ReviewsSection from '@/components/ReviewsSection'; 
import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  
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
    <>
         {/* 1. HERO SECTION - Tło z medykami */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 md:mt-16">
     
        {/* Tło graficzne na całą szerokość */}
        <div className="absolute inset-0 z-0 ">
          <Image 
            src="/images/hero-glowna.jpg" 
            alt="Novamedic Team" 
            fill 
            className="object-cover object-center scale-105" // lekki zoom dla efektu głębi
            priority
          />
          {/* Nakładka (overlay), żeby tekst był czytelny */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <span className="bg-nova-blue/10 text-nova-blue px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">Twoje zdrowie w Szczecinie</span>
            <h1 className="text-5xl md:text-8xl font-black text-nova-dark mt-6 leading-[0.9] tracking-tighter italic">
              TWOJE ZDROWIE <br />W RĘKACH <br /><span className="text-nova-blue">EKSPERTÓW.</span>
            </h1>
            <p className="text-slate-600 text-xl mt-8 max-w-lg font-medium leading-relaxed">
              Nowoczesna klinika specjalistyczna. Profesjonalne zabiegi ambulatoryjne i medycyna estetyczna na najwyższym poziomie.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:+48662858626" className="bg-nova-dark text-white px-8 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-nova-blue transition-all">Umów się teraz</a>
              <Link href="/o-nas" className="bg-white/50 backdrop-blur-md border border-slate-200 text-nova-dark px-8 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white transition-all">Poznaj nas</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROFILE MEDYCZNE */}
      <section className="py-24 bg-nova-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black text-nova-dark uppercase tracking-tight italic">W czym pomagamy?</h2>
              <p className="text-slate-500 font-medium mt-2">Kompleksowa opieka w ramach naszych głównych ścieżek leczenia.</p>
            </div>
            <Link href="/oferta" className="text-nova-blue font-black uppercase tracking-widest text-sm hover:underline">Pełna oferta usług</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Mapowanie danych - upewnij się, że tablica 'allServices' jest dostępna w Twoim komponencie */}
            {allServices.map((s, i) => (
              <Link 
                href={s.link} 
                key={i} 
                className="group relative h-72 sm:h-80 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Obraz tła z efektem grayscale, który znika po najechaniu */}
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  style={{ backgroundImage: `url(${s.image})` }}
                />
                {/* Gradient dla czytelności tekstu - wykorzystuje Twoją nową zmienną nova-dark */}
                <div className="absolute inset-0 bg-gradient-to-t from-nova-dark via-nova-dark/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-nova-accent transition-colors italic">
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

      {/* 3. NAJCZĘŚCIEJ WYBIERANE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black text-nova-dark uppercase tracking-tight mb-12 italic underline decoration-nova-blue decoration-4 underline-offset-8">Najczęściej wybierane</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {/* Przykład kafelka zabiegu */}
                
                {/*  WAZEKTOMIA */}

                <div className="relative group overflow-hidden rounded-[4rem] aspect-[4/5] shadow-2xl">
                    <Image 
                        src="/images/serduszko.jpg" 
                        fill 
                        alt="Wazektomia" 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nova-dark via-nova-dark/50 to-transparent opacity-90"></div>
                    <div className="absolute bottom-12 left-12 right-12 flex flex-col justify-between min-h-[140px]">
                        <div>
                            <h4 className="text-white text-3xl font-black italic leading-[1.1] tracking-tight">
                                Wazektomia
                            </h4>
                        </div>

                        <div className="mt-4">
                            <Link 
                                href="/wazektomia" 
                                className="inline-block bg-white text-nova-dark py-3 px-8 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-nova-blue hover:text-white transition-all shadow-lg"
                            >
                                Sprawdź zabieg
                            </Link>
                        </div>
                    </div>
                </div>

                {/*  PLASTYKA WAŁÓW */}

                <div className="relative group overflow-hidden rounded-[4rem] aspect-[4/5] shadow-2xl">
                    <Image 
                        src="/images/serduszko.jpg" 
                        fill 
                        alt="Wazektomia" 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nova-dark via-nova-dark/50 to-transparent opacity-90"></div>
                    <div className="absolute bottom-12 left-12 right-12 flex flex-col justify-between min-h-[140px]">
                        <div>
                            <h4 className="text-white text-3xl font-black italic leading-[1.1] tracking-tight">
                                Plastyka wałów paznokciowych
                            </h4>
                        </div>

                        <div className="mt-4">
                            <Link 
                                href="/podochirurgia" 
                                className="inline-block bg-white text-nova-dark py-3 px-8 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-nova-blue hover:text-white transition-all shadow-lg"
                            >
                                Sprawdź zabieg
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ... kolejne kafelki ... */}
            </div>
        </div>
      </section>

      {/* 4. OPINIE (Losowe z pliku reviews.ts) */}
      <ReviewsSection />
    </>
  );
}