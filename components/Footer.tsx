"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  // Stan isScrolled i inne mogą zostać, jeśli planujesz rozbudowę, 
  // choć w samym footerze zazwyczaj nie są używane tak jak w Navbarku.

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Novamedic+Szczecin+Wawrzyniaka+6C/1";

  return (
    <footer className="pt-20 pb-10 bg-nova-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12 text-center md:text-left">

          {/* Kolumna 1: Logo i opis */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-6 block">
              <Image
                src="/images/Logo.png"
                alt="Novamedic Logo"
                width={200}
                height={60}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Nowoczesna klinika specjalistyczna w Szczecinie. Twój komfort i zdrowie są dla nas najwyższym priorytetem.
            </p>
          </div>

          {/* Kolumna 2: Oferta */}
          <div>
            <h3 className="text-nova-light font-bold mb-6 text-sm uppercase tracking-widest text-nova-blue">Nasza Oferta</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Link href="/wazektomia" className="hover:text-white transition-colors">Wazektomia</Link></li>
              <li><Link href="/podochirurgia" className="hover:text-white transition-colors">Podochirurgia</Link></li>
              <li><Link href="/medycyna-estetyczna" className="hover:text-white transition-colors">Medycyna Estetyczna</Link></li>
              <li><Link href="/chirurgia" className="hover:text-white transition-colors">Chirurgia ambulatoryjna</Link></li>
            </ul>
          </div>

          {/* Kolumna 3: Szybkie linki */}
          <div>
            <h3 className="text-nova-light font-bold mb-6 text-sm uppercase tracking-widest text-nova-blue">Nawigacja</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Link href="/o-nas" className="hover:text-white transition-colors">O klinice</Link></li>
              <li><Link href="/cennik" className="hover:text-white transition-colors">Cennik usług</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">Częste pytania</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Baza wiedzy</Link></li>
            </ul>
          </div>

          {/* Kolumna 4: Kontakt */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-nova-light font-bold mb-6 text-sm uppercase tracking-widest text-nova-blue">Kontakt</h3>
            <div className="space-y-5 text-sm text-gray-400 font-medium">

              {/* Adres z linkiem do Map Google */}
              <div className="flex items-start gap-3 justify-center md:justify-start group">
                <svg className="w-5 h-5 text-nova-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  ul. Wawrzyniaka 6C/1<br />70-392 Szczecin
                </a>
              </div>

              {/* Telefony z protokołem tel: */}
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <svg className="w-5 h-5 text-nova-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div className="flex flex-col gap-2">
                  <a href="tel:+48662858626" className="hover:text-white transition-colors">+48 662 858 626</a>
                  <a href="tel:+48795370970" className="hover:text-white transition-colors">+48 795 370 970</a>
                </div>
              </div>

              {/* Formularz kontaktowy przekierowujący na podstronę */}
              <div className="flex items-center gap-3 justify-center md:justify-start group">
                <svg className="w-5 h-5 text-nova-blue flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <Link href="/kontakt" className="hover:text-white transition-colors">Napisz do nas</Link>
              </div>

            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-white/5 pt-8">
          <p>© {new Date().getFullYear()} Novamedic Szczecin. Wszystkie prawa zastrzeżone.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-medium">
            <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">Polityka Prywatności</Link>
            <Link href="/regulamin" className="hover:text-white transition-colors">Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}