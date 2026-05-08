'use client';
import { reviewsData, Review } from '@/app/lib/reviews';
import { useState, useEffect } from 'react';

export default function ReviewsSection() {
  const [randomReviews, setRandomReviews] = useState<Review[]>([]);

  useEffect(() => {
    // Losujemy 3 opinie przy każdym przeładowaniu
    const shuffled = [...reviewsData].sort(() => 0.5 - Math.random());
    setRandomReviews(shuffled.slice(0, 3));
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-nova-dark uppercase tracking-tight">Opinie pacjentów</h2>
          <p className="text-slate-500 font-medium mt-4">Zweryfikowane głosy z portalu ZnanyLekarz oraz Google</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {randomReviews.map((review) => (
            <div key={review.id} className="bg-nova-bg p-8 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-nova-dark font-medium italic mb-6 leading-relaxed">"{review.comment}"</p>
              </div>
              <div className="flex justify-between items-center border-t border-slate-200 pt-4">
                <div>
                  <p className="font-black text-sm text-nova-dark">{review.author}</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{review.date}</p>
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