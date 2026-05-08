export interface Package {
    id: string;
    name: string;
    price: string;
    features: string[];
    isPromoted?: boolean;
    tags: string[]; // np. ['wazektomia', 'cennik-glowny']
}

export const allPackages: Package[] = [
    {
        id: 'waz-std',
        name: "Pakiet Standard",
        price: "2700 zł",
        tags: ['wazektomia'],
        features: ["Konsultacja wstępna", "Zabieg wazektomii"]
    },
    {
        id: 'waz-pre',
        name: "Pakiet Premium",
        price: "3000 zł",
        isPromoted: true,
        tags: ['wazektomia'],
        features: ["Konsultacja wstępna", "Panel badań krwi przed zabiegiem", "Zabieg wazektomii", "Kontrola po zabiegu"]
    },
    {
        id: 'pod-base',
        name: "Zabieg podstawowy",
        price: "200 zł",
        tags: ['podologia'],
        features: ["Konsultacja", "Opracowanie podeszwy", "Dobór odciążeń"]
    }
];