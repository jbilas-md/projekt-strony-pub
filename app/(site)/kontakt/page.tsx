import Link from 'next/link';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: 'Kontakt - Novamedic Szczecin',
    description: 'Skontaktuj się z kliniką Novamedic. Zapraszamy do naszego gabinetu w Szczecinie przy ul. Wawrzyniaka.',
};

const Icons = {
    Pin: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
    ),
    Phone: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
    ),
    Clock: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    )
};

export default function KontaktPage() {
    return (
        <div className="min-h-screen bg-nova-bg font-sans">
            <main className="pt-32 lg:pt-48 pb-20">

                {/* HERO - WYŚRODKOWANE */}
                <section className="max-w-7xl mx-auto px-4 mb-24 text-center">
                    <nav className="flex justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8 font-black">
                        <Link href="/" className="hover:text-nova-blue transition-colors">Novamedic</Link>
                        <span>/</span>
                        <span className="text-nova-dark">Kontakt</span>
                    </nav>
                    <h1 className="text-5xl lg:text-7xl font-black text-nova-dark mb-8 leading-[1.1]">
                        Kontakt
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
                        Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania i pomóc w doborze odpowiedniego zabiegu. Zapraszamy do kontaktu.
                    </p>
                </section>

                <section className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                        {/* LEWA KOLUMNA: Dane i Mapa */}
                        <div className="lg:col-span-5 flex flex-col gap-8">

                            {/* KAFELEK DANYCH */}
                            <div className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-xl border border-white flex-1">
                                <h2 className="text-3xl font-black mb-12 text-nova-dark text-center uppercase tracking-tight">
                                    DANE GABINETU
                                </h2>

                                <div className="space-y-10 max-w-sm mx-auto">
                                    {/* ADRES */}
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-nova-bg rounded-2xl flex items-center justify-center shrink-0 text-nova-blue">
                                            <Icons.Pin />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Lokalizacja</p>
                                            <p className="text-lg font-bold text-nova-dark leading-snug">
                                                ul. Wawrzyniaka 6c/1<br />70-392 Szczecin
                                            </p>
                                        </div>
                                    </div>

                                    {/* TELEFON */}
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-nova-bg rounded-2xl flex items-center justify-center shrink-0 text-nova-blue">
                                            <Icons.Phone />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Telefon</p>
                                            <div className="flex flex-col gap-1">
                                                <a href="tel:+48662858626" className="text-lg font-bold text-nova-dark hover:text-nova-blue transition-colors">
                                                    +48 662 858 626
                                                </a>
                                                <a href="tel:+48795370970" className="text-lg font-bold text-nova-dark hover:text-nova-blue transition-colors">
                                                    +48 795 370 970
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* GODZINY */}
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-nova-bg rounded-2xl flex items-center justify-center shrink-0 text-nova-blue">
                                            <Icons.Clock />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Godziny przyjęć</p>
                                            <p className="text-lg font-bold text-nova-dark leading-tight">
                                                Poniedziałek – Piątek<br />09:00 – 18:00
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MAPA */}
                            <div className="h-[350px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.43734734731!2d14.5315!3d53.4285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa09148d4c9d7d%3A0x6b6c6b6c6b6c6b6c!2sWawrzyniaka%206c%2F1%2C%2070-392%20Szczecin!5e0!3m2!1spl!2spl!4v1712345678901"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        {/* PRAWA KOLUMNA: Formularz */}
                        <div className="lg:col-span-7 bg-white p-12 lg:p-16 rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-white/50 flex flex-col">
                            <h2 className="text-3xl font-black mb-12 text-nova-dark text-center uppercase tracking-tight">
                                Napisz do nas
                            </h2>
                            <p className="text-slate-500 font-medium leading-relaxed text-center mb-10 max-w-md mx-auto italic">
                                Masz pytania? Skorzystaj z formularza – odpowiemy tak szybko, jak to możliwe.
                            </p>
                            <ContactForm />
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}