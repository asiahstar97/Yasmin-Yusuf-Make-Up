import React from 'react';
import { ARTIST_INFO } from '../data/makeupData';
import { useLanguage } from '../context/LanguageContext';
import { Heart, MessageCircle, Mail, MapPin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#241318] text-neutral-300 py-14 border-t-2 border-[#F5C3C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#F5C3C3]">
              {ARTIST_INFO.name}
            </h3>
            <p className="text-xs tracking-widest uppercase text-white font-semibold">
              {t('Natural Makeup Artist & Hijab Stylist', 'Natural Makeup Artist & Hijab Stylist')}
            </p>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm pt-1">
              {t(
                'Khusus buat mereka yang menghargai solekan natural soft glam, glass skin & second matte tanpa bulu mata palsu. Beroperasi di Melaka Tengah dengan lebih 1,000 klien.',
                'Dedicated to those who love natural soft glam, glass skin, and lightweight matte makeup without fake lashes. Based in Melaka Tengah with over 1,000 satisfied clients.'
              )}
            </p>
            <div className="pt-2 text-xs text-neutral-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F5C3C3]" />
              <span>Melaka Tengah, Melaka, Malaysia</span>
            </div>
          </div>

          {/* Quick Links (Kira Sebut Harga first) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('Pautan Pantas', 'Quick Navigation')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#kalkulator" className="text-[#F5C3C3] font-semibold hover:underline">
                  {t('Kira Sebut Harga', 'Price Calculator')}
                </a>
              </li>
              <li>
                <a href="#pakej" className="hover:text-white transition-colors">
                  {t('Pakej & Senarai Harga', 'Packages & Rate Card')}
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">
                  {t('Tentang MUA', 'About MUA')}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  {t('Galeri Portfolio', 'Portfolio Gallery')}
                </a>
              </li>
              <li>
                <a href="#syarat" className="hover:text-white transition-colors">
                  {t('Terma & Syarat Tempahan', 'Terms & Disclaimer')}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t('Soalan Lazim (FAQ)', 'FAQ')}
                </a>
              </li>
              <li>
                <a href="#statistik" className="hover:text-white transition-colors">
                  {t('Statistik & Pencapaian', 'Key Stats & Milestones')}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('Saluran Rasmi', 'Official Channels')}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={`https://wa.me/${ARTIST_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#F5C3C3] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {ARTIST_INFO.phone}</span>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#F5C3C3] transition-colors"
              >
                <Facebook className="w-4 h-4 text-[#F5C3C3]" />
                <span>Facebook: {ARTIST_INFO.facebook}</span>
              </a>

              <a
                href={`mailto:${ARTIST_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#F5C3C3] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#F5C3C3]" />
                <span>E-mel: {ARTIST_INFO.email}</span>
              </a>

              <div className="pt-2 text-xs text-neutral-400">
                <p>Instagram: {ARTIST_INFO.instagram}</p>
                <p className="mt-1">Sijil Bertauliah KKKM · Deposit Tetap MYR 50</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {ARTIST_INFO.name}. {t('Hak Cipta Terpelihara.', 'All Rights Reserved.')}</p>
          <p className="flex items-center gap-1">
            <span>{t('Sentuhan keanggunan semula jadi', 'Natural timeless grace')}</span>
            <Heart className="w-3.5 h-3.5 text-[#F5C3C3] fill-[#F5C3C3]" />
            <span>Melaka, Malaysia</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
