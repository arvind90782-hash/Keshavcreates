import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-12 sm:py-20 lg:py-32 border-t border-[#26262A]/60 bg-[#0E0E10]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block text-[11px] sm:text-xs uppercase tracking-widest font-['Space_Grotesk'] font-bold text-[#FF5500] mb-2 sm:mb-3">
            MY PROCESS
          </div>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight">
            From Idea to Final Result
          </h2>
          <p className="text-[#9A9AA0] text-xs sm:text-base lg:text-lg mt-2 sm:mt-4">
            A systematic framework that eliminates guesswork and delivers scroll-stopping assets every single time.
          </p>
        </div>

        {/* 2-Column Responsive Grid on Mobile: 2 cols x 2 rows (4 cards in viewport) | 3 cols on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-3 sm:p-5 lg:p-7 rounded-xl sm:rounded-2xl bg-[#141416] border border-[#26262A] hover:border-[#FF5500]/50 hover:shadow-[0_10px_30px_-10px_rgba(255,85,0,0.15)] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                  <span className="font-['Space_Grotesk'] font-bold text-[10px] sm:text-xs uppercase tracking-wider text-[#FF5500]">
                    Step {step.number}
                  </span>
                  <span className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-[#1B1B1E] flex items-center justify-center text-[10px] sm:text-xs font-['Space_Grotesk'] font-bold text-white border border-[#26262A] group-hover:border-[#FF5500] group-hover:text-[#FF5500] transition-colors shrink-0">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-xs sm:text-base lg:text-xl font-bold text-white mb-1 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-[11px] sm:text-xs lg:text-sm text-[#9A9AA0] leading-snug sm:leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
