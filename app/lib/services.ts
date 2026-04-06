import { FAQItem } from '@/app/lib/faqs';
import { Package } from '@/app/lib/packages';

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

export const servicesData: Record<string, any> = {
  'wazektomia': {
    title: "Wazektomia",
    h1: "Wazektomia Szczecin",
    intro: "Wazektomia to nowoczesna i bezpieczna metoda trwałej antykoncepcji męskiej, wykonywana w Novamedic przez doświadczony zespół chirurgiczno-pielęgnierski w centrum Szczecina.",
    image: "/images/wazektomia-hero.jpg",
    details: "Zabieg polega na zaopatrzeniu obu nasieniowodów metodą kanadyjską przez jeden niewielki otwór w skórze, co w znacznym stopniu skraca rekonwalescencję. Szew wchłanialny jest całkowicie niewidoczny i nie wymaga dodatkowych wizyt.",
    benefits: ["Skuteczność powyżej 99,9%", "Zabieg trwa 30-40 minut", "Szew wchłanialny", "Szybki powrót do aktywności"],
    blog: [
      { title: "Mity na temat wazektomii", link: "/blog/mity-wazektomia" }
    ]
  },
  'podologia': {
    title: "Podologia",
    h1: "Specjalistyczna Pielęgnacja Stóp",
    intro: "Problemy stóp wpływają na komfort całego życia. W naszym gabinecie łączymy wiedzę medyczną z profesjonalną opieką.",
    image: "/images/podologia-hero.jpg",
    details: "Każda wizyta rozpoczyna się od szczegółowej diagnostyki. Stosujemy wyłącznie sterylne narzędzia.",
    benefits: ["Leczenie wrastających paznokci", "Usuwanie bolesnych modzeli", "Terapia brodawek"],
    blog: [
      { title: "Jak dbać o stopy?", link: "/blog/dbanie-o-stopy" }
    ]
  }
};