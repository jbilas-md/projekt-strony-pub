export type BlogPost = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    category: "chirurgia" | "ortopedia" | "wazektomia" | "podologia" | "podochirurgia" | "laseroterapia" | "medycyna-estetyczna" | "leczenie-ran";
    content: string;
    date: string;
    image: string;
};

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "1",
        title: "Nowoczesne metody leczenia wrastających paznokci – Pożegnaj ból raz na zawsze",
        slug: "leczenie-wrastajacych-paznokci-szczecin",
        excerpt: "Wrastający paznokieć to nie tylko problem estetyczny, ale przede wszystkim silny ból. Poznaj nowoczesne metody podochirurgiczne, które oferują trwałe rozwiązanie bez konieczności całkowitego zerwania paznokcia.",
        category: "podochirurgia",
        date: "2024-05-10",
        image: "/images/blog/wrastajacy-paznokiec.jpg",
        content: `
    <p>Wrastający paznokieć (onychokryptoza) to jedna z najczęstszych dolegliwości, z jakimi pacjenci zgłaszają się do gabinetu Novamedic w Szczecinie. Problem ten dotyka osób w każdym wieku – od sportowców, przez osoby pracujące w obuwiu ochronnym, aż po seniorów.</p>

    <h2>Dlaczego tradycyjne metody często zawodzą?</h2>
    <p>Wielu pacjentów obawia się wizyty u chirurga, kojarząc ją z bolesnym, całkowitym zerwaniem płytki paznokciowej. Niestety, tradycyjne zerwanie paznokcia (tzw. awulsja) wiąże się z wysokim ryzykiem nawrotu – problem powraca u niemal 70% pacjentów w momencie odrastania nowej płytki.</p>

    <h2>Nowoczesna podochirurgia: Plastyka Wałów Okołopaznokciowych</h2>
    <p>W Novamedic stawiamy na metody trwałe i małoinwazyjne. Jednym z najskuteczniejszych rozwiązań jest <strong>plastyka wałów okołopaznokciowych</strong>. Zabieg ten nie polega na usunięciu paznokcia, ale na chirurgicznym skorygowaniu tkanek miękkich (skóry), które go otaczają.</p>
    
    <ul>
      <li><strong>Trwałość:</strong> Likwiduje przyczynę wrastania, co drastycznie zmniejsza ryzyko nawrotu.</li>
      <li><strong>Estetyka:</strong> Paznokieć zachowuje swój naturalny kształt i szerokość.</li>
      <li><strong>Szybka rekonwalescencja:</strong> Pacjent zazwyczaj wraca do codziennych aktywności już po kilku dniach.</li>
    </ul>

    <h2>Metoda Fenolizacji – alternatywa chemiczna</h2>
    <p>Kolejnym nowoczesnym standardem jest <strong>fenolizacja macierzy</strong>. Polega ona na usunięciu jedynie wąskiego fragmentu wrastającego boku paznokcia i chemicznym zniszczeniu fragmentu macierzy odpowiedzialnego za jego nieprawidłowy wzrost. Zabieg jest niemal bezbolesny (wykonywany w znieczuleniu miejscowym) i nie wymaga zakładania szwów.</p>

    <h2>Kiedy zgłosić się do specjalisty?</h2>
    <p>Nie czekaj, aż rozwinie się silny stan zapalny lub ropna wydzielina. Im wcześniej wdrożymy leczenie, tym mniej inwazyjny będzie zabieg. Jeśli zauważysz zaczerwienienie, obrzęk lub ból przy dotyku boku palucha – zapraszamy na konsultację podochirurgiczną w naszym gabinecie w Szczecinie.</p>

    <blockquote>
      "Współczesna chirurgia stopy pozwala na rozwiązanie problemu wrastania w sposób komfortowy dla pacjenta, z zachowaniem pełnej estetyki stopy." – dr Jarosław Biłas
    </blockquote>
  `
    },
    {
        id: "2",
        title: "Wazektomia – Fakty, Mity i Przebieg Zabiegu. Przewodnik dla Mężczyzn",
        slug: "wazektomia-fakty-mity-przebieg-szczecin",
        excerpt: "Rozważasz wazektomię? Dowiedz się, dlaczego jest to obecnie najskuteczniejsza metoda męskiej antykoncepcji, jak wygląda zabieg w Novamedic Szczecin i obal najpopularniejsze mity na jej temat.",
        category: "wazektomia",
        date: "2024-05-15",
        image: "/images/blog/wazektomia-glowna.jpg", // Przygotuj ten plik (1200x630px)
        content: `
    <p>Wazektomia to zabieg mikrochirurgiczny, który staje się coraz popularniejszą formą świadomej regulacji płodności wśród mężczyzn w Polsce. Mimo rosnącej wiedzy, wokół tematu narosło wiele mitów. W tym artykule, eksperci gabinetu Novamedic w Szczecinie obalają nieprawdziwe teorie i przedstawiają fakty na temat tej metody.</p>

    <h2>Czym dokładnie jest wazektomia?</h2>
    <p>Wazektomia polega na chirurgicznym przerwaniu i podwiązaniu nasieniowodów. Jest to zabieg małoinwazyjny, wykonywany w znieczuleniu miejscowym. Kluczowym faktem jest to, że <strong>wazektomia nie wpływa na potencję, libido ani produkcję hormonów płciowych</strong> (testosteronu). Zmienia jedynie skład ejakulatu, usuwając z niego plemniki.</p>
    
    <ul>
      <li>Skuteczność: Powyżej 99,9% (najwyższa wśród metod antykoncepcji).</li>
      <li>Czas trwania zabiegu: Ok. 20-30 minut.</li>
      <li>Rekonwalescencja: Powrót do pracy biurowej zazwyczaj po 1-2 dniach.</li>
    </ul>

    <h2>Fakt czy Mit: Czy wazektomia jest odwracalna?</h2>
    <p>To jedno z najczęstszych pytań pacjentów Novamedic. **Faktem jest, że istnieje zabieg odwrócenia wazektomii (wazowazostomia)**, który polega na ponownym połączeniu nasieniowodów. Należy jednak pamiętać, że jest to procedura znacznie bardziej skomplikowana, droższa i jej skuteczność w przywróceniu płodności maleje wraz z upływem czasu od pierwotnego zabiegu. Dlatego wazektomię należy traktować jako decyzję o trwałej antykoncepcji.</p>

    <h2>Przebieg zabiegu w Novamedic Szczecin</h2>
    <p>W naszym gabinecie stosujemy nowoczesne, małoinwazyjne techniki. Zabieg wykonywany jest przez doświadczonego chirurga w sterylnych warunkach gabinetu zabiegowego. Po podaniu znieczulenia miejscowego, lekarz wykonuje minimalne nacięcie (lub rozwarstwienie skóry), przez które uzyskuje dostęp do nasieniowodów. Po ich przerwaniu i zabezpieczeniu, rana jest zamykana (często szwami wchłanialnymi, które same odpadają). Cała procedura jest bezbolesna, pacjent może odczuwać jedynie delikatne pociąganie.</p>

    <blockquote>
      "Wazektomia to decyzja partnerska. Dla wielu par w Szczecinie jest to sposób na uwolnienie się od stresu związanego z nieplanowaną ciążą i poprawę jakości życia intymnego."
    </blockquote>
    
    <h2>Podsumowanie</h2>
    <p>Jeśli szukasz trwałej, bezpiecznej i niezwykle skutecznej metody antykoncepcji, wazektomia jest rozwiązaniem godnym rozważenia. Zapraszamy na konsultację w Novamedic, gdzie odpowiemy na wszystkie Twoje pytania i rozwiejemy wątpliwości.</p>
  `
    }// Tu będziesz dodawać kolejne artykuły...
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