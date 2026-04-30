import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'O nas | Poznaj zespół Novamedic Szczecin',
    description: 'Poznaj założycieli kliniki Novamedic w Szczecinie - dr Jarosława Biłasa i Annę Biłas. Wieloletnie doświadczenie w chirurgii, podologii i leczeniu ran.',
};

export default function AboutUsPage() {
    return (
        <>
            {/* 1. HERO SECTION - Wspólne zdjęcie i główne hasło */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <span className="bg-nova-blue/10 text-nova-blue px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">Poznaj Novamedic</span>
                        <h1 className="text-5xl md:text-6xl font-black text-nova-dark mt-6 leading-[0.9] tracking-tighter italic">
                            Twoje zdrowie <br />w rękach <br /><span className="text-nova-blue">ekspertów.</span>
                        </h1>
                        <p className="text-slate-600 text-lg mt-8 font-medium leading-relaxed">
                            Witamy w Novamedic – miejscu stworzonym z pasji do medycyny, nowoczesnych technologii i autentycznej troski o drugiego człowieka.
                        </p>
                    </div>
                    <div className="lg:col-span-7 relative aspect-[5/4] lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100">
                        <Image
                            src="/images/ania-i-jarek.jpg" // <-- TU WSTAW WSPÓLNE ZDJĘCIE
                            alt="Anna i Jarosław Biłas - Założyciele Novamedic Szczecin"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* 2. MISJA I PODEJŚCIE - Tekst ogólny w wyróżnionym boksie */}
            <section className="py-24 bg-nova-bg">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-slate-100">
                        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:text-nova-dark prose-headings:italic prose-p:font-medium prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:font-black prose-strong:text-nova-dark">
                            <h2><strong>Kompleksowa opieka i bezpieczeństwo</strong></h2>
                            <p>
                                Naszą ideą było stworzenie gabinetu, w którym Pacjenci będą kompleksowo diagnozowani i leczeni, zgodnie z aktualną wiedzą medyczną i w oparciu o najlepsze praktyki kliniczne. W Novamedic poczujesz się komfortowo i bezpiecznie, mając pewność, że Twoje dobro jest dla nas absolutnym priorytetem.
                            </p>

                            <h3><strong>Skoordynowane działania dla najlepszych efektów</strong></h3>
                            <p>
                                Pracując przez lata w publicznych placówkach, dostrzegliśmy brak zintegrowanej opieki nad chorymi, zwłaszcza z ranami przewlekłymi czy zespołem stopy cukrzycowej. Jesteśmy przekonani, że najlepsze efekty dają tylko wielokierunkowe, skoordynowane działania, oparte na współpracy lekarzy, pielęgniarek i podologów.
                            </p>

                            <p>
                                Dla wygody naszych Pacjentów zapewniamy pełny zakres diagnostyki: od badań laboratoryjnych i mikrobiologicznych po histopatologiczne.
                            </p>

                            <div className="mt-12 flex justify-center">
                                <Link href="/kontakt" className="bg-nova-blue text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-lg hover:bg-nova-dark transition-all">
                                    Umów konsultację →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. BIOGRAFIE SPECJALISTÓW - Osobne zdjęcia i bio */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 space-y-24">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-nova-dark uppercase tracking-tight italic">Nasz Zespół</h2>
                        <p className="text-slate-500 font-medium mt-2">Wiedza, Doświadczenie, Zaufanie.</p>
                    </div>

                    {/* BIO: JAROSŁAW BIŁAS */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                        <div className="md:col-span-4 relative aspect-square rounded-[2rem] overflow-hidden shadow-xl border-2 border-slate-50">
                            <Image
                                src="/images/jarek-profil.jpg" // <-- TU WSTAW ZDJĘCIE JARKA
                                alt="Jarosław Biłas - Chirurg Szczecin"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="md:col-span-8 prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:text-nova-dark prose-p:font-medium prose-p:text-slate-600 prose-strong:font-black prose-strong:text-nova-dark">
                            <h3 className="text-3xl italic">Jarosław Biłas</h3>
                            <p className="text-nova-blue font-bold text-sm uppercase tracking-widest !mt-1">Lekarz specjalista chirurgii ogólnej, lekarz medycyny estetycznej</p>

                            <p className="mt-6">
                                Jestem absolwentem Wydziału Lekarskiego Pomorskiej Akademii Medycznej w Szczecinie. Szkolenie specjalizacyjne z zakresu chirurgii ogólnej odbyłem w Wojewódzkim Szpitalu Zespolonym w Szczecinie.
                            </p>
                            <p>
                                Moje doświadczenie kliniczne obejmuje pracę w Oddziale Chirurgii Plastycznej i Rekonstrukcyjnej 109 Szpitala Wojskowego w Szczecinie oraz w Szpitalu Powiatowym w Gryfinie. Obecnie poszerzam swoje kompetencje z zakresu ortopedii i traumatologii w Klinice Ortopedii Dziecięcej i Onkologii Narządu Ruchu SPSK1.
                            </p>
                            <p>
                                Moja przygoda z estetyką lekarską zaczęła się w 2012 r. W swojej pracy szczególną dbałość przywiązuję do precyzji, bezpieczeństwa oraz <strong>naturalnego efektu zabiegów</strong>. Regularnie uczestniczę w międzynarodowych szkoleniach i kongresach.
                            </p>
                            <p className="text-sm italic text-slate-400">Prywatnie: Tata dwóch urwisów, niespełniony pilot marzący o skrzydłach i muzykant.</p>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 my-24"></div>

                    {/* BIO: ANNA BIŁAS - Układ odwrotny na desktop (zdjęcie po prawej) */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                        {/* Tekst - wariacja order-2 md:order-1 */}
                        <div className="md:col-span-8 order-2 md:order-1 prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:text-nova-dark prose-p:font-medium prose-p:text-slate-600 prose-strong:font-black prose-strong:text-nova-dark">
                            <h3 className="text-3xl italic">Anna Biłas</h3>
                            <p className="text-nova-blue font-bold text-sm uppercase tracking-widest !mt-1">Dyplomowana położna, pielęgniarka chirurgiczna, dyplomowany podolog</p>

                            <p className="mt-6">
                                Posiadam wieloletnie doświadczenie w opiece nad Pacjentami zarówno w warunkach szpitalnych, jak i ambulatoryjnych. Jestem dyplomowaną położną i pielęgniarką ze specjalizacją z pielęgniarstwa chirurgicznego.
                            </p>
                            <p>
                                Moja ścieżka zawodowa obejmuje pracę na Oddziale Chemioterapii, co nauczyło mnie szczególnej empatii i dbałości o relacje z Pacjentem.
                            </p>
                            <p>
                                Ukończyłam studia podyplomowe z podologii z wynikiem celującym, łącząc wiedzę pielęgniarską z pasją do pielęgnacji stóp i <strong>leczenia ran przewlekłych (w tym zespołem stopy cukrzycowej)</strong>. Stale rozwijam swoje kompetencje, uczestnicząc w konferencjach i kursach.
                            </p>
                            <p className="text-sm italic text-slate-400">Prywatnie: Mama dwóch małych łobuzów i miłośniczka literatury.</p>
                        </div>

                        {/* Zdjęcie - wariacja order-1 md:order-2 */}
                        <div className="md:col-span-4 order-1 md:order-2 relative aspect-square rounded-[2rem] overflow-hidden shadow-xl border-2 border-slate-50">
                            <Image
                                src="/images/ania-profil.jpg" // <-- TU WSTAW ZDJĘCIE ANI
                                alt="Ania Biłas - Podolog, Pielęgniarka Chirurgiczna Szczecin"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}