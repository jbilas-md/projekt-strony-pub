// lib/services.ts

export interface Service {
  title: string;
  h1: string;
  intro: string;
  image: string;
  details: string;
  benefits: string[];
}

export const servicesData: Record<string, Service> = {
  'wazektomia': {
    title: "Wazektomia",
    h1: "Wazektomia Szczecin",
    intro: "Nowoczesna i bezpieczna metoda trwałej antykoncepcji męskiej, wykonywana przez doświadczony zespół chirurgiczny w centrum Szczecina.",
    image: "/images/wazektomia-hero.jpg",
    details: "Zabieg polega na zaopatrzeniu obu nasieniowodów metodą bez skalpela (No-Scalpel Vasectomy) przez jeden niewielki otwór w skórze, co skraca rekonwalescencję do minimum. Stosujemy mikro-szwy wchłanialne, które nie wymagają usuwania.",
    benefits: ["Skuteczność procedury powyżej 99,9%", "Zabieg bez użycia skalpela w 30 minut", "Komfortowe znieczulenie miejscowe", "Pełna dyskrecja i opieka pozabiegowa"]
  },
  'podologia': {
    title: "Podologia",
    h1: "Specjalistyczna Pielęgnacja Stóp",
    intro: "Problemy stóp wpływają na komfort całego życia. W naszym gabinecie łączymy wiedzę medyczną z profesjonalną, bezbolesną terapią.",
    image: "/images/podologia-hero.jpg",
    details: "Zapewniamy pełną diagnostykę podologiczną. Specjalizujemy się w usuwaniu uciążliwych i bolesnych dolegliwości skórnych oraz profilaktyce stopy cukrzycowej przy użyciu wyłącznie sterylnych narzędzi.",
    benefits: ["Skuteczne usuwanie bolesnych modzeli i nagniotków", "Terapia pękających pięt i głębokich rozpadlin", "Bezpieczne oczyszczanie zmian grzybiczych", "Dobór indywidualnych odciążeń i ortez"]
  },
  'podochirurgia': {
    title: "Podochirurgia",
    h1: "Zaawansowana Podochirurgia",
    intro: "Chirurgiczne i trwałe rozwiązywanie bolesnych problemów w obrębie aparatu paznokciowego i struktur stopy.",
    image: "/images/podochirurgia-hero.jpg",
    details: "W przypadkach, gdy klasyczna podologia nie przynosi efektów, dr Jarosław Biłas wdraża procedury podochirurgiczne. Wykonujemy plastykę wałów okołopaznokciowych oraz klinowe wycięcie macierzy, co likwiduje problem wrastania raz na zawsze.",
    benefits: ["Trwałe wyleczenie wrastających paznokci", "Zabiegi wykonywane przez chirurga i podologa", "Plastyka wałów zamiast zrywania płytki", "Szybki proces gojenia rany"]
  },
  'ortopedia': {
    title: "Ortopedia",
    h1: "Konsultacje Ortopedyczne i Iniekcje",
    intro: "Precyzyjna diagnostyka narządu ruchu oraz nowoczesne metody leczenia zmian zwyrodnieniowych i przeciążeniowych.",
    image: "/images/ortopedia-hero.jpg",
    details: "Oferujemy specjalistyczne konsultacje ortopedyczne nakierowane na likwidację bólów stawowych i mięśniowych. Wykonujemy precyzyjne iniekcje kwasu hialuronowego oraz blokady okołostawowe pod kontrolą usg w celu natychmiastowej ulgi.",
    benefits: ["Szybka diagnostyka bólów kręgosłupa i stawów", "Małoinwazyjne dostawowe terapie regeneracyjne", "Iniekcje kwasu hialuronowego wysokiej gęstości", "Kwalifikacje do zabiegów operacyjnych"]
  },
  'medycyna-estetyczna': {
    title: "Medycyna Estetyczna",
    h1: "Medycyna Estetyczna i Regeneracyjna",
    intro: "Naturalne odmłodzenie, poprawa kondycji skóry oraz profesjonalne zabiegi przeciwstarzeniowe oparte na medycznych standardach.",
    image: "/images/medycyna-estetyczna-hero.jpg",
    details: "Wszystkie procedury z zakresu medycyny estetycznej realizowane są z naciskiem na zachowanie naturalnych rysów twarzy i zdrowia tkanek. Pracujemy wyłącznie na certyfikowanych preparatach premium (toksyna botulinowa, stymulatory tkankowe).",
    benefits: ["Zabiegi wygładzania zmarszczek mimicznych", "Głęboka biorewitalizacja stymulatorami", "Indywidualne, bezpieczne plany terapeutyczne", "Redukcja cieni i zmęczenia pod oczami"]
  },
  'laseroterapia': {
    title: "Laseroterapia",
    h1: "Laseroterapia Medyczna",
    intro: "Wykorzystanie zaawansowanej technologii laserowej do bezkrwawego usuwania zmian, resurfacingu oraz fotoodmładzania skóry.",
    image: "/images/laseroterapia-hero.jpg",
    details: "Medyczne systemy laserowe pozwalają na bezkontaktowe zamykanie naczynek, usuwanie przebarwień oraz precyzyjne odparowywanie łagodnych zmian naskórkowych bez uszkadzania otaczających struktur i bez pozostawiania rozległych blizn.",
    benefits: ["Bezkrwawe i bezpieczne procedury laserowe", "Wysoka skuteczność w usuwaniu przebarwień", "Zamykanie popękanych naczynek krwionośnych", "Minimalny czas rekonwalescencji pozabiegowej"]
  },
  'leczenie-ran': {
    title: "Leczenie Ran",
    h1: "Specjalistyczne Leczenie Ran Trudnogojących",
    intro: "Kompleksowa, wielospecjalistyczna opieka nad pacjentami z owrzodzeniami, stopą cukrzycową oraz ranami przewlekłymi.",
    image: "/images/leczenie-ran-hero.jpg",
    details: "Prowadzimy profesjonalne terapie ran o różnej etiologii (żylnej, tętniczej, cukrzycowej). Dobieramy nowoczesne opatrunki aktywne, przeprowadzamy chirurgiczne oczyszczanie łożyska rany (debridement) oraz kontrolujemy procesy infekcyjne.",
    benefits: ["Skuteczne leczenie owrzodzeń podudzi i stopy cukrzycowej", "Chirurgiczne opracowanie ran w warunkach jałowych", "Indywidualny dobór specjalistycznych opatrunków", "Znaczne zmniejszenie dolegliwości bólowych"]
  }
};