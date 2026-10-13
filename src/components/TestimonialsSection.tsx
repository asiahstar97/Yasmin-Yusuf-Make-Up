import React from 'react';
import { TESTIMONIALS } from '../data/makeupData';
import { useLanguage } from '../context/LanguageContext';
import { Star, MessageSquareQuote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-20 bg-[#FFF8FA] border-t border-[#F5C3C3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-[#A85868]">
            {t('Maklum Balas Pelanggan', 'Client Feedback')}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#592332] font-bold tracking-tight">
            {t('Testimoni Sebenar Klien', 'Client Testimonials')}
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            {t(
              'Ulasan jujur dan ikhlas daripada klien mengenai hasil solekan, ketahanan dan keselesaan bersama Yasmin Yusuf.',
              'Genuine reviews and sincere feedback from clients about makeup results, long-wear performance, and comfort.'
            )}
          </p>
        </div>

        {/* Testimonials Grid: 4 Cards showing Rating (5 stars), Testimonial text, and Name only */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((tItem) => (
            <div
              key={tItem.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-[#F5C3C3] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* 5 Stars Rating Only */}
                <div className="flex items-center gap-1">
                  {[...Array(tItem.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5C3C3] text-[#E0A0A0]" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                  "{tItem.review[lang]}"
                </p>
              </div>

              {/* Name Only */}
              <div className="pt-3 border-t border-[#F5C3C3]/50">
                <p className="font-serif text-base sm:text-lg font-bold text-[#592332]">
                  {tItem.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
