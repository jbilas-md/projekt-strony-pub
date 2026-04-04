"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: "Chirurgia", href: "/chirurgia" },
    { name: "Ortopedia", href: "/ortopedia" },
    { name: "Wazektomia", href: "/wazektomia" },
    { name: "Podologia", href: "/podologia" },
    { name: "Podochirurgia", href: "/podochirurgia" },
    { name: "Laseroterapia", href: "/laseroterapia" },
    { name: "Medycyna Estetyczna", href: "/medycyna-estetyczna" },
    { name: "Leczenie Ran", href: "/leczenie-ran" },
  ];

  return (
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
  );
}