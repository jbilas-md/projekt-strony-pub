export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  authorId: string;
  content: string;
};

export type Author = {
  name: string;
  role: string;
  id: string;
  image: string;
};

export const AuthorsList: Author[] = [
  {
    id: "jb",
    name: "Jarosław Biłas",
    role: "Chirurg ogólny, Lekarz Medycyny Estetycznej",
    image: "",
  },
  {
    id: "ab",
    name: "Anna Biłas",
    role: "Podolog, Dyplomowana Pielęgniarka i Położna",
    image: "",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Nowoczesne metody leczenia wrastających paznokci – Pożegnaj ból raz na zawsze",
    slug: "leczenie-wrastajacych-paznokci-szczecin",
    excerpt: "Wrastający paznokieć to nie tylko problem estetyczny, ale przede wszystkim silny ból. Poznaj nowoczesne metody podochirurgiczne, które oferują trwałe rozwiązanie bez konieczności całkowitego zerwania paznokcia.",
    category: "podochirurgia",
    date: "2024-05-10",
    authorId: "jb",
    image: "/images/blog/wrastajacy-paznokiec.jpg",
    content: `Wrastający paznokieć może być bardzo bolesny i wymagać profesjonalnej interwencji. W Novamedic w Szczecinie stosujemy nowoczesne metody podochirurgiczne, które likwidują przyczynę problemu, a nie tylko jego objawy.`,
  },
  {
    id: "2",
    title: "Wazektomia – Fakty, Mity i Przebieg Zabiegu. Przewodnik dla Mężczyzn",
    slug: "wazektomia-fakty-mity-przebieg-szczecin",
    excerpt: "Rozważasz wazektomię? Dowiedz się, dlaczego jest to obecnie najskuteczniejsza metoda męskiej antykoncepcji, jak wygląda zabieg w Novamedic Szczecin i obal najpopularniejsze mity na jej temat.",
    category: "wazektomia",
    date: "2024-05-15",
    authorId: "jb",
    image: "/images/blog/wazektomia-glowna.jpg",
    content: `Wazektomia to zabieg mikrochirurgiczny, który stał się bezpieczną metodą trwałej antykoncepcji. Warto obalić mity i poznać przebieg samego zabiegu oraz rekonwalescencję.`,
  },
  {
    id: "3",
    title: "Pękające pięty – jak przywrócić stopom gładkość? Skuteczne sposoby podologiczne",
    slug: "pekajace-piety-pielegnacja-podologia-szczecin",
    excerpt: "Głębokie rozpadliny na piętach to nie tylko problem estetyczny, ale i bolesna dolegliwość, która może prowadzić do zakażeń. Dowiedz się, jak profesjonalnie dbać o suchą skórę stóp.",
    category: "podologia",
    date: "2024-05-20",
    authorId: "ab",
    image: "/images/blog/pekajace-piety.jpg",
    content: `Jeśli Twoje pięty pękają i bolą, potrzebujesz zarówno profesjonalnego opracowania, jak i właściwej domowej pielęgnacji. Poznaj sprawdzone metody podologiczne z Novamedic.`,
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
