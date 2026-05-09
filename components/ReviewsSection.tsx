// 'use client';
// import { reviewsData, Review } from '@/app/lib/reviews';
// import { useState, useEffect } from 'react';

// export default function ReviewsSection() {
//   const [randomReviews, setRandomReviews] = useState<Review[]>([]);

//   useEffect(() => {
//     // Losujemy 3 opinie przy każdym przeładowaniu
//     const shuffled = [...reviewsData].sort(() => 0.5 - Math.random());
//     setRandomReviews(shuffled.slice(0, 3));
//   }, []);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-black text-nova-dark uppercase tracking-tight">Opinie pacjentów</h2>
//           <p className="text-slate-500 font-medium mt-4">Zweryfikowane głosy z portalu ZnanyLekarz oraz Google</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {randomReviews.map((review) => (
//             <div key={review.id} className="bg-nova-bg p-8 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
//               <div>
//                 <div className="flex text-amber-400 mb-4">
//                   {[...Array(review.rating)].map((_, i) => (
//                     <span key={i}>★</span>
//                   ))}
//                 </div>
//                 <p className="text-nova-dark font-medium italic mb-6 leading-relaxed">"{review.comment}"</p>
//               </div>
//               <div className="flex justify-between items-center border-t border-slate-200 pt-4">
//                 <div>
//                   <p className="font-black text-sm text-nova-dark">{review.author}</p>
//                   <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{review.date}</p>
//                 </div>
//                 <span className="text-[10px] font-black py-1 px-3 bg-white rounded-full border border-slate-200 text-slate-500 uppercase">
//                   {review.source}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

//

'use client';
import { reviewsData, Review } from '@/app/lib/reviews';
import { useState, useEffect } from 'react';
import { getRelativeDate } from '@/app/lib/formatDate';

// // Logika obliczania relatywnej daty
// function getRelativeDate(dateString: string): string {
//   const date = new Date(dateString);
//   const now = new Date();
  
//   // Zerujemy czas, by porównywać tylko pełne dni
//   date.setHours(0, 0, 0, 0);
//   now.setHours(0, 0, 0, 0);

//   const diffTime = now.getTime() - date.getTime();
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   // 1. Dzisiaj / Wczoraj
//   if (diffDays === 0) return "dzisiaj";
//   if (diffDays === 1) return "wczoraj";
  
//   // 2. Przed [i] dniami (2-6)
//   if (diffDays < 7) return `przed ${diffDays} dniami`;
  
//   // 3. Tygodnie
//   if (diffDays >= 7 && diffDays < 14) return "przed tygodniem";
  
//   const diffWeeks = Math.floor(diffDays / 7);
//   if (diffWeeks >= 2 && diffWeeks <= 3) return `przed ${diffWeeks} tygodniami`;

//   // 4. Miesiące
//   // Obliczamy różnicę w miesiącach kalendarzowych
//   const diffMonths = (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth());

//   if (diffMonths === 1 || (diffDays >= 28 && diffMonths < 2)) return "przed miesiącem";
//   if (diffMonths >= 2 && diffMonths <= 11) return `przed ${diffMonths} miesiącami`;

//   // 5. Lata
//   if (diffMonths >= 12 && diffMonths < 24) return "przed rokiem";
//   if (diffMonths >= 24) return "przed ponad rokiem";

//   return "jakiś czas temu";
// }

export default function ReviewsSection() {
  const [randomReviews, setRandomReviews] = useState<Review[]>([]);

  useEffect(() => {
    const shuffled = [...reviewsData].sort(() => 0.5 - Math.random());
    setRandomReviews(shuffled.slice(0, 3));
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-nova-dark uppercase tracking-tight italic">Opinie pacjentów</h2>
          <p className="text-slate-500 font-medium mt-4">Zweryfikowane głosy z portalu ZnanyLekarz oraz Google</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {randomReviews.map((review) => (
            <div key={review.id} className="bg-nova-bg p-8 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <div className="flex text-amber-400 mb-4 text-xs">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-nova-dark font-medium italic mb-6 leading-relaxed">"{review.comment}"</p>
              </div>
              <div className="flex justify-between items-center border-t border-slate-200 pt-4">
                <div>
                  <p className="font-black text-sm text-nova-dark">{review.author}</p>
                  {/* DYNAMICZNA DATA */}
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    {getRelativeDate(review.date)}
                  </p>
                </div>
                <span className="text-[10px] font-black py-1 px-3 bg-white rounded-full border border-slate-200 text-slate-500 uppercase">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}