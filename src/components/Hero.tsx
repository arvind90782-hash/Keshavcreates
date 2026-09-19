import React, { useRef, useState } from 'react';
import { Send } from 'lucide-react';
import ArrowFillButton from '@/components/ui/arrow-fill-button';
import HeroText from '@/components/ui/hero-shutter-text';
import { CONTACT_INFO, BRAND_LOGO_IMAGE } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [btn1Pos, setBtn1Pos] = useState({ x: 0, y: 0 });
  const [btn2Pos, setBtn2Pos] = useState({ x: 0, y: 0 });
  const btn1Ref = useRef<HTMLAnchorElement>(null);
  const btn2Ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement>,
    ref: React.RefObject<HTMLAnchorElement | null>,
    setPos: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.2;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
    setPos({ x, y });
  };

  const handleMouseLeave = (
    setPos: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden select-none"
    >
      {/* Ambient Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[550px] lg:w-[1000px] lg:h-[750px] bg-[radial-gradient(circle,rgba(255,85,0,0.16)_0%,rgba(10,10,11,0)_70%)] pointer-events-none blur-3xl opacity-80" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-[#FF5500]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow Label with Creator Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1B1B1E] border border-[#26262A] shadow-md shadow-black/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5500] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5500]"></span>
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-widest font-['Space_Grotesk'] font-bold text-gradient">
              {CONTACT_INFO.servicesSummary.toUpperCase()}
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141416] border border-[#26262A] text-xs text-[#9A9AA0]">
            <img
              src={BRAND_LOGO_IMAGE}
              alt="Keshav Creates"
              className="w-4 h-4 rounded-full object-cover"
            />
            <span className="text-white font-medium">{CONTACT_INFO.portfolioName}</span>
            <span className="text-emerald-400 font-semibold">• Active</span>
          </div>
        </div>

        {/* Giant Hero Typography with Animated Shutter Text */}
        <div className="mb-6 sm:mb-8">
          <HeroText />
        </div>

        {/* Sub-content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 id="hero-main-heading" className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
              Keshav Creates — YouTube Growth Designer
            </h1>
            <p className="text-lg sm:text-xl font-medium text-white mb-3">
              {CONTACT_INFO.tagline}
            </p>
            <p className="text-base sm:text-lg text-[#9A9AA0] max-w-2xl font-normal leading-relaxed mb-8">
              Freelance thumbnail designer, graphic designer, and script writer crafting scroll-stopping visuals engineered to capture clicks and boost creator retention.
            </p>

            {/* Interactive Magnetic CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <div
                ref={btn1Ref as any}
                onMouseMove={(e: any) => handleMouseMove(e, btn1Ref, setBtn1Pos)}
                onMouseLeave={() => handleMouseLeave(setBtn1Pos)}
                style={{
                  transform: `translate(${btn1Pos.x}px, ${btn1Pos.y}px)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="inline-block"
              >
                <ArrowFillButton
                  href="#work"
                  id="hero-work-btn"
                  btnText="View My Work"
                  size="md"
                  bgColor="#FF5500"
                  fillBgColor="#ffffff"
                  fillTextColor="#FF5500"
                  textColor="#ffffff"
                  className="shadow-[0_0_30px_rgba(255,85,0,0.35)] hover:shadow-[0_0_45px_rgba(255,85,0,0.6)]"
                />
              </div>

              <div
                ref={btn2Ref as any}
                onMouseMove={(e: any) => handleMouseMove(e, btn2Ref, setBtn2Pos)}
                onMouseLeave={() => handleMouseLeave(setBtn2Pos)}
                style={{
                  transform: `translate(${btn2Pos.x}px, ${btn2Pos.y}px)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="inline-block"
              >
                <ArrowFillButton
                  href={CONTACT_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-telegram-btn"
                  btnText="Message on Telegram"
                  size="md"
                  bgColor="#141416"
                  textColor="#F5F5F5"
                  fillBgColor="#2AABEE"
                  fillTextColor="#ffffff"
                  arrowColor="#FF5500"
                  hoverArrowColor="#ffffff"
                  className="border-[#26262A] hover:border-[#2AABEE]"
                  icon={<Send className="w-4 h-4 text-[#FF5500] group-hover:text-white transition-colors" />}
                />
              </div>
            </div>
          </div>

          {/* Quick Highlight Status Card */}
          <div className="lg:col-span-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#141416] border border-[#26262A] backdrop-blur-md flex items-center justify-between shadow-xl shadow-black/40">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-white">Available for Work</span>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/25">
                Q1 / Q2 Booking
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
