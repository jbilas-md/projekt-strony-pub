export interface FAQItem {
    id: string;
    category: string; //np. 'wazektomia', 'podologia', 'ogolne'
    q: string;
    a: string;
}

export const allFaqs: FAQItem[] = [
    {
        id: 'w-1',
        category: 'wazektomia',
        q: "Czy zabieg jest bolesny?",
        a: "Zabieg wykonywany jest w znieczuleniu miejscowym. Poza 1 lub 2 ukłuciami wykonywanymi bardzo cieńką igłą, zabieg jest całkowicie bezbolesny"
    },
    {
        id: 'p-1',
        category: 'podologia',
        q: "Czy wymagane jest skierowanie?",
        a: "Nie, zapraszamy bezpośrednio do gabinetu."
    }
];