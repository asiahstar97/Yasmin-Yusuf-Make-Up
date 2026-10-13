import React from 'react';
import { ARTIST_INFO } from '../data/makeupData';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Calculator, MapPin, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();

  const whatsappMessage = encodeURIComponent(
    t(
      'Salam Kak Yasmin! Saya berminat nak tempah makeup natural untuk majlis saya. Boleh semak kekosongan tarikh?',
      'Hi Kak Yasmin! I am interested in booking natural makeup for my event. Could you please check date availability?'
    )
  );
  const whatsappHref = `https://wa.me/${ARTIST_INFO.phoneRaw}?text=${whatsappMessage}`;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20">
      {/* Ambient pink gradient background */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 -z-10 w-[600px] h-[600px] bg-gradient-to-br from-[#F5C3C3]/30 via-pink-100/40 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-0 -z-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#F5C3C3]/20 via-rose-100/30 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Balanced Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Column 1: Editorial Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            {/* Editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#A85868]">
              <span className="flex items-center gap-1.5 bg-[#FFF0F2] text-[#592332] border border-[#F5C3C3] px-3 py-1 rounded-md shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#A85868]" />
                {t('Melaka Tengah & Sekitar', 'Melaka Tengah & Surrounding')}
              </span>
              <span aria-hidden="true" className="text-[#F5C3C3]">·</span>
              <span>{t('Muslimah Friendly', 'Muslimah Friendly')}</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] text-[#592332] font-bold tracking-tight text-balance">
              {t(
                'Natural & Minimalist Makeup With No Fake Lashes',
                'Natural & Minimalist Makeup With No Fake Lashes'
              )}
            </h1>

            {/* Subheading / Value Statement */}
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-xl">
              {t(
                'Solekan anggun dan lembut yang menyerlahkan keunikan wajah sebenar anda tanpa mengubah diri anda. Khusus buat mereka yang sukakan kemasan soft glam, glass skin & second matte yang segar, ringan dan mesra wudhu sepanjang hari.',
                'Graceful, gentle beauty makeup accentuating your authentic features without altering who you are. Tailored for soft glam, glass skin, and lightweight matte finishes that stay fresh and wudhu-friendly all day.'
              )}
            </p>

            {/* Unboxed Metadata Discipline */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-neutral-600 border-y border-[#F5C3C3]/60 py-3.5">
              <span className="font-semibold text-neutral-800">
                {t('1,000+ Klien', '1,000+ Clients')}
              </span>
              <span aria-hidden="true" className="text-[#F5C3C3]">·</span>
              <span className="font-semibold text-neutral-800">
                {t('Sijil Rasmi KKKM', 'KKKM Certified')}
              </span>
              <span aria-hidden="true" className="text-[#F5C3C3]">·</span>
              <span className="font-semibold text-neutral-800">
                {t('Deposit Tetap MYR 50', 'Fixed MYR 50 Deposit')}
              </span>
              <span aria-hidden="true" className="text-[#F5C3C3]">·</span>
              <span className="font-bold text-[#592332]">
                {t('Tiada Bulu Mata Palsu', 'No Fake Lashes')}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-[#4A202A] bg-[#F5C3C3] hover:bg-[#e8b4b4] active:bg-[#dc9f9f] rounded-xl shadow-md hover:shadow-lg transition-all tracking-wide"
              >
                <MessageCircle className="w-4 h-4 text-[#4A202A]" />
                <span>WhatsApp: {ARTIST_INFO.phone}</span>
              </a>

              <a
                href="#kalkulator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#592332] bg-white hover:bg-[#FFF0F2] border-2 border-[#F5C3C3] rounded-xl transition-all shadow-sm"
              >
                <Calculator className="w-4 h-4 text-[#A85868]" />
                <span>{t('Kira Sebut Harga Pantas', 'Instant Price Calculator')}</span>
              </a>
            </div>

            {/* Reassurance note */}
            <p className="text-xs text-neutral-500 italic">
              * {t(
                'Khusus untuk wanita & pengantin perempuan sahaja. Deposit tetap MYR 50 untuk semua pakej.',
                'Dedicated to brides & women only. Fixed MYR 50 deposit for all packages.'
              )}
            </p>
          </div>

          {/* Column 2: Visual Focal Carrier with "Main Photo" */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative luxury frame background */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 bg-gradient-to-tr from-[#F5C3C3]/50 via-pink-200/40 to-rose-100/50 rounded-3xl -rotate-1 blur-sm"
              />

              {/* Main image container: 'Main Photo' as requested */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#F5C3C3] shadow-xl bg-white aspect-[3/4] sm:aspect-[4/5] max-h-[560px]">
                <img
                  src="/src/assets/images/main_photo_1791798686321.jpg"
                  alt="Main Photo - Solekan Pengantin Natural Yasmin Yusuf Melaka"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Editorial photo caption overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-lg font-bold tracking-wide text-white">
                        {t('Natural Soft Glam Bridal', 'Natural Soft Glam Bridal')}
                      </p>
                      <p className="text-xs text-rose-100/90">
                        {t(
                          'Kemasan berseri, segar & bernafas tanpa bulu mata palsu',
                          'Radiant, fresh & breathable finish without fake lashes'
                        )}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold bg-[#F5C3C3] text-[#4A202A] px-2.5 py-1 rounded-md shadow-xs">
                        Melaka Tengah
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating feature card */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#F5C3C3] rounded-xl p-3.5 shadow-lg flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-full bg-[#FFF0F2] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-[#A85868]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-900">
                    {t('Kemasan Segar Tahan Lama', 'Fresh Long-Lasting Finish')}
                  </p>
                  <p className="text-[11px] text-neutral-600">
                    {t(
                      'Sesuai cuaca tropika Melaka, tidak bertompok',
                      'Formulated for Melaka tropical weather, non-cakey'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
