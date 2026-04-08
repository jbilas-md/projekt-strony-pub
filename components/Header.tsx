"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
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
    <header className={`fixed w-full top-0 z-[100] transition-all duration-500 bg-white shadow-sm ${isScrolled ? 'h-24' : 'h-32'}`}>
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">

        {/* LOGO - start scale-150 */}
        <div className="flex-shrink-0 z-[120]">
          <Link href="/" className={`relative block transition-all duration-500 origin-left ${isScrolled ? 'w-48 h-16 scale-110' : 'w-56 h-20 scale-150'}`}>
            <Image
              src="/images/Logo.png"
              alt="Novamedic Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>

        {/* NAWIGACJA DESKTOP */}
        <nav className="hidden xl:flex items-center space-x-7">
          <Link href="/o-nas" className="text-nova-dark hover:text-nova-blue font-bold text-sm uppercase tracking-wide transition-colors">O nas</Link>

          <div className="relative group py-8">
            <button className="text-nova-dark hover:text-nova-blue font-bold text-sm uppercase tracking-wide flex items-center gap-1 transition-colors">
              Oferta <span className="text-[10px]">▼</span>
            </button>
            <div className="absolute top-full left-0 pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-64 bg-white rounded-b-xl shadow-2xl border-t-2 border-nova-blue p-2 grid grid-cols-1">
                {services.map((s) => (
                  <Link key={s.name} href={s.href} className="px-4 py-2.5 hover:bg-nova-bg rounded-lg text-nova-dark text-sm font-semibold transition-colors">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/cennik" className="text-nova-dark hover:text-nova-blue font-bold text-sm uppercase tracking-wide transition-colors">Cennik</Link>
          <Link href="/faq" className="text-nova-dark hover:text-nova-blue font-bold text-sm uppercase tracking-wide transition-colors">Częste pytania</Link>
          <Link href="/blog" className="text-nova-dark hover:text-nova-blue font-bold text-sm uppercase tracking-wide transition-colors">Blog</Link>
          <Link href="/kontakt" className="text-nova-dark hover:text-nova-blue font-bold text-sm uppercase tracking-wide transition-colors">Kontakt</Link>
        </nav>

        {/* PRAWA STRONA (Dostępność, Języki, Przyciski) */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Dostępność - widoczna zawsze */}
          <button title="Dostępność" className="p-2 text-nova-dark hover:text-nova-blue transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>

          {/* Języki - widoczne zawsze z flagami */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-1.5 bg-nova-bg rounded-full text-xs font-black text-nova-dark border border-gray-200 hover:border-nova-blue transition-all"
            >
              <span className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0 border border-gray-300">
                <img src="https://flagcdn.com/pl.svg" alt="PL" className="object-cover w-full h-full" />
              </span>
              PL <span className="text-[8px] opacity-50">▼</span>
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border shadow-2xl rounded-2xl overflow-hidden flex flex-col z-[130] min-w-[120px] p-1 animate-in fade-in slide-in-from-top-2">
                <button className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold hover:bg-nova-bg transition-colors rounded-xl">
                  <img src="https://flagcdn.com/gb.svg" className="w-4 h-4 rounded-full object-cover" alt="EN" />
                  English (EN)
                </button>
                <button className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold hover:bg-nova-bg transition-colors rounded-xl border-t border-gray-50">
                  <img src="https://flagcdn.com/ua.svg" className="w-4 h-4 rounded-full object-cover" alt="UA" />
                  Українська (UK)
                </button>
              </div>
            )}
          </div>

          {/* Przycisk Akcji - widoczny na desktop */}
          <a
            href="https://www.znanylekarz.pl/jaroslaw-bilas/chirurg-lekarze-wykonujacy-zabiegi-medycyny-estetycznej/szczecin"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-nova-accent text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-amber-600 transition-all shadow-md"
          >
            Umów wizytę
          </a>
          
{/* Pulsujący przycisk słuchawki */}
<div className="relative flex items-center justify-center">
  {/* Warstwa pulsująca pod spodem */}
  <span className="absolute inline-flex h-16 w-16 animate-ping rounded-full bg-nova-blue opacity-30"></span>
  
  <a 
    href="tel:+48662858626" 
    className="relative z-10 flex items-center justify-center w-16 h-16 bg-nova-blue text-white rounded-full hover:bg-nova-dark transition-all shadow-xl hover:scale-110 active:scale-95"
  >
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.505 5.505l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  </a>
</div>

          {/* HAMBURGER (Tylko Mobile) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="xl:hidden p-2 text-nova-dark"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <div className={`fixed inset-0 bg-white z-[200] transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} xl:hidden`}>
        <div className="p-6 h-full flex flex-col overflow-y-auto">
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <Image src="/images/Logo.png" alt="Logo" width={140} height={40} className="object-contain object-left" />
            <button onClick={() => setIsMenuOpen(false)} className="text-nova-dark text-4xl leading-none">&times;</button>
          </div>

          <nav className="flex flex-col space-y-6">
            <Link href="/o-nas" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-nova-dark uppercase tracking-tight">O nas</Link>

            {/* Rozwinięta Oferta na mobile */}
            <div className="flex flex-col">
              <span className="text-sm font-black text-nova-blue uppercase tracking-widest mb-4">Nasza Oferta:</span>
              <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-nova-bg">
                {services.map(s => (
                  <Link key={s.name} href={s.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold text-nova-dark">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/cennik" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-nova-dark uppercase tracking-tight">Cennik</Link>
            <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-nova-dark uppercase tracking-tight">FAQ</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-nova-dark uppercase tracking-tight">Blog</Link>
            <Link href="/kontakt" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-nova-dark uppercase tracking-tight">Kontakt</Link>
          </nav>

          <div className="mt-auto pt-10 flex flex-col gap-4">
            <a href="tel:+48123456789" className="w-full bg-nova-blue text-white text-center py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.505 5.505l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              Zadzwoń do kliniki
            </a>
            <a href="https://www.znanylekarz.pl/..." target="_blank" rel="noopener" className="w-full bg-nova-accent text-white text-center py-4 rounded-xl font-bold shadow-lg">
              Umów wizytę online
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}