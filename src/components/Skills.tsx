import React from 'react';
import { SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 sm:py-20 lg:py-32 border-t border-[#26262A]/60 bg-[#0E0E10]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block text-[11px] sm:text-xs uppercase tracking-widest font-['Space_Grotesk'] font-bold text-[#FF5500] mb-2 sm:mb-3">
            SKILLS
          </div>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight">
            What I Do Best
          </h2>
          <p className="text-[#9A9AA0] text-xs sm:text-base lg:text-lg mt-2 sm:mt-4">
            Mastering the exact craft required to make viewers pause, click, and stay hooked on your videos.
          </p>
        </div>

        {/* 2-Column Responsive Grid on Mobile: 2 cols x 2 rows (4 cards in viewport) | 3 cols on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-6">
          {SKILLS.map((skill, index) => {
            const isWide = index === 6; // 07 Curiosity-Driven Concepts spans full width row
            return (
              <div
                key={skill.number}
                className={`p-3 sm:p-5 lg:p-8 rounded-xl sm:rounded-2xl bg-[#141416] border border-[#26262A] hover:border-[#FF5500]/50 hover:shadow-[0_10px_30px_-10px_rgba(255,85,0,0.18)] transition-all duration-300 group flex flex-col justify-between ${
                  isWide ? 'col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div className={isWide ? 'flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6' : ''}>
                  <span className="font-['Space_Grotesk'] text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#26262A] group-hover:text-[#FF5500] transition-colors select-none leading-none">
                    {skill.number}
                  </span>
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xs sm:text-base lg:text-xl font-bold text-white mt-1.5 sm:mt-3 lg:mt-4 mb-1 sm:mb-2 group-hover:text-white transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs lg:text-sm text-[#9A9AA0] leading-snug sm:leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
