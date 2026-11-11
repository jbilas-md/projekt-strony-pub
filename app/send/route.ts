import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactMessage {
    name: string;
    email: string;
    phone: string;
    message: string;
}

function isContactMessage(value: unknown): value is ContactMessage {
    if (typeof value !== 'object' || value === null) {
        return false;
    }

    return 'name' in value
        && typeof value.name === 'string'
        && 'email' in value
        && typeof value.email === 'string'
        && 'phone' in value
        && typeof value.phone === 'string'
        && 'message' in value
        && typeof value.message === 'string';
}

function escapeHtml(value: string) {
    const entities: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    };

    return value.replace(/[&<>"']/g, (character) => entities[character]);
}

export async function POST(req: Request) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error("Brak klucza RESEND_API_KEY w środowisku!");
        return NextResponse.json({ error: 'Błąd konfiguracji serwera' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    let body: unknown;

    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: 'Nieprawidłowe dane formularza' }, { status: 400 });
    }

    if (
        !isContactMessage(body)
        || !body.name.trim()
        || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)
        || !body.phone.trim()
        || !body.message.trim()
    ) {
        return NextResponse.json({ error: 'Nieprawidłowe dane formularza' }, { status: 400 });
    }

    const { name, email, phone, message } = body;
    try {
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safePhone = escapeHtml(phone);
        const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');

        const data = await resend.emails.send({
            // Używaj zweryfikowanego adresu w Twojej domenie jako nadawcy
            from: 'Novamedic Formularz <system@novamedic.pl>',
            to: ['formularz@novamedic.pl'],
            subject: `[KONTAKT] Nowa wiadomość: ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
                  <h2 style="color: #000; border-bottom: 2px solid #f4f4f4; padding-bottom: 10px;">Zapytanie z witryny Novamedic</h2>
                  <p><strong>Pacjent:</strong> ${safeName}</p>
                  <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
                  <p><strong>Telefon:</strong> <a href="tel:${safePhone}">${safePhone}</a></p>
                  <div style="background: #f9f9f9; padding: 20px; border-radius: 12px; margin-top: 20px; border: 1px solid #eee;">
                    ${safeMessage}
                  </div>
                </div>
            `,
        });

        return NextResponse.json(data);
    } catch (error) {
        console.error('Nie udało się wysłać wiadomości z formularza', error);
        return NextResponse.json({ error: 'Błąd wysyłki' }, { status: 500 });
    }
}