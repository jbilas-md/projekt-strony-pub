'use client';
import { useState } from 'react';

// Dodajemy interfejs dla ustawień formularza
interface ContactFormProps {
    compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const honey = formData.get('website_confirm');
        if (honey) return;

        setStatus('sending');
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

            if (response.ok) setStatus('success');
            else setStatus('error');
        } catch (error) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 p-8 rounded-[2rem] text-center border border-green-100 flex flex-col items-center animate-in fade-in zoom-in duration-300">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl mb-4">✓</div>
                <h3 className="text-xl font-black text-green-900 italic">Wysłano!</h3>
                <p className="text-green-700 text-sm font-medium italic">Odezwiemy się niebawem.</p>
                <button onClick={() => setStatus('idle')} className="mt-4 text-[10px] font-black text-green-900 uppercase tracking-widest hover:underline">Wyślij ponownie</button>
            </div>
        );
    }

    // Widok błędu skrócony
    if (status === 'error') {
        return (
            <div className="bg-red-50 p-8 rounded-[2rem] text-center border border-red-100 flex flex-col items-center animate-in fade-in zoom-in duration-300">
                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-xl mb-4">!</div>
                <h3 className="text-xl font-black text-red-900 italic">Błąd...</h3>
                <button onClick={() => setStatus('idle')} className="mt-4 text-[10px] font-black text-red-900 uppercase tracking-widest hover:underline">Spróbuj jeszcze raz</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <div className="hidden" aria-hidden="true">
                <input type="text" name="website_confirm" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input required name="name" type="text" placeholder="Imię i Nazwisko *" 
                    className="w-full bg-white border-2 border-slate-100 rounded-xl p-3 focus:border-nova-blue outline-none transition-all text-sm font-medium text-slate-900" />
                <input required name="phone" type="tel" placeholder="Telefon *" 
                    className="w-full bg-white border-2 border-slate-100 rounded-xl p-3 focus:border-nova-blue outline-none transition-all text-sm font-medium text-slate-900" />
            </div>

            <input required name="email" type="email" placeholder="Adres E-mail *" 
                className="w-full bg-white border-2 border-slate-100 rounded-xl p-3 focus:border-nova-blue outline-none transition-all text-sm font-medium text-slate-900" />
            
            <textarea required name="message" rows={3} placeholder="W czym możemy pomóc? *" 
                className="w-full bg-white border-2 border-slate-100 rounded-xl p-3 focus:border-nova-blue outline-none transition-all text-sm font-medium resize-none text-slate-900"></textarea>

            <div className="flex items-start gap-2 px-2">
                <input required type="checkbox" id="rodo-temp" className="mt-1 w-3 h-3" />
                <label htmlFor="rodo-temp" className="text-[8px] leading-tight text-slate-400 font-medium">
                    Wyrażam zgodę na przetwarzanie danych w celu obsługi zapytania. *
                </label>
            </div>

            <button disabled={status === 'sending'} className="w-full bg-slate-900 text-white font-black py-4 rounded-xl hover:bg-blue-600 transition-all uppercase tracking-widest text-[10px] shadow-lg">
                {status === 'sending' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
            </button>
        </form>
    );
}