export interface Package {
    id: string;
    name: string;
    price: string;
    features: string[];
    isPromoted: boolean;
    category: 'wazektomia' | 'chirurgia' | 'podologia'; // Dodawaj kategorie wg potrzeb
}

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
    category: 'wazektomia' | 'chirurgia' | 'podologia';
}

export const packages: Package[] = [
    {
        id: 'waz-1',
        name: "Pakiet Standard",
        price: "2200 zł",
        features: ["Zabieg wazektomii", "Znieczulenie miejscowe", "Wizyta kontrolna"],
        isPromoted: false,
        category: 'wazektomia'
    },
    {
        id: 'waz-2',
        name: "Pakiet Premium",
        price: "2800 zł",
        features: ["Zabieg wazektomii", "Znieczulenie bezigłowe", "2x Wizyta kontrolna", "Badanie nasienia po 12 tyg."],
        isPromoted: true,
        category: 'wazektomia'
    }
]