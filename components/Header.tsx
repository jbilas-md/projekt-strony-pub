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
    <header className={`fixed w-full top-0 z-[100] transition-all duration-500 bg-white ${isScrolled ? 'h-14 shadow-sm' : 'h-24 md:h-32'}`}>
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center relative">
        
        {/* KONTENER LOGO I KIESZONKI */}
        <div className="absolute left-4 top-0 h-full w-32 sm:w-48 md:w-56">
            <div 
                className={`
                absolute left-0 top-0 bg-white transition-all duration-500 rounded-b-[2rem]
                w-full
                ${isScrolled ? 'h-20 md:h-24 shadow-lg' : 'h-24 md:h-32 shadow-none'} 
                z-[110]
                `}
            />
            <div className="absolute -left-4 top-0 w-[calc(100%+2rem)] h-full bg-white z-[115]" />

            <div className="absolute left-0 top-0 h-full w-full z-[120] flex items-center justify-center pointer-events-none">
                <Link href="/" className={`
                    relative block transition-all duration-500 origin-center pointer-events-auto
                    ${isScrolled 
                        ? 'w-24 h-8 sm:w-48 sm:h-16 scale-110 translate-y-4' 
                        : 'w-28 h-10 sm:w-56 sm:h-20 scale-125 sm:scale-150 translate-y-0'}
                `}>
                <Image
                    src="/images/Logo.png"
                    alt="Novamedic Logo"
                    fill
                    className="object-contain object-center"
                    priority
                />
                </Link>
            </div>
        </div>

        <div className="w-32 sm:w-48 md:w-56 flex-shrink-0" />

        {/* NAWIGACJA DESKTOP - Widoczna od XL */}
        <nav className="hidden xl:flex items-center space-x-7 relative z-[130]">
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
          <Link href="/faq" className="text-nova-dark hover:text-nova-blue font-bold text-sm uppercase tracking-wide transition-colors">FAQ</Link>
          <Link href="/blog" className="text-nova-dark hover:text-nova-blue font-bold text-sm uppercase tracking-wide transition-colors">Blog</Link>
          <Link href="/kontakt" className="text-nova-dark hover:text-nova-blue font-bold text-sm uppercase tracking-wide transition-colors">Kontakt</Link>
        </nav>

        {/* PRAWA STRONA */}
        <div className="flex items-center gap-1 sm:gap-4 relative z-[130] h-full ml-auto">
          
          <button title="Dostępność" className="hidden sm:block p-2 text-nova-dark hover:text-nova-blue transition-colors">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>

          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-nova-bg rounded-full text-[10px] sm:text-xs font-black text-nova-dark border border-gray-200 hover:border-nova-blue transition-all"
            >
              <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full overflow-hidden flex-shrink-0 border border-gray-300">
                <img src="https://flagcdn.com/pl.svg" alt="PL" className="object-cover w-full h-full" />
              </span>
              PL
            </button>
          </div>

          <a
            href="https://www.znanylekarz.pl/jaroslaw-bilas/chirurg-lekarze-wykonujacy-zabiegi-medycyny-estetycznej/szczecin"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-nova-accent text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-amber-600 transition-all shadow-md"
          >
            Umów wizytę
          </a>

          <div className={`relative flex items-center justify-center transition-all duration-500 ${isScrolled ? 'scale-50 sm:scale-75' : 'scale-75 sm:scale-100'}`}>
            <span className="absolute inline-flex h-12 w-12 sm:h-16 sm:w-16 animate-ping rounded-full bg-nova-blue opacity-30"></span>
            <a
              href="tel:+48662858626"
              className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-nova-blue text-white rounded-full hover:bg-nova-dark transition-all shadow-xl"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.505 5.505l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
          </div>

          {/* HAMBURGER - Ukryty powyżej XL */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="xl:hidden p-1 sm:p-2 text-nova-dark hover:text-nova-blue transition-colors"
          >
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU - Zoptymalizowane wymiary */}
      <div className={`fixed inset-0 bg-white z-[200] transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} xl:hidden`}>
        <div className="p-5 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <Image src="/images/Logo.png" alt="Logo" width={120} height={35} className="object-contain" />
            <button onClick={() => setIsMenuOpen(false)} className="text-nova-dark text-3xl p-2">&times;</button>
          </div>
          
          <nav className="flex flex-col space-y-4 overflow-y-auto pb-8">
            <Link href="/o-nas" onClick={() => setIsMenuOpen(false)} className="text-base font-bold text-nova-dark uppercase">O nas</Link>
            
            <div className="flex flex-col">
              <span className="text-xs font-black text-nova-blue uppercase tracking-widest mb-3">Oferta:</span>
              <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-nova-bg">
                {services.map(s => (
                  <Link key={s.name} href={s.href} onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-nova-dark py-1">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/cennik" onClick={() => setIsMenuOpen(false)} className="text-base font-bold text-nova-dark uppercase">Cennik</Link>
            <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="text-base font-bold text-nova-dark uppercase">FAQ</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-base font-bold text-nova-dark uppercase">Blog</Link>
            <Link href="/kontakt" onClick={() => setIsMenuOpen(false)} className="text-base font-bold text-nova-dark uppercase">Kontakt</Link>
            
            <div className="pt-4">
               <a
                href="https://www.znanylekarz.pl/jaroslaw-bilas/chirurg-lekarze-wykonujacy-zabiegi-medycyny-estetycznej/szczecin"
                className="block text-center bg-nova-accent text-white py-3 rounded-full font-bold text-sm uppercase"
              >
                Umów wizytę
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}