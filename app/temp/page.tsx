// STRONA TYMCZASOWA

"use client";

import Image from 'next/image';
import { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';

export default function Home() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    /* fixed inset-0 z-[9999] i bg-white całkowicie odcina resztę starej strony */
    <main className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-start p-6 font-sans overflow-y-auto">
      <div className="max-w-4xl w-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[4rem] p-10 md:p-16 text-center border border-slate-100 my-8">

        {/* LOGO - Lokalizacja: /images/Logo.png */}
        <div className="flex justify-center mb-12">
          <div className="relative w-[300px] h-[100px] md:w-[600px] md:h-[200px]">
            <Image
              src="/images/Logo.png"
              alt="Novamedic Logo dr Jarosław Biłas"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* OBRAZ: Chirurgowie kodują - Lokalizacja: /images/code-surgeons.png */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-[500px] aspect-video rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-slate-50">
            <Image
              src="/images/code-surgeons.png"
              alt="Chirurdzy pracujący nad nową stroną Novamedic"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Strona w rozbudowie
        </h1>

        <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
          Trwają prace nad nowym serwisem Novamedic. Zapraszamy do kontaktu bezpośredniego oraz rezerwacji wizyt online.
        </p>

        {/* DANE KONTAKTOWE SZCZECIN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
            <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-blue-600 mb-4">Gabinet Szczecin</h3>
            <p className="text-slate-900 font-extrabold text-2xl leading-snug">
              ul. Wawrzyniaka 6C/1<br />
              70-392 Szczecin
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
            <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-blue-600 mb-4">Kontakt</h3>
            <div className="space-y-2">
              <p className="text-slate-900 font-extrabold text-2xl tracking-tight">+48 662 858 626</p>
              <p className="text-slate-900 font-extrabold text-2xl tracking-tight">+48 795 370 970</p>
            </div>
          </div>
        </div>

        {/* PRZYCISK ZNANY LEKARZ */}
        <div className="space-y-6">
          <a
            href="https://www.znanylekarz.pl/jaroslaw-bilas/chirurg-lekarze-wykonujacy-zabiegi-medycyny-estetycznej/szczecin#address-id=465892&is-online-only=false&filters%5Bspecializations%5D%5B%5D=50"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full bg-[#00b39b] hover:bg-[#009e89] text-white font-black py-7 px-10 rounded-full shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] text-2xl"
          >
            Umów wizytę online
          </a>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
            Kalendarz wizyt jest aktualny
        </p>
          <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
          <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-blue-600 mb-4">Napisz do nas</h3>
          <ContactForm compact={true} /></div>
        </div>
      </div>

      <footer className="mt-8 mb-12 text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
        © {new Date().getFullYear()} Novamedic |  Biłas Medical Sp. z o.o.
      </footer>
    </main>
  );
}