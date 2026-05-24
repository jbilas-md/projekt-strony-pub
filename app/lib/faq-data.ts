// lib/faq-data.ts

export type FAQCategory = {
    slug: string;
    name: string;
};

export type FAQItem = {
    id: string;
    question: string;
    answer: string;
    categorySlug: string;
};

export const FAQ_CATEGORIES: FAQCategory[] = [
    { slug: "ogolne", name: "Ogólne i Rejestracja" },
    { slug: "wazektomia", name: "Wazektomia" },
    { slug: "podologia", name: "Podologia i Podochirurgia" },
    { slug: "chirurgia", name: "Chirurgia" },
    { slug: "medycyna-estetyczna", name: "Medycyna Estetyczna" }
];

export const FAQ_ITEMS: FAQItem[] = [
    {
        id: "faq-01",
        categorySlug: "ogolne",
        question: "Czy do gabinetu Novamedic wymagane jest skierowanie od lekarza POZ?",
        answer: "Nie, Novamedic jest prywatnym gabinetem specjalistycznym. Na konsultacje oraz zabiegi chirurgiczne lub podologiczne nie jest wymagane skierowanie. Zapraszamy do rejestracji telefonicznej lub online."
    },
    {
        id: "faq-02",
        categorySlug: "wazektomia",
        question: "Czy zabieg wazektomii boli i jak długo trwa?",
        answer: "Zabieg wazektomii w Novamedic wykonywany jest w znieczuleniu miejscowym, dzięki czemu jest całkowicie bezbolesny. Pacjent może odczuwać jedynie delikatne pociąganie. Cała procedura trwa zazwyczaj od 20 do 30 minut, a po jej zakończeniu pacjent wraca do domu."
    },
    {
        id: "faq-03",
        categorySlug: "wazektomia",
        question: "Kiedy można współżyć po wazektomii i kiedy antykoncepcja jest skuteczna?",
        answer: "Zaleca się wstrzemięźliwość seksualną przez około 7 dni po zabiegu, aby umożliwić pełne zagojenie tkanek. Kluczowe jest pamiętanie, że wazektomia nie działa natychmiast. Skuteczność potwierdza się dopiero badaniem nasienia na obecność plemników (morfologia ejakulatu), które wykonuje się standardowo po 12 tygodniach od zabiegu."
    },
    {
        id: "faq-04",
        categorySlug: "podologia",
        question: "Jak należy przygotować się do pierwszej wizyty u podologa?",
        answer: "Przed pierwszą wizytą podologiczną (szczególnie w przypadku pękających pięt czy wrastających paznokci) prosimy nie moczyć intensywnie stóp w domu ani nie usuwać samodzielnie zrogowaceń tarką czy pumeksem. Pozwoli to na trafną ocenę stanu skóry i dobór właściwej terapii."
    }
];

// Funkcja pomocnicza pozwalająca pobrać pytania dla konkretnego zabiegu (użyjesz jej np. na stronie zabiegu)
export function getFAQsByCategory(categorySlug: string) {
    return FAQ_ITEMS.filter(item => item.categorySlug === categorySlug);
}