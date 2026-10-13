import React from 'react';
import { ARTIST_INFO } from '../data/makeupData';
import { useLanguage } from '../context/LanguageContext';
import { Award, Feather, Droplets, Shield, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="tentang" className="py-20 bg-white border-y border-[#F5C3C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side: Studio & Cosmetic Flatlay */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-2 bg-gradient-to-tr from-[#F5C3C3]/40 via-pink-100 to-amber-50 rounded-3xl -rotate-2"
              />
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#F5C3C3] shadow-lg aspect-[4/3] bg-rose-50">
                <img
                  src="/src/assets/images/artist_studio_flatlay_1791792157028.jpg"
                  alt="Meja Solek & Alatan Kosmetik Halal Yasmin Yusuf"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                  <p className="font-serif text-lg font-bold">
                    {t('Halal, Bersih & Mesra Wudhu', 'Halal, Sanitized & Wudhu-Friendly')}
                  </p>
                  <p className="text-xs text-rose-100/90">
                    {t(
                      'Setiap alatan disanitasi sebelum setiap sesi klien',
                      'Tools and brushes sanitized before every client session'
                    )}
                  </p>
                </div>
              </div>

              {/* Verified Certificate Tag */}
              <div className="mt-4 p-4 rounded-2xl bg-[#FFF0F2] border border-[#F5C3C3] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5C3C3] text-[#4A202A] flex items-center justify-center shrink-0 font-bold">
                  <Award className="w-5 h-5 text-[#4A202A]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-900">
                    {t('MUA Bertauliah Sijil KKKM', 'Certified Professional (KKKM Certificate)')}
                  </p>
                  <p className="text-[11px] text-neutral-600">
                    {t(
                      'Kemahiran Kejururawatan & Kecantikan Komuniti',
                      'Malaysian Community Skills & Beauty Artistry Certification'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Philosophy Side */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold tracking-widest uppercase text-[#A85868]">
                {t('Tentang MUA & Hijab Stylist', 'About the Artist & Hijab Stylist')}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#592332] font-bold tracking-tight text-balance">
                {t(
                  '"Kekalkan keaslian wajah anda, serlahkan pesona paling anggun."',
                  '"Preserve your authentic beauty, accentuate your most graceful charm."'
                )}
              </h2>
            </div>

            <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
              <p>
                {t(
                  'Saya Yasmin Yusuf, Makeup Artist dan Hijab Stylist dari Melaka Tengah. Telah menyolek lebih daripada 1,000 orang klien merangkumi majlis akad nikah, persandingan, pertunangan, konvokesyen serta majlis makan malam.',
                  'I am Yasmin Yusuf, a Makeup Artist and Hijab Stylist based in Melaka Tengah. Having dolled up over 1,000 clients spanning solemnizations (nikah), wedding receptions, engagements, convocations, and gala dinners.'
                )}
              </p>
              <p>
                {t(
                  'Kepakaran utama saya adalah solekan semula jadi (natural beauty makeup) seperti soft glam, glass skin, dan second matte finish. Tanda pengenalan kerja saya adalah solekan yang disesuaikan mengikut keunikan bentuk wajah, tona kulit serta kehendak peribadi anda — tanpa mengubah siapa diri anda.',
                  'My signature artistry centers on natural beauty makeup such as soft glam, radiant glass skin, and skin-like matte finishes. Every look is custom-tailored to accentuate your unique facial contours and skin undertones.'
                )}
              </p>
              <p>
                {t(
                  'Teknik solekan saya menggabungkan teori warna (color theory) yang tepat dan persiapan kulit mendalam (skin prepping) bersama produk halal mesra wudhu. Hasilnya, solekan kelihatan segar, ringan, tidak bercapuk walau dalam cuaca panas Melaka.',
                  'My technique unites precise color theory with thorough skin hydration prep and certified halal cosmetics. The outcome is lightweight, fresh, and melt-proof in tropical weather without cakey layers.'
                )}
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-[#FFF8FA] border border-[#F5C3C3] space-y-1.5">
                <div className="flex items-center gap-2 text-[#592332] font-bold text-sm">
                  <Feather className="w-4 h-4 text-[#A85868]" />
                  <span>{t('Tanpa Bulu Mata Palsu', 'Zero Fake Lashes Policy')}</span>
                </div>
                <p className="text-xs text-neutral-600">
                  {t(
                    'Melentik bulu mata asli dengan rapi. Ringan pada mata dan kelihatan manis bersahaja.',
                    'Gently curls your natural lashes. Weightless on eyes and naturally flattering.'
                  )}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF8FA] border border-[#F5C3C3] space-y-1.5">
                <div className="flex items-center gap-2 text-[#592332] font-bold text-sm">
                  <Droplets className="w-4 h-4 text-[#A85868]" />
                  <span>{t('Skin Prepping & Mesra Wudhu', 'Skin Prep & Wudhu Friendly')}</span>
                </div>
                <p className="text-xs text-neutral-600">
                  {t(
                    'Kulit dihidrasi secukupnya supaya solekan melekat halus dan mudah dicuci bila berwudhu.',
                    'Deep hydration prep ensuring fine adhesion that cleanses easily for prayers.'
                  )}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF8FA] border border-[#F5C3C3] space-y-1.5">
                <div className="flex items-center gap-2 text-[#592332] font-bold text-sm">
                  <Shield className="w-4 h-4 text-[#A85868]" />
                  <span>{t('Muslimah Friendly Khusus Wanita', 'Muslimah Friendly & Women Only')}</span>
                </div>
                <p className="text-xs text-neutral-600">
                  {t(
                    'MUA hanya berkhidmat untuk pengantin perempuan dan wanita. Menjaga aurat & keselesaan.',
                    'MUA strictly services brides and women only, honoring modesty and full privacy.'
                  )}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF8FA] border border-[#F5C3C3] space-y-1.5">
                <div className="flex items-center gap-2 text-[#592332] font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-[#A85868]" />
                  <span>{t('Deposit Tetap MYR 50', 'Fixed MYR 50 Deposit')}</span>
                </div>
                <p className="text-xs text-neutral-600">
                  {t(
                    'Kunci tarikh dengan deposit tetap MYR 50 sahaja bagi semua jenis pakej.',
                    'Secure your slot with a fixed MYR 50 deposit for any package.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
