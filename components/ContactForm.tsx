'use client';
import { useState } from 'react';
interface ContactFormProps {
    compact?: boolean;
}
export default function ContactForm({ compact = false }: ContactFormProps) {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Logika Honeypot: Sprawdzamy czy ukryte pole zostało wypełnione przez bota
        const formData = new FormData(e.currentTarget);
        const honey = formData.get('website_confirm');
        if (honey) {
            console.log("Bot detected");
            return; // Ciche odrzucenie zapytania
        }

        setStatus('sending');
        // Pobranie danych z formularza
        const payload = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 p-12 rounded-[3rem] text-center border border-green-100 h-full flex flex-col justify-center items-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl mb-6">✓</div>
                <h3 className="text-2xl font-black text-green-900 mb-2 italic">Wiadomość wysłana</h3>
                <p className="text-green-700 font-medium italic">Odezwiemy się do Państwa najszybciej jak to możliwe.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-sm font-black text-green-900 uppercase tracking-widest hover:underline">
                    Wyślij kolejną
                </button>
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div className="bg-red-50 p-12 rounded-[3rem] tewxt-center border border-red-100 h-full flex flex-col justify-center items-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-red-500 text-white rouded-full flex items-center justify-center text-3xl mb-6">/</div>
                <h3 className="text-2xl front-black text-red-900 mb-2 italic">Coś poszło nie tak...</h3>
                <p className="text-red-700 front-medium italic">Spróbuj ponownie lub zadzwoń do nas.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-sm font-black text-red-900 uppercase tracking-widest hover:underline">
                    Wyślij jeszcze raz
                </button>
            </div>
        )
    }
    return (
        <div className="flex flex-col h-full">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* 1. HONEYPOT - Ukryte dla ludzi, widoczne dla botów */}
                <div className="hidden" aria-hidden="true">
                    <input
                        type="text"
                        name="website_confirm"
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-nova-dark mb-2 ml-4">Imię i Nazwisko *</label>
                        <input
                            required
                            name="name"
                            type="text"
                            className="w-full bg-nova-bg border-2 border-transparent rounded-2xl p-4 focus:border-nova-blue focus:bg-white outline-none transition-all font-medium"
                            placeholder="Jan Kowalski"
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-nova-dark mb-2 ml-4">Telefon *</label>
                        <input
                            required
                            name="phone"
                            type="tel"
                            className="w-full bg-nova-bg border-2 border-transparent rounded-2xl p-4 focus:border-nova-blue focus:bg-white outline-none transition-all font-medium"
                            placeholder="+48 000 000 000"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-nova-dark mb-2 ml-4">Adres E-mail *</label>
                    <input
                        required
                        name="email"
                        type="email"
                        className="w-full bg-nova-bg border-2 border-transparent rounded-2xl p-4 focus:border-nova-blue focus:bg-white outline-none transition-all font-medium"
                        placeholder="kontakt@novamedic.pl"
                    />
                </div>

                <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-nova-dark mb-2 ml-4">Wiadomość *</label>
                    <textarea
                        required
                        name="message"
                        rows={5}
                        className="w-full bg-nova-bg border-2 border-transparent rounded-2xl p-4 focus:border-nova-blue focus:bg-white outline-none transition-all font-medium resize-none"
                        placeholder="W czym możemy pomóc?"
                    ></textarea>
                </div>

                {/* 3. KLAUZULA RODO */}
                <div className="px-4 py-2">
                    <div className="flex items-start gap-3">
                        <input
                            required
                            type="checkbox"
                            id="rodo"
                            className="mt-1 w-4 h-4 rounded border-gray-300 text-nova-blue focus:ring-nova-blue"
                        />
                        <label htmlFor="rodo" className="text-[9px] leading-tight text-slate-400 font-medium">
                            Zapoznałem się z <a href="/polityka-prywatnosci" className="underline hover:text-nova-blue">Polityką Prywatności</a> i wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zapytania. Administratorem danych jest Novamedic Szczecin. *
                        </label>
                    </div>
                </div>

                <button
                    disabled={status === 'sending'}
                    className="w-full bg-nova-dark text-white font-black py-5 rounded-2xl hover:bg-nova-blue transition-all shadow-xl hover:shadow-nova-blue/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
                >
                    {status === 'sending' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                </button>
            </form>
        </div>
    );
}