import React from 'react';
import { BRAND_LOGO_IMAGE, CONTACT_INFO } from '../data/portfolioData';
import { ArrowUp, Send, Instagram, Code2 } from 'lucide-react';

interface FooterProps {
  onOpenCookieSettings?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCookieSettings }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-[#26262A] bg-[#0A0A0B] py-14 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Top Grid Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pb-12 border-b border-[#26262A]/60">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              {/* HTML Logo image - Easy to change in src/data/portfolioData.ts (BRAND_LOGO_IMAGE) */}
              <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-gradient-to-br from-[#FF5500] to-[#FF2A00] flex items-center justify-center flex-shrink-0">
                <img
                  id="footer-brand-logo"
                  src={BRAND_LOGO_IMAGE}
                  alt="Keshav Creates Logo"
                  width={36}
                  height={36}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="absolute font-['Space_Grotesk'] font-extrabold text-white text-lg pointer-events-none">
                  K
                </span>
              </div>
              <span className="font-['Space_Grotesk'] font-bold text-xl text-white tracking-tight">
                {CONTACT_INFO.portfolioName}
              </span>
            </div>
            <p className="text-sm text-[#9A9AA0] max-w-sm">
              {CONTACT_INFO.tagline} {CONTACT_INFO.servicesSummary}
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#9A9AA0] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to top - Google Drive links and icon removed */}
          <div className="flex items-center gap-3">
            <a
              href={CONTACT_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram @YTKeshav"
              title="Telegram @YTKeshav"
              className="w-10 h-10 rounded-xl bg-[#141416] border border-[#26262A] flex items-center justify-center text-[#9A9AA0] hover:text-[#2AABEE] hover:border-[#2AABEE] transition-colors"
            >
              <Send className="w-4 h-4" />
            </a>

            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @YTKeshav"
              title="Instagram @YTKeshav"
              className="w-10 h-10 rounded-xl bg-[#141416] border border-[#26262A] flex items-center justify-center text-[#9A9AA0] hover:text-[#FD1D1D] hover:border-[#FD1D1D] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-xl bg-[#1B1B1E] border border-[#26262A] flex items-center justify-center text-white hover:border-[#FF5500] hover:text-[#FF5500] transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Section with Copyright, Cookie Preferences & Developer Watermark */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9A9AA0]">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Keshav Creates. All rights reserved.</span>
            {onOpenCookieSettings && (
              <button
                type="button"
                onClick={onOpenCookieSettings}
                className="hover:text-white hover:underline transition-colors cursor-pointer text-[#9A9AA0]"
                title="Manage cookie consent preferences"
              >
                Cookie Preferences
              </button>
            )}
          </div>

          {/* Developer Watermark Requested by User - Redirects to https://editor-nishant.vercel.app/ */}
          <a
            id="developer-watermark"
            href="https://editor-nishant.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Nishant singh's website - https://editor-nishant.vercel.app/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141416] border border-[#26262A] text-[#9A9AA0] hover:border-[#FF5500]/60 hover:text-white transition-all group cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5 text-[#FF5500] group-hover:rotate-12 transition-transform" />
            <span>
              Crafted by <strong className="font-semibold text-white tracking-wide group-hover:text-[#FF5500] transition-colors">Nishant singh</strong>
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
};
