import { NextResponse } from 'next/server';
import { Resend } from 'resend';

//const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const { name, email, phone, message } = await req.json();
        if (!process.env.RESEND_API_KEY) {
            console.error("Brak klucza RESEND_API_KEY w środowisku!");
            return NextResponse.json({ error: 'Błąd konfiguracji serwera' }, { status: 500 });
        }
        const data = await resend.emails.send({
            // Używaj zweryfikowanego adresu w Twojej domenie jako nadawcy
            from: 'Novamedic Formularz <system@novamedic.pl>',
            to: ['formularz@novamedic.pl'],
            subject: `[KONTAKT] Nowa wiadomość: ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
                  <h2 style="color: #000; border-bottom: 2px solid #f4f4f4; padding-bottom: 10px;">Zapytanie z witryny Novamedic</h2>
                  <p><strong>Pacjent:</strong> ${name}</p>
                  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                  <p><strong>Telefon:</strong> <a href="tel:${phone}">${phone}</a></p>
                  <div style="background: #f9f9f9; padding: 20px; border-radius: 12px; margin-top: 20px; border: 1px solid #eee;">
                    ${message}
                  </div>
                </div>
            `,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Błąd wysyłki' }, { status: 500 });
    }
}