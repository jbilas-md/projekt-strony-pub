// app/o-nas/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'O nas | Poznaj zespół Novamedic Szczecin',
    description: 'Poznaj założycieli kliniki Novamedic w Szczecinie - Jarosława Biłasa i Annę Biłas. Wieloletnie doświadczenie w chirurgii, podologii i leczeniu ran.',
};

export default function AboutUsPage() {
    return (
        <main className="bg-white"> {/* Wymuszenie białego tła dla całości */}
            {/* 1. HERO SECTION */}
            <section className="py-24 bg-white mt-32"> {/* Dodany margines górny przez fixed header */}
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <span className="bg-nova-blue/10 text-nova-blue px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">Poznaj nas</span>
                        <h1 className="text-5xl md:text-7xl font-black text-nova-dark mt-6 leading-[0.9] tracking-tighter italic">
                            Twoje zdrowie <br />w rękach <br /><span className="text-nova-blue">ekspertów.</span>
                        </h1>
                        <p className="text-slate-800 text-xl mt-8 font-medium leading-relaxed max-w-lg">
                            Witamy w Novamedic – miejscu stworzonym z pasji do medycyny, nowoczesnych technologii i autentycznej troski o drugiego człowieka.
                        </p>
                    </div>
                    <div className="lg:col-span-7 relative aspect-[5/4] lg:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100">
                        <Image
                            src="/images/ania-i-jarek.jpg"
                            alt="Anna i Jarosław Biłas - Novamedic Szczecin"
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* 2. MISJA I PODEJŚCIE */}
            <section className="py-24 bg-nova-bg">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-xl border border-slate-100">
                        <div className="prose prose-xl max-w-none text-slate-900 prose-headings:font-black prose-headings:text-nova-dark prose-headings:italic prose-strong:text-nova-dark">
                            <h2 className="text-nova-dark font-black !not-italic text-3xl mb-6">
                                Kompleksowa opieka i bezpieczeństwo
                            </h2>
                            <p className="text-slate-800 font-medium leading-relaxed mb-8 text-x1">
                                Naszą ideą było stworzenie gabinetu, w którym Pacjenci będą kompleksowo diagnozowani i leczeni, zgodnie z aktualną wiedzą medyczną i w oparciu o najlepsze praktyki kliniczne. W Novamedic poczujesz się komfortowo i bezpiecznie, mając pewność, że Twoje dobro jest dla nas absolutnym priorytetem.
                            </p>

                            <h2 className="text-nova-dark font-black !not-italic text-3xl mb-6">
                                Skoordynowane działania dla najlepszych efektów
                            </h2>
                            <p className="text-slate-800 font-medium leading-relaxed mb-8 text-x1">
                                Pracując przez lata w publicznych placówkach, dostrzegliśmy brak zintegrowanej opieki nad chorymi, zwłaszcza z ranami przewlekłymi czy zespołem stopy cukrzycowej. Jesteśmy przekonani, że najlepsze efekty dają tylko wielokierunkowe, skoordynowane działania, oparte na współpracy lekarzy, pielęgniarek i podologów.
                            </p>

                            <p className="text-slate-800 font-medium leading-relaxed mb-8 text-x1">
                                Dla wygody naszych Pacjentów zapewniamy pełny zakres diagnostyki: od badań laboratoryjnych i mikrobiologicznych po histopatologiczne.
                            </p>

                            <div className="mt-12 flex justify-center">
                                <Link href="/kontakt" className="bg-nova-blue text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-lg hover:bg-nova-dark transition-all">
                                    Umów konsultację →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. BIOGRAFIE SPECJALISTÓW */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 space-y-32">

                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-nova-dark uppercase tracking-tight italic">Nasz Zespół</h2>
                        <div className="h-1.5 w-24 bg-nova-accent mx-auto mt-4 rounded-full"></div>
                    </div>

                    {/* BIO: JAROSŁAW BIŁAS */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-4 relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-2 border-slate-50">
                            <Image
                                src="/images/jarek-profil.jpg"
                                alt="Jarosław Biłas - Chirurg Szczecin"
                                fill
                                sizes="400px"
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="lg:col-span-8">
                            <h3 className="text-4xl font-black text-nova-dark italic">Jarosław Biłas</h3>
                            <p className="text-nova-blue font-black text-xs uppercase tracking-[0.2em] mt-2 mb-8 bg-nova-blue/5 inline-block px-4 py-2 rounded-lg">
                                Lekarz specjalista chirurgii ogólnej, medycyna estetyczna
                            </p>

                            <div className="space-y-6 text-slate-800 text-lg font-medium leading-relaxed">
                                <p>
                                    Jestem absolwentem Wydziału Lekarskiego Pomorskiej Akademii Medycznej w Szczecinie. Szkolenie specjalizacyjne z zakresu chirurgii ogólnej odbyłem w Wojewódzkim Szpitalu Zespolonym w Szczecinie.
                                </p>
                                <p>
                                    Moje doświadczenie kliniczne obejmuje pracę w Oddziale Chirurgii Plastycznej i Rekonstrukcyjnej 109 Szpitala Wojskowego w Szczecinie oraz w Szpitalu Powiatowym w Gryfinie. Obecnie poszerzam swoje kompetencje z zakresu ortopedii i traumatologii w Klinice Ortopedii Dziecięcej i Onkologii Narządu Ruchu SPSK1.
                                </p>
                                <p>
                                    W swojej pracy szczególną dbałość przywiązuję do precyzji, bezpieczeństwa oraz <strong className="text-nova-dark">naturalnego efektu zabiegów</strong>. Regularnie uczestniczę w międzynarodowych szkoleniach i kongresach.
                                </p>
                                <p className="text-sm italic text-slate-400 pt-4 border-t border-slate-100">Prywatnie: Tata dwóch urwisów, niespełniony pilot marzący o skrzydłach i muzykant.</p>
                            </div>
                        </div>
                    </div>

                    {/* BIO: ANNA BIŁAS */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-8 order-2 lg:order-1">
                            <h3 className="text-4xl font-black text-nova-dark italic">Anna Biłas</h3>
                            <p className="text-nova-blue font-black text-xs uppercase tracking-[0.2em] mt-2 mb-8 bg-nova-blue/5 inline-block px-4 py-2 rounded-lg">
                                Dyplomowana położna, pielęgniarka chirurgiczna, podolog
                            </p>

                            <div className="space-y-6 text-slate-800 text-lg font-medium leading-relaxed">
                                <p>
                                    Posiadam wieloletnie doświadczenie w opiece nad Pacjentami zarówno w warunkach szpitalnych, jak i ambulatoryjnych. Jestem dyplomowaną położną i pielęgniarką ze specjalizacją z pielęgniarstwa chirurgicznego.
                                </p>
                                <p>
                                    Moja ścieżka zawodowa obejmuje pracę na Oddziale Chemioterapii, co nauczyło mnie szczególnej empatii i dbałości o relacje z Pacjentem.
                                </p>
                                <p>
                                    Ukończyłam studia podyplomowe z podologii z wynikiem celującym, łącząc wiedzę pielęgniarską z pasją do pielęgnacji stóp i <strong className="text-nova-dark">leczenia ran przewlekłych</strong>. Stale rozwijam swoje kompetencje, uczestnicząc w konferencjach i kursach.
                                </p>
                                <p className="text-sm italic text-slate-400 pt-4 border-t border-slate-100">Prywatnie: Mama dwóch małych łobuzów i miłośniczka literatury.</p>
                            </div>
                        </div>

                        <div className="lg:col-span-4 order-1 lg:order-2 relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-2 border-slate-50">
                            <Image
                                src="/images/ania-profil.jpg"
                                alt="Ania Biłas - Podolog Szczecin"
                                fill
                                sizes="400px"
                                className="object-cover object-top"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}