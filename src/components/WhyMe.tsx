import React from 'react';
import { WHY_ME_ITEMS } from '../data/portfolioData';
import { Eye, UserCheck, Layers, CheckCircle } from 'lucide-react';

export const WhyMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'eye':
        return <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5500]" />;
      case 'user':
        return <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5500]" />;
      case 'layers':
        return <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5500]" />;
      case 'check':
        return <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5500]" />;
      default:
        return <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5500]" />;
    }
  };

  return (
    <section id="why-me" className="py-12 sm:py-20 lg:py-32 border-t border-[#26262A]/60 bg-[#0E0E10]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block text-[11px] sm:text-xs uppercase tracking-widest font-['Space_Grotesk'] font-bold text-[#FF5500] mb-2 sm:mb-3">
            WHY CHOOSE ME
          </div>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight">
            Why Creators Trust My Visuals
          </h2>
          <p className="text-[#9A9AA0] text-xs sm:text-base lg:text-lg mt-2 sm:mt-4">
            Designed for real channel impact, viewer psychology, and long-term brand equity.
          </p>
        </div>

        {/* 2-Column Responsive Grid on Mobile: 2 cols x 2 rows (4 cards in viewport) | 4 cols on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {WHY_ME_ITEMS.map((item) => (
            <div
              key={item.title}
              className="p-3 sm:p-5 lg:p-7 rounded-xl sm:rounded-2xl bg-[#141416] border border-[#26262A] hover:border-[#FF5500]/50 hover:shadow-[0_10px_30px_-10px_rgba(255,85,0,0.15)] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-[#1B1B1E] border border-[#26262A] flex items-center justify-center mb-2.5 sm:mb-4 lg:mb-6 group-hover:border-[#FF5500] transition-colors shrink-0">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-['Space_Grotesk'] text-xs sm:text-base lg:text-xl font-bold text-white mb-1 sm:mb-2 lg:mb-3">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs lg:text-sm text-[#9A9AA0] leading-snug sm:leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
