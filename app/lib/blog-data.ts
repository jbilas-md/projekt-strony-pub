export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Nowoczesne metody leczenia wrastających paznokci – Pożegnaj ból raz na zawsze",
    slug: "leczenie-wrastajacych-paznokci-szczecin",
    excerpt: "Wrastający paznokieć to nie tylko problem estetyczny, ale przede wszystkim silny ból. Poznaj nowoczesne metody podochirurgiczne, które oferują trwałe rozwiązanie bez konieczności całkowitego zerwania paznokcia.",
    category: "podochirurgia",
  },
  {
    id: "2",
    title: "Wazektomia – Fakty, Mity i Przebieg Zabiegu. Przewodnik dla Mężczyzn",
    slug: "wazektomia-fakty-mity-przebieg-szczecin",
    excerpt: "Rozważasz wazektomię? Dowiedz się, dlaczego jest to obecnie najskuteczniejsza metoda męskiej antykoncepcji, jak wygląda zabieg w Novamedic Szczecin i obal najpopularniejsze mity na jej temat.",
    category: "wazektomia",
  },
  {
    id: "3",
    title: "Pękające pięty – jak przywrócić stopom gładkość? Skuteczne sposoby podologiczne",
    slug: "pekajace-piety-pielegnacja-podologia-szczecin",
    excerpt: "Głębokie rozpadliny na piętach to nie tylko problem estetyczny, ale i bolesna dolegliwość, która może prowadzić do zakażeń. Dowiedz się, jak profesjonalnie dbać o suchą skórę stóp.",
    category: "podologia",
  },
];

export const CATEGORIES = [
  { slug: "chirurgia", name: "Chirurgia" },
  { slug: "ortopedia", name: "Ortopedia" },
  { slug: "wazektomia", name: "Wazektomia" },
  { slug: "podologia", name: "Podologia" },
  { slug: "podochirurgia", name: "Podochirurgia" },
  { slug: "laseroterapia", name: "Laseroterapia" },
  { slug: "medycyna-estetyczna", name: "Medycyna Estetyczna" },
  { slug: "leczenie-ran", name: "Leczenie Ran" },
];
