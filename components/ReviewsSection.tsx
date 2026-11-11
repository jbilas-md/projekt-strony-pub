import { getRelativeDate } from '@/app/lib/formatDate';
import type { Review } from '@/app/lib/reviews';

export default function ReviewsSection({ reviews = [] }: { reviews?: Review[] }) {
  const visibleReviews = reviews.slice(0, 3);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight italic text-nova-dark md:text-4xl">
            Opinie pacjentów
          </h2>
          <p className="mt-4 font-medium text-slate-500">
            Zweryfikowane głosy z portalu ZnanyLekarz oraz Google
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {visibleReviews.map((review) => (
            <article
              key={review.id}
              className="flex flex-col justify-between rounded-[2.5rem] border border-slate-100 bg-nova-bg p-8 transition-all hover:shadow-xl"
            >
              <div>
                <div className="mb-4 flex text-xs text-amber-400" aria-label={`Ocena: ${review.rating} na 5`}>
                  {Array.from({ length: review.rating }, (_, index) => (
                    <span key={index} aria-hidden="true">★</span>
                  ))}
                </div>
                <p className="mb-6 font-medium italic leading-relaxed text-nova-dark">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                <div>
                  <p className="text-sm font-black text-nova-dark">{review.author}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {getRelativeDate(review.date)}
                  </p>
                </div>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-black uppercase text-slate-500">
                  {review.source}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
