import React from 'react';
import { PRICING_PLANS } from '../data/portfolioData';
import { Check } from 'lucide-react';
import ArrowFillButton from '@/components/ui/arrow-fill-button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-12 sm:py-20 lg:py-32 border-t border-[#26262A]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block text-[11px] sm:text-xs uppercase tracking-widest font-['Space_Grotesk'] font-bold text-[#FF5500] mb-2 sm:mb-3">
            PRICING
          </div>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight">
            Pricing
          </h2>
          <p className="text-[#9A9AA0] text-xs sm:text-base lg:text-lg mt-2 sm:mt-4">
            Transparent, creator-friendly pricing built for consistency and scale.
          </p>
        </div>

        {/* 2-Column Grid on Mobile: Row 1 has 2 cards, Row 2 has 3rd card spanning full width | 3 cols on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const isPopular = plan.isPopular;
            const isThirdCard = index === 2; // Plan 03 spans full row on mobile to fill the empty space

            return (
              <div
                key={plan.id}
                className={`relative p-3 sm:p-5 lg:p-8 rounded-xl sm:rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isThirdCard ? 'col-span-2 lg:col-span-1' : ''
                } ${
                  isPopular
                    ? 'bg-[#1B1B1E] border-2 border-[#FF5500] shadow-[0_0_35px_rgba(255,85,0,0.25)] lg:-translate-y-2'
                    : 'bg-[#141416] border border-[#26262A] hover:border-[#FF5500]/40 hover:shadow-[0_10px_30px_-10px_rgba(255,85,0,0.15)]'
                }`}
              >
                {/* Most popular top pill badge */}
                {isPopular && (
                  <div className="absolute -top-2.5 sm:-top-3.5 left-1/2 -translate-x-1/2 px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF2A00] text-white text-[9px] sm:text-xs font-['Space_Grotesk'] font-extrabold uppercase tracking-wider shadow-md shadow-[#FF5500]/40 whitespace-nowrap select-none">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] sm:text-xs uppercase tracking-wider font-semibold font-['Space_Grotesk'] ${
                        isPopular ? 'text-[#FF5500]' : 'text-[#9A9AA0]'
                      }`}
                    >
                      {plan.planNumber}
                    </span>
                    {isThirdCard && (
                      <span className="lg:hidden text-[10px] font-semibold text-[#FF5500] bg-[#FF5500]/10 px-2 py-0.5 rounded-full uppercase tracking-wider font-['Space_Grotesk']">
                        High-Retention
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-['Space_Grotesk'] text-sm sm:text-lg lg:text-2xl font-bold text-white mt-1 mb-1.5 sm:mb-3">
                    {plan.title}
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 mb-2.5 sm:mb-4 lg:mb-6 pb-2.5 sm:pb-4 lg:pb-6 border-b border-[#26262A]">
                    <span className="font-['Space_Grotesk'] text-lg sm:text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-none">
                      {plan.price}
                    </span>
                    <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-[#9A9AA0] leading-snug">
                      {plan.period}
                    </span>
                  </div>

                  <ul
                    className={
                      isThirdCard
                        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 sm:gap-2.5 lg:gap-3.5 mb-3.5 sm:mb-6 lg:mb-8'
                        : 'space-y-1.5 sm:space-y-2.5 lg:space-y-3.5 mb-3.5 sm:mb-6 lg:mb-8'
                    }
                  >
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start text-[11px] sm:text-xs lg:text-sm text-[#F5F5F5] leading-snug sm:leading-relaxed">
                        <span
                          className={`mr-1.5 sm:mr-3 mt-0.5 flex-shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full flex items-center justify-center ${
                            isPopular ? 'text-[#FF5500] bg-[#FF5500]/10' : 'text-emerald-400 bg-emerald-400/10'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" strokeWidth={2.5} />
                        </span>
                        <span className="break-words">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-1">
                  <ArrowFillButton
                    href="#contact"
                    btnText="Get Started"
                    size="full"
                    bgColor={isPopular ? "#FF5500" : "#1B1B1E"}
                    textColor="#ffffff"
                    fillBgColor="#ffffff"
                    fillTextColor={isPopular ? "#FF5500" : "#0A0A0B"}
                    className={
                      isPopular
                        ? 'shadow-lg shadow-[#FF5500]/30 hover:shadow-[#FF5500]/50 border-[#FF5500]'
                        : 'border-[#26262A] hover:border-[#FF5500]'
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
