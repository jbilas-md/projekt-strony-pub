import ReviewsSection from '@/components/ReviewsSection'; 
import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';

export default function NewLandingPage() {
  return (
    <>
      {/* 1. HERO SECTION - Tło z medykami */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Tło graficzne na całą szerokość */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-medics.jpg" 
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
              ZDROWIE <br />W RĘKACH <br /><span className="text-nova-blue">EKSPERTÓW.</span>
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

      {/* 2. NASZE PROFILE MEDYCZNE */}
      <section className="py-24 bg-nova-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black text-nova-dark uppercase tracking-tight italic">W czym pomagamy?</h2>
              <p className="text-slate-500 font-medium mt-2">Kompleksowa opieka w ramach naszych głównych ścieżek leczenia.</p>
            </div>
            <Link href="/oferta" className="text-nova-blue font-black uppercase tracking-widest text-sm hover:underline">Pełna oferta usług</Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {['Wazektomia', 'Chirurgia', 'Podologia', 'Ortopedia', 'Laseroterapia', 'Medycyna Estetyczna', 'Leczenie Ran', 'Podochirurgia'].map(item => (
               <div key={item} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-nova-blue hover:shadow-2xl transition-all group cursor-pointer">
                 <div className="w-12 h-12 bg-nova-bg rounded-2xl mb-6 group-hover:bg-nova-blue group-hover:rotate-6 transition-all flex items-center justify-center">
                    <span className="text-nova-dark group-hover:text-white font-bold">+</span>
                 </div>
                 <h3 className="font-black text-nova-dark text-lg italic">{item}</h3>
               </div>
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
                <div className="relative group overflow-hidden rounded-[4rem] aspect-[4/5] shadow-2xl">
                    <Image src="/images/code-surgeons.png" fill alt="Wazektomia" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-nova-dark via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-12 left-12 right-12">
                        <span className="text-nova-blue text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">Specjalizacja</span>
                        <h4 className="text-white text-3xl font-black italic">Wazektomia Bez Skalpela</h4>
                        <Link href="/wazektomia" className="mt-4 inline-block bg-white text-nova-dark py-3 px-6 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-nova-blue hover:text-white transition-all">Sprawdź zabieg</Link>
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