import React from 'react';
import { ARTIST_INFO } from '../data/makeupData';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Instagram, MapPin, MessageCircle, Facebook } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const whatsappHref = `https://wa.me/${ARTIST_INFO.phoneRaw}?text=${encodeURIComponent(
    t(
      'Salam Kak Yasmin! Saya berminat untuk dapatkan info lanjut tentang slot makeup.',
      'Hi Kak Yasmin! I would like to get more information regarding available makeup slots.'
    )
  )}`;

  return (
    <section id="kontak" className="py-20 bg-[#FFF5F7] border-t border-[#F5C3C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#A85868]">
                {t('Hubungi Makeup Artist', 'Contact the Makeup Artist')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#592332] font-bold tracking-tight">
                {t('Mari Berhubung Untuk Hari Bahagia Anda', 'Let Us Connect For Your Special Day')}
              </h2>
            </div>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              {t(
                'Jadikan detik perkahwinan, pertunangan atau acara istimewa anda kenangan terindah dengan sentuhan solekan semula jadi yang berseri dan selesa. Tempahan awal amat disarankan!',
                'Make your wedding, engagement, or gala event an unforgettable memory with radiant, comfortable, and natural makeup. Early booking is advised!'
              )}
            </p>

            <div className="space-y-4 pt-2">
              {/* WhatsApp Card */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border-2 border-[#F5C3C3] shadow-sm hover:shadow-md hover:border-[#E8B4B4] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F5C3C3] text-[#4A202A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <MessageCircle className="w-6 h-6 text-[#4A202A]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#592332]">
                    {t('WhatsApp Rasmi (Utama)', 'Official WhatsApp (Direct)')}
                  </p>
                  <p className="font-serif text-lg font-bold text-neutral-900 group-hover:text-[#592332] transition-colors">
                    {ARTIST_INFO.phone}
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    {t('Klik untuk terus berhubung di WhatsApp', 'Click to chat directly on WhatsApp')}
                  </p>
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border-2 border-[#F5C3C3] shadow-sm hover:shadow-md hover:border-[#E8B4B4] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0F2] text-[#592332] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5C3C3]">
                  <Facebook className="w-6 h-6 text-[#592332]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#592332]">
                    {t('Facebook Rasmi', 'Official Facebook')}
                  </p>
                  <p className="text-sm font-bold text-neutral-900 group-hover:text-[#592332] transition-colors">
                    {ARTIST_INFO.facebook}
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    {t('Halaman rasmi Facebook MUA', 'Official MUA Facebook page')}
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${ARTIST_INFO.email}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border-2 border-[#F5C3C3] shadow-sm hover:shadow-md hover:border-[#E8B4B4] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0F2] text-[#592332] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#F5C3C3]">
                  <Mail className="w-6 h-6 text-[#592332]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#592332]">
                    {t('E-mel Hubungan', 'Contact Email')}
                  </p>
                  <p className="text-sm font-bold text-neutral-900 group-hover:text-[#592332] transition-colors">
                    {ARTIST_INFO.email}
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    {t('Untuk pertanyaan formal atau jemputan', 'For formal inquiries or invites')}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Card & Social Channels */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#F5C3C3] shadow-xl relative overflow-hidden space-y-6">
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 bg-gradient-to-br from-[#F5C3C3]/40 to-pink-100 rounded-full blur-2xl pointer-events-none"
              />

              <div className="space-y-2">
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#A85868]">
                  {t('Saluran Media Sosial', 'Social Media Channels')}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#592332]">
                  {t('Ikuti Kami di Instagram', 'Follow Us on Instagram')}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {t(
                    'Tonton video solekan sebelum & selepas (before & after), tips penjagaan kulit sebelum hari majlis, serta ulasan pengantin terkini.',
                    'Watch before-and-after bridal transformation reels, skincare prep guides, and recent client feedback.'
                  )}
                </p>
              </div>

              {/* Social Accounts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FFF0F2] border border-[#F5C3C3] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5C3C3] text-[#4A202A] flex items-center justify-center shrink-0 font-bold">
                    <Instagram className="w-5 h-5 text-[#4A202A]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">{ARTIST_INFO.instagram}</p>
                    <p className="text-[11px] text-neutral-500">
                      {t('Instagram Rasmi', 'Official Instagram')}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFF0F2] border border-[#F5C3C3] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5C3C3] text-[#4A202A] flex items-center justify-center shrink-0 font-bold">
                    <Facebook className="w-5 h-5 text-[#4A202A]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">{ARTIST_INFO.facebook}</p>
                    <p className="text-[11px] text-neutral-500">
                      {t('Facebook Rasmi', 'Official Facebook')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Fast Booking CTA Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FFF0F2] via-pink-50 to-[#FFF8FA] border border-[#F5C3C3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-base font-bold text-[#592332]">
                    {t('Kunci Tarikh Majlis Anda Sekarang', 'Lock Your Wedding Date Now')}
                  </p>
                  <p className="text-xs text-neutral-600">
                    {t('Deposit tetap MYR 50 sahaja untuk semua pakej.', 'Fixed deposit of MYR 50 only for any package.')}
                  </p>
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#F5C3C3] text-[#4A202A] text-xs font-bold hover:bg-[#e8b4b4] transition-all whitespace-nowrap shadow-sm"
                >
                  {t('WhatsApp Sekarang', 'WhatsApp Now')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
