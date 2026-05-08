export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  source: 'ZnanyLekarz' | 'Google';
  date: string;
}

export const reviewsData: Review[] = [
  { id: 1, author: "Marek K.", rating: 5, source: "ZnanyLekarz", date: "2 tyg. temu", comment: "Pełen profesjonalizm. Pan doktor Biłas to fachowiec z ogromną wiedzą. Zabieg wazektomii przebiegł bezboleśnie i w świetnej atmosferze." },
  { id: 2, author: "Anna Nowak", rating: 5, source: "Google", date: "miesiąc temu", comment: "Bardzo nowoczesna klinika. Podejście do pacjenta na najwyższym poziomie. Polecam szczególnie zabiegi medycyny estetycznej." },
  { id: 3, author: "Piotr W.", rating: 5, source: "ZnanyLekarz", date: "3 dni temu", comment: "Podochirurgia uratowała moje stopy. Bardzo dziękuję za pomoc i cierpliwość w tłumaczeniu procesu leczenia." },
  // Tutaj będziesz dopisywać kolejne opinie...
];