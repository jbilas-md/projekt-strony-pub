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
    h1: "Chirurgia Ogólna i Ambulatoryjna Szczecin",
    intro: "Kompleksowa diagnostyka oraz zabiegi operacyjne w znieczuleniu miejscowym, realizowane zgodnie z rygorystycznymi protokołami bezpieczeństwa chirurgicznego.",
    image: "/images/services/chirurgia-hero.jpg",
    details: "W Novamedic procedury zabiegowe realizowane są przez doświadczonych operatorów w warunkach pełnej sterylności. Każda wycięta zmiana tkankowa standardowo podlega weryfikacji histopatologicznej. Specjalizujemy się w technikach małoinwazyjnych, minimalizujących uraz operacyjny i skracających okres rekonwalescencji.",
    clinicalStandards: [
      "Obowiązkowa weryfikacja histopatologiczna (H-P) pobranych bioptatów",
      "Stosowanie śródskórnych szwów plastycznych ograniczających widoczność blizn",
      "Kwalifikacja pacjenta oparta na aktualnych wytycznych Towarzystwa Chirurgów Polskich",
      "Ciągłość opieki: od konsultacji, przez zabieg, aż po kontrole pooperacyjne"
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
    h1: "Wazektomia Szczecin – Nowoczesna Antykoncepcja Męska",
    intro: "Bezpieczna i wysoce skuteczna metoda stałej antykoncepcji dla mężczyzn, wykonywana procedurą bez skalpela (No-Scalpel Vasectomy).",
    image: "/images/services/wazektomia-hero.jpg",
    details: "Zabieg polega na rozwarstwieniu skóry (bez użycia klasycznego skalpela) i zaopatrzeniu nasieniowodów metodą kanadyjską (koagulacja chirurgiczna i podwiązanie). Procedura charakteryzuje się minimalnym ryzykiem powikłań, brakiem konieczności zakładania tradycyjnych szwów i bardzo szybkim powrotem do pełnej aktywności życiowej.",
    clinicalStandards: [
      "Stosowanie metody bez skalpela (NSV) gwarantującej minimalny uraz tkanek",
      "Procedura realizowana w znieczuleniu miejscowym nasiękowym",
      "Weryfikacja skuteczności zabiegu poprzez obowiązkowe badanie nasienia (spermiogram)",
      "Zgodność z wytycznymi Polskiego Towarzystwa Wazektomii"
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
    h1: "Gabinet Podologiczny Szczecin",
    intro: "Specjalistyczna diagnostyka, terapia schorzeń w obrębie skóry stóp i aparatu paznokciowego prowadzona w ścisłej współpracy medycznej.",
    image: "/images/services/podologia-hero.jpg",
    details: "Zapewniamy pełny profil zabiegów podologicznych, od podstawowej pielęgnacji profilaktycznej po skomplikowane terapie przewlekłych zmian skórnych, hyperkeratofii oraz deformacji płytki. Łączymy procedury kosmetyczne z zaawansowaną wiedzą z zakresu dermatologii i chirurgii stóp.",
    clinicalStandards: [
      "Sterylizacja narzędzi w autoklawie klasy B według norm medycznych",
      "Praca na certyfikowanych preparatach podofarmaceutycznych i odciążeniach",
      "Prowadzenie cyfrowej dokumentacji fotograficznej postępów leczenia skóry stóp"
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
    h1: "Zaawansowana Podochirurgia Szczecin",
    intro: "Chirurgiczne, trwałe eliminowanie bolesnych wad aparatu paznokciowego oraz zmian patologicznych w obrębie palców stóp.",
    image: "/images/services/podochirurgia-hero.jpg",
    details: "W przypadkach, gdzie zachowawcza terapia podologiczna jest niewystarczająca, wdrażamy techniki chirurgiczne. Specjalizujemy się w nowoczesnych operacjach plastycznych wałów okołopaznokciowych, które eliminują problem wrastania bez konieczności traumatycznego zrywania całej płytki paznokciowej.",
    clinicalStandards: [
      "Zabiegi wykonywane przez chirurga we współpracy z licencjonowanym podologiem",
      "Zastosowanie znieczulenia przewodowego (blokada Obersta) gwarantującego bezbolesność",
      "Priorytet zachowania naturalnego kształtu i estetyki aparatu paznokciowego"
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
    h1: "Medycyna Estetyczna i Regeneracyjna Szczecin",
    intro: "Bezpieczne zabiegi anti-aging, rewitalizacja tkanek oraz korekcje estetyczne wykonywane przez lekarza na bazie certyfikowanych preparatów medycznych.",
    image: "/images/services/medycyna-estetyczna-hero.jpg",
    details: "Kliniczne podejście do medycyny estetycznej w Novamedic stawia na pierwszym miejscu bezpieczeństwo pacjenta oraz osiągnięcie naturalnych, harmonijnych rezultatów. Pracujemy wyłącznie na produktach zarejestrowanych jako wyroby medyczne klasy III (toksyna botulinowa, zaawansowane stymulatory tkankowe).",
    clinicalStandards: [
      "Wszystkie zabiegi iniekcyjne wykonywane są wyłącznie przez wykwalifikowanego lekarza",
      "Stosowanie preparatów z oficjalnej, bezpiecznej dystrybucji medycznej",
      "Przestrzeganie procedur aseptyki i pełnej sterylności podczas iniekcji"
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
    h1: "Laseroterapia Medyczna Szczecin",
    intro: "Wykorzystanie energii wiązki laserowej o precyzyjnie dobranych parametrach do ablacji patologii naskórkowych, zamykania naczyń i resurfacingu.",
    image: "/images/services/laseroterapia-hero.jpg",
    details: "Nowoczesne systemy laserowe w rękach personelu medycznego pozwalają na prowadzenie bezkrwawych zabiegów o bardzo wysokiej czystości mikrobiologicznej. Energia lasera działa wybiórczo na docelowe struktury (melaninę, hemoglobinę lub wodę w tkankach), chroniąc zdrową skórę.",
    clinicalStandards: [
      "Indywidualny dobór gęstości energii oraz czasu impulsu do fototypu skóry pacjenta",
      "Zabiegi poparte procedurą bezwzględnej ochrony wzroku (specjalistyczne okulary ochronne)",
      "Minimalizacja termicznego uszkodzenia sąsiednich tkanek"
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
    h1: "Poradnia Leczenia Ran Trudnogojących Szczecin",
    intro: "Specjalistyczna opieka lekarsko-pielęgniarska nad ranami przewlekłymi, owrzodzeniami troficznymi oraz zespołem stopy cukrzycowej.",
    image: "/images/services/leczenie-ran-hero.jpg",
    details: "Leczenie ran w Novamedic oparte jest na nowoczesnym standardzie TIME (Tissue, Infection, Moisture, Edge). Diagnozujemy naczyniowe i metaboliczne przyczyny braku gojenia, wdrażamy chirurgiczne oczyszczanie łożyska rany z tkanek martwiczych i eliminujemy infekcje drobnoustrojowe.",
    clinicalStandards: [
      "Praca w oparciu o medyczny schemat postępowania z raną przewlekłą TIME",
      "Stosowanie zaawansowanych opatrunków aktywnych (srebro, miedź, hydrożele, alginiany)",
      "Możliwość zastosowania specjalistycznych systemów podciśnieniowych (NPWT)"
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