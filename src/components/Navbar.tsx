import React, { useState, useEffect } from 'react';
import ArrowFillButton from '@/components/ui/arrow-fill-button';
import { MenuBar, NavSectionKey } from '@/components/ui/animated-menu-bar';
import { BRAND_LOGO_IMAGE, CONTACT_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavSelect = (key: NavSectionKey | string) => {
    const targetElement = document.getElementById(key.toLowerCase());
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0B]/92 backdrop-blur-xl border-b border-[#26262A] shadow-2xl shadow-black/80'
          : 'bg-[#0A0A0B]/70 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo & Name */}
        <a
          href="#home"
          id="nav-brand-link"
          className="flex items-center gap-2.5 sm:gap-3 group select-none flex-shrink-0"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-gradient-to-br from-[#FF5500] to-[#FF2A00] flex items-center justify-center shadow-[0_0_20px_rgba(255,85,0,0.35)] group-hover:scale-105 transition-transform flex-shrink-0">
            {/* HTML LOGO IMAGE - user provided logo */}
            <img
              id="navbar-brand-logo"
              src={BRAND_LOGO_IMAGE}
              alt={`${CONTACT_INFO.portfolioName} Logo`}
              width={40}
              height={40}
              loading="eager"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <span className="absolute font-['Space_Grotesk'] font-extrabold text-white text-lg sm:text-xl pointer-events-none">
              K
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Space_Grotesk'] font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-[#FF5500] transition-colors whitespace-nowrap">
              {CONTACT_INFO.portfolioName}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-widest text-[#9A9AA0]">
              Studio
            </span>
          </div>
        </a>

        {/* Center: Animated Interactive Menu Bar (Desktop and Mobile fit without stretching) */}
        <div className="flex items-center justify-center flex-shrink min-w-0 max-w-full">
          <MenuBar
            active={activeSection || 'home'}
            onSelect={handleNavSelect}
            className="scale-90 sm:scale-95 md:scale-100 origin-center"
          />
        </div>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <ArrowFillButton
            href="#contact"
            id="nav-cta-btn"
            btnText="Let's Work Together"
            size="sm"
            bgColor="#FF5500"
            fillBgColor="#ffffff"
            fillTextColor="#FF5500"
            textColor="#ffffff"
            className="shadow-[0_0_25px_rgba(255,85,0,0.35)] hover:shadow-[0_0_35px_rgba(255,85,0,0.6)]"
          />
        </div>

      </div>
    </header>
  );
};
