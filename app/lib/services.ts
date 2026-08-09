// lib/services.ts

export interface Treatment {
  name: string;
  description: string;
  seoKeywords: string[];
}

export interface Service {
  title: string;
  h1: string;
  intro: string;
  image: string;
  details: string;
  clinicalStandards: string[];
  treatments?: Treatment[];
}

export const servicesData: Record<string, Service> = {
  'chirurgia': {
    title: "Chirurgia Ogólna",
    h1: "Chirurgia Ogólna",
    intro: "Nowoczesna chirurgia ambulatoryjna oparta na doświadczeniu, estetyce i indywidualnym podejściu do pacjenta.",
    image: "/images/chirurgia.jpg",
    details: "Większość procedur przeprowadzana jest w warunkach ambulatoryjnych w znieczuleniu miejscowym, bez konieczności hospitalizacji. Każdy pacjent objęty jest indywidualną opieką – od konsultacji i kwalifikacji do zabiegu, przez leczenie operacyjne, aż po kontrole pooperacyjne. W razie potrzeby wykonujemy badania laboratoryjne i histopatologiczne, zapewniające pełną diagnostykę i bezpieczeństwo onkologiczne.",
    clinicalStandards: [
      "Ponad 15 lat doświadczenia",
      "Nowoczesny sprzęt diagnostyczny i zabiegowy",
      "Zabiegi wykonywane zgodnie z aktualnymi standardami",
      "Małoinwazyjne techniki skracające czas rekonwalescencji",
      "Estetyczne techniki szycia ran",
      "Kompleksowa opieka przed i po zabiegu"
    ],
    treatments: [
      {
        name: "Konsultacje chirurgiczne i kwalifikacje",
        description: "Pełny proces diagnostyczny, analiza badań obrazowych (USG, TK, MR) oraz dobór optymalnej, zindywidualizowanej metody operacyjnej.",
        seoKeywords: ["konsultacja chirurgiczna Szczecin", "dobry chirurg"]
      },
      {
        name: "Usuwanie zmian skórnych i podskórnych",
        description: "Precyzyjne wycinanie chirurgiczne znamion barwnikowych, kaszaków, tłuszczaków oraz włókniaków. Zabiegi obejmują także resekcję zmian o charakterze onkologicznym (nowotworów skóry) z zachowaniem wymaganych margnesów bezpieczeństwa.",
        seoKeywords: ["wycinanie tłuszczaków", "usuwanie kaszaków Szczecin", "badanie histopatologiczne"]
      },
      {
        name: "Laserowe leczenie torbieli pilonidalnej (SiLaC)",
        description: "Nowoczesna, małoinwazyjna procedura polegająca na obliteracji (zamknięciu) światła torbieli włosowej za pomocą energii lasera. Metoda ta minimalizuje ból pooperacyjny i pozwala uniknąć rozległych rano pooperacyjnych.",
        seoKeywords: ["torbiel pilonidalna laser", "operacja torbieli włosowej Szczecin"]
      },
      {
        name: "Chirurgiczne leczenie przepuklin",
        description: "Operacje przepuklin pachwinowych, pępkowych oraz brzusznych. Stosujemy zarówno klasyczne metody napięciowe, jak i nowoczesne plastyki beznapięciowe z wykorzystaniem certyfikowanych materiałów syntetycznych (siatek).",
        seoKeywords: ["operacja przepukliny pachwinowej", "przepuklina pępkowa chirurg"]
      },
      {
        name: "Proktologia ambulatoryjna",
        description: "Diagnostyka i leczenie schorzeń końcowego odcinka przewodu pokarmowego, w tym usuwanie zakrzepicy splotu brzeżnego, nacięcia ropni okołoodbytowych oraz leczenie szczelin odbytu.",
        seoKeywords: ["proktolog Szczecin", "leczenie hemoroidów"]
      }
    ]
  },
  'wazektomia': {
    title: "Wazektomia",
    h1: "Wazektomia Szczecin",
    intro: "Bezpieczna i wysoce skuteczna metoda stałej antykoncepcji dla mężczyzn.",
    image: "/images/services/wazektomia-hero.jpg",
    details: "Zabieg polega na zrobieniu niewielkiego otworu w skórze i zaopatrzeniu nasieniowodów metodą kanadyjską. Procedura charakteryzuje się minimalnym ryzykiem powikłań, wysoką skutecznością i szybkim powrotem do pełnej aktywności życiowej.",
    clinicalStandards: [
      "Stosowanie metody gwarantującej minimalny uraz tkanek",
      "Szybko działające znieczulenie miejscowe",
      "Zgodność z wytycznymi Amerykańskiego Towarzystwa Urologicznego (AUA)",
      "Weryfikacja skuteczności zabiegu poprzez obowiązkowe badanie nasienia (spermiogram)"    
    ],
    treatments: [
      {
        name: "Wazektomia bez skalpela (WBS)",
        description: "Główna procedura mikrochirurgiczna trwająca około 30 minut, polegająca na przerwaniu ciągłości nasieniowodów w celu zablokowania transportu plemników.",
        seoKeywords: ["wazektomia szczecin", "antykoncepcja męska", "wazektomia cena"]
      },
      {
        name: "Konsultacja kwalifikacyjna i opieka pooperacyjna",
        description: "Wywiad lekarski, omówienie aspektów prawno-medycznych, przygotowanie pacjenta oraz kontrola gojenia rany po zabiegu.",
        seoKeywords: ["kwalifikacja do wazektomii", "poradnia urologiczna"]
      }
    ]
  },
  'podologia': {
    title: "Podologia",
    h1: "Podologia Szczecin",
    intro: "Specjalistyczna diagnostyka i terapia schorzeń w obrębie skóry stóp i aparatu paznokciowego oraz profesjonalna pielęgnacja medyczna stóp.",
    image: "/images/services/podologia-hero.jpg",
    details: "Zapewniamy pełny profil zabiegów podologicznych, od podstawowej pielęgnacji profilaktycznej, przez terapie brodawek wirusowych, hyperkeratozy, po wrastające paznokcie i deformacje płytki paznokciowej. Łączymy procedury kosmetyczne z zaawansowaną wiedzą z zakresu podologii i chirurgii stóp.",
    clinicalStandards: [
      "Multidyscyplinarny zespół z wykształceniem medycznym",
      "Wieloletnie doświadczenie w terapii schorzeń stóp i paznokci",
      "Zabiegi bez bólu - możliwość zastosowania znieczulenia przy bolesnych procedurach",
      "Kompleksowa opieka i szybka pomoc chirurgiczna w jednym gabinecie, w razie potrzeby",
      "Bezpieczeństwo i najwysze standardy profesjonalnej opieki medycznej"
    ],
    treatments: [
      {
        name: "Podstawowy i rozszerzony zabieg podologiczny",
        description: "Opracowanie profilaktyczne twardej skóry stóp, prawidłowe skrócenie paznokci, usunięcie fizjologicznych zrogowaceń oraz aplikacja odpowiednich preparatów.",
        seoKeywords: ["podolog szczecin", "pedicure medyczny szczecin"]
      },
      {
        name: "Usuwanie modzeli, nagniotków i odcisków",
        description: "Bezbolesne, mechaniczne usunięcie głębokich struktur rogowych (rdzeni odcisków) za pomocą specjalistycznych narzędzi rotacyjnych i dłutek, połączone z aplikacją odciążeń.",
        seoKeywords: ["usuwanie odcisków", "modzele na stopach leczenie"]
      },
      {
        name: "Terapia pękających pięt i rozpadlin",
        description: "Oczyszczenie krawędzi pęknięć naskórka, zastosowanie opatrunków okluzyjnych oraz indywidualny dobór domowej terapii regenerującej strukturę lipidową skóry.",
        seoKeywords: ["pękające pięty leczenie", "suche pięty podolog"]
      }
    ]
  },
  'podochirurgia': {
    title: "Podochirurgia",
    h1: "Podochirurgia Szczecin",
    intro: "W Novamedic trwale i bezboleśnie leczymy takie problemy podologiczne jak: wrastające paznokcie, wrośla kostne (egzostoza podpaznokciowa), retronychia, guzy macierzy paznokcia (onychomatricoma) i inne.",
    image: "/images/podochirurgia.jpg",
    details: "Jeśli leczenie zachowawcze nie przynosi efektów, sięgamy po skuteczne rozwiązania chirurgiczne. Specjalizujemy się w nowoczesnych operacjach korygujących wzrost płytki paznokciowej, jak plastyka wałów okołopaznokciowych czy plastyka opuszki palca. Zabiegi przeprowadzamy bezboleśnie w znieczuleniu miejscowym, a w określonych przypadkach – również w znieczuleniu ogólnym.",
    clinicalStandards: [
      "Zabiegi wykonywane przez wykwalifikowanego chirurga",
      "Współpraca z wieloma gabinetami podologicznymi w Szczecinie i regionie - zapewniamy kompleksową opiekę",
      "Naszym priorytetem jest zachowanie naturalnego kształtu i estetyki paznokcia",
      "Operujemy zarówno dorosłych, jak i dzieci"
    ],
    treatments: [
      {
        name: "Plastyka wałów okołopaznokciowych (usuwanie wrastających paznokci)",
        description: "Chirurgiczne wycięcie przerostu tkanek miękkich wału bocznego przy jednoczesnym oszczędzeniu zdrowej płytki paznokcia. Drastycznie minimalizuje ryzyko nawrotu.",
        seoKeywords: ["plastyka wałów okołopaznokciowych szczecin", "wrastający paznokieć chirurg"]
      },
      {
        name: "Klinowa resekcja macierzy paznokcia",
        description: "Małoinwazyjne wycięcie jedynie chorobowo zmienionego brzegu paznokcia wraz z jego strefą wzrostową (macierzą).",
        seoKeywords: ["wycięcie macierzy paznokcia", "resekcja klina paznokcia"]
      },
      {
        name: "Usuwanie egzostozy podpaznokciowej i retronychii",
        description: "Chirurgiczne usunięcie zmian kostnych rozwijających się pod płytką paznokciową oraz leczenie rzadkich zaburzeń polegających na cofaniu się i nawarstwianiu nowej płytki.",
        seoKeywords: ["egzostoza podpaznokciowa", "retronychia leczenie"]
      }
    ]
  },
  'ortopedia': {
    title: "Ortopedia",
    h1: "Konsultacje Ortopedyczne i Iniekcje Dostawowe",
    intro: "Diagnostyka narządu ruchu oraz nowoczesne, celowane terapie regeneracyjne i przeciwbólowe układu kostno-stawowego.",
    image: "/images/services/ortopedia-hero.jpg",
    details: "Skupiamy się na małoinwazyjnym leczeniu chorób zwyrodnieniowych, przeciążeniowych oraz zespołów bólowych kręgosłupa i stawów obwodowych. Wykorzystujemy precyzyjne iniekcje pod kontrolą ultrasonograficzną (USG), co gwarantuje podanie leku bezpośrednio w ognisko zapalne.",
    clinicalStandards: [
      "Wprowadzanie iniekcji strukturalnych pod kontrolą obrazu USG",
      "Stosowanie wyłącznie certyfikowanych wyrobów medycznych o udowodnionej gęstości i lepkości",
      "Kompleksowa ocena biomechaniczna pacjenta przed wdrożeniem farmakoterapii"
    ],
    treatments: [
      {
        name: "Specjalistyczna konsultacja ortopedyczna",
        description: "Badanie kliniczne układu ruchu, interpretacja wyników RTG, USG, Rezonansu Magnetycznego oraz programowanie leczenia.",
        seoKeywords: ["ortopeda Szczecin prywatnie", "konsultacja ortopedyczna"]
      },
      {
        name: "Wiskoza suplementacja (iniekcje kwasu hialuronowego)",
        description: "Dostawowe podanie preparatu kwasu hialuronowego w celu poprawy amortyzacji, zwiększenia lepkości płynu maziowego i redukcji tarcia w stawie.",
        seoKeywords: ["kwas hialuronowy w kolano", "iniekcje kwasu hialuronowego szczecin"]
      },
      {
        name: "Blokady okołostawowe i przeciwbólowe",
        description: "Precyzyjne, miejscowe podanie leków o działaniu przeciwzapalnym i znieczulającym w celu wygaszenia ostrego zespołu bólowego.",
        seoKeywords: ["blokada dostawowa", "leczenie bólu kolana stawów"]
      }
    ]
  },
  'medycyna-estetyczna': {
    title: "Medycyna Estetyczna",
    h1: "Medycyna Estetyczna i Regeneracyjna Szczecin ",
    intro: "Profesjonalne zabiegi estetyczne i anti-aging. Odkryj sekret promiennej i jędrnej skóry z pomocą nowoczesnych terapii iniekcyjnych i laserowych.",
    image: "/images/estetyczna.jpg",
    details: "Większość procedur medycyny estetycznej to zabiegi mało inwazyjne, wykonywane w warunkach ambulatoryjnych. Aby zapewnić pełen komfort, miejsca poddawane iniekcji są znieczulane specjalistycznym kremem o wysokim stężeniu substancji aktywnych. Każda terapia poprzedzona jest konsultacją, podczas której wykluczamy przeciwwskazania, oceniamy stan skóry i dobieramy idealną dawkę preparatów. Należy pamiętać, że po zabiegach iniekcyjnych (takich jak mezoterapia, stymulatory tkankowe czy kwas hialuronowy) na skórze mogą pojawić się chwilowe, drobne obrzęki, zaczerwienienia lub małe siniaki – jest to w pełni naturalna reakcja, która ustępuje samoistnie w ciągu kilku dni. W celu osiągnięcia optymalnych rezultatów i uniknięcia powikłań, po zabiegach należy ściśle przestrzegać zaleceń lekarza, w tym unikać sauny, solarium, intensywnego wysiłku fizycznego oraz masowania miejsc poddanych terapii przez wskazany okres.",
    clinicalStandards: [
      "Pełen profil nowoczesnych usług: od redukcji zmarszczek i wolumetrii kwasem hialuronowym, po zaawansowany lifting i terapię anti-aging",
      "Naturalna regeneracja komórkowa: bezpieczne zabiegi z użyciem preparatów autologicznych (osocze bogatopłytkowe, fibryna bogatopłytkowa)",
      "Skuteczne wygładzanie zmarszczek mimicznych za pomocą precyzyjnie dawkowanych neuromodulatorów",
      "Głęboka odbudowa gęstości skóry: nowoczesne stymulatory kolagenu oraz mezoterapia igłowa zapewniające intensywne nawilżenie i ujędrnienie",
      "Bezpieczeństwo medyczne: procedury wykonywane wyłącznie przez doświadczony personel, w sterylnych warunkach i na bazie certyfikowanych preparatów",
      "Stawiamy na subtelne, harmonijne i naturalne efekty, bez przerysowanego wyglądu"
    ],
    treatments: [
      {
        name: "Zabiegi z użyciem toksyny botulinowej (Botoks)",
        description: "Skuteczna redukcja zmarszczek mimicznych (lwia zmarszczka, kurze łapki, zmarszczki poprzeczne czoła) oraz korekcja uśmiechu dziąsłowego (gummy smile).",
        seoKeywords: ["botoks szczecin", "toksyna botulinowa zmarszczki"]
      },
      {
        name: "Chirurgiczna korekcja powiek (Blefaroplastyka)",
        description: "Zabieg operacyjny polegający na usunięciu nadmiaru zwiotczałej skóry oraz przepuklin tłuszczowych powiek górnych, przywracający młode spojrzenie i poprawiający pole widzenia.",
        seoKeywords: ["blefaroplastyka szczecin", "korekcja powiek górnych"]
      },
      {
        name: "Terapie autologiczne – Osocze bogatopłytkowe (PRP)",
        description: "Biorewitalizacja skóry przy użyciu czynników wzrostu pozyskiwanych z własnej krwi pacjenta. Stymuluje produkcję kolagenu i elastyny.",
        seoKeywords: ["osocze bogatopłytkowe szczecin", "wampirzy lifting"]
      },
      {
        name: "Modelowanie ust i lipoliza iniekcyjna",
        description: "Nawilżanie i korekcja kształtu ust przy użyciu kwasu hialuronowego oraz bezoperacyjna redukcja miejscowych depozytów tłuszczowych (np. podbródka).",
        seoKeywords: ["powiększanie ust szczecin", "lipoliza iniekcyjna podbródek"]
      }
    ]
  },
  'laseroterapia': {
    title: "Laseroterapia",
    h1: "Laseroterapia i zabiegi laserowe Szczecin",
    intro: "Nowoczesna chirurgia laserowa, medycyna estetyczna i epilacja. Poznaj moc zaawansowanych technologii CO2, Nd:YAG oraz laserów naczyniowych w rękach specjalistów.",
    image: "/images/laseroterapia.jpg",
    details: "Większość procedur laserowych przeprowadzana jest bezinwazyjnie lub w znieczuleniu miejscowym, bez konieczności rezygnacji z codziennych obowiązków. Każdy zabieg poprzedzony jest kwalifikacją w celu wykluczenia przeciwwskazań (np. aktywnych infekcji czy leków światłouczulających). Należy pamiętać, że skóra przed i po laseroterapii nie może być opalona, a po zabiegu bezwzględnie wymaga ochrony filtrem SPF 50+. Część procedur o charakterze głęboko regenerującym (np. resurfacing laserem CO2) może wymagać kilku dni domowej rekonwalescencji, dlatego ich wykonanie najbezpieczniej zaplanować w okresie jesienno-zimowym.",
    clinicalStandards: [
      "Zaawansowane technologie laserowe dopasowane do różnych potrzeb pacjenta",
      "Bezpieczne i bezszwowe usuwanie zmian skórnych laserem chirurgicznym CO2",
      "Nowoczesne, małoinwazyjne techniki leczenia torbieli pilonidalnej za pomocą lasera naczyniowego",
      "Zamykanie naczynek i leczenie rumienia laserem naczyniowym Nd:YAG",
      "Redukcja blizn i przebarwień za pomocą resurfacingu laserowego CO2",
      "Wysokiej jakości epilacja laserowa przy użyciu lasera diodowego o dużej mocy i chłodzeniu kontaktowym",
      "Wieloletnie doświadczenie w pracy z laserami medycznymi i estetycznymi",
      "Wszystkie zabiegi wykonywane są przez lekarza lub wykwalifikowaną pielęgniarkę"
    ],
    treatments: [
      {
        name: "Laserowe usuwanie włókniaków i zmian naskórkowych",
        description: "Bezdotykowa, bezkrwawa ablacja laserowa łagodnych zmian skórnych (włókniaki, brodawki łojotokowe). Zabieg nie wymaga zakładania szwów, a rana goi się pod estetycznym strupkiem.",
        seoKeywords: ["laserowe usuwanie włókniaków szczecin", "usuwanie brodawek laserem"]
      },
      {
        name: "Laserowa redukcja blizn i przebarwień",
        description: "Frakcyjna przebudowa struktury skóry w celu wygładzenia blizn potrądzikowych, pooperacyjnych oraz likwidacji plam pigmentacyjnych.",
        seoKeywords: ["laserowe usuwanie blizn", "resurfacing laserowy szczecin"]
      }
    ]
  },
  'leczenie-ran': {
    title: "Leczenie Ran",
    h1: "Leczenie trudno gojących się ran Szczecin",
    intro: "Specjalistyczna opieka nad ranami przewlekłymi. Skuteczna terapia owrzodzeń, stopy cukrzycowej i odleżyn przy użyciu nowoczesnych opatrunków aktywnych oraz zaawansowanych metod leczniczych.",
    image: "/images/rany.jpg",
    details: "Leczenie ran przewlekłych (utrzymujących się powyżej 6–8 tygodni) to proces złożony, wymagający czasu, cierpliwości oraz ścisłego partnerstwa między pacjentem a personelem medycznym. Każda terapia w Novamedic rozpoczyna się od szczegółowej diagnostyki – w zależności od potrzeb pobieramy wymazy na posiew bakteryjny, zlecamy badania laboratoryjne czy obrazowe. Samo miejscowe zaopatrzenie rany to za mało; kluczem do sukcesu jest ścisłe przestrzeganie zaleceń domowych. Pacjent (lub jego rodzina) musi dbać o odpowiednie odciążenie chorego miejsca, stosowanie zaleconej kompresjoterapii (w przypadku owrzodzeń żylnych), a także o zbilansowaną dietę bogatą w białko i witaminy, która stanowi budulec dla nowo powstających tkanek. Regularne, planowe wizyty kontrolne w naszej klinice pozwalają na bieżąco monitorować postępy, modyfikować rodzaj opatrunków i bezpiecznie przeprowadzić pacjenta przez cały proces rekonwalescencji, aż do całkowitego zamknięcia rany.",
    clinicalStandards: [
      "Kompleksowa terapia ran o różnej etiologii: owrzodzeń żylnych i tętniczych, zespołu stopy cukrzycowej, odleżyn, oparzeń oraz powikłanych ran pooperacyjnych",
      "Nowoczesne opatrunki specjalistyczne: indywidualny dobór opatrunków aktywnych (srebrowych, alginianowych, hydrożelowych, piankowych) dopasowanych do aktualnej fazy gojenia rany",
      "Profesjonalne oczyszczanie ran: bezbolesne, chirurgiczne lub enzymatyczne usuwanie tkanek martwiczych oraz skuteczna likwidacja biofilmu bakteryjnego",
      "Zaawansowane metody wspomagające: terapia podciśnieniowa (NPWT), preparaty autologiczne, przyspieszające regenerację tkanek",
      "Skuteczna redukcja dolegliwości bólowych towarzyszących ranom przewlekłym",
      "Wsparcie i edukacja: szczegółowy instruktaż dla pacjenta oraz jego opiekunów w zakresie prawidłowej pielęgnacji i higieny rany w warunkach domowych"
    ],
    treatments: [
      {
        name: "Konsultacja lekarska w leczeniu ran przewlekłych",
        description: "Diagnostyka etiologii rany, ocena ukrwienia (wskaźnik kostka-ramię), pobranie posiewów bakteriologicznych oraz opracowanie długofalowego planu leczenia.",
        seoKeywords: ["leczenie ran szczecin", "stopa cukrzycowa lekarz szczecin"]
      },
      {
        name: "Terapia podciśnieniowa (NPWT - Negative Pressure Wound Therapy)",
        description: "Zastosowanie kontrolowanego, ujemnego ciśnienia przy pomocy specjalistycznego systemu ssącego, co drastycznie przyspiesza ziarninowanie tkanek i usuwa wysięk.",
        seoKeywords: ["terapia podciśnieniowa ran", "opatrunek podciśnieniowy npwt"]
      },
      {
        name: "Chirurgiczne oczyszczanie ran i zdejmowanie szwów",
        description: "Mechaniczne usuwanie martwicy przez chirurga (debridement), nacięcia ropni, zaopatrzenie ran pooperacyjnych oraz bezbolesne usuwanie szwów skórnych.",
        seoKeywords: ["oczyszczanie rany chirurg", "usuwanie szwów pooperacyjnych"]
      }
    ]
  }
};