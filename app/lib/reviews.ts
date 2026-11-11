// reviews.ts

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  source: string;
  date: string; // Data w formacie "YYYY-MM-DD"
}