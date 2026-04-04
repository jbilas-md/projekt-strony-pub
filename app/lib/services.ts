export interface Package {
  name: string;
  price: string;
  features: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface BlogPost {
  title: string;
  link: string;
}

export interface Service {
  title: string;
  h1: string;
  intro: string;
  image: string;
  details: string;
  benefits: string[];
  packages: Package[];
  faq: FAQItem[];
  blog: BlogPost[];
}

export const servicesData: Record<string, Service> = {
  'wazektomia': {
    title: "Wazektomia bez skalpela",
    h1: "Wazektomia Szczecin - Bezpieczna Metoda WBS",
    intro: "Wazektomia to nowoczesna i bezpieczna metoda trwałej antykoncepcji męskiej, wykonywana w Novamedic przez doświadczony zaspół.",
    image: "/images/wazektomia-hero.jpg",
    details: "Zabieg metodą bez skalpela (WBS) polega na rozwarstwieniu tkanek, co eliminuje konieczność zakładania szwów i drastycznie skraca rekonwalescencję.",
    benefits: ["Skuteczność powyżej 99,9%", "Zabieg trwa 30-60 minut", "Brak szwów", "Szybki powrót do aktywności"],
    packages: [
      { name: "Pakiet Standard", price: "2500 zł", features: ["Konsultacja wstępna", "Zabieg WBS", "Zestaw pozabiegowy"] },
      { name: "Pakiet Premium", price: "3200 zł", features: ["Wszystko co w Standard", "Badanie nasienia po 12 tyg."] }
    ],
    faq: [
      { q: "Czy zabieg boli?", a: "Zabieg wykonywany jest w znieczuleniu miejscowym, pacjent czuje jedynie lekkie rozpieranie." }
    ],
    blog: [
      { title: "Mity na temat wazektomii", link: "/blog/mity-wazektomia" }
    ]
  },
  'podologia': {
    title: "Podologia i Leczenie Stóp",
    h1: "Specjalistyczna Pielęgnacja i Terapia Stóp",
    intro: "Problemy stóp wpływają na komfort całego życia. W naszym gabinecie łączymy wiedzę medyczną z profesjonalną opieką.",
    image: "/images/podologia-hero.jpg",
    details: "Każda wizyta rozpoczyna się od szczegółowej diagnostyki. Stosujemy wyłącznie sterylne narzędzia.",
    benefits: ["Leczenie wrastających paznokci", "Usuwanie bolesnych modzeli", "Terapia brodawek"],
    packages: [
      { name: "Zabieg podstawowy", price: "200 zł", features: ["Konsultacja", "Opracowanie podeszwy"] }
    ],
    faq: [
      { q: "Czy wymagane jest skierowanie?", a: "Nie, do podologa w naszej klinice nie jest wymagane skierowanie." }
    ],
    blog: [
      { title: "Jak dbać o stopy?", link: "/blog/dbanie-o-stopy" }
    ]
  }
};