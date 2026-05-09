// lib/formatDate.ts

export function getRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  
  // Zerujemy godziny, żeby liczyć tylko pełne dni
  date.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);

  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "dzisiaj";
  if (diffDays === 1) return "wczoraj";
  
  // 2-6 dni
  if (diffDays < 7) return `przed ${diffDays} dniami`;
  
  // Tygodnie
  if (diffDays < 14) return "przed tygodniem";
  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks <= 3) return `przed ${diffWeeks} tygodniami`;

  // Miesiące
  const diffMonths = (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth());
  
  if (diffMonths === 1 || (diffDays >= 28 && diffDays < 60)) return "przed miesiącem";
  if (diffMonths < 12) return `przed ${diffMonths} miesiącami`;

  // Lata
  if (diffMonths >= 12 && diffMonths < 24) return "przed rokiem";
  if (diffMonths >= 24) return "ponad rok temu";

  return "jakiś czas temu";
}