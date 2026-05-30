// app/faq/page.tsx
import { getFaqItems, getFaqCategories } from "@/app/lib/sanity.queries";
import FAQClient from "./FAQClient";

export const metadata = {
    title: "FAQ – Najczęściej Zadawane Pytania | Novamedic Szczecin",
    description: "Masz pytania dotyczące wazektomii, zabiegów podologicznych lub chirurgii w Novamedic? Poznaj odpowiedzi ekspertów i dowiedz się, jak przygotować się do wizyty.",
    openGraph: {
        title: "FAQ – Baza Wiedzy pacjenta | Novamedic Szczecin",
        description: "Odpowiedzi na najczęstsze pytania pacjentów gabinetu Novamedic.",
    }
};

export default async function FAQPage() {
    // Równoległe pobieranie danych ze Sanity CMS dla maksymalnej wydajności
    const [faqItems, faqCategories] = await Promise.all([
        getFaqItems(),
        getFaqCategories()
    ]);

    // Generowanie kodu JSON-LD opartego o czysty, pozbawiony znaczników html tekst z plainAnswer
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item: any) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.plainAnswer
            }
        }))
    };

    return (
        <main className="bg-white min-h-screen pt-32 pb-20">
            {/* Struktura Schema przesyłana bezbłędnie do wyszukiwarki Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <FAQClient items={faqItems} categories={faqCategories} />
        </main>
    );
}