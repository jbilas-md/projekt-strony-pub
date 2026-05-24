// app/faq/page.tsx
import { FAQ_ITEMS, FAQ_CATEGORIES } from "@/app/lib/faq-data";
import FAQClient from "./FAQClient";
import { constructMetadata } from "@/app/lib/seo"; // użyj swojej funkcji SEO jeśli ją masz

export const metadata = {
    title: "FAQ – Najczęściej Zadawane Pytania | Novamedic Szczecin",
    description: "Masz pytania dotyczące wazektomii, zabiegów podologicznych lub chirurgii w Novamedic? Poznaj odpowiedzi ekspertów i dowiedz się, jak przygotować się do wizyty.",
    openGraph: {
        title: "FAQ – Baza Wiedzy pacjenta | Novamedic Szczecin",
        description: "Odpowiedzi na najczęstsze pytania pacjentów gabinetu Novamedic.",
    }
};

export default function FAQPage() {
    // Generowanie kodu JSON-LD dla Google do Rich Snippets
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <main className="bg-white min-h-screen pt-32 pb-20">
            {/* Wstrzyknięcie skryptu Schema dla wyszukiwarek */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <FAQClient items={FAQ_ITEMS} categories={FAQ_CATEGORIES} />
        </main>
    );
}